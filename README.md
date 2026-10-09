# Sameer Portfolio

A dark, modern developer portfolio built with Next.js, React, TypeScript, and Motion. The site presents professional experience, selected projects, technical strengths, and contact information through a responsive, animated interface.

## Features

- Responsive single-page developer portfolio
- Animated hero section and ambient background
- Scroll-reveal transitions
- Animated project cards and project detail pages
- Command palette with `Ctrl/Cmd + K`
- Mobile navigation
- Technology stack and engineering timeline sections
- Contact call-to-action
- Reduced-motion accessibility support
- SEO metadata, Open Graph/Twitter previews, structured data, robots, and sitemap support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Motion
- Vercel-ready deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/sameer-softengs/Portfolioo.git
cd Portfolioo
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Configuration

The canonical site URL defaults to `https://portfolioo-xi-woad.vercel.app`. For local configuration, copy `.env.example` to `.env.local` and update `SITE_URL` when needed.

Do not commit private credentials or deployment secrets.

## Production

```bash
npm run build
npm start
```

The project can be deployed directly to Vercel after pushing it to GitHub.

## Project Structure

```text
src/
  app/          Application routes, layout, and global styles
  components/   Reusable portfolio UI components
  data/         Portfolio content and project data
```

Update project descriptions in `src/data/portfolio.ts` as more details become available.

## Accessibility and Performance

The portfolio includes reduced-motion support. Project media is configured to avoid unnecessary loading until visitors request playback.

## License

See the repository for licensing details.
