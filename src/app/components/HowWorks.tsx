// app/components/HowWorks.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HowWorks() {
  return (
    <section className="how-works-wrapper">
      <div className="container">
        <div className="row">
          <div className="heading-area white-heading">
            <h2>How Comcat works? 🤔</h2>
            <p>
              Take command of your digital signage with our secure, intuitive platform – designed for effortless control from anywhere.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="how-item">
              <Image src="/images/how-works/Log-in.png" alt="Log In" width={65} height={85} />
              <h3>1. Log In</h3>
              <p>Multi-factor authentication supported.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="how-item">
              <Image src="/images/how-works/organize.png" alt="Organize" width={65} height={85} />
              <h3>2. Organize</h3>
              <p>Group screens by location or purpose.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="how-item">
              <Image src="/images/how-works/control.png" alt="Control" width={65} height={85} />
              <h3>3. Control</h3>
              <p>Schedule, pause, or update remotely.</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="how-process-video">
              <Image src="/images/how-works/video-cutter.com.gif" alt="How It Works Video" width={500} height={370} className="w-100" />
            </div>
            <div className="process-btn">
              <Link href="https://signup.comcat.ai/?plan=free-plan" className="theme-btn-orange">
                Get started for FREE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}