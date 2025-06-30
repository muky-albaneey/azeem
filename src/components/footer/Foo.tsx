// components/Footer.tsx
'use client'

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import StickySubscribe from '../StickySubscribe';

export default function Footer() {
  return (
    <div className="w-full">
      {/* Sticky Subscribe Bar */}
      {/* <div className="sticky top-0 z-50 bg-[#78C043] flex flex-col md:flex-row items-center justify-between px-6 py-4 text-gray-900 font-bold text-xl">
        <span>Subscribe for Updates</span>
        <button className="mt-2 md:mt-0 border-2 border-white px-6 py-2 rounded-sm hover:bg-white hover:text-[#78C043] transition">
          Sign up
        </button>
      </div> */}


      {/* Footer Section */}
      <footer className="bg-[#0C0950] text-white px-6 md:px-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          {/* Logo and Address */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="/azimlogo2.png"
              alt="IFDC Logo"
              width={160}
              height={100}
            />
            <div className="mt-4 text-sm space-y-1">
              <p>46 David Lilienthal Dr, Muscle Shoals, AL 35661</p>
              <p>1100 17th St NW, Suite 610, Washington, DC 20036</p>
              <p>Copyright © IFDC 2025 | <span className="underline">Privacy Policy</span></p>
            </div>
            <p className="mt-6 text-sm">web design by <span className="font-bold">openbox9</span></p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-white text-2xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mt-6 lg:mt-0">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">Ethics and Policies</a>
            <a href="#">Media Kit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
