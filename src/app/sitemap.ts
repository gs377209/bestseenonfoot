import { Post } from "@/interfaces/post";
import { generateRssFeed, getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { parseISO } from "date-fns";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPosts(["date", "slug", "tags", "location"]) as Post[];
  const uniqueTags = new Set<string>();
  const locationUrls = new Set<string>();
  const dateUrls = new Set<string>();
  allPosts.forEach((post) => {
    post.tags.forEach((tag: string) => uniqueTags.add(tag));
    post.location.url.split("/").forEach((path, i, paths) => {
      if (i > 0) {
        locationUrls.add([...paths.slice(0, i), path].join("/"));
      } else {
        locationUrls.add(path);
      }
    });
    const date = parseISO(post.date);
    dateUrls.add(date.getFullYear().toString());
    dateUrls.add(
      date.getFullYear().toString() + "/" + (date.getMonth() + 1).toString(),
    );
    dateUrls.add(
      date.getFullYear().toString() +
        "/" +
        (date.getMonth() + 1).toString() +
        "/" +
        date.getDate().toString(),
    );
  });

  const postSiteMapData = allPosts.map(({ slug, date }) => {
    return {
      lastModified: parseISO(date),
      url: `${BASE_URL}/posts/${slug}`,
    };
  });

  const archiveSiteMapData = Array.from(dateUrls).map((dateUrl) => {
    return {
      lastModified: new Date(),
      url: `${BASE_URL}/archives/${dateUrl}`,
    };
  });

  const locationSiteMapData = Array.from(locationUrls).map((locationUrl) => {
    return {
      lastModified: new Date(),
      url: `${BASE_URL}/locations/${locationUrl}`,
    };
  });

  const tagSiteMapData = Array.from(uniqueTags).map((tag) => {
    return {
      lastModified: new Date(),
      url: `${BASE_URL}/tags/${encodeURIComponent(tag)}`,
    };
  });

  generateRssFeed();

  return [
    {
      lastModified: new Date(),
      url: BASE_URL,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/about-us`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/contact-us`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/privacy-policy`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/search-results`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/where-weve-been`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/authors`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/authors/gerrod`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/authors/lauren`,
    },
    {
      lastModified: new Date(),
      url: `${BASE_URL}/archives`,
    },
    ...archiveSiteMapData,
    {
      lastModified: new Date(),
      url: `${BASE_URL}/locations`,
    },
    ...locationSiteMapData,
    {
      lastModified: new Date(),
      url: `${BASE_URL}/tags`,
    },
    ...tagSiteMapData,
    {
      lastModified: new Date(),
      url: `${BASE_URL}/posts`,
    },
    ...postSiteMapData,
  ];
}
