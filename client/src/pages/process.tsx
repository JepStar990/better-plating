import Process from '@/components/home/Process';
import { Helmet } from 'react-helmet';

export default function ProcessPage() {
  return (
    <>
      <Helmet>
        <title>Our Process - Better Plating</title>
        <meta name="description" content="Learn about our zinc electroplating process at Better Plating. From preparation to quality control, we ensure premium results at every step." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
            Our Process
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Better Plating follows a rigorous electroplating process that ensures premium quality and durability for all steel components.
            Our carefully monitored approach guarantees exceptional zinc coating adhesion and uniform protection.
          </p>
        </div>
        
        <Process />
      </div>
    </>
  );
}