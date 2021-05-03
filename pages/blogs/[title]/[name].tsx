import React from "react";
import BasicBlogLayout from "@/components/Layout/BasicBlogLayout";

import LifeCycle from "@/articles/react/lifecycle.mdx";

const Blog = () => {
  return (
    <BasicBlogLayout>
      <LifeCycle />
    </BasicBlogLayout>
  );
};

export default Blog;
