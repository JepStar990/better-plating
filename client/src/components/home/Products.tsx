import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductItem } from '@/lib/types';
import galv1 from '@/../assets/galvanized steel1.jpg';
import galv2 from '@/../assets/galvanized steel2.jpg';
import galv3 from '@/../assets/galvanized steel3.jpg';
import galv4 from '@/../assets/galvanized steel4.jpg';
import galv5 from '@/../assets/galvanized steel5.jpg';
import galv6 from '@/../assets/galvanized steel6.jpg';
import galv7 from '@/../assets/galvanized steel7.jpg';
import galv8 from '@/../assets/galvanized steel8.jpg';
import galv9 from '@/../assets/galvanized steel9.jpg';

const products: ProductItem[] = [
  {
    id: '1',
    title: 'Industrial Fasteners',
    description: 'Zinc-plated bolts, nuts, and fastening components with superior corrosion resistance.',
    image: galv1,
    category: 'fasteners'
  },
  {
    id: '2',
    title: 'Industrial Flanges',
    description: 'Precision-galvanized flanges for piping systems and industrial applications.',
    image: galv2,
    category: 'fasteners'
  },
  {
    id: '3',
    title: 'Mounting Hardware',
    description: 'Heavy-duty galvanized mounting plates and brackets for structural applications.',
    image: galv3,
    category: 'structural'
  },
  {
    id: '4',
    title: 'Specialized Components',
    description: 'Custom-designed galvanized components for specialized industrial applications.',
    image: galv4,
    category: 'custom'
  },
  {
    id: '5',
    title: 'Structural Frameworks',
    description: 'Galvanized framing elements for commercial and industrial structures.',
    image: galv5,
    category: 'structural'
  },
  {
    id: '6',
    title: 'Industrial Hardware',
    description: 'Zinc-plated industrial hardware engineered for durability in demanding environments.',
    image: galv8,
    category: 'fasteners'
  },
  {
    id: '7',
    title: 'Custom Plating Solutions',
    description: 'Specialized electroplating for unique industrial components and custom parts.',
    image: galv9,
    category: 'custom'
  },
  {
    id: '8',
    title: 'Structural Components',
    description: 'Heavy-duty galvanized structural elements for construction and industrial applications.',
    image: galv7,
    category: 'structural'
  }
];

type FilterCategory = 'all' | 'fasteners' | 'structural' | 'custom';

export default function Products() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const productsRef = useRef<HTMLDivElement>(null);
  
  const filteredProducts = products.filter(product => 
    filter === 'all' || product.category === filter
  );
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = productsRef.current?.querySelectorAll('.product-item');
          elements?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0');
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (productsRef.current) {
      observer.observe(productsRef.current);
    }
    
    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="products" className="py-16 text-black bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-black md:text-4xl font-heading font-bold text-black dark:text-white mb-4">Our Products</h2>
          <p className="text-black-600 dark:text-gray-300 max-w-2xl mx-auto">
            We specialize in galvanizing a wide range of industrial components, from small fasteners to large structural elements.
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'secondary'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-lighter text-dark dark:text-light'}
          >
            All Products
          </Button>
          <Button
            variant={filter === 'fasteners' ? 'default' : 'secondary'}
            onClick={() => setFilter('fasteners')}
            className={filter === 'fasteners' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-lighter text-dark dark:text-light'}
          >
            Fasteners
          </Button>
          <Button
            variant={filter === 'structural' ? 'default' : 'secondary'}
            onClick={() => setFilter('structural')}
            className={filter === 'structural' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-lighter text-dark dark:text-light'}
          >
            Structural Elements
          </Button>
          <Button
            variant={filter === 'custom' ? 'default' : 'secondary'}
            onClick={() => setFilter('custom')}
            className={filter === 'custom' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-lighter text-dark dark:text-light'}
          >
            Custom Components
          </Button>
        </div>
        
        {/* Product Gallery */}
        <div 
          ref={productsRef}
          className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="product-item animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="text-black bg-light dark:bg-dark-lighter rounded-lg overflow-hidden shadow-md h-full">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover gallery-img"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-black font-heading font-bold text-dark dark:text-white">{product.title}</h3>
                  <p className="text-black dark:text-gray-300 text-sm">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
