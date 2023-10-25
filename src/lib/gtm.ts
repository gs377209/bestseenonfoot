import { GOOGLE_TAG_MANAGER_ID } from "./constants";

export const GTM_ID = GOOGLE_TAG_MANAGER_ID;

export const pageview = (url: string) => {
  // @ts-expect-error
  window?.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
