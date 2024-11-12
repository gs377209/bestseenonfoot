import { BASE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: BASE_URL,
    rules: {
      allow: "/",
      crawlDelay: 30,
      disallow: ["/private/", "/private", "/contact-us/", "/contact-us"],
      userAgent: "*",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
