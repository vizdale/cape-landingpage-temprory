"use client";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import { P1 } from "@/common/typography/Paragraph";
import Image from "next/image";
const TESTIMONIALS = [{
    id : 1,
    quote : "Cape agency done a great job by improving our sales 10x",
    image : "https://res.cloudinary.com/dosjh2min/image/upload/v1685516892/cape_agency/client_mm5yqe.jpg",
    name : "Sivaraj",
    designation : "CEO of Kaaju",
}, {
    id : 2,
    quote : "Cape agency done a great job by improving our sales 10x",
    image : "https://res.cloudinary.com/dosjh2min/image/upload/v1685516892/cape_agency/client_mm5yqe.jpg",
    name : "Sivaraj",
    designation : "CEO of Kaaju",
}, {
    id : 3,
    quote : "Cape agency done a great job by improving our sales 10x",
    image : "https://res.cloudinary.com/dosjh2min/image/upload/v1685516892/cape_agency/client_mm5yqe.jpg",
    name : "Sivaraj",
    designation : "CEO of Kaaju",
}]
const Testimonials = () => {
  return (
    <div className="">
      <Swiper
      spaceBetween={10}
      modules={[Pagination]}
      pagination = {{clickable : true}}
      >
       {TESTIMONIALS.map(test => (
        <SwiperSlide  key = {test.id}>
        <div className="bg-black rounded-3xl pt-16 md:pt-32 px-5 md:px-10 pb-10  relative">
            <img src = "./assets/quote.svg" className="w-20 h-auto md:w-40 absolute top-5 md:top-14 md:left-10"/>
            <P1>{test.quote}</P1>
            <div className="flex items-center gap-5 mt-5">
                <img src ={test.image} 
                alt = {test.name}
                title = {test.name} 
                className="h-[40px] w-[40px] md:w-[75px] md:h-[75px] rounded-full" />

                <div className="">
                    <p>{test.name}</p>
                    <p>{test.designation}</p>
                </div>
            </div>
        </div>
        </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
