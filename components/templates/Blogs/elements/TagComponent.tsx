import React from "react";

type HeadingDOMType = "h1" | "h2" | "h3";

interface HeadingPorps {
  children: string;
  type: HeadingDOMType;
}


export const H1 = ({ children }): JSX.Element => <HeadingDOM children={children} type='h1' />

export const H2 = ({ children }): JSX.Element => <HeadingDOM children={children} type='h2' />

export const H3 = ({ children }): JSX.Element => <HeadingDOM children={children} type='h3' />

export const P = ({ children }): JSX.Element => <p className='text-lg mb-6'>{children}</p>

export const A = ({href, children} ): JSX.Element => <a href={href} className='text-lg pb-2 mark-link'>{children}</a>

const HeadingDOM = ({ children, type }: HeadingPorps) => {
  const id = children.toLowerCase().split(" ").join("-");
  const HeadingTag = type;
  return (
    <div className='group flex items-center relative'>
      <HeadingTag id={id} className={`relative mark-${type}`}>
        <a
          href={`#`}
          className='absolute -left-4 text-gray-600 text-2xl transition duration-500 opacity-0 group-hover:opacity-100'>
          #
        </a>
        {children}
      </HeadingTag>
    </div>
  );
};


