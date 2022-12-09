import { parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import PostType from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import { BASE_URL } from "../lib/constants";

function generateSiteMap(
  posts: PostType[],
  tags: string[],
  locationUrls: string[],
  dateUrls: string[]
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
      </url>
      <url>
        <loc>${BASE_URL}/404</loc>
      </url>
      <url>
        <loc>${BASE_URL}/500</loc>
      </url>
      <url>
        <loc>${BASE_URL}/about-us</loc>
      </url>
      <url>
        <loc>${BASE_URL}/contact-us</loc>
      </url>
      <url>
        <loc>${BASE_URL}/privacy-policy</loc>
      </url>
       <url>
        <loc>${BASE_URL}/search-results</loc>
      </url>
      <url>
        <loc>${BASE_URL}/where-weve-been</loc>
      </url>
      <url>
        <loc>${BASE_URL}/authors</loc>
      </url>
      <url>
        <loc>${BASE_URL}/authors/gerrod</loc>
      </url>
      <url>
        <loc>${BASE_URL}/authors/lauren</loc>
      </url>
      <url>
        <loc>${BASE_URL}/archives</loc>
      </url>
      ${dateUrls
        .map((dateUrl) => {
          return `<url>
            <loc>${`${BASE_URL}/archives/${dateUrl}`}</loc>
          </url>`;
        })
        .join("")}
      <url>
        <loc>${BASE_URL}/locations</loc>
      </url>
      ${locationUrls
        .map((locationUrl) => {
          return `<url>
            <loc>${`${BASE_URL}/locations/${locationUrl}`}</loc>
          </url>`;
        })
        .join("")}
      <url>
        <loc>${BASE_URL}/tags</loc>
      </url>
      ${tags
        .map((tag) => {
          return `<url>
            <loc>${`${BASE_URL}/tags/${tag}`}</loc>
          </url>`;
        })
        .join("")}
      <url>
        <loc>${BASE_URL}/posts</loc>
      </url>
      ${posts
        .map(({ slug, date }) => {
          return `<url>
            <loc>${`${BASE_URL}/posts/${slug}`}</loc>
            <lastmod>${date}</lastmod>
          </url>`;
        })
        .join("")}
    </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPosts = getAllPosts([
    "date",
    "slug",
    "tags",
    "location",
  ]) as PostType[];
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
      date.getFullYear().toString() + "/" + (date.getMonth() + 1).toString()
    );
    dateUrls.add(
      date.getFullYear().toString() +
        "/" +
        (date.getMonth() + 1).toString() +
        "/" +
        date.getDate().toString()
    );
  });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(
    allPosts,
    Array.from(uniqueTags),
    Array.from(locationUrls),
    Array.from(dateUrls)
  );

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
