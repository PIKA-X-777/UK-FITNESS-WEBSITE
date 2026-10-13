import React, { useState } from 'react';
import { Clock, Target, ArrowRight, Flame } from 'lucide-react';
import { GYM_CONFIG, GymClass } from '../gymData';

interface ClassesProps {
  onSelectClassForEnquiry: (className: string) => void;
}

export const Classes: React.FC<ClassesProps> = ({ onSelectClassForEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strength' | 'cardio' | 'conditioning'>('all');

  const filteredClasses = GYM_CONFIG.classes.filter((c) => {
    if (activeFilter === 'strength') {
      return c.id === 'c1' || c.id === 'c4';
    }
    if (activeFilter === 'cardio') {
      return c.id === 'c2' || c.id === 'c3' || c.id === 'c7';
    }
    if (activeFilter === 'conditioning') {
      return c.id === 'c5' || c.id === 'c6' || c.id === 'c8';
    }
    return true;
  });

  return (
    <section id="classes" className="bg-[#0B0B0E] py-18 sm:py-24 border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>TRAINING PROGRAMS & WORKOUTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none mb-3">
              CLASSES & <span className="text-[#FF5500]">TRAINING</span>
            </h2>
            <p className="text-base text-slate-300 font-medium leading-relaxed">
              Whether your goal is lifting heavier, shedding body fat, or building athletic stamina, our floor plans are engineered for sustained progress.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'strength', label: 'Strength & Hypertrophy' },
              { id: 'cardio', label: 'Cardio & Shred' },
              { id: 'conditioning', label: 'HIIT & Mobility' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#FF5500] text-white'
                    : 'bg-[#14141C] text-slate-400 hover:text-white border border-[#262634]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Numbered Grid (01 - 08) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClasses.map((item: GymClass) => (
            <div
              key={item.id}
              className="bg-[#14141C] border border-[#262634] rounded-2xl p-6 flex flex-col justify-between group card-hover-move cursor-pointer"
            >
              <div>
                {/* Header row: Number & Duration */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262634] group-hover:border-[#FF5500]/40 transition-colors">
                  <span className="font-['Bebas_Neue'] text-3xl font-black text-[#FF5500] tracking-tight group-hover:scale-110 group-hover:translate-x-1 transition-transform inline-block">
                    {item.number}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-300 bg-[#1A1A24] group-hover:bg-[#FF5500]/15 group-hover:text-white px-2.5 py-1 rounded border border-[#262634] group-hover:border-[#FF5500]/40 transition-colors">
                    <Clock className="w-3 h-3 text-[#FF5500]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Class Title */}
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 leading-snug group-hover:text-[#FF5500] transition-colors">
                  {item.title}
                </h3>

                {/* Goal Tag */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF5500] mb-3">
                  <Target className="w-3.5 h-3.5 shrink-0 group-hover:rotate-45 transition-transform" />
                  <span>Goal: {item.goal}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#262634] group-hover:border-[#FF5500]/40 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  <span className="text-[#FF5500] font-extrabold">{item.intensity}</span>
                  <span>{item.schedule}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectClassForEnquiry(item.title)}
                  className="w-full py-2.5 px-3 text-xs font-black uppercase tracking-wider text-white bg-[#1A1A24] group-hover:bg-[#FF5500] border border-[#262634] group-hover:border-[#FF5500] rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Enquire Schedule</span>
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
