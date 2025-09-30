import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Curtains & Blinds',
    'Upholstery Services',
    'Premium Fabrics',
    'Bedding & Linen',
    'Yarns & Wool'
  ];

  const scrollToSection = (href: string) => {
    console.log(`Scrolling to ${href}`); // todo: remove mock functionality
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Beautiful Textiles
            </h3>
            <p className="text-muted-foreground mb-4">
              "Beautiful textiles, expertly fitted."
            </p>
            <p className="text-sm text-muted-foreground">
              18 years of craftsmanship and care in our community. 
              Local, family-run business committed to quality and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <div className="space-y-2">
              {services.map((service) => (
                <div 
                  key={service} 
                  className="text-muted-foreground text-sm"
                  data-testid={`text-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+61298765432"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>(02) 9876 5432</span>
              </a>
              
              <a 
                href="mailto:hello@beautifultextiles.com.au"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@beautifultextiles.com.au</span>
              </a>
              
              <a 
                href="https://maps.google.com/?q=123+Main+Street+Ryde+NSW+2112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                data-testid="link-footer-address"
              >
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Main Street<br />Ryde NSW 2112</span>
              </a>
              
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon-Fri: 9AM-5PM</div>
                  <div>Sat: 9AM-3PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Beautiful Textiles. All rights reserved.
            </p>




            
            <p className="text-sm text-muted-foreground">
              Developed by{" "}
              <a
                href="https://buildyourbrand.web.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                BYB Digital
              </a>
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-primary transition-colors"
                data-testid="button-footer-quote"
              >
                Book Free Quote
              </button>
              <span>•</span>
              <a 
                href="https://wa.me/61298765432"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                data-testid="link-footer-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}