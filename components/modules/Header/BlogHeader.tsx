import React from "react";
import Link from "next/link";

import Container from "@/components/Container";
import HeaderLinks from "./HeaderLinks";
import Selfpaths from "@/components/modules/Header/icons/Selfpaths";

const BlogHeader = () => {

  return (
    <div className='relative bg-brand-black mt-7 md:mt-0'>
      <div className='sticky top-0 z-10'>
        <Container maxWidth='max-w-screen-xl'>
          <header className='flex items-center h-14'>
            <div className='cursor-pointer text-white'>
              <Link href='/'>
                <a>
                  <Selfpaths />
                </a>
              </Link>
            </div>
            <HeaderLinks />
          </header>
        </Container>
      </div>
    </div>
  );
};

export default BlogHeader;
