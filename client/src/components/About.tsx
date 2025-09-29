import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Award, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, label: '18 Years', description: 'In Business' },
    { icon: Users, label: '1000+', description: 'Happy Customers' },
    { icon: Award, label: '100%', description: 'Quality Guarantee' },
    { icon: MapPin, label: 'Local', description: 'Community Focused' }
  ];

  const serviceAreas = [
    'Meadowbank', 'Ryde', 'Epping', 'Carlingford', 'West Ryde', 
    'Eastwood', 'Denistone', 'Putney', 'Gladesville', 'Hunters Hill'
  ];

  return (
    <section id="about" className="py-16 bg-muted/30" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-about-title"
          >
            About Beautiful Textiles
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-about-subtitle"
          >
            Local, family-run business committed to quality, service, and community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For 18 years, Beautiful Textiles has been serving families across our local community 
                with exceptional curtains, blinds, upholstery, and textile services. What started as 
                a passion for beautiful fabrics has grown into a trusted business built on craftsmanship 
                and care.
              </p>
              <p>
                We believe every home deserves beautiful, functional textiles that reflect the unique 
                style of its owners. That's why we offer made-to-measure solutions, expert installation, 
                and ongoing support for all our services.
              </p>
              <p>
                Our commitment to quality extends beyond our products to our relationships with customers. 
                We take pride in being a local business that truly understands and serves our community's needs.
              </p>
            </div>

            {/* Service Areas */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4 text-foreground">
                Service Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <Badge 
                    key={area} 
                    variant="secondary"
                    data-testid={`badge-area-${area.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="hover-elevate transition-all duration-300"
                  data-testid={`card-stat-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-serif text-2xl font-bold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">Quality First</h4>
              <p className="text-muted-foreground">
                We use only premium materials and employ skilled craftspeople to ensure lasting quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">Personal Service</h4>
              <p className="text-muted-foreground">
                Every customer receives individual attention and customized solutions for their needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">Community Focus</h4>
              <p className="text-muted-foreground">
                As a local business, we're invested in our community's satisfaction and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}