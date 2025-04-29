import About from '@/components/home/About';
import { Helmet } from 'react-helmet';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Better Plating</title>
        <meta name="description" content="Learn about Better Plating, a leading zinc electroplating company in Kempton Park offering premium galvanizing services since establishment." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
            About Better Plating
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Better Plating is a premier zinc electroplating company based in Kempton Park, delivering high-quality galvanizing services for industrial applications.
            With years of industry experience, we're committed to excellence in protecting metal components against corrosion.
          </p>
        </div>
        
        <About />
      </div>
    </>
  );
}