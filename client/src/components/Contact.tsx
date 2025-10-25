import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  suburb: z.string().min(2, 'Please enter your suburb'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  photo: z.any().optional()
});

type ContactForm = z.infer<typeof contactSchema>;

const serviceOptions = [
  'Curtains & Blinds',
  'Upholstery',
  'Fabrics',
  'Bedding & Linen',
  'Yarns & Wool'
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: selectedServices
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest('POST', '/api/contact', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        suburb: data.suburb,
        services: selectedServices,
        message: data.message,
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      setSelectedServices([]);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    },
    onError: (error) => {
      console.error('Error submitting form:', error);
      // TODO: Show error message to user
    }
  });

  const onSubmit = async (data: ContactForm) => {
    submitMutation.mutate(data);
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices(prev => [...prev, service]);
    } else {
      setSelectedServices(prev => prev.filter(s => s !== service));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(02) 9876 5432',
      href: 'tel:+61298765432'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@beautifultextiles.com.au',
      href: 'mailto:hello@beautifultextiles.com.au'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Main Street, Ryde NSW 2112',
      href: 'https://maps.google.com/?q=123+Main+Street+Ryde+NSW+2112'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Quick Message',
      href: 'https://wa.me/61298765432?text=Hi%20Beautiful%20Textiles%2C%20I%27d%20like%20to%20enquire%20about%20your%20services'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30" data-testid="section-contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            Get Your Free Quote
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-contact-subtitle"
          >
            Ready to transform your home? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Book Your Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div 
                    className="text-center py-8 bg-primary/10 rounded-lg"
                    data-testid="success-message"
                  >
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      Thank you for your enquiry!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll be in touch within 24 hours to schedule your free consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...register('name')}
                          className="mt-1"
                          data-testid="input-name"
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1" data-testid="error-name">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="mt-1"
                          data-testid="input-phone"
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm mt-1" data-testid="error-phone">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          className="mt-1"
                          data-testid="input-email"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1" data-testid="error-email">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="suburb">Suburb *</Label>
                        <Input
                          id="suburb"
                          {...register('suburb')}
                          className="mt-1"
                          data-testid="input-suburb"
                        />
                        {errors.suburb && (
                          <p className="text-destructive text-sm mt-1" data-testid="error-suburb">
                            {errors.suburb.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label>Services Needed *</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        {serviceOptions.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={(checked) => 
                                handleServiceChange(service, checked as boolean)
                              }
                              data-testid={`checkbox-${service.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                            <Label htmlFor={service} className="text-sm">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {selectedServices.length === 0 && errors.services && (
                        <p className="text-destructive text-sm mt-1" data-testid="error-services">
                          Please select at least one service
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        placeholder="Tell us about your project, preferred timing, or any specific requirements..."
                        className="mt-1"
                        data-testid="textarea-message"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1" data-testid="error-message">
                          {errors.message.message}
                        </p>
                      )}
                    </div>



                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || submitMutation.isPending}
                      className="w-full"
                      data-testid="button-submit"
                    >
                      {isSubmitting || submitMutation.isPending ? 'Sending...' : 'Send Enquiry'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover-elevate transition-all duration-300 group"
                      data-testid={`link-contact-${index}`}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Embedded Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">123 Main Street, Ryde NSW 2112</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}