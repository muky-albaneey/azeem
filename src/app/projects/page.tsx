"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
// import Navigation from "@/components/navigation";

interface Project {
  id: string;
  title: string;
  location: string;
  status?: string;
  image: string;
  description: string;
  isHighlighted?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "SeedNigeria Infrastructure Development",
    location: "Burkina Faso, Mali, Niger, Nigeria",
    image: "/a_pro1.jpeg",
    description: "A multi-country infrastructure project aimed at developing sustainable housing and utility systems, targeting job creation and improved urban resilience."
  },
  {
    id: "2", 
    title: "Soil Values Road Network Expansion",
    location: "Burkina Faso, Mali, Niger, Nigeria",
    image: "/a_pro2.jpeg",
    description: "A 10-year program focused on constructing and upgrading critical rural roads and drainage systems to facilitate transportation and logistics."
  },
  {
    id: "3",
    title: "SOILS-Space to Place Urban Planning Project",
    location: "Ghana, Kenya, Malawi, Mozambique, Niger, Tanzania, Uganda, Zambia",
    image: "/a_pro3.jpeg",
    description: "A regional effort to modernize city layouts, build affordable housing, and improve waste and water infrastructure across 8 countries."
  },
  {
    id: "4",
    title: "AGAMA-3: Commercial Facility Construction",
    location: "Benin",
    image: "/a_pro1.jpeg",
    description: "Construction of rural market centers, warehouses, and road links to improve agricultural trade infrastructure in Benin."
  },
  {
    id: "5",
    title: "Integrated Rural Development Infrastructure (PDRI/GKM)",
    location: "Guinea",
    image: "...",
    description: "Development of bridges, rural roads, and community buildings to support local infrastructure in Guinea’s interior regions."
  },
  {
    id: "6", 
    title: "Value4Dairy Cold Chain Infrastructure",
    location: "Nigeria",
    image: "...",
    description: "Construction of milk collection centers, cold storage units, and distribution depots for Nigeria's growing dairy sector."
  },
  {
    id: "7",
    title: "TRANSFORM: National Soil Lab Facilities",
    location: "Ethiopia", 
    image: "...",
    description: "Building laboratory and research centers to support soil testing and environmental management through modern infrastructure."
  },
  {
    id: "8",
    title: "CIFSH: Soil Health & Logistics Infrastructure",
    location: "Multi-country",
    image: "...",
    description: "Development of central soil testing facilities and logistics bases to strengthen regional supply chains and restoration programs."
  },
  {
    id: "9",
    title: "Sustain Africa Emergency Infrastructure",
    location: "Burkina Faso",
    status: "Concluded",
    image: "...",
    description: "Emergency road and shelter construction in response to regional food and climate crises in Burkina Faso."
  },
  {
    id: "10",
    title: "Triple Resilience Construction Program",
    location: "Mozambique",
    image: "...",
    description: "A project focused on building disaster-resilient housing and transport infrastructure in vulnerable regions of Mozambique."
  }
];

const additionalProjects: Project[] = [
  {
    id: "11",
    title: "Bangladesh Climate-Resilient Infrastructure",
    location: "Bangladesh",
    status: "Concluded",
    image: "...",
    description: "Construction of elevated roads, flood protection walls, and storm-resilient buildings in climate-affected areas."
  },
  {
    id: "12",
    title: "Sikasso Infrastructure Expansion Project",
    location: "Mali",
    image: "...",
    description: "Improving road access, irrigation infrastructure, and market centers in Mali’s Sikasso region."
  },
  {
    id: "13",
    title: "Benin Communal Infrastructure Development",
    location: "Benin",
    image: "...",
    description: "Development of roads and public service buildings to support economic activities across communes in northern Benin."
  },
  {
    id: "14",
    title: "Uganda Growth Through Infrastructure",
    location: "Uganda",
    image: "...",
    description: "Construction of schools, roads, and energy infrastructure to stimulate inclusive economic growth."
  },
  {
    id: "15",
    title: "Nigeria Rural Infrastructure Resilience",
    location: "Nigeria",
    status: "Concluded",
    image: "...",
    description: "Road and shelter construction for conflict-affected rural communities, boosting resilience and connectivity."
  },
  {
    id: "16",
    title: "Myanmar Fertilizer Plant & Transport Hub",
    location: "Myanmar",
    status: "Concluded", 
    image: "...",
    description: "Construction of fertilizer production and distribution infrastructure to enhance agricultural logistics."
  },
  {
    id: "17",
    title: "Mali Micro-Dam and Road Construction",
    location: "Mali",
    status: "Concluded",
    image: "...",
    description: "Scaling construction of small-scale dams and feeder roads for increased agricultural productivity and water access."
  },
  {
    id: "18",
    title: "Bangladesh Sustainable Soil Infrastructure",
    location: "Bangladesh",
    status: "Concluded",
    image: "...",
    description: "Infrastructure to support soil testing and research, including labs and training centers for sustainable land use."
  }
];


