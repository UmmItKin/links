import React, { useState, useEffect } from 'react';

import { FaCodeBranch, FaCode, FaGithub } from 'react-icons/fa';
import { SlSocialGithub } from "react-icons/sl";
import { MdCopyright } from 'react-icons/md';

const start_year = 2024;

function Footer() {
  const [commitHash, setCommitHash] = useState(null);

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
        console.error('Error fetching commit hash:', error);
      }
    };

    fetchCommitHash();
  }, []);

  return (
    <footer className="footer footer-center bg-base-100 text-gray-300 p-4">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">

        {/* Copyright with icon */}
        <div className="flex items-center">
          <MdCopyright className="text-myPink1 mr-1" />
          <span className="font-semibold text-myPink1">{start_year}-{new Date().getFullYear()} UmmIt</span>
        </div>
        
        {/* License with code icon */}
        <div className="flex items-center">
          <a 
            href="https://opensource.org/licenses/MIT" 
            className="flex items-center text-myPink1 hover:text-rose-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="mr-1" />
            <span className="font-semibold">MIT</span>
          </a>
        </div>
        
        {/* GitHub Pages with icon */}
        <div className="flex items-center text-myPink1">
          <SlSocialGithub className="mr-1" />
          <span className="font-semibold">GitHub Pages</span>
        </div>
        
        {/* Commit hash with branch icon */}
        {commitHash && (
          <div className="flex items-center">
            <FaCodeBranch className="text-myPink1 mr-1" />
            <a
              href={`https://github.com/UmmItC/Links/commit/${commitHash}`}
              className="font-semibold text-myPink1 hover:text-myPink2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {commitHash.substring(0, 7)}
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
