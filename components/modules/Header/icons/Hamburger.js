import React from "react";

export default function Hamburger() {
  return (
    <div id='hamburger' className='cursor-pointer'>
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'>
        <line
          x1='0'
          y1='8'
          x2='24'
          y2='8'
          stroke='#fff'
          strokeWidth='3'
          strokeLinecap='round'
        />
        <line
          x1='0'
          y1='16'
          x2='24'
          y2='16'
          stroke='#fff'
          strokeWidth='3'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}
