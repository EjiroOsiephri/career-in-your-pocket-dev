"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiHistory } from "react-icons/bi";

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CareerAssistant = () => {
  const options = ["Select", "Option 1", "Option 2", "Option 3"];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center lg:ml-72 justify-start px-4 pt-12 pb-6 md:pt-20 bg-gradient-to-br from-[#EEF7FE] to-[#F8FAFC] relative"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="w-full flex justify-between px-6 mb-4"
      >
        {/* AI Powered Label */}
        <span className="flex items-center text-sm text-gray-500">
          Powered by{" "}
          <span
            className="ml-1.5 text-xs text-white rounded-full px-2 py-1"
            style={{
              background: "linear-gradient(to right, #A1CCE5, #637F59)",
            }}
          >
            AI
          </span>
        </span>

        {/* History Icon */}
        <BiHistory className="text-gray-500 text-xl cursor-pointer" />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={itemVariants}
        className="text-xl md:text-2xl font-semibold text-center text-gray-800"
      >
        Not sure on how to navigate <br className="hidden md:block" />
        through your career?
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl font-medium text-center mt-2 text-gray-600"
      >
        I’m here to help ✨
      </motion.p>

      {/* Dropdown Form */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-2xl mb-24 relative z-10"
      >
        <CustomDropdown label="Educational level" options={options} />
        <CustomDropdown label="Career interests" options={options} />
        <CustomDropdown label="Field of study" options={options} />
        <CustomDropdown label="Current skills" options={options} />
        <CustomDropdown label="Employment status" options={options} />
        <CustomDropdown label="Years of experience" options={options} />
      </motion.div>

      {/* Chat Input (Fixed to Bottom) */}
      <motion.div
        variants={itemVariants}
        className="fixed bottom-4 w-full max-w-lg px-2 md:px-4 z-30"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 shadow-md"
        >
          <motion.button
            whileHover={{ rotate: 90 }}
            className="text-gray-400 text-xl"
          >
            ➕
          </motion.button>
          <input
            type="text"
            placeholder="Tell me more about you ……"
            className="flex-1 px-4 bg-transparent focus:outline-none text-gray-600"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-[#A1CCE5] text-xl -ml-9 md:-ml-[initial] md:mr-4 mr-2"
          >
            <FaMicrophone />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-[#A1CCE5] text-xl"
          >
            <FiSend />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

interface DropdownProps {
  label: string;
  options: string[];
}

const CustomDropdown = ({ label, options }: DropdownProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="w-full relative text-black"
    >
      <label className="block text-gray-700 text-sm font-medium mb-1">
        {label}
      </label>
      <div
        className="w-full border border-gray-300 rounded-md p-3 text-gray-600 bg-white focus:outline-none flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <IoIosArrowDown
          className={`text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-50 overflow-hidden"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="p-3 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default CareerAssistant;
