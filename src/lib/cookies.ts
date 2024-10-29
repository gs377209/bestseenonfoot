"use server";

import { cookies } from "next/headers";

export async function setConsentCookie(value: "true" | "false") {
  (await cookies()).set("consentGranted", value);
}

export async function getConsentCookie() {
  return (await cookies()).get("consentGranted")?.value === "true";
}
