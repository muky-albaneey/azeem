"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const partners = [
  { name: "Feed the Future", logo: "/logos/feedfuture.png", description: "Tackling global hunger and food security." },
  { name: "Ministry of Foreign Affairs of the Netherlands", logo: "/logos/netherlands.png", description: "Supporting global development through diplomacy." },
  { name: "OCP", logo: "/logos/ocp.png", description: "Leading in phosphate-based fertilizer solutions." },
  { name: "Swiss Agency for Development and Cooperation SDC", logo: "/logos/sdc.png", description: "Promoting sustainable development worldwide." },
  { name: "USAID", logo: "/logos/usaid.png", description: "Delivering aid from the American people." },
  { name: "ACDI/VOCA", logo: "/logos/acdi.png", description: "Empowering people to succeed in agriculture." },
  { name: "AFAP", logo: "/logos/afap.png", description: "Strengthening fertilizer value chains in Africa." },
  { name: "African Development Bank", logo: "/logos/afdb.png", description: "Investing in sustainable economic growth." },
  { name: "World Bank", logo: "/logos/worldbank.png", description: "Working to end extreme poverty." },
  { name: "FAO", logo: "/logos/fao.png", description: "Eradicating hunger globally." },
  { name: "IFAD", logo: "/logos/ifad.png", description: "Financing agriculture for smallholder farmers." },
  { name: "GIZ", logo: "/logos/giz.png", description: "International cooperation for sustainable development." },
  { name: "Bill & Melinda Gates Foundation", logo: "/logos/gates.png", description: "Fighting poverty, disease, and inequality." },
  { name: "Rockefeller Foundation", logo: "/logos/rockefeller.png", description: "Catalyzing innovation in food systems." },
  { name: "Yara International", logo: "/logos/yara.png", description: "Crop nutrition company focused on sustainability." },
  { name: "Bayer", logo: "/logos/bayer.png", description: "Advancing health and agriculture." },
  { name: "Syngenta", logo: "/logos/syngenta.png", description: "Transforming agriculture with science." },
  { name: "UNDP", logo: "/logos/undp.png", description: "Helping countries build resilient societies." },
  { name: "World Food Programme", logo: "/logos/wfp.png", description: "Providing food assistance worldwide." },
  { name: "UNICEF", logo: "/logos/unicef.png", description: "Promoting children's welfare globally." },
  { name: "Heifer International", logo: "/logos/heifer.png", description: "Empowering communities with livestock and training." },
  { name: "ONE Campaign", logo: "/logos/one.png", description: "Ending extreme poverty and preventable disease." },
  { name: "CARE International", logo: "/logos/care.png", description: "Fighting global poverty and world hunger." },
  { name: "Oxfam", logo: "/logos/oxfam.png", description: "Tackling inequality to end poverty." },
  { name: "World Vision", logo: "/logos/worldvision.png", description: "Protecting children and transforming lives." },
  { name: "Plan International", logo: "/logos/plan.png", description: "Advancing children’s rights and equality for girls." },
  { name: "Save the Children", logo: "/logos/save.png", description: "Giving children a healthy start in life." },
  { name: "CNFA", logo: "/logos/cnfa.png", description: "Stimulating economic growth in rural areas." },
  { name: "Technoserve", logo: "/logos/technoserve.png", description: "Helping people lift themselves out of poverty." },
  { name: "AGRA", logo: "/logos/agra.png", description: "Transforming African agriculture." },
];

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 2 : 8;
  const totalPages = Math.ceil(partners.length / itemsPerPage);
  const currentPartners = partners.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-full bg-[url('/backgrounds/yellow-texture.png')] bg-cover py-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Solving Food Security Together</h2>

      <div
        className={`grid gap-4 px-4 ${
          isMobile ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-4"
        }`}
      >
        {currentPartners.map((partner, idx) => (
          // <div
          //   key={idx}
          //   className="relative group h-48 flex items-center justify-center bg-white shadow-lg border rounded-md overflow-hidden"
          // >
          <div
  key={idx}
  tabIndex={0}
  className="relative group h-48 flex items-center justify-center bg-white shadow-lg border rounded-md overflow-hidden focus:outline-none"
>

            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={100}
              className="object-contain max-h-16 transition-transform duration-300 group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-green-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center text-sm font-medium">{partner.description}</p>
            </div> */}
            <div className="absolute inset-0 bg-[#1D267D] bg-opacity-90 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
  <p className="text-white text-center text-sm font-medium">{partner.description}</p>
</div>

          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === currentIndex ? "bg-[#1D267D]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>

      <p className="mt-6 text-lg font-semibold text-gray-800">Our Partners</p>
    </div>
  );
};

export default PartnerCarousel;
