import React from "react";
import Container from "@/components/Container";
import Hamburger from "@/components/Header/icons/Hamburger";
import Wave from "@/components/Header/icons/Wave";

const index = () => {
  return (
    <div className='relative h-52 main-header-bg'>
      <div className='h-12 w-12 red hidden sm:block'></div>
      <div className='sticky top-0 z-10'>
        <Container>
          <header className='flex items-center h-14'>
            <div className='cursor-pointer text-white'>logo</div>
            <nav className='hidden sm:block'>i am nav for desktop</nav>
            <div className='sm:hidden ml-auto mr-4'>
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
