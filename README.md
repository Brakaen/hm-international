# HM International — Website

React + TypeScript + Tailwind CSS. Static site, no backend — the Apply and Contact forms
open the visitor's email app (`mailto:`) with the message pre-filled.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. To build for deployment:

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.)

## Before going live

- Set your real email in `RECIPIENT_EMAIL` inside `src/components/jobs/ApplyForm.tsx`
  and `src/components/contact/ContactForm.tsx` (currently a placeholder).
- Add your phone number in `src/pages/Contact.tsx` and `src/components/common/Footer.tsx`.
- Add your license/registration number in `src/pages/About.tsx`.
- Replace the gallery placeholder images in `src/data/siteData.ts` with real photos.

## Structure

```
src/
├── assets/          # logo, images, icons
├── components/
│   ├── common/      # Navbar, Footer, ScrollToTop
│   ├── home/        # Hero, WhyChooseUs, Services, Countries, Testimonials, CTA
│   ├── faq/         # FaqAccordion (job seekers' frequently asked questions)
│   ├── jobs/        # ApplyForm (mailto)
│   ├── gallery/     # GalleryCard
│   └── contact/     # ContactForm (mailto)
├── pages/           # Home, About, Services, Gallery, Contact
├── data/            # siteData.ts — all site content in one place
├── types/           # shared TypeScript types
└── App.tsx          # routes
```

## Design tokens

- Primary gold: `#b8862f` (`--color-gold`)
- Gold light: `#e6c675`
- Ink (dark): `#15140f`
- Ivory background: `#faf6ec`
- Display font: Cormorant Garamond · Body font: Inter
