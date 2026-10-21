# Developer Portfolio — Shabbir Tatariya

A production-quality developer portfolio website built with **React**, **Vite**, **Semantic HTML5**, **Custom CSS3**, and **Framer Motion**.

Recreated with pixel-perfect visual fidelity to the reference design.

---

## 🚀 Live Demo & Development

### 1. Run Locally
```bash
# Clone or navigate to the project directory
cd /path/to/Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized static build files will be generated in the `dist/` directory.

---

## ⚙️ Centralized Data Configuration

All personal information, headlines, metrics, services, tech stack, featured projects, experience entries, client testimonials, and contact links are stored in a single, centralized configuration file:

👉 **[`src/data/portfolioData.js`](file:///Users/khatri_developer/Documents/Portfolio/src/data/portfolioData.js)**

### Updating Your Personal Information
To change your name, professional title, bio, or availability badge, edit the `personal` object in `src/data/portfolioData.js`:
```javascript
personal: {
  firstName: "Shabbir",
  lastName: "Tatariya",
  title: "Full Stack & Mobile App Developer",
  availabilityBadge: "Available for Remote Work",
  headlineLine1: "Full Stack &",
  headlineLine2: "Mobile App Developer",
  heroDescription: "I build mobile applications, web solutions...",
  stats: [
    { value: "7+", label: "Years\nExperience" },
    { value: "50+", label: "Projects\nCompleted" },
    { value: "10+", label: "Published\nMobile Apps" },
    { value: "100%", label: "Remote\nAvailability" },
  ],
  ...
}
```

### Updating Contact Links & Numbers
In `src/data/portfolioData.js`, update the `contact` object:
```javascript
contact: {
  email: "your.email@example.com",
  phone: "+91 90765 43210",
  location: "Your City, Country",
  whatsappNumber: "919076543210", // International format without +
  whatsappUrl: "https://wa.me/919076543210",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  resumeUrl: "/assets/resume/resume.pdf",
}
```

### Updating Project Details & Images
In `src/data/portfolioData.js`, add or edit entries in the `projects` array:
```javascript
{
  id: "ride-hailing",
  title: "Ride Hailing / Taxi App",
  description: "Passenger, Driver & Admin apps with real-time tracking, bids and payments.",
  image: "/assets/projects/your-project-image.png",
  tags: ["Flutter", "Node.js", "MongoDB"],
  category: "Mobile Apps",
  link: "https://your-project-demo.com",
  github: "https://github.com/yourusername/project",
}
```

### Replacing Assets
Place your images in `public/assets/`:
- **Profile Photo**: `public/assets/profile/about-photo-hd.png`
- **Projects**: `public/assets/projects/`
- **Resume**: `public/assets/resume/resume.pdf`
- **Logos**: `public/assets/logos/`
- **Mockups**: `public/assets/mockups/`

## 🌐 Step-by-Step Netlify Deployment

This project includes [`netlify.toml`](file:///Users/khatri_developer/Documents/Portfolio/netlify.toml) and [`public/_redirects`](file:///Users/khatri_developer/Documents/Portfolio/public/_redirects) for instant zero-config Netlify hosting.

### Method 1: Git-Connected Deployment via GitHub (Recommended)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Deploy portfolio to Netlify"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [app.netlify.com](https://app.netlify.com/) and sign in.
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select **GitHub** and choose your `Portfolio` repository.
5. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Your site will be live on a `*.netlify.app` URL in ~30 seconds!

### Method 2: Instant Drag & Drop (No Git Required)
1. Build the production files:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop your **`dist`** folder into the browser window.
4. Your portfolio is instantly published live!

---

## ☁️ Step-by-Step Cloudflare Pages Deployment

This portfolio is configured for free, high-performance static hosting on **Cloudflare Pages**:

### Option A: Via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
4. Select your portfolio repository.
5. In the **Build configuration** settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**. Cloudflare will build and deploy your site to a global CDN URL (e.g., `https://your-portfolio.pages.dev`).

### Option B: Direct Upload via Wrangler CLI
```bash
# Install Wrangler globally if needed
npm install -g wrangler

# Build the project
npm run build

# Deploy the dist directory
npx wrangler pages deploy dist --project-name=portfolio
```

---

## 📐 Project Structure
```
Portfolio/
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   ├── logos/
│   │   ├── mockups/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── testimonials/
│   ├── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── TechIcons.jsx
│   │   ├── TechStack.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   ├── components.css
│   │   ├── global.css
│   │   └── responsive.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
