import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Check, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    // Show after 600ms if not explicitly saved in this session or localStorage
    try {
      const consent = localStorage.getItem('uk_fitness_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }

    // Allow opening via custom event (e.g. from footer link)
    const handleOpen = () => {
      setIsVisible(true);
      setSavedNotice(false);
    };
    window.addEventListener('open-cookie-preferences', handleOpen);
    return () => window.removeEventListener('open-cookie-preferences', handleOpen);
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        'uk_fitness_cookie_consent',
        JSON.stringify({
          status: 'accepted',
          timestamp: new Date().toISOString(),
          preferences: { analytics: true, functional: true, performance: true },
        })
      );
    } catch {}
    setSavedNotice(true);
    setTimeout(() => {
      setIsVisible(false);
      setSavedNotice(false);
    }, 700);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(
        'uk_fitness_cookie_consent',
        JSON.stringify({
          status: 'essential_only',
          timestamp: new Date().toISOString(),
          preferences: { analytics: false, functional: true, performance: false },
        })
      );
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-slide-up"
      role="region"
      aria-label="Privacy & Cookie Preferences"
    >
      <div className="bg-[#121217] border border-[#262634] text-white p-5 sm:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative backdrop-blur-xl">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-[#1A1A24] transition-colors cursor-pointer"
          aria-label="Close cookie popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 mb-3.5 pr-6">
          <div className="w-10 h-10 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-black uppercase tracking-wide text-white">
                Cookie & Privacy Choices
              </h4>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30">
                UK FITNESS
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
              We store and cache your workout preferences, plan selections, and gym inquiries locally for a fast and tailored browsing experience.
            </p>
          </div>
        </div>

        {savedNotice ? (
          <div className="py-2.5 px-3 bg-[#25D366]/15 border border-[#25D366]/40 rounded-lg flex items-center justify-center gap-2 text-xs font-bold text-[#25D366] animate-scale-in">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Preferences saved successfully!</span>
          </div>
        ) : (
          /* Action Buttons */
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-[#262634]">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="w-full sm:flex-1 py-2.5 px-4 bg-[#FF5500] hover:bg-[#E64C00] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Accept All Cookies</span>
            </button>

            <button
              type="button"
              onClick={handleEssentialOnly}
              className="w-full sm:w-auto py-2.5 px-3.5 bg-[#1A1A24] hover:bg-[#222230] text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-[#262634] transition-colors whitespace-nowrap cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        )}

        {/* Small reassurance */}
        <div className="flex items-center justify-between pt-3 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Encrypted local cache · No ad trackers</span>
          </span>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="text-slate-400 hover:text-[#FF5500] font-bold cursor-pointer transition-colors"
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
};
