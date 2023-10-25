import { GOOGLE_ANALYTICS_ID } from "./constants";

export const GA_TRACKING_ID = GOOGLE_ANALYTICS_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-expect-error
  window?.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value: string;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GtagEvent) => {
  // @ts-expect-error
  window?.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
