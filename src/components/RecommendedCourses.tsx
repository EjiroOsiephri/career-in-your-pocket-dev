"use client";
import Image from "next/image";
import image3 from "../../public/image(3).png";
import image4 from "../../public/image(4).png";
import image5 from "../../public/image(5).png";
import image6 from "../../public/image(6).png";

const courses = [
  {
    title: "UI/UX for beginners",
    instructor: "David White",
    platform: "Udemy",
    image: image3,
  },
  {
    title: "AI for everyone",
    instructor: "Andrew Ng",
    platform: "Coursera",
    image: image4,
  },
  {
    title: "Science of wellbeing",
    instructor: "Laurie Santos",
    platform: "Udacity",
    image: image5,
  },
  {
    title: "Intro to computer",
    instructor: "David A Malan",
    platform: "Udemy",
    image: image6,
  },
];

const RecommendedCourses = () => {
  return (
    <div className="px-6 lg:ml-72 py-4">
      <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg"
              width={300}
              height={160}
            />
            <h3 className="text-[20px] text-black font-semibold mt-4">
              {course.title}
            </h3>
            <p className="text-sm text-[#6A6460] mt-1">
              By: {course.instructor}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Platform:{" "}
              <span className="text-[#A1CCE5]">{course.platform}</span>
            </p>
            <button className="w-full mt-4 bg-[#A1CCE5] text-white py-2 rounded-lg hover:bg-[#A1CCE5] transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
