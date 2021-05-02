import React from "react";
import { LinkPathsType } from "@/components/Header/interfaces";

const LinkPaths: LinkPathsType[] = [
  { route: "/", name: "home" },
  { route: "/blog", name: "blog" },
  { route: "/about", name: "about" },
];

const HeaderLinks: React.FC<LinkPathsType> = ({ route, name }) => {
  return (
    <div>
      <div>Links paths</div>
    </div>
  );
};

export default HeaderLinks;
