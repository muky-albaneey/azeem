"use client";import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo, useRef } from "react";
// import Navigation from "@/components/navigation";

interface NewsEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  country: string;
  expertise: string;
  type: "News" | "Event Recap" | "Success Stories" | "Insights" | "Multimedia";
}

const newsEvents: NewsEvent[] = [
  {
    id: "1",
    title: "Azimco Hosts Regional Summit on Sustainable Construction Practices",
    category: "Event Recap",
    date: "June 23, 2025",
    image: "https://content.thebrief24.com/wp-content/uploads/2023/03/29231211/da2cd1ae610e6e4c1d898a7552b7bbf8.jpg",
    country: "Africa",
    expertise: "Sustainable Building",
    type: "Event Recap"
  },
  {
    id: "2",
    title: "Azimco Partners with Local Contractors to Boost Urban Housing in Uganda",
    category: "Success Stories",
    date: "June 16, 2025",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/thumb/fitandfill/1200X630/1737099256-8278.jpg",
    country: "Uganda",
    expertise: "Urban Development",
    type: "Success Stories"
  },
  {
    id: "3",
    title: "Azimco Signs MoU to Expand Infrastructure Development Across Africa",
    category: "News",
    date: "June 9, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyyws0t2EqkZBWPGlh5mEofTbWvS5HMLyrjrjLpcLitzNYouClotVaJX52gT5gWQeaj4&usqp=CAU",
    country: "Africa",
    expertise: "Infrastructure Policy",
    type: "News"
  },
  {
    id: "4",
    title: "Reducing Construction Waste with Innovative Site Management Techniques",
    category: "Success Stories",
    date: "June 4, 2025",
    image: "https://content.thebrief24.com/wp-content/uploads/2023/03/29231211/da2cd1ae610e6e4c1d898a7552b7bbf8.jpg",
    country: "Nigeria",
    expertise: "Site Management",
    type: "Success Stories"
  },
  {
    id: "5",
    title: "Revolutionizing Construction in Burundi with Prefabricated Materials",
    category: "Success Stories",
    date: "May 28, 2025",
    image: "https://images.unsplash.com/photo-1591073113125-bd9c1d44b45c?auto=format&fit=crop&w=400&h=250",
    country: "Burundi",
    expertise: "Prefabrication",
    type: "Success Stories"
  },
  {
    id: "6",
    title: "Azimco Supports Uganda’s Vision 2040 with Infrastructure Expansion Projects",
    category: "Success Stories",
    date: "May 27, 2025",
    image: "https://content.thebrief24.com/wp-content/uploads/2023/03/29231211/da2cd1ae610e6e4c1d898a7552b7bbf8.jpg",
    country: "Uganda",
    expertise: "National Development",
    type: "Success Stories"
  },
  {
    id: "7",
    title: "Empowering Local Builders Along the Beira Corridor with Azimco Training Programs",
    category: "Success Stories",
    date: "May 22, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyyws0t2EqkZBWPGlh5mEofTbWvS5HMLyrjrjLpcLitzNYouClotVaJX52gT5gWQeaj4&usqp=CAU",
    country: "Mozambique",
    expertise: "Workforce Development",
    type: "Success Stories"
  },
  {
    id: "8",
    title: "Smart Storage and Water Systems Elevate Construction Efficiency in Bangladesh",
    category: "Success Stories",
    date: "May 19, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyyws0t2EqkZBWPGlh5mEofTbWvS5HMLyrjrjLpcLitzNYouClotVaJX52gT5gWQeaj4&usqp=CAU",
    country: "Bangladesh",
    expertise: "Smart Infrastructure",
    type: "Success Stories"
  },
  {
    id: "9",
    title: "Azimco and Partners Host Forum on Construction Finance and Risk Mitigation in Nigeria",
    category: "Event Recap",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=400&h=250",
    country: "Nigeria",
    expertise: "Construction Finance",
    type: "Event Recap"
  },
  {
    id: "10",
    title: "Infrastructure Boost for Nigeria: New Projects Aim to Bridge Urban-Rural Divide",
    category: "News",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1529429617124-a2951f01c3d0?auto=format&fit=crop&w=400&h=250",
    country: "Nigeria",
    expertise: "Rural Infrastructure",
    type: "News"
  },
  {
    id: "11",
    title: "Azimco Launches Urban Renewal Plan to Rebuild Core Infrastructure in Ethiopia",
    category: "Event Recap",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=250",
    country: "Ethiopia",
    expertise: "Urban Planning",
    type: "Event Recap"
  },
  {
    id: "12",
    title: "Burundi’s First Public-Private Housing Project Breaks Ground",
    category: "News",
    date: "April 24, 2025",
    image: "https://images.unsplash.com/photo-1577908191984-3b1adf2c5f1d?auto=format&fit=crop&w=400&h=250",
    country: "Burundi",
    expertise: "Affordable Housing",
    type: "News"
  },
  {
    id: "13",
    title: "Sustainable Foundations: Azimco’s CEO Shares Vision for Africa’s Built Environment",
    category: "Insights",
    date: "April 23, 2025",
    image: "https://images.unsplash.com/photo-1584980392048-9287d916fd8f?auto=format&fit=crop&w=400&h=250",
    country: "Africa",
    expertise: "Executive Insights",
    type: "Insights"
  },
  {
    id: "14",
    title: "Building with Purpose: Azimco’s Local Projects Making Global Impact",
    category: "Insights",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631a4d692d5?auto=format&fit=crop&w=400&h=250",
    country: "USA",
    expertise: "Corporate Social Responsibility",
    type: "Insights"
  },
  {
    id: "15",
    title: "Visualizing Progress: Azimco Hosts Construction Photography Contest",
    category: "Multimedia",
    date: "April 17, 2025",
    image: "https://images.unsplash.com/photo-1570129477495-e9643b2b4c8e?auto=format&fit=crop&w=400&h=250",
    country: "Global",
    expertise: "Media & Communications",
    type: "Multimedia"
  }
];


