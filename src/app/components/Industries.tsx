"use client"; // Mark as client component due to Swiper

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Industries() {
  return (
    <section className="industrial-wrapper">
      <div className="container">
        <div className="row">
          <div className="heading-area">
            <h2>Industries Empowered by Our Solutions:</h2>
            <p>
              Comcat digital has been working with regional and global organizations for nearly three decades.
              <br /> Our best-in-class software, original displays, and personal service set us apart.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="industrial-content">
              <ul>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Manufacturing
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Logistics & Transportation
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Education
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Food & Beverages
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Retail
                </li>
                <li>
                 <i className="fa-solid fa-circle-dot"></i>
                  Hospitality
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Healthcare
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Offices
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Fitness, Leisure & Culture
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Event Management
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Commercial Real Estate
                </li>
                <li>
                  <i className="fa-solid fa-circle-dot"></i>
                  Technology & B2B
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="industrial-img">
              <Image src="/images/ind-img.png" alt="Industrial Image" width={500} height={420} className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="industrial-slider">
        <div className="container">
          <Swiper
            modules={[Autoplay,]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              600: { slidesPerView: 3 },
              1000: { slidesPerView: 4},
            }}
            className="industrial-carousel"
          >
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/commercial-real-estate.webp" alt="Commercial Real Estate" width={150} height={150} />
              <p>Commercial Real Estate</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/education.webp" alt="Education" width={150} height={150} />
              <p>Education</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/event-management.webp" alt="Event Management" width={150} height={150} />
              <p>Event Management</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/fitness-leisure-culture.webp" alt="Fitness, Leisure & Culture" width={150} height={150} />
              <p>Fitness, Leisure & Culture</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/food-beverages.webp" alt="Food & Beverages" width={150} height={150} />
              <p>Food & Beverages</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/healthcare.webp" alt="Healthcare" width={150} height={150} />
              <p>Healthcare</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/hospitality.webp" alt="Hospitality" width={150} height={150} />
              <p>Hospitality</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/logistics-transportation.webp" alt="Logistics & Transportation" width={150} height={150} />
              <p>Logistics & Transportation</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/manufacturing.webp" alt="Manufacturing" width={150} height={150} />
              <p>Manufacturing</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/offices.webp" alt="Offices" width={150} height={150} />
              <p>Offices</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/retail.webp" alt="Retail" width={150} height={150} />
              <p>Retail</p>
            </SwiperSlide>
            <SwiperSlide className="industrial-item">
              <Image src="/images/industrial/technology-b2b.webp" alt="Technology & B2B" width={150} height={150} />
              <p>Technology & B2B</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}