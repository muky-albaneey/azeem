import Image from 'next/image';
import AboutHeader from '../AboutHeader';
import SDGsSection from './SDGsSection';
import PrinciplesAndValues from './PrinciplesAndValues';

export default function AboutUsPage() {
  return (
    <div className="w-full">
        <AboutHeader />
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/azim3.jpeg" // Replace with actual image path
          alt="About Us Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 z-10" style={{ background:'rgba(0,0,0,.5)' }} />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
        </div>
        <div className="absolute top-0 right-0 h-full w-[30%] hidden md:block z-20">
          <div className="h-full w-full bg-no-repeat bg-right bg-contain" style={{ backgroundImage: 'url(/pattern-overlay.png)' }} />
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-[100%] md:w-[40%] mx-auto px-4 py-10 text-left">
        <p className="text-sm md:text-base">
          Azim Development Company Ltd is a fast-growing, multi-sector company based in Abuja, Nigeria, with a footprint across Africa. We deliver innovative, sustainable solutions in real estate, energy, construction, transport, telecoms, agriculture, and mining—transforming communities and driving economic growth beyond oil
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-[#FAF9F5] py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center">
            <Image src="/strategy.png" alt="Strategy" width={200} height={200} />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold">Vision</h3>
              <p className="text-sm">To be Africa’s leading developer, delivering transformative projects across key sectors while setting new standards in sustainability, innovation, and impact.
</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="text-sm">
                Our mission is to bridge Africa’s infrastructure gap with sustainable, high-quality solutions in housing, energy, transport, telecoms, agriculture, and mining—empowering communities and positioning Africa as a global leader.

              </p>
              <a href="#" className="text-green-600 underline text-sm">Our 2020–2030 Strategy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Strategy Section */}
      <div className="bg-white py-16">
        <div className="w-[100%] md:w-[40%] mx-auto px-4 space-y-8 text-center md:text-left">
          <p className="text-sm">
          We believe in the power of collaboration and actively engage with governments, private sector partners, and global investors to unlock new opportunities, share resources, and scale impact across borders. Every project is designed with sustainability and community upliftment in mind—ensuring job creation, environmental stewardship, and enhanced quality of life. By focusing on non-oil, export-oriented sectors, we contribute to economic diversification and resilience, while positioning Africa to compete and lead in global markets. Through this strategic lens, Azim remains committed to building a stronger, smarter, and more inclusive future for the continent.

          </p>
          <p className="text-sm">
            Develop Infrastructure
 Housing, transportation, energy, digital, and industrial projects across Africa.
          </p>
          {/* <p className="text-sm">
           Drive Economic Growth
 Enable trade, industry, and local enterprise through strategic development.

          </p> */}
         
          <div className="flex justify-center">
            <Image src="/map.png" alt="Global Map" width={400} height={250} />
          </div>
          <h1 className='font-bold'>
                 Empower Communities
 Improve quality of life through job creation, access, and social impact.
            </h1>
           <p className="text-sm">
            
           Promote Innovation
 Introduce modern technologies and sustainable models that shape Africa’s future.
          </p>
        </div>
      </div>
<div>
    <div className="flex justify-start px-6">
            <Image src="/about_img.png" alt="about_img.png" width={800} height={750} />
          </div>
</div>
      <SDGsSection />
      <div className='w-[100%] md:w-[80%] mx-auto'>
        <PrinciplesAndValues />
      </div>
    </div>
  );
}
