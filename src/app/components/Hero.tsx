// app/components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-banner justify-content-center align-items-center d-flex">
      <div className="row justify-content-center align-items-center g-0" style={{ zIndex: 2 }}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-0 col-xl-9">
          <h1 className="text-center">
            Control Every <br /> Screen, Anywhere
          </h1>
          <p className="text-center">
            Start with a 30-day trial to test all comcat features for free. Choose one or more plans to create your custom solution at the end of the trial. Free-forever plans available.
          </p>
          <ul>
            <li>
              <Link href="https://play.google.com/store/apps/details?id=com.comcatdigitaltv" className="app-store-btn">
                <Image src="/images/footer/google play.webp" alt="Google Play Store" width={150} height={50} />
              </Link>
            </li>
            <li>
              <Link href="#" className="app-store-btn">
                <Image src="/images/footer/app store.webp" alt="App Store" width={150} height={50} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}