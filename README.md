# Sameer Portfolio

A dark, modern developer portfolio built with Next.js 16, React 19, TypeScript and Motion.

## Features

- Responsive single-page developer portfolio
- Animated hero section
- Floating ambient background
- Scroll reveal transitions
- Animated project cards
- Command palette (`Ctrl/Cmd + K`)
- Mobile navigation
- Technology stack section
- Engineering timeline
- Contact CTA
- Reduced-motion accessibility support

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Before publishing

Update these placeholders:

- GitHub links in `src/components/Hero.tsx` and `Contact.tsx`
- LinkedIn links in `src/components/Hero.tsx` and `Contact.tsx`
- `your-email@example.com`
- Project descriptions in `src/data/portfolio.ts`
- Metadata in `src/app/layout.tsx`

## Deploy

The project can be deployed directly to Vercel after pushing it to GitHub.

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    AnimatedBackground.tsx
    CommandPalette.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    Journey.tsx
    Navbar.tsx
    Projects.tsx
    Reveal.tsx
    Stack.tsx
  data/
    portfolio.ts
```
