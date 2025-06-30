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
            From 2020 to 2030, Azim is focused on expanding across Africa through large-scale infrastructure, sustainable innovation, and regional partnerships. Our goal is to deliver impactful, technology-driven projects that create jobs, attract investment, and raise living standards—while staying environmentally responsible and aligned with global development goals.

          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-[#D4ADFC] pb-1">
            How We Will Get It Done
          </a>
        </div>
      </div>

      {/* Our Approach */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-6">
            At Azim Development Company Limited, we take a strategic, impact-driven approach to investment and development. By combining visionary thinking with practical execution, we focus on projects that deliver long-term value to communities and stakeholders.
Through strong partnerships, innovative technologies, and sustainable practices, we design and deliver infrastructure that meets international standards while addressing Africa’s local needs. Our work is guided by a commitment to economic growth, environmental responsibility, and transformative impact across every sector we serve.

          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-[#D4ADFC] pb-1">
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
           At Azim Development Company Limited, our impact is measured by more than completed projects — it’s seen in the lives we touch and the systems we strengthen. From reducing Nigeria’s housing deficit to improving clean energy access and creating student-friendly learning environments, our work supports millions across Africa.
Through job creation, infrastructure growth, and community upliftment, we are building stronger economies and more resilient futures — one transformative initiative at a time.

          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-[#D4ADFC] pb-1">
            A Legacy of Success
          </a>
        </div>
      </div>
      {/* Our Research */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Research</h2>
          <p className="text-gray-700 mb-6">
          At Azim, every project begins with deep research and insight. We conduct sector-specific studies, feasibility analyses, and stakeholder assessments to ensure our developments are practical, scalable, and sustainable. From housing demand and energy gaps to transportation flows and digital access, our data-driven approach helps us design solutions that are both globally competitive and locally effective.

          </p>
          <a href="#" className="font-semibold text-gray-800 border-b-2 border-[#D4ADFC] pb-1">
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
