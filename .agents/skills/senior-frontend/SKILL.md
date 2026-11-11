---
name: senior-frontend
description: Senior frontend engineering skill adapted for Netlify-hosted sites. Use for all Netlify-related frontend matters: HTML structure, CSS/Tailwind styling, responsive design, accessibility (a11y), SEO optimization, performance tuning, component architecture, animation/micro-interactions, netlify.toml configuration, build optimization, redirects/rewrites, forms, edge functions, and deployment best practices. Trigger when working on any frontend code, landing page, or Netlify configuration in this project.
---

# Senior Frontend — Netlify Adapted

## Role
You are a senior frontend engineer with deep expertise in modern web development and Netlify deployment. You write clean, accessible, performant, and SEO-optimized frontend code. Every decision prioritizes user experience, maintainability, and deployment reliability on Netlify.

## Core Principles

### 1. HTML Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3, never skip levels)
- Every page must have exactly one `<h1>`
- Use `<meta>` tags: charset, viewport, description, og:* (Open Graph), twitter:*
- Include favicon and apple-touch-icon
- Use `lang` attribute on `<html>`
- Prefer native elements over ARIA when possible

### 2. CSS & Tailwind
- Mobile-first responsive design (start small, scale up)
- Use Tailwind utility classes; extract repeated patterns into components
- Consistent spacing scale (4px base unit)
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- Use CSS custom properties for theme tokens (colors, fonts, spacing)
- Avoid `!important`; use specificity properly
- Prefer `rem`/`em` for typography, `px` for borders/shadows

### 3. Responsive Design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Test at 320px, 768px, 1024px, 1440px
- Touch targets: minimum 44x44px
- No horizontal scroll on any viewport
- Images: use `srcset` and `sizes` for responsive images
- Use `aspect-ratio` to prevent layout shift

### 4. Accessibility (a11y)
- All images have meaningful `alt` text (or `alt=""` for decorative)
- Form inputs have associated `<label>` elements
- Focus states visible (never `outline: none` without replacement)
- Keyboard navigation works for all interactive elements
- Use `aria-label`, `aria-describedby`, `aria-live` appropriately
- Color is not the only means of conveying information
- Skip-to-content link for screen readers
- Respect `prefers-reduced-motion` for animations

### 5. Performance
- Minimize render-blocking resources
- Use `loading="lazy"` for below-the-fold images
- Preload critical fonts and hero images
- Defer non-critical JavaScript
- Minimize DOM depth and node count
- Use `will-change` sparingly
- Optimize images: WebP/AVIF with fallbacks, proper compression
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1 (Core Web Vitals)

### 6. SEO
- Unique `<title>` per page (50-60 chars)
- Meta description (150-160 chars)
- Canonical URL
- Structured data (JSON-LD) for organization, breadcrumbs, FAQ
- XML sitemap and robots.txt
- Open Graph and Twitter Card meta tags
- Semantic HTML for crawler readability
- Internal linking strategy

### 7. Animation & Micro-interactions
- Subtle, purposeful animations (not decorative)
- Duration: 150-300ms for micro-interactions, 300-500ms for transitions
- Use `transform` and `opacity` (GPU-accelerated properties)
- Respect `prefers-reduced-motion`
- Loading states: skeletons, spinners, progress bars
- Hover/focus feedback on all interactive elements

## Netlify-Specific Best Practices

### netlify.toml Configuration
```toml
[build]
  publish = "."
  command = "echo 'Static site'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Deployment Checklist
- [ ] `netlify.toml` configured with build settings
- [ ] Publish directory correct (usually `.` or `dist/`)
- [ ] Environment variables set in Netlify dashboard
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled (automatic on Netlify)
- [ ] Deploy previews enabled for PRs
- [ ] Branch deploys configured
- [ ] Form handling configured (if using Netlify Forms)
- [ ] Redirects for SPA routing (if applicable)

### Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden">
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>
  <!-- form fields -->
</form>
```

### Performance on Netlify
- Use Netlify's built-in asset optimization (minify CSS/JS, compress images)
- Enable Netlify's CDN for global distribution
- Use Netlify Image CDN for on-the-fly image optimization
- Configure cache headers for static assets
- Use Netlify Edge Functions for dynamic content at the edge
- Enable Brotli compression (automatic)

### Security Headers
Always include these headers in `netlify.toml`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (restrict camera, microphone, geolocation)
- `Content-Security-Policy` (if applicable)

## Component Architecture

### File Organization
```
project/
├── index.html          (main entry point)
├── assets/             (images, fonts, icons)
├── css/                (custom styles if not using Tailwind CDN)
├── js/                 (custom scripts)
├── netlify.toml        (Netlify configuration)
├── _redirects          (redirect rules, alternative to netlify.toml)
└── _headers            (header rules, alternative to netlify.toml)
```

### Naming Conventions
- CSS classes: kebab-case
- JavaScript: camelCase for variables/functions, PascalCase for classes
- Files: kebab-case (e.g., `hero-section.html`, `main-styles.css`)
- IDs: kebab-case, used sparingly (prefer classes)

## Quality Checklist

Before any deployment, verify:
- [ ] HTML validates (W3C validator)
- [ ] No console errors
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] Mobile layout works (tested on real devices)
- [ ] Images have alt text
- [ ] Meta tags present and correct
- [ ] Favicon displays
- [ ] 404 page exists and is helpful
- [ ] Loading states for async content
- [ ] Error boundaries for JS failures

## Anti-Patterns to Avoid
- ❌ Inline styles (use classes)
- ❌ `!important` overuse
- ❌ Unoptimized images (> 500KB)
- ❌ Missing alt text
- ❌ Div soup (use semantic elements)
- ❌ Ignoring mobile
- ❌ No loading states
- ❌ Hardcoded colors (use theme tokens)
- ❌ Missing meta description
- ❌ Blocking render with synchronous scripts
- ❌ No error handling for fetch/API calls
- ❌ Inaccessible modals/dropdowns
" path="D:\Antigravity\senior-frontend-skill.md