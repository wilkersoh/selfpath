import React from "react";
import Link from "next/link";

import Container from "@/components/Container";
import Hamburger from "@/components/modules/Header/icons/Hamburger";
import Selfpaths from "@/components/modules/Header/icons/Selfpaths";

const BlogHeader = () => {
  return (
    <div className='relative bg-brand-black '>
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
            <nav className='hidden md:block'>i am nav for desktop</nav>
            <div className='md:hidden ml-auto mr-4'>
              <Hamburger />
            </div>
          </header>
        </Container>
      </div>
    </div>
  );
};

export default BlogHeader;
