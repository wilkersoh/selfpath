import React from "react";
import { CSSTransition } from "react-transition-group";
import { MobileNavProps } from "../interfaces";

export default function Hamburger({ onClick, isOpen }: MobileNavProps) {
  return (
    <div className='fixed top-10 right-10 z-20'>
        <CSSTransition
          in={isOpen}
          timeout={750}
          classNames={'hambuger-icon'}
        >
          <button
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`hambuger-icon cursor-pointer outline-none focus:border-opacity-0 focus:outline-none`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </CSSTransition>
    </div>
  );
}
