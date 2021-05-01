import React from "react";

import LinkPathsType from "@/interfaces/LinkPathsType";
import MobileNav from "@/components/MobileNav";
import Container from "@/components/Container";

const LinkPaths: LinkPathsType[] = [
  { route: "/", name: "home" },
  { route: "/blog", name: "blog" },
  { route: "/about", name: "about" },
];

export default function Header() {
  return (
    <header>
      <Container classes='max-w-7xl py-2'>
        <MobileNav links={LinkPaths} />
        <div className='flex justify-between'>{/*  */}</div>
      </Container>
    </header>
  );
}
