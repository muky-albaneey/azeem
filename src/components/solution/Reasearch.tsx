import Image from 'next/image'
import React from 'react'
import SolutionHeader from './SolutionHeader'
import ServiceHighlights from './ServiceHighlights'

export default function Reasearch() {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed md:leading-8 md:mb-12">
            By bridging the traditional gaps between research, technology dissemination, and market systems, we and our partners innovate, achieve results, and sustain impact at scale.
            </h1>
          </div>
            <div className="w-full md:w-[45%] m-auto">
                <h1 className="text-[20px] font-bold">Our Approach to Feeding the World</h1>
                <p>
                Fundamental changes in our global agricultural systems are urgently required if we want to increase production to feed a growing population while dramatically reducing agriculture’s environmental impact.
                </p>
                <p>
                To solve these problems, IFDC takes the unique approach of engaging the entire discovery-to-consumer continuum. By bridging the traditional gaps between research, technology dissemination, and market systems, we and our partners innovate, achieve results, and sustain impact at scale.
                </p>
                <h2 className="text-2xl font-bold">How We Do It</h2>
                {/* <p>
                We operate on the belief that providing farmers with more nutrient-efficient and profitable technologies, and strengthening related market systems and policies, leads to improved livelihoods, increased food security, and better environmental outcomes. Four strategic priorities flow from this approach:
                </p> */}
                <h4 className="text-1xl font-bold">Insight-Driven Planning</h4>
                <p>
Every project begins with deep market research, stakeholder engagement, and feasibility studies. We align our strategies with both national development goals and real community needs, ensuring relevance and sustainability from day one.                </p>
                <h4 className="text-1xl font-bold">Strategic Partnerships</h4>
                <p>
                We collaborate with governments, international investors, and local institutions to pool resources, share expertise, and unlock greater impact. These partnerships strengthen our capacity to deliver at scale across multiple sectors.

                </p>
                <h4 className="text-1xl font-bold">Innovation at the Core</h4>
                <p>
              Every project is built with the future in mind. We adopt environmentally conscious methods, prioritize local content, and empower communities through job creation and inclusive development.

                </p>
                 <h4 className="text-1xl font-bold">Global Standards, Local Relevance</h4>
                <p>
               Our work is guided by international benchmarks, but grounded in African realities. We deliver infrastructure that is modern, resilient, and culturally relevant — with lasting value for both investors and the communities we serve.

                </p>
                 <h4 className="text-1xl font-bold">Strategic Partnerships</h4>
                <p>
               At Azim Development Company Limited, partnerships are at the heart of everything we do. We work closely with government bodies, private sector players, development agencies, and international investors to unlock greater value and impact. These collaborations enable us to pool resources, scale innovation, and deliver transformative infrastructure that meets both global standards and local needs.


                </p>
            </div>

        </section>
         <ServiceHighlights />
      
    </div>
  )
}
