'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/slide1.jpg',
    category: 'CATALYZING FARM PRODUCTIVITY',
    date: 'APRIL 2, 2025',
    title: 'ISFM Training in Burkina Faso: A Collaborative Approach to Soil Fertility and Land'
  },
  {
    image: '/slide2.jpg',
    category: 'DEVELOPING BETTER TECHNOLOGIES',
    date: 'APRIL 8, 2025',
    title: 'Revitalizing African Farms: How Organic Inputs Can Build Soil Health'
  },
  {
    image: '/slide3.jpg',
    category: 'DEVELOPING BETTER TECHNOLOGIES',
    date: 'APRIL 8, 2025',
    title: 'Revitalizing African Farms: How Organic Inputs Can Build Soil Health'
  },
  {
    image: '/slide3.jpg',
    category: 'DEVELOPING BETTER TECHNOLOGIES',
    date: 'APRIL 8, 2025',
    title: 'Revitalizing African Farms: How Organic Inputs Can Build Soil Health'
  },
  {
    image: '/slide3.jpg',
    category: 'DEVELOPING BETTER TECHNOLOGIES',
    date: 'APRIL 8, 2025',
    title: 'Revitalizing African Farms: How Organic Inputs Can Build Soil Health'
  }
];

export default function IFDCCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[50vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Slide Background"
            fill
            priority
            className="object-cover object-center"
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 px-6 py-4 lg:px-12 lg:py-6 max-w-3xl text-center"
          >
            <p className="text-xs lg:text-sm font-bold text-gray-800 uppercase">
              {slides[currentSlide].category}
            </p>
            <p className="text-green-600 text-sm lg:text-base font-semibold mt-1">
              {slides[currentSlide].date}
            </p>
            <h2 className="text-xl lg:text-3xl font-semibold text-gray-900 mt-2">
              {slides[currentSlide].title}
            </h2>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="text-green-600 w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="text-green-600 w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {slides.map((_, idx) => (
  <button
    key={idx}
    onClick={() => setCurrentSlide(idx)}
    className={`w-3 h-3 rounded-full border border-gray-500 transition-colors duration-300 ${
      currentSlide === idx ? 'bg-green-600' : 'bg-white'
    }`}
    aria-label={`Go to slide ${idx + 1}`}
  ></button>
))}

      </div>
    </div>
  );
}
