"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from 'next/link';
import Image from 'next/image';



export default function ContactUs() {
    const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    location: "",
    message: "",
    agree: false,
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Basic email validation (client-side)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Invalid email format");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        // Redirect to homepage (similar to PHP header redirect)
        setTimeout(() => {
          window.location.href = "https://comcat.ai/";
        }, 1500);
      } else {
        setStatus(result.message || "Message could not be sent.");
      }
    } catch (error) {
      setStatus("Message could not be sent. Please try again later.");
    }
  };
  return (
    <>
        <Header />
         <section className="contact-wrapper">
        <div className="container">
          <div className="row">
            <div className="heading-area white-heading">
              <h2>Contact Us</h2>
              <p>Reach out and we’ll get contact us within 24 hours.</p>
            </div>
          </div>
          <div className="row form-row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit} method="POST" className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="agree">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className="form-btn">
                    <button type="submit" className="theme-btn-orange">
                      Submit
                    </button>
                  </div>
                  {status && (
                    <div className="mt-3 text-center">
                      <p className={status.includes("successfully") ? "text-green-500" : "text-red-500"}>
                        {status}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="contact-right">
                <img src="/images/contact-us.webp" alt="" />
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
        <Footer />
    </>
  );
}