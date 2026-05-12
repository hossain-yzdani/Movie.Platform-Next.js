"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperSlideWrapper from "./swiperSlideWrapper";

type TVideoWrapper = {
  title: string,
  link: string
}

const VideoListWrapper = ({title, link}: TVideoWrapper) => {

  const number = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten" ];

  return (
    <div className="">
      <div className="flex justify-between mb-5 items-end">
        <h2 className="text-lg lg:text-2xl">{title}</h2>
        <Link className="text-gray-300 text-xs" href={`${link}`}>
          مشاهده همه
        </Link>
      </div>

      <Swiper
        className="px-4 gap-0"
        // modules={[Autoplay, Pagination]}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        freeMode={true}
        spaceBetween={20}
        slidesPerView={3.3}
        // pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 5.2,
          },
          1024: {
            slidesPerView: 7.5,
          },
        }}
      >
        {number.map(() => (
          <SwiperSlide dir="rtl" className="mb-10">
            <SwiperSlideWrapper />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 
export default VideoListWrapper;