import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FeatureItem } from '@/lib/types';
import { isElementInViewport } from '@/lib/utils';

const features: FeatureItem[] = [
  {
    id: '1',
    title: 'Superior Protection',
    description: 'Our zinc electroplating provides exceptional corrosion resistance, extending the lifespan of your metal components.',
    icon: 'fas fa-shield-alt'
  },
  {
    id: '2',
    title: 'Quality Certified',
    description: 'All processes meet rigorous industry standards ensuring consistent, high-quality plating results.',
    icon: 'fas fa-certificate'
  },
  {
    id: '3',
    title: 'Quick Turnaround',
    description: 'Efficient processes and dedicated production lines ensure timely delivery without compromising quality.',
    icon: 'fas fa-truck-loading'
  }
];

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = featuresRef.current?.querySelectorAll('.feature-card');
          elements?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0');
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-16 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Card 
              key={feature.id}
              className="feature-card bg-light dark:bg-dark-lighter rounded-lg p-8 shadow-md animate-fadeInUp opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary mb-4">
                    <i className={`${feature.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
