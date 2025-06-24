import AboutHeader from "@/components/about/AboutHeader";
// import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, Target } from "lucide-react";
// import Navigation from "@/components/navigation";

export default function WhoWeArePage() {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Who We Are</h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Leading the world in developing sustainable agriculture solutions for smallholder farmers
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To identify and transfer appropriate, environmentally sound, and economically viable 
                  fertilizer-related technologies to developing countries to increase and sustain food 
                  production while protecting the environment.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A world where smallholder farmers have access to appropriate technologies and 
                  knowledge to achieve food security, improve livelihoods, and protect the environment 
                  for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About IFDC Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About IFDC</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="IFDC facility" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                The International Fertilizer Development Center (IFDC) is a public international 
                organization that addresses agricultural challenges in developing countries through 
                the development and transfer of effective and environmentally sound crop nutrient 
                technology and agribusiness expertise.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Since 1974, IFDC has focused on increasing and sustaining food security and 
                agricultural productivity in over 100 developing countries through the development 
                and dissemination of plant nutrient technology and knowledge.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Years of Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-green-600" />,
                title: "Collaboration",
                description: "Working together with partners, stakeholders, and communities to achieve shared goals."
              },
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: "Excellence",
                description: "Striving for the highest standards in research, implementation, and service delivery."
              },
              {
                icon: <Globe className="w-12 h-12 text-orange-600" />,
                title: "Sustainability",
                description: "Promoting environmentally sound and economically viable agricultural practices."
              },
              {
                icon: <Target className="w-12 h-12 text-purple-600" />,
                title: "Innovation",
                description: "Developing cutting-edge solutions to address evolving agricultural challenges."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Global Presence</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                IFDC maintains a global presence with offices and programs across Africa, Asia, 
                and the Americas. Our international network enables us to understand local 
                agricultural challenges and develop targeted solutions that meet the specific 
                needs of each region.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Headquarters in Alabama, USA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Regional offices across Africa</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Programs in Asia and Latin America</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">Partnerships with local institutions</span>
                </div>
              </div>
            </div>

            {/* Right Column - World Map Placeholder */}
            <div className="relative">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Global Impact Map</p>
                  <p className="text-gray-400 text-sm">100+ Countries Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}