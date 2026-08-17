import { Menu, X, ArrowLeft } from "lucide-react";
import { useState } from 'react';

export default function Navbar({ onBack, onContact, onAboutUs }: { onBack?: () => void; onContact?: () => void; onAboutUs?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 flex flex-col lg:flex-row h-20 shadow-md">
      {/* Top Bar for Mobile / Full Layout Container */}
      <div className="flex w-full h-20">
        {/* Left side (White) - Logo area */}
        <div className="bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-24 h-full relative z-20">
          {onBack && (
            <button onClick={onBack} className="mr-6 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors group">
              <ArrowLeft className="w-6 h-6 text-gray-800 group-hover:-translate-x-1 transition-transform" strokeWidth={1.25} />
            </button>
          )}
          <a href="#" className="flex items-center">
            <img 
              src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
              alt="Bertsch Holzbau Logo" 
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Right side (Green) - Desktop Navigation */}
        <div className="bg-[#489959] flex-grow flex items-center justify-end lg:justify-between px-4 sm:px-8 xl:px-12 h-full z-10">
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#modele" className="text-white hover:text-white/80 transition-colors text-[15px] font-medium tracking-wide">Modele</a>
            <a href="#opinie" className="text-white hover:text-white/80 transition-colors text-[15px] font-medium tracking-wide">Opinie</a>
            <button onClick={(e) => { e.preventDefault(); if(onAboutUs) onAboutUs(); }} className="text-white hover:text-white/80 transition-colors text-[15px] font-medium tracking-wide">O nas</button>
            <a href="#konfigurator" className="text-white hover:text-white/80 transition-colors text-[15px] font-medium tracking-wide">Konfigurator</a>
            <a href="#faq" className="text-white hover:text-white/80 transition-colors text-[15px] font-medium tracking-wide">FAQ</a>
            <button onClick={(e) => { e.preventDefault(); if(onContact) onContact(); else window.location.href="#footer"; }} className="text-white hover:text-white/80 transition-colors text-[15px] font-medium tracking-wide">Kontakt</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#489959] border-t border-white/10 shadow-lg z-50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#modele" onClick={() => setIsOpen(false)} className="text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/10">Modele</a>
            <a href="#opinie" onClick={() => setIsOpen(false)} className="text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/10">Opinie</a>
            <button onClick={() => { setIsOpen(false); if(onAboutUs) onAboutUs(); }} className="text-white block w-full text-left px-3 py-3 rounded-md text-base font-medium border-b border-white/10">O nas</button>
            <a href="#konfigurator" onClick={() => setIsOpen(false)} className="text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/10">Konfigurator</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/10">FAQ</a>
            <button onClick={() => { setIsOpen(false); if(onContact) onContact(); else window.location.href="#footer"; }} className="text-white block w-full text-left px-3 py-3 rounded-md text-base font-medium border-b border-white/10">Kontakt</button>
          </div>
        </div>
      )}
    </nav>
  );
}
