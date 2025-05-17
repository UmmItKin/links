import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { DiLinux } from "react-icons/di";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

interface UserData {
  repo?: string;
}

interface NavbarProps {
  userData?: UserData;
}

function Navbar({ userData }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element) {
        if (event.target.closest('.menu-button')) {
          return;
        }
        
        if (!event.target.closest('.mobile-menu')) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMenuButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`shadow-xs fixed inset-x-0 top-0 z-40 mx-auto flex h-[68px] max-w-5xl items-center justify-between px-2 bg-background/70 saturate-100 backdrop-blur-[10px] transition-all duration-500 ${
      isVisible ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'
    } md:rounded-2xl`}>
      <div className="flex-1 flex justify-start">
        <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors duration-300 ml-4 flex items-center">UmmIt <DiLinux className="w-6 h-6 ml-1" /></Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-none gap-3 items-center">
        <Link to="/blog" className={`inline-block px-3 rounded-md hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/blog' ? 'text-primary' : ''}`}>Blog</Link>
        <Link to="/project" className={`inline-block px-3 rounded-md hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/project' ? 'text-primary' : ''}`}>Project</Link>
        <Link to="/gear" className={`inline-block px-3 rounded-md hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/gear' ? 'text-primary' : ''}`}>Gear</Link>
        <Link to="/about" className={`inline-block px-3 rounded-md hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/about' ? 'text-primary' : ''}`}>About</Link>
        
        {/* Theme Toggle Button - Desktop */}
        <button 
          onClick={toggleTheme} 
          className="px-3 py-2 rounded-md hover:text-primary transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'cuteai' ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
        </button>

        <a href={userData?.repo} target="_blank" rel="noopener noreferrer" className="px-3 flex items-center mr-4">
          <FaCode className="inline-block w-5 h-5 hover:text-primary transition-colors duration-300" />
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="menu-button p-2 hover:text-primary transition-all duration-300"
          onClick={handleMenuButtonClick}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu absolute top-full right-0 mt-2 w-48 bg-background/80 backdrop-blur-[10px] shadow-lg py-2 z-50 transform origin-top md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0 rounded-xl' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <Link to="/blog" className={`block px-4 py-2 hover:bg-background/40 hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/blog' ? 'text-primary' : ''}`}>Blog</Link>
        <Link to="/project" className={`block px-4 py-2 hover:bg-background/40 hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/project' ? 'text-primary' : ''}`}>Project</Link>
        <Link to="/gear" className={`block px-4 py-2 hover:bg-background/40 hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/gear' ? 'text-primary' : ''}`}>Gear</Link>
        <Link to="/about" className={`block px-4 py-2 hover:bg-background/40 hover:text-primary transition-colors duration-300 font-bold ${location.pathname === '/about' ? 'text-primary' : ''}`}>About</Link>
        <a href={userData?.repo} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-background/40 hover:text-primary transition-colors duration-300">
          <FaCode className="inline-block w-5 h-5 mr-2" />
          <span className="font-bold">Source</span>
        </a>
        {/* Theme Toggle Button - Mobile */}
        <button 
          onClick={toggleTheme} 
          className="w-full text-left block px-4 py-2 hover:bg-background/40 hover:text-primary transition-colors duration-300 font-bold flex items-center"
          aria-label="Toggle theme"
        >
          {theme === 'cuteai' ? <FiMoon className="w-5 h-5 mr-2" /> : <FiSun className="w-5 h-5 mr-2" />}
          <span>{theme === 'cuteai' ? 'Night Mode' : 'cuteai Mode'}</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar; 
