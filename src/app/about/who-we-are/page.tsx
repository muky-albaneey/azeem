import AboutHeader from "@/components/about/AboutHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, Target } from "lucide-react";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeader />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="space-y-6 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p>
                Azim Development Company Limited is pioneering transformative programmes and projects that will shape the future of Nigeria and Africa. These initiatives go beyond infrastructure—they drive economic growth, sustainability, and social impact.
              </p>
              <p>
                To be Africa’s leading developer, delivering transformative projects across key sectors while setting new standards in sustainability, innovation, and impact.
              </p>
              <p>
                Our mission is to bridge Africa’s infrastructure gap with sustainable, high-quality solutions in housing, energy, transport, telecoms, agriculture, and mining—empowering communities and positioning Africa as a global leader.
              </p>
              <p>
                Azim Development Company Limited is a pan-African investment and infrastructure firm focused on delivering transformative, high-impact projects across sectors like housing, energy, transport, and telecommunications. With a strong commitment to sustainability, innovation, and strategic partnerships, we are bridging critical development gaps while shaping a stronger, more connected Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-green-600" />,
                title: "Sustainability First",
                description:
                  "We design and execute projects that protect the environment and uplift future generations.",
              },
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: "Integrity & Transparency",
                description:
                  "We operate with honesty, accountability, and full disclosure in all dealings.",
              },
              {
                icon: <Users className="w-12 h-12 text-orange-600" />,
                title: "Community Impact",
                description:
                  "Every initiative is crafted to create real, lasting value for people and places.",
              },
              {
                icon: <Target className="w-12 h-12 text-purple-600" />,
                title: "Innovation-Driven",
                description:
                  "We embrace technology and forward-thinking ideas to drive smart, scalable solutions.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}