import { Author } from "./author";
import { Location } from "./location";

export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  location: Location;
  tags: string[];
}
