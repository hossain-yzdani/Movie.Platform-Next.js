// app/categories/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Film,
  Tv,
  Drama,
  Theater,
  Rocket,
  Heart,
  Skull,
  Laugh,
  Zap,
  Sword,
  Ghost,
  Star,
  TrendingUp,
  Sparkles,
  Flame,
  Clock,
  Award,
  Popcorn,
  Play,
  ChevronRight,
} from "lucide-react";

// ===== MOVIES DATA =====
const MOVIES = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image: "/img/inception.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image: "/img/theDarkNight.jpg",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    image: "/img/interstaller.webp",
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image: "/img/theMatrix.webp",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: 5,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    image: "/img/gladiator.png",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    image: "/img/theShawshank.jpg",
    genres: ["Drama"],
  },
  {
    id: 7,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    image: "/img/pulp-fiction.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    id: 8,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    image: "/img/godfather.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    id: 9,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    image: "/img/fight-club.jpg",
    genres: ["Drama"],
  },
  {
    id: 10,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    image: "/img/forrest-gump.jpg",
    genres: ["Comedy", "Drama", "Romance"],
  },
];

// ===== CATEGORIES DATA =====
const categories = [
  {
    id: 1,
    name: "Action",
    icon: <Zap size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 245,
    href: "/categories/action",
    movies: MOVIES.filter((m) => m.genres.includes("Action")),
  },
  {
    id: 2,
    name: "Drama",
    icon: <Drama size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 312,
    href: "/categories/drama",
    movies: MOVIES.filter((m) => m.genres.includes("Drama")),
  },
  {
    id: 3,
    name: "Comedy",
    icon: <Laugh size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 189,
    href: "/categories/comedy",
    movies: MOVIES.filter((m) => m.genres.includes("Comedy")),
  },
  {
    id: 4,
    name: "Sci-Fi",
    icon: <Rocket size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 167,
    href: "/categories/sci-fi",
    movies: MOVIES.filter((m) => m.genres.includes("Sci-Fi")),
  },
  {
    id: 5,
    name: "Romance",
    icon: <Heart size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 134,
    href: "/categories/romance",
    movies: MOVIES.filter((m) => m.genres.includes("Romance")),
  },
  {
    id: 6,
    name: "Horror",
    icon: <Ghost size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 98,
    href: "/categories/horror",
    movies: MOVIES.filter((m) => m.genres.includes("Horror")),
  },
  {
    id: 7,
    name: "Thriller",
    icon: <Skull size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 156,
    href: "/categories/thriller",
    movies: MOVIES.filter((m) => m.genres.includes("Thriller")),
  },
  {
    id: 8,
    name: "Adventure",
    icon: <Sword size={24} />,
    bg: "bg-black/60",
    border: "border-white/10",
    text: "text-white",
    count: 203,
    href: "/categories/adventure",
    movies: MOVIES.filter((m) => m.genres.includes("Adventure")),
  },
];

// ===== CATEGORY CARD COMPONENT =====
const CategoryCard = ({ category }: { category: (typeof categories)[0] }) => {
  const displayMovies = category.movies.slice(0, 3);

  return (
    <Link
      href={category.href}
      className="group relative bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-yellow-400/20">
              <div className="text-yellow-400">{category.icon}</div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-400 text-xs">{category.count} Movies</p>
            </div>
          </div>
          <div className="text-yellow-400/50 group-hover:text-yellow-400 transition-colors duration-300">
            <ChevronRight size={20} />
          </div>
        </div>

        {/* Movie Thumbnails */}
        <div className="grid grid-cols-3 gap-2">
          {displayMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative aspect-2/3 rounded-lg overflow-hidden bg-gray-800"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-1 left-1 right-1">
                <p className="text-white text-[10px] font-medium truncate">
                  {movie.title}
                </p>
              </div>
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

// ===== MAIN PAGE =====
export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-yellow-400 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Explore <span className="text-yellow-400">Categories</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            Discover movies by genre. Find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Featured Banner */}
        <div className="mt-12 bg-linear-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Flame size={28} className="text-yellow-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Can't decide? Try <span className="text-yellow-400">Random</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            Let us pick a movie for you based on your mood.
          </p>
          <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-400/30">
            🎲 Pick Random Movie
          </button>
        </div>
      </div>
    </main>
  );
}
