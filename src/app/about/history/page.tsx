import AboutHeader from "@/components/about/AboutHeader";
import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-100">
        <AboutHeader />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            filter: "grayscale(100%)"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl">
            Company Overview
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90">Shaping the Future of Nigeria and Africa</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        {sections.map((section, idx) => (
          <Card
            key={idx}
            className="bg-white shadow-lg border-l-8 border-[#D4ADFC] rounded-xl overflow-hidden"
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl sm:text-4xl pt-1">{section.icon}</div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

const sections = [
  {
    icon: "🏢",
    title: "Establishment and Evolution",
    content:
      "Azim Development Company Limited began as a partnership in 1990 and evolved into a limited company in 2018, uniting professionals across the built environment to address Nigeria's housing deficit of 20 million units (2008).",
  },
  {
    icon: "🏠",
    title: "Nigeria Affordable Mass Housing Programme (NAMHP)",
    content:
      "In 2021, in partnership with the Federal Mortgage Bank of Nigeria, Azim launched NAMHP to provide 1 million affordable housing units by 2030, serving all income groups and making it the nation's largest developer.",
  },
  {
    icon: "🌍",
    title: "Green Energy Transition and African Opportunities",
    content:
      "Africa's vast green mineral reserves are vital for the battery and electric vehicle revolution. Azim promotes development of this value chain to fast-track African green energy advancement.",
  },
  {
    icon: "🔔",
    title: "Mining and Resource Exploration",
    content:
      "Azim is acquiring 182 mining cadastre units in Nigeria, Niger, and Cote d'Ivoire, targeting strategic minerals like lithium, cobalt, graphite, and phosphate for energy storage and electric mobility.",
  },
  {
    icon: "⚡",
    title: "Diversified Ventures in Agriculture and Construction",
    content:
      "Azim manages 1,446 hectares in Nigeria for maize, soya, and guinea corn and is planning fertilizer plants in Niger and Nigeria. In construction, it provides multidisciplinary services for infrastructure nationwide.",
  },
  {
    icon: "💰",
    title: "Innovative Financing Models for Infrastructure Development",
    content:
      "Post-2008 crisis, Azim uses Resource-Backed Loans (RBLs) and Resource-for-Infrastructure (RFI) strategies to fund key development projects without relying on traditional aid.",
  },
  {
    icon: "📉",
    title: "Foreign Direct Investment (FDI) and Resource-Backed Loans",
    content:
      "FDI in Africa's extractives has surged, reaching $83 billion in 2021. Azim enables nations to use resource reserves as collateral for financing, bypassing conventional aid routes.",
  },
  {
    icon: "🤝",
    title: "Strategic Joint Venture Agreements (JVAs)",
    content:
      "Azim partners with SOEs and MNCs across continents to develop infrastructure like power plants, hospitals, and irrigation, addressing national needs sustainably and reducing foreign aid reliance.",
  },
  {
    icon: "🏦",
    title: "Asset-Backed Financing and Development Fund",
    content:
      "Azim structures bankable, asset-backed projects, securing financing via SPVs and mineral collateral. This model enables funding without government guarantees, ensuring self-sufficient development.",
  },
  {
    icon: "🚀",
    title: "Transformative Programmes and Projects",
    content:
      "Azim is leading bold, future-shaping programmes—from affordable mass housing across Africa (AMHDevP), to clean energy (SEDevP), eco-friendly university hostels (TSHDevP), pipelines (HPDevP), modular refineries (MRPPDevP), thermal power (TPPDevP), trade-enhancing dry ports (TPIDPDevP), modern airports and seaports (ASPDevP), and railways (SGRDevP), to green minerals (GMRDevP) and digital transformation (ADTCI). All projects emphasize sustainability, economic growth, and social impact.",
  },
  {
    icon: "🌍",
    title: "Commitment to Infrastructure Development",
    content:
      "Backed by strong financial partnerships, Azim provides resource-backed loans and direct investment structures to fund certified, credible infrastructure. By converting natural wealth into long-term assets, Azim empowers emerging economies to break free from aid dependency and build resilient futures.",
  }
];