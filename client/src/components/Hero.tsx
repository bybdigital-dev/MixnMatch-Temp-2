import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Hero_background_living_room_faad02ee.png';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId}`); // todo: remove mock functionality
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful home interior with elegant curtains and warm lighting showcasing professional textile work"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-testid="text-hero-title"
          >
            Curtains, Blinds & Textiles for Every Home
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            18 years of craftsmanship and care in our community
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-3 text-lg bg-primary/90 hover:bg-primary border border-primary-border backdrop-blur-sm"
              data-testid="button-hero-quote"
            >
              Book a Free Quote
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-8 py-3 text-lg bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm"
              data-testid="button-hero-services"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}