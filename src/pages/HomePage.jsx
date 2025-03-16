import React from "react";
import Links from "../components/Links";
import { HiMiniKey } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { SiUmami } from "react-icons/si";

const HomePage = ({ userData, socialButtons }) => {
  const handleGPGClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(userData.gpg_key);
      const text = await response.text();
      document.getElementById("gpg_modal").showModal();
    } catch (error) {
      console.error("Error fetching GPG key:", error);
    }
  };

  return (
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
  );
};

export default HomePage;
