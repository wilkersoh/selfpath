import React from "react";
import Head from "next/head";
import { MetaPostProps } from "./interfaces";

const HeadPost: React.FC<MetaPostProps> = ({ meta }) => {
  const { title, description, image } = meta;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={`${title}`}></meta>
        <meta name='description' content={`${description}`}></meta>
        <meta property='og:description' content={`${description}`}></meta>
        <meta property='og:image' content={`${image}`}></meta>
      </Head>
    </div>
  );
};

export default HeadPost;
