import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProcessStep } from '@/lib/types';

const steps: ProcessStep[] = [
  {
    id: '1',
    title: '1. Pre-Treatment',
    description: 'Components undergo thorough cleaning, degreasing, and surface preparation to ensure optimal zinc adhesion.',
    image: '/assets/galvanized steel6.jpg'
  },
  {
    id: '2',
    title: '2. Electroplating',
    description: 'The components are immersed in a zinc solution while an electric current deposits zinc onto the metal surface.',
    image: '/assets/galvanized steel7.jpg'
  },
  {
    id: '3',
    title: '3. Post-Treatment',
    description: 'Additional treatments like passivation or chromate conversion enhance corrosion resistance and appearance.',
    image: '/assets/galvanized steel8.jpg'
  },
  {
    id: '4',
    title: '4. Quality Control',
    description: 'Rigorous testing ensures coating thickness, adhesion, and appearance meet all specifications.',
    image: '/assets/galvanized steel9.jpg'
  }
];

export default function Process() {
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = processRef.current?.querySelectorAll('.process-step');
          elements?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0');
            }, i * 200);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);
  
  return (
    <section id="process" className="py-16 bg-light dark:bg-dark-lighter transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">Our Process</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Better Plating's zinc electroplating process combines industry best practices with innovative techniques for optimal results.
          </p>
        </div>
        
        <div className="relative" ref={processRef}>
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary dark:bg-primary-dark transform -translate-x-1/2"></div>
          
          {/* Process Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`process-step md:grid md:grid-cols-2 md:gap-8 md:items-center mb-12 opacity-0 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${index % 2 === 0 ? 'md:text-right' : ''} mb-4 md:mb-0`}>
                  <Card className="bg-white dark:bg-dark p-6 rounded-lg shadow-md inline-block">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-heading font-bold text-primary dark:text-secondary mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className={`relative ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 order-last md:order-first'}`}>
                  <div className={`hidden md:block absolute ${
                    index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'
                  } top-1/2 w-8 h-8 bg-primary dark:bg-secondary rounded-full transform -translate-y-1/2`}></div>
                  <img 
                    src={step.image} 
                    alt={`${step.title} Process`} 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
