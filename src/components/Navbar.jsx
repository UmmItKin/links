import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { DiLinux } from "react-icons/di";

function Navbar({ userData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event) => {
      if (event.target.closest('.menu-button')) {
        return;
      }
      
      if (!event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
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

  const handleMenuButtonClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`shadow-xs fixed inset-x-0 top-0 z-40 mx-auto flex h-[60px] max-w-4xl items-center justify-between rounded-2xl px-2 saturate-100 backdrop-blur-[10px] transition-all duration-500 ${
      isVisible ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="flex-1">
        <Link to="/" className="text-xl font-semibold hover:text-myPink1 transition-colors duration-300">UmmIt <DiLinux className="inline-block w-6 h-6 mb-2" /></Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-none gap-3 items-center">
        <Link to="/blog" className={`inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/blog' ? 'text-myPink1' : ''}`}>Blog</Link>
        <Link to="/project" className={`inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/project' ? 'text-myPink1' : ''}`}>Project</Link>
        <Link to="/gear" className={`inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/gear' ? 'text-myPink1' : ''}`}>Gear</Link>
        <Link to="/about" className={`inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/about' ? 'text-myPink1' : ''}`}>About</Link>
        <a href={userData?.repo} target="_blank" rel="noopener noreferrer" className="px-3 flex items-center">
          <FaCode className="inline-block w-5 h-5 hover:text-myPink1 transition-colors duration-300" />
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="menu-button p-2 hover:text-myPink1 transition-all duration-300"
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
      {isMenuOpen && (
        <div className="mobile-menu absolute top-full right-0 mt-2 w-48 rounded-xl bg-background/80 backdrop-blur-[10px] shadow-lg py-2 z-50 transform origin-top-right md:hidden">
          <Link to="/blog" className={`block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/blog' ? 'text-myPink1' : ''}`}>Blog</Link>
          <Link to="/project" className={`block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/project' ? 'text-myPink1' : ''}`}>Project</Link>
          <Link to="/gear" className={`block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/gear' ? 'text-myPink1' : ''}`}>Gear</Link>
          <Link to="/about" className={`block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold ${location.pathname === '/about' ? 'text-myPink1' : ''}`}>About</Link>
          <a href={userData?.repo} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300">
            <FaCode className="inline-block w-5 h-5 mr-2" />
            <span className="font-bold">Source</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
