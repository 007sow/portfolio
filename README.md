# Sowmith's Developer Portfolio

A modern, React + Vite powered portfolio to showcase my work, skills and experience.  
The design takes inspiration from minimal dark UIs, with playful animations and pastel-colour project cards.

---

## Features

• **Animated sections** – smooth entrance / scroll animations via Framer-Motion.  
• **Responsive navigation** – adaptive desktop bar & hamburger menu (auto-closes on scroll).  
• **Projects gallery** – staggered two-column layout with pastel backgrounds and ImageKit-optimised thumbnails.  
• **Project detail pages** – image carousel, tech stack, features list, GitHub / live-site links.  
• **Light / Dark theme switcher** – persisted to `localStorage`.  
• **Image optimisation** – all assets are delivered through ImageKit for blazing-fast load times.

---

## Tech Stack

| Layer | Tech |
| ----- | ---- |
| Front-end | React 18, Vite |
| Styling & UI | Tailwind CSS, Framer Motion, React-Icons |
| Images | `imagekitio-react` |
| Misc. | React Router v6, clsx |

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/SowmithSripadi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Environment variables**  
   Create a `.env` (or `.env.local`) at project root and add your ImageKit endpoint:
   ```bash
   VITE_IK_URL_ENDPOINT=https://ik.imagekit.io/your_id
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` (default Vite port).

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

---

## Folder Structure

```
src/
 ├─ components/    // reusable UI blocks
 ├─ pages/         // routed pages (Home, About, Projects, …)
 ├─ config/        // data sources (projects, images)
 ├─ hooks/         // custom React hooks
 ├─ utils/         // helpers & class-name utils
 └─ main.jsx       // app entry point
```

---

## Screenshots

### Projects Gallery
![Projects](HomeScreenshot.png)

### Project Detail
![Project Detail](HomeScreenshot.png)

*(replace with fresh screenshots when available)*

---

## License

MIT © Sowmith Sripadi




