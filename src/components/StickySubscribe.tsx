"use client";
import { useEffect, useState } from "react";

export default function StickySubscribe() {
  const [show, setShow] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Check if scrolling up
        if (window.scrollY < lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    show && (
      <div className="sticky bottom-0 z-50 bg-[#78C043] flex flex-col md:flex-row items-center justify-between px-6 py-4 text-gray-900 font-bold text-xl">
        <span>Subscribe for Updates</span>
        <button className="mt-2 md:mt-0 border-2 border-white px-6 py-2 rounded-sm hover:bg-white hover:text-[#78C043] transition">
          Sign up
        </button>
      </div>
    )
  );
}
