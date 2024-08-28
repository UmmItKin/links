import React from 'react';

import { FaMastodon, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaSquareThreads, FaGitlab } from "react-icons/fa6";
import { SiHugo, SiUpptime, SiMyanimelist, SiCodeberg } from "react-icons/si";
import { BsGpuCard } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

const linksData = [

  { label: "Codeberg", url: "https://codeberg.org/UmmIt", icon: <SiCodeberg className="w-5 h-5 mr-2" />, alt: "@UmmIt" },
  { label: "Gitlab", url: "https://gitlab.com/UmmIt", icon: <FaGitlab className="w-5 h-5 mr-2" />, alt: "@UmmIt" },
  { label: "Github", url: "https://github.com/UmmItC", icon: <FaGithub className="w-5 h-5 mr-2" />, alt: "@UmmItC" },

  { label: "Personal Blog", url: "https://blog.ummit.dev", icon: <SiHugo className="w-5 h-5 mr-2" />, alt: "https://blog.ummit.dev" },
  { label: "InfoSec", url: "https://infosec.ummit.dev", icon: <SiHugo className="w-5 h-5 mr-2" />, alt: "https://infosec.ummit.dev" },
  { label: "GPU-Passthrough Docs", url: "https://github.com/UmmItC/GPU-Passthrough", icon: <BsGpuCard className="w-5 h-5 mr-2" />, alt: "In development"},
  { label: "Upptime Status", url: "https://status.ummit.dev", icon: <SiUpptime className="w-5 h-5 mr-2"/>, alt: "https://status.ummit.dev"},
 
  { label: "Instagram", url: "https://instagram.com/@ltas.sh", icon: <BiLogoInstagramAlt className="w-5 h-5 mr-2" />, alt: "@ltas.sh" },
  { label: "Threads", url: "https://threads.net/ltas.sh", icon: <FaSquareThreads className="w-5 h-5 mr-2" />, alt: "@ltas.sh" },
  { label: "Mastodon", url: "#", icon: <FaMastodon className="w-5 h-5 mr-2" />, alt: "not yet" },
  { label: "Youtube", url: "https://youtube.com/@PonnBOuO", icon: <FaYoutube className="w-5 h-5 mr-2" />, alt: "@PonnBOuO" },
  
  { label: "MyAnimeList", url: "https://myanimelist.net/profile/lovepenguin/", icon: <SiMyanimelist className="w-5 h-5 mr-2" />, alt: "@lovepenguin" },

];

function Links() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {linksData.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md px-4 py-2 text-gray-100 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-between"
        >
          <div className="flex items-center">
            {link.icon}
            <span className="ml-2">{link.label}</span>
          </div>
          <span className="text-gray-400 text-sm">{link.alt}</span>
        </a>
      ))}
    </div>
  );
}

export default Links;
