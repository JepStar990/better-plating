import Products from '@/components/home/Products';
import { Helmet } from 'react-helmet';

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Our Products - Better Plating</title>
        <meta name="description" content="Browse our extensive range of zinc electroplated products including industrial fasteners, structural components, and custom galvanized parts." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8 text-center">
            Our Products
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Better Plating produces high-quality zinc electroplated products that meet industry standards.
            From fasteners to structural components, our galvanized products ensure long-lasting corrosion protection
            and exceptional finish for demanding industrial applications.
          </p>
        </div>
        
        <Products />
      </div>
    </>
  );
}