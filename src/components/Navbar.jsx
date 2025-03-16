import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar({ userData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  const handleMenuButtonClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors">
      <div className="flex-1">
        <a href="/" className="text-xl font-semibold hover:text-myPink1 transition-colors duration-300">
          {userData?.name || "Portfolio"}
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-none gap-3 items-center">
        <a href="/blog" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">Blog</a>
        <a href="/projects" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">Projects</a>
        <a href="/gear" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">Gear</a>
        <a href="/about" className="inline-block px-3 rounded-md hover:text-myPink1 transition-colors duration-300 font-bold">About</a>
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
          <a href="/blog" className="block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold">Blog</a>
          <a href="/projects" className="block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold">Projects</a>
          <a href="/gear" className="block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold">Gear</a>
          <a href="/about" className="block px-4 py-2 hover:bg-background/40 hover:text-myPink1 transition-colors duration-300 font-bold">About</a>
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
