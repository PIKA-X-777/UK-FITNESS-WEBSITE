import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ArrowRight, ShieldCheck, User, Phone } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState(initialPlan || '3 Months Transformation (Most Popular)');
  const [goal, setGoal] = useState('Strength & Muscle Building');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const savedName = localStorage.getItem('uk_fitness_user_name');
      const savedPhone = localStorage.getItem('uk_fitness_user_phone');
      if (savedName) setName(savedName);
      if (savedPhone) setPhone(savedPhone);
    } catch {}
  }, []);

  useEffect(() => {
    if (initialPlan) {
      setPlan(initialPlan);
    }
  }, [initialPlan]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name so Coach Kavy can address you.');
      return;
    }

    try {
      localStorage.setItem('uk_fitness_user_name', name.trim());
      if (phone.trim()) localStorage.setItem('uk_fitness_user_phone', phone.trim());
    } catch {}

    const details = [
      `Hi UK FITNESS!`,
      `My name is ${name.trim()}.`,
      `I am interested in: ${plan}.`,
      `Primary Fitness Goal: ${goal}.`,
      phone.trim() ? `My Phone: ${phone.trim()}.` : '',
      `Please share membership registration details and coach timings!`,
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(details);
    const url = `https://wa.me/919311549106?text=${encoded}`;
    
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
    onClose();
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
        aria-labelledby="whatsapp-modal-title"
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

        {/* Header */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 rounded mb-2.5">
            <MessageSquare className="w-3 h-3 fill-[#25D366]" />
            <span>OFFICIAL BUSINESS WHATSAPP</span>
          </div>

          <h3
            id="whatsapp-modal-title"
            className="text-2xl sm:text-3xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none"
          >
            CHAT DIRECTLY WITH <span className="text-[#FF5500]">COACH KAVY</span>
          </h3>

          <p className="text-xs font-semibold text-slate-400 mt-1.5 leading-relaxed">
            Enter your name & membership preference below. We will prefill your custom WhatsApp message so you get an instant response.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-2.5 bg-[#FF5500]/15 border border-[#FF5500]/40 rounded-lg text-xs font-bold text-[#FF5500]">
            {error}
          </div>
        )}

        <form onSubmit={handleOpenWhatsApp} className="space-y-3.5">
          {/* Name */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
              Your Name <span className="text-[#FF5500]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="e.g. Aman Verma"
                className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
              />
              <User className="absolute right-3 top-3 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
              Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98112 XXXXX"
                className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
              />
              <Phone className="absolute right-3 top-3 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Plan */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
              Membership Plan / Topic
            </label>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-xs font-bold uppercase text-white focus:outline-none"
            >
              <option value="1 Month Kickstart (₹1,800)">1 Month Kickstart (₹1,800)</option>
              <option value="3 Months Transformation (₹4,500 - Most Popular)">3 Months Transformation (₹4,500 - Most Popular)</option>
              <option value="6 Months Dedication (₹7,800)">6 Months Dedication (₹7,800)</option>
              <option value="1 Year Commitment (₹13,500 - Best Value)">1 Year Commitment (₹13,500 - Best Value)</option>
              <option value="Free Gym Tour Pass">Free Gym Tour Pass</option>
              <option value="Personal Training Guidance">Personal Training Guidance</option>
              <option value="General Batch Timings Query">General Batch Timings Query</option>
            </select>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
              Your Fitness Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-xs font-bold uppercase text-white focus:outline-none"
            >
              <option value="Strength & Muscle Building">Strength & Muscle Building</option>
              <option value="Weight Loss & Fat Burn">Weight Loss & Fat Burn</option>
              <option value="General Fitness & Energy">General Fitness & Energy</option>
              <option value="One-on-One Personal Coaching">One-on-One Personal Coaching</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Launch WhatsApp Chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 pt-2.5 text-[10px] font-bold text-slate-400 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Direct to Official Business Number: +91 93115 49106</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
