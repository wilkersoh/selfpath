import React from "react";

import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 min-h-64 md:grid md:grid-row-2 md:gap-4'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
