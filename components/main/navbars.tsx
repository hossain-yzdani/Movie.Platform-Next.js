"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Search, Film, User } from "lucide-react";

const Navbar = () => {
  const path = usePathname();

  type Link = {
    id: number;
    icon: React.ReactNode;
    text: string;
    url: string;
  };

  const links: Link[] = [
    { id: 1, icon: <Home size={22} />, text: "Home", url: "/" },
    { id: 2, icon: <Grid size={22} />, text: "Categories", url: "/categories" },
    { id: 3, icon: <Search size={22} />, text: "Search", url: "/search" },
    { id: 4, icon: <Film size={22} />, text: "My Movies", url: "/my-videos" },
    { id: 5, icon: <User size={22} />, text: "Account", url: "/account" },
  ];

  const isActive = (url: string) => {
    if (url === "/") return path === url;
    return path.startsWith(url);
  };

  return (
    <nav>
      {/* Mobile - Bottom Navigation */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-yellow-400/10 shadow-2xl shadow-yellow-400/5 z-50">
        <div className="flex justify-around items-center py-1.5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`relative flex flex-col items-center gap-0.5 px-2 py-2 transition-all duration-300 group ${
                isActive(link.url)
                  ? "text-yellow-400"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {isActive(link.url) && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
              )}

              <div
                className={`relative transition-transform duration-300 ${
                  isActive(link.url) ? "scale-110" : "group-hover:scale-105"
                }`}
              >
                {link.icon}
                {isActive(link.url) && (
                  <span className="absolute inset-0 blur-xl bg-yellow-400/20 rounded-full -z-10" />
                )}
              </div>

              <span
                className={`text-[10px] font-medium transition-colors duration-300 ${
                  isActive(link.url) ? "text-yellow-400" : "text-white/40"
                }`}
              >
                {link.text}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop - Bottom Navigation */}
      <div className="hidden lg:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-yellow-400/10 shadow-2xl shadow-yellow-400/5 px-2 py-1.5 flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`relative flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-300 group ${
                isActive(link.url)
                  ? "text-yellow-400 bg-yellow-400/10"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive(link.url) && (
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
              )}

              <div
                className={`relative transition-transform duration-300 ${
                  isActive(link.url) ? "scale-110" : "group-hover:scale-105"
                }`}
              >
                {link.icon}
                {isActive(link.url) && (
                  <span className="absolute inset-0 blur-xl bg-yellow-400/20 rounded-full -z-10" />
                )}
              </div>

              <span
                className={`text-[10px] font-medium transition-colors duration-300 ${
                  isActive(link.url) ? "text-yellow-400" : "text-white/40"
                }`}
              >
                {link.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
