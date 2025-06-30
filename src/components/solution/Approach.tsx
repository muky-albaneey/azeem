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
             <div className="flex-1 bg-[#D4ADFC]" />
             
            <div className="flex-1 bg-[#1D267D]" />
            <div className="flex-1 bg-[#D4ADFC]" />
            <div className="flex-1 bg-[#0C134F]" />
           
            
          </div>
        </section>
  
        {/* Description Section */}
        <section className="px-4 md:px-20 py-10 md:py-16 bg-white ">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed md:leading-8 md:mb-10">
            By bridging the traditional gaps between research, technology dissemination, and market systems, we and our partners innovate, achieve results, and sustain impact at scale.
            </h1>
          </div>
            <div className="w-full md:w-[45%] m-auto">
                <h1 className="text-2xl font-bold text-justify">our approach to changing the world</h1>
                <p>
At Azim Development Company Limited, we take a strategic, impact-driven approach to investment and development. By combining visionary thinking with practical execution, we focus on projects that deliver long-term value to communities and stakeholders.
Through strong partnerships, innovative technologies, and sustainable practices, we design and deliver infrastructure that meets international standards while addressing Africa’s local needs. Our work is guided by a commitment to economic growth, environmental responsibility, and transformative impact across every sector we serve.

                </p>
                {/* <p>
                To solve these problems, IFDC takes the unique approach of engaging the entire discovery-to-consumer continuum. By bridging the traditional gaps between research, technology dissemination, and market systems, we and our partners innovate, achieve results, and sustain impact at scale.
                </p> */}
                <h2 className="text-2xl font-bold">How We Do It</h2>
                <p>
               Every project begins with deep market research, stakeholder engagement, and feasibility studies. We align our strategies with both national development goals and real community needs, ensuring relevance and sustainability from day one.
                </p>
                <h4 className="text-1xl font-bold">Strategic Partnerships</h4>
                <p>
               We collaborate with governments, international investors, and local institutions to pool resources, share expertise, and unlock greater impact. These partnerships strengthen our capacity to deliver at scale across multiple sectors..
                </p>
                <h4 className="text-1xl font-bold">Innovation at the Core</h4>
                <p>
                We integrate emerging technologies and global best practices to solve complex infrastructure challenges. From renewable energy to smart construction methods, innovation drives both our efficiency and long-term success.
                </p>
                <h4 className="text-1xl font-bold">Sustainability and Responsibility</h4>
                <p>
                Every project is built with the future in mind. We adopt environmentally conscious methods, prioritize local content, and empower communities through job creation and inclusive development.

                </p>
                 <h4 className="text-1xl font-bold">Global Standards, Local Relevance</h4>
                <p>
               Our work is guided by international benchmarks, but grounded in African realities. We deliver infrastructure that is modern, resilient, and culturally relevant — with lasting value for both investors and the communities we serve.
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
              At Azim Development Company Limited, partnerships are at the heart of everything we do. We work closely with government bodies, private sector players, development agencies, and international investors to unlock greater value and impact. These collaborations enable us to pool resources, scale innovation, and deliver transformative infrastructure that meets both global standards and local needs.

            </p>
            <a href="#" className="font-semibold text-gray-800 border-b-2 border-[#D4ADFC] pb-1">
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
  