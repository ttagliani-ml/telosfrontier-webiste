# Telos Frontier website

React + Vite + TypeScript + Tailwind. Single page, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. Same setup as the previous Codebending site.

## Before going live

1. **`src/config.ts`** holds the contact email (`hello@telosfrontier.com`), the legal address shown in the footer, and an optional `linkedin` URL.
2. **Contact form**: opens the visitor's email app with their message pre-filled and addressed to `contactEmail`. Nothing to set up. (If you ever want submissions delivered without the visitor's email app, paste a [Formspree](https://formspree.io) endpoint into `formEndpoint`.)
3. **Custom domain**: set it in the repo under Settings → Pages → Custom domain, and point the domain's DNS at GitHub Pages (A records for the root domain, a `www` CNAME to `<your-github-user>.github.io`). Because this repo deploys with a GitHub Actions workflow, no `CNAME` file is needed.

## Commands

```bash
npm install
npm run dev        # local dev server at http://localhost:8080
npm run build      # production build -> dist/
```

## Where things are

- `src/components/`: one file per section (Hero, Statement, Services, Approach, Principles, Contact, Footer)
- `src/components/FrontierCanvas.tsx`: the animated hero background (respects "reduce motion" settings)
- `public/brand/`: logo files served with the site (the email signature pulls its logo from here)
- `tailwind.config.ts`: brand colours and fonts
