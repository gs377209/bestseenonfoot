import { MetadataRoute } from "next";
import { BASE_URL } from "src/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: "/private/",
      userAgent: "*",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
