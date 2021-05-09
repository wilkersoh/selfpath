import React from "react";

const index = () => {
  const year = new Date().getFullYear();

  return (
    <div className='h-52 main-footer-bg'>
      <div>&copy; Copyright {year}. Wilker Soh</div>
    </div>
  );
};

export default index;
