"use client";

import { FiSearch, FiBell, FiMoreVertical } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="flex-1 lg:ml-72">
      <nav className="flex items-center justify-between text-[#191B1E] px-6 py-4 bg-white border-b-2 border-gray-400">
        {/* Left - Dashboard Title */}
        <div className="flex-1 lg:flex-none flex justify-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Center - Search Bar (Hidden until 1440px) */}
        <div className="hidden lg:flex flex-1 mx-5 justify-center max-w-sm">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-100 focus:outline-none"
            />
          </div>
        </div>

        {/* Right - Notification & Profile */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <FiBell className="text-2xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Profile Section (Hidden until 1440px) */}
          <div className="hidden lg:flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Idris Gabriel</p>
              <p className="text-xs text-gray-400">idrisgabriel@gmail.com</p>
            </div>
          </div>

          {/* Three-dot Menu (Visible until 1440px) */}
          <div className="lg:hidden cursor-pointer">
            <FiMoreVertical className="text-xl" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
