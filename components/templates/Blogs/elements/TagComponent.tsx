import React from "react";
import Image from "next/image"
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type HeadingDOMType = "h1" | "h2" | "h3";

interface HeadingPorps {
  children: string;
  type: HeadingDOMType;
}

interface ImageProps {
  src: string;
  alt: string;
  title: string;
}

export const H1 = ({ children }): JSX.Element => <HeadingDOM children={children} type='h1' />

export const H2 = ({ children }): JSX.Element => <HeadingDOM children={children} type='h2' />

export const H3 = ({ children }): JSX.Element => <HeadingDOM children={children} type='h3' />

export const P = ({ children }): JSX.Element => <p className='text-lg mb-6'>{children}</p>

export const A = ({href, children} ): JSX.Element => <a href={href} className='text-lg pb-2 mark-link'>{children}</a>

export const Img = ({ src, alt, title }: ImageProps): JSX.Element => {
  /**
   * this cause some error for react because of <p><div>Structure like this not allow</div></p>
   */
  return (
    <div className='flex justify-center'>
      <Zoom overlayBgColorEnd='rgba(10, 10, 10, 0.95)'>
        <img
          src={src}
          alt={alt}
          title={title}
          className='max-w-2xl cursor-pointer w-full'
        />
        {/* <Image
          className='max-w-2xl cursor-pointer w-full'
          src={src}
          alt={alt}
          layout={"fill"}
          width={500}
          height={500}
        /> */}
      </Zoom>
    </div>
  );
};

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


