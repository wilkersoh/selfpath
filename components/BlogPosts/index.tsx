import React from "react";
import { MDXProvider } from "@mdx-js/react";
import HeadPost from "@/components/BlogPosts/HeadPost";
import { Heading } from "./elements/Heading";

import { MetaPostProps } from "./interfaces";

const components = {
  // img: Image,
  h2: Heading,
  // h2: Heading.H2,
  // p: Text,
  // code: Pre,
  // inlineCode: Code,
};

const index: React.FC<MetaPostProps> = ({ children, meta }) => {
  return (
    <>
      <HeadPost meta={meta} />
      <MDXProvider components={components}>
        <article className='blue'>{children}</article>
      </MDXProvider>
    </>
  );
};
// mdxprovider 是把 markdown的 ul 那些 變成 你自己的 components裡面設計的
// <MDXProvider components={components}><article>{children}</article></MDXProvider>

export default index;
