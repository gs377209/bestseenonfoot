import cn from "classnames";
import { Post } from "../interfaces/post";
import PostPreview from "./post-preview";

interface Props {
  posts: Post[];
  hideHeader?: boolean;
  condensed?: boolean;
}

const MoreStories = ({ posts, hideHeader, condensed }: Props) => {
  return (
    <section>
      {!hideHeader && (
        <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          More Posts
        </h2>
      )}
      <div
        className={cn({
          "mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32":
            !condensed,
          "mb-5 gap-y-5": condensed,
        })}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            condensed={condensed}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
