import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import curtainsExample from '@assets/generated_images/Gallery_curtains_example_46ee872a.png';
import blindsExample from '@assets/generated_images/Gallery_blinds_example_8f7f6ee4.png';

// todo: remove mock functionality - replace with real gallery images
const galleryImages = [
  {
    id: 1,
    src: curtainsExample,
    alt: 'Pinch-pleat linen curtains in living room, Sand',
    title: 'Elegant Linen Curtains'
  },
  {
    id: 2,
    src: blindsExample,
    alt: 'Roman blinds in forest green fabric, modern kitchen',
    title: 'Forest Green Roman Blinds'
  },
  // Additional mock images for demonstration
  {
    id: 3,
    src: curtainsExample,
    alt: 'Blackout curtains in master bedroom, charcoal',
    title: 'Blackout Bedroom Curtains'
  },
  {
    id: 4,
    src: blindsExample,
    alt: 'Venetian blinds in home office, cream',
    title: 'Office Venetian Blinds'
  },
  {
    id: 5,
    src: curtainsExample,
    alt: 'S-fold curtains in dining room, soft gold',
    title: 'Dining Room S-fold Curtains'
  },
  {
    id: 6,
    src: blindsExample,
    alt: 'Roller blinds in contemporary living space',
    title: 'Modern Roller Blinds'
  },
  {
    id: 7,
    src: curtainsExample,
    alt: 'Custom upholstery work on vintage armchair',
    title: 'Vintage Chair Restoration'
  },
  {
    id: 8,
    src: blindsExample,
    alt: 'Outdoor fabric cushions and covers',
    title: 'Outdoor Fabric Solutions'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    console.log(`Opening lightbox for image ${imageId}`); // todo: remove mock functionality
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    console.log('Closing lightbox'); // todo: remove mock functionality
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-16 bg-muted/30" data-testid="section-gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            Our Work
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-gallery-subtitle"
          >
            See our craftsmanship in action across homes in our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card cursor-pointer hover-elevate transition-all duration-300"
              onClick={() => openLightbox(image.id)}
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-medium text-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
              data-testid="button-lightbox-close"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="font-medium">{selectedImageData.title}</h3>
              <p className="text-sm text-white/80">{selectedImageData.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}