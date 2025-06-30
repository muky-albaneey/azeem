"use client"; // Mark as a client component

import { usePathname } from "next/navigation";
import Navbar from "./header/Navbar";


const Header = () => {
  const pathname = usePathname();

  // Define routes where the header should appear
  const showHeaderOnRoutes = ["/","/resource","/career","/solution","/solution/approach","/solution/impact","/solution/research","/project","/about","/about/history","/about/team","/about/what-we-do","/about/who-we-are","/about/board","/projects","/partnerships","/news-events","/subscribe","/resources"];

  const shouldShowHeader =
  showHeaderOnRoutes.some((route) =>
    route.includes("[id]")
      ? new RegExp(`^${route.replace("[id]", "[^/]+")}$`).test(pathname)
      : pathname === route
  );


  if (!shouldShowHeader) return null;

  return <Navbar />;
};

export default Header;
