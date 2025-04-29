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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Xk_aTVdjjTghLL9gvrXkaqjH-9DWr8Z9dA&s',
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
    image: 'https://image.made-in-china.com/202f0j00FmvhQwcWrRqG/Hot-DIP-Galvanizing-or-Zinc-Plating-Galvanized-Iron-and-Steel-Works.webp',
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
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/KZ/TL/HJ/2588968/alkaline-zinc-plating-service-500x500.jpg',
    features: [
      'Passivation treatments available',
      'Customizable appearance options',
      'Industry-specific certifications'
    ]
  }
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          animationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (headingRef.current) animationObserver.observe(headingRef.current);
    
    const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach(card => animationObserver.observe(card));

    return () => {
      if (headingRef.current) animationObserver.unobserve(headingRef.current);
      serviceCards?.forEach(card => animationObserver.unobserve(card));
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-light dark:bg-dark-lighter transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Better Plating offers comprehensive zinc electroplating services tailored to your specific industry requirements.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="service-card animate-on-scroll opacity-0 bg-white dark:bg-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-heading font-bold text-dark dark:text-white mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="text-primary dark:text-secondary font-medium hover:underline p-0 w-full justify-start"
                  onClick={() => scrollToElement('contact')}
                >
                  Request Quote <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
