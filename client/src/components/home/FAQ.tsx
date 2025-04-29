import { useState, useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItem } from '@/lib/types';

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is zinc electroplating?',
    answer: 'Zinc electroplating is a process that uses an electric current to deposit a layer of zinc onto metal components. This coating provides excellent corrosion resistance, protecting the base metal from rust and oxidation.'
  },
  {
    id: 'faq-2',
    question: 'How long does zinc plating last?',
    answer: 'The lifespan of zinc plating depends on several factors, including coating thickness, environmental conditions, and usage. In standard indoor environments, zinc plating can last 5-10 years, while in more aggressive environments, specialized treatments can extend protection up to 20+ years.'
  },
  {
    id: 'faq-3',
    question: 'What metals can be zinc plated?',
    answer: 'Zinc electroplating works well on various ferrous metals, including steel, iron, and their alloys. It\'s particularly effective on carbon steel and cast iron components. Some non-ferrous metals can also be plated using special preparation techniques.'
  },
  {
    id: 'faq-4',
    question: 'What is the typical turnaround time?',
    answer: 'Our standard turnaround time for zinc electroplating is 3-5 business days, depending on order volume and complexity. Rush services are available for time-sensitive projects, and large volume orders may require additional processing time.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer custom specifications?',
    answer: 'Yes, we specialize in custom zinc plating solutions tailored to specific industry requirements. We can adjust coating thickness, apply additional treatments, and conform to various industry standards to meet your exact specifications.'
  }
];

export default function FAQ() {
  const faqRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (faqRef.current) {
            faqRef.current.classList.remove('opacity-0');
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
    
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-16 bg-light dark:bg-dark-lighter transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our zinc electroplating services.
          </p>
        </div>
        
        <div 
          ref={faqRef} 
          className="max-w-3xl mx-auto animate-fadeInUp opacity-0"
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white dark:bg-dark rounded-lg shadow-md overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-heading font-bold text-dark dark:text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
