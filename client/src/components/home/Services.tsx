import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceItem } from '@/lib/types';
import { scrollToElement } from '@/lib/utils';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Standard Zinc Plating',
    description: 'Our base-level zinc coating provides excellent corrosion protection for standard industrial applications.',
    image: 'https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: [
      '5-15 micron coating thickness',
      'Suitable for indoor applications',
      'Economical solution'
    ]
  },
  {
    id: '2',
    title: 'Heavy-Duty Galvanizing',
    description: 'Premium thick-layer zinc coating designed for harsh environments and outdoor exposure.',
    image: 'https://images.unsplash.com/photo-1631252722679-896a4e5ea462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: [
      '20-50 micron coating thickness',
      'Marine & outdoor grade protection',
      'Extended corrosion resistance'
    ]
  },
  {
    id: '3',
    title: 'Specialized Plating',
    description: 'Custom zinc plating solutions with additional treatments for specific industry applications.',
    image: 'https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: [
      'Passivation treatments available',
      'Customizable appearance options',
      'Industry-specific certifications'
    ]
  }
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = servicesRef.current?.querySelectorAll('.service-card');
          elements?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0');
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  
  return (
    <section id="services" className="py-16 bg-light dark:bg-dark-lighter transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Better Plating offers comprehensive zinc electroplating services tailored to your specific industry requirements.
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="service-card bg-white dark:bg-dark rounded-lg overflow-hidden shadow-md opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-30 dark:bg-opacity-50"></div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-heading font-bold text-primary dark:text-secondary mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className="fas fa-check text-accent mr-2"></i>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="text-primary dark:text-secondary font-medium hover:underline p-0"
                  onClick={() => scrollToElement('contact')}
                >
                  Request Quote <i className="fas fa-arrow-right ml-1"></i>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
