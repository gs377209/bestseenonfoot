import { parseISO } from "date-fns";
import escape from "escape-html";
import { Feed } from "feed";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { BASE_URL, HOME_OG_IMAGE_URL } from "./constants";

const postsDirectory = join(process.cwd(), "src/_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

interface Items {
  [key: string]: any;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

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
  fields: string[] = [],
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
    return (post.tags as string[]).some((postTag) => postTag === tag);
  });
}

export function getAllPostsByPlace(place: string, fields: string[] = []) {
  return getAllPosts(fields).filter((post) => {
    const postLocations = post.location.url.split("/") as string[];
    return postLocations.some((postPlace) => postPlace === place);
  });
}

export const generateRssFeed = () => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "content",
  ]);
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
    favicon: `${BASE_URL}/favicon.ico`,
    feedLinks: {
      atom: `${BASE_URL}/atom.xml`,
      json: `${BASE_URL}/feed.json`,
      rss2: `${BASE_URL}/feed.xml`,
    },
    generator: "Feed for Node.js",
    id: BASE_URL,
    image: HOME_OG_IMAGE_URL,
    link: BASE_URL,
    title: "Best Seen On Foot",
    updated: date,
  });
  posts.forEach((post) => {
    const url = `${BASE_URL}/posts/${post.slug}`;
    const postAuthor = {
      email: author.email,
      link: `${BASE_URL}/${post.author?.url ?? author.link}`,
      name: post.author?.name ?? author.name,
    };
    feed.addItem({
      author: [postAuthor],
      content: post.content,
      contributor: [postAuthor],
      date: parseISO(post.date),
      description: post.excerpt,
      id: url,
      link: url,
      title: post.title,
    });
  });
  fs.writeFileSync("./public/feed.xml", feed.rss2());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
  fs.writeFileSync("./public/feed.json", feed.json1());
};
