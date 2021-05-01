import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App: React.FC = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen blue'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default App;
