import React from 'react'

export default function SolutionHeader() {
  return (
    <header className="bg-[#dbc2f3] shadow-md sticky top-0 z-50 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-center gap-6 text-sm md:text-base font-semibold text-gray-800">
            <a href="/solution/approach" className="hover:underline">Our Approach</a>
            <a href="/solution/impact" className="hover:underline">Our Impact</a>
            <a href="/solution/research" className="hover:underline">Our Research</a>
            {/* <a href="#" className="hover:underline">Strategy 2020–2030</a>
            <a href="#" className="hover:underline">Fertilizer FAQs</a> */}
          </div>
        </header>
  )
}
