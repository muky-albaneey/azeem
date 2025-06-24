// import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Our History" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/team", label: "Our Team" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <div className="text-white text-lg font-bold">🌱</div>
              </div>
              <span className="text-2xl font-bold text-green-600">IFDC</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={location === item.href ? "default" : "ghost"}
                  className={`px-4 py-2 ${
                    location === item.href
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={location === item.href ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    location === item.href
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}