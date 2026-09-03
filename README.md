# Jivan Shankarrao Dharpure — Personal Agriculture Portfolio

A premium, modern, responsive personal portfolio website built for **Jivan Shankarrao Dharpure** (Field Development Officer at Zydex Industries Pvt. Ltd.).

---

## 📸 Profile & Verified Data Included
- **Portrait**: Embedded verified candidate photo (`/profile-photo.jpg`)
- **FDO Role**: Zydex Industries Pvt. Ltd. (1 July 2026 — Present, Rajura, Chandrapur)
- **Education**: B.Sc. Agriculture (Hons.) — 7.80 CGPA (April 2026), Diploma in Ag — 74.14% (2022), 10th — 82.40% (2020), MS-CIT — 97% (July 2022)
- **RAWE**: 28 May 2025 — 31 Aug 2025
- **NSS Camp**: 11 Dec 2024 — 17 Dec 2024
- **Ketki Seedlings Nursery**: 1 Sept 2025 — 30 Sept 2025
- **Academic Reference**: Dr. Sanjeevani Gondane (Assistant Professor in Horticulture, Bajaj College of Agriculture, Pipri-Wardha)

---

## 🚀 How to Host / Deploy to GitHub (`Suraj-Pathade`)

To publish this portfolio to your GitHub account (`Suraj-Pathade`), execute the following commands in terminal:

### Step 1: Create a GitHub Repository
Create a new public repository on GitHub named `jivan-dharpure-portfolio` under your GitHub account **`Suraj-Pathade`**.

### Step 2: Push Local Repository to GitHub
```bash
git remote add origin https://github.com/Suraj-Pathade/jivan-dharpure-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
Run the automated deployment command:
```bash
npm run deploy
```

This will automatically build the static assets into `dist/` and push them to the `gh-pages` branch.

### Step 4: Enable GitHub Pages in Repo Settings
1. Go to your repository on GitHub: `https://github.com/Suraj-Pathade/jivan-dharpure-portfolio`
2. Click **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Set branch to **`gh-pages`** / **`(root)`** and click **Save**.

Your live website will be hosted at:
**`https://suraj-pathade.github.io/jivan-dharpure-portfolio/`**

---

## 🛠 Local Development Commands

- `npm run dev` — Start local development server
- `npm run build` — Build production bundle to `dist/`
- `npm run preview` — Preview local build
- `npm run deploy` — Deploy `dist/` to GitHub Pages
