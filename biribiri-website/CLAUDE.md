# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm start              # Development server on localhost:4200
npm run build          # Production build
npm run watch          # Development build with watch mode
npm test               # Unit tests with Karma/Jasmine
npm run deploy         # Deploy to GitHub Pages
```

## Project Architecture

### Angular 19 Standalone Application
This is a modern Angular 19 application using standalone components (no NgModules). The project follows a feature-based architecture with strict TypeScript configuration.

### Core Architecture Patterns

**Component Organization:**
- `src/app/core/` - Business logic, services, and models
- `src/app/features/` - Page-level components (home, services, supplements, about, contact)
- `src/app/layout/` - Layout components (header, footer, navigation)
- `src/app/shared/` - Reusable UI components and utilities

**Key Services:**
- `DataService` - Centralized data management with in-memory storage for services and supplements
- Uses Observable pattern returning RxJS Observables
- Strongly typed with Service and Supplement interfaces

**Routing Strategy:**
All routes are lazy-loaded for optimal performance. Main routes:
- `/` → HomeComponent
- `/servicios` → ServicesComponent  
- `/suplementos` → SupplementsComponent
- `/sobre-mi` → AboutComponent
- `/contacto` → ContactComponent

### Data Models

**Core Interfaces:**
```typescript
Service: id, name, description, price, duration, category, image
Supplement: id, name, description, price, category, image, inStock, rating, reviews
```

**Product Categories:**
- Services: sports, rehabilitation, wellness
- Supplements: oils, capsules, liquids, creams, soaps (61 total products)

### Styling Architecture

**Tailwind CSS 3 Configuration:**
Custom design system with brand colors and responsive breakpoints. Key color tokens:
- Primary background: #1a1a1a
- Secondary background: #2a2a2a  
- Brand accent: #e31e24
- Text highlight: #ffd700

**Component Styling:**
- Inline templates for smaller components
- Custom animations: fadeUp, hoverLift
- Mobile-first responsive design
- Premium dark theme with athletic branding

### Component Patterns

**Shared Components:**
- `ButtonComponent` - Variants (primary/secondary) and sizes (sm/md/lg)
- `ProductCardComponent` - Complex product cards with ratings, quantity selectors, animations

**Development Patterns:**
- All components use `standalone: true`
- Strong TypeScript typing throughout
- Input/Output for component communication
- Index barrel exports from shared/components

### Product Management

The DataService contains extensive product catalog:
- 3 physiotherapy services with pricing and duration
- 61 supplements across 5 categories with detailed descriptions
- Rating system and stock management
- Category-based filtering capabilities

### Performance Optimizations

- Lazy-loaded routes
- Bundle budgets: 500kB warning, 1MB error
- OnPush change detection where applicable
- Optimized image loading with proper sizing

## Development Guidelines

**Component Creation:**
Use standalone components with proper TypeScript interfaces. Follow the existing patterns in shared/components for reusable UI elements.

**Data Management:**
Extend DataService for new data requirements. Maintain the Observable pattern and strong typing.

**Styling:**
Use Tailwind classes following the established design system. Custom components should maintain the premium dark theme aesthetic.

**Feature Development:**
New features should follow the feature-based architecture under `src/app/features/` with proper lazy loading setup.