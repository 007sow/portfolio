// src/config/ProjectsData.js
// Project configuration used by the Projects gallery and detail pages.
// Feel free to extend / adjust the data model as your portfolio grows.

import {
  socialCartImages,
  triedAndTestedImages,
  todoImages,
  tictactoe,
  passwordGenerator,
  currencyConverter,
} from "./ImagesData.js";

// Each project should have a unique "slug" – this will be used in the URL.
// A cover image can be provided explicitly or will fall back to the first
// entry in the images array.
export const projects = [
  {
    slug: "social-cart",
    name: "Social Cart",
    year: 2024,
    categories: ["Development"],
    images: socialCartImages,
    // Optional – if omitted we will use the first image in `images`
    cover: socialCartImages[0]?.src,
    roles: "Full-stack Developer",
    client: "Personal Project",
    technologies: ["React", "Redux", "Socket.io", "MongoDB"],
    overview:
      "Social Cart is a full-stack e-commerce prototype that turns shopping into a shared experience. Users browse a product catalogue, generate a shareable session link and shop collaboratively in real time — every cart change, quantity update and chat message is synced in milliseconds through Socket.io. JWT-based authentication, a two-hour session lifecycle with automatic fallback to personal carts, and an admin dashboard for inventory management round out the platform. The stack is React + Redux Toolkit on the client and Express + MongoDB on the server, with Cloudinary handling media uploads.",
    features: [
      // Real-time & collaboration
"Instant cart synchronisation for every add / update / delete via Socket.io",
"Live in-session chat with user-presence indicator and real-time user-count broadcasts",
"One-click shareable link to invite a friend; collaborative session auto-expires after 2 hours (TTL index) and gracefully falls back to personal carts",
// Shopping & catalogue
"Responsive product catalogue with category and brand filters, price sorting and banner sliders",
"Detailed product modal and plus/minus quantity controls with immediate price recalculation",
"Persistent cart for authenticated users—even outside collaborative sessions",
// Admin & data
"Admin dashboard for full CRUD on products, including Cloudinary image uploads and stock management",
"Optimised MongoDB schema with indexed product references and TTL-managed sessions for fast queries",
// Auth & security
"Secure JWT authentication (register, login, logout) stored in http-only cookies",
"Quick 'Test User' button for frictionless demo access",
// UX & tooling
"Redux Toolkit state management with optimistic updates and toast notifications",
"Tailwind CSS + shadcn-ui for a modern, accessible, fully-responsive interface",
"Environment-based configuration (Vite + dotenv) with separate client and server packages",
"Modular Express API with well-separated controllers for auth, admin, shop and session routes",
    ],
    links: {
      website: "coming soon",
      github: "https://github.com/SowmithSripadi/SocialCart",
    },
    bgColor: "#F9F4CE", // light pastel yellow
  },
  {
    slug: "tried-and-tested",
    name: "Tried And Tested",
    year: 2024,
    categories: ["Development", "Design"],
    images: triedAndTestedImages,
    cover: triedAndTestedImages[0]?.src,
    roles: "Full-stack Developer",
    client: "Personal Project",
    technologies: ["React", "Node.js", "MongoDB"],
    overview:
    "End-to-end community blogging platform for sharing real-world tips & solutions. Users write posts in a rich-text editor, upload images (or let the AI auto-generate contextual visuals), and instantly publish them to a responsive, dark-mode-ready interface. The Express/MongoDB REST API, secured with Clerk authentication, handles content, comments, and user data while ImageKit optimises all media in real-time.",
  features: [
    "Rich-text editor (React-Quill) with drag-and-drop ImageKit uploads & live progress",
    "AI-generated contextual images for every post",
    "Secure Clerk authentication plus webhook-based user-data sync",
    "RESTful Node/Express API with MongoDB & SEO-friendly slug generation",
    "Dark- / light-mode toggle with persistent preference",
    "Search, category filtering & featured-post spotlight for quick discovery",
    "Comment framework & credibility-score groundwork for community trust",
    "Responsive Tailwind-powered UI, fully optimised and lazy-loaded images"
  ],
    links: {
      website: "coming soon",
      github: "https://github.com/SowmithSripadi/TriedandTested",
    },
    bgColor: "#FDE9F2", // light pastel pink
  },
  {
    slug: "todo-app",
    name: "To Do App",
    year: 2023,
    categories: ["Development"],
    images: todoImages,
    cover: todoImages[0]?.src,
    roles: "Front-end Dev",
    client: "Personal Project",
    technologies: ["HTML", "CSS", "JavaScript"],
    overview:
      "A minimal, themeable to-do list with dark-mode and persistent storage via localStorage.",
    features: [
      "Add / remove / complete tasks",
      "Dark mode toggle",
      "Persists to localStorage",
    ],
    links: {
      website: "https://todoapp-darkmode.netlify.app",
      github: "https://github.com/SowmithSripadi/TodoApp",
    },
    bgColor: "#EAF3FF", // light pastel blue
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    year: 2023,
    categories: ["Development"],
    images: tictactoe,
    cover: tictactoe[0]?.src,
    roles: "Front-end Dev",
    client: "Personal Project",
    technologies: ["HTML", "CSS", "JavaScript"],
    overview:
      "Classic Tic-Tac-Toe game with polished UI and dark-mode support.",
    features: [
      "Player vs Player with win detection",
      "Responsive design",
      "Dark mode",
    ],
    links: {
      website: "https://tictactoeminimal.netlify.app",
      github: "https://github.com/SowmithSripadi/Tic-Tac-Toe",
    },
    bgColor: "#FBEFD4", // light pastel orange
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    year: 2023,
    categories: ["Development"],
    images: passwordGenerator,
    cover: passwordGenerator[0]?.src,
    roles: "Front-end Dev",
    client: "Personal Project",
    technologies: ["React"],
    overview:
      "Generate secure passwords with custom length and character sets. Built in React.",
    features: [
      "Copy to clipboard",
      "Custom length / charset",
    ],
    links: {
      website: "https://passwordtextgenerator.netlify.app/",
      github: "https://github.com/SowmithSripadi/React-projects",
    },
    bgColor: "#E6E4FF", // light pastel purple
  },
  {
    slug: "currency-converter",
    name: "Currency Converter",
    year: 2023,
    categories: ["Development"],
    images: currencyConverter,
    cover: currencyConverter[0]?.src,
    roles: "Front-end Dev",
    client: "Personal Project",
    technologies: ["React"],
    overview:
      "Convert between currencies in real-time using live exchange rates.",
    features: [
      "Live rate fetching",
      "Swap currencies",
    ],
    links: {
      website: "https://currencyconvertermoney.netlify.app",
      github: "https://github.com/SowmithSripadi/React-projects",
    },
    bgColor: "#DDECF8", // light pastel light-blue
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug); 
