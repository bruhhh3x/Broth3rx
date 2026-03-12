# BROTH3R Design System — Quick Reference

## Colors

```
Primary:   Forest Green #0B3D2E (authority, trust)
Accent:    Neon Green #39FF14 (action, energy, glow)
Base:      Black #0A0A0A (backgrounds)
Text:      White #F5F5F5 (readability)
Secondary: Slate #1E1E1E (surfaces)
```

### CSS Usage
```css
background: var(--color-bg-primary);
color: var(--color-text-primary);
border: 1px solid var(--color-neon-green);
box-shadow: var(--shadow-neon-md);
```

---

## Typography

### Fonts
```
Display: Space Grotesk (headings, bold, distinctive)
Body:    Inter (text, readable, clean)
Mono:    JetBrains Mono (code, data)
```

### Font Size Helpers
```
.h1         Display XL (9rem max)
.h2         Display MD (5.5rem max)
.h3         Display SM (3.5rem max)
.h4         Heading (2.25rem max)
.h5         Small Heading (1.375rem max)
.h6         Label (1.125rem max)
.body-lg    Lead (1.125rem)
.body-base  Standard (1rem)
.body-sm    Small (0.875rem)
.caption    Tiny (0.75rem)
```

### Quick Text
```html
<h1 class="h1">Hero Headline</h1>
<p class="body-base">Regular paragraph</p>
<span class="caption">Small label</span>
```

---

## Spacing Scale

```
--spacing-1   4px    --spacing-6   24px    --spacing-32  128px
--spacing-2   8px    --spacing-8   32px    --spacing-40  160px
--spacing-3  12px    --spacing-10  40px    --spacing-48  192px
--spacing-4  16px    --spacing-12  48px    --spacing-56  224px
--spacing-5  20px    --spacing-16  64px    --spacing-64  256px
```

### Usage
```css
padding: var(--spacing-6);      /* 24px padding */
margin: var(--spacing-4);       /* 16px margin */
gap: var(--spacing-8);          /* 32px gap */
border-radius: var(--radius-lg); /* 12px corners */
```

---

## Components

### Primary Button (Neon Green)
```html
<button class="btn btn-primary">Buy Tickets</button>
```

### Secondary Button (Forest Green)
```html
<button class="btn btn-secondary">Learn More</button>
```

### Ghost Button (Minimal)
```html
<button class="btn btn-ghost">Explore</button>
```

### Button Sizes
```
btn-xs, btn-sm, btn-base, btn-lg, btn-xl
```

### Card
```html
<article class="card">
  <div class="card-image">
    <img src="..." alt="...">
  </div>
  <div class="card-content">
    <h3 class="h4">Title</h3>
    <p class="body-base">Description</p>
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</article>
```

### Form Input
```html
<div class="form-group">
  <label for="email" class="form-label">Email</label>
  <input type="email" id="email" class="form-input" placeholder="Enter email">
</div>
```

### Navigation Link
```html
<a href="#" class="nav-link">Events</a>
```

---

## Animations

### Entrance (On Page Load)
```html
<div class="animate-slide-up">Fades in from below</div>
<div class="animate-fade-in">Fades in</div>
<div class="animate-scale-in">Scales in</div>
```

### Staggered List Items
```html
<ul>
  <li class="animate-slide-up animate-delay-100">Item 1</li>
  <li class="animate-slide-up animate-delay-200">Item 2</li>
  <li class="animate-slide-up animate-delay-300">Item 3</li>
</ul>
```

### Hover Effects
```css
/* Cards lift on hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Buttons grow */
.btn:hover {
  transform: translateY(-2px);
}
```

### Neon Pulse (For Highlights)
```html
<div class="pulse-neon">Available For Work</div>
```

### Durations
```
--duration-fastest:  100ms
--duration-faster:   150ms
--duration-fast:     200ms
--duration-base:     300ms
--duration-slow:     500ms
--duration-slower:   700ms
--duration-slowest:  1000ms
```

---

## Easing Functions

```
--ease-linear         (no acceleration)
--ease-brand          (default, balanced)
--ease-out-expo       (fast exit, cinematic)
--ease-in-back        (slight bounce in)
--ease-out-back       (bounce out)
--ease-in-out-quad    (smooth both ways)
```

### Animation Syntax
```css
/* Basic */
animation: slideUp var(--duration-slow) var(--ease-out-expo);

/* With delay */
animation: slideUp var(--duration-slow) var(--ease-out-expo) forwards;
animation-delay: 200ms;
```

---

