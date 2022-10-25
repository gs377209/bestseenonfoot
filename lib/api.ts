import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import escape from "escape-html";
import { Feed } from "feed";
import { parseISO } from "date-fns";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = escape(realSlug);
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllPostsByDate(
  date: { year: string; month?: string; date?: string },
  fields: string[] = []
) {
  return getAllPosts(fields).filter((post) => {
    const postDate = parseISO(post.date);
    if (date.date) {
      // match all 3
      return (
        date.year === postDate.getFullYear().toString() &&
        date.month === (postDate.getMonth() + 1).toString() &&
        date.date === postDate.getDate().toString()
      );
    } else if (date.month) {
      // match year and month
      return (
        date.year === postDate.getFullYear().toString() &&
        date.month === (postDate.getMonth() + 1).toString()
      );
    }
    // only match year
    return date.year === postDate.getFullYear().toString();
  });
}

export const generateRssFeed = () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);
  const siteURL = process.env.SITE_URL ?? "localhost";
  const date = new Date();
  const author = {
    name: "Best Seen On Foot",
    email: "bestseenonfoot@gmail.com",
    link: "https://twitter.com/bestseenonfoot",
  };
  const feed = new Feed({
    title: "Best Seen On Foot",
    description: "Travel Blog",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/assets/logo.jpg`,
    favicon: `${siteURL}/favicon/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Best Seen On Foot`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });
  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`;
    const postAuthor = {
      name: post.author?.name ?? author.name,
      link: `${siteURL}/${post.author?.url ?? author.link}`,
      email: author.email,
    };
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.excerpt,
      author: [postAuthor],
      contributor: [postAuthor],
      date: parseISO(post.date),
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
