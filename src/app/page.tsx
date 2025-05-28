import Header from './components/Header';
import Hero from './components/Hero';
import MotionGraphic from './components/MotionGraphic';
import Logo from './components/Logo';
import Features from './components/Features';
import About from './components/About';
import Industries from './components/Industries';
import HowWorks from './components/HowWorks';
import Benefits from './components/Benefits';
import PricingPlan from './components/PricingPlan';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MotionGraphic />
      <Logo />
      <About />
      <Features />
      <Industries />
      <HowWorks />
      <Benefits />
      <PricingPlan/>
      <Reviews/>
      <Footer />
    </>
  );
}