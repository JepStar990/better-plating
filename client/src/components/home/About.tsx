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
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const content = aboutRef.current?.querySelector('.about-content');
          const image = aboutRef.current?.querySelector('.about-image');
          
          if (content) content.classList.remove('opacity-0');
          if (image) {
            setTimeout(() => {
              image.classList.remove('opacity-0');
            }, 200);
          }
        }
      });
    }, { threshold: 0.1 });
    
    const industriesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = industriesRef.current?.querySelectorAll('.industry-card');
          elements?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0');
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }
    
    if (industriesRef.current) {
      industriesObserver.observe(industriesRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
      if (industriesRef.current) {
        industriesObserver.unobserve(industriesRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-16 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-content animate-fadeInUp opacity-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">About Better Plating</h2>
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
          
          <div className="about-image zinc-gradient p-1 rounded-lg shadow-xl animate-fadeInUp opacity-0 delay-200">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Better Plating Facility" 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Industry Applications */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-primary dark:text-white mb-8 text-center">Industries We Serve</h3>
          
          <div ref={industriesRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={industry.id}
                className="industry-card bg-light dark:bg-dark-lighter p-6 rounded-lg shadow-md text-center animate-fadeInUp opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
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
