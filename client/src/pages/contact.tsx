import Contact from '@/components/home/Contact';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Better Plating</title>
        <meta name="description" content="Contact Better Plating for zinc electroplating services. Reach us at 0782269951 or visit our facility at No 13, Ossewa Street, Chloorkop, Kempton Park." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Need zinc electroplating services? Get in touch with Better Plating today. 
            Our team is ready to assist with your galvanizing needs and provide detailed quotes for your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 mb-16 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-2">Contact Info</h3>
              <p className="text-gray-700 dark:text-gray-300">Manuel: 0782269951</p>
              <p className="text-gray-700 dark:text-gray-300">Email: info@betterplating.co.za</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-2">Our Location</h3>
              <p className="text-gray-700 dark:text-gray-300">No 13 Ossewa Street</p>
              <p className="text-gray-700 dark:text-gray-300">Chloorkop, Kempton Park</p>
              <p className="text-gray-700 dark:text-gray-300">South Africa</p>
            </div>
          </div>
        </div>
        
        <Contact />
      </div>
    </>
  );
}