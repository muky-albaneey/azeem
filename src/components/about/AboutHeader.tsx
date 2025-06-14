import React from 'react'

export default function AboutHeader() {
  return (
     <header className="bg-[#e6e1c5] shadow-md sticky top-0 z-50 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-center gap-6 text-sm md:text-base font-semibold text-gray-800">
            <a href="#" className="hover:underline">Who we are</a>
            <a href="#" className="hover:underline">what we do</a>
            <a href="#" className="hover:underline">Our Team</a>
            <a href="#" className="hover:underline">Our Board of Directors</a>
            <a href="#" className="hover:underline">Our History</a>
          </div>
        </header>
  )
}
