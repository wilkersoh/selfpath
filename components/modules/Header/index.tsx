import React, {useState} from "react";
import Link from "next/link";

import Container from "@/components/Container";
import MobileNav from "@/components/modules/Header/MobileNav";
import Wave from "@/components/modules/Header/icons/Wave";
import Selfpaths from "@/components/modules/Header/icons/Selfpaths";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleOpen = () => {
    setIsOpen(!isOpen)
    // avoid page scrollable in body after open hambuger
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <div className='relative h-72 md:h-96 main-header-bg'>
      <div className='h-12 w-12 hidden md:block'></div>

      <HeaderContent />
      <MobileNav onClick={onToggleOpen} isOpen={isOpen} />

      <Wave />
    </div>
  );
};

const HeaderContent = () => (
  <div className='sticky top-0 z-5'>
    <Container maxWidth='max-w-screen-xl'>
      <header className='flex items-center h-14 pt-10'>
        <div className='cursor-pointer text-white'>
          <Link href='/'>
            <a>
              <Selfpaths />
            </a>
          </Link>
        </div>
        <nav className='hidden md:block'>i am nav for desktop</nav>
      </header>
      <div className='flex py-8 mt-6 justify-center items-center'>
        <h2 className='h1-title text-center'>Want to learn how to code?</h2>
      </div>
    </Container>
  </div>
);

export default index;

