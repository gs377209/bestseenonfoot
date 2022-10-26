import { GetServerSideProps } from "next";
import PostType from "../interfaces/post";
import { getAllPosts } from "../lib/api";

function generateSiteMap(posts: PostType[]) {
  const siteURL = process.env.SITE_URL ?? "localhost";

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>${siteURL}</loc>
      </url>
      <url>
        <loc>${siteURL}/about-us</loc>
      </url>
      ${posts
        .map(({ slug, date }) => {
          return `
            <url>
              <loc>${`${siteURL}/${slug}`}</loc>
              <lastmod>${date}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPosts = getAllPosts(["date", "slug"]);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allPosts as PostType[]);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
