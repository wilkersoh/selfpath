import React from "react";
import HeadPost from "@/components/BlogPosts/HeadPost";
import { MetaPostProps } from "./interfaces";

const index: React.FC<MetaPostProps> = ({ children, meta }) => {
  return (
    <>
      <HeadPost meta={meta} />
      <article>{children}</article>
    </>
  );
};
// mdxprovider 是把 markdown的 ul 那些 變成 你自己的 components裡面設計的
// <MDXProvider components={components}><article>{children}</article></MDXProvider>

export default index;
