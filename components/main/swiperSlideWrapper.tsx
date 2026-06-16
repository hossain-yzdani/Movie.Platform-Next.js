"use client";

import { Star, Calendar } from "lucide-react";

const SwiperSlideWrapper = () => {
  return (
    <div className="relative rounded-xl overflow-hidden w-full group cursor-pointer">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src="img/videoBannerImg.webp"
        alt="Titanic"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 text-white p-2">
        <h3 className="text-sm md:text-xl font-bold line-clamp-1">
          Titanic
        </h3>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-white/70 text-xs">
            <Calendar size={14} />
            <span>2009</span>
          </div>

          {/* <div className="flex items-center gap-1 text-yellow-400 font-bold text-xs">
            <Star size={14} fill="currentColor" />
            <span>8.7</span>
            <span className="text-white/50 text-xs">/ 10</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SwiperSlideWrapper;
