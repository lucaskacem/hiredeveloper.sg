# Hero Section - Design Specification

## 📋 Overview

Hero section với header navigation, 2-column layout, và trust badges.

## 🎨 Key Visual Elements

### Colors
- **Background:** `#000000` (Pure Black)
- **Primary Text:** `#FFFFFF` (White)
- **Accent/Highlight:** `#00D4FF` (Cyan Blue)
- **CTA Button:** `#00C48C` (Green)
- **Secondary Text:** `rgba(255, 255, 255, 0.85)`

### Typography
- **Main Heading:** 56px, Inter Bold, -0.02em letter-spacing
- **Highlighted Text:** "top remote talent" in cyan (#00D4FF)
- **Subheading:** 18px, line-height 1.6
- **Button Text:** 18px, weight 600

### Layout Structure
```
┌─────────────────────────────────────────────────────┐
│ HEADER (Sticky)                                     │
│ Logo | For companies ▼ | For talent ▼ | Buttons    │
│ Developers | Designers | Marketers | ...           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────┐  ┌──────────────────────┐       │
│  │ LEFT COLUMN  │  │  RIGHT COLUMN        │       │
│  │              │  │                      │       │
│  │ • Heading    │  │  ┌────────────────┐ │       │
│  │ • Subheading │  │  │  Illustration  │ │       │
│  │ • CTA Button │  │  │                │ │       │
│  │ • Badge      │  │  │  + Text Box    │ │       │
│  │              │  │  └────────────────┘ │       │
│  └──────────────┘  └──────────────────────┘       │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ Product Hunt Badge | Trusted by Logos       │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## 📦 Components Breakdown

### 1. Header (Sticky Navigation)
- **Position:** Fixed top, z-index: 1000
- **Logo:** "arc()" - monospace style
- **Primary Nav:** 2 dropdown menus
- **Secondary Nav:** 7 category links
- **CTA Buttons:** 3 buttons (text, outline, filled)

### 2. Left Column (Text Content)
- **Heading:** 3 lines, middle line highlighted in cyan
- **Subheading:** Description text, max-width 520px
- **CTA Button:** Full-width green button, max-width 400px
- **Badge:** Fire emoji + "$0 until you hire"

### 3. Right Column (Illustration Card)
- **Container:** White card with border, border-radius 16px
- **Illustration:** Hand-drawn style, 2 people
- **Colors:** Black lines, yellow/orange accents
- **Text Overlay:** Dark gray box at bottom with white text

### 4. Trust Section
- **Left:** Product Hunt badge with laurel wreath
- **Right:** 6 company logos (Spotify, Splice, etc.)
- **Style:** All logos in white/grayscale

## 🎯 Implementation Notes

### Grid Layout
- Container: max-width 1280px
- Grid: 45% / 55% split
- Gap: 64px
- Responsive: Stack on tablet/mobile

### Button States
```javascript
Primary CTA:
- Default: #00C48C
- Hover: #00A878 + translateY(-2px) + shadow
- Transition: 0.2s ease
```

### Animation Sequence
1. Heading: fade-in-up (0.1s delay)
2. Subheading: fade-in-up (0.2s delay)
3. Button: fade-in-up (0.3s delay)
4. Illustration: fade-in-right (0.2s delay)

## 📱 Responsive Breakpoints

- **Desktop:** 1280px+
- **Tablet:** 768px - 1279px (single column)
- **Mobile:** < 768px (adjusted typography)

## 🔍 See Also

- `hero-section-spec.json` - Full detailed specification
- `hero-section.png` - Visual reference screenshot

---

**File:** `/design/01-hero/README.md`  
**Last Updated:** Feb 2026

