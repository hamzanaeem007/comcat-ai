"use client"; // Mark as client component due to useEffect, canvas, and event handling

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function PricingPlan() {
  const [displays, setDisplays] = useState(5); // Initialize to match your screenshot
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const screenCountRef = useRef<HTMLSpanElement>(null);
  const discountRef = useRef<HTMLSpanElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);
  const monthPriceRef = useRef<HTMLParagraphElement>(null);
  const rangeValueRef = useRef<HTMLDivElement>(null);
  const paidPlanCardRef = useRef<HTMLDivElement>(null);

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const screenCount = screenCountRef.current;
    const discount = discountRef.current;
    const price = priceRef.current;
    const monthPrice = monthPriceRef.current;
    const rangeValue = rangeValueRef.current;

    if (!canvas || !ctx || !screenCount || !discount || !price || !monthPrice || !rangeValue) return;

    // Update screen count
    screenCount.textContent = displays.toString();

    // Move range value dynamically
    const range = document.getElementById('screenRange') as HTMLInputElement;
    const rangeRect = range.getBoundingClientRect();
    const valuePosition = ((displays - 1) / (1000 - 1)) * rangeRect.width;
    rangeValue.style.left = `${valuePosition}px`;

    // Update "Sites" and "Displays" dynamically
    const paidPlanCard = paidPlanCardRef.current;
    if (paidPlanCard) {
      paidPlanCard.querySelectorAll('p').forEach((p) => {
        if (p.textContent?.includes('Sites')) {
          p.innerHTML = `<i class="fa-solid fa-circle-dot"></i>${displays.toLocaleString()} Sites`;
        }
        if (p.textContent?.includes('Displays')) {
          p.innerHTML = `<i class="fa-solid fa-circle-dot"></i>${displays.toLocaleString()} Displays`;
        }
      });
    }

    // Discount and price calculation
    let calculatedDiscount = 0;
    let basePrice = 10.0;

    if (displays >= 1 && displays <= 5) {
      basePrice = 10;
      calculatedDiscount = 0;
    } else if (displays >= 6 && displays <= 25) {
      basePrice = 10;
      calculatedDiscount = 5;
    } else if (displays >= 26 && displays <= 50) {
      basePrice = 10;
      calculatedDiscount = 6;
    } else if (displays >= 51 && displays <= 100) {
      basePrice = 10;
      calculatedDiscount = 7;
    } else if (displays >= 101 && displays <= 500) {
      basePrice = 10;
      calculatedDiscount = 8;
    } else if (displays >= 501 && displays <= 1000) {
      basePrice = 10;
      calculatedDiscount = 10;
    }

    // Calculate total price with discount
    let totalPrice = displays * basePrice;
    totalPrice -= totalPrice * (calculatedDiscount / 100);

    // Format price with commas and round it
    const formattedPrice = Math.round(totalPrice).toLocaleString();

    discount.textContent = `${calculatedDiscount}%`;
    price.textContent = `$${formattedPrice}`;
    monthPrice.innerHTML = `<span className="dollor" style="font-size: 15px;">$</span>${formattedPrice}<span className="month-text" style="font-size: 15px;margin-top: 15px;font-weight: 500;">/Per Month</span>`;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw arc background (grey semicircle)
    ctx.beginPath();
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 20;
    ctx.arc(225, 150, 140, Math.PI, 2 * Math.PI); // Semicircle from 180° to 360°
    ctx.stroke();

    // Draw arc progress (orange)
    const progress = (displays - 1) / (1000 - 1); // Normalize to 0-1
    const endAngle = Math.PI + (progress * Math.PI); // Scale to semicircle range (180° to 360°)

    ctx.beginPath();
    ctx.strokeStyle = '#ED6934';
    ctx.lineWidth = 20;
    ctx.arc(225, 150, 140, Math.PI, endAngle);
    ctx.stroke();
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setDisplays(newValue);
  };

  const redirectToPlan = (plan: string) => {
    let url = 'https://signup.comcat.ai/';
    if (plan === 'free-plan') {
      url += '?plan=free-plan';
    } else if (plan === 'paid-plan') {
      url += `?plan=paid-plan&screens=${displays}`;
    }
    window.open(url, '_blank');
  };

  useEffect(() => {
    updateCanvas(); // Initial render
  }, [displays]);

  return (
    <>
      <section className="Tab-wrapper">
        <div className="container text-center">
          <div className="row">
            <div className="heading-area">
              <h2>Pricing Plan</h2>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <ul className="nav nav-pills mb-5 justify-content-center">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="free-trial-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#free-trial"
                >
                  Free Trial
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="paid-plan-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#paid-plan"
                >
                  Paid Plan
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="price-plan">
            <div className="tab-pane fade show active" id="free-trial">
              <div className="row">
                <div className="col-lg-6">
                  <div className="progress-bar-wrap">
                    <Image src="/images/free-progress.png" alt="Free Progress" width={450} height={202} />
                    <div className="progress-values">
                      <p>
                        <span>5</span>
                        <br />Display
                      </p>
                      <p>
                        <span>100%</span>
                        <br />Discount
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-start">
                  <div className="subcription-card">
                    <h4>Free Trial</h4>
                    <p className="month-p">
                      <span className="dollor">$</span>0<span className="month-text">/Per Month</span>
                    </p>
                    <Link href="#" onClick={() => redirectToPlan('free-plan')} style={{ backgroundColor: '#DAE1E7', color: '#083A5E' }}>
                      Get Started
                    </Link>
                    <p>
                      <i className="fa-solid fa-circle-dot"></i>
                      5 Sites
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-dot"></i>
                      5 Displays
                    </p>
                    <p>
                      <i className="fa-solid fa-circle-dot"></i>
                      Create upto 2 users (Assignable as admin or creator)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="paid-plan">
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                  <div className="progress-bar-wrap dynamic-progress-bar">
                    <canvas ref={canvasRef} id="progressCanvas" width="450" height="202"></canvas>
                    <input
                      type="range"
                      id="screenRange"
                      min="1"
                      max="1000"
                      value={displays}
                      onChange={handleRangeChange}
                    />
                    <div ref={rangeValueRef} id="rangeValue" className="range-value">
                      <span className="display-count">{displays.toLocaleString()} Displays</span>
                      <Image
                        src="/images/screen.webp"
                        alt="Screen Icon"
                        width={30} // Adjusted to match your CSS
                        height={30} // Adjusted to match your CSS
                        className="range-icon"
                      />
                    </div>
                    <div className="progress-values">
                      <p>
                        <span ref={screenCountRef} id="screenCount">{displays}</span>
                        <br />Display
                      </p>
                      <p>
                        <span ref={discountRef} id="discount">0%</span>
                        <br />Discount
                      </p>
                      <p>
                        <span ref={priceRef} id="price">${displays * 10}</span>
                        <br />Price
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-start">
                  <div ref={paidPlanCardRef} className="subcription-card subcription-card-paid">
                    <h4 className="white-text">Paid Plan</h4>
                    <p ref={monthPriceRef} className="month-p white-text">
                      <span className="dollor" style={{ fontSize: '15px' }}>$</span>{displays * 10}<span className="month-text">/Per Month</span>
                    </p>
                    <Link href="#" onClick={() => redirectToPlan('paid-plan')} style={{ backgroundColor: '#ED6934' }}>
                      Activate Plan
                    </Link>
                    <p className="white-text">
                      <i className="fa-solid fa-circle-dot"></i>{displays} Sites
                    </p>
                    <p className="white-text">
                      <i className="fa-solid fa-circle-dot"></i>{displays} Displays
                    </p>
                    <p className="white-text">
                      <i className="fa-solid fa-circle-dot"></i>Create up to 20 users (Assignable as admin or creator)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-wrapper">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h2>Transform Your Screens into Powerful Engagement Tools</h2>
                <p>
                  Manage all your displays effortlessly with real-time updates, remote scheduling, and easy scalability. Start your free trial today!
                </p>
                <ul className="cta-button">
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.comcatdigitaltv" target="_blank">
                      <img src="/images/footer/google play.webp" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="/images/footer/app store.webp" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link className="contact-cta-btn" href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}