import FAQ from '../FAQ';

export default function FAQExample() {
  return (
    <div className="min-h-screen bg-background">
      <FAQ />
      <div id="contact" className="h-96 bg-card flex items-center justify-center">
        <p className="text-muted-foreground">Contact Section (for scroll testing)</p>
      </div>
    </div>
  );
}