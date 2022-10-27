import type Author from "./author";
import Location from "./location";

type PostType = {
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
};

export default PostType;
