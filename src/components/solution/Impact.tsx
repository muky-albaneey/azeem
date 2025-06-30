import Image from "next/image";
import SolutionHeader from "./SolutionHeader";
import StatsSection from "./StatsSection";

export default function Impact() {
    return (
      <div className="w-full mb-80">
        {/* Header */}
        <SolutionHeader />
  
        {/* Hero Section */}
        <section className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
          {/* Background Image */}
         
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
            <div className="flex-1 bg-[#D4ADFC]" />
             
            <div className="flex-1 bg-[#1D267D]" />
            <div className="flex-1 bg-[#D4ADFC]" />
            <div className="flex-1 bg-[#0C134F]" />
          </div>
        </section>
  
        {/* Description Section */}
        <section className="px-4 md:px-20 py-10 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto ">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed md:leading-8 ">
At Azim Development Company Limited, our impact is measured by more than completed projects — it’s seen in the lives we touch and the systems we strengthen. From reducing Nigeria’s housing deficit to improving clean energy access and creating student-friendly learning environments, our work supports millions across Africa.
Through job creation, infrastructure growth, and community upliftment, we are building stronger economies and more resilient futures — one transformative initiative at a time.
               </h1>
          </div>
            
        <div className="w-full md:w-[45%] m-auto">
            <StatsSection />
        </div>
        </section>
      
       
      </div>
    );
  }
  