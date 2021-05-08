import React from "react";
import { MDXProvider } from "@mdx-js/react";
import HeadPost from "@/components/BlogPosts/HeadPost";
import { H1, H2, H3 } from "./elements/Heading";
import Container from "@/components/Container";

import { MetaPostProps } from "./interfaces";
import CodeTemplate from "./CodeTemplate";

const components = {
  // img: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  // p: Text,
  code: CodeTemplate,
};

const index: React.FC<MetaPostProps> = ({ children, meta }) => {
  return (
    <>
      <HeadPost meta={meta} />
      <Container>
        <MDXProvider components={components}>
          <article className='px-2 sm:px-3 md:px-10 lg:px-0'>
            {children}
          </article>
        </MDXProvider>
      </Container>
    </>
  );
};

export default index;
