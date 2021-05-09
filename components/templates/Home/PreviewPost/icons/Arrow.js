import React from "react";

export default function Arrow() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-3 w-3 mt-1 text-blue-400'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 5l7 7m0 0l-7 7m7-7H3'
      />
    </svg>
  );
}
