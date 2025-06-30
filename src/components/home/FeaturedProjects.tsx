"use client";
import Image from "next/image";
import React, { useState } from "react";
// import SearchSection from "./SearchSection";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      country: "Nigeria",
      title: "Nigeria Affordable Mass Housing Programme (NAMHP)",
      description:
        "A nationwide initiative providing safe, modern, and affordable housing for low- and middle-income earners, reducing Nigeria's housing deficit.Building on the success of NAMHP, the programme will be replicated in other African countries facing similar housing challenges. By partnering with local governments and private sector stakeholders, we aim to develop affordable housing solutions tailored to the unique needs of each country, fostering urban development and improving living standards across the continent.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      country: "Ghana, Kenya, Malawi, Mozambique, Niger, Tanzania, Uganda",
      title: "Sustainable Energy Development Programme (SEDevP4NGR)",
      description:
        "Sustainable Energy Development Programme (SEDevP4NGR): A comprehensive programme aimed at expanding access to clean, reliable, and affordable energy solutions, including solar, wind, and hydroelectric power projects. The SEDevP4NGR model will be adapted to address energy deficits in other African nations. By leveraging renewable energy resources such as solar in sun-rich regions, wind in coastal areas, and hydroelectric power in countries with abundant water resources, we aim to provide sustainable energy solutions that drive economic growth and reduce reliance on fossil fuels. This initiative will also include capacity-building programmes to train local communities in renewable energy technologies.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      country: "Nigeria, Ghana, Senegal",
      title: "Crop Growth Program",
      description:
        "Crop Growth Program focuses on enhancing crop productivity in a sustainable manner, involving new irrigation techniques and better seed distribution systems.",
      image: "/images/project3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
const [expanded, setExpanded] = useState(false);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? projects.length - 1 : prevIndex - 1
  //   );
  // };
const nextSlide = () => {
  setExpanded(false);
  setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
};

const prevSlide = () => {
  setExpanded(false);
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? projects.length - 1 : prevIndex - 1
  );
};

  return (
    <div className="bg-white text-gray-800 font-sans py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 mb-6">
          From housing and energy to digital infrastructure and transport, our featured projects reflect Azim’s commitment to solving Africa’s most pressing development challenges through innovation, scale, and sustainable impact.

        </p>
        <div className="text-right mb-6">
          <button className="text-[#D4ADFC] font-medium underline">View all</button>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-center">
           

            <div className="overflow-hidden w-full max-w-6xl">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute top-0 left-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 transform transition-transform duration-500 ease-in-out ${
                    index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                  }`}
                >

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-3/4 h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover shadow-md"
                  sizes="(min-width: 1024px) 75vw, 100vw"
                />
              </div>
            </div>

                 
                  {/* <div className="lg:pl-8">
                    <p className="text-[#1D267D] font-medium mb-2">{project.country}</p>
                    <h3 className="text-2xl font-bold mb-4">{project.title} →</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                  </div> */}
                  <div className="lg:pl-8">
  <p className="text-[#1D267D] font-medium mb-2">{project.country}</p>
  <h3 className="text-2xl font-bold mb-4">{project.title} →</h3>

  <p className="text-gray-600 mb-2">
    {index === currentIndex && expanded ? project.description : `${project.description.slice(0, 200)}...`}
  </p>

  {project.description.length > 200 && (
    <button
      onClick={() => setExpanded(!expanded)}
      className="text-[#D4ADFC] font-semibold underline"
    >
      {expanded ? "Show less" : "Read more"}
    </button>
  )}
</div>

                </div>
              ))}
            </div>


          </div>

        
          <div className="flex justify-between items-center relative lg:-bottom-80 -bottom-96">
  {/* Prev Button */}
  <button
    onClick={prevSlide}
    className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>

  {/* Indicators */}
  <div className="flex justify-center space-x-2 absolute bottom-4 w-full">
    {projects.map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full ${
          index === currentIndex ? "bg-[#1D267D]" : "bg-gray-300"
        }`}
        onClick={() => setCurrentIndex(index)}
      ></button>
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

        </div>
      </div>
      {/* <SearchSection /> */}
    </div>
  );
};

export default FeaturedProjects;
