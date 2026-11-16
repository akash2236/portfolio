# Vemulapalli Akash — Personal Engineering Portfolio

A production-grade, highly interactive personal portfolio website for **Vemulapalli Akash** — AI/ML Engineer, Full Stack Developer, and Security-Focused Backend Developer.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, designed for technical hiring managers, engineering recruiters, hackathon judges, and collaborators.

---

## 🌟 Architecture & Core Features

### 1. Brand Identity & Hero Section
- **Editorial Design**: Custom typography pairing Space Grotesk, Inter, and JetBrains Mono.
- **Abstract Computational Canvas**: Canvas particle network with dynamic node proximity lines and subtle dark-theme ambient glows.
- **Highlights Strip**: Verified achievements including PRAJWALAN 2026 2nd Place, 3-Month Java Full Stack Internship, AI/ML pipelines, and Security-First Architecture.
- **Direct Actions**: Explore Work, Download Verified Resume (`/resume.pdf`), and Let's Connect.

### 2. Interactive Engineering CLI (Terminal)
- Built-in safe command line emulator accessible via the navbar `CLI` button.
- Commands: `help`, `about`, `skills`, `projects`, `experience`, `achievements`, `contact`, `resume`, `clear`, `exit`.
- Real-time command history, maximize/minimize controls, and keyboard `Esc` listener.

### 3. Technical Skills Explorer
- 6 curated domains:
  1. **Programming Languages**: Python, TypeScript, JavaScript, Java, Rust.
  2. **AI / Machine Learning**: PyTorch, Scikit-Learn, OpenCV, GPT-4 APIs, Groq APIs, LLM Agents, Explainable AI (Grad-CAM++, SHAP, Integrated Gradients), Uncertainty Estimation.
  3. **Full Stack**: React.js (v19), Node.js, FastAPI, Express.js, Flask, Flutter, HTML5, CSS3, Tailwind CSS.
  4. **Cybersecurity**: JWT, AES-256, Ed25519, RBAC, Audit Logging, HIPAA-aligned Design, OOD & Spoof Detection.
  5. **Databases & Cloud**: MongoDB, PostgreSQL, Firebase, Supabase, AWS, Vercel, Render.
  6. **Tools & Concepts**: Git, GitHub, Postman, REST APIs, Microservices, WebRTC, Data Structures & Algorithms.
- Live category tabs and instant text search filtering.
- Realistic proficiency tiers (`Strong`, `Proficient`, `Learning`) — no fabricated percentage meters.

### 4. Featured Project Case Studies
Detailed, deep-dive architectural case studies with interactive step-by-step pipeline diagrams:
- **AI Prior Authorization Assistant** (`COMPLETED`):
  - Healthcare automation converting patient FHIR R4 clinical data into validated authorization requests in 30–60s.
  - Multi-step LLM agent pipeline with an 80% confidence threshold auto-approval and human-in-the-loop triaging.
- **Multimodal Explainable AI Fingerprint Spoofing Detection** (`COMPLETED`):
  - Biometric Presentation Attack Detection combining deep CNNs with 2D FFT, Gabor filters, minutiae, and LBP.
  - Mahalanobis OOD detection, MC Dropout uncertainty, Grad-CAM++, SHAP, and an 8-tab analytics suite.
- **OneHealth: Unified Healthcare Platform** (`IN DEVELOPMENT`):
  - 9 independent FastAPI microservices with JWT, AES-256 encryption, RBAC, WebRTC teleconsultations, and emergency SOS with live GPS tracking.
- **D-Cloud: Decentralized Storage** (`DESIGNING`):
  - Agent-centric P2P storage on a Distributed Hash Table (DHT) using Reed-Solomon erasure coding (>40% node failure resilience) and Ed25519 zero-trust encryption.

### 5. Experience & Campus Leadership
- **Stikbook Private Limited**: Java Full Stack Developer Intern (3 Months) working on live production services and pull request workflows.
- **TEDxSRKR**: Technical Team Lead managing website deployments, Vercel pipelines, and live AV infrastructure.
- **Event Organizing Cell (EOC)**: Running major college conferences for 500+ attendees.
- **BIZ VISION DEMO DAY 2026 (IIC 8.0)**: Guest Mentor on Cost Estimation & Technology Budgeting.

### 6. Honors & Certifications
- **2nd Place Winner**, PRAJWALAN 2026 National Hackathon (100+ competing teams).
- **Certificate of Appreciation**, Cognizant Technoverse Hackathon 2026.
- **Build with AI Bootcamp**, Google for Developers & H2S.
- LetUpgrade Certifications in Prompt Engineering, React.js, GitHub, and Figma.
- TOEFL Certified for international English communication.

### 7. Secure Contact System
- Dual-layer validation: client-side (React Hook Form + Zod) and server-side (`/api/contact` App Router route handler).
- Silent honeypot spam detection.
- Optional email dispatch via Resend (`RESEND_API_KEY`).
- Native `mailto` fallback for direct client communication.

### 8. SEO, Security & Performance
- Full OpenGraph metadata, Twitter cards, and semantic JSON-LD structured data (`Person` & `WebSite` schemas).
- Static sitemap generator (`src/app/sitemap.ts`) and crawler directives (`src/app/robots.ts`).
- Production HTTP security headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- Smooth scroll progress bar, desktop-only custom cursor (disabled on touch devices), and full `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.4.6 (App Router with Turbopack)
- **UI Library**: React 19.3.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with `@theme` design tokens
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form 7 + Zod 4
- **Animation & Motion**: Motion for React & Canvas 2D
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (Next.js Font Optimization)

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (v18.18+ or v20+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/akash2236/akashport.git
cd akashport

# Install dependencies
npm install

# Configure environment variables (optional)
cp .env.local.example .env.local
```

### Running Locally
```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Test
```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio for Vemulapalli Akash"
   git branch -M main
   git remote add origin https://github.com/akash2236/akashport.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `akashport` repository.
4. Framework preset will automatically detect **Next.js**.
5. Add Environment Variables (optional, for email delivery):
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: `aakash.srisai@gmail.com`
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.vercel.app`
6. Click **Deploy**. Vercel will run `npm run build` and publish your portfolio with edge CDN acceleration.

---

## 📄 Resume Management

The portfolio includes a downloadable copy of Akash's verified resume at:
```
public/resume.pdf
```
When updating your resume:
1. Export your new resume as a PDF file.
2. Name the file exactly `resume.pdf`.
3. Overwrite `public/resume.pdf`.
4. Commit and push the changes.

---

## 📬 Contact & Connect

- **Engineer**: Vemulapalli Akash
- **Email**: [aakash.srisai@gmail.com](mailto:aakash.srisai@gmail.com)
- **Phone**: +91 9390875449
- **LinkedIn**: [linkedin.com/in/v-akash9371](https://linkedin.com/in/v-akash9371)
- **GitHub**: [github.com/akash2236](https://github.com/akash2236)
- **Institution**: SRKR Engineering College, Bhimavaram
