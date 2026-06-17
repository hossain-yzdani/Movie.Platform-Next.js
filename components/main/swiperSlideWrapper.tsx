"use client";

import Image from "next/image";
import { Star, Calendar, Clock, Play } from "lucide-react";
import { motion } from "framer-motion";

interface SwiperSlideWrapperProps {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration?: string;
  image: string;
  onClick?: () => void;
}

const SwiperSlideWrapper = ({
  id,
  title,
  year,
  rating,
  duration,
  image,
  onClick,
}: SwiperSlideWrapperProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl overflow-hidden w-full group cursor-pointer bg-black/40 backdrop-blur-sm border border-white/5 hover:border-yellow-400/30 transition-all duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-2/3 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          priority={false}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300" />

        {/* Top Badge - Rating */}
        <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-1 rounded-full border border-yellow-400/20">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-bold">{rating.toFixed(1)}</span>
        </div>

        {/* Duration Badge - Top Left */}
        {duration && (
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full">
            <Clock size={12} className="text-white/70" />
            <span className="text-white/80 text-xs">{duration}</span>
          </div>
        )}

        {/* Year Badge - Bottom */}
        <div className="absolute bottom-16 left-0 right-0 px-3">
          <div className="flex items-center gap-1.5 text-white/60 text-xs">
            <Calendar size={13} />
            <span>{year}</span>
          </div>
        </div>

        {/* Title - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-white line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Play Button - Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="text-yellow-400 fill-yellow-400 ml-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SwiperSlideWrapper;