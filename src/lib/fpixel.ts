import { FACEBOOK_PIXEL_ID } from "./constants";

export const FB_PIXEL_ID = FACEBOOK_PIXEL_ID;

export const pageview = () => {
  // @ts-expect-error
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
// @ts-expect-error
export const event = (name, options = {}) => {
  // @ts-expect-error
  window.fbq("track", name, options);
};
