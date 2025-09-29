import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// todo: remove mock functionality - replace with real FAQ content
const faqs = [
  {
    id: 'lead-times',
    question: 'What are your typical lead times?',
    answer: 'Standard curtains and blinds typically take 2-3 weeks from measurement to installation. Custom upholstery work may take 4-6 weeks depending on the scope. During busy periods, times may extend slightly. We always provide accurate timelines during consultation.'
  },
  {
    id: 'measuring-quotes',
    question: 'Do you provide free measuring and quotes?',
    answer: 'Yes! We offer completely free in-home consultations including professional measuring and detailed quotes. This ensures perfect fit and allows you to see fabric samples in your own lighting. No obligation - we want you to be completely satisfied with your choice.'
  },
  {
    id: 'installation',
    question: 'Is installation included in the price?',
    answer: 'Professional installation is included with all curtain and blind orders. Our experienced installers ensure perfect mounting and operation. For upholstery work, delivery and setup is included. We clean up after ourselves and provide care instructions.'
  },
  {
    id: 'fabric-care',
    question: 'How do I care for my new textiles?',
    answer: 'Care instructions vary by fabric type. Most curtains can be professionally cleaned or gentle machine washed. We provide detailed care cards with every order and offer guidance on maintaining your investment for years to come.'
  },
  {
    id: 'returns-cut-fabrics',
    question: 'What is your policy on cut fabrics and custom work?',
    answer: 'Due to the custom nature of our work, cut fabrics and made-to-measure items cannot be returned. However, we guarantee satisfaction with our craftsmanship. If there are any issues with our work, we will make it right at no additional cost.'
  },
  {
    id: 'payments',
    question: 'What payment options do you accept?',
    answer: 'We accept cash, all major credit cards, bank transfer, and offer payment plans for larger projects. A 50% deposit is required to begin work, with the balance due upon completion. We provide detailed invoices and all work is fully insured.'
  },
  {
    id: 'warranty',
    question: 'Do you offer any warranties or guarantees?',
    answer: 'We stand behind our work with a 12-month workmanship guarantee. Fabric warranties vary by manufacturer but typically range from 3-5 years. We also offer ongoing support and minor adjustments as needed.'
  },
  {
    id: 'rush-orders',
    question: 'Can you accommodate rush orders?',
    answer: 'We understand sometimes you need things quickly! Rush orders may be possible for an additional fee, depending on our current workload and the scope of work. Contact us to discuss your timeline and we\'ll do our best to accommodate your needs.'
  }
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-16 bg-background" data-testid="section-faqs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-faqs-title"
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-faqs-subtitle"
          >
            Find answers to common questions about our services, policies, and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faqs">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border rounded-lg px-6 py-2 hover-elevate transition-all duration-300"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger 
                  className="text-left font-medium text-foreground hover:text-primary"
                  data-testid={`accordion-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground pt-2"
                  data-testid={`accordion-content-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have a question that's not answered here?
          </p>
          <button 
            onClick={() => {
              console.log('Scrolling to contact'); // todo: remove mock functionality
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-primary hover:text-primary/80 font-medium hover-elevate px-4 py-2 rounded-md"
            data-testid="button-contact-cta"
          >
            Get in touch with us →
          </button>
        </div>
      </div>
    </section>
  );
}