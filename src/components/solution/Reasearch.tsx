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
        <Image
          src="/images/solutions-hero.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
          fill
        />

        <div className="absolute top-0 right-0 h-full w-1/3 hidden md:block bg-[url('/images/pattern.png')] bg-repeat opacity-90 mix-blend-lighten"></div>

        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-12">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">Solutions</h1>
        </div>

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
            At Azim Construction, we close the gaps between vision, engineering, and delivery by integrating design, construction, and project management to create infrastructure that powers economic growth and transforms communities.
          </h1>
        </div>

        <div className="w-full md:w-[45%] m-auto">
          <h1 className="text-[20px] font-bold">Our Approach to Building Africa</h1>
          <p>
            Africas infrastructure needs are vast, and Azim Construction rises to meet them. Our mission is to build modern, sustainable, and resilient structures that improve lives — from homes and roads to energy and industrial facilities.
          </p>
          <p>
            We engage the full project lifecycle — from feasibility studies to final handover — ensuring that our developments are impactful, affordable, and future-ready.
          </p>

          <h2 className="text-2xl font-bold">How We Do It</h2>

          <h4 className="text-1xl font-bold">Insight-Driven Planning</h4>
          <p>
            Every project starts with thorough assessments, community engagement, and collaboration with local authorities. This ensures that our solutions are both relevant and technically sound.
          </p>

          <h4 className="text-1xl font-bold">Strategic Partnerships</h4>
          <p>
            We build alliances with government agencies, financiers, engineers, and local contractors to scale our efforts and deliver results across housing, transport, energy, and more.
          </p>

          <h4 className="text-1xl font-bold">Innovation at the Core</h4>
          <p>
            Azim Construction integrates smart building techniques, eco-friendly practices, and digital tools to deliver cutting-edge infrastructure that serves today and endures tomorrow.
          </p>

          <h4 className="text-1xl font-bold">Global Standards, Local Relevance</h4>
          <p>
            Our infrastructure solutions meet international quality and safety benchmarks, while being tailored to the social, environmental, and economic realities of the regions we serve.
          </p>

          <h4 className="text-1xl font-bold">Partnership-Led Impact</h4>
          <p>
            At Azim Construction Company, we believe that strong partnerships drive lasting change. By working hand-in-hand with public and private sector stakeholders, we amplify our ability to build transformative infrastructure that elevates communities and drives national progress.
          </p>
        </div>
      </section>

      <ServiceHighlights />
    </div>
  )
}
