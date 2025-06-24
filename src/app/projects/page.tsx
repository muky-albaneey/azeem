"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
    title: "SeedNigeria",
    location: "Burkina Faso, Mali, Niger, Nigeria",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "SeedNigeria program (2021-2023), funded by the Embassy of the Kingdom of the Netherlands (EKN) in Nigeria, aims to facilitate the development of a sustainable and viable horticulture sector that contributes to food and nutrition security in Nigeria. The program targets 2,000 jobs and 15% are women, and have improved productivity and [...]"
  },
  {
    id: "2", 
    title: "Soil Values",
    location: "Burkina Faso, Mali, Niger, Nigeria",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Soil Values, a 10-year program (2024-2034) financed by the Netherlands Directorate-General for International Cooperation (DGIS), is a transformative inclusive smallholder agriculture project that builds upon the Sahel Biofortification [...]"
  },
  {
    id: "3",
    title: "SOILS-Space to Place",
    location: "Ghana, Kenya, Malawi, Mozambique, Niger, Tanzania, Uganda, Zambia",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200", 
    description: "Diverse African agricultural lands barely to meet the needs of an expanding population. SOILS-Space to Place rapidly scales innovations in efficiency and obsolete production methods working [...]"
  },
  {
    id: "4",
    title: "Agricultural Market Access Phase 3 (AGAMA-3)",
    location: "Benin",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Phase 1 of the Central African Republic (CAR) Value Chain Development Project aims to reduce poverty, increase market productivity and strengthen market functioning [...]"
  },
  {
    id: "5",
    title: "Integrated Rural Development in Gaoual, Koundara, and Mali (PDRI/GKM)",
    location: "Guinea",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "The project focuses on integrated rural development in three regions of Guinea."
  },
  {
    id: "6", 
    title: "Value4Dairy",
    location: "Nigeria",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "A comprehensive dairy value chain development project in Nigeria."
  },
  {
    id: "7",
    title: "Transform Soil Fertility Management in Ethiopia (TRANSFORM)",
    location: "Ethiopia", 
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Transforming soil fertility management practices across Ethiopia."
  },
  {
    id: "8",
    title: "Coalition of Implementors for Fertilizers and Soil Health (CIFSH)",
    location: "Multi-country",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "A coalition working on fertilizers and soil health initiatives."
  },
  {
    id: "9",
    title: "Sustain Africa Burkina Faso: Emergency Response and Resilience Initiative to Mitigate Food Insecurity and Build Resilience in Burkina Faso",
    location: "Burkina Faso",
    status: "Concluded",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Emergency response initiative to address food insecurity in Burkina Faso."
  },
  {
    id: "10",
    title: "Triple Resilience (3R)",
    location: "Mozambique",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Building resilience through agricultural interventions in Mozambique."
  }
];

const additionalProjects: Project[] = [
  {
    id: "11",
    title: "Feed the Future Bangladesh Climate Smart Agriculture Project",
    location: "Bangladesh",
    status: "Concluded",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Climate smart agriculture initiatives in Bangladesh."
  },
  {
    id: "12",
    title: "Feed the Future Mali Seme Yiriwa Agricultural Production Activities in Sikasso Project",
    location: "Mali",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Agricultural production enhancement in Mali's Sikasso region."
  },
  {
    id: "13",
    title: "Communal Approach to the Agriculture Marketing Promotion in the Communes of Central and North Benin",
    location: "Benin",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Community-based agricultural marketing initiatives in Benin."
  },
  {
    id: "14",
    title: "Building Resilience and Inclusive Growth",
    location: "Uganda",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Building resilience and promoting inclusive economic growth in Uganda."
  },
  {
    id: "15",
    title: "Feed the Future Nigeria Rural Resilience Activity", 
    location: "Nigeria",
    status: "Concluded",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Rural resilience building activities in Nigeria."
  },
  {
    id: "16",
    title: "The Fertilizer Sector Improvement Project (FSI+)",
    location: "Myanmar",
    status: "Concluded", 
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Fertilizer sector improvement initiatives in Myanmar."
  },
  {
    id: "17",
    title: "Scaling Up Fertilizer Deep Placement and Microdosing Technologies in Mali (FDP MD)",
    location: "Mali",
    status: "Concluded",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Scaling fertilizer placement technologies in Mali."
  },
  {
    id: "18",
    title: "The Sustainable Soil Management Component (SSMC) of the OCP Foundation Agricultural Development Project",
    location: "Bangladesh",
    status: "Concluded",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    description: "Sustainable soil management project in Bangladesh."
  }
];