const yellowCardProjects: Project[] = [
  {
    id: "19",
    title: "AVPI: Vegetable Market Infrastructure",
    location: "Bangladesh",
    status: "Concluded",
    image: "",
    description: "Building modern storage, processing, and trading facilities for vegetable producers in Bangladesh.",
    isHighlighted: true
  },
  {
    id: "20", 
    title: "ISSD/Sahel: Seed Infrastructure Development",
    location: "Mali, Niger",
    image: "",
    description: "Construction of seed processing plants, storage units, and transportation routes in the Sahel region.",
    isHighlighted: true
  },
  {
    id: "21",
    title: "A3-SEED: South Sudan Construction Initiative",
    location: "South Sudan",
    image: "",
    description: "Developing urban roads, housing, and commercial infrastructure to support economic recovery.",
    isHighlighted: true
  },
  {
    id: "22",
    title: "AFI: Soil Health & Market Access Infrastructure",
    location: "India",
    status: "Concluded",
    image: "",
    description: "Upgrading transport and storage facilities to improve market access and support sustainable soil practices.",
    isHighlighted: true
  },
  {
    id: "23",
    title: "PAPAB: Infrastructure Support for Productivity",
    location: "Burundi", 
    status: "Concluded",
    image: "",
    description: "Construction of small bridges, rural feeder roads, and water infrastructure to improve farming access.",
    isHighlighted: true
  },
  {
    id: "24",
    title: "PSSD: Private Sector Infrastructure Boost",
    location: "Burundi",
    image: "",
    description: "Supporting private seed companies with new warehouse and logistics infrastructure.",
    isHighlighted: true
  },
  {
    id: "25",
    title: "TRIMING: Irrigation and Civil Works Supervision",
    location: "Nigeria",
    status: "Concluded", 
    image: "",
    description: "Overseeing construction of major irrigation and canal systems as part of Nigeria’s agricultural transformation agenda.",
    isHighlighted: true
  },
  {
    id: "26",
    title: "TAAT: Regional Infrastructure for Fertilizer Use",
    location: "Benin, Burkina Faso, Ghana, Mali, Nigeria",
    status: "Concluded",
    image: "",
    description: "Building regional infrastructure for fertilizer blending, distribution, and farmer training centers.",
    isHighlighted: true
  },
  {
    id: "27",
    title: "SAPEP: Rural Productivity Infrastructure Program",
    location: "Benin, Burkina Faso, Cameroon, Mali, Niger",
    status: "Concluded",
    image: "",
    description: "Infrastructure program focused on constructing small irrigation works, silos, and feeder roads across West Africa.",
    isHighlighted: true
  },
  {
    id: "28",
    title: "REACH-Uganda: Agribusiness Facility Development",
    location: "Uganda",
    status: "Concluded",
    image: "",
    description: "Developing agribusiness parks, industrial sheds, and logistics centers for SMEs in Uganda.",
    isHighlighted: true
  }
];


