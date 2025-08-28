import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { FaRocket, FaCog, FaCheck, FaGithub } from 'react-icons/fa';

const DotfilesPage: React.FC = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = new Plyr(playerRef.current, {
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'captions',
          'settings',
          'pip',
          'airplay',
          'fullscreen'
        ],
        settings: ['captions', 'quality', 'speed'],
        quality: {
          default: 1080,
          options: [4320, 2880, 2160, 1440, 1080, 720, 480, 360, 240],
          forced: true,
          onChange: (quality: number) => {
            console.log(`Quality changed to: ${quality}p`);
          }
        },
        youtube: {
          noCookie: false,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1
        }
      });

      const style = document.createElement('style');
      style.textContent = `
        .plyr--youtube .plyr__control--overlaid {
          background: rgba(226, 187, 233, 0.9);
        }
        .plyr__control.plyr__tab-focus,
        .plyr__control:hover,
        .plyr__control[aria-expanded=true] {
          background: rgba(226, 187, 233, 0.8);
        }
        .plyr--full-ui input[type=range] {
          color: #E2BBE9;
        }
        .plyr__progress__played {
          background-color: #E2BBE9;
        }
        .plyr__volume--display {
          background: #E2BBE9;
        }
        .plyr__menu__container .plyr__control--forward.plyr__tab-focus,
        .plyr__menu__container .plyr__control--forward:hover {
          background: rgba(226, 187, 233, 0.8);
        }
      `;
      document.head.appendChild(style);

      return () => {
        player.destroy();
        document.head.removeChild(style);
      };
    }
  }, []);

  const stats = [
    { label: "System", value: "Arch Linux" },
    { label: "Window Manager", value: "Hyprland" },
    { label: "Easy to use", value: "Config Files" },
    { label: "TUI Installer", value: "Install Scripts" }
  ];

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto relative min-h-screen">

      <div className="text-center mb-12 relative z-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-400 bg-clip-text text-transparent">
          UmmIt Dotfiles :))
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          My Hyprland dotfiles — A pre-built environment of dotfiles for productivity and aesthetics
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-600/40 backdrop-blur-sm rounded-2xl p-4 border border-[#9082CE]/60 hover:border-[#9082CE] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9082CE]/30 hover:bg-gray-500/30">
              <div className="text-2xl font-bold text-[#9082CE]">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9082CE]/30 to-[#9082CE]/10 rounded-3xl blur group-hover:from-[#9082CE]/40 group-hover:to-[#9082CE]/20 transition-all duration-1000 animate-pulse"></div>
            
            <div className="relative bg-gray-600/40 backdrop-blur-xl rounded-2xl p-6 border border-[#9082CE]/60">
              <div className="aspect-video mb-6 relative overflow-hidden rounded-xl">
                <div 
                  ref={playerRef}
                  data-plyr-provider="youtube" 
                  data-plyr-embed-id="kd0elrqV0O0"
                  className="w-full h-full"
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Linux is Life and beautiful :)</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-600/40 to-gray-500/40 backdrop-blur-xl rounded-2xl p-6 border border-[#9082CE]/60 hover:border-[#9082CE] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#9082CE]/20 hover:to-gray-500/40">
            <h3 className="text-xl font-bold text-[#9082CE] mb-4 flex items-center gap-2">
              <FaRocket className="inline" /> About This Project
            </h3>
            <p className="text-gray-100 leading-relaxed mb-4">
              A comprehensive collection of Hyprland configuration files for Arch Linux distributions, 
              including installation scripts and theme configurations. Focused on enhancing productivity 
              and visual aesthetics of the desktop environment.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-100">
                <FaCheck /> Automated installation scripts
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-100">
                <FaCheck /> Modern themes and styling
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-100">
                <FaCheck /> Efficient workflow setup
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-100">
                <FaCheck /> Beautiful interface design
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-600/40 to-gray-500/40 backdrop-blur-xl rounded-2xl p-6 border border-[#9082CE]/60 hover:border-[#9082CE] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#9082CE]/20 hover:to-gray-500/40">
            <h3 className="text-xl font-bold text-cyan-100 mb-4 flex items-center gap-2">
              <FaCog className="inline animate-spin" /> Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Arch Linux", "Hyprland", "Shell", "GNU/Linux", "CSS", "JSON"].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#9082CE]/60 to-[#9082CE]/30 text-white rounded-full text-sm border border-[#9082CE]/60 hover:scale-105 hover:from-[#9082CE]/80 hover:to-[#9082CE]/40 transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <a 
              href="https://github.com/UmmItKin/Dotfiles"
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#9082CE]/80 to-[#9082CE]/40 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                <FaGithub /> View on GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotfilesPage;