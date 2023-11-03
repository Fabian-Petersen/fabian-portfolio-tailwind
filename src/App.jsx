import {
  AboutPage,
  SingleProjectPage,
  ProjectsPage,
  ContactPage,
  Home,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import AppProvider from "./ContextAPI";
import SocialsLinkIcons from "./components/features/SocialsLinkIcons";
import PageLinkIcons from "./components/features/PageLinkIcons";

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
        <Route path="/projects/project" element={<SingleProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
