export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";
export const SITE_LOGO = process.env.NEXT_PUBLIC_SITE_LOGO ?? "";
export const HOME_OG_IMAGE_URL = BASE_URL + SITE_LOGO;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_TAG_MANAGER_ID =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const GOOGLE_OPTIMIZE_ID = process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID;
export const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? "";
export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
