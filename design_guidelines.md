# Design Guidelines: Home Textiles Business Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from warm, homey interior design websites with a focus on craftsmanship and community trust.

## Core Design Elements

### Color Palette
- **Primary**: Cream (#F7F4EE) - main background color
- **Secondary**: Charcoal (#2D2D2D) - text and header elements  
- **Accent**: Forest Green (#2F5D50) - buttons and highlights
- **Supporting**: Soft Gold (#C1A25A) - decorative elements and secondary buttons

### Typography
- **Headings**: Playfair Display (serif) - elegant, crafted feel
- **Body Text**: Inter (sans-serif) - clean, readable
- Load via Google Fonts CDN

### Layout System
- Clean semantic HTML structure
- Responsive design principles
- Generous whitespace for breathing room
- Consistent spacing using standard increments

## Section Structure

### Header (Sticky)
- Logo/brand positioned left
- Navigation links: Home, Services, Gallery, About, FAQs, Contact
- Prominent "Book Free Quote" button (forest green background)
- Add subtle shadow on scroll

### Hero Section
- **Large hero background image** with accessible alt text
- Headline: "Curtains, Blinds & Textiles for Every Home"
- Subtext: "18 years of craftsmanship and care in [CITY]"
- Two call-to-action buttons: "Book a Free Quote" and "Explore Services"
- **Note**: Use blurred backgrounds for any outline buttons over images

### Services Section
- Card-based layout with icons/images
- Five service categories with short descriptions:
  - Curtains & Blinds
  - Upholstery  
  - Fabrics
  - Bedding, Sheets & Linen
  - Yarns & Wool

### Why Choose Us
- Three highlight points in prominent display
- Focus on craftsmanship and community trust

### Gallery
- Grid layout with 8-12 images
- Implement lightbox functionality (vanilla JS)
- Include descriptive alt text for each image

### Testimonials
- 3-5 customer quotes with names and suburbs
- Clean, readable format

### About
- Brief company story emphasizing local, family-run values
- Service area information

### FAQs
- Accordion-style layout for space efficiency
- Cover common questions about services and policies

### Contact/Quote Form
- Simple form with validation
- Multi-select for services needed
- Optional photo upload capability
- Success message display
- Include map, hours, and WhatsApp quick-link

## Functionality Requirements
- Smooth scrolling navigation
- Client-side form validation with clear error/success messages
- Vanilla JavaScript lightbox for gallery
- Sticky header with scroll effects
- No external frameworks - lightweight implementation

## Accessibility Standards
- WCAG AA contrast compliance
- Semantic HTML landmarks
- Single H1 per page
- Proper form labeling
- Focus outlines for keyboard navigation
- Skip-to-content link
- Comprehensive alt text for all images

## Performance Optimizations
- Lazy-load images below the fold
- Responsive image sizing
- Preload primary fonts
- Minified CSS and JavaScript
- Fast loading prioritization

## Images
- **Hero Image**: Large, high-quality image of beautiful textile work in a home setting
- **Service Cards**: Smaller images or icons representing each service category
- **Gallery**: 8-12 professional photos of completed work with descriptive alt text
- **Background**: Subtle texture or pattern if needed to enhance warmth

The overall aesthetic should convey warmth, professionalism, and community trust while maintaining modern web standards and excellent user experience.