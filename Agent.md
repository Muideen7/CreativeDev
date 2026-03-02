# CreativeDev Website Agent Guide

## Project Overview
Build a **premium agency website** for CreativeDev using Next.js 16 + Tailwind CSS v4, Shadcn UI, Framer Motion, GSAP, and Lucide React.
The design is inspired by [RefractWeb](https://refractweb.com) — cinematic typography, scroll-driven storytelling, and editorial confidence — while maintaining CreativeDev's distinct identity: **cyan-electric / purple-deep / magenta gradient palette, glassmorphism, and fluid motion**.

## Pages
- **Home** — Cinematic hero with word-by-word GSAP reveal, dual CTAs, services preview, projects showcase, stats section, testimonials
- **About** — Agency story (Science section), expertise bento grid
- **Services** {Expertise} — Full expertise bento grid with hover-interactive cards
- **Portfolio** {Projects} — Codename-style project cards (PROJECT LUMINA, etc.) with detail modal
- **Testimonials** — Dedicated page with African-named client testimonials and avatars
- **Contact** — Glassmorphism form with direct email link

## Design Principles
- **Cinematic & editorial** — large confident typography, deliberate animations, scroll-driven sections
- **Glassmorphism cards** — `backdrop-blur`, `bg-white/5`, `border-white/10`, rounded corners
- **Color palette** — obsidian (#050505), cyan-electric (#00F0FF), purple-deep (#5D26FF), magenta-vivid (#FF00D6), off-white (#F9F9F9)
- **Fonts** — Inter (body), Sora (display/headings)
- **Mobile-first**, responsive, approachable
- **African names and avatars** for all testimonials
- Highlight CTAs prominently

## Components (Max 15)
1. Hero — Cinematic hero with GSAP text reveals and dual CTAs
2. Navbar — Sticky glassmorphism nav with full-page mobile menu
3. Expertise — Bento grid service cards with hover effects
4. Science — Agency story / "About Us" section with parallax
5. Portfolio — Codename-style project showcase with detail modal
6. Testimonials — African-named client testimonial cards
7. Stats — Animated count-up credibility section
8. Footer — CTA section + navigation + socials
9. Loader — Morphing bubble loading screen
10. WhatsAppFloat — Floating WhatsApp button (bottom-right)
_+ Shadcn UI primitives (button, card, dialog, badge, separator) — these don't count toward the 15-component limit_

## WhatsApp Integration
- Floating WhatsApp button on all pages via `generateWhatsAppLink` utility in `lib/whatsapp.ts`

## Technical Constraints
- Strict TypeScript — no `any` types
- Server components by default; `"use client"` only where needed
- Max 15 reusable custom components
- Code must be production-ready
- Optimize images for web
- Validate responsive design on mobile

## Workflow
1. Plan folder structure & install dependencies (Shadcn UI)
2. Implement design tokens & global styles
3. Build/refine components (Hero, Navbar, Expertise, Science, Portfolio, Testimonials, Stats, Footer, WhatsAppFloat, Loader)
4. Assemble pages (Home, About, Services, Portfolio, Testimonials, Contact)
5. Integrate WhatsApp floating button
6. Fix dead links, cleanup unused dependencies
7. Validate build, performance & accessibility
