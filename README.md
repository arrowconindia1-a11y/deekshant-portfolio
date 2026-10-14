# Deekshant Pranami — Portfolio

A responsive, one-page portfolio for HR & Administration opportunities, built with React and Vite. The layout and interactions use custom CSS; there are no paid templates, external image/font dependencies, APIs, or subscriptions.

## CV-based content and accuracy

- The profile is positioned for **HR & Administration** roles, as requested. The supplied CV documents office operations, documentation, coordination, customer support and IT support; it does **not** list a dedicated HR role, so the site does not claim HR employment experience.
- The CV does not name standalone projects. The **Projects & Work Highlights** section clearly presents summaries of documented responsibilities from the listed jobs, not invented project engagements.
- The original supplied CV is included at `public/Deekshant-Pranami-CV.pdf` and linked for download.
- Email, phone and location are copied from the supplied CV. Review them before publishing because a public site and its downloadable CV are visible to anyone.

## Run locally

Requirements: Node.js 20.19 or newer (or Node.js 22.12+) and npm. These versions meet the current Vite runtime requirement.

```bash
cd deekshant-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build and test the production output

```bash
npm run build
npm run preview
```

The production-ready static site is written to `dist/`. The Vite base path is relative (`./`), so the built site supports GitHub Pages repository URLs as well as a root URL.

## Free deployment with GitHub Pages

This project includes `.github/workflows/deploy.yml`. It builds the site and publishes `dist/` to GitHub Pages whenever `main` is updated. GitHub Pages is free for public repositories; no paid domain, service, key or subscription is required.

1. Sign in to GitHub (or create a free account) and create a **public** repository named `deekshant-portfolio`. Do not add a second README or license during repository creation.
2. From a terminal opened in this project folder, run the following commands, replacing `<YOUR_GITHUB_USERNAME>` with your username:

   ```bash
   git init
   git add .
   git commit -m "Build Deekshant Pranami portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/deekshant-portfolio.git
   git push -u origin main
   ```

   If Git asks you to authenticate, follow GitHub's free sign-in flow. Never put a password or token in the source files.
3. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully. If the first workflow ran before Pages was enabled, re-run it from Actions.
5. The public URL will be `https://<YOUR_GITHUB_USERNAME>.github.io/deekshant-portfolio/`. GitHub will also show the published URL under **Settings → Pages**.

The deployment is not performed automatically from this workspace: you must push the project to a GitHub account you control and enable Pages. No public URL exists until that deployment succeeds.

## Update the portfolio later

- **Profile text, roles, skills, tools, education and work highlights:** edit the relevant data and markup in `src/App.jsx`.
- **Colour, spacing, typography and responsive layout:** edit `src/styles.css`.
- **CV file:** replace `public/Deekshant-Pranami-CV.pdf` with the revised PDF, keeping the same filename (or update the filename used by the download links in `src/App.jsx`).
- **Page title and search/social preview text:** edit the `<title>` and meta tags in `index.html`.
- After changes, run `npm run build`, then commit and push to `main`. GitHub Actions will redeploy the site.

## Project files

```text
.
├── .github/workflows/deploy.yml  # Free GitHub Pages deployment workflow
├── public/
│   ├── Deekshant-Pranami-CV.pdf  # Original CV download
│   └── favicon.svg
├── src/
│   ├── App.jsx                   # Portfolio content and interactions
│   ├── main.jsx                  # React entry point
│   └── styles.css                # Responsive design and animations
├── index.html
├── package.json
└── vite.config.js
```
