// app/search/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, Film, Calendar, Star, TrendingUp } from "lucide-react";

// ===== MOVIES DATA =====
const ALL_MOVIES = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    image: "/img/inception.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    image: "/img/theDarkNight.jpg",
    genres: ["Action", "Crime", "Drama"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on Gotham.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    duration: "2h 49m",
    image: "/img/interstaller.webp",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    description: "A team of explorers travel through a wormhole in space.",
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    duration: "2h 16m",
    image: "/img/theMatrix.webp",
    genres: ["Action", "Sci-Fi"],
    description: "A computer programmer discovers reality is a simulation.",
  },
  {
    id: 5,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    duration: "2h 35m",
    image: "/img/gladiator.png",
    genres: ["Action", "Adventure", "Drama"],
    description:
      "A former Roman General seeks vengeance against the corrupt emperor.",
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2h 22m",
    image: "/img/theShawshank.jpg",
    genres: ["Drama"],
    description: "Two imprisoned men find solace and redemption.",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    duration: "2h 34m",
    image: "/img/pulp-fiction.jpg",
    genres: ["Crime", "Drama"],
    description: "The lives of two mob hitmen intertwine in tales of violence.",
  },
  {
    id: 8,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    duration: "2h 55m",
    image: "/img/godfather.jpg",
    genres: ["Crime", "Drama"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control.",
  },
  {
    id: 9,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    duration: "2h 19m",
    image: "/img/fight-club.jpg",
    genres: ["Drama"],
    description: "An insomniac office worker forms an underground fight club.",
  },
  {
    id: 10,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    duration: "2h 22m",
    image: "/img/forrest-gump.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    description:
      "The presidencies of Kennedy and Johnson through the eyes of a simple man.",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof ALL_MOVIES>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  // Get all unique genres
  const allGenres = ["All", ...new Set(ALL_MOVIES.flatMap((m) => m.genres))];

  // Search function
  const handleSearch = () => {
    if (!query.trim() && selectedGenre === "All") {
      setResults(ALL_MOVIES);
      return;
    }

    setIsSearching(true);

    const filtered = ALL_MOVIES.filter((movie) => {
      const matchesQuery =
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some((g) => g.toLowerCase().includes(query.toLowerCase()));

      const matchesGenre =
        selectedGenre === "All" || movie.genres.includes(selectedGenre);

      return matchesQuery && matchesGenre;
    });

    setTimeout(() => {
      setResults(filtered);
      setIsSearching(false);
    }, 300);
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Clear search
  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  // Auto-search on genre change
  useEffect(() => {
    if (query.trim() || selectedGenre !== "All") {
      handleSearch();
    }
  }, [selectedGenre]);

  return (
    <main className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-yellow-400 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Search <span className="text-yellow-400">Movies</span>
          </h1>
        </div>

        {/* Search Box */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for movies by title, genre, or description..."
                className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="flex gap-3">
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-yellow-400/50 transition-colors min-w-35"
              >
                {allGenres.map((genre) => (
                  <option
                    key={genre}
                    value={genre}
                    className="bg-black text-white"
                  >
                    {genre}
                  </option>
                ))}
              </select>

              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>

          {/* Search Stats */}
          {results.length > 0 && (
            <div className="mt-4 text-sm text-gray-400">
              Found{" "}
              <span className="text-yellow-400 font-bold">
                {results.length}
              </span>{" "}
              movies
            </div>
          )}
        </div>

        {/* Results */}
        {isSearching ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin" />
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {results.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="group relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-yellow-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-400/5"
              >
                <div className="relative aspect-2/3 w-full overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-1 rounded-full border border-yellow-400/20">
                    <Star
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-white text-xs font-bold">
                      {movie.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-12 left-0 right-0 px-3">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Calendar size={13} />
                      <span>{movie.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm md:text-base font-bold text-white line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300">
                      {movie.title}
                    </h3>
                  </div>

                  {/* Play Button - Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-yellow-400 fill-yellow-400 ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Genre Tags */}
                <div className="absolute bottom-14 left-0 right-0 px-3 flex flex-wrap gap-1">
                  {movie.genres.slice(0, 2).map((genre) => (
                    <span
                      key={genre}
                      className="text-[8px] px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded-full text-white/60 border border-white/5"
                    >
                      {genre}
                    </span>
                  ))}
                  {movie.genres.length > 2 && (
                    <span className="text-[8px] px-1.5 py-0.5 text-white/40">
                      +{movie.genres.length - 2}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : query || selectedGenre !== "All" ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Search for movies
            </h3>
            <p className="text-gray-400">
              Type a movie title, genre, or description to get started
            </p>
          </div>
        )}

        {/* Popular Searches */}
        {!query && results.length === 0 && (
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={18} className="text-yellow-400" />
              <h3 className="text-sm font-medium text-white/60">
                Popular Searches
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Inception",
                "Dark Knight",
                "Interstellar",
                "Matrix",
                "Action",
                "Sci-Fi",
                "Drama",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 bg-white/5 hover:bg-yellow-400/10 border border-white/10 hover:border-yellow-400/30 rounded-full text-sm text-gray-400 hover:text-yellow-400 transition-all duration-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
