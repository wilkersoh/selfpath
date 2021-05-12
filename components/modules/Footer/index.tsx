import React from "react";
import Github from "./icons/Github"
import Instagram from "./icons/Instagram"


const index = () => {
  const year = new Date().getFullYear();

  return (
    <div className='flex flex-col h-52 main-footer-bg text-center'>
      <div className="flex justify-center mt-4 space-x-10">
        <Github  />
        <Instagram />
      </div>
      <div className="mt-auto mb-3 text-red-50">&copy; Copyright {year}. Wilker Soh</div>
    </div>
  );
};

export default index;