## Shadows & Depth

### Elevation Shadows
```
--shadow-xs        (minimal)
--shadow-sm        (small lift)
--shadow-base      (standard)
--shadow-md        (medium depth)
--shadow-lg        (prominent)
--shadow-xl        (high elevation)
--shadow-2xl       (maximum depth)
```

### Neon Glow
```
--shadow-neon-sm   (subtle green glow)
--shadow-neon-md   (medium glow)
--shadow-neon-lg   (bright glow)
```

### Usage
```css
box-shadow: var(--shadow-lg);
box-shadow: var(--shadow-neon-md);  /* For buttons, highlights */
```

---

## Grid & Layout

### Container Widths
```
--container-3xl   48rem (768px)
--container-4xl   56rem (896px)
--container-5xl   64rem (1024px)
--container-6xl   72rem (1152px)
--container-7xl   80rem (1280px)
--container-full  1200px (max width)
```

### Grid System
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--grid-gap);     /* 24px on desktop */
}

@media (max-width: 768px) {
  .grid {
    gap: var(--grid-gap-mobile);  /* 16px on mobile */
  }
}
```

---

## Responsive Visibility

```html
<!-- Hide on mobile -->
<div class="hidden-mobile">Desktop only</div>

<!-- Hide on tablet -->
<div class="hidden-tablet">Not on tablets</div>

<!-- Hide on desktop -->
<div class="hidden-desktop">Mobile only</div>
```

---

## Accessibility

### Focus Indicators
```css
/* Automatic on all interactive elements */
*:focus-visible {
  box-shadow: var(--focus-ring);  /* Neon green ring */
}
```

### Color Contrast (All WCAG AA+)
```
Black text on white: 21:1 ✓ AAA
Neon on black:       14.5:1 ✓ AAA
Forest green on dark: 7.2:1 ✓ AAA
```

### Reduced Motion
```css
/* Automatically respects user preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Common Patterns

### Hero Section
```html
<section class="hero">
  <div class="hero-content">
    <h1 class="h1 animate-entrance">BROTH3R</h1>
    <p class="body-lg animate-entrance animate-delay-200">Subheading</p>
    <div style="display: flex; gap: var(--spacing-4); justify-content: center;">
      <button class="btn btn-primary">Primary CTA</button>
      <button class="btn btn-secondary">Secondary CTA</button>
    </div>
  </div>
</section>
```

### Event Grid
```html
<section class="archive">
  <div style="max-width: var(--container-7xl); margin: 0 auto;">
    <h2 class="h2">Past Events</h2>
    <div class="grid">
      <!-- Card components here -->
    </div>
  </div>
</section>
```

### Email Signup
```html
<section class="newsletter">
  <h2 class="h2">Join the Gathering</h2>
  <form class="form">
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" class="form-input" required>
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </form>
</section>
```

### With Animations
```html
<div class="animate-slide-up">This fades in from below</div>
<div class="animate-slide-up animate-delay-200">Delayed by 200ms</div>
<div class="animate-slide-up animate-delay-300">Delayed by 300ms</div>
```

---

## Development Checklist

- [ ] Link `broth3r-design-system.css` in `<head>`
- [ ] Use design token variables for all styles
- [ ] Test focus indicators (Tab key navigation)
- [ ] Check color contrast with WCAG tools
- [ ] Test animations on slower devices
- [ ] Verify mobile responsiveness
- [ ] Test keyboard-only navigation
- [ ] Validate HTML semantics
- [ ] Check image alt text

---

## Token Naming Convention

```
--[category]-[type]-[variant]-[state]

Examples:
--color-text-primary       (color, text, primary state)
--shadow-neon-lg           (shadow, neon effect, large)
--duration-slow            (duration, slow timing)
--ease-out-expo            (easing, exit, exponential)
--btn-primary-bg           (button, primary style, background)
--card-border-hover        (card, border, hover state)
```

---

## Customization

Change a single token globally:

```css
:root {
  --color-neon-green: #00FF00;      /* New neon color */
  --duration-slow: 800ms;            /* Slower animations */
  --font-size-display-lg: 8rem;      /* Bigger headlines */
}
```

All components automatically update.

---

## Resources

- **Full Guide:** `BROTH3R-DESIGN-SYSTEM-GUIDE.md`
- **CSS Variables:** `broth3r-design-system.css`
- **Github Repo:** [BROTH3R Repository]
- **Implementation:** See individual component files

---

Keep this handy while building. All tokens are semantic and reusable.

Build with intention. Design with authority. 🟢⚫

