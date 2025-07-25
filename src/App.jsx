// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/Hero";  // fixed import name
import Features from "./components/Features";

import Footer from "./components/Footer";
import CvOption from "./pages/CvOption"; // your CV option page
import AcademicCv from "./pages/AcademicCv";
import ProfessionalCv from "./pages/ProfessionalCv";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cvoption" element={<CvOption />} />
        <Route path="/academic" element={<AcademicCv />} />
          <Route path="/professional" element={<ProfessionalCv />} />
      </Routes>
    </Router>
  );
}

export default App;
