import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Links from "./components/Links.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundWallpaper from "./components/BackgroundWallpaper.jsx";
import Navbar from "./components/Navbar.jsx";
import GPGModal from "./components/GPGModal";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import GearPage from "./pages/GearPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import { userData, socialButtons } from "./config/userData";
import { useGPG } from "./hooks/useGPG";

function App() {
  const { gpgContent, handleDownload } = useGPG();

  const handleGPGClick = (e) => {
    if (e) e.preventDefault();
    document.getElementById("gpg_modal").showModal();
  };

  return (
    <div>
      <BackgroundWallpaper imageUrl={userData.wallpaper} />
      
      <Navbar userData={userData} />
      
      <Routes>
        <Route path="/" element={<HomePage userData={userData} socialButtons={socialButtons} onGPGClick={handleGPGClick} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/gear" element={<GearPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />

      <GPGModal 
        gpgContent={gpgContent}
        onClose={() => document.getElementById("gpg_modal").close()}
        onDownload={handleDownload}
      />
    </div>
  );
}

export default App;
