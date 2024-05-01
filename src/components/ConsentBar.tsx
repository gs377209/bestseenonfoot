"use client";

import { GOOGLE_TAG_MANAGER_ID } from "@/lib/constants";
import { setConsentCookie } from "@/lib/cookies";
import { GoogleTagManager } from "@next/third-parties/google";
import { useState } from "react";
import CookieConsent, { OPTIONS } from "react-cookie-consent";

interface Props {
  consentGranted: boolean;
}

export default function ConsentBar({ consentGranted }: Props) {
  const [localConsentGranted, setLocalConsentGranted] =
    useState(consentGranted);

  return (
    <>
      <CookieConsent
        cookieName="consentGranted"
        buttonText="I understand"
        onAccept={() => {
          setConsentCookie("true");
          setLocalConsentGranted(true);

          function gtag() {
            window?.dataLayer?.push(arguments);
          }

          // @ts-ignore
          gtag("consent", "update", {
            ad_personalization: "granted",
            ad_storage: "granted",
            ad_user_data: "granted",
            analytics_storage: "granted",
          });
        }}
        enableDeclineButton
        declineButtonText="I decline"
        onDecline={() => {
          function gtag() {
            window?.dataLayer?.push(arguments);
          }

          // @ts-ignore
          gtag("consent", "update", {
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
          });

          setConsentCookie("false");
          setLocalConsentGranted(false);
        }}
        flipButtons
        disableStyles
        location={OPTIONS.BOTTOM}
        containerClasses="bg-neutral-800 fixed prose w-screen max-w-full min-h-20 flex flex-row flex-wrap justify-between align-center items-baseline space-y-4 space-x-4 p-4"
        contentClasses="text-white"
        buttonWrapperClasses="flex flex-row flex-wrap justify-end align-center items-baseline space-y-4 space-x-4"
        buttonClasses="inline-flex max-w-xs items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-emerald-400"
        declineButtonClasses="inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400"
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      {localConsentGranted && (
        <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID ?? ""} />
      )}
    </>
  );
}
