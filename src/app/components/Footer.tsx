"use client"; // Mark as client component due to form handling

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log('Email submitted:', email);
    setEmail(''); // Reset form after submission
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-9 d-flex align-items-center">
              <div className="top-footer-content">
                <h3>Utilize OptiSigns to unlock your business potential</h3>
                <p>
                  <Image src="/images/footer/stars.webp" alt="Stars Rating" width={100} height={25} />
                  Based on 6300+ reviews
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-form">
                <h3>Stay in the loop</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="subcribe-email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Logo */}
          <div className="col-md-3">
            <div className="footer-col-1 footer-area">
              <div className="footer-logo">
                <Image src="/images/footer/logo.webp" alt="Footer Logo" width={150} height={50} />
                <ul className="footer-app-logos">
                  <li>Available on</li>
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.comcatdigitaltv" target="_blank">
                      <Image src="/images/footer/google play.webp" alt="Google Play" width={120} height={60} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src="/images/footer/app store.webp" alt="App Store" width={120} height={60} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <div className="footer-col-2 footer-area">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link href="/#aboutID">About Us</Link>
                </li>
                <li>
                  <Link href="/#Industries">Industries</Link>
                </li>
                <li>
                  <Link href="/#Works">How its works?</Link>
                </li>
                <li>
                  <Link href="/#Benefits">Benefits</Link>
                </li>
                <li>
                  <Link href="/#Pricing">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Policies */}
          <div className="col-md-3">
            <div className="footer-col-3 footer-area">
              <h5>Policies</h5>
              <ul>
                <li>
                  <Link href="/terms-and-condition">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <div className="footer-col-4 footer-area">
              <h5>Follow us on</h5>
              <div className="social-icons">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fab fa-facebook"></i>Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-youtube"></i>Youtube
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-instagram"></i>Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-linkedin"></i>Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright-text">
        Copyright 2025 © <span style={{ color: '#ED6934' }}>ComCat Digital</span>. All Rights Reserved.
      </p>
    </footer>
  );
}