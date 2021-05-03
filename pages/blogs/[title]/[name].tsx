import React from "react";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";
import { posts } from "@/utils/getAllPosts";

import BasicBlogLayout from "@/components/Layout/BasicBlogLayout";
import BlogContent from "@/articles/react/hook.mdx";

interface BlogProps {
  filePath: string;
}

const Blog = ({ filePath }: BlogProps) => {
  /* Not really right way to use dynamic in here (can read docs) */
  // const BlogContent = dynamic(
  //   () => import(`../../../articles/${filePath}.mdx`)
  // );

  return (
    <BasicBlogLayout>
      <BlogContent />
    </BasicBlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map(({ link }) => {
    const [title, name] = link.split("/");

    return {
      params: {
        title,
        name,
      },
    };
  });

  return {
    paths,
    fallback: true, // false if not path return 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      filePath: `${params.title}/${params.name}`,
    },
  };
};

export default Blog;
