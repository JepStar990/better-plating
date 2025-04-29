import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IndustryItem } from '@/lib/types';

const industries: IndustryItem[] = [
  {
    id: '1',
    title: 'Manufacturing',
    description: 'Providing durable components for manufacturing equipment and products.',
    icon: 'fas fa-industry'
  },
  {
    id: '2',
    title: 'Construction',
    description: 'Delivering corrosion-resistant hardware for construction applications.',
    icon: 'fas fa-building'
  },
  {
    id: '3',
    title: 'Automotive',
    description: 'Supplying durable components for the demanding automotive sector.',
    icon: 'fas fa-car'
  },
  {
    id: '4',
    title: 'Engineering',
    description: 'Creating specialized components for engineering applications.',
    icon: 'fas fa-cog'
  }
];

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          animationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const aboutElements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    const industryElements = industriesRef.current?.querySelectorAll('.animate-on-scroll');
    
    aboutElements?.forEach(el => animationObserver.observe(el));
    industryElements?.forEach(el => animationObserver.observe(el));

    return () => {
      aboutElements?.forEach(el => animationObserver.unobserve(el));
      industryElements?.forEach(el => animationObserver.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-white dark:bg-dark transition-colors duration-300 overflow-visible">
      <div className="container mx-auto px-4">
        <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-content animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark dark:text-white mb-4 drop-shadow-md">
              About Better Plating
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With years of experience in the metal finishing industry, Better Plating has established itself as a leading provider of high-quality zinc electroplating services in South Africa.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our state-of-the-art facility in Kempton Park is equipped with advanced technology and staffed by skilled technicians who are committed to delivering exceptional results for every project.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <i className="fas fa-trophy text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark dark:text-white">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To provide superior galvanizing solutions that extend product lifespans and exceed customer expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <i className="fas fa-eye text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark dark:text-white">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To be the most trusted name in metal finishing, known for quality, reliability, and technical innovation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <i className="fas fa-check-circle text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark dark:text-white">Our Values</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quality, integrity, innovation, and customer satisfaction drive everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image zinc-gradient p-1 rounded-lg shadow-xl animate-on-scroll opacity-0">
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Better Plating Facility"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-dark dark:text-white mb-8 text-center drop-shadow-md">
            Industries We Serve
          </h3>

          <div ref={industriesRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className="industry-card animate-on-scroll opacity-0 bg-light dark:bg-dark-lighter p-6 rounded-lg shadow-md text-center"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary mb-4">
                    <i className={`${industry.icon} text-2xl`}></i>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-dark dark:text-white mb-2">{industry.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
