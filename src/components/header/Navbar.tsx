'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';

const topLinks = ['SUBSCRIBE', 'RESOURCES', 'CAREERS'];
const bottomLinks = [{name:'Solutions', link:'/solution'}, {name:'Projects',link:'/projects'}, {name:'News & Events', link:'/news-events'}, {name:'Partnerships', link:'/partnerships'}, {name:'About Us', link:'/about'}];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white md:px-50 py-5">
      {/* Desktop Top Navbar */}
      <div className="hidden lg:flex items-center justify-end px-8 py-3 space-x-6 text-sm font-semibold text-gray-700 relative">
        {topLinks.map(link => (
          <a key={link} href="#" className="hover:text-green-600">
            {link}
          </a>
        ))}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-green-600">
          <span>ENGLISH</span>
          <ChevronDown className="w-4 h-4" />
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
            <Image src="/next.svg" alt="IFDC Logo" width={160} height={40} />
          </Link>
        </div>
        <nav className="flex items-center gap-20 text-1xl font-bold text-gray-800">
          {bottomLinks.map(link => (
            <a key={link.name} href={link.link} className="hover:text-green-600">
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 shadow-md">
        <Image src="/next.svg" alt="IFDC Logo" width={140} height={35} />
        <button onClick={() => setMobileOpen(true)}>
          <Menu className="w-6 h-6 text-green-600" />
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
              <X className="w-6 h-6 text-green-600" />
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
                  <a href={link.link} className="hover:text-green-600">{link.name}</a>
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
                  <div key={link}>{link}</div>
                ))}
                <div className="flex items-center justify-between">
                  <span>ENGLISH</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}
