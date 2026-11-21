# pouyasadri.com

Personal site for Pouya Sadri — Next.js 16 App Router, Clean Architecture, GSAP/Lenis motion ported from the locked design.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

- `src/domain` — entities
- `src/application` — ports & use cases
- `src/infrastructure` — static content + contact notifier
- `src/presentation` — UI, design CSS, SiteMotion
- `src/app` — App Router pages & API

Design reference: `design/pouya-sadri-3.html`.
