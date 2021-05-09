import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { posts } from "@/utils/getAllPosts";

import BasicBlogLayout from "@/components/Layouts/BasicBlogLayout";

interface BlogProps {
  filePath: string;
}

const Blog = ({ filePath }: BlogProps) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  /* Not really right way to use dynamic in here (can read docs) */
  const BlogContent = dynamic(
    () => import(`../../../articles/${filePath}.mdx`)
  );

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
      revalidate: 1,
    },
  };
};

export default Blog;