const countries = ["All Countries", "Africa", "Bangladesh", "Burundi", "Ethiopia", "Global", "Mozambique", "Nigeria", "Uganda", "USA"];
const expertiseAreas = ["All Expertise", "Agricultural Development", "Communications", "Crop Development", "Finance", "Irrigation", "Livestock", "Market Systems", "Policy", "Post-Harvest", "Research", "Seed Systems", "Soil Health"];
const newsCategories = ["All Categories", "News", "Event Recap", "Success Stories", "Insights", "Multimedia"];

export default function NewsEventsPage() {
    const gridRef = useRef<HTMLDivElement>(null);

// Scroll to top of grid when currentPage changes

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    country: "All Countries",
    expertise: "All Expertise", 
    category: "All Categories"
  });

  const itemsPerPage = 9;

  const filteredEvents = useMemo(() => {
    return newsEvents.filter(event => {
      const countryMatch = filters.country === "All Countries" || event.country === filters.country;
      const expertiseMatch = filters.expertise === "All Expertise" || event.expertise === filters.expertise;
      const categoryMatch = filters.category === "All Categories" || event.type === filters.category;
      
      return countryMatch && expertiseMatch && categoryMatch;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleReset = () => {
    setFilters({
      country: "All Countries",
      expertise: "All Expertise",
      category: "All Categories"
    });
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginationNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">News & Events</h1>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Select value={filters.country} onValueChange={(value) => handleFilterChange('country', value)}>
              <SelectTrigger className="w-48 bg-white border-gray-300">
                <SelectValue placeholder="Countries" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.expertise} onValueChange={(value) => handleFilterChange('expertise', value)}>
              <SelectTrigger className="w-48 bg-white border-gray-300">
                <SelectValue placeholder="Expertise" />
              </SelectTrigger>
              <SelectContent>
                {expertiseAreas.map((expertise) => (
                  <SelectItem key={expertise} value={expertise}>{expertise}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
              <SelectTrigger className="w-48 bg-white border-gray-300">
                <SelectValue placeholder="News Categories" />
              </SelectTrigger>
              <SelectContent>
                {newsCategories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={handleReset}
              className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Reset
            </Button>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {currentEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No news or events found matching your filters.</p>
            </div>
          ) : (
            // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
<div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[900px]">

              {currentEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2">
                      <div className="bg-orange-500 h-1 w-16"></div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {event.type} | {event.date}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors flex items-start leading-tight">
                      {event.title}
                      <ArrowRight className="w-4 h-4 ml-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {getPaginationNumbers().map((page, index) => (
                <div key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  ) : (
                    <Button
                      variant={currentPage === page ? "default" : "ghost"}
                      size="sm"
                      onClick={() => goToPage(page as number)}
                      className={`px-3 py-2 ${
                        currentPage === page
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </Button>
                  )}
                </div>
              ))}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}