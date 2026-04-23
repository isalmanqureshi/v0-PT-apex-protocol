# Apex Protocol - Design Token Documentation

## Overview
This document outlines the design system and token structure for the Apex Protocol landing page, built with a dark-first approach using Slate-950 backgrounds and Electric Blue (#0EA5E9) accents.

---

## Color Palette

### Primary Colors
- **Slate-950 (Background)**: `#0f172a` - Main dark background
- **Electric Blue (Accent)**: `#0ea5e9` - Primary action and highlight color
- **Slate-100 (Foreground)**: `#f1f5f9` - Primary text color

### Secondary Colors
- **Slate-700 (Card)**: `#1e293b` - Card backgrounds
- **Slate-600 (Muted)**: `#334155` - Secondary elements
- **Slate-400 (Muted Foreground)**: `#94a3b8` - Secondary text

### Semantic Colors
- **Destructive**: `#dc2626` - Error states
- **Destructive Foreground**: `#fecaca` - Error text

---

## Design Token System

### CSS Variables (Dark Theme)
Located in `app/globals.css` under `.dark` selector:

```css
--background: #0f172a          /* Page background */
--foreground: #f1f5f9          /* Primary text */
--card: #1e293b                /* Card/component backgrounds */
--card-foreground: #f1f5f9     /* Card text */
--muted: #334155               /* Secondary/disabled elements */
--muted-foreground: #94a3b8    /* Secondary text */
--accent: #0ea5e9              /* Primary action color */
--accent-foreground: #0f172a   /* Accent text (on accent bg) */
--border: #334155              /* Border color */
--input: #334155               /* Input field backgrounds */
--ring: #0ea5e9                /* Focus ring color */
```

### Tailwind Classes
All semantic color tokens are mapped to Tailwind utility classes:
- `bg-background`, `bg-card`, `bg-accent`
- `text-foreground`, `text-muted-foreground`, `text-accent`
- `border-border`, `border-accent`

---

## Component Usage Guide

### Buttons
**Primary CTA (Accent Button)**
```tsx
className="bg-accent text-accent-foreground hover:bg-accent/90"
```

**Secondary (Border Button)**
```tsx
className="border border-border text-foreground hover:bg-card/50"
```

### Cards & Containers
```tsx
className="bg-card border border-border rounded-lg p-8"
```
With hover accent:
```tsx
className="hover:border-accent/50 transition"
```

### Text Hierarchy
**Headings**: `text-foreground` (white)
**Body**: `text-foreground` (white)
**Secondary**: `text-muted-foreground` (slate-400)

### Interactive Elements
All interactive elements use Electric Blue (#0ea5e9):
- Call-to-action buttons
- Link hovers
- Border highlights
- Focus states

---

## Spacing & Typography

### Spacing Scale (Tailwind)
- `px-4 sm:px-6 lg:px-8` - Horizontal padding
- `py-12 md:py-20` - Vertical padding
- `gap-8` - Component gaps
- `mb-4`, `mt-6` - Individual margins

### Typography
**Font**: Geist Sans (default system font)
**Sizes**:
- Headings: `text-4xl` to `text-7xl` (responsive)
- Body: `text-base` to `text-xl`
- Small: `text-sm`

**Line Height**:
- Headings: `leading-tight`
- Body: Default (1.5em)

---

## Component Structure

### Header
- Sticky positioning with blur backdrop
- Dark background with border separator
- Logo + navigation + CTA button (accent color)

### Hero Section
- Full-width with gradient overlay (optional)
- Left: Text content with badge and dual CTA
- Right: Hero image placeholder
- Responsive: Stacks on mobile

### Section Containers
- `max-w-7xl mx-auto` - Max width constraint
- Full-width padding on smaller screens
- Centered content alignment

### Cards
- `bg-card` background
- `border border-border` with hover to `border-accent/50`
- Consistent padding `p-8`
- Rounded corners `rounded-lg`

---

## CTAs (Call-to-Action)

### Placement Strategy
1. **Header** - "Claim Protocol" button (fixed, always visible)
2. **Hero Section** - "Start Now" primary button + "Learn More" secondary
3. **Catalyst Method** - "Unlock Your Potential" centered button
4. **Pricing Tiers** - "Get Started" on each tier card (highlighted tier uses accent color)

### Modal Triggers
All primary CTAs open the CTA Modal which offers:
- Direct contact link (→ /contact page)
- Tier exploration option

---

## Dark Theme Benefits

✅ **Reduced eye strain** - Perfect for technical/elite audience  
✅ **Premium feel** - Dark + bright accent = luxury aesthetic  
✅ **Better contrast** - White text on dark background is accessible  
✅ **Accent prominence** - Electric blue pops against dark slate  
✅ **Modern standard** - Aligns with current design trends  

---

## Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Mobile-First Approach
- Single column layouts by default
- `md:grid-cols-2`, `md:grid-cols-3` for larger screens
- Hidden elements: `hidden md:flex` for desktop-only navigation

### Full-Width Implementation
- All sections use `w-full`
- No max-width on page container (unless explicitly needed)
- Padding provides breathing room on mobile

---

## Accessibility

- All interactive elements have `:hover` states
- Focus states use `focus:ring-2 focus:ring-accent`
- Buttons and links have descriptive `aria-label` attributes
- Color contrast meets WCAG AA standards
- Semantic HTML: `<button>`, `<nav>`, `<section>`, `<footer>`

---

## File References

- **Design Tokens**: `app/globals.css`
- **Tailwind Config**: Uses default Shadcn/UI theming
- **Components Location**: `components/`
- **Page Layouts**: `app/`

---

## Future Customization

To adjust colors, modify only `app/globals.css` `.dark` selector:
- Change `--accent` to swap primary action color
- Modify `--background`, `--card` for contrast adjustments
- Update `--muted-foreground` for readability tweaks

No component files need modification for color changes.
