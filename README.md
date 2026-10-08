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

The canonical origin defaults to `https://portfolioo-xi-woad.vercel.app`.
Set `SITE_URL` in your hosting environment if the portfolio moves to a new domain.
For local checks, copy `.env.example` to `.env.local` and change the value as needed.

SEO includes unique titles and descriptions, Open Graph and Twitter previews,
an SVG favicon, Person/WebSite/project structured data, `/robots.txt`, and
`/sitemap.xml`. Vercel preview deployments discourage indexing. Social preview
images are generated at `/og` without external image or font requests.

Paint Application uses a lightweight SVG cover in the project cards. Its MP4 is
only referenced on its detail page, uses the cover as a poster, and has
`preload="none"`, so video data is requested when the visitor plays it.

Update project descriptions in `src/data/portfolio.ts` as more details become available.

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
