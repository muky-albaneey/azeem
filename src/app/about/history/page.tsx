import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            filter: "grayscale(100%)"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Our History</h1>
        </div>
      </section>

      {/* History Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Since 1974, IFDC has played a critical role in the development and transfer of affordable, 
                effective fertilizer technologies around the world. IFDC's contributions span a wide 
                spectrum of research and development work, including production process research, 
                applied research on soil systems, development of innovative fertilizer products and 
                application technologies, market systems development to strengthen input and output 
                value chains, and policy analysis to enable fertilizer importation, business development, 
                and smallholder adoption of fertilizer and other soil fertility technologies.
              </p>
              
              <div className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Historical farming scene" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Column - Images and Content */}
            <div className="space-y-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Farmers working in field" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                />
              </div>
              
              <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">FEEDING A HUNGRY WORLD</h3>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Green agricultural field" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
                  <span className="text-sm font-semibold">IFDC</span>
                </div>
              </div>
              
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  IFDC continues to leave a valuable mark on the global landscape of agricultural 
                  development for smallholder farmers.
                </p>
                <p className="mb-4">
                  Read about the collective efforts of IFDC's team, partners, and supporters, through 
                  the organization's first 40 years of impact.
                </p>
                <p className="text-green-600 font-semibold">
                  Feeding a Hungry World: IFDC's First Forty Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IFDC Logo and Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            {/* IFDC Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-blue-500 to-green-500 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-green-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs font-bold">🌱</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-green-600">IFDC</h2>
                <p className="text-gray-600 text-base font-medium">Developing Agriculture from the Ground Up</p>
              </div>
            </div>
            
            {/* Timeline Header */}
            <div className="text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">THE IFDC HISTORICAL TIMELINE</h3>
              <p className="text-gray-600 text-sm mb-4">A history of the achievements of the International Fertilizer Development Center</p>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Timeline Visualization */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
              
              {/* Timeline Points */}
              <div className="flex justify-between items-center relative z-10">
                {[
                  { year: "1974", label: "Founded" },
                  { year: "1980", label: "" },
                  { year: "1985", label: "" },
                  { year: "1990", label: "" },
                  { year: "1995", label: "" },
                  { year: "2000", label: "" },
                  { year: "2005", label: "" },
                  { year: "2010", label: "" },
                  { year: "2015", label: "" },
                  { year: "2020", label: "Present" }
                ].map((point, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mb-2"></div>
                    <span className="text-xs text-gray-600 font-medium">{point.year}</span>
                    {point.label && (
                      <span className="text-xs text-gray-500 mt-1">{point.label}</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Timeline Milestones */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-gray-800 mb-2">1974-1980</h4>
                    <p className="text-sm text-gray-600">IFDC established as international organization</p>
                  </CardContent>
                </Card>
                <Card className="p-4">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-gray-800 mb-2">1990s</h4>
                    <p className="text-sm text-gray-600">Expansion of fertilizer technology programs</p>
                  </CardContent>
                </Card>
                <Card className="p-4">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-gray-800 mb-2">2000s-Present</h4>
                    <p className="text-sm text-gray-600">Global impact on smallholder agriculture</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg">&copy; 2024 IFDC. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}