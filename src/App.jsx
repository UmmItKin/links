import React, { useState } from "react";
import "./App.css";
import Project from "./components/Project.jsx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const userData = {
  name: "UmmIt :P",
  bio: "Further information about me can be found on this site. It includes details of my skills, contacts and other relevant information.",
  gitlab_url: "https://gitlab.com/UmmIt",
  github_url: "https://github.com/UmmItC",
  mail_address: "hi@ummit.dev",
  imagePaths: {
    on: "/archlinux.svg",
    off: "/gentoo.svg",
  },
};

const socialButtons = [
  { icon: "github", url: userData.github_url },
  { icon: "gitlab", url: userData.gitlab_url },
  { icon: "mail", url: `mailto:${userData.mail_address}` },
];

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{userData.name}</a>
      </div>
      <div className="navbar-end">
        <div className="px-2">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input type="checkbox" className="theme-controller" value="light" />

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showHCaptcha, setShowHCaptcha] = useState(false);

  const handleMailIconClick = () => {
    setShowHCaptcha(true);
  };

  const handleVerificationSuccess = (token, ekey) => {
    console.log("hCaptcha verification successful");
    setShowHCaptcha(false);
    const tempAnchor = document.createElement("a");
    tempAnchor.href = `mailto:${userData.mail_address}`;
    tempAnchor.click();
    tempAnchor.remove();
  };

  return (
    <div>
      <Navbar />

      {showHCaptcha && (
        <HCaptcha
          sitekey="your_site_key"
          theme="dark"
          onVerify={handleVerificationSuccess}
        />
      )}

      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <label className="swap swap-flip text-9xl pb-5">
              <input type="checkbox" />
              <div className="swap-on">
                <img
                  width="150"
                  height="150"
                  src={userData.imagePaths.on}
                  alt="Arch Linux"
                />
              </div>
              <div className="swap-off">
                <img
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
                <div key={index} className="px-1">
                  {button.icon !== "mail" && (
                    <a
                      className="btn btn-ghost btn-circle fill-stroke text-gray-500 hover:text-blue-500"
                      href={button.url}
                      target="_blank"
                    >
                      {button.icon === "github" && (
                        <svg
                          className="h-8 w-8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      )}
                      {button.icon === "gitlab" && (
                        <svg
                          className="h-8 w-8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                        </svg>
                      )}
                    </a>
                  )}
                  {button.icon === "mail" && (
                    <a className="btn btn-ghost btn-circle fill-stroke text-gray-500 hover:text-blue-500">
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={handleMailIconClick}
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Project />
    </div>
  );
}

export default App;
