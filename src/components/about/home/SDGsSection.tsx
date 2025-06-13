import React from 'react';
import Image from 'next/image';

const SDGsSection = () => {
  return (
    <div className="px-4 md:px-20 py-12 max-w-screen-xl mx-auto">
      {/* Introduction */}
      <p className="text-gray-700 text-base leading-relaxed">
        Currently, our work focuses on bridging the gaps between research, development, and markets with the ultimate goal of improving soil health and livelihoods in developing nations around the world. By partnering with donor organizations, national governments, private sector actors, and local entrepreneurs, we strive to achieve a shared vision of a world without hunger.
      </p>
      <p className="text-green-700 font-semibold mt-4">
        Read more about IFDC’s strategy.
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-10 mb-4">IFDC and the SDGs</h2>
      <p className="text-gray-700 text-base leading-relaxed">
        The United Nations Sustainable Development Goals for 2030 (SDGs) have sharpened the world’s focus on agriculture’s role in ending poverty and hunger, achieving food security and improved nutrition, and promoting sustainable agriculture. IFDC activities in sub-Saharan Africa and Asia contribute to many of the 17 SDG goals, but focus especially on five:
      </p>

      {/* SDG Icons and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-4 justify-center">
            <div className="w-32 h-36 relative">
              <Image src="/sdg1.png" alt="SDG 1" layout="fill" objectFit="contain" />
            </div>
            {/* <div className="w-20 h-20 relative">
              <Image src="/sdg2.png" alt="SDG 2" layout="fill" objectFit="contain" />
            </div> */}
          </div>
          <h3 className="font-bold mt-4">SDGs 1 & 2</h3>
          <p className="text-sm text-gray-700 mt-2 px-4">
            We employ an inclusive approach to our research and development. Through partnerships with the private sector and national research institutions, we focus on testing, adapting, and scaling promising technologies for smallholders.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 relative">
            <Image src="/sdg5.png" alt="SDG 5" layout="fill" objectFit="contain" />
          </div>
          <h3 className="font-bold mt-4">SDG 5</h3>
          <p className="text-sm text-gray-700 mt-2 px-4">
            Improve women’s access to agricultural knowledge and tools to empower them and increase their production to provide food security for up to 150 million people.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 relative">
            <Image src="/sdg12.png" alt="SDG 12" layout="fill" objectFit="contain" />
          </div>
          <h3 className="font-bold mt-4">SDG 12</h3>
          <p className="text-sm text-gray-700 mt-2 px-4">
            Reduce post-harvest losses through new practices and tools and provide balanced fertilizer application rates by soil and crop.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 relative">
            <Image src="/sdg13.png" alt="SDG 13" layout="fill" objectFit="contain" />
          </div>
          <h3 className="font-bold mt-4">SDG 13</h3>
          <p className="text-sm text-gray-700 mt-2 px-4">
            Promote judicious fertilizer application and research/disseminate climate-smart fertilizer practices and technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SDGsSection;
