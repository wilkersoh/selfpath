import React from "react";

type HeadingDOMType = "h1" | "h2" | "h3";

interface HeadingPorps {
  children: string;
  type: HeadingDOMType;
}

export const H1 = ({ children }: HeadingPorps): JSX.Element => <HeadingDOM children={children} type="h1" />;

export const H2 = ({ children }: HeadingPorps): JSX.Element => <HeadingDOM children={children} type='h2' />

export const H3 = ({ children }: HeadingPorps): JSX.Element => <HeadingDOM children={children} type="h3" />;

const HeadingDOM = ({ children, type }: HeadingPorps) => {
  const id = children.toLowerCase().split(" ").join("-");
  const HeadingTag = type
  return (
    <div className='group flex items-center relative'>
      <HeadingTag id={id} className={`mark-${type}`}>
        <a
          href={`#`}
          className='text-gray-600 mr-4 text-2xl transition duration-500 opacity-0 group-hover:opacity-100'>
          #
        </a>
        {children}
      </HeadingTag>
    </div>
  );
};
