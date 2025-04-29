import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { scrollToElement } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href.substring(1));
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2"
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-lighter shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-medium transition-colors text-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

