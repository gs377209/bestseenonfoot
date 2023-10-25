import { FACEBOOK_PIXEL_ID } from "./constants";

export const FB_PIXEL_ID = FACEBOOK_PIXEL_ID;

export const pageview = () => {
  // @ts-expect-error
  window?.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  // @ts-expect-error
  window?.fbq("track", name, options);
};
