"use client";
import { useState } from "react";
import Image from "next/image";

type FilterKey = "category" | "expertise" | "country";

type Filters = {
  category: string;
  expertise: string;
  country: string;
};

const data = [
  {
    category: "Reports",
    expertise: "Infrastructure Projects",
    country: "Global",
    title: "Azim Breaks Ground on Major Transnational Highway Project",
    date: "May 9, 2025",
    image: "/a.png",
  },
  {
    category: "Updates",
    expertise: "Commercial Construction",
    country: "West Africa",
    title: "Azim Completes West Africa Trade Center Ahead of Schedule",
    date: "March 10, 2022",
    image: "/a.png",
  },
  {
    category: "Case Studies",
    expertise: "Residential Housing",
    country: "West Africa",
    title: "Innovative Housing Designs for Urban Expansion",
    date: "August 21, 2021",
    image: "/a.png",
  },
  {
    category: "Briefs",
    expertise: "Public Works",
    country: "East Africa",
    title: "Azim Secures Government Contract for Road Reconstruction",
    date: "January 5, 2023",
    image: "/a.png",
  },
  {
    category: "Whitepapers",
    expertise: "Policy & Regulation",
    country: "Global",
    title: "Navigating Construction Compliance in Emerging Markets",
    date: "November 14, 2021",
    image: "/a.png",
  },
  {
    category: "Reports",
    expertise: "Green Building",
    country: "Southern Africa",
    title: "Sustainable Design Trends in African Construction",
    date: "July 8, 2022",
    image: "/a.png",
  },
  {
    category: "Insights",
    expertise: "Project Management",
    country: "Central Africa",
    title: "How Azim Optimizes Large-Scale Infrastructure Timelines",
    date: "April 3, 2023",
    image: "/a.png",
  },
  {
    category: "Briefs",
    expertise: "Technology & Innovation",
    country: "West Africa",
    title: "Implementing Drones for Site Surveys and Safety Monitoring",
    date: "October 12, 2021",
    image: "/a.png",
  },
  {
    category: "Reports",
    expertise: "Materials & Logistics",
    country: "North Africa",
    title: "Forecasting Cement and Steel Supply in 2025",
    date: "February 18, 2023",
    image: "/a.png",
  },
  {
    category: "Studies",
    expertise: "Diversity & Workforce",
    country: "Global",
    title: "Empowering Women in the Construction Sector",
    date: "March 30, 2022",
    image: "https://via.placeholder.com/150",
  },
  {
    category: "Reports",
    expertise: "Transportation Infrastructure",
    country: "West Africa",
    title: "Modern Storage and Haulage Facilities: Azim’s New Standard",
    date: "June 27, 2023",
    image: "https://via.placeholder.com/150",
  },
  {
    category: "Articles",
    expertise: "Private Sector Collaboration",
    country: "East Africa",
    title: "Partnering for Smarter Urban Development Projects",
    date: "September 19, 2022",
    image: "/a.png",
  },
  {
    category: "Tips",
    expertise: "Site Safety",
    country: "Global",
    title: "Top 10 Safety Protocols for Mid-Sized Construction Sites",
    date: "December 2, 2023",
    image: "/a.png",
  },
  {
    category: "Studies",
    expertise: "Workforce Development",
    country: "Central Africa",
    title: "Skilled Labor Shortages and Azim’s Apprenticeship Program",
    date: "May 15, 2024",
    image: "/a.png",
  },
  {
    category: "Reports",
    expertise: "Construction Tech",
    country: "West Africa",
    title: "Leveraging AI and BIM for Smarter Building Sites",
    date: "August 11, 2022",
    image: "/a.png",
  },
];


export default function ResourceFilter() {
  const [filters, setFilters] = useState<Filters>({
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

  const handleFilterChange = (key: FilterKey, value: string) => {
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
            <div className="relative h-40 w-full">
              {item.image.startsWith("http") ? (
  <img
    src={item.image}
    alt={item.title}
    className="object-cover w-full h-full"
  />
) : (
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
)}

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
