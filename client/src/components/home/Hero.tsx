import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-primary dark:bg-dark overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="https://sigmamergers.com/wp-content/uploads/2023/03/AdobeStock_90602066-scaled.webp" 
          //src="https://images.unsplash.com/photo-1624398440729-89ecacdb2a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
          alt="Industrial steel manufacturing" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl animate-fadeInUp">
          <h2 className="text-white text-3xl md:text-5xl font-heading font-bold mb-4 text-shadow">
            Premium Zinc <span className="text-secondary">Electroplating</span> Solutions
          </h2>
          <p className="text-light text-lg md:text-xl mb-8 max-w-2xl text-shadow">
            Better Plating provides industry-leading galvanizing services for superior corrosion resistance and finish quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-dark font-bold py-3 px-6 rounded-md transition-colors shadow-lg"
              onClick={() => scrollToElement('services')}
            >
              Our Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded-md transition-all shadow-lg"
              onClick={() => scrollToElement('contact')}
            >
              Request A Quote
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-light dark:from-dark-lighter to-transparent"></div>
    </section>
  );
}
