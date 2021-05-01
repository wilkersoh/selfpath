import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

import Container from "./Container";
import Hamburger from "@/icons/Hamburger";
import Close from "@/icons/Close";

interface AsideProps {
  links: Array<{ name: string; route: string }>;
  openState: {
    isOpen: boolean;
    offSideBar: Function;
  };
}

export default function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => setIsOpen(true);
  const offSideBar = () => setIsOpen(false);

  return (
    <div className='flex sm:hidden'>
      <div onClick={openSideBar}>
        <Hamburger />
      </div>
      <Aside links={links} openState={{ isOpen, offSideBar }} />
    </div>
  );
}

const Aside: React.FC<AsideProps> = ({ links, openState }) => {
  console.log("openState :>> ", openState);

  return (
    <>
      <CSSTransition
        in={openState.isOpen}
        timeout={550}
        classNames='sidebar-transition'>
        <div>
          <div
            onClick={() => openState.offSideBar()}
            className='hidden absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>
          <aside
            id='aside'
            className='h-screen absolute top-0 -left-full w-4/5 sm:max-w-lg bg-black text-gray-100'>
            <div className='px-3 flex items-center justify-between h-16 green'>
              <div className='blue'>SelFpaths</div>
              <div onClick={() => openState.offSideBar()}>
                <Close />
              </div>
            </div>
            <ul>
              {links.map(({ route, name }, i) => (
                <li key={i} className='px-6 mt-4 blue cursor-pointer'>
                  <Link href={route}>
                    <a className='block capitalize py-2'>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </CSSTransition>
    </>
  );
};
