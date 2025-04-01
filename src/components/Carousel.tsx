"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Your future starts now, find the right career path!",
    description: "Not sure what career is best for you? Our AI can guide you.",
    buttonText: "Start your career journey",
    bgGradient: "linear-gradient(to left, #A1CCE5, #86B3CC, #6D91A6)",
    image: "/w.png",
  },
  {
    title: "Did you know 70% of professionals regret their career choice?",
    description: "Choose wisely today.",
    buttonText: "Start your career journey",
    bgGradient: "linear-gradient(to left, #1B5171, #2B5269, #39596B)",
    image: "/v.png",
  },
  {
    title: "Unlock your potential",
    description: "Discover skills you need to succeed.",
    buttonText: "Start your career journey",
    bgGradient: "linear-gradient(to left, #F79256, #A45D33, #F79256)",
    image: "/p.png",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:ml-72 md:pl-7 p-4 md:pr-7 pt-10 mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-between p-6 rounded-lg shadow-lg overflow-hidden h-[450px] md:h-[400px] text-white"
          style={{
            background: `${slides[index].bgGradient}, url(${slides[index].image})`,
            backgroundSize: "auto 100%",
            backgroundPosition: "top right",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          {/* Text Content */}
          <div className="relative flex-1 pr-6 z-10">
            <h2 className="text-lg md:text-[40px] max-w-[80%] font-bold">
              {slides[index].title}
            </h2>
            <p className="text-sm md:text-[24px] mt-2">
              {slides[index].description}
            </p>
            <button className="absolute cursor-pointer bottom-[0] px-4 py-6 bg-[#A1CCE5] text-white rounded-lg shadow-md">
              {slides[index].buttonText}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute mb-5 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white scale-125" : "bg-gray-500"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
