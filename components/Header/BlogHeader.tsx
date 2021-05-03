import React from "react";
import Container from "@/components/Container";
import Hamburger from "@/components/Header/icons/Hamburger";
import Logo from "@/components/Header/icons/Logo";

const BlogHeader = () => {
  return (
    <div className='relative bg-brand-black '>
      <div className='sticky top-0 z-10'>
        <Container>
          <header className='flex items-center h-14'>
            <div className='cursor-pointer text-white'>
              <Logo />
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
