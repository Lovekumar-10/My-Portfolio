import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/projects" element={<ProjectsSection />} />

        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
      
    </BrowserRouter>
  );
}
