import AboutHeader from "@/components/about/AboutHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, FlaskConical, TrendingUp, Network, BookOpen, Handshake } from "lucide-react";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeader />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">What We Do</h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Azim Development Company Limited is a multi-sector investment and development firm focused on attracting foreign investment to key projects across Africa. We deliver impactful solutions in real estate, energy, construction, transport, telecoms, agriculture, and mining—driving growth and improving lives.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Focus Areas</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              From affordable housing to responsible mining and modern transport infrastructure, our projects combine innovation, sustainability, and strategic partnerships to meet Africa’s evolving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Infrastructure Development", description: "Designing and delivering large-scale, multi-sector projects to strengthen Africa’s physical and economic foundations." },
              { title: "Sustainable Innovation", description: "Embedding smart, eco-friendly technologies and practices into every stage of development." },
              { title: "Strategic Partnerships", description: "Collaborating with governments, investors, and communities to unlock greater value and scale." },
              { title: "Economic Empowerment", description: "Driving job creation, local capacity building, and enterprise development across regions." },
              { title: "Regional Expansion", description: "Scaling successful models across African countries with shared development needs." },
              { title: "Community Impact", description: "Prioritizing inclusive growth that improves quality of life and supports long-term social progress." }
            ].map((area, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Key Programs & Initiatives</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Nigeria Affordable Mass Housing Programme (NAMHP)</h3>
              <p>
                A nationwide initiative providing safe, modern, and affordable housing for low- and middle-income earners, reducing Nigeria's housing deficit.
                Building on the success of NAMHP, the programme will be replicated in other African countries facing similar housing challenges. By partnering with local governments and private sector stakeholders, we aim to develop affordable housing solutions tailored to the unique needs of each country, fostering urban development and improving living standards across the continent.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Sustainable Energy Development Programme (SEDevP4NGR)</h3>
              <p>
                A comprehensive programme aimed at expanding access to clean, reliable, and affordable energy solutions, including solar, wind, and hydroelectric power projects.
                The SEDevP4NGR model will be adapted to address energy deficits in other African nations. By leveraging renewable energy resources such as solar in sun-rich regions, wind in coastal areas, and hydroelectric power in countries with abundant water resources, we aim to provide sustainable energy solutions that drive economic growth and reduce reliance on fossil fuels. This initiative will also include capacity-building programmes to train local communities in renewable energy technologies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Nigeria Universities Students Hostel Development Programme (NUSHDevP)</h3>
              <p>
                A targeted initiative to construct modern, eco-friendly student hostels across Nigerian universities, improving the quality of student accommodation and supporting educational development.
                Recognizing the critical need for improved student accommodation across the continent, the NUSHDevP model will be extended to other African countries. By collaborating with universities, governments, and private investors, we aim to develop sustainable, affordable, and modern student housing solutions tailored to the needs of each region. This expansion will not only enhance the quality of education but also create jobs, stimulate local economies, and promote sustainable construction practices. Our goal is to ensure that students across Africa have access to safe, comfortable, and conducive living environments that support their academic success and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Impact</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Technology Areas</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              At Azim, technology is central to our development model. We focus on digital infrastructure, renewable energy technologies, smart logistics systems, and construction innovation. From 5G connectivity and satellite internet to solar integration and high-efficiency building systems, our tech approach is designed to scale sustainable solutions across Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
