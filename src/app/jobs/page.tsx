import Navbar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import React from "react";

const jobs = () => {
  return (
    <div className="flex  min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 pt-8">
        <Navbar />
      </div>
    </div>
  );
};

export default jobs;
