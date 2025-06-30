"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Solutions = () => {
  const [counts, setCounts] = useState({
    houses: 0,
    roads: 0,
    partnerships: 0,
  });

  const counterRef = useRef(null);

  const durations = {
    houses: 7564,
    roads: 650000,
    partnerships: 424,
  };

  const increments = {
    houses: Math.ceil(durations.houses / 100),
    roads: Math.ceil(durations.roads / 100),
    partnerships: Math.ceil(durations.partnerships / 100),
  };

  const animateCounter = () => {
    const interval = setInterval(() => {
      setCounts((prev) => {
        const next = {
          houses: Math.min(prev.houses + increments.houses, durations.houses),
          roads: Math.min(prev.roads + increments.roads, durations.roads),
          partnerships: Math.min(prev.partnerships + increments.partnerships, durations.partnerships),
        };

        if (
          next.houses === durations.houses &&
          next.roads === durations.roads &&
          next.partnerships === durations.partnerships
        ) {
          clearInterval(interval);
        }

        return next;
      });
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounts({ houses: 0, roads: 0, partnerships: 0 });
          animateCounter();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const formatNumber = (num:number) =>
    num >= 1000 ? num.toLocaleString("en-US") : num;

  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-start px-20 py-16">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Our Solutions</h1>
            <p className="text-lg text-[#393E46] mt-6 leading-relaxed">
              Azimco Development Company provides solutions to Africa’s major
              infrastructure problems by building affordable housing, improving
              energy access, upgrading roads and transport, expanding telecom
              networks, and developing agriculture and mining. They use creative
              financing models that let countries pay using their natural
              resources instead of cash. This helps boost economic growth and
              reduce poverty.
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

        <div
          ref={counterRef}
          className="w-full flex justify-around px-14 relative -top-10"
        >
          <div className="w-[70%] grid grid-cols-3 gap-12 px-20 py-10">
            <div className="w-[33%] flex flex-col items-center">
              <img src="/one.jpeg" alt="Icon 1" className="mb-6 w-12 h-12" />
              <h2 className="text-4xl font-bold">
                {formatNumber(counts.houses)}
              </h2>
              <p className="text-[#393E46] mt-2">Houses built</p>
            </div>
            <div className="w-[33%] flex flex-col items-center text-center">
              <img src="/two.jpeg" alt="Icon 2" className="mb-6 w-12 h-12" />
              <h2 className="text-4xl font-bold">
                {formatNumber(counts.roads)}
              </h2>
              <p className="text-[#393E46] mt-2">Completed roads</p>
            </div>
            <div className="w-[33%] flex flex-col items-center">
              <img src="/three.jpeg" alt="Icon 3" className="mb-6 w-12 h-12" />
              <h2 className="text-4xl font-bold">
                {formatNumber(counts.partnerships)}
              </h2>
              <p className="text-[#393E46] mt-2">
                Public-Private Partnerships Formed
              </p>
            </div>
          </div>

          <div className="w-[30%] flex justify-between items-start px-10 py-10 ">
            <div className="w-full">
              <h2 className="text-2xl font-bold">Azimco specializes in:</h2>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>Residential and Commercial Building</li>
                <li>Infrastructure and Road Construction</li>
                <li>Project Management and Consultancy</li>
                <li>Skilled Workforce Development</li>
                <li>Sustainable Construction Practices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-around px-7">
          <div className="text-center py-10">
            <button className="text-lg font-semibold text-[#D4ADFC] underline">
              Explore Our Solutions
            </button>
          </div>

          <div className="text-center py-10">
            <button className="text-lg font-semibold text-[#D4ADFC] underline">
              Our Approach
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-6 py-8">
        <h1 className="text-3xl font-bold">Our Solutions</h1>
        <p className="text-base text-gray-700 mt-4 leading-relaxed">
          Azimco Development Company provides solutions to Africa’s major
          infrastructure problems by building affordable housing, improving
          energy access, upgrading roads and transport, expanding telecom
          networks, and developing agriculture and mining. They use creative
          financing models that let countries pay using their natural resources
          instead of cash. This helps boost economic growth and reduce poverty.
        </p>

        <div className="flex flex-col items-center py-8">
          <img src="/icon1.svg" alt="Icon 1" className="mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold">
            {formatNumber(counts.houses)}
          </h2>
          <p className="text-gray-600">Houses built</p>
        </div>

        <div className="flex flex-col items-center py-8">
          <img src="/icon2.svg" alt="Icon 2" className="mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold">
            {formatNumber(counts.roads)}
          </h2>
          <p className="text-gray-600">Completed roads</p>
        </div>
        <div className="flex flex-col items-center py-8">
          <img src="/icon3.svg" alt="Icon 3" className="mb-4 w-12 h-12" />
          <h2 className="text-2xl font-semibold">
            {formatNumber(counts.partnerships)}
          </h2>
          <p className="text-gray-600">
            Public-Private Partnerships Formed
          </p>
        </div>

        <div className="py-8">
          <div className="text-center py-8">
            <button className="text-lg font-semibold text-yellow-600 underline">
              Explore Our Solutions
            </button>
          </div>

          <img
            src="/path-to-image.jpg"
            alt="Farmer holding crops"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">Azimco specializes in:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Residential and Commercial Building</li>
            <li>Infrastructure and Road Construction</li>
            <li>Project Management and Consultancy</li>
            <li>Skilled Workforce Development</li>
            <li>Sustainable Construction Practices</li>
          </ul>
          <div className="text-center py-8">
            <button className="text-lg font-semibold text-yellow-600 underline">
              Our Approach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
