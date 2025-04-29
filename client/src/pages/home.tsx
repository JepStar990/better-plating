import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Services from '@/components/home/Services';
import Products from '@/components/home/Products';
import Process from '@/components/home/Process';
import About from '@/components/home/About';
import FAQ from '@/components/home/FAQ';
import CallToAction from '@/components/home/CallToAction';
import Contact from '@/components/home/Contact';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Better Plating - Professional Zinc Electroplating Services</title>
        <meta name="description" content="Better Plating provides high-quality zinc electroplating and galvanizing services. Located in Kempton Park, we offer industrial steel coating solutions." />
        <meta name="keywords" content="zinc electroplating, galvanized steel, Better Plating, industrial coating, Kempton Park, steel galvanizing" />
      </Helmet>
      
      <Hero />
      <Features />
      <Services />
      <Products />
      <Process />
      <About />
      <FAQ />
      <CallToAction />
      <Contact />
    </>
  );
}
