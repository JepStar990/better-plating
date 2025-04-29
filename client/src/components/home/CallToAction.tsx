import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to Protect Your Metal Components?</h2>
          <p className="text-light text-lg mb-8">
            Contact us today for a free consultation and quote on your zinc electroplating project.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-dark text-dark font-bold py-3 px-8 rounded-md transition-colors text-lg shadow-lg"
            onClick={() => scrollToElement('contact')}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
