import AccountSettings from "@/components/AccountSettings";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import React from "react";

const settings = () => {
  return (
    <div className="flex  min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 pt-8">
        <Navbar />
        <AccountSettings />
      </div>
    </div>
  );
};

export default settings;
