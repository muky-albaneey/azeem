import Image from "next/image";

export default function StrategyImpactSection() {
  return (
    <section className="px-4 md:px-16 py-12 ">
      {/* 2020–2030 Strategy */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/strategy-1.jpg"
            alt="2020-2030 Strategy"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            2020–2030 Strategy
          </h2>
          <p className="text-gray-700 mb-6">
            By streamlining our legacy of expertise while also incorporating innovative
            thinking and expanded partnerships, IFDC remains ready to solve issues of
            hunger, malnutrition, poverty, and environmental sustainability.
          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-yellow-400 pb-1">
            How We Will Get It Done
          </a>
        </div>
      </div>

      {/* Our Approach */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-6">
            We go beyond short-term answers to complex problems. By working with
            partners to bridge the traditional gap between research, smallholder
            farmers, and markets, we strive to solve the greatest food security issues
            facing the world today.
          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-yellow-400 pb-1">
            How We Solve Problems
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/approach.jpg"
            alt="Our Approach"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Our Impact */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/impact.jpg"
            alt="Our Impact"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-gray-700 mb-6">
            Our work strives to go from science to impact. Since 1974, our efforts in
            the lab and the field have empowered farmers and business owners all over
            the world to change their lives.
          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-yellow-400 pb-1">
            A Legacy of Success
          </a>
        </div>
      </div>
      {/* Our Research */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Research</h2>
          <p className="text-gray-700 mb-6">
          From field tests to laboratory analysis, or from fertilizer market assessments to economic studies, our research philosophy revolves around applied research for sustained impact.
          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-yellow-400 pb-1">
            How We Solve Problems
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/research.jpg"
            alt="Our Approach"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

    </section>
  );
}
