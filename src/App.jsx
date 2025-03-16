import React, { useState } from "react";
import "./App.css";

import Links from "./components/Links.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundWallpaper from "./components/BackgroundWallpaper.jsx";

import { MdEmail } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { SiUmami } from "react-icons/si";
import { HiMiniKey } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FiCopy, FiDownload } from "react-icons/fi";

const userData = {
  name: "UmmIt{ArchUser}",
  bio: "A quirky tech geek, Arch Linux user and open-source lover from Hong Kong, a cyber student with a hobby in hacking and penetration testing, and a Linktree-like site.",
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

function Navbar() {
  return (
    <div className="bg-background/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-md transition-colors">
      <div className="flex-1">
        <a href="/" className="text-xl font-semibold hover:text-myPink1 transition-colors duration-300">UmmIt</a>
      </div>
      <div className="flex-none gap-3 flex items-center">
        <a href="/blog" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">Blog</a>
        <a href="/projects" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">Projects</a>
        <a href="/gear" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">Gear</a>
        <a href="/about" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">About</a>
        <a href={userData.repo} target="_blank" rel="noopener noreferrer" className="px-3 flex items-center">
          <FaCode className="inline-block w-5 h-5 hover:text-myPink1 transition-colors duration-300 font-bold" />
        </a>
      </div>
    </div>
  );
}

function App() {
  const [gpgContent, setGPGContent] = useState("");

  const handleGPGClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(userData.gpg_key);
      const text = await response.text();
      setGPGContent(text);
      document.getElementById("gpg_modal").showModal();
    } catch (error) {
      console.error("Error fetching GPG key:", error);
    }
  };

  const handleDownload = () => {
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
      
      <Navbar />
      <div className="hero min-h-screen bg-transparent flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <label className="swap swap-flip text-9xl pb-5 mt-20">
              <input type="checkbox" />
              <div className="swap-on">
                <img
                  className="rounded-full"
                  width="150"
                  height="150"
                  src={userData.imagePaths.on}
                  alt="Arch Linux"
                />
              </div>
              <div className="swap-off">
                <img
                  className="rounded-full"
                  width="150"
                  height="150"
                  src={userData.imagePaths.off}
                  alt="Gentoo"
                />
              </div>
            </label>
            <h1 className="text-5xl font-bold">{userData.name}</h1>
            <p className="py-6">{userData.bio}</p>
            <div className="flex flex-wrap justify-center">
              {socialButtons.map((button, index) => (
                <div key={index} className="px-1 hover:text-myPink1 transition-transform duration-200 transform hover:scale-105">
                  <a
                    className="hover:text-myPink1"
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {button.icon === "mail" && <MdEmail className="h-8 w-8" />}
                    {button.icon === "umami" && <SiUmami className="h-8 w-8" />}
                  </a>
                </div>
              ))}
              <div className="px-1 hover:text-myPink1 transition-transform duration-200 transform hover:scale-105">
                <button
                  onClick={handleGPGClick}
                  className="hover:text-myPink1"
                >
                  <HiMiniKey className="h-8 w-8" />
                </button>
              </div>
            </div>
            <Links />
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal Component */}
      <dialog id="gpg_modal" className="modal">
        <div className="modal-box bg-base-100 rounded-lg p-11 w-full max-w-2xl max-h-[75vh] overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold italic">
              ❯ curl https://links.ummit.dev/info/UmmIt.gpg | less
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                className="btn btn-ghost btn-sm tooltip tooltip-top"
                data-tip="Download GPG key"
              >
                <FiDownload className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById("gpg_modal").close()}
                className="btn btn-ghost btn-sm tooltip tooltip-top"
                data-tip="Close"
              >
                <IoMdClose className="w-5 h-5" />
              </button>
            </div>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-sm bg-base-200 p-4 rounded-lg overflow-auto max-w-full break-words">
            {gpgContent}
          </pre>
        </div>
      </dialog>
    </div>
  );
}

export default App;
