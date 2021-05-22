import React from "react";
import { MDXProvider } from "@mdx-js/react";
import HeadPost from "@/components/templates/Blogs/_HeadPost";
import { H1, H2, H3, P, A, Img} from "./elements/TagComponent";
import Container from "@/components/Container";

import { MetaPostProps } from "./interfaces";
import CodeTemplate from "./CodeTemplate";

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  img: Img,
  code: CodeTemplate, // this should be Pre
  // inlineCode: Code,
};

const index: React.FC<MetaPostProps> = ({ children, meta }) => {
  return (
    <>
      <HeadPost meta={meta} />
      <div className="mt-4">
        <Container>
          <MDXProvider components={components}>
            <article className='px-2 sm:px-3 md:px-10 lg:px-0'>
              {children}
            </article>
          </MDXProvider>
        </Container>
      </div>
    </>
  );
};

export default index;
