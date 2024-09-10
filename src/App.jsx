import {
  AboutPage,
  // SingleProjectPage,
  ProjectsPage,
  ContactPage,
  Home,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import AppProvider from "./ContextAPI";
import SocialsLinkIcons from "./components/features/SocialsLinkIcons";
import PageLinkIcons from "./components/features/PageLinkIcons";

// $ Provide a Layout Componet to wrap around the Routes for consistant styling accross all pages.
// import Layout from "./components/Layout";

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <SocialsLinkIcons />
      <PageLinkIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="/projects/project" element={<SingleProjectPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
