import React from 'react';
import { Phone, Calendar, ArrowRight, MessageSquare, Dumbbell } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';

interface TrialBannerProps {
  onOpenTourModal: () => void;
  onOpenWhatsApp: (plan?: string) => void;
}

export const TrialBanner: React.FC<TrialBannerProps> = ({ onOpenTourModal, onOpenWhatsApp }) => {
  return (
    <section className="bg-[#121218] py-16 sm:py-20 border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>ZERO OBLIGATION · WALK-IN GUESTS WELCOME</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none mb-3">
              COME SEE IT FOR YOURSELF. <span className="text-[#FF5500]">BOOK A FREE GYM TOUR.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              Zero sales pressure. Test the equipment, meet Coach Kavy and the trainers, and see why members love training here.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            {/* Call button */}
            <a
              href={`tel:${GYM_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-300 hover:text-white bg-[#1A1A24] hover:bg-[#252533] border border-[#262634] rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#FF5500]" />
              <span>Call {GYM_CONFIG.phoneDisplay}</span>
            </a>

            {/* WhatsApp button */}
            <button
              type="button"
              onClick={() => onOpenWhatsApp('Free Gym Tour')}
              className="inline-flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg shadow-md transition-transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Tour</span>
            </button>

            {/* Book Tour button */}
            <button
              type="button"
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64C00] rounded-lg shadow-md shadow-orange-950/40 transition-transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE PASS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
