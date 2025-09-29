import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="min-h-[200vh] bg-background">
      <Header />
      <div className="pt-20 px-4">
        <div id="hero" className="h-96 bg-card rounded-lg mb-8 flex items-center justify-center">
          <p className="text-muted-foreground">Hero Section (scroll to test sticky header)</p>
        </div>
        <div id="services" className="h-96 bg-card rounded-lg mb-8 flex items-center justify-center">
          <p className="text-muted-foreground">Services Section</p>
        </div>
        <div id="gallery" className="h-96 bg-card rounded-lg mb-8 flex items-center justify-center">
          <p className="text-muted-foreground">Gallery Section</p>
        </div>
        <div id="about" className="h-96 bg-card rounded-lg mb-8 flex items-center justify-center">
          <p className="text-muted-foreground">About Section</p>
        </div>
        <div id="faqs" className="h-96 bg-card rounded-lg mb-8 flex items-center justify-center">
          <p className="text-muted-foreground">FAQs Section</p>
        </div>
        <div id="contact" className="h-96 bg-card rounded-lg mb-8 flex items-center justify-center">
          <p className="text-muted-foreground">Contact Section</p>
        </div>
      </div>
    </div>
  );
}