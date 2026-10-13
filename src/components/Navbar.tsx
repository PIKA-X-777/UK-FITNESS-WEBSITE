import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenTourModal: () => void;
  onOpenWhatsApp: (plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTourModal, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Plans', href: '#plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'classes', 'plans', 'gallery', 'reviews', 'contact'];
      const scrollY = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-md border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Logo with Fitness Simplified geometric emblem */}
          <a href="#" className="focus:outline-none" aria-label="UK FITNESS Home">
            <Logo size="md" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-2 whitespace-nowrap transition-colors hover:text-[#FF5500] ${
                    isActive ? 'text-[#FF5500]' : 'text-slate-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#FF5500]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#262634] bg-[#161620] hover:bg-[#20202C] rounded-lg text-white transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#121217] border-t border-[#20202A] px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A22] border border-[#262634] rounded-lg text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full py-3 text-xs font-black uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64C00] rounded-lg flex items-center justify-center gap-2"
            >
              <span>JOIN NOW · FREE 1-DAY PASS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-[#25D366]" />
              <span>WhatsApp with Coach Kavy</span>
            </button>

            <a
              href={`tel:${GYM_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-[#262634] bg-[#161620] rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#FF5500]" />
              <span>Call: {GYM_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
