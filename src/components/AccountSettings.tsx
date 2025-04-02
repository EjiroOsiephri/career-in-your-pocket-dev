"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Switch } from "@headlessui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AccountSettings() {
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState("********");
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <motion.div
      className="lg:ml-72 min-h-screen  flex-1 bg-white rounded-lg overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Profile Header */}
      <div className="relative bg-[#A1CCE5] mb-28 h-48">
        {/* Profile Image */}
        <motion.div
          className="absolute left-6 -bottom-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/profile-placeholder.png"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </motion.div>

        {/* Name & Email (Left Side) */}
        <div className="absolute left-32 top-52 bottom-4">
          <h2 className="text-lg font-semibold  text-black">Idris Gabriel</h2>
          <p className="text-sm text-gray-600">idrisgabriel@gmail.com</p>
        </div>

        {/* Edit Profile Button (Right Side) */}
        <div className="absolute bottom-4 ml-4 md:ml-[initial] top-[270px] sm:top-52 sm:right-6 right-6 ">
          <motion.button
            className=" px-4 py-2 text-sm font-medium text-[#A1CCE5] border border-[#A1CCE5] rounded-lg hover:bg-[#A1CCE5] hover:text-white transition"
            whileTap={{ scale: 0.95 }}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </motion.button>
        </div>
      </div>

      {/* Account Settings */}
      <AnimatePresence mode="wait">
        {!editMode ? (
          <motion.div
            key="view-mode"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 border-t"
          >
            {/* Password Section */}
            <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between mb-14">
              <div>
                <h3 className="font-medium text-gray-700">Password</h3>
                <p className="text-sm text-gray-500">Current Password</p>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  disabled
                  className="bg-gray-100 px-3 py-1 rounded-md"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="flex  items-center  justify-between">
              <div>
                <h3 className="font-medium text-gray-700">
                  2 Factor Authentication
                </h3>
                <p className="text-sm text-gray-500">
                  We recommend enabling this for security.
                </p>
              </div>
              <Switch
                checked={twoFactorEnabled}
                onChange={setTwoFactorEnabled}
                className={`${
                  twoFactorEnabled ? "bg-[#A1CCE5]" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="edit-mode"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-6 border-t"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Idris"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Gabriel"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+123 456 7890"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                />
              </div>
              <motion.button
                className="w-full py-2 text-white bg-[#A1CCE5] rounded-lg hover:bg-[#A1CCE5] transition"
                whileTap={{ scale: 0.98 }}
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
