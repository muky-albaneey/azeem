import React from 'react'

export default function AboutHeader() {
  return (
     <header className="bg-[#e6e1c5] shadow-md sticky top-0 z-50 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-center gap-6 text-sm md:text-base font-semibold text-gray-800">
            <a href="/about/who-we-are" className="hover:underline">Who we are</a>
            <a href="/about/what-we-do" className="hover:underline">what we do</a>
            <a href="/about/team" className="hover:underline">Our Team</a>
            <a href="/about/board" className="hover:underline">Our Board of Directors</a>
            <a href="/about/history" className="hover:underline">Our History</a>
          </div>
        </header>
  )
}
