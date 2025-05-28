"use client"; // Mark as client component due to Swiper

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function MotionGraphic() {
  return (
    <section className="motion-wrapper">
      <div className="container-fluid g-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1} // Default for mobile
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            600: { slidesPerView: 2 }, // Tablet: 2 slides
            1000: { slidesPerView: 3 }, // Desktop: 3 slides
          }}
          className="video-carousel"
        >
          <SwiperSlide className="motion-item">
            <Image
              src="/images/gif/Black and Yellow Modern Pizza Sale Video.gif"
              alt="Pizza Sale Video"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
          <SwiperSlide className="motion-item">
            <Image
              src="/images/gif/Green Yellow Modern Bold Tasty Burger Vi.gif"
              alt="Tasty Burger Video"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
          <SwiperSlide className="motion-item">
            <Image
              src="/images/gif/sale video.gif"
              alt="Sale Video"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
          <SwiperSlide className="motion-item">
            <Image
              src="/images/gif/healthcare.gif"
              alt="Healthcare Video"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
          <SwiperSlide className="motion-item">
            <Image
              src="/images/gif/offices.gif"
              alt="Offices Video"
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}