import Footer from "@/components/customs/layout/footer";
import Header from "@/components/customs/layout/header";
import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto p-4 min-h-[calc(100vh-126px)] flex flex-col justify-center items-center">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;
