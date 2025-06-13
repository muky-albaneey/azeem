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
      <div className="max-w-[40%] mx-auto px-4 py-10 text-left">
        <p className="text-sm md:text-base">
          IFDC is an independent non-profit organization that combines innovative research, market systems development, and strategic partnerships to spread
          sustainable agricultural solutions for improved soil health, food security, and livelihoods around the world.
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
              <p className="text-sm">Healthier soils and plants in a food-secure and environmentally sustainable world.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="text-sm">
                By merging knowledge from research, market expertise, and strategic public and private sector partnerships, we enable smallholder farmers to
                produce more food and improve their livelihoods while sustaining natural resources.
              </p>
              <a href="#" className="text-green-600 underline text-sm">Our 2020–2030 Strategy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Strategy Section */}
      <div className="bg-white py-16">
        <div className="max-w-[40%] mx-auto px-4 space-y-8 text-center md:text-left">
          <p className="text-sm">
            Over the coming decades, global population growth will drive a substantial increase in demand for food, energy, and water. The largest share of this
            demand will come from developing countries. These trends bring new and urgent challenges as a historic transformation unfolds in global agriculture.
          </p>
          <p className="text-sm">
            As a global community, we must enable farmers to produce more food on existing land, using fewer resources. IFDC is focused on supporting smallholder
            farmers by improving soil fertility, developing input markets, and building capacities to use agricultural innovations sustainably.
          </p>
          <div className="flex justify-center">
            <Image src="/map.png" alt="Global Map" width={400} height={250} />
          </div>
          <h1 className='font-bold'>
                Since 1974, IFDC has delivered technologies, practices, and capacity building to increase and sustain food security and agricultural productivity in over 100 developing countries.
            </h1>
           <p className="text-sm">
            
            As a global community, we must enable farmers to produce more food on existing land, using fewer resources. IFDC is focused on supporting smallholder
            farmers by improving soil fertility, developing input markets, and building capacities to use agricultural innovations sustainably.
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
