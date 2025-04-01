import Navbar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import React from "react";

const dashboard = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default dashboard;
