import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle2, Dumbbell, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState('Morning (7:00 AM - 10:00 AM)');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    try {
      const savedName = localStorage.getItem('uk_fitness_user_name');
      const savedPhone = localStorage.getItem('uk_fitness_user_phone');
      if (savedName) setName(savedName);
      if (savedPhone) setPhone(savedPhone);
    } catch {}
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const clean = phone.replace(/\D/g, '');
    if (clean.length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }
    setError('');
    setIsSuccess(true);

    try {
      localStorage.setItem('uk_fitness_user_name', name.trim());
      localStorage.setItem('uk_fitness_user_phone', clean);
    } catch {}
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hi UK FITNESS!\nMy name is ${name.trim() || 'Prospective Member'}.\nI want to book a Free Gym Tour Pass.\nPreferred Slot: ${slot}.\nMembership Interest: ${defaultPlan || '3 Months Transformation'}.\nMy Phone: ${phone.trim() || 'Please call me'}.\nLooking forward to checking out the gym!`
    );
    const url = `https://wa.me/919311549106?text=${text}`;
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#121217] border border-[#262634] rounded-2xl shadow-2xl p-6 sm:p-7 text-white animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-[#1A1A24] hover:bg-[#FF5500] rounded-lg text-slate-300 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 rounded-xl mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 id="modal-title" className="text-3xl font-['Bebas_Neue'] uppercase text-white">
              TOUR REQUEST BOOKED!
            </h3>
            
            <p className="text-sm font-medium text-slate-300">
              We&apos;ve registered your preference for <span className="font-bold underline text-[#FF5500]">{slot}</span>. Coach Kavy or the front desk will confirm your pass at <span className="font-bold text-white">{phone}</span>.
            </p>

            <div className="pt-3 space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Confirm Instantly on WhatsApp</span>
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-[#1A1A24] hover:bg-[#252533] text-slate-300 hover:text-white font-bold uppercase tracking-wider text-xs rounded-lg border border-[#262634]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded mb-2">
                <Dumbbell className="w-3 h-3" />
                <span>FREE PASS · NO COMMITMENT</span>
              </div>
              
              <h3 id="modal-title" className="text-3xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none">
                BOOK A FREE <span className="text-[#FF5500]">GYM TOUR</span>
              </h3>
              
              <p className="text-xs font-semibold text-slate-400 mt-1">
                Walk through the facility in Meera Bagh, Paschim Vihar. Test the gear and speak to our coaches.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-2.5 bg-[#FF5500]/15 border border-[#FF5500]/40 rounded-lg text-xs font-bold text-[#FF5500]">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                  Full Name <span className="text-[#FF5500]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aman Verma"
                  className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                  Mobile Number (for tour pass) <span className="text-[#FF5500]">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98112 XXXXX"
                  className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                  Preferred Visit Timing
                </label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-semibold text-white focus:outline-none"
                >
                  <option value="Morning (7:00 AM - 10:00 AM)">Morning (7:00 AM – 10:00 AM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                  <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                  <option value="Late Evening (9:00 PM - 10:30 PM)">Late Evening (9:00 PM – 10:30 PM)</option>
                </select>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#FF5500] hover:bg-[#E64C00] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md shadow-orange-950/40 transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Free Gym Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${GYM_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#1A1A24] hover:bg-[#222230] border border-[#262634] text-xs font-bold uppercase text-slate-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Direct Call</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleWhatsAppInstant}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-bold uppercase text-[#25D366] rounded-lg transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
