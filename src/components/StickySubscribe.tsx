
"use client";
import { useEffect, useRef, useState } from "react";

export default function StickySubscribe() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0); // This persists between renders

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < lastScrollY.current) {
          setShow(true); // Scrolling up
        } else {
          setShow(false); // Scrolling down
        }
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    show && (
      <div className="sticky bottom-0 z-50 bg-[#050d54] flex flex-col md:flex-row items-center justify-between px-6 py-4 text-white font-bold text-xl">
        <span>Subscribe for Updates</span>
        <button className="mt-2 md:mt-0 border-2 border-white px-6 py-2 rounded-sm hover:bg-white hover:text-[#1D267D] transition">
          Sign up
        </button>
      </div>
    )
  );
}
