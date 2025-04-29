import Services from '@/components/home/Services';
import { Helmet } from 'react-helmet';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - Better Plating</title>
        <meta name="description" content="Explore our comprehensive zinc electroplating and galvanizing services at Better Plating. We offer industrial-grade coatings for all your needs." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
            Our Services
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Better Plating offers professional zinc electroplating services with state-of-the-art technology and years of expertise. 
            We guarantee precision, durability, and exceptional corrosion resistance for all types of industrial components.
          </p>
        </div>
        
        <Services />
      </div>
    </>
  );
}