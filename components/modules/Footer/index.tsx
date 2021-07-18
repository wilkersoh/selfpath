import React from "react";
import Link from "next/link";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";

const LINKS = {
  home: "/",
  blog: "/blog",
  service: "/service",
  contact: "/contact",
};

const index = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='flex flex-col min-h-72 main-footer-bg text-center'>
      <div className='flex justify-center py-8 md:py-10 space-x-10'>
        <a
          href='https://github.com/wilkersoh'
          target='_blank'
          rel='noopener noreferrer'>
          <Github />
        </a>
        <a
          href='https://www.instagram.com/hello__yz/'
          target='_blank'
          rel='noopener noreferrer'>
          <Instagram />
        </a>
      </div>
      <div className='flex'>
        <FooterLinks links={LINKS} />
      </div>
      <div className='mt-auto pb-10 text-red-100'>
        &copy; Copyright {year}. Wilker Soh
      </div>
    </footer>
  );
};

const FooterLinks = ({ links }) => {
  return (
    <ul className='flex justify-around px-4 md:w-1/2 mx-auto'>
      {Object.entries(links).map(([k, v], i) => (
        <li key={i}>
          <Link href={v}>
            <a className='capitalize'>{k}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default index;
