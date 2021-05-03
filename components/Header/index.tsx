import React from "react";
import Container from "@/components/Container";
import Hamburger from "@/components/Header/icons/Hamburger";
import Wave from "@/components/Header/icons/Wave";
import Logo from "@/components/Header/icons/Logo";

const index = () => {
  return (
    <div className='relative h-52 md:h-96 main-header-bg'>
      <div className='h-12 w-12 red hidden md:block'></div>
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
      <div className='absolute bottom-0'>
        <Wave />
      </div>
    </div>
  );
};

export default index;
