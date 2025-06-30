'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';

const topLinks = [
  { name: 'SUBSCRIBE', link: '/subscribe' },
  { name: 'RESOURCES', link: '/resources' },
  { name: 'Programs', link: '/programs' }
];
const bottomLinks = [{name:'Solutions', link:'/solution'}, {name:'Projects',link:'/projects'}, {name:'News & Events', link:'/news-events'}, {name:'Partnerships', link:'/partnerships'}, {name:'About Us', link:'/about'}];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white md:px-50 py-5">
      {/* Desktop Top Navbar */}
      <div className="hidden lg:flex items-center justify-end px-8 py-3 space-x-6 text-sm font-semibold text-gray-700 relative">
        {topLinks.map(link => (
  <Link key={link.name} href={link.link} className="hover:text-[#D4ADFC]">
    {link.name}
  </Link>
))}

        <div className="flex items-center justify-between">
  <select
  className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 hover:text-[#D4ADFC] focus:outline-none focus:ring focus:ring-[#D4ADFC]"
  defaultValue="EN"
>
  <option value="EN">English</option>
  <option value="FR">Français</option>
  <option value="ES">Español</option>
  <option value="AR">العربية</option>
  <option value="PT">Português</option>
</select>

</div>


        {showSearch && (
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 rounded px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="border border-gray-700 px-4 py-1 rounded text-xs font-bold text-gray-800 hover:bg-gray-100">
              GO
            </button>
          </div>
        )}

        <button onClick={() => setShowSearch(prev => !prev)}>
          <Search className="w-5 h-5 cursor-pointer" />
        </button>
      </div>

      {/* Desktop Bottom Navbar */}
      <div className="hidden lg:flex items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/azimlogo2.png" alt="IFDC Logo" width={160} height={40} />
          </Link>
        </div>
        <nav className="flex items-center gap-20 text-1xl font-bold text-gray-800">
          {bottomLinks.map(link => (
            <a key={link.name} href={link.link} className="hover:text-[#D4ADFC]">
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 shadow-md">
        <Image src="/next.svg" alt="IFDC Logo" width={140} height={35} />
        <button onClick={() => setMobileOpen(true)}>
          <Menu className="w-6 h-6 text-[#D4ADFC]" />
        </button>
      </div>

      {/* Mobile Fullscreen Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-6 pt-6 overflow-y-auto transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <Image src="/next.svg" alt="IFDC Logo" width={140} height={35} />
            <button onClick={() => {
              if (showSearch) {
                setShowSearch(false);
              } else {
                setMobileOpen(false);
              }
            }}>
              <X className="w-6 h-6 text-[#D4ADFC]" />
            </button>
          </div>

          {/* Mobile Search Field */}
          {showSearch ? (
            <div className="flex items-center border-b pb-2 mb-4">
              <input
                autoFocus
                type="text"
                placeholder="Search"
                className="flex-1 border-gray-500 outline-none text-lg font-semibold placeholder-gray-400"
              />
              <button onClick={() => setShowSearch(false)}>
                <X className="w-5 h-5 ml-3 text-gray-600" />
              </button>
            </div>
          ) : (
            <>
              {/* Bottom Nav */}
              <nav className="space-y-6 text-lg font-semibold text-gray-800">
                {/* {bottomLinks.map(link => (
                  <div key={link} className="flex items-center justify-between">
                    <a href="#" className="hover:text-green-600">{link}</a>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                ))} */}
                {bottomLinks.map(link => (
                <div key={link.name} className="flex items-center justify-between">
                  <a href={link.link} className="hover:text-[#D4ADFC]">{link.name}</a>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              ))}

              </nav>

              {/* Top Nav Items */}
              <div className="mt-8 pt-4 space-y-4 text-sm font-semibold text-gray-800">
                <div
                  className="flex items-center justify-between cursor-pointer border-b"
                  onClick={() => setShowSearch(true)}
                >
                  <span>Search</span>
                  <Search className="w-5 h-5 text-gray-600" />
                </div>
                {topLinks.map(link => (
  <Link key={link.name} href={link.link} className="block hover:text-[#D4ADFC]">
    {link.name}
  </Link>
))}

               <div className="flex items-center justify-between">
  <label htmlFor="language-select" className="text-sm">Language</label>
  <select
    id="language-select"
    className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-[#D4ADFC]"
    defaultValue="EN"
  >
    <option value="EN">English</option>
    <option value="FR">Français</option>
    <option value="ES">Español</option>
    <option value="AR">العربية</option>
    <option value="PT">Português</option>
  </select>
</div>

              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}
