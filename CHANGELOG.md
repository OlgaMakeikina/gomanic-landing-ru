# CHANGELOG

## [2.0.3] - 2025-08-22 - Mobile RESULTADOS v2.0: Single Photo + Swipe UX

### 📱 Mobile UX Enhancement v2.0
- **Single Photo Focus**: One centered photo per view for better content focus
- **Swipe Navigation**: Natural touch gestures replace button controls
- **Dots Indicator**: Visual progress with direct navigation capability
- **Removed Arrow Buttons**: Cleaner interface without visual clutter

### 🏗️ Technical Architecture v2.0
- **Redesigned Components**: 
  - `MobilePortfolioSlider.tsx` - Single photo + swipe (68 lines, reduced from 87)
  - `MobileBeforeAfterSlider.tsx` - Single photo + swipe (68 lines, reduced from 87)
- **Touch Events**: TouchStart/Move/End handling for swipe detection
- **CSS Transitions**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth animations
- **Cleaner Code**: Removed button state management complexity

### 🎨 Design Enhancement
- **Vogue Style Preserved**: Maintained color scheme (#FEFEFE, #444f55)
- **Single Photo Layout**: 320px height, 16px border-radius, elegant shadows
- **Dots Navigation**: Touch-friendly 12px dots with scale(1.2) active state
- **Minimalist Approach**: Focus on content without UI distractions

### ✅ Quality Improvements
- **TypeScript**: ✅ Strict typing, no errors
- **Architecture**: ✅ More modular, reduced complexity
- **Performance**: ✅ Priority loading, CSS-based animations
- **UX**: ✅ Improved mobile experience with natural gestures

---

## [2.0.2] - 2025-08-21 - Hero Title Order and Alignment Update

### 🎨 UI/UX Improvements
- **Hero Title Word Order**: Changed to "Especialistas GOMANIC" for proper size display
- **Font Sizes**: "GOMANIC" now displays in large font, "Especialistas" in smaller font
- **Center Alignment**: All content centered (title, location info, buttons)
- **Adaptive Location Positioning**: Location block centers when title is centered, right-aligns when title is left-aligned

### 🔧 Technical Changes
- Updated hero slide data with new title order
- Enhanced HeroTitle with conditional location positioning
- Improved Slide1 layout with center alignment
- Added responsive logic for location block positioning

---

## [2.0.1] - 2025-08-21 - Hero Section Layout Enhancement

### 🎨 UI/UX Improvements
- **Hero Slide 1 Layout Update**: 
  - Buttons now arranged in single row on desktop
  - Added location info block precisely under H1 (main title), not under all title content
  - Location block aligned right on desktop, centered on mobile
  - Location info shows "UNHAS 5 ESTRELAS" with location icon
  - Improved responsive design for mobile and desktop
  - Glass morphism effect for location info block
- **Component Architecture**: Enhanced HeroTitle with alignment support
- **TypeScript Improvements**: Fixed import paths in components index

### 🔧 Technical Changes
- Enhanced `HeroTitle.tsx` with `showLocationInfo` prop for conditional location display
- Moved location block logic from Slide1 to HeroTitle for better encapsulation
- Added Next.js Image optimization for location icon within HeroTitle
- Fixed component import paths in `index.ts`
- Improved component modularity and reusability

### 📱 Responsive Design
- Desktop: single column layout with right-aligned location info precisely under H1
- Mobile: centered layout with location info centered under H1
- Adaptive button arrangement (row/column based on screen size)
- Conditional rendering: location info only shows when `showLocationInfo={true}`

---

## [2.0.0] - 2025-08-20 - PRODUCTION READY RELEASE

### 🚀 Major Features Added
- **Google Analytics 4** integration with event tracking
- **Facebook Pixel** integration for conversions
- **FreSHA CRM** API integration for bookings
- **SEO optimization** with structured data and meta tags
- **Docker containerization** for easy deployment
- **GitHub Actions** CI/CD pipeline
- **Performance optimization** for production

### 📦 New Components
- `BookingForm` component with analytics tracking
- `analytics.ts` utility for GA4 and custom events
- `crm.ts` utility for FreSHA API integration
- `seo.ts` configuration for search optimization
- API routes for form handling and fallback

### 🔧 Infrastructure
- Production-ready `next.config.js` with security headers
- PM2 configuration for server deployment
- Environment variables structure for all services
- Docker support with multi-stage builds
- Deployment scripts for Windows and Linux

### 🛡️ Security & Performance
- CSP headers and security policies
- Image optimization and font preloading
- Bundle analysis setup
- Error handling and fallback systems

---

## [1.0.0] - 2025-08-13 - INITIAL VOGUE DESIGN

### ✨ Initial Features
- Vogue magazine style design implementation
- Brazilian Portuguese localization
- Responsive mobile-first layout
- Horizon and Inter font integration
- Gomanic color scheme (#FEFEFE, #F5E4E6, #3B3B3A)

### 📱 Sections Implemented
- Header with logo and navigation
- Hero section with magazine masthead
- Editorial benefits section
- Process steps visualization
- Limited offer call-to-action
- Portfolio gallery with testimonials
- Booking form (basic version)
- Footer with contact information

### 🎨 Design System
- Tailwind CSS configuration
- Custom Vogue-style components
- Editorial typography system
- Mobile navigation menu
- Hover effects and animations

---

## Migration Notes

### From v1.0.0 to v2.0.0
- **Environment Variables**: New variables added for analytics and CRM
- **API Routes**: New `/api/booking` and `/api/fallback-booking` endpoints
- **Dependencies**: Added analytics and form handling libraries
- **Build Process**: Enhanced with type checking and linting
- **Deployment**: New Docker and PM2 configurations

### Breaking Changes
- `layout.tsx` now requires environment variables for analytics
- Form components moved to `/components/tracking/`
- Analytics tracking must be configured before forms work properly

---

## Upcoming Features

### v2.1.0 (Planned)
- [ ] MercadoPago payment integration
- [ ] WhatsApp Business API integration
- [ ] Email automation with SMTP
- [ ] Advanced analytics dashboards
- [ ] A/B testing framework

### v2.2.0 (Future)
- [ ] Multi-language support (English version)
- [ ] Advanced SEO features (sitemap generation)
- [ ] Progressive Web App (PWA) capabilities
- [ ] Real-time chat integration

---

## Contributors
- **Olga Makeikina** - Initial development and design
- **Production Team** - SEO, analytics, and deployment setup