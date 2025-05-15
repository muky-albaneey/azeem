import React from "react";
import Image from "next/image";
const Solutions = () => {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-start px-20 py-16">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Our Solutions</h1>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              IFDC believes the key to global food security starts with the soil and ends at the supermarket. We strive to develop better fertilizer and production technologies, transfer these improved technologies to smallholder farmers, and connect these farmers to efficient and profitable markets. By working with strategic partners, we build local capacity and ensure sustainable impact.
            </p>
          </div>
          <div className="flex flex-grow max-w-md flex-col">
          <div className="w-[80%] h-[350px] relative rounded-lg shadow-md">
  <Image
    src="/a_pro3.jpeg"
    alt="Farmer holding crops"
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />
</div>

            
          </div>
        </div>

<div className="w-full flex justify-around px-14 relative -top-10">
        <div className="w-[70%] grid grid-cols-3 gap-12 px-20 py-10">
          <div className="w-[33%] flex flex-col items-center">
            <img src="/one.jpeg" alt="Icon 1" className="mb-6 w-12 h-12" />
            <h2 className="text-4xl font-bold">7,564</h2>
            <p className="text-gray-600 mt-2">Houses build</p>
          </div>
          <div className="w-[33%] flex flex-col items-center text-center">
            <img src="/two.jpeg" alt="Icon 2" className="mb-6 w-12 h-12" />
            <h2 className="text-4xl font-bold">650k</h2>
            <p className="text-gray-600 mt-2">Completed roads</p>
          </div>
          <div className="w-[33%] flex flex-col items-center">
            <img src="/three.jpeg" alt="Icon 3" className="mb-6 w-12 h-12" />
            <h2 className="text-4xl font-bold">424</h2>
            <p className="text-gray-600 mt-2">Public-Private Partnerships Formed</p>
          </div>
        </div>

        <div className="w-[30%] flex justify-between items-start px-10 py-10 ">
            <div className="w-full">
                <h2 className="text-2xl font-bold">IFDC specializes in:</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>Soil and Fertilizer Research</li>
                <li>Market Systems Development</li>
                <li>Public-Private Partnerships</li>
                <li>Capacity Building and Training</li>
                <li>Environmental Stewardship</li>
                </ul>
            </div>
        </div>
</div>
       

      <div className="flex justify-around px-7">
      <div className="text-center py-10">
          <button className="text-lg font-semibold text-yellow-600 underline">Explore Our Solutions</button>
        </div>

        <div className="text-center py-10">
          <button className="text-lg font-semibold text-yellow-600 underline">Our Approach</button>
        </div>
      </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-6 py-8">
        <h1 className="text-3xl font-bold">Our Solutions</h1>
        <p className="text-base text-gray-700 mt-4 leading-relaxed">
          IFDC believes the key to global food security starts with the soil and ends at the supermarket. We strive to develop better fertilizer and production technologies, transfer these improved technologies to smallholder farmers, and connect these farmers to efficient and profitable markets. By working with strategic partners, we build local capacity and ensure sustainable impact.
        </p>

        <div className="flex flex-col items-center py-8">
          <img src="/icon1.svg" alt="Icon 1" className="mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold">7,564</h2>
          <p className="text-gray-600">Demonstration Plots Established</p>
        </div>

        <div className="flex flex-col items-center py-8">
          <img src="/icon2.svg" alt="Icon 2" className="mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold">650k</h2>
          <p className="text-gray-600">Farmers Applying Good Agricultural Practices</p>
        </div>
        <div className="flex flex-col items-center py-8">
          <img src="/icon3.svg" alt="Icon 3" className="mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold">424</h2>
          <p className="text-gray-600">Public-Private Partnerships Formed</p>
        </div>

        <div className="py-8">
        <div className="text-center py-8">
          <button className="text-lg font-semibold text-yellow-600 underline">Explore Our Solutions</button>
        </div>

          <img
            src="/path-to-image.jpg"
            alt="Farmer holding crops"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">IFDC specializes in:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Soil and Fertilizer Research</li>
            <li>Market Systems Development</li>
            <li>Public-Private Partnerships</li>
            <li>Capacity Building and Training</li>
            <li>Environmental Stewardship</li>
          </ul>
          <div className="text-center py-8">
          <button className="text-lg font-semibold text-yellow-600 underline">Our Approach</button>
        </div>
        </div>

       

       
      </div>
    </div>
  );
};

export default Solutions;