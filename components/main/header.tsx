// components/HeroSlider.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ===== STATIC DATA =====
const MOVIES = [
  {
    id: 1,
    title: "Inception",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    backdrop_path:
      "/img/inception.jpg",
    poster_path:
      "/img/inception.jpg",
    vote_average: 8.8,
    release_date: "2010-07-16",
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: 2,
    title: "The Dark Knight",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    backdrop_path:
      "/img/theDarkNight.jpg",
    poster_path:
      "/img/theDarkNight.jpg",
    vote_average: 9.0,
    release_date: "2008-07-18",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 3,
    title: "Interstellar",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    backdrop_path:
      "/img/interstaller.webp",
    poster_path:
      "/img/interstaller.webp",
    vote_average: 8.7,
    release_date: "2014-11-07",
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: 4,
    title: "The Matrix",
    overview:
      "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    backdrop_path:
      "/img/theMatrix.webp",
    poster_path:
      "/img/theMatrix.webp",
    vote_average: 8.7,
    release_date: "1999-03-31",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: 5,
    title: "Gladiator",
    overview:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    backdrop_path:
      "/img/gladiator.png",
    poster_path:
      "/img/gladiator.png",
    vote_average: 8.5,
    release_date: "2000-05-05",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    backdrop_path:
      "/img/theShawshank.jpg",
    poster_path:
      "/img/theShawshank.jpg",
    vote_average: 9.3,
    release_date: "1994-09-23",
    genres: ["Drama"],
  },
];

interface HeroSliderProps {
  autoPlayInterval?: number;
}

export default function HeroSlider({
  autoPlayInterval = 6000,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const currentMovie = MOVIES[currentIndex];

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    timerRef.current = setTimeout(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (progressRef.current) clearTimeout(progressRef.current);
    };
  }, [currentIndex, isPlaying, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MOVIES.length);
    setProgress(0);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MOVIES.length) % MOVIES.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) setProgress(0);
  };

  // Format rating
  const formatRating = (rating: number) => {
    return ((rating / 10) * 5).toFixed(1);
  };

  // Get genre colors
  const getGenreColor = (genre: string) => {
    const colors: Record<string, string> = {
      Action: "bg-red-500/20 text-red-400 border-red-500/30",
      Adventure: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Animation: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Comedy: "bg-green-500/20 text-green-400 border-green-500/30",
      Crime: "bg-gray-600/20 text-gray-400 border-gray-600/30",
      Documentary: "bg-blue-300/20 text-blue-300 border-blue-300/30",
      Drama: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      Family: "bg-pink-400/20 text-pink-400 border-pink-400/30",
      Fantasy: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      History: "bg-amber-600/20 text-amber-400 border-amber-600/30",
      Horror: "bg-rose-600/20 text-rose-400 border-rose-600/30",
      Music: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
      Mystery: "bg-violet-500/20 text-violet-400 border-violet-500/30",
      Romance: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Sci-Fi": "bg-cyan-600/20 text-cyan-400 border-cyan-600/30",
      Thriller: "bg-slate-600/20 text-slate-400 border-slate-600/30",
      War: "bg-amber-700/20 text-amber-400 border-amber-700/30",
      Western: "bg-brown-600/20 text-brown-400 border-brown-600/30",
    };
    return colors[genre] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="relative w-full h-[70vh] min-h-125 max-h-200 overflow-hidden">
      {/* Background Image with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentMovie.backdrop_path}
            alt={currentMovie.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge - New/Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Featured Movie
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            {currentMovie.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-4"
          >
            <span className="flex items-center gap-1.5 text-sm text-white/80">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {formatRating(currentMovie.vote_average)}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-sm text-white/70">
              {new Date(currentMovie.release_date).getFullYear()}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-sm text-white/70">HD</span>
          </motion.div>

          {/* Genres */}
          {currentMovie.genres && currentMovie.genres.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {currentMovie.genres.slice(0, 4).map((genre) => (
                <span
                  key={genre}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${getGenreColor(genre)}`}
                >
                  {genre}
                </span>
              ))}
            </motion.div>
          )}

          {/* Overview */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-sm sm:text-base line-clamp-3 mb-6 max-w-xl"
          >
            {currentMovie.overview}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link
              href={`/movie/${currentMovie.id}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-200 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Now
            </Link>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to Watchlist
            </button>
          </motion.div>
        </div>
      </div>

      {/* Controls - Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Progress Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <motion.div
                className="h-full bg-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {MOVIES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-yellow-400"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-200"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide Counter - Top Right */}
      <div className="absolute top-6 right-6 z-20 text-white/60 text-sm font-medium">
        <span className="text-white">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="mx-1">/</span>
        <span>{String(MOVIES.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
