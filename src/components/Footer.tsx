import { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoGitBranch } from 'react-icons/io5';
import { AiOutlineLinux } from "react-icons/ai";
import { GrArchlinux } from "react-icons/gr";
import { VscHeartFilled } from "react-icons/vsc";
import { IoImageOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  const [commitHash, setCommitHash] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const fetchCommitHash = async () => {
      try {
        const response = await fetch('https://links.ummit.dev/commit_hash');
        if (response.ok) {
          const text = await response.text();
          setCommitHash(text.trim());
        } else {
          console.error('Failed to fetch commit hash:', response.statusText);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching commit hash:', error.message);
        } else {
          console.error('Error fetching commit hash:', error);
        }
      }
    };
    fetchCommitHash();
  }, []);
  
  return (
    <div className="w-full mt-16">
      <footer className="bg-transparent backdrop-blur-lg py-8 px-6 transition-all duration-300">
        <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
          <div className="flex flex-row gap-4 mb-6 flex-wrap justify-center">
                          <a 
                href="/og-card-image-preview.html"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                          border border-gray-700/30 rounded-full
                          transition-all duration-300 hover:text-primary hover:scale-105
                          hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50
                          text-gray-300 text-bold font-medium tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoImageOutline className="text-primary" />
                <span>OG Image Generator</span>
              </a>
            
            {commitHash && (
              <a 
                href={`https://github.com/UmmItC/Links/commit/${commitHash}`}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                          border border-gray-700/30 rounded-full
                          transition-all duration-300 hover:text-primary hover:scale-105
                          hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50
                          text-gray-300 text-bold font-medium tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoGitBranch className="text-primary transition-transform duration-300 hover:rotate-90" />
                <span>{commitHash.substring(0, 7)}</span>
              </a>
            )}
          </div>
          
          <div className="text-gray-400 my-4 transition-all duration-300 hover:text-gray-300">
            <p className="text-lg font-light flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span>Made with</span>
              <span className="inline-flex gap-4 items-center">
                <FaReact className="text-blue-400 text-2xl transition-all duration-500 hover:rotate-180 hover:scale-110" />
                <SiTailwindcss className="text-teal-400 text-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <AiOutlineLinux className="text-yellow-400 text-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <GrArchlinux className="text-blue-400 text-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
              </span>
              and <span className="text-red-500 text-2xl"><VscHeartFilled /></span>
            </p>
          </div>
          
          <p className="text-sm text-gray-400 mt-6 font-light tracking-wide hover:text-gray-100 transition-colors duration-300">
            &copy; {currentYear} Ummlt. GPLv3 License
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
