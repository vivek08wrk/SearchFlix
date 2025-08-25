Copilot Prompt (for SearchFlix project)

I have a Vite-based React project called SearchFlix with this structure:

SearchFlix/
├── index.html
├── vite.config.js
├── package.json
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    ├── assets/
    ├── App.css
    └── index.css


Please convert this into a Next.js project inside the same folder by doing the following:

Project Setup

Remove vite.config.js and replace Vite setup with next.config.js.

Move src/main.jsx → Next.js _app.js (wrap global styles and providers).

Move src/App.jsx → pages/index.js.

Convert index.html → _document.js (custom document if needed).

Move static assets (src/assets) into public/.

Routing & Components

Replace react-router-dom (if used) with Next.js file-based routing.

Keep reusable UI inside a components/ folder.

Create a pages/ directory for routes.

Styling & Modern UI

Install & configure Tailwind CSS with Next.js.

Refactor existing CSS (App.css, index.css) into Tailwind utility classes.

Update UI components with modern design: rounded corners, shadows, responsive grid layouts.

Add a global layout component (components/Layout.js) with a navbar + footer for consistency.

Optionally integrate shadcn/ui for polished components (buttons, cards, modals).

Optimizations

Replace <img> tags with Next.js <Image> for optimization.

Use <Head> from next/head for SEO (title, meta tags).

Clean unused Vite-related configs.

Deliverables

Updated package.json with Next.js scripts (next dev, next build, next start).

New folder structure for Next.js.

Example refactored pages/index.js using Tailwind + modern UI.

End result: The SearchFlix project should run as a Next.js app (npm run dev) with a modern, responsive UI.