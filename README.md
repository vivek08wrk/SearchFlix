## SearchFlix (Next.js + Tailwind)

Modern movie search app built with Next.js App Router and Tailwind CSS.

### Quick start

1) Install deps and run dev

```bash
npm install
npm run dev
```

2) Set your env

Copy `.env.example` to `.env.local` and fill:

```
NEXT_PUBLIC_OMDB_API_KEY=your_key
```

Open http://localhost:3000 (or the port shown in the console).

### Scripts
- dev: Next dev (Turbopack)
- build: Next build (Turbopack)
- start: Next start

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vivek08wrk/SearchFlix&project-name=searchflix&repository-name=SearchFlix)

Or connect the repo in the Vercel dashboard. Add `NEXT_PUBLIC_OMDB_API_KEY` in Project Settings → Environment Variables.
