import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';

interface FloatingActionsProps {
  onOpenWhatsApp: (plan?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsApp }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-[#0B0B0E]/95 backdrop-blur-md border-t border-[#20202A] md:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${GYM_CONFIG.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#161620] text-white border border-[#262634] rounded-lg font-black uppercase tracking-wider text-xs active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>Call Gym</span>
        </a>

        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={() => onOpenWhatsApp()}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25D366]" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
