# Aakash Srividhya — Portfolio

Personal portfolio for Aakash Srividhya, writer and filmmaker based in Chennai. Political
narratives and cultural commentary through long-form journalism and short-form content.

Built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn-style components, and
Framer Motion. Design is a constructivist red / yellow / black / white system that leans
into political-poster typography.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js. No configuration needed. Click Deploy.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Structure

- `app/` — layout, global styles, and the single-page composition
- `components/sections/` — one file per portfolio section
- `components/ui/` — shadcn-style primitives (button, badge, card, tabs)
- `lib/data.ts` — all copy and content in one place, easy to edit

## Editing content

All text lives in `lib/data.ts`. Update names, roles, reels, and links there and every
section reflects the change.

## House rule

No em dashes anywhere in the copy.
