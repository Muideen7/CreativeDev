# 🚀 CreativeDev | Frontend Development & Design Agency

**CreativeDev** is a professional frontend development and website design agency. We specialize in building high-performance, responsive websites with a focus on modern UI/UX, clean code, and emotionally resonant digital experiences.



## 🛠️ Tech Stack

* **Framework**: [Next.js 16.1.6 (Turbopack)](https://nextjs.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (utilizing the new `@theme` engine)
* **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (Sans) & [Sora](https://fonts.google.com/specimen/Sora) (Display)
* **Deployment**: [Vercel](https://vercel.com/)
* **Metadata**: Dynamic Open Graph Image Generation via `next/og`

---

## ✨ Key Features

* **Next.js 16 Architecture**: Leveraging the latest App Router features and Turbopack for optimized build speeds.
* **Tailwind v4 Design System**: A CSS-first configuration using `@theme` for centralized design tokens.
* **Dynamic SEO**: Automated branded social media previews and optimized metadata for search engine visibility.
* **Performance First**: High-speed loading, antialiased typography, and optimized asset delivery.
* **Interactive UI**: Custom morphing animations and glassmorphism components.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css         # Tailwind v4 theme and custom layers
│   ├── layout.tsx          # Root layout, Google Fonts, and Metadata
│   ├── opengraph-image.tsx # Dynamic OG image generator (Edge Runtime)
│   └── icon.png            # Branded Blue/Cyan agency favicon
├── components/             # Reusable UI components (e.g., WhatsAppFloat)
├── public/                 # Static assets
└── .gitignore              # Configured to exclude .next/ and node_modules/

🚀 Getting Started
Prerequisites
 * Node.js: v20.9.0 or higher
 * Package Manager: npm
Installation
 * Clone the repository:
   git clone [https://github.com/Muideen7/CreativeDev-.git](https://github.com/Muideen7/CreativeDev-.git)
cd CreativeDev-

 * Install dependencies:
   npm install

 * Run the development server:
   npm run dev

 * Build for production:
   npm run build

🎨 Design Language
Our identity uses a high-contrast, professional palette designed for the modern web:
 * Obsidian (#050505): Core background color for a sleek, dark-mode feel.
 * Cyan Electric (#00F0FF): Primary accent for buttons and highlights.
 * Purple Deep (#5D26FF): Secondary brand color for gradients.
 * Magenta Vivid (#FF00D6): Tertiary accent for high-energy elements.
📄 License
This project is proprietary. All rights reserved by CreativeDev.
