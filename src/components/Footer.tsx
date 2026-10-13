import React from 'react';
import { MapPin, Phone, Clock, Instagram, ArrowUp, Cookie } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetCookies = () => {
    try {
      localStorage.removeItem('uk_fitness_cookie_consent');
      window.dispatchEvent(new Event('open-cookie-preferences'));
    } catch {}
  };

  return (
    <footer className="bg-[#07070A] text-white pt-16 pb-24 sm:pb-16 border-t border-[#1C1C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#20202A]">
          
          {/* Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm pt-2">
              Delhi&apos;s premier high-performance neighborhood gym. Dedicated to progressive overload, functional stamina, certified coaching, and personal transformation in Meera Bagh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#14141C] hover:bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-[#262634] hover:border-[#FF5500] transition-colors shadow-md"
              >
                <Instagram className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>{GYM_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF5500]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-slate-300">
              <li>
                <a href="#about" className="hover:text-[#FF5500] transition-colors">
                  Why UK Fitness
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-[#FF5500] transition-colors">
                  Classes & Programs
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#FF5500] transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF5500] transition-colors">
                  Gym Floor Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF5500] transition-colors">
                  Google Reviews (4.3 ★)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF5500] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Facility & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF5500]">
              Facility & Hours
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href={`tel:${GYM_CONFIG.phoneRaw}`} className="hover:underline font-bold text-white">
                  {GYM_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Open Daily: 6:00 AM – 10:30 PM</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={GYM_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-bold text-[#FF5500] uppercase tracking-wider underline hover:text-white"
              >
                Open in Google Maps →
              </a>

              <button
                type="button"
                onClick={handleResetCookies}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider hover:text-white"
              >
                <Cookie className="w-3 h-3 text-[#FF5500]" />
                <span>Reset Cookies</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <div>
            © 2026 UK FITNESS by imkavy. All rights reserved. Paschim Vihar, Delhi 110087.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#14141C] hover:bg-[#FF5500] text-white border border-[#262634] rounded-lg text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
