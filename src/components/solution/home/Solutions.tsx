import Image from "next/image";
import FourPillars from "./FourPillars";
import StrategyImpactSection from "./StrategyImpactSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SolutionHeader from "../SolutionHeader";

export default function SolutionsPage() {
    return (
      <div className="w-full mb-80">
        {/* Header */}
        <SolutionHeader />
  
        {/* Hero Section */}
        <section className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
          {/* Background Image */}
          {/* <img
            src="/images/solutions-hero.jpg"
            alt="Group of farmers"
            className="w-full h-full object-cover"
          /> */}
            <Image 
                 src="/images/solutions-hero.jpg"
                 alt="Group of farmers"
                 className="w-full h-full object-cover"
                fill
            />
          {/* Pattern overlay right */}
          <div className="absolute top-0 right-0 h-full w-1/3 hidden md:block bg-[url('/images/pattern.png')] bg-repeat opacity-90 mix-blend-lighten"></div>
  
          {/* Title Overlay */}
          <div className="absolute bottom-6 md:bottom-10 left-4 md:left-12">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold">Solutions</h1>
          </div>
  
          {/* Colored Underline */}
          <div className="absolute bottom-0 left-0 w-full h-2 flex">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-green-700" />
            <div className="flex-1 bg-pink-600" />
            <div className="flex-1 bg-blue-500" />
          </div>
        </section>
  
        {/* Description Section */}
        <section className="px-4 md:px-20 py-10 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed md:leading-8">
             Azim Development Company provides solutions to Africa’s major infrastructure problems by building affordable housing, improving energy access, upgrading roads and transport, expanding telecom networks, and developing agriculture and mining. They use creative financing models that let countries pay using their natural resources instead of cash. This helps boost economic growth and reduce poverty. 

            </p>


            <p className="md:px-28 mt-4 md:mt-10">
           
            </p>
          </div>


        </section>
        <section className="relative w-[80%] h-[35vh] md:h-[95vh] overflow-hidden m-auto mb-4">
          <Image src='/construction_map.png'  alt="Engineering map"
                 className="w-full h-full object-cover"
                fill />
        </section>
        <FourPillars />
        <StrategyImpactSection />
        <FeaturedProjects />
      </div>
    );
  }
  