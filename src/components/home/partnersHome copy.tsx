import Image from "next/image";
import { useState } from "react";

const partners = [
  {
    name: "Feed the Future",
    logo: "/logos/feedfuture.png",
  },
  {
    name: "Ministry of Foreign Affairs of the Netherlands",
    logo: "/logos/netherlands.png",
  },
  {
    name: "OCP",
    logo: "/logos/ocp.png",
  },
  {
    name: "Swiss Agency for Development and Cooperation SDC",
    logo: "/logos/sdc.png",
  },
  {
    name: "USAID",
    logo: "/logos/usaid.png",
  },
  {
    name: "ACDI/VOCA",
    logo: "/logos/acdi.png",
  },
  {
    name: "AFAP",
    logo: "/logos/afap.png",
  },
  {
    name: "African Development Bank",
    logo: "/logos/afdb.png",
  },
  
];

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
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
          isMobile ? "grid-cols-1" : "grid-cols-4"
        } justify-center`}
      >
        {currentPartners.map((partner, idx) => (
          <div key={idx} className="bg-white p-6 shadow rounded">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={300}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === currentIndex ? "bg-green-500" : "bg-gray-300"
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