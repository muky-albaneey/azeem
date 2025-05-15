"use client";
import React, { useState } from "react";
import SearchSection from "./SearchSection";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      country: "Burkina Faso, Mali, Niger, Nigeria",
      title: "Soil Values",
      description:
        "Soil Values, a 10-year program (2024-2034) financed by the Netherlands Directorate-General for International Cooperation (DGIS), is a transformative initiative unfolding across Burkina Faso, Mali, Northern Nigeria, and Niger, where the primary objective is to establish sustainable soil fertility management as a cornerstone within the farming systems of the Sahelian and Guinea Savanna regions.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      country: "Ghana, Kenya, Malawi, Mozambique, Niger, Tanzania, Uganda",
      title: "SOILS-Space to Place",
      description:
        "Overview African agriculture must be ready to meet the needs of tomorrow. Space to Place rapidly scales innovations in efficiency to become a vital component of intensive and sustainable agricultural systems for existing land under cultivation. In alignment with the U.S.",
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white text-gray-800 font-sans py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 mb-6">
          Our work showcases our Mission in Action: working together to scale sustainable solutions
          for soil and plant nutrition that benefit farmers, entrepreneurs, and the environment.
        </p>
        <div className="text-right mb-6">
          <button className="text-yellow-600 font-medium underline">View all</button>
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full lg:w-3/4 shadow-md"
                    />
                  </div>
                  <div className="lg:pl-8">
                    <p className="text-green-600 font-medium mb-2">{project.country}</p>
                    <h3 className="text-2xl font-bold mb-4">{project.title} →</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
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
          index === currentIndex ? "bg-green-500" : "bg-gray-300"
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
