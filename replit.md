# Home Textiles Business Website

## Overview

This is a modern, full-stack web application for a home textiles business specializing in curtains, blinds, upholstery, fabrics, bedding, and yarns. The application features a customer-facing single-page website with service listings, gallery, testimonials, and contact forms, plus an admin dashboard for managing customer inquiries. Built with React, Express.js, and PostgreSQL, it emphasizes warm, homey design aesthetics with professional functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom color palette (cream, charcoal, forest green, soft gold) and shadcn/ui component library for consistent UI elements
- **Typography**: Google Fonts integration with Playfair Display (serif) for headings and Inter (sans-serif) for body text
- **State Management**: TanStack Query for server state management and form handling with React Hook Form
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Modular component architecture with examples folder for isolated development

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Database Integration**: Drizzle ORM with connection to Neon PostgreSQL database
- **API Design**: RESTful endpoints for contact inquiries with proper validation using Zod schemas
- **Development Tools**: Hot module replacement via Vite integration for seamless development experience

### Database Schema
- **Contact Inquiries Table**: Stores customer inquiries with fields for name, email, phone, suburb, services array, message, status tracking, and timestamps
- **Users Table**: Basic user structure for future admin authentication (currently unused)
- **Migration System**: Drizzle Kit for database schema management and migrations

### Key Features
- **Single Page Application**: Complete business website with hero, services, gallery, testimonials, about, FAQ, and contact sections
- **Contact Form**: Multi-service selection with validation and submission to database
- **Admin Dashboard**: Simple password-protected interface for viewing and managing customer inquiries
- **Gallery System**: Image lightbox functionality with accessibility features
- **Responsive Design**: Mobile-first approach with consistent spacing and typography

### Design System
- **Color Scheme**: Warm palette with cream primary, charcoal text, forest green accents, and soft gold highlights
- **Component Library**: Comprehensive shadcn/ui components with custom styling
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and skip links
- **Performance**: Optimized images, code splitting, and efficient asset loading

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Backend**: Express.js, Node.js

### Database & ORM
- **Database**: Neon PostgreSQL (serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: @neondatabase/serverless with WebSocket support

### UI Components & Icons
- **Component Library**: Radix UI primitives (dialog, accordion, dropdown, etc.)
- **Icons**: Lucide React icon library
- **Carousel**: Embla Carousel for image galleries
- **Form Validation**: Zod for schema validation

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production builds
- **Development**: Replit-specific plugins for enhanced development experience
- **Session Management**: Connect PG Simple for future session storage

### Fonts & Assets
- **Typography**: Google Fonts (Playfair Display, Inter)
- **Images**: Static assets in attached_assets directory
- **Styling**: CSS variables for consistent theming across light/dark modes