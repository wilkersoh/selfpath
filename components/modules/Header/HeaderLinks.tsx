import React from "react";
import Link from "next/link";
import { LinkPathsType } from "@/components/modules/Header/interfaces";

export const LinkPaths: LinkPathsType[] = [
  { route: "/", name: "首頁", isSubtitle: false },
  { route: "/blog", name: "文章", isSubtitle: false },
  { route: "/blog/css", name: "CSS", isSubtitle: true },
  { route: "/stories", name: "我的天地", isSubtitle: false },
  { route: "/about", name: "關於我", isSubtitle: false },
];

const HeaderLinks: React.FC = () => {
  return (
    <nav className='hidden md:block ml-auto mr-10'>
      <ul className='flex space-x-4'>
        {LinkPaths.map(({ route, name, isSubtitle }) => (
          <li key={route}>
            <Link href={route}>
              <a
                className={`${isSubtitle ? "pl-6": null}`}
              >{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
