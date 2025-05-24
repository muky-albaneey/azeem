"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SolutionHeader from "../solution/SolutionHeader";

const projects = [
  {
    title: "Communal Approach to the Agricultural Market in Benin – Phase 3 (ACMA3)",
    description: "Phase 3 of the ACMA3 project (2022-2027)...",
    country: "Benin",
    image: "/benin.jpg",
  },
  {
    title: "Building Resilience... (BRIGHT)",
    description: "BRIGHT is building resilience of 100,000 highland farm households in Uganda...",
    country: "Uganda",
    image: "/uganda.jpg",
  },
  {
    title: "Creating Resilience... (BRIGHT)",
    description: "BRIGHT is building resilience of 100,000 highland farm households in Uganda...",
    country: "Uganda",
    image: "/uganda.jpg",
  },
  {
    title: "Generating Resilience... (BRIGHT)",
    description: "BRIGHT is building resilience of 100,000 highland farm households in Uganda...",
    country: "Uganda",
    image: "/uganda.jpg",
  },
];
const dropdownOptions = {
  Countries: [
    "Show All", "Benin", "Uganda", "Ghana", "Nigeria", "Kenya",
    "Tanzania", "Zambia", "South Sudan", "Cameroon", "Burkina Faso",
  ],
  Expertise: ["Agronomy", "Irrigation", "Livestock", "Forestry"],
  Tags: ["Climate", "Resilience", "Sustainability"],
  Status: ["Active", "Completed", "Pipeline"],
};


export default function ProjectCarousel() {

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const [setCurrentIndex] = useState(0)
 const [currentIndex, setCurrentIndex] = useState(0);

  const [showMap, setShowMap] = useState(false);
    // const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      }
    }
  };

  const next = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % projects.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + projects.length) % projects.length;
      scrollToIndex(prevIndex);
      return prevIndex;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-4 bg-white">
          <SolutionHeader />
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="bg-[#e2e0c6] p-4 flex flex-wrap justify-center gap-6 relative">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700">Show Map</span>
          <button
            onClick={() => setShowMap(!showMap)}
            className={`w-10 h-5 rounded-full transition ${
              showMap ? "bg-orange-400" : "bg-gray-300"
            } relative`}
          >
            <div
              className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition ${
                showMap ? "left-5 -translate-x-full" : "left-0.5"
              }`}
            ></div>
          </button>
        </div>

        {Object.keys(dropdownOptions).map((label) => (
          <div
            key={label}
            className="relative"
            onMouseEnter={() => setOpenDropdown(label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-semibold text-gray-700">
              {label} <span className="ml-1">⌄</span>
            </button>
            {openDropdown === label && (
              <div className="absolute z-10 bg-green-500 text-white p-4 grid grid-cols-2 gap-2 mt-2 min-w-max">
                {dropdownOptions[label].map((option) => (
                  <div key={option}>{option}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showMap && (
        <div className="h-64 bg-gray-200 flex items-center justify-center text-xl font-semibold text-green-700 mt-4">
          Map Component Placeholder
        </div>
      )}
    <div className="relative mt-8 px-4">
      {/* Arrow Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        ▶
      </button>

      {/* Scrollable Carousel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 w-full scrollbar-hide"
      >
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 snap-start w-[300px] md:w-[500px] bg-white rounded shadow p-4 relative"
          >
            <div className="border-t-4 border-green-500 pt-2 mb-2 text-sm text-gray-600">
              {proj.country}
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              {proj.title} →
            </h3>
            <p className="text-gray-600 text-sm">{proj.description}</p>
            <Image
              src={proj.image}
              alt={proj.country}
              width={100}
              height={100}
              className="absolute top-0 right-0 rounded-md mt-2 mr-2"
            />
          </div>
        ))}
      </div>
       {/* 👇 Add this below the carousel */}
  <div className="text-center text-sm text-gray-600 mt-2">
    Showing project {currentIndex + 1} of {projects.length}
  </div>
    </div>
    </section>
  );
}
