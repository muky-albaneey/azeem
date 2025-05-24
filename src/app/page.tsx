// "use client";import Image from "next/image";
// import Navbar from "../components/header/Navbar";
import IFDCCarousel from "../components/home/IFDCCarousel";
import IFDCPage from "../components/home/OurSolutions";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SearchSection from "../components/home/SearchSection";
import NewsEvents from "@/components/home/NewsEvents";
import HomeAboutUs from "@/components/home/HomeAbout";
import PartnerCarousel from "@/components/home/partnersHome";
// import Footer from "@/components/footer/Foo";
// import StickySubscribe from "@/components/StickySubscribe";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     {/* <Navbar /> */}
     <IFDCCarousel />
     <IFDCPage />
     <FeaturedProjects />
     <SearchSection />
     <NewsEvents />
     <HomeAboutUs />
     <PartnerCarousel />
    
    </div>
  );
}
