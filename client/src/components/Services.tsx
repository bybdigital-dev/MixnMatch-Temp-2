import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, Palette, Shirt, Bed, Volleyball } from 'lucide-react';
import curtainsImage from '@assets/stock_images/elegant_modern_curta_437781d0.jpg';
import upholsteryImage from '@assets/generated_images/Upholstery_service_image_126fd690.png';
import fabricImage from '@assets/generated_images/Fabric_samples_display_5a09e29f.png';
import beddingImage from '@assets/generated_images/Bedding_and_linen_service_516d13ae.png';
import yarnImage from '@assets/generated_images/Yarn_and_wool_collection_81cd9e0d.png';

const services = [
  {
    icon: Scissors,
    title: 'Curtains & Blinds',
    description: 'S-fold, eyelet, roller, Roman, Venetian, and blackout options. Custom-fitted for perfect style and function.',
    features: ['S-fold & Eyelet Curtains', 'Roman & Roller Blinds', 'Venetian Blinds', 'Blackout Solutions'],
    image: curtainsImage
  },
  {
    icon: Shirt,
    title: 'Upholstery',
    description: 'Professional re-covers, repairs, and fabric selection. Breathe new life into your cherished furniture.',
    features: ['Furniture Re-covering', 'Repair Services', 'Fabric Selection', 'Custom Cushions'],
    image: upholsteryImage
  },
  {
    icon: Palette,
    title: 'Fabrics',
    description: 'Premium linen, cotton, outdoor fabrics, and blackout linings. Quality materials for every project.',
    features: ['Linen & Cotton', 'Outdoor Fabrics', 'Blackout Linings', 'Designer Collections'],
    image: fabricImage
  },
  {
    icon: Bed,
    title: 'Bedding & Linen',
    description: 'Luxurious duvets, fitted sheets, and pillowcases. Complete size guide and custom options available.',
    features: ['Duvet Covers', 'Fitted Sheets', 'Pillowcases', 'Custom Sizes'],
    image: beddingImage
  },
  {
    icon: Volleyball,
    title: 'Yarns & Wool',
    description: 'Complete range for knitting and crochet. Various fiber types, weights, with hook and needle guides.',
    features: ['Knitting Yarns', 'Crochet Threads', 'Various Weights', 'Expert Guidance'],
    image: yarnImage
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-services-subtitle"
          >
            From custom curtains to premium fabrics, we provide comprehensive textile solutions for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="hover-elevate transition-all duration-300 overflow-hidden"
                data-testid={`card-service-${index}`}
              >
                {service.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} service showcase`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="secondary" 
                        className="text-xs"
                        data-testid={`badge-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-lg p-8">
          <h3 
            className="font-serif text-2xl font-semibold text-center mb-8"
            data-testid="text-why-choose-title"
          >
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Made-to-Measure</h4>
              <p className="text-muted-foreground">
                Every piece is custom-fitted to your exact specifications
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Professional Installation</h4>
              <p className="text-muted-foreground">
                Expert installation ensuring perfect fit and finish
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground">
                  18
                </Badge>
              </div>
              <h4 className="font-semibold text-lg mb-2">Community-Trusted for 18 Years</h4>
              <p className="text-muted-foreground">
                Established reputation for quality and reliability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}