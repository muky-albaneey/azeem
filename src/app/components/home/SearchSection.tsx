"use client";import { useState } from "react";

const ExploreWork = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [selectedExpertise, setSelectedExpertise] = useState("Expertise");
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const countries = [
    "Show All",
    "Bangladesh",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Chad",
  ];
  const expertises = [
    "Show All",
    "Catalyzing Farm Productivity",
    "Developing Better Technologies",
    "Enabling Impact",
    "Strengthening Markets",
  ];
  const statuses = ["Show All", "Active", "Concluded"];

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const Dropdown = ({ label, options, selected, onSelect, name }) => (
    <div className="relative w-full lg:w-64 ">
      <button
        onClick={() => toggleDropdown(name)}
        className="w-full p-2 border border-gray-400 rounded-md flex justify-between items-center"
      >
        <span>{selected}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            openDropdown === name ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {openDropdown === name && (
        <div className="absolute top-full left-0 bg-white shadow-md border border-gray-300 rounded-md mt-1 w-full z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(option);
                setOpenDropdown(null);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
   <>
    <div className="flex flex-col items-center p-4 space-y-4 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-4 mt-96 lg:mt-80">
      {/* Country Dropdown */}
      <Dropdown
        label="Country"
        options={countries}
        selected={selectedCountry}
        onSelect={(value) => setSelectedCountry(value)}
        name="country"
      />

      {/* Expertise Dropdown */}
      <Dropdown
        label="Expertise"
        options={expertises}
        selected={selectedExpertise}
        onSelect={(value) => setSelectedExpertise(value)}
        name="expertise"
      />

      {/* Status Dropdown */}
      <Dropdown
        label="Status"
        options={statuses}
        selected={selectedStatus}
        onSelect={(value) => setSelectedStatus(value)}
        name="status"
      />

      {/* Search Button */}
      <button className="p-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600">
        Search
      </button>
    
    </div>
      {/* View All Projects */}
      <div className="w-full flex justify-center">
      <button className="mt-4 text-gray-700 hover:text-black lg:mt-0 m-auto">
        View All Projects →
      </button>
      </div>
      </>
  );
};

export default ExploreWork;
