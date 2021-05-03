import React from "react";
import Link from "next/link";

import Arrow from "./icons/Arrow";

// This component is responsible for displaying a preview of blog post.
const index = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;
  console.log("post :>> ", post);
  return (
    <article className='mb-12'>
      <Link href={`blogs/${link}`}>
        <a>
          <h3 className='pb-2'>{meta.title}</h3>
          <p>{meta.description}</p>
          <div className='flex items-center mt-3'>
            <p className='font-bold'>Read More</p>
            <span className='my-auto ml-2'>
              <Arrow />
            </span>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default index;
