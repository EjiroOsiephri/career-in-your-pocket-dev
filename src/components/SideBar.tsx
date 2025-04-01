"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiSearch, FiSettings, FiLogOut } from "react-icons/fi";
import { MdMap } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => setIsMobile(window.innerWidth < 1024);
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen || !isMobile ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 h-full text-[#191B1E] bg-white shadow-lg p-4 flex flex-col gap-6 z-50 w-[100vw] md:w-72`}
      >
        {/* Close Button (Only on Mobile) */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>
        )}

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 mt-10">
          <SidebarItem icon={<FiGrid />} label="Dashboard" />
          <SidebarItem
            icon={<MdMap />}
            label="Career Map"
            active
            extra={
              <span className="ml-auto text-xs bg-gray-300 rounded-full px-2">
                AI
              </span>
            }
          />
          <SidebarItem icon={<FiSearch />} label="Find Jobs" />
        </nav>

        {/* Settings & Logout */}
        <div className="mt-auto flex flex-col gap-4">
          <SidebarItem icon={<FiSettings />} label="Settings" />
          <SidebarItem
            icon={<FiLogOut />}
            label="Logout"
            className="text-red-500"
          />
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          {!isOpen && (
            <FaBars
              className="text-2xl text-[#191B1E] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      )}
    </>
  );
};

const SidebarItem = ({
  icon,
  label,
  active,
  extra,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  extra?: React.ReactNode;
  className?: string;
}) => {
  const isLogout = label === "Logout"; // Check if it's the Logout item

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all 
        ${
          active
            ? "bg-[#A1CCE5] text-white"
            : isLogout
            ? "text-red-500 hover:bg-red-100" // Keep text red, but add subtle hover bg
            : "hover:bg-[#A1CCE5] hover:text-white"
        } ${className}`}
    >
      {icon}
      <span>{label}</span>
      {extra}
    </motion.div>
  );
};

export default Sidebar;
