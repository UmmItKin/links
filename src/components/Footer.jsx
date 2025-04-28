import React, { useState, useEffect } from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoGitBranch } from 'react-icons/io5';
import { AiOutlineLinux } from "react-icons/ai";
import { GrArchlinux } from "react-icons/gr";
import { VscHeartFilled } from "react-icons/vsc";

function Footer() {
  const [commitHash, setCommitHash] = useState(null);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const fetchCommitHash = async () => {
      try {
        const response = await fetch('https://links.ummit.dev/commit_hash');
        if (response.ok) {
          setCommitHash((await response.text()).trim());
        } else {
          console.error('Failed to fetch commit hash:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching commit hash:', error);
      }
    };
    fetchCommitHash();
  }, []);
  
  return (
    <div className="w-full mt-16">
      <footer className="bg-transparent backdrop-blur-lg py-8 px-6 transition-all duration-300">
        <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
          {commitHash && (
            <a 
              href={`https://github.com/UmmItC/Links/commit/${commitHash}`}
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-transparent backdrop-blur-sm
                        border border-gray-700/30 rounded-full
                        transition-all duration-300 hover:text-myPink1 hover:scale-105
                        hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                        text-gray-300 text-bold font-medium tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoGitBranch className="text-myPink1 transition-transform duration-300 hover:rotate-90" />
              <span>{commitHash.substring(0, 7)}</span>
            </a>
          )}
          
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
}

export default Footer;
