import Carousel from "@/components/Carousel";
import Navbar from "@/components/NavBar";
import RecommendedCourses from "@/components/RecommendedCourses";
import Sidebar from "@/components/SideBar";
import React from "react";
import LearningPlatforms from "@/components/LearningPlatforms";

const dashboard = () => {
  return (
    <div className="flex  min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 pt-8">
        {/* Sidebar width + padding for navbar */}
        <Navbar />
        <Carousel />
        <RecommendedCourses />
        <LearningPlatforms />
      </div>
    </div>
  );
};

export default dashboard;