const yellowCardProjects: Project[] = [
  {
    id: "19",
    title: "Accelerating Vegetable Productivity Improvement Project (AVPI)",
    location: "Bangladesh",
    status: "Concluded",
    image: "",
    description: "Improving vegetable productivity in Bangladesh.",
    isHighlighted: true
  },
  {
    id: "20", 
    title: "Integrated Seed Sector Development in the Sahel (ISSD/Sahel)",
    location: "Mali, Niger",
    image: "",
    description: "Integrated seed sector development across Sahel regions.",
    isHighlighted: true
  },
  {
    id: "21",
    title: "Accelerating Agriculture and Agribusiness in South Sudan for Enhanced Economic Development (A3-SEED)",
    location: "South Sudan",
    image: "",
    description: "Accelerating agricultural development in South Sudan.",
    isHighlighted: true
  },
  {
    id: "22",
    title: "Accelerating Farm Incomes: Building Sustainable Soil Health, Markets, and Productivity (AFI)",
    location: "India",
    status: "Concluded",
    image: "",
    description: "Building sustainable agricultural systems in India.",
    isHighlighted: true
  },
  {
    id: "23",
    title: "Supporting Agricultural Productivity in Burundi (PAPAB)",
    location: "Burundi", 
    status: "Concluded",
    image: "",
    description: "Supporting agricultural productivity improvements in Burundi.",
    isHighlighted: true
  },
  {
    id: "24",
    title: "Private Seed Sector Development (PSSD)",
    location: "Burundi",
    image: "",
    description: "Developing private seed sector in Burundi.",
    isHighlighted: true
  },
  {
    id: "25",
    title: "Transforming Irrigation Management in Nigeria (TRIMING) Extension Service Supervision Project",
    location: "Nigeria",
    status: "Concluded", 
    image: "",
    description: "Transforming irrigation management systems in Nigeria.",
    isHighlighted: true
  },
  {
    id: "26",
    title: "Technologies for African Agricultural Transformation (TAAT): Soil Fertility Enabler",
    location: "Benin, Burkina Faso, Ghana, Mali, Nigeria",
    status: "Concluded",
    image: "",
    description: "Soil fertility technologies for African agricultural transformation.",
    isHighlighted: true
  },
  {
    id: "27",
    title: "Smallholder Agricultural Productivity Enhancement Program (SAPEP)",
    location: "Benin, Burkina Faso, Cameroon, Mali, Niger",
    status: "Concluded",
    image: "",
    description: "Enhancing smallholder agricultural productivity across West Africa.",
    isHighlighted: true
  },
  {
    id: "28",
    title: "Resilient Efficient Agribusiness Chains in Uganda (REACH-Uganda)",
    location: "Uganda",
    status: "Concluded",
    image: "",
    description: "Building resilient agribusiness chains in Uganda.",
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
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
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
                      project.isHighlighted ? 'bg-yellow-300' : 'bg-gray-200'
                    }`}>
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">?</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <div className="bg-green-600 h-1 w-16"></div>
                  </div>
                  {project.status && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                      {project.status}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="text-xs text-gray-500 mb-2">{project.location}</div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors flex items-start">
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
                  <h3 className="font-bold text-gray-800 text-sm group-hover:text-green-600 transition-colors flex items-center">
                    Agricultural Value Chain Development Project in Guinea (PDCVA-G)
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </CardContent>
              </div>
              <div className="bg-yellow-400 h-1 w-full"></div>
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
                  <h3 className="font-bold text-gray-800 text-sm group-hover:text-green-600 transition-colors flex items-center">
                    Agricultural Value Chain Development Project in Guinea (PDCVA-G)
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </CardContent>
              </div>
              <div className="bg-yellow-400 h-1 w-full"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
    <section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-10">
      Let's partner together to increase food security and sustainability
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
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
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