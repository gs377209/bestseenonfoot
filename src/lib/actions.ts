"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

export interface ContactFormState {
  errorList?: string[];
  isError: boolean;
  message: string | null;
}

const schema = z.object({
  Email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email({ message: "Email is invalid" })
    .trim()
    .min(1, { message: "Email must be 1 or more characters long" }),
  Message: z
    .string({
      invalid_type_error: "Message must be a string",
      required_error: "Message is required",
    })
    .trim()
    .min(2, { message: "Message must be 2 or more characters long" }),
  Name: z
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
    Email: formData.get("email"),
    Message: formData.get("message"),
    Name: formData.get("name"),
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
    // https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
    // original from: http://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
    // original gist: https://gist.github.com/willpatera/ee41ae374d3c9839c2d6
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbw1XPnt5cBSOEd3Uu7rbm5s-NvoDew_IE67mMezJZqwnZqOJBPaYIguZPz_CXlh6o78lA/exec`,
      {
        body: JSON.stringify(paresResult.data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    );

    const json = await response.json();
    if (!response.ok) {
      console.error("Error: ", json);
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
