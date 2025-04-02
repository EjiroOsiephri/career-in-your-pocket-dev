"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiSearch, FiSettings, FiLogOut } from "react-icons/fi";
import { MdMap } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Modal from "@/utils/modal"; // Import Modal

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Move state here
  const pathname = usePathname();
  const router = useRouter();

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
            className="fixed inset-0 bg-black bg-opacity-50"
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
        className="fixed top-0 left-0 h-full text-[#191B1E] bg-white shadow-lg p-4 flex flex-col gap-6 z-[150] w-[100vw] md:w-72"
      >
        {isMobile && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>
        )}

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 mt-10">
          <SidebarItem
            icon={<FiGrid />}
            label="Dashboard"
            path="/dashboard"
            active={pathname === "/dashboard"}
          />
          <SidebarItem
            icon={<MdMap />}
            label="Career Map"
            path="/career"
            active={pathname === "/career"}
            extra={
              <span
                className="ml-auto text-xs text-white rounded-full px-2 py-1"
                style={{
                  background: "linear-gradient(to right, #A1CCE5, #637F59)",
                }}
              >
                AI
              </span>
            }
          />
          <SidebarItem
            icon={<FiSearch />}
            label="Find Jobs"
            path="/jobs"
            active={pathname === "/jobs"}
          />
        </nav>

        {/* Settings & Logout */}
        <div className="mt-auto flex flex-col gap-4">
          <SidebarItem
            icon={<FiSettings />}
            label="Settings"
            path="/settings"
            active={pathname === "/settings"}
          />
          <SidebarItem
            icon={<FiLogOut />}
            label="Logout"
            isLogout
            onClick={() => setShowLogoutModal(true)}
          />
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-[100]">
          {!isOpen && (
            <FaBars
              className="text-2xl text-[#191B1E] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      )}

      {/* Logout Modal */}
      <Modal show={showLogoutModal} setShow={setShowLogoutModal} />
    </>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path?: string;
  active?: boolean;
  extra?: React.ReactNode;
  isLogout?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  label,
  path,
  active,
  extra,
  isLogout = false,
  onClick,
}: SidebarItemProps) => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset after 200ms

    if (isLogout && onClick) {
      onClick(); // Trigger modal
      return;
    }
    if (path) {
      router.push(path);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-150 
        ${
          active
            ? "bg-[#A1CCE5] text-white"
            : isLogout
            ? "text-red-500 hover:bg-red-100"
            : "hover:bg-[#A1CCE5] hover:text-white"
        } 
        ${clicked ? "bg-[#A1CCE5] text-white" : ""} // Click effect`}
      onClick={handleClick}
    >
      {icon}
      <span>{label}</span>
      {extra}
    </motion.div>
  );
};

export default Sidebar;
