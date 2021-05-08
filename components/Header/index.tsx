import React from "react";
import Link from "next/link";

import Container from "@/components/Container";
import Hamburger from "@/components/Header/icons/Hamburger";
import Wave from "@/components/Header/icons/Wave";
import Selfpaths from "@/components/Header/icons/Selfpaths";

const index = () => {
  return (
    <div className='relative h-72 md:h-96 main-header-bg'>
      <div className='h-12 w-12 red hidden md:block'></div>
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
          <div className='flex py-8'>
            <h2 className='h1-title text-center'>Want to learn how to code?</h2>
          </div>
        </Container>
      </div>
      <div className='absolute bottom-0 w-screen'>
        <Wave />
      </div>
    </div>
  );
};

export default index;
