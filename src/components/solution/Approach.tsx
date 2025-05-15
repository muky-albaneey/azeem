import Image from "next/image";
import SolutionHeader from "./SolutionHeader";

export default function Approach() {
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
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-green-700" />
            <div className="flex-1 bg-pink-600" />
            <div className="flex-1 bg-blue-500" />
          </div>
        </section>
  
        {/* Description Section */}
        <section className="px-4 md:px-20 py-10 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed md:leading-8">
            By bridging the traditional gaps between research, technology dissemination, and market systems, we and our partners innovate, achieve results, and sustain impact at scale.
            </h1>
          </div>
            <div className="w-full md:w-[45%] m-auto">
                <h1 className="text-4xl font-bold">Our Approach to Feeding the World</h1>
                <p>
                Fundamental changes in our global agricultural systems are urgently required if we want to increase production to feed a growing population while dramatically reducing agriculture’s environmental impact.

                </p>
                <p>
                To solve these problems, IFDC takes the unique approach of engaging the entire discovery-to-consumer continuum. By bridging the traditional gaps between research, technology dissemination, and market systems, we and our partners innovate, achieve results, and sustain impact at scale.
                </p>
                <h2 className="text-2xl font-bold">How We Do It</h2>
                <p>
                We operate on the belief that providing farmers with more nutrient-efficient and profitable technologies, and strengthening related market systems and policies, leads to improved livelihoods, increased food security, and better environmental outcomes. Four strategic priorities flow from this approach:
                </p>
                <h4 className="text-1xl font-bold">Fertilizer Research</h4>
                <p>
                While a new generation of tools and technologies appropriate for large-scale, industrial farms being developed, our research focuses on testing and adapting promising technologies that are appropriate for small-scale farmers in developing nations. This includes: 1) developing more nutrient-efficient, environmentally sound fertilizers; 2) validating soil and nutrient testing technologies; 3) scaling up production and adoption of new, tailored fertilizers; and 4) refining and scaling Integrated Soil Fertility Management (ISFM).
                </p>
                <h4 className="text-1xl font-bold">Improving Farm Productivity, Profitability, and Sustainability</h4>
                <p>
                Working with national research agencies, the private sector, and local stakeholders, IFDC conducts on-farm demonstrations, intentionally engages women and youth, and uses innovative behavior change and ICT to scale and sustain the adoption of emerging technologies. These efforts will improve on-farm crop-production, the profitability of farming families’ operations, and both the environmental and economic sustainability of smallholder farms.
                </p>
                <h4 className="text-1xl font-bold">Strengthening Linkages between Farmers and Markets</h4>
                <p>
                To scale up the adoption of an improved technology, the technology must expand or improve the production of a commodity that is in demand by the market, and that technology must be proﬁtable for farmers to use. To aid in strengthening the linkages between farmers and markets, IFDC conducts scaling assessments to identify promising technologies and commodities and develops partnerships with agribusinesses to drive the development of target commodity systems and scale technology adoption.
                </p>
            </div>

        </section>
       {/* Strategic Partnerships */}
      <div className="bg-[#faf9f5] px-4 md:px-16 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-gray-700 mb-6">
              Strategic partnerships underpin our work to bridge the gaps between research,
              farmers, markets, and a supportive, enabling environment. The sustainability of
              our impact depends on effective partnerships at all levels – from international
              donors to field-level businesses and research organizations.
            </p>
            <a href="#" className="font-semibold text-gray-800 border-b-2 border-yellow-400 pb-1">
              Partner with Us
            </a>
          </div>
          <div className="w-full md:w-1/3">
            <Image
              src="/images/partnership.jpg"
              alt="Strategic Partnerships"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
       
      </div>
    );
  }
  