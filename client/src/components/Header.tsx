import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId}`); // todo: remove mock functionality
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        data-testid="link-skip-content"
      >
        Skip to content
      </a>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-background'
        }`}
        data-testid="header-main"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="font-serif text-xl font-semibold text-foreground hover-elevate"
                data-testid="button-logo"
              >
                Beautiful Textiles
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" data-testid="nav-desktop">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex"
                data-testid="button-quote-desktop"
              >
                Book Free Quote
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border" data-testid="nav-mobile">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                    data-testid={`link-mobile-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full sm:hidden"
                  data-testid="button-quote-mobile"
                >
                  Book Free Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}