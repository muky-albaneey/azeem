import AboutHeader from "@/components/about/AboutHeader";
import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, FlaskConical, TrendingUp, Network, BookOpen, Handshake } from "lucide-react";
// import Navigation from "@/components/navigation";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white">
       <AboutHeader />
      {/* <Navigation /> */}
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">What We Do</h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Transforming agriculture through innovative fertilizer technologies and sustainable solutions
          </p>
        </div>
      </section>

      {/* Our Work Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Focus Areas</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              IFDC works across multiple domains to address the complex challenges facing smallholder farmers 
              and agricultural systems in developing countries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FlaskConical className="w-12 h-12 text-blue-600" />,
                title: "Research & Development",
                description: "Developing innovative fertilizer technologies and sustainable agricultural practices through cutting-edge research."
              },
              {
                icon: <Leaf className="w-12 h-12 text-green-600" />,
                title: "Soil Health & Productivity",
                description: "Improving soil fertility and agricultural productivity through advanced nutrient management techniques."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
                title: "Market Systems Development",
                description: "Strengthening agricultural value chains and market access for smallholder farmers and agribusinesses."
              },
              {
                icon: <Network className="w-12 h-12 text-purple-600" />,
                title: "Technology Transfer",
                description: "Transferring appropriate fertilizer technologies and knowledge to developing countries worldwide."
              },
              {
                icon: <BookOpen className="w-12 h-12 text-red-600" />,
                title: "Capacity Building",
                description: "Training and educating farmers, researchers, and policymakers on sustainable agricultural practices."
              },
              {
                icon: <Handshake className="w-12 h-12 text-teal-600" />,
                title: "Partnerships & Collaboration",
                description: "Building strategic partnerships with governments, NGOs, and private sector organizations."
              }
            ].map((area, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Key Programs & Initiatives</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {/* Program 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">Fertilizer Technology Development</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  IFDC develops and tests innovative fertilizer products and application technologies 
                  that are environmentally sound and economically viable for smallholder farmers. 
                  Our research focuses on slow-release fertilizers, bio-fertilizers, and precision 
                  application techniques.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Slow-Release Technology
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Bio-Fertilizers
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Fertilizer research" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Program 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Soil testing" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-800">Soil Health Assessment</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our comprehensive soil health programs help farmers understand their soil's 
                  nutrient status and develop targeted fertilization strategies. We provide 
                  soil testing services, mapping, and recommendations for improved soil management.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Soil Mapping
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Nutrient Testing
                  </div>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">Market Systems Development</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We work to strengthen agricultural value chains by improving access to quality 
                  inputs, developing efficient distribution networks, and connecting farmers to 
                  profitable markets. Our programs focus on building sustainable market systems 
                  that benefit all stakeholders.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    Value Chains
                  </div>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Market Access
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Market development" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Impact</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Through our programs and initiatives, IFDC has made significant contributions to 
              agricultural development and food security worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "10M+",
                label: "Farmers Reached",
                description: "Smallholder farmers benefited from our programs"
              },
              {
                number: "100+",
                label: "Countries",
                description: "Countries where we've implemented projects"
              },
              {
                number: "50+",
                label: "Technologies",
                description: "Fertilizer technologies developed and transferred"
              },
              {
                number: "500+",
                label: "Partnerships",
                description: "Strategic partnerships established globally"
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Technology Areas</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Fertilizer Production Technologies",
                items: [
                  "Granulation and coating technologies",
                  "Compound fertilizer production",
                  "Specialty fertilizer development",
                  "Quality control and testing methods"
                ]
              },
              {
                title: "Soil and Plant Nutrition",
                items: [
                  "Nutrient management strategies",
                  "Soil fertility assessment",
                  "Plant tissue analysis",
                  "Precision agriculture techniques"
                ]
              },
              {
                title: "Environmental Sustainability",
                items: [
                  "Reduced environmental impact fertilizers",
                  "Carbon footprint reduction",
                  "Water quality protection",
                  "Sustainable farming practices"
                ]
              },
              {
                title: "Economic Development",
                items: [
                  "Agribusiness development",
                  "Financial services for farmers",
                  "Market linkage programs",
                  "Policy analysis and advocacy"
                ]
              }
            ].map((area, index) => (
              <Card key={index} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}