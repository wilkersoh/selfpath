import React from "react";

import HomeLayout from "@/components/Layouts/HomeLayout";
import BasicBlogLayout from "@/components/Layouts/BasicBlogLayout";
import useHamburger from "@/components/modules/Header/hooks/useHamburger";
import MobileNav from "@/components/modules/Header/MobileNav";
import LayoutProps from "./interface";

const index: React.FC<LayoutProps> = ({ children, type }) => {
  let Layout = null;

  const { onToggleOpen, isOpen } = useHamburger();

  switch (type) {
    case "home": {
      Layout = HomeLayout;
      break;
    }
    case "basic": {
      Layout = BasicBlogLayout;
      break;
    }
    case "list": {
      //
      break;
    }
    default: {
      Layout = HomeLayout;
    }
  }

  return (
    <Layout>
      <MobileNav onClick={onToggleOpen} isOpen={isOpen} />
      {children}
    </Layout>
  );

  return React.cloneElement(Layout, { children });
};

export default index;
