// app/my-videos/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Film, 
  Clock, 
  Star, 
  Calendar, 
  Trash2, 
  Heart, 
  Eye, 
  Plus,
  Play,
  X,
  Check,
  AlertCircle
} from "lucide-react";

// ===== SAMPLE WATCHLIST DATA =====
const MY_VIDEOS = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    image: "/img/inception.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    progress: 75, // percent watched
    watchDate: "2026-06-15",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    duration: "2h 49m",
    image: "/img/interstaller.webp",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    progress: 30,
    watchDate: "2026-06-10",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    duration: "2h 35m",
    image: "/img/gladiator.png",
    genres: ["Action", "Adventure", "Drama"],
    progress: 100,
    watchDate: "2026-06-05",
    isFavorite: true,
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2h 22m",
    image: "/img/theShawshank.jpg",
    genres: ["Drama"],
    progress: 45,
    watchDate: "2026-05-28",
    isFavorite: false,
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    image: "/img/theDarkNight.jpg",
    genres: ["Action", "Crime", "Drama"],
    progress: 100,
    watchDate: "2026-05-20",
    isFavorite: true,
  },
];

// ===== STATS =====
const STATS = [
  { label: "Total Movies", value: MY_VIDEOS.length, icon: <Film size={18} /> },
  { label: "Watched", value: MY_VIDEOS.filter(v => v.progress === 100).length, icon: <Check size={18} /> },
  { label: "Watchlist", value: MY_VIDEOS.filter(v => v.progress < 100 && v.progress > 0).length, icon: <Clock size={18} /> },
  { label: "Favorites", value: MY_VIDEOS.filter(v => v.isFavorite).length, icon: <Heart size={18} /> },
];

// ===== FILTER OPTIONS =====
const FILTERS = [
  { id: "all", label: "All" },
  { id: "watching", label: "Watching" },
  { id: "completed", label: "Completed" },
  { id: "favorites", label: "Favorites" },
];

export default function MyVideosPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null);
  const [videos, setVideos] = useState(MY_VIDEOS);

  const getFilteredVideos = () => {
    switch (activeFilter) {
      case "watching":
        return videos.filter(v => v.progress > 0 && v.progress < 100);
      case "completed":
        return videos.filter(v => v.progress === 100);
      case "favorites":
        return videos.filter(v => v.isFavorite);
      default:
        return videos;
    }
  };

  const filteredVideos = getFilteredVideos();

  const handleDelete = (id: number) => {
    setVideos(videos.filter(v => v.id !== id));
    setShowDeleteConfirm(null);
  };

  const toggleFavorite = (id: number) => {
    setVideos(videos.map(v => 
      v.id === id ? { ...v, isFavorite: !v.isFavorite } : v
    ));
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-400";
    return "bg-yellow-400/60";
  };

  const getStatusLabel = (progress: number) => {
    if (progress === 100) return "Completed";
    if (progress > 0) return "Watching";
    return "Not Started";
  };

  return (
    <main className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-yellow-400 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              My <span className="text-yellow-400">Videos</span>
            </h1>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/20 rounded-lg text-yellow-400 text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <Plus size={16} />
            Discover More
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 text-center hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center gap-2 text-yellow-400 mb-1 group-hover:scale-110 transition-transform">
                {stat.icon}
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-yellow-400 text-black"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-yellow-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-400/5"
              >
                <Link href={`/movie/${video.id}`}>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={video.image}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Play Button - Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-14 h-14 rounded-full bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play size={28} className="text-yellow-400 fill-yellow-400 ml-1" />
                      </div>
                    </div>

                    {/* Progress Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      <span className={`text-[10px] font-medium ${getStatusLabel(video.progress) === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                        {getStatusLabel(video.progress)}
                      </span>
                    </div>

                    {/* Favorite Badge */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(video.id);
                      }}
                      className="absolute top-3 left-3 p-2 rounded-full bg-black/60 backdrop-blur-sm hover:bg-yellow-400/20 transition-all duration-300"
                    >
                      <Heart
                        size={16}
                        className={video.isFavorite ? "fill-yellow-400 text-yellow-400" : "text-white/40"}
                      />
                    </button>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="w-full h-1.5 bg-white/10">
                        <div
                          className={`h-full ${getProgressColor(video.progress)} transition-all duration-500`}
                          style={{ width: `${video.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Movie Info */}
                    <div className="absolute bottom-3 left-0 right-0 px-3 flex items-end justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/50 text-xs">
                          <Calendar size={12} />
                          <span>{video.year}</span>
                          <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                          <Clock size={12} />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400 text-xs">
                        <Star size={12} className="fill-yellow-400" />
                        <span>{video.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Actions */}
                <div className="p-3 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">
                      Added: {new Date(video.watchDate).toLocaleDateString()}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDeleteConfirm(video.id)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                {/* Delete Confirmation */}
                {showDeleteConfirm === video.id && (
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl p-6 z-10">
                    <AlertCircle size={32} className="text-red-400 mb-3" />
                    <p className="text-white text-sm font-medium text-center mb-4">
                      Remove &quot;{video.title}&quot; from your list?
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(null);
                        }}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(video.id);
                        }}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-white mb-2">No videos found</h3>
            <p className="text-gray-400 mb-6">
              {activeFilter === "all" 
                ? "You haven't added any videos yet" 
                : `No videos in "${activeFilter}" category`}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Plus size={18} />
              Discover Movies
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}