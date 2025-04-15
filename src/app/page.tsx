import Image from "next/image";
import Navbar from "./components/header/Navbar";
import IFDCCarousel from "./components/home/IFDCCarousel";
import IFDCPage from "./components/home/OurSolutions";
import FeaturedProjects from "./components/home/FeaturedProjects";
import SearchSection from "./components/home/SearchSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     <Navbar />
     <IFDCCarousel />
     <IFDCPage />
     <FeaturedProjects />
     <SearchSection />
    </div>
  );
}
