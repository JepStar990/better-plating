import Logo from '@/components/ui/logo';
import { scrollToElement } from '@/lib/utils';

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href.substring(1));
    }
  };

  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-gray-400 mb-4">
              South Africa's trusted provider of premium zinc electroplating and galvanizing services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('#home')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#products')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#process')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#about')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Standard Zinc Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Heavy-Duty Galvanizing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Specialized Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Quality Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Custom Solutions
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-secondary"></i>
                <span className="text-gray-400">No 13 Ossewa Street, Chloorkop, Kempton Park</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2 text-secondary"></i>
                <a href="tel:+270782269951" className="text-gray-400 hover:text-secondary transition-colors">
                  078 226 9951
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-secondary"></i>
                <a href="mailto:info@betterplating.co.za" className="text-gray-400 hover:text-secondary transition-colors">
                  info@betterplating.co.za
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-2 text-secondary"></i>
                <span className="text-gray-400">Mon-Fri: 8AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Better Plating. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
