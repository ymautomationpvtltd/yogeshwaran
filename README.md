# Yogeshwaran — Executive Portfolio & YM Automation

> Personal portfolio of **Yogeshwaran Muralidharan** — Managing Director & Founder of **YM Automation Private Limited**. Pioneering Autonomous Manufacturing, Mechatronics Systems, IIoT, and Industry 4.0 Smart Factories.

---

## 🚀 Features

- **⚡ Blazing Fast**: Built with React 19 and Vite for instant load times and optimal Core Web Vitals.
- **🔍 SEO Optimized**:
  - Full OpenGraph & Twitter Card social preview cards.
  - JSON-LD Structured Data Schema (`Person`, `Organization`, `WebSite`, `BreadcrumbList`).
  - Search engine bot instructions (`robots.txt` and `sitemap.xml`).
  - Mobile web manifest (`site.webmanifest`).
- **📱 Fully Responsive**: Tailored for desktop, tablet, and mobile viewing.
- **🌐 GitHub Pages Ready**: Automated GitHub Actions CI/CD pipeline configured for zero-configuration deployments.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Vanilla CSS design system with CSS custom properties

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚢 GitHub Pages Deployment

### Option A: Automatic Deployment via GitHub Actions (Recommended)
1. Push your code to your GitHub repository on the `main` branch.
2. In your GitHub repository settings, go to:
   **Settings** ➔ **Pages** ➔ **Build and deployment**.
3. Under **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will build and deploy your portfolio automatically.

---

## 📂 Project Structure

```
yogeshwaran/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   ├── 404.html                # SPA Fallback for GitHub Pages
│   ├── favicon.svg             # Favicon
│   ├── og-image.svg            # OpenGraph / Twitter Card preview
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Search engine index sitemap
│   └── site.webmanifest        # PWA & mobile browser metadata
├── src/
│   ├── assets/                 # SVGs and images
│   ├── components/             # React components
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html                  # SEO meta tags & Schema.org JSON-LD
├── package.json
└── vite.config.js              # Production build & base path configuration
```
