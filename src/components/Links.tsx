import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiBuymeacoffee, SiReadthedocs, SiStatuspal } from "react-icons/si";
import { GrArchlinux, GrBlog } from "react-icons/gr";

interface LinkData {
  label: string;
  url: string;
  icon: React.ReactNode;
  alt: string;
}

const linksData: LinkData[] = [
  { label: "AUR", url: "https://short.ummit.dev/i-use-arch-btw", icon: <GrArchlinux className="w-5 h-5" />, alt: "@UmmIt" },
  { label: "Github", url: "https://short.ummit.dev/github", icon: <FaGithub className="w-5 h-5" />, alt: "@UmmItC" },
  { label: "Buy me a Coffee", url: "https://short.ummit.dev/buy-me-a-coffee", icon: <SiBuymeacoffee className="w-5 h-5" />, alt: "@UmmIt" }, 
  { label: "Blog", url: "https://short.ummit.dev/blog-old", icon: <GrBlog className="w-5 h-5" />, alt: "blog.ummit.dev" },
  { label: "Passthru", url: "https://short.ummit.dev/gpu-passthru", icon: <SiReadthedocs className="w-5 h-5" />, alt: "gpu.passthru.info" },
  { label: "Status", url: "https://short.ummit.dev/upptime", icon: <SiStatuspal className="w-5 h-5" />, alt: "status.ummit.dev"},
];

const Links: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-3 mt-8 w-full max-w-md mx-auto">
      {linksData.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full px-6 py-4 flex items-center justify-center gap-4
                     bg-gray-900/25 backdrop-blur-md rounded-xl border border-gray-700/40
                     transition-all duration-300 
                     hover:bg-gray-800/30 hover:text-primary hover:scale-102 hover:border-primary/50
                     hover:shadow-lg hover:shadow-primary/20
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
                     text-gray-100"
        >
          <div className="text-primary text-2xl transition-transform duration-500 group-hover:rotate-30">
            {link.icon}
          </div>
          <span className="font-medium tracking-wide">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default Links;
