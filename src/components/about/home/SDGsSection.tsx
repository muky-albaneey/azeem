import React from 'react';
import Image from 'next/image';

const SDGsSection = () => {
  return (
    <div className="px-4 md:px-20 py-12 max-w-screen-xl mx-auto">
      {/* Introduction */}
      <p className="text-gray-700 text-base leading-relaxed">
   Drive Economic Growth
 Enable trade, industry, and local enterprise through strategic development.      </p>
      <p className="text-green-700 font-semibold mt-4">
        Read more about Azimco strategy.
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-10 mb-4">Azimco and the SDGs</h2>
     <p className="text-gray-700 text-base leading-relaxed">
  At Azimco, we align our mission with the United Nations Sustainable Development Goals for 2030 (SDGs), focusing on the construction sector’s critical role in eradicating poverty, improving infrastructure, fostering gender equality, and supporting climate-resilient development. Our work across Africa and Asia contributes to several SDGs, with a core emphasis on four key areas:
</p>

{/* SDG Icons and Text */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
  <div className="flex flex-col items-center text-center">
    <div className="flex gap-4 justify-center">
      <div className="w-32 h-36 relative">
        <Image src="/sdg1.png" alt="SDG 1" layout="fill" objectFit="contain" />
      </div>
    </div>
    <h3 className="font-bold mt-4">SDGs 1 & 2</h3>
    <p className="text-sm text-gray-700 mt-2 px-4">
      Through inclusive infrastructure development, Azimco creates job opportunities and improves living standards in underserved communities by constructing roads, housing, and essential facilities that drive economic growth.
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-20 h-20 relative">
      <Image src="/sdg5.png" alt="SDG 5" layout="fill" objectFit="contain" />
    </div>
    <h3 className="font-bold mt-4">SDG 5</h3>
    <p className="text-sm text-gray-700 mt-2 px-4">
      Azimco promotes gender equality by empowering women in construction through targeted recruitment, training, and leadership development in our project sites and offices.
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-20 h-20 relative">
      <Image src="/sdg12.png" alt="SDG 12" layout="fill" objectFit="contain" />
    </div>
    <h3 className="font-bold mt-4">SDG 12</h3>
    <p className="text-sm text-gray-700 mt-2 px-4">
      We implement sustainable construction practices by minimizing material waste, optimizing resource use, and prioritizing eco-friendly sourcing and recycling strategies on all sites.
    </p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-20 h-20 relative">
      <Image src="/sdg13.png" alt="SDG 13" layout="fill" objectFit="contain" />
    </div>
    <h3 className="font-bold mt-4">SDG 13</h3>
    <p className="text-sm text-gray-700 mt-2 px-4">
      Azimco is committed to building climate-resilient infrastructure by integrating green technologies and designs that reduce emissions and enhance disaster resilience.
    </p>
  </div>
</div>

    </div>
  );
};

export default SDGsSection;
