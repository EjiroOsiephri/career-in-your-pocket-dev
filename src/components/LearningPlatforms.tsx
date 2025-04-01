"use client";
import Image from "next/image";
import image3 from "../../public/image(3).png";
import image4 from "../../public/image(4).png";
import image5 from "../../public/image(5).png";
import image6 from "../../public/image(6).png";

const platforms = [
  {
    name: "LinkedIn",
    description:
      "LinkedIn is the leading professional networking platform for career growth, job opportunities, and skill development through LinkedIn Learning.",
    image: image3,
  },
  {
    name: "Coursera",
    description:
      "Coursera is a global online learning platform that offers courses from top universities and institutions for career and personal growth.",
    image: image4,
  },
  {
    name: "Udemy",
    description:
      "Udemy is an online learning marketplace with thousands of courses on various topics, from programming to business skills.",
    image: image5,
  },
  {
    name: "Udacity",
    description:
      "Udacity offers Nanodegree programs and professional courses in tech-related fields, preparing learners for high-demand jobs.",
    image: image6,
  },
];

const LearningPlatforms = () => {
  return (
    <div className="px-6 lg:ml-72 py-4">
      <h2 className="text-2xl font-bold mb-6">
        Upskill with these learning platforms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-6"
          >
            <div className="w-full h-40 flex items-center justify-center">
              <Image
                src={platform.image}
                alt={platform.name}
                width={350}
                height={160}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{platform.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{platform.description}</p>
            <a
              href="#"
              className="text-blue-500 font-medium mt-3 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPlatforms;
