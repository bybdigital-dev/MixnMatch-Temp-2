import Hero from '../Hero';

export default function HeroExample() {
  return (
    <div>
      <Hero />
      <div id="contact" className="h-96 bg-card flex items-center justify-center">
        <p className="text-muted-foreground">Contact Section (for scroll testing)</p>
      </div>
      <div id="services" className="h-96 bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Services Section (for scroll testing)</p>
      </div>
    </div>
  );
}