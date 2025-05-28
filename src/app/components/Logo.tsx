"use client"; // Mark as client component due to Swiper

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Logo() {
  return (
    <section className="logo-slider-wrapper">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            600: { slidesPerView: 3 },
            1000: { slidesPerView: 8 },
          }}
          className="logo-carousel"
        >
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-1.webp" alt="Logo 1" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-2.webp" alt="Logo 2" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-3.webp" alt="Logo 3" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-4.webp" alt="Logo 4" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-6.webp" alt="Logo 6" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-7.webp" alt="Logo 7" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-8.webp" alt="Logo 8" width={150} height={75} />
          </SwiperSlide>
          <SwiperSlide className="logo-item">
            <Image src="/images/logos/logo-9.webp" alt="Logo 9" width={150} height={75} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}