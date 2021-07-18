import React from "react";
import Link from "next/link";
import { LinkPathsType } from "@/components/modules/Header/interfaces";

export const LinkPaths: LinkPathsType[] = [
  { route: "/", name: "首頁", isSubtitle: false, showMobile: false },
  { route: "/blog", name: "文章", isSubtitle: false, showMobile: true },
  { route: "/blog/css", name: "CSS", isSubtitle: true, showMobile: true },
  { route: "/stories", name: "我的天地", isSubtitle: false, showMobile: true },
  { route: "/about", name: "關於我", isSubtitle: false, showMobile: true },
];

const HeaderLinks: React.FC = () => {
  return (
    <nav className='hidden md:block ml-auto mr-10'>
      <ul className='flex space-x-4'>
        {LinkPaths.map(({ route, name }) => (
          <li key={route}>
            <Link href={route}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
