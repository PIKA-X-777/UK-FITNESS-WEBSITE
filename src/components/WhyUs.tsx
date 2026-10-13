import React from 'react';
import { Dumbbell, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';

interface WhyUsProps {
  onOpenTourModal: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenTourModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#FF5500]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#FF5500]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#FF5500]" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#FF5500]" />;
    }
  };

  return (
    <section id="about" className="bg-[#0E0E14] py-18 sm:py-24 border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
            MEMBERSHIP WITH BEST BENEFITS
          </div>
          <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none mb-3">
            WHY TRAIN AT <span className="text-[#FF5500]">UK FITNESS</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            We built this space for real people in Paschim Vihar who want genuine progression without corporate judgment. High standards, good music, and serious equipment.
          </p>
        </div>

        {/* 3 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_CONFIG.benefits.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="bg-[#14141C] border border-[#262634] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group card-hover-move cursor-pointer"
            >
              <div>
                {/* Photo */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Highlight Badge with Drop Effect */}
                  <div className="absolute top-3 left-3 bg-[#0E0E14]/90 backdrop-blur-md border border-[#262634] group-hover:border-[#FF5500] px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-[#FF5500] transition-colors shadow-lg">
                    {benefit.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#1A1A24] border border-[#262634] group-hover:border-[#FF5500] group-hover:bg-[#FF5500]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      {getIcon(benefit.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5500]">
                        Benefit 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-white leading-tight group-hover:text-[#FF5500] transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-2">
                    {benefit.tagline}
                  </p>

                  <p className="text-sm text-slate-300 font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="w-full py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-300 group-hover:text-white bg-[#1A1A24] group-hover:bg-[#FF5500] border border-[#262634] group-hover:border-[#FF5500] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Ask Coach About This</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
