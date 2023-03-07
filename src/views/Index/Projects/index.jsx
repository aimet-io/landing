import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="flex flex-col justify-center items-center max-w-full">
      <h2 className="text-white text-3xl mt-2 mb-5">Our portfolio</h2>
      <div className="w-[980px]  px-4 text-white max-w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={true}
        >
          <SwiperSlide>
            <div className="h-[250px] w-[280px] bg-semiDark rounded-md mb-8 mx-auto">
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
                alt="Projects"
              />
              <p className="text-center py-2">Cocoa</p>

              <div className="flex justify-center">
                <Link className="bg-blue rounded-md px-6 py-2" href="#">
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[250px] w-[280px] bg-semiDark rounded-md mb-8 mx-auto">
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
                alt="Projects"
              />
              <p className="text-center py-2">Cocoa</p>

              <div className="flex justify-center">
                <Link className="bg-blue rounded-md px-6 py-2" href="#">
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[250px] w-[280px] bg-semiDark rounded-md mb-8  mx-auto">
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
                alt="Projects"
              />
              <p className="text-center py-2">Cocoa</p>

              <div className="flex justify-center">
                <Link className="bg-blue rounded-md px-6 py-2" href="#">
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[250px] w-[280px] bg-semiDark rounded-md mb-8 mx-auto">
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
                alt="Projects"
              />
              <p className="text-center py-2">Cocoa</p>

              <div className="flex justify-center">
                <Link className="bg-blue rounded-md px-6 py-2" href="#">
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
