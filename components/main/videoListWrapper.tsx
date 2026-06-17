"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, FreeMode } from "swiper/modules";
import { TrendingUp, Star, Flame, Sparkles, ChevronRight } from "lucide-react";
import SwiperSlideWrapper from "./swiperSlideWrapper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// ===== MOVIES DATA =====
const MOVIES = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    image: "/img/inception.jpg",
    backdrop: "/img/inception.jpg",
    overview:
      "A thief who steals corporate secrets through dream-sharing technology.",
    genres: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    image: "/img/theDarkNight.jpg",
    backdrop: "/img/theDarkNight.jpg",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on Gotham.",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    duration: "2h 49m",
    image: "/img/interstaller.webp",
    backdrop: "/img/interstaller.webp",
    overview: "A team of explorers travel through a wormhole in space.",
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    duration: "2h 16m",
    image: "/img/theMatrix.webp",
    backdrop: "/img/theMatrix.webp",
    overview: "A computer programmer discovers reality is a simulation.",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: 5,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    duration: "2h 35m",
    image: "/img/gladiator.png",
    backdrop: "/img/gladiator.png",
    overview:
      "A former Roman General seeks vengeance against the corrupt emperor.",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2h 22m",
    image: "/img/theShawshank.jpg",
    backdrop: "/img/theShawshank.jpg",
    overview: "Two imprisoned men find solace and redemption.",
    genres: ["Drama"],
  },
  // {
  //   id: 7,
  //   title: "Pulp Fiction",
  //   year: 1994,
  //   rating: 8.9,
  //   duration: "2h 34m",
  //   image: "/img/pulp-fiction.jpg",
  //   backdrop: "/img/pulp-fiction.jpg",
  //   overview: "The lives of two mob hitmen intertwine in tales of violence.",
  //   genres: ["Crime", "Drama"],
  // },
  // {
  //   id: 8,
  //   title: "The Godfather",
  //   year: 1972,
  //   rating: 9.2,
  //   duration: "2h 55m",
  //   image: "/img/godfather.jpg",
  //   backdrop: "/img/godfather.jpg",
  //   overview:
  //     "The aging patriarch of an organized crime dynasty transfers control.",
  //   genres: ["Crime", "Drama"],
  // },
  // {
  //   id: 9,
  //   title: "Fight Club",
  //   year: 1999,
  //   rating: 8.8,
  //   duration: "2h 19m",
  //   image: "/img/fight-club.jpg",
  //   backdrop: "/img/fight-club.jpg",
  //   overview: "An insomniac office worker forms an underground fight club.",
  //   genres: ["Drama"],
  // },
  // {
  //   id: 10,
  //   title: "Forrest Gump",
  //   year: 1994,
  //   rating: 8.8,
  //   duration: "2h 22m",
  //   image: "/img/forrest-gump.jpg",
  //   backdrop: "/img/forrest-gump.jpg",
  //   overview:
  //     "The presidencies of Kennedy and Johnson through the eyes of a simple man.",
  //   genres: ["Comedy", "Drama", "Romance"],
  // },
];

// ===== ICON MAP =====
const iconMap: Record<string, React.ReactNode> = {
  trending: <TrendingUp size={20} className="text-yellow-400" />,
  top: <Star size={20} className="text-yellow-400 fill-yellow-400" />,
  hot: <Flame size={20} className="text-yellow-400" />,
  new: <Sparkles size={20} className="text-yellow-400" />,
};

interface VideoListWrapperProps {
  title: string;
  link: string;
  icon?: "trending" | "top" | "hot" | "new";
  autoplay?: boolean;
  delay?: number;
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    large?: number;
  };
}

const VideoListWrapper = ({
  title,
  link,
  icon = "trending",
  autoplay = true,
  delay = 4000,
  slidesPerView = {
    mobile: 2.2,
    tablet: 5.2,
    desktop: 7.5,
  },
}: VideoListWrapperProps) => {
  return (
    <div className="pl-3">
      {/* Header */}
      <div className="flex justify-between items-end px-5 mb-5">
        <div className="flex items-center gap-2">
          {iconMap[icon] && iconMap[icon]}
          <h2 className="text-lg lg:text-2xl font-bold text-white">{title}</h2>
        </div>
        <Link
          href={link}
          className="text-yellow-400 hover:text-yellow-300 text-xs font-medium transition-colors duration-200 flex items-center gap-1"
        >
          View All
          <ChevronRight size={14} />
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        className="gap-0"
        modules={[Autoplay, FreeMode]}
        autoplay={
          autoplay
            ? {
                delay: delay,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
            : false
        }
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        spaceBetween={16}
        slidesPerView={slidesPerView.mobile || 2.2}
        breakpoints={{
          768: {
            slidesPerView: slidesPerView.tablet || 5.2,
          },
          1024: {
            slidesPerView: slidesPerView.desktop || 7.5,
          },
        }}
      >
        {[...MOVIES, ...MOVIES].map((movie) => (
          <SwiperSlide key={movie.id} dir="rtl" className="mb-8">
            <SwiperSlideWrapper
              id={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              duration={movie.duration}
              image={movie.image}
              onClick={() => console.log(`Clicked: ${movie.title}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-free-mode .swiper-wrapper {
          transition-timing-function: ease-out;
        }
        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </div>
  );
};

export default VideoListWrapper;
