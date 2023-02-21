import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Link from 'next/link'

export default function Projects () {
  return (
    <section className='flex justify-center'>
      <div className='w-[980px]  px-4 text-white'>
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className='h-[280px] w-[300px] bg-semiDark rounded-md mb-8'>
              <img
                src='https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg'
                alt='Projects'
              />
              <p className='text-center py-2'>Cocoa</p>

              <div className='flex justify-center'>
                <Link className='bg-blue rounded-md px-6 py-2' href='#'>
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[280px] w-[300px] bg-semiDark rounded-md mb-8'>
              <img
                src='https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg'
                alt='Projects'
              />
              <p className='text-center py-2'>Cocoa</p>

              <div className='flex justify-center'>
                <Link className='bg-blue rounded-md px-6 py-2' href='#'>
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[280px] w-[300px] bg-semiDark rounded-md mb-8'>
              <img
                src='https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg'
                alt='Projects'
              />
              <p className='text-center py-2'>Cocoa</p>

              <div className='flex justify-center'>
                <Link className='bg-blue rounded-md px-6 py-2' href='#'>
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[280px] w-[300px] bg-semiDark rounded-md mb-8'>
              <img
                src='https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg'
                alt='Projects'
              />
              <p className='text-center py-2'>Cocoa</p>

              <div className='flex justify-center'>
                <Link className='bg-blue rounded-md px-6 py-2' href='#'>
                  Demo
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
