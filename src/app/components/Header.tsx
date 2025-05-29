// app/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <div className="container d-flex align-items-center">
          {/* Navbar Brand (Left) */}
          <Link href="/" className="navbar-brand">
            <Image src="/images/header-logo.webp" alt="Comcat.ai Logo" width={100} height={50} />
          </Link>

          {/* Toggle Button (For Mobile View) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items (Centered) */}
          <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/#aboutID" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/#Industries" className="nav-link">Industries</Link>
              </li>
              <li className="nav-item">
                <Link href="/#Works" className="nav-link">How it Works?</Link>
              </li>
              <li className="nav-item">
                <Link href="/#Benefits" className="nav-link">Benefits</Link>
              </li>
              <li className="nav-item">
                <Link href="/#Pricing" className="nav-link">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Button (Right) */}
          <div className="d-none d-sm-block header-btn">
            <a href="https://digital.comcat.ai/auth/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
              LOGIN<i className="fa-regular fa-user"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}