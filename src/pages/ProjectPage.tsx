import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  isExternal?: boolean;
}

const ProjectPage: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Links",
      description: "My Links website, inspired by Linktree, built with React, Tailwind CSS, and Daisy UI.",
      tags: ["React", "Tailwind", "Daisy UI"],
      url: "https://github.com/UmmItC/Links",
      isExternal: true
    },
    {
      title: "gpu-passthru",
      description: "Documentation for GPU passthrough setup for GNU/Linux virtualization.",
      tags: ["Documentation", "GNU/Linux"],
      url: "https://github.com/UmmItC/gpu-passthru",
      isExternal: true
    },
    {
      title: "Dotfiles",
      description: "My Hyprland dotfiles for Arch Linux based distributions, including installation scripts.",
      tags: ["Dotfiles", "Arch Linux", "Shell", "Python", "GNU/Linux"],
      url: "/project/dotfiles",
      isExternal: false
    }
  ];
  
  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <p className="text-center text-gray-300 mb-8">These are some of the active projects I'm working on. I'm always open to collaboration and contributions, so feel free to reach out to me if you're interested in working together.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 mb-8">

            <h2 className="text-2xl font-bold mb-2 text-myPink1">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">{tag}</span>
              ))}
            </div>
            {project.isExternal ? (
              <a 
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-myPink1/40 text-myPink1 rounded-lg border border-myPink1/50 hover:bg-myPink1/60 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-myPink1/30 transform"
              >
                View Project
              </a>
            ) : (
              <Link 
                to={project.url}
                className="mt-4 inline-block px-4 py-2 bg-myPink1/40 text-myPink1 rounded-lg border border-myPink1/50 hover:bg-myPink1/60 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-myPink1/30 transform"
              >
                View Project
              </Link>
            )}
          </div>
        ))}
      </div>

      <p className="flex justify-center text-center bg-myPink1/30 mt-8 border border-myPink1/10 rounded-lg p-4 text-myPink1">
        These aren't all of my projects, i just lazy to write it down here.
      </p>
    </div>
  );
};

export default ProjectPage;
