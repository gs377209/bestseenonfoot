import { Feed } from "feed";
import escape from "escape-html";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { parseISO } from "date-fns";

const postsDirectory = join(process.cwd(), "src/_posts");

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

export function getAllPostsByAuthor(author: string, fields: string[] = []) {
  return getAllPosts(fields).filter((post) => {
    return post.author.url === author;
  });
}

export function getAllPostsByTag(tag: string, fields: string[] = []) {
  return getAllPosts(fields).filter((post) => {
    return post.tags.includes(tag);
  });
}

export function getAllPostsByPlace(place: string, fields: string[] = []) {
  return getAllPosts(fields).filter((post) => {
    const postLocations = post.location.url.split("/");
    return postLocations.includes(place);
  });
}

export const generateRssFeed = () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);
  const siteURL = process.env.SITE_URL ?? "localhost";
  const date = new Date();
  const author = {
    email: "bestseenonfoot@gmail.com",
    link: "https://twitter.com/bestseenonfoot",
    name: "Best Seen On Foot",
  };
  const feed = new Feed({
    author,
    copyright: `All rights reserved ${date.getFullYear()}, Best Seen On Foot`,
    description: "Travel Blog",
    favicon: `${siteURL}/favicon/favicon.ico`,
    feedLinks: {
      atom: `${siteURL}/rss/atom.xml`,
      json: `${siteURL}/rss/feed.json`,
      rss2: `${siteURL}/rss/feed.xml`,
    },
    generator: "Feed for Node.js",
    id: siteURL,
    image: `${siteURL}/assets/logo.jpg`,
    link: siteURL,
    title: "Best Seen On Foot",
    updated: date,
  });
  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`;
    const postAuthor = {
      email: author.email,
      link: `${siteURL}/${post.author?.url ?? author.link}`,
      name: post.author?.name ?? author.name,
    };
    feed.addItem({
      author: [postAuthor],
      content: post.excerpt,
      contributor: [postAuthor],
      date: parseISO(post.date),
      description: post.excerpt,
      id: url,
      link: url,
      title: post.title,
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
