import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import Features from '@/components/home/Features';
import Pricing from '@/components/home/Pricing';
import Courses from '@/components/home/Courses';
import About from '@/components/home/About';
import Team from '@/components/home/Team';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Pricing />
      <Courses />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
