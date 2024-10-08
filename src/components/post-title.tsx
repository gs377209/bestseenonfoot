import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:leading-none">
      {children}
    </h1>
  );
};

export default PostTitle;
