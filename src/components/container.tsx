import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 lg:grid lg:grid-cols-3 lg:gap-x-10">
      {children}
    </div>
  );
};

export default Container;
