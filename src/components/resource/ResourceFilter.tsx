"use client";
import { useState } from "react";
import Image from "next/image";

const data = [
    {
      category: "Papers",
      expertise: "Enabling Impact",
      country: "Global",
      title: "Protected: Digging Deeper: Soil Health as the Game Changer for Poverty Reduction",
      date: "May 9, 2025",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Reports",
      expertise: "Catalyzing Farm Productivity",
      country: "West Africa",
      title: "West Africa Fertilizer Business Information Guide: Second Edition (2022)",
      date: "March 10, 2022",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Reports",
      expertise: "Catalyzing Farm Productivity",
      country: "West Africa",
      title: "Existing and Potential Business Models on Last Mile Delivery of Seeds",
      date: "August 21, 2021",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Briefs",
      expertise: "Market Access",
      country: "East Africa",
      title: "Improving Access to Inputs for Smallholder Farmers in Uganda",
      date: "January 5, 2023",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Studies",
      expertise: "Policy & Advocacy",
      country: "Global",
      title: "The Role of Government in Fertilizer Subsidy Programs",
      date: "November 14, 2021",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Reports",
      expertise: "Sustainable Agriculture",
      country: "Southern Africa",
      title: "Climate-Smart Agriculture: Adoption Trends and Impacts",
      date: "July 8, 2022",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Papers",
      expertise: "Enabling Impact",
      country: "Central Africa",
      title: "Case Studies on Fertilizer Efficiency for Cassava and Maize",
      date: "April 3, 2023",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Briefs",
      expertise: "Digital Tools",
      country: "West Africa",
      title: "Using Mobile Platforms to Increase Farmer Awareness",
      date: "October 12, 2021",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Reports",
      expertise: "Catalyzing Farm Productivity",
      country: "North Africa",
      title: "Fertilizer Market Outlook and Price Trends (2023)",
      date: "February 18, 2023",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Studies",
      expertise: "Gender & Inclusion",
      country: "Global",
      title: "Empowering Women in Agricultural Value Chains",
      date: "March 30, 2022",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Reports",
      expertise: "Infrastructure Development",
      country: "West Africa",
      title: "Storage and Transportation Solutions for Input Access",
      date: "June 27, 2023",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Papers",
      expertise: "Enabling Impact",
      country: "East Africa",
      title: "Public-Private Partnerships in Agricultural Inputs",
      date: "September 19, 2022",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Briefs",
      expertise: "Soil Health",
      country: "Global",
      title: "Best Practices for Maintaining Soil Organic Matter",
      date: "December 2, 2023",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Studies",
      expertise: "Catalyzing Farm Productivity",
      country: "Central Africa",
      title: "Adoption Barriers to Improved Fertilizer Use",
      date: "May 15, 2024",
      image: "https://via.placeholder.com/150",
    },
    {
      category: "Reports",
      expertise: "Digital Tools",
      country: "West Africa",
      title: "AI and Data Analytics in Fertilizer Distribution",
      date: "August 11, 2022",
      image: "https://via.placeholder.com/150",
    },
  ];
  

export default function ResourceFilter() {
  const [filters, setFilters] = useState({
    category: "",
    expertise: "",
    country: "",
  });

  const filteredData = data.filter((item) => {
    return (
      (filters.category === "" || item.category === filters.category) &&
      (filters.expertise === "" || item.expertise === filters.expertise) &&
      (filters.country === "" || item.country === filters.country)
    );
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ category: "", expertise: "", country: "" });
  };

  return (
    <div className="p-6">
      {/* Filter Controls */}
      <div className="flex  mb-6 justify-center gap-10 flex-col md:flex-row">
        <select
          className="border p-2 rounded"
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="">Resource Categories</option>
          <option value="Papers">Papers</option>
          <option value="Reports">Reports</option>
        </select>
        <select
          className="border p-2 rounded"
          value={filters.expertise}
          onChange={(e) => handleFilterChange("expertise", e.target.value)}
        >
          <option value="">Expertise</option>
          <option value="Enabling Impact">Enabling Impact</option>
          <option value="Catalyzing Farm Productivity">
            Catalyzing Farm Productivity
          </option>
        </select>
        <select
          className="border p-2 rounded"
          value={filters.country}
          onChange={(e) => handleFilterChange("country", e.target.value)}
        >
          <option value="">Countries</option>
          <option value="Global">Global</option>
          <option value="West Africa">West Africa</option>
        </select>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            {/* <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover"
            /> */}
            <div className="relative h-40 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {item.category} | {item.expertise} | {item.country}
              </p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
