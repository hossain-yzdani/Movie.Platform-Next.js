"use client";

import { useEffect, useState } from "react";
import { Play, Sparkles, TrendingUp } from "lucide-react";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative pt-32 pb-24 px-4 flex flex-col gap-6 justify-center items-center text-center overflow-hidden">
      {/* <div
        className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <Sparkles size={16} className="text-yellow-400" />
        <span className="text-xs font-medium text-white/80">
          پلتفرم تخصصی تماشای آنلاین
        </span>
      </div> */}

      <h1
        className={`mb-2 text-5xl md:text-7xl lg:text-8xl font-extrabold text-blue-400 drop-shadow-2xl transition-all duration-700 delay-150 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        کیو مووی
      </h1>

      <p
        className={`text-base md:text-lg text-white/60 max-w-md transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        تماشای آنلاین بهترین فیلم و سریال‌های خارجی با کیفیت بالا و زیرنویس
        اختصاصی
      </p>

      <div
        className={`flex flex-col lg:flex-row gap-4 mt-4 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <button className="group relative px-8 py-3 bg-linear-to-r from-blue-600 to-blue-500 rounded-full font-medium text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
          <span className="relative z-10 flex items-center gap-2">
            <Play size={18} fill="white" />
            شروع تماشا
          </span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-blue-500 to-cyan-500 transition-transform duration-500"></div>
        </button>

        <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium text-white/80 hover:text-white hover:bg-white/20 transition-all hover:scale-105">
          تماشای آنلاین
        </button>
      </div>

      <div
        className={`flex gap-6 mt-8 pt-4 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="text-center">
          <div className="flex items-center gap-1 text-2xl font-bold text-white">
            <TrendingUp size={22} className="text-green-400" />
            <span>۵۰۰۰+</span>
          </div>
          <p className="text-xs text-white/40">فیلم و سریال</p>
        </div>
        <div className="w-px h-8 bg-white/20"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            <span>۱۰۰K+</span>
          </div>
          <p className="text-xs text-white/40">کاربر فعال</p>
        </div>
        <div className="w-px h-8 bg-white/20"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            <span>۴.۸</span>
          </div>
          <p className="text-xs text-white/40">امتیاز کاربران</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
