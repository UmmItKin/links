import React from 'react';

function Project() {
  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <p className="text-center text-gray-300 mb-8">These are some of the active projects I'm working on. I'm always open to collaboration and contributions, so feel free to reach out to me if you're interested in working together.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project Card 1 */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-myPink1 transition-all duration-300 hover:shadow-lg hover:shadow-myPink1/20">
          <h2 className="text-2xl font-bold mb-2 text-myPink1">Links</h2>
          <p className="text-gray-300 mb-4">My Links website, inspired by Linktree, built with React, Tailwind CSS, and Daisy UI.</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">React</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Tailwind</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Daisy UI</span>
          </div>
          <a 
            href="https://github.com/UmmItC/Links"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-myPink1/20 text-myPink1 rounded-lg hover:bg-myPink1/30 transition-colors duration-300"
          >
            View Project
          </a>
        </div>
        
        {/* Project Card 2 */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-myPink1 transition-all duration-300 hover:shadow-lg hover:shadow-myPink1/20">
          <h2 className="text-2xl font-bold mb-2 text-myPink1">gpu-passthru</h2>
          <p className="text-gray-300 mb-4">Documentation for GPU passthrough setup for GNU/Linux virtualization.</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Documentation</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">GNU/Linux</span>
          </div>
          <a 
            href="https://github.com/UmmItC/gpu-passthru"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-myPink1/20 text-myPink1 rounded-lg hover:bg-myPink1/30 transition-colors duration-300"
          >
            View Project
          </a>
        </div>
        
        {/* Project Card 3 */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-myPink1 transition-all duration-300 hover:shadow-lg hover:shadow-myPink1/20">
          <h2 className="text-2xl font-bold mb-2 text-myPink1">Dotfiles</h2>
          <p className="text-gray-300 mb-4">My Hyprland dotfiles for Arch Linux based distributions, including installation scripts.</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Dotfiles</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Arch Linux</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Shell</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">Python</span>
            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">GNU/Linux</span>
          </div>
          <a 
            href="https://github.com/UmmItC/Dotfiles"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-myPink1/20 text-myPink1 rounded-lg hover:bg-myPink1/30 transition-colors duration-300"
          >
            View Project
          </a>
        </div>

      </div>

      <p className="flex justify-center text-center bg-myPink1/30 mt-8 border border-myPink1/10 rounded-lg p-4 text-myPink1">
        These aren't all of my projects, i just lazy to write it down here.
      </p>

    </div>
  );
}

export default Project;
