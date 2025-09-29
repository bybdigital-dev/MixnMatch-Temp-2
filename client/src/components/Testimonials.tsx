import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

// todo: remove mock functionality - replace with real testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Meadowbank',
    rating: 5,
    text: 'Absolutely beautiful curtains! The team listened to exactly what I wanted and delivered beyond expectations. Professional from start to finish.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Ryde',
    rating: 5,
    text: 'Outstanding service and quality. Our upholstery work looks brand new. Highly recommend for anyone needing textile services.'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Epping',
    rating: 5,
    text: 'The blinds are perfect and the installation was seamless. Great value and the staff were so knowledgeable about fabrics.'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Carlingford',
    rating: 5,
    text: 'Been using their services for years. Always reliable, always high quality. My go-to for all textile needs.'
  },
  {
    id: 5,
    name: 'Lisa Rodriguez',
    location: 'West Ryde',
    rating: 5,
    text: 'Beautiful custom bedding and excellent customer service. The attention to detail is remarkable.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background" data-testid="section-testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-testimonials-title"
          >
            What Our Customers Say
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            Trusted by families across our community for quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-accent text-accent" 
                      data-testid={`star-${index}-${i}`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional testimonials for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index + 3}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-accent text-accent" 
                      data-testid={`star-${index + 3}-${i}`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}