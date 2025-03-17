import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Links from "./components/Links.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundWallpaper from "./components/BackgroundWallpaper.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import GearPage from "./pages/GearPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import { MdEmail } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { SiUmami } from "react-icons/si";
import { HiMiniKey } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const userData = {
  name: "UmmIt{ArchUser}",
  bio: "Cyber Security Student / Arch Linux User / Open Source Lover",
  mail_address: "hi@ummit.dev",
  imagePaths: {
    on: "/cute-2.jpg",
    off: "/cute.jpg"
  },
  repo: "https://github.com/UmmItC/Links",
  umami_share_url: "https://cloud.umami.is/share/mLbSeRhkcLXWcdPZ/links.ummit.dev",
  gpg_key: "https://links.ummit.dev/info/UmmIt.gpg",
  wallpaper: "https://github.com/UmmItC/wallpaper/blob/master/%E6%8E%A8%E3%81%97%E3%81%AE%E5%AD%90/%E5%B0%8F%E6%84%9B/1355637.jpeg?raw=true",
};

function App() {
  const [gpgContent, setGPGContent] = useState("");
  const [isGpgLoaded, setIsGpgLoaded] = useState(false);

  // Fetch GPG key when the app loads
  useEffect(() => {
    fetchGPGKey();
  }, []);

  // Fetch GPG key from the server
  const fetchGPGKey = async () => {
    try {
      const response = await fetch(userData.gpg_key);
      if (response.ok) {
        const text = await response.text();
        setGPGContent(text);
        setIsGpgLoaded(true);
      } else {
        console.error("Failed to fetch GPG key:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching GPG key:", error);
    }
  };

  // Handle opening the GPG modal
  const handleGPGClick = (e) => {
    if (e) e.preventDefault();
    
    // If GPG content isn't loaded yet, try to fetch it again
    if (!isGpgLoaded) {
      fetchGPGKey();
    }
    
    document.getElementById("gpg_modal").showModal();
  };

  const handleDownload = () => {
    if (!gpgContent) {
      console.error("Cannot download: GPG content is empty");
      return;
    }
    
    const blob = new Blob([gpgContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "UmmIt.gpg";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const socialButtons = [
    {
      icon: "mail",
      url: `mailto:${userData.mail_address}`
    },
    {
      icon: "umami",
      url: `${userData.umami_share_url}`
    }
  ];

  return (
    <div>
      <BackgroundWallpaper imageUrl={userData.wallpaper} />
      
      <Navbar userData={userData} />
      
      <Routes>
        <Route path="/" element={<HomePage userData={userData} socialButtons={socialButtons} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/gear" element={<GearPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />

      {/* Modal Component */}
      <dialog id="gpg_modal" className="modal">
        <div className="modal-box bg-transparent rounded-lg p-11 w-full max-w-2xl max-h-[75vh] overflow-auto backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-myPink1 transition-all duration-650 hover:shadow-lg hover:shadow-myPink1/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold italic">
              ❯ curl https://links.ummit.dev/info/UmmIt.gpg | less
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                className="bg-transparent border border-gray-700/30 rounded-lg p-2 tooltip tooltip-top"
                data-tip="Download GPG key"
              >
                <FiDownload className="w-5 h-5" />
              </button>

              <button
                onClick={() => document.getElementById("gpg_modal").close()}
                className="bg-transparent border border-gray-700/30 rounded-lg p-2 tooltip tooltip-top"
                data-tip="Close"
              >
                <IoMdClose className="w-5 h-5" />
              </button>
            </div>
          </div>

          <pre className="whitespace-pre-wrap font-mono text-sm bg-transparent p-4 rounded-lg overflow-auto max-w-full break-words">
            {gpgContent || "Loading GPG key..."}
          </pre>
        </div>
      </dialog>
    </div>
  );
}

export default App;
