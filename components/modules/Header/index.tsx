import React, {useState} from "react";
import Link from "next/link";

import Container from "@/components/Container";
import Wave from "@/components/modules/Header/icons/Wave";
import Selfpaths from "@/components/modules/Header/icons/Selfpaths";
import HeaderLinks from "./HeaderLinks";


const index = () => {

  return (
    <div className='relative h-72 md:h-96 main-header-bg'>
      <div className='h-12 w-12 hidden md:block'></div>

      <HeaderContent />

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
        <HeaderLinks />
      </header>
      <div className='flex py-8 mt-6 justify-center items-center'>
        <h2 className='h1-title text-center'>Want to learn how to code?</h2>
      </div>
    </Container>
  </div>
);

export default index;

