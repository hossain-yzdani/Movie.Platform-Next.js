"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Home, 
  Grid, 
  Search, 
  Film, 
  User,
  Menu 
} from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const path = usePathname();

  type Link = {
    id: number;
    icon: React.ReactNode;
    text: string;
    url: string;
  };

  const links: Link[] = [
    { id: 1, icon: <Home size={22} />, text: "خانه", url: "/" },
    { id: 2, icon: <Grid size={22} />, text: "دسته‌بندی", url: "/categories" },
    { id: 3, icon: <Search size={22} />, text: "جستجو", url: "/search" },
    { id: 4, icon: <Film size={22} />, text: "فیلم‌های من", url: "/my-videos" },
    { id: 5, icon: <User size={22} />, text: "حساب کاربری", url: "/account" },
  ];

  return (
    <nav>
      {/* Top Menu (دکمه منوی کشویی - فقط موبایل) */}
      {/* <div className="lg:hidden fixed top-4 left-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
          >
            <Menu size={24} />
          </button>

          {isVisible && (
            <div className="absolute top-14 left-0 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 p-2 min-w-40">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setIsVisible(false)}
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  {link.icon}
                  <span className="text-sm">{link.text}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div> */}

      <div className="lg:hidden fixed bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 z-50">
        <div className="flex justify-around items-center py-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${path === link.url ? "text-blue-400" : "text-white/70"} flex flex-col items-center gap-1 px-3 py-4 hover:text-white transition-colors`}
            >
              {link.icon}
              {/* <span className="text-[11px] font-medium">{link.text}</span> */}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-2 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${path === link.url ? "text-blue-400" : "text-white/70"} p-3 rounded-xl hover:text-white hover:bg-white/10 transition-all`}
              title={link.text}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;