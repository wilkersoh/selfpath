import React from 'react'
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

export const ImageTag: React.FC<ImageProps> = ({src, alt}) => {
  return (
    <div>
      <Image src={src} alt="" width={500} height={500} />
    </div>
  )
}
