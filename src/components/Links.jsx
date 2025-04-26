import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiKofi, SiReadthedocs, SiStatuspal } from "react-icons/si";
import { GrArchlinux, GrBlog } from "react-icons/gr";

const linksData = [
  { label: "Arch User Repository", url: "https://aur.archlinux.org/account/UmmIt", icon: <GrArchlinux className="w-5 h-5" />, alt: "@UmmIt" },
  { label: "Github", url: "https://github.com/UmmItC", icon: <FaGithub className="w-5 h-5" />, alt: "@UmmItC" },
  { label: "Ko-fi", url: "https://ko-fi.com/UmmIt", icon: <SiKofi className="w-5 h-5" />, alt: "@UmmIt" }, 
  { label: "Blog", url: "https://blog.ummit.dev", icon: <GrBlog className="w-5 h-5" />, alt: "blog.ummit.dev" },
  { label: "GPU-Passthru", url: "https://gpu-passthru.ummit.dev", icon: <SiReadthedocs className="w-5 h-5" />, alt: "gpu-passthru.ummit.dev" },
  { label: "Monitors", url: "https://status.ummit.dev", icon: <SiStatuspal className="w-5 h-5" />, alt: "status.ummit.dev"},
];

function Links() {
  return (
    <div className="flex flex-col items-center space-y-3 mt-8 w-full max-w-md mx-auto">
      {linksData.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-5 py-3 text-gray-100 bg-gray-800/50 backdrop-blur-md rounded-xl 
                    transition-all duration-300 transform hover:bg-gray-700/70 hover:scale-102 hover:translate-y-px
                    focus:outline-none focus:ring-2 focus:ring-myPink1 focus:ring-opacity-50 
                    flex items-center justify-between border border-gray-700/30 hover:border-myPink1 hover:text-myPink1
                    shadow-lg hover:shadow-myPink1/20"
        >
          <div className="flex items-center">
            <div className="text-myPink1 mr-3">
              {link.icon}
            </div>
            <span className="font-medium tracking-wide">{link.label}</span>
          </div>
          <span className="text-gray-400 text-sm font-light">{link.alt}</span>
        </a>
      ))}
    </div>
  );
}

export default Links;
