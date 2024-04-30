"use server";

import * as ContactSubmissionRepository from "@/database/ContactSubmissionRepository";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

export interface ContactFormState {
  errorList?: string[];
  isError: boolean;
  message: string | null;
}

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email({ message: "Email is invalid" })
    .trim()
    .min(1, { message: "Email must be 1 or more characters long" }),
  message: z
    .string({
      invalid_type_error: "Message must be a string",
      required_error: "Message is required",
    })
    .trim()
    .min(2, { message: "Message must be 2 or more characters long" }),
  name: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    })
    .trim()
    .min(1, { message: "Name must be 1 or more characters long" }),
});

export async function sendContactRequest(
  prevState: ContactFormState,
  formData: FormData,
) {
  const paresResult = schema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
    name: formData.get("name"),
  });

  if (!paresResult.success) {
    console.error("Form Errors: ", paresResult.error);
    const formattedErrors = paresResult.error.flatten();

    return {
      errorList: [
        ...formattedErrors.formErrors,
        ...Object.values(formattedErrors.fieldErrors).flatMap(
          (errors) => errors,
        ),
      ],
      isError: true,
      message: `Please correct the issues listed below`,
    };
  }

  try {
    const response = await ContactSubmissionRepository.createContactSubmission(
      paresResult.data,
    );

    if (!response) {
      console.error("Error: ", response);
      return {
        isError: true,
        message: `Seems like something is wrong; feel free to email us directly at bestseenonfoot@gmail.com`,
      };
    }
  } catch (error) {
    console.error("Error: ", error);
    return {
      isError: true,
      message: `Seems like something is wrong; feel free to email us directly at bestseenonfoot@gmail.com`,
    };
  }

  revalidatePath("/contact-us");
  return {
    isError: false,
    message:
      "Thanks for your message! We will get back to you as soon as possible!",
  };
}

export async function setConsentCookie(value: "true" | "false") {
  cookies().set("consentGranted", value);
}

export async function getConsentCookie() {
  return cookies().get("consentGranted")?.value === "true";
}
