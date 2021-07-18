import React, { useEffect, useRef } from "react";
// import ReactDOM from 'react-dom';
import Link from "next/link";

import {LinkPaths} from "@/components/modules/Header/HeaderLinks"
import Hamburger from "@/components/modules/Header/icons/Hamburger";

import { CSSTransition } from "react-transition-group";

import { MobileNavProps } from "./interfaces";

// const Modal = ({children, open}) => {

//   return open
//     ? ReactDOM.createPortal(
//         <div>{children}</div>,
//         document.body
//       )
//     : null;
// }


const MobileNav = ({ onClick, isOpen }: MobileNavProps) => {
  /**
      Better practices
      Create portal in outside, included the button hamburger
   */

  // const mobileNavRef = useRef(null);
  // useEffect(() => {
  //     const rootContainer = document.createElement("div");
  //     const parentElem = document.querySelector("#__next");
  //     parentElem?.insertAdjacentElement("afterend", rootContainer);
  //     mobileNavRef.current = rootContainer;
  // }, [])

  // useEffect(() => {
  //   console.log('mobileNavRef.current :>> ', mobileNavRef.current);
  //   if(mobileNavRef.current) {
  //     return ReactDOM.createPortal(<div>some texting text</div>, mobileNavRef.current);
  //   }
  // }, [mobileNavRef])

  return (
    <div className="md:hidden">
      <Hamburger onClick={onClick} isOpen={isOpen} />
      <div
        className={`fixed z-10 overflow-hidden inset-0 transition-backdropFilter duration-500 ease-in backdrop-filter ${isOpen ? "backdrop-blur-md  pointer-events-auto" : "pointer-events-none"}`}>
        <nav className={`absolute top-28 w-full transition-all duration-500 ${isOpen ? "left-0" : "-left-full" }`}>
          <ul className='w-full flex flex-col gap-y-7'>
            {LinkPaths.map(({ route, name, isSubtitle, showMobile }) => (
              <CSSTransition
                key={route}
                in={isOpen}
                timeout={1000}
                classNames={"navLink"}>
                <li key={route} className={`w-4/5 pl-10 ${showMobile ? "block" : "hidden"}`}>
                  <Link href={route}>
                    <a className={`text-4xl block h-full py-4 ${isSubtitle && "pl-6"}`}>{name}</a>
                  </Link>
                </li>
              </CSSTransition>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav
