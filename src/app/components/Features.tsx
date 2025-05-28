"use client"; // Mark as client component due to useEffect and Intersection Observer

import { useEffect, useRef } from 'react';

export default function Features() {
  const counterSectionRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false); // To ensure the animation runs only once

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".counter-box");
    const counterSection = counterSectionRef.current;

    const startCounter = () => {
      counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-count"));
        let current = 0;
        const increment = target / 50; // Speed control

        const updateCounter = setInterval(() => {
          current += increment;
          counter.innerText = Math.floor(current).toString();
          if (current >= target) {
            clearInterval(updateCounter);
            counter.innerText = target.toString();
          }
        }, 40);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startCounter();
          startedRef.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (counterSection) {
      observer.observe(counterSection);
    }

    // Cleanup observer on component unmount
    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  return (
    <section>
      <div className="counter-section" id="counterSection" ref={counterSectionRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="counter-box outline" data-count="30">0</div>
              <div className="counter-box fill" data-count="30">0</div>
              <p className="counter-text">Total Displays</p>
            </div>
            <div className="col-md-3">
              <div className="counter-box outline" data-count="14">0</div>
              <div className="counter-box fill" data-count="14">0</div>
              <p className="counter-text">Media Upload</p>
            </div>
            <div className="col-md-3">
              <div className="counter-box outline" data-count="50">0</div>
              <div className="counter-box fill" data-count="50">0</div>
              <p className="counter-text">Total Sites</p>
            </div>
            <div className="col-md-3">
              <div className="counter-box outline" data-count="100">0</div>
              <div className="counter-box fill" data-count="100">0</div>
              <p className="counter-text">Total Displays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}