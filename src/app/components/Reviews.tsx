"use client"; // Mark as client component due to Swiper

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
  return (
    <section className="reviews-wrapper">
      <div className="container">
        <div className="row">
          <div className="heading-area">
            <h2>
              Listen From Our <span style={{ color: '#FF5300' }}>Customers</span>
            </h2>
            <p>
              Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
            </p>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
              600: { slidesPerView: 3 },
              1000: { slidesPerView: 3},
            }}
          className="reviews-carousel"
        >
          <SwiperSlide className="reviews-items">
            <div className="reviews-header">
              <div className="client-logo">
                <Image src="/images/reviews/lehigh-hvac.webp" alt="Lehigh HVAC Logo" width={60} height={60} />
              </div>
              <div className="client-rating">
                <p>
                  5.0
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6244 18.3268L8.31891 20.5484C8.12829 20.6527 7.93375 20.69 7.73528 20.6602C7.53681 20.6304 7.36658 20.5524 7.22458 20.4261C7.08258 20.2998 6.97575 20.1468 6.90409 19.967C6.83243 19.7872 6.82869 19.5906 6.89288 19.377L8.30136 14.7346L4.84321 11.3247C4.68677 11.1641 4.59425 10.9866 4.56563 10.7923C4.53702 10.598 4.56165 10.4119 4.63953 10.2339C4.7174 10.056 4.82706 9.91292 4.96848 9.80465C5.10991 9.69639 5.29778 9.63362 5.5321 9.61633L10.3995 9.51133L12.5633 5.19433C12.6596 5.00025 12.7985 4.85908 12.98 4.77083C13.1616 4.68259 13.3435 4.64447 13.5257 4.65649C13.708 4.66851 13.8833 4.73018 14.0517 4.84149C14.2201 4.95281 14.3393 5.111 14.4092 5.31605L15.9874 9.87976L20.7989 10.6229C21.0296 10.6715 21.2076 10.7584 21.333 10.8836C21.4583 11.0088 21.5482 11.1651 21.6027 11.3524C21.6572 11.5397 21.6574 11.7278 21.6036 11.9167C21.5497 12.1055 21.4344 12.269 21.2576 12.407L17.3816 15.3333L18.1684 20.1204C18.204 20.3399 18.1745 20.5344 18.0798 20.7039C17.9851 20.8733 17.8591 21.011 17.7018 21.1169C17.5445 21.2228 17.3655 21.2778 17.1648 21.2819C16.9641 21.2861 16.7761 21.2236 16.6009 21.0944L12.6244 18.3268Z"
                      fill="#FF6723"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="reviews-body">
              <p>
                We chose Comcat AI for its user-friendly interface, robust security features, and seamless deployment process. Since implementing the solution,
                we&apos;ve successfully rolled out over 150 devices, significantly improving the efficiency of delivering both corporate and local content.
              </p>
            </div>
            <div className="reviews-footer">
              <h4>Albert Flores</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews-items">
            <div className="reviews-header">
              <div className="client-logo">
                <Image src="/images/reviews/maps.webp" alt="Maps Logo" width={60} height={60} />
              </div>
              <div className="client-rating">
                <p>
                  5.0
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6244 18.3268L8.31891 20.5484C8.12829 20.6527 7.93375 20.69 7.73528 20.6602C7.53681 20.6304 7.36658 20.5524 7.22458 20.4261C7.08258 20.2998 6.97575 20.1468 6.90409 19.967C6.83243 19.7872 6.82869 19.5906 6.89288 19.377L8.30136 14.7346L4.84321 11.3247C4.68677 11.1641 4.59425 10.9866 4.56563 10.7923C4.53702 10.598 4.56165 10.4119 4.63953 10.2339C4.7174 10.056 4.82706 9.91292 4.96848 9.80465C5.10991 9.69639 5.29778 9.63362 5.5321 9.61633L10.3995 9.51133L12.5633 5.19433C12.6596 5.00025 12.7985 4.85908 12.98 4.77083C13.1616 4.68259 13.3435 4.64447 13.5257 4.65649C13.708 4.66851 13.8833 4.73018 14.0517 4.84149C14.2201 4.95281 14.3393 5.111 14.4092 5.31605L15.9874 9.87976L20.7989 10.6229C21.0296 10.6715 21.2076 10.7584 21.333 10.8836C21.4583 11.0088 21.5482 11.1651 21.6027 11.3524C21.6572 11.5397 21.6574 11.7278 21.6036 11.9167C21.5497 12.1055 21.4344 12.269 21.2576 12.407L17.3816 15.3333L18.1684 20.1204C18.204 20.3399 18.1745 20.5344 18.0798 20.7039C17.9851 20.8733 17.8591 21.011 17.7018 21.1169C17.5445 21.2228 17.3655 21.2778 17.1648 21.2819C16.9641 21.2861 16.7761 21.2236 16.6009 21.0944L12.6244 18.3268Z"
                      fill="#FF6723"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="reviews-body">
              <p>
                Comcat AI has been instrumental in helping us monitor our performance. It has enhanced our interactions with operators by providing clear
                insights into how we&apos;re performing against our set targets. This has been a game-changer for our operations.
              </p>
            </div>
            <div className="reviews-footer">
              <h4>Dianne Russell</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews-items">
            <div className="reviews-header">
              <div className="client-logo">
                <Image src="/images/reviews/sabaz.webp" alt="Sabaz Logo" width={60} height={60  } />
              </div>
              <div className="client-rating">
                <p>
                  5.0
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6244 18.3268L8.31891 20.5484C8.12829 20.6527 7.93375 20.69 7.73528 20.6602C7.53681 20.6304 7.36658 20.5524 7.22458 20.4261C7.08258 20.2998 6.97575 20.1468 6.90409 19.967C6.83243 19.7872 6.82869 19.5906 6.89288 19.377L8.30136 14.7346L4.84321 11.3247C4.68677 11.1641 4.59425 10.9866 4.56563 10.7923C4.53702 10.598 4.56165 10.4119 4.63953 10.2339C4.7174 10.056 4.82706 9.91292 4.96848 9.80465C5.10991 9.69639 5.29778 9.63362 5.5321 9.61633L10.3995 9.51133L12.5633 5.19433C12.6596 5.00025 12.7985 4.85908 12.98 4.77083C13.1616 4.68259 13.3435 4.64447 13.5257 4.65649C13.708 4.66851 13.8833 4.73018 14.0517 4.84149C14.2201 4.95281 14.3393 5.111 14.4092 5.31605L15.9874 9.87976L20.7989 10.6229C21.0296 10.6715 21.2076 10.7584 21.333 10.8836C21.4583 11.0088 21.5482 11.1651 21.6027 11.3524C21.6572 11.5397 21.6574 11.7278 21.6036 11.9167C21.5497 12.1055 21.4344 12.269 21.2576 12.407L17.3816 15.3333L18.1684 20.1204C18.204 20.3399 18.1745 20.5344 18.0798 20.7039C17.9851 20.8733 17.8591 21.011 17.7018 21.1169C17.5445 21.2228 17.3655 21.2778 17.1648 21.2819C16.9641 21.2861 16.7761 21.2236 16.6009 21.0944L12.6244 18.3268Z"
                      fill="#FF6723"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="reviews-body">
              <p>
                We're extremely satisfied with Comcat AI! It only requires about 1% of my time-not because it&apos;s less important, but because it runs so smoothly
                without any issues. The best part is how easy it is for end-users. As someone who can&apos;t personally assist everyone, it&apos;s crucial that the
                system is intuitive for non-IT users, and Comcat AI delivers exactly that.
              </p>
            </div>
            <div className="reviews-footer">
              <h4>Kathryn Murphy</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}