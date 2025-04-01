import Carousel from "@/components/Carousel";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import React from "react";

const dashboard = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 scroll-auto">
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
};

export default dashboard;
