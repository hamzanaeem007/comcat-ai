// app/components/About.tsx
import Image from 'next/image';

export default function About() {
  return (
    <section className="about-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-img">
              <Image src="/images/about-us screen.png" alt="About Us Screen" width={500} height={500} />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <span className="icon">
                <Image src="/images/logo-icon.webp" alt="" width={20} height={20} />
                ABOUT US
              </span>
              <h2>What is Comcat Digital?</h2>
              <div className="about-paragraph-wrapper">
                <p>
                  ComCat Digital is an AI digital signage software solution, designed for businesses that require centralized control over multiple display screens. Whether you&apos;re operating a single location or a nationwide network, our platform ensures real-time content updates with accuracy and efficiency.
                </p>
                <p>
                  With advanced features like remote content management, scheduling, and easy scalability, ComCat Digital enhances audience engagement while simplifying operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
