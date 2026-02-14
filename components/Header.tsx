
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'COMPANY', path: '/#company' },
    { name: 'SERVICE', path: '/#service' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'CAREERS', path: '/careers' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`aqva-logo text-4xl transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
            Aqva
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-bold tracking-widest hover:text-primary transition-colors ${
                scrolled ? 'text-navy/80' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-primary hover:bg-sky-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20">
            Online Store
          </button>
        </nav>

        <button className="lg:hidden text-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;