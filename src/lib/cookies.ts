"use server";

import { cookies } from "next/headers";

export async function setConsentCookie(value: "true" | "false") {
  cookies().set("consentGranted", value);
}

export async function getConsentCookie() {
  return cookies().get("consentGranted")?.value === "true";
}
