"use client";

import { useState } from "react";

const jobData = [
  { type: "Full Time Africa", title: "Chargé de Projet – SIHAM/FSRP-Phase 2 – Bureau des Programmes", location: "Lome, Togo" },
  { type: "Full Time Africa", title: "Consultant en Renforcement des capacités des producteurs agricoles sur la préparation du compost - PDRI-GKM - Office of Programs - Soil Health", location: "Conakry, Guinea" },
  { type: "Full Time Africa", title: "Lobbying, Advocacy and Governance Trainer - BRIGHT Project – Office of Programs - Soil Health", location: "Bugolobi, Kampala, Uganda" },
  { type: "Full Time Africa", title: "Technicien de terrain en charge des Technologies de l’Information et de la Communication (TIC)– SIHAM/FSRP-Phase 2 -Département Enabling Impact – Bureau des Programmes", location: "Lome, Togo" },
  { type: "Full Time United States", title: "Controller – Office of Finance", location: "Washington, District of Columbia, United States" },
  { type: "Full Time United States", title: "Senior Scientist – Formulations – Research & Innovation Department", location: "Muscle Shoals, Alabama, United States" },
  { type: "In-Country Consultancy", title: "Jeune Professionnel (JP) Agent Terrain – Programme Soil Values Mali", location: "Bamako, Mali" },
  { type: "In-Country Consultancy", title: "Media Agency Consultancy Opportunity - Nigeria", location: "Abuja, Nigeria" },
];

// Extract unique locations for the dropdown
const locations = Array.from(new Set(jobData.map((job) => job.location))).sort();

export default function Jobs() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const clearFilters = () => {
    setLocation("");
    setCategory("");
  };

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (location ? job.location === location : true) &&
      (category ? job.type === category : true)
  );

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  return (
    <div className="p-1 md:p-28">
        <h1 className="font-bold text-5xl md:m-20 text-left mb-7">Careers</h1>
         {/* Search Bar */}
      <div className="px-9 md:px-48">
      <div className="mb-6 flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Search jobs by keywords"
          className="w-full border border-gray-300 p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Toggle Filters */}
      <div className="flex justify-between text-blue-600 mb-4">
        <button onClick={toggleFilters} className="hover:underline">
          {filtersVisible ? "Hide search filters" : "Show search filters"}
        </button>
        {filtersVisible && (
          <button onClick={clearFilters} className="hover:underline">
            Clear filters
          </button>
        )}
      </div>

      {/* Filters */}
      {filtersVisible && (
        <div className="space-y-4 mb-6">
          {/* Search by Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Search jobs by Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Locations</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Search by Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Search jobs by category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Categories</option>
              <option value="Full Time Africa">Full Time Africa</option>
              <option value="Full Time United States">Full Time United States</option>
              <option value="In-Country Consultancy">In-Country Consultancy</option>
            </select>
          </div>
              <div className="w-full flex justify-center">
              <button className="w-56 bg-green-400 py-3.5 mx-auto">SEARCH</button>

              </div>
        </div>
      )}

     

      {/* Job Listings */}
      <div>
        {["Full Time Africa", "Full Time United States", "In-Country Consultancy"].map(
          (section) => (
            <div key={section} className="mb-8">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">
                {section}
              </h2>
              <div className="space-y-2">
                {paginatedJobs
                  .filter((job) => job.type === section)
                  .map((job, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 p-3 rounded hover:bg-gray-50"
                    >
                      <h3 className="font-medium text-gray-800">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.location}</p>
                    </div>
                  ))}
              </div>
            </div>
          )
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 text-sm">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          &lt; Prev
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next &gt;
        </button>
      </div>

      {/* Footer */}
      <p className="text-center mt-6 text-gray-500">
        Not finding the perfect opportunity?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Submit Your Resume/CV
        </a>
      </p>
      </div>
    </div>
  );
}
