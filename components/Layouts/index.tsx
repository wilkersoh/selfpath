import React from "react";

import HomeLayout from "@/components/Layouts/HomeLayout";
import BasicBlogLayout from "@/components/Layouts/BasicBlogLayout";

import LayoutProps from "./interface";

const index: React.FC<LayoutProps> = ({ children, type }) => {
  let Layout = null;

  switch (type) {
    case "home": {
      Layout = <HomeLayout />;
      break;
    }
    case "basic": {
      <BasicBlogLayout />;
      break;
    }
    case "list": {
      //
      break;
    }
    default: {
      return <HomeLayout />;
    }
  }

  return React.cloneElement(Layout, { children });
};

export default index;
