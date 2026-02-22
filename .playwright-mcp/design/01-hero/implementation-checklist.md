# Hero Section - Implementation Checklist

## 🎯 Component Implementation Status

### Header Components
- [ ] **Logo Component**
  - [ ] Text: "arc()"
  - [ ] Monospace font styling
  - [ ] Link to homepage

- [ ] **Primary Navigation**
  - [ ] "For companies" dropdown menu
  - [ ] "For talent" dropdown menu
  - [ ] Chevron down icons
  - [ ] Hover states
  - [ ] Click to expand functionality

- [ ] **Secondary Navigation**
  - [ ] 7 navigation links (Developers, Designers, etc.)
  - [ ] Hover color change to cyan
  - [ ] Active state styling

- [ ] **Header CTA Buttons**
  - [ ] "Log In" text button
  - [ ] "Find jobs" outline button
  - [ ] "Hire talent" filled button
  - [ ] All hover states

- [ ] **Sticky Header**
  - [ ] Position: sticky/fixed
  - [ ] Z-index: 1000
  - [ ] Scroll behavior

---

### Hero Content - Left Column
- [ ] **Main Heading**
  - [ ] Line 1: "Hire the world's" (white)
  - [ ] Line 2: "top remote talent" (cyan #00D4FF)
  - [ ] Line 3: "without the search" (white)
  - [ ] Font: 56px, bold, Inter
  - [ ] Letter-spacing: -0.02em
  - [ ] Line-height: 1.1

- [ ] **Subheading**
  - [ ] Full text content
  - [ ] Font: 18px
  - [ ] Color: rgba(255, 255, 255, 0.85)
  - [ ] Max-width: 520px
  - [ ] Line-height: 1.6

- [ ] **Primary CTA Button**
  - [ ] Text: "Hire talent"
  - [ ] Background: #00C48C (green)
  - [ ] Font: 18px, weight 600
  - [ ] Padding: 16px 48px
  - [ ] Border-radius: 8px
  - [ ] Full width, max-width 400px
  - [ ] Hover effect:
    - [ ] Background: #00A878
    - [ ] Transform: translateY(-2px)
    - [ ] Box-shadow: 0 4px 12px rgba(0, 196, 140, 0.3)
  - [ ] Transition: 0.2s ease

- [ ] **Badge**
  - [ ] Fire emoji 🔥
  - [ ] Text: "$0 until you hire"
  - [ ] Center alignment
  - [ ] Margin-top: 16px

---

### Hero Content - Right Column
- [ ] **Card Container**
  - [ ] Background: white
  - [ ] Border-radius: 16px
  - [ ] Padding: 48px 40px
  - [ ] Border: 4px solid #E5E5E5
  - [ ] Box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)

- [ ] **Illustration**
  - [ ] Hand-drawn style SVG/image
  - [ ] 2 people: laptop user + waving person
  - [ ] Colors: black lines, yellow/orange accents
  - [ ] Aspect ratio: 4:3
  - [ ] Responsive sizing

- [ ] **Text Overlay Box**
  - [ ] Position: absolute, bottom 32px
  - [ ] Background: rgba(60, 60, 60, 0.95)
  - [ ] Backdrop-filter: blur(8px)
  - [ ] Border-radius: 8px
  - [ ] Padding: 12px 20px
  - [ ] Text: "Plus, our team of real humans supports you along the way."
  - [ ] Font: 14px, white, centered

---

### Trust Badges Section
- [ ] **Product Hunt Badge**
  - [ ] Laurel wreath SVG/image
  - [ ] Text overlay:
    - [ ] "Product Hunt" (uppercase, 10px)
    - [ ] "Product of the day" (9px)
    - [ ] "1st" (24px, bold)
  - [ ] Color: white/cream

- [ ] **Trusted By Logos**
  - [ ] Label: "Trusted by"
  - [ ] Vertical divider line
  - [ ] 6 company logos:
    - [ ] Spotify
    - [ ] Splice
    - [ ] Automattic
    - [ ] hims
    - [ ] hopper
    - [ ] Udacity
  - [ ] All logos: white filter
  - [ ] Gap: 40px between logos
  - [ ] Hover effect: opacity increase

---

### Layout & Responsive
- [ ] **Container**
  - [ ] Max-width: 1280px
  - [ ] Center alignment
  - [ ] Horizontal padding: 48px

- [ ] **Grid Layout**
  - [ ] 2 columns: 45% / 55%
  - [ ] Gap: 64px
  - [ ] Align items: center

- [ ] **Tablet (768px - 1279px)**
  - [ ] Single column layout
  - [ ] Heading: 48px
  - [ ] Gap: 48px
  - [ ] Padding: 32px

- [ ] **Mobile (< 768px)**
  - [ ] Heading: 36px
  - [ ] Subheading: 16px
  - [ ] Padding: 24px
  - [ ] Logo gap: 24px
  - [ ] Stack all elements

---

### Animations
- [ ] **Page Load Sequence**
  - [ ] Heading: fade-in-up (0.1s delay)
  - [ ] Subheading: fade-in-up (0.2s delay)
  - [ ] Button: fade-in-up (0.3s delay)
  - [ ] Illustration: fade-in-right (0.2s delay)
  - [ ] Duration: 0.6s
  - [ ] Easing: cubic-bezier(0.4, 0, 0.2, 1)

- [ ] **Hover Animations**
  - [ ] Button hover
  - [ ] Logo hover
  - [ ] Nav link hover

---

### Accessibility
- [ ] **Semantic HTML**
  - [ ] `<header>` for navigation
  - [ ] `<h1>` for main heading
  - [ ] `<nav>` for navigation menus
  - [ ] `<button>` for interactive elements

- [ ] **ARIA Labels**
  - [ ] Main heading aria-label
  - [ ] Button aria-labels
  - [ ] Illustration role="img" + aria-label
  - [ ] Navigation landmarks

- [ ] **Keyboard Navigation**
  - [ ] Tab order logical
  - [ ] Focus states visible
  - [ ] Dropdown accessible via keyboard

- [ ] **Color Contrast**
  - [ ] White on black: Pass
  - [ ] Cyan on black: Verify
  - [ ] Button text: Pass

---

### Performance
- [ ] **Images/SVGs**
  - [ ] Illustration optimized
  - [ ] Company logos optimized
  - [ ] Lazy load below fold
  - [ ] WebP format with fallback

- [ ] **Fonts**
  - [ ] Inter font preloaded
  - [ ] Font-display: swap

- [ ] **Code Splitting**
  - [ ] Header component separate
  - [ ] Hero content separate
  - [ ] Illustrations lazy loaded

---

## 📝 Testing Checklist

- [ ] Visual regression test
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Lighthouse score > 90
- [ ] Accessibility audit (aXe, WAVE)
- [ ] Performance metrics
- [ ] Animation smoothness

---

## 📚 Files Reference

- `hero-section-spec.json` - Full specification
- `hero-variables.css` - CSS variables
- `hero-section.png` - Visual reference
- `README.md` - Overview and notes

---

**Last Updated:** Feb 2026

