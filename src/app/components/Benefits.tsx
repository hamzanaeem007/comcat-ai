"use client"; // Ensure this is at the top

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const speed = 1;
    const currentMarquees = marqueeRefs.current;

    const animationIds: number[] = [];

    currentMarquees.forEach((marquee, index) => {
      if (!marquee) return;

      let scrollAmount = 0;
      let isHovered = false;
      const isReversed = index === 1;

      const content = marquee.innerHTML;
      marquee.innerHTML += content;

      if (isReversed) {
        scrollAmount = -marquee.scrollWidth / 2;
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }

      const handleMouseOver = () => {
        isHovered = true;
      };

      const handleMouseOut = () => {
        isHovered = false;
      };

      const scroll = () => {
        if (!isHovered) {
          scrollAmount += isReversed ? speed : -speed;
          const maxScroll = marquee.scrollWidth / 2;

          if (!isReversed && Math.abs(scrollAmount) >= maxScroll) {
            scrollAmount = 0;
          } else if (isReversed && scrollAmount >= 0) {
            scrollAmount = -maxScroll;
          }

          marquee.style.transform = `translateX(${scrollAmount}px)`;
        }
        animationIds[index] = requestAnimationFrame(scroll);
      };

      marquee.addEventListener('mouseover', handleMouseOver);
      marquee.addEventListener('mouseout', handleMouseOut);

      scroll();

      return () => {
        marquee.removeEventListener('mouseover', handleMouseOver);
        marquee.removeEventListener('mouseout', handleMouseOut);
        if (animationIds[index]) {
          cancelAnimationFrame(animationIds[index]);
        }
      };
    });

    return () => {
      currentMarquees.forEach((marquee, index) => {
        if (marquee && animationIds[index]) {
          cancelAnimationFrame(animationIds[index]);
        }
      });
    };
  }, []);

  return (
    <section className="benefits-wrapper">
      <div className="container">
        <div className="row">
          <div className="heading-area">
            <h2>Benefits of COMCAT Digital</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="benefits-list-wrap">
              <div className="benefits-item item-hover">
                <div className="benefits-icons">
                  <Image src="/images/benefits/ic_round-ads-click.webp" alt="Ads Click Icon" width={38} height={38} />
                </div>
                <div className="benefits-content">
                  <h3>One-Click Command Over Every Screen</h3>
                </div>
              </div>
              <div className="benefits-item item-hover">
                <div className="benefits-icons">
                  <Image src="/images/benefits/material-symbols_globe.webp" alt="Globe Icon" width={38} height={38} />
                </div>
                <div className="benefits-content">
                  <h3>Universal Consistency, Zero Guesswork</h3>
                </div>
              </div>
              <div className="benefits-item d-hover">
                <div className="benefits-icons">
                  <Image src="/images/benefits/token_future.webp" alt="Future Icon" width={38} height={38} />
                </div>
                <div className="benefits-content">
                  <h3>Future-Proof Flexibility</h3>
                  <p>
                    Update, schedule, or pause content across thousands of screens instantly—no need to juggle multiple tools or locations.
                  </p>
                </div>
              </div>
            </div>
            <div className="benefits-btn">
              <Link href="https://signup.comcat.ai/?plan=free-plan" className="theme-btn-orange">
                Start your free trial now
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="benefits-img">
              <Image src="/images/benefits/digital-on-wall.webp" alt="Digital on Wall" width={640} height={450} className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-wrapper">
        <div className="container-fluid g-0">
          <div className="marquee">
            <div
              className="marquee-inner"
              ref={(el) => {
                if (el) marqueeRefs.current[0] = el;
              }}
            >
              <Image src="/images/benefits/healthcare.webp" alt="Healthcare" width={300} height={180} />
              <Image src="/images/benefits/manufac.webp" alt="Manufacturing" width={300} height={180} />
              <Image src="/images/benefits/menu-b.webp" alt="Menu B" width={300} height={180} />
              <Image src="/images/benefits/menu-hotel.webp" alt="Menu Hotel" width={300} height={180} />
              <Image src="/images/benefits/menu-restu.webp" alt="Menu Restaurant" width={300} height={180} />
            </div>
          </div>
          <div className="marquee">
            <div
              className="marquee-inner"
              ref={(el) => {
                if (el) marqueeRefs.current[1] = el;
              }}
            >
              <Image src="/images/benefits/office.webp" alt="Office" width={300} height={180} />
              <Image src="/images/benefits/re.webp" alt="Real Estate" width={300} height={180} />
              <Image src="/images/benefits/retail-sales-digital-signage.webp" alt="Retail Sales Digital Signage" width={300} height={180} />
              <Image src="/images/benefits/sale-retail.webp" alt="Sale Retail" width={300} height={180} />
              <Image src="/images/benefits/travel.webp" alt="Travel" width={300} height={180} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}