# uTeach - Buzzvel Frontend Challenge

A responsive landing page built using **Next.js 14 App Router**, **Tailwind CSS**, and **TypeScript**. This project is a submission for the Buzzvel frontend challenge, following a provided Figma design.

## 🔧 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Class Variance Authority (CVA)** – For managing utility class variations cleanly
- **Framer Motion** – For smooth and declarative animations
- **Lucide Icons** – Icon library used for consistent and modern UI

## 🌐 Features

- Fully responsive design
- Semantic and accessible HTML
- SEO-optimized with `next/head` (Open Graph, title, etc.)
- Animated UI using Framer Motion
- Clean and reusable component structure

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/felipemarcelino99/uteach-buzzvel.git
cd uteach-buzzvel
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## 🧪 Performance & SEO

- Optimized for fast load times using Next.js's built-in SSG/SSR
- Meta tags and Open Graph support via `next/head`
- Lazy loading and image optimization via `<Image />`

## 🖼️ Open Graph Meta Tags

```html
<meta property="og:title" content="uTeach - Learn from the Best" />
<meta
  property="og:description"
  content="A modern and responsive landing page for uTeach."
/>
<meta property="og:image" content="/og-image.webp" />
<meta property="og:url" content="https://uteach-buzzvel.vercel.app" />
<meta name="twitter:card" content="summary_large_image" />
```

Place the image `og-image.webp` in the `/public` directory.

## 📁 Folder Structure

```
/app          - App router pages and layouts
/components   - Reusable UI components
/styles       - Global styles
/public       - Static assets
```

## 📄 License

This project is for evaluation purposes only.