export default function ProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMap, setShowMap] = useState(true);
  const [showPartnersModal, setShowPartnersModal] = useState(false);

  const [filterDropdowns, setFilterDropdowns] = useState({
    countries: false,
    expertise: false,
    year: false,
    status: false
  });
  // const sliderRef = useRef<HTMLDivElement>(null);

  const allProjects = [...projects, ...additionalProjects, ...yellowCardProjects];
  const projectsPerSlide = 4;
  const totalSlides = Math.ceil(allProjects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const toggleDropdown = (dropdown: keyof typeof filterDropdowns) => {
    setFilterDropdowns(prev => ({
      countries: false,
      expertise: false,
      year: false,
      status: false,
      [dropdown]: !prev[dropdown]
    }));
  };

  const getCurrentSlideProjects = () => {
    const startIndex = currentSlide * projectsPerSlide;
    return allProjects.slice(startIndex, startIndex + projectsPerSlide);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setFilterDropdowns({
          countries: false,
          expertise: false,
          year: false,
          status: false
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">Projects</h1>
        </div>
      </section>

      {/* Map and Filters Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setShowMap(!showMap)}
            >
              {showMap ? 'Hide Map' : 'Show Map'}
            </Button>
            
            <div className="relative">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-gray-900 flex items-center"
                onClick={() => toggleDropdown('countries')}
              >
                Countries <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
              {filterDropdowns.countries && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    {['Bangladesh', 'Benin', 'Burkina Faso', 'Burundi', 'Ethiopia', 'Ghana', 'Guinea', 'India', 'Kenya', 'Mali', 'Mozambique', 'Myanmar', 'Niger', 'Nigeria', 'South Sudan', 'Tanzania', 'Uganda', 'Zambia'].map((country) => (
                      <div key={country} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-gray-900 flex items-center"
                onClick={() => toggleDropdown('expertise')}
              >
                Expertise <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
              {filterDropdowns.expertise && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    {['Agricultural Development', 'Soil Health', 'Fertilizer Technology', 'Market Systems', 'Seed Systems', 'Climate Smart Agriculture', 'Value Chain Development', 'Nutrition', 'Research & Development'].map((expertise) => (
                      <div key={expertise} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
                        {expertise}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-gray-900 flex items-center"
                onClick={() => toggleDropdown('year')}
              >
                Year <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
              {filterDropdowns.year && (
                <div className="absolute top-full left-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    {['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'].map((year) => (
                      <div key={year} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
                        {year}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-gray-900 flex items-center"
                onClick={() => toggleDropdown('status')}
              >
                Status <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
              {filterDropdowns.status && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    {['Active', 'Concluded', 'Planned', 'On Hold'].map((status) => (
                      <div key={status} className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
                        {status}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map Placeholder */}
          {showMap && (
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-64 rounded-lg flex items-center justify-center mb-8 transition-all duration-300">
              <p className="text-gray-600 text-lg">Interactive World Map</p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Slider Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Slider Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#D4ADFC]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {getCurrentSlideProjects().map((project) => (
              <Card key={project.id} className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                project.isHighlighted ? 'bg-yellow-200 border-yellow-300' : 'bg-white'
              }`}>
                <div className="relative">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className={`w-full h-48 flex items-center justify-center rounded-t-lg ${
                      project.isHighlighted ? 'bg-[#D4ADFC]' : 'bg-gray-200'
                    }`}>
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">?</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <div className="bg-[#D4ADFC] h-1 w-16"></div>
                  </div>
                  {project.status && (
                    <div className="absolute top-2 right-2 bg-[#D4ADFC] text-black px-2 py-1 rounded text-xs font-medium">
                      {project.status}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="text-xs text-gray-500 mb-2">{project.location}</div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#D4ADFC] transition-colors flex items-start">
                    {project.title}
                    <ArrowRight className="w-4 h-4 ml-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-600">
            <p>{allProjects.length} results</p>
          </div>
        </div>
      </section>

      {/* Additional Project Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
              <div className="flex">
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80"
                  alt="Project"
                  className="w-20 h-20 object-cover rounded-l-lg"
                />
                <CardContent className="p-4 flex-1">
                  <div className="text-xs text-orange-600 font-medium mb-1">Senegal</div>
                  <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#D4ADFC] transition-colors flex items-center">
  Infrastructure Development Project in Guinea (IDPG)
  <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
</h3>

                </CardContent>
              </div>
              <div className="bg-[#D4ADFC] h-1 w-full"></div>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
              <div className="flex">
                <img 
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80"
                  alt="Project"
                  className="w-20 h-20 object-cover rounded-l-lg"
                />
                <CardContent className="p-4 flex-1">
                  <div className="text-xs text-orange-600 font-medium mb-1">Burkina</div>
                 <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#D4ADFC] transition-colors flex items-center">
  Construction and Infrastructure Development Project in Guinea (CIDPG)
  <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
</h3>

                </CardContent>
              </div>
              <div className="bg-[#D4ADFC] h-1 w-full"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
    <section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-10">
      Let&apos;s partner together to drive infrastructure development across communities
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
      {[
        { name: "IFDC", description: "Innovative agricultural solutions across the globe." },
        { name: "USAID", description: "Partnering for sustainable development worldwide." },
        { name: "GIZ", description: "Driving economic and social progress through partnerships." },
      ].map((partner, idx) => (
        <Card key={idx} className="bg-gray-50 p-4 shadow-sm hover:shadow-md transition">
          <CardContent>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h3>
            <p className="text-sm text-gray-600">{partner.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <Button
      className="bg-g[#D4ADFC] hover:bg-[#D4ADFC] text-white px-8 py-3 text-lg"
      onClick={() => setShowPartnersModal(true)}
    >
      Learn about partnerships
    </Button>
  </div>
</section>

{showPartnersModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" style={{ background:'rgba(0,0,0,.8)' }}>
    <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
      <button
        onClick={() => setShowPartnersModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["IFDC", "USAID", "GIZ", "AGRA","Muky","Tech M"].map((partner, idx) => (
          <Card key={idx} className="bg-gray-50 hover:shadow-md transition p-4">
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-700">{partner}</h3>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
)}

    </div>
  );
}