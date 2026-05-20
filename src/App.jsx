// src/App.jsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import  Home  from "./components/Home.jsx";
import Layout from "./components/layout/Layout"
import { About, ContactPage } from "./pages";
import PageNotFound from "./pages/PageNotFound";
import ExperiencePage from "./pages/ExperiencePage";
// Project pages are intentionally hidden from routing per request.
// import ProjectsPage from "./pages/ProjectsPage";
// import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<ExperiencePage />} />
        {/* <Route path="projects" element={<ProjectsPage />} /> */}
        {/* <Route path="projects/:slug" element={<ProjectDetail />} /> */}
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
