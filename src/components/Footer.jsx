import React, { useState, useEffect } from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoGitBranch } from 'react-icons/io5';
import { AiOutlineLinux } from "react-icons/ai";
import { GrArchlinux } from "react-icons/gr";

function Footer() {
  const [commitHash, setCommitHash] = useState(null);

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
    <div className="flex flex-col min-h-full justify-between hero">
      <div className="flex-grow" />
      <footer className="bg-base-100 text-gray-400 py-6">
        <div className="mx-auto max-w-5xl px-6 lg:px-20 text-center">
          {commitHash && (
            <a 
              href={`https://github.com/UmmItC/Links/commit/${commitHash}`}
              className="transition-colors duration-200 hover:text-gray-300 flex items-center justify-center text-xl font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoGitBranch className="mr-2" />
              {commitHash.substring(0, 7)}
            </a>
          )}
          <p className="text-lg text-gray-400 mt-5">
            Made with
            <FaReact className="inline mx-1 text-blue-400 pb-1 text-3xl" />
            <SiTailwindcss className="inline mx-1 text-teal-400 pb-1 text-3xl" />
            <AiOutlineLinux className="inline mx-1 text-yellow-400 pb-1 text-3xl" />
            <GrArchlinux className="inline mx-1 text-blue-400 pb-1 text-3xl" />
          </p>
          
          <p className="text-lg text-gray-400 mt-5">
           &copy; 2025 UmmIt. MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
