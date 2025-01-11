import React from "react";
import "./App.css";
import Links from "./components/Links.jsx";
import Footer from "./components/Footer.jsx";
import { MdEmail } from "react-icons/md";
import { AiFillSun } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";
import { SiUmami } from "react-icons/si";
import { HiMiniKey } from "react-icons/hi2";

const userData = {
  name: "UmmIt 🐧",
  bio: "This website provides all the information about my social media in a Linktree-like style. The site is built using React, Tailwind CSS, and DaisyUI.",
  mail_address: "hi@ummit.dev",
  imagePaths: {
    on: "/cute-2.jpg",
    off: "/cute.jpg"
  },
  repo: "https://github.com/UmmItC/Links",
  umami_share_url: "https://cloud.umami.is/share/mLbSeRhkcLXWcdPZ/links.ummit.dev",
  gpg_key: "https://links.ummit.dev/info/UmmIt.gpg",
};

const socialButtons = [
  {
    icon: "mail",
    url: `mailto:${userData.mail_address}`
  },
  {
    icon: "umami",
    url: `${userData.umami_share_url}`
  },
  {
    icon: "gpg",
    url: `${userData.gpg_key}`
  }
];

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button className="btn btn-circle btn-ghost">
          <a 
            href={userData.repo}
            target="_blank"
          >
            <FaCode className="inline-block w-7 h-7 stroke-current"/>
          </a>
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{userData.name}</a>
      </div>
      <div className="navbar-end">
        <div className="px-2">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input type="checkbox" className="theme-controller" value="light" />

            <AiFillSun className="swap-off fill-current w-10 h-10"/>
            <IoMoon className="swap-on fill-current w-10 h-10" />

          </label>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <label className="swap swap-flip text-9xl pb-5 mt-20">
              <input type="checkbox" />
              <div className="swap-on">
                <img className="rounded-full" width="150" height="150" src={userData.imagePaths.on} alt="Arch Linux" />
              </div>
              <div className="swap-off">
                <img className="rounded-full" width="150" height="150" src={userData.imagePaths.off} alt="Gentoo" />
              </div>
            </label>

            <h1 className="text-5xl font-bold">{userData.name}</h1>

            <p className="py-6">{userData.bio}</p>

            <div className="flex flex-wrap justify-center">
              {socialButtons.map((button, index) => (
                <div key={index} className="px-1">
                  <a className="btn btn-ghost btn-circle fill-stroke text-gray-500 hover:text-blue-500" href={button.url} target="_blank">
                    {button.icon === "mail" && (
                      <MdEmail className="h-8 w-8"/>
                    )}
                    {button.icon === "umami" && (
                      <SiUmami className="h-8 w-8"/>
                    )}
                    {button.icon === "gpg" && (
                      <HiMiniKey className="h-8 w-8"/>
                    )}
                  </a>
                </div>
              ))}
            </div>
            <Links/>
            
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
