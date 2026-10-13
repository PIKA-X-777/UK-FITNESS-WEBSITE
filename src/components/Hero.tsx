import React from 'react';
import { ArrowRight, MapPin, Star, Clock, ShieldCheck, MessageSquare, Flame } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';
import ukFitnessFloorImg from '../assets/images/uk_fitness_real_floor_1791910558055.jpg';
import heroBgHd from '../assets/images/hero_bg_hd_gym_1791909879606.jpg';

interface HeroProps {
  onOpenTourModal: () => void;
  onOpenWhatsApp: (plan?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTourModal, onOpenWhatsApp }) => {
  return (
    <section className="relative bg-[#0B0B0E] text-white pt-12 pb-16 sm:pt-20 sm:pb-28 border-b border-[#20202A] overflow-hidden">
      
      {/* ════════ CINEMATIC HD GYM BACKGROUND VIDEO (FULLY VISIBLE & CLEAR) ════════ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.95] opacity-100"
        >
          <source src="/gym-hero-bg.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-lifting-heavy-weights-in-a-gym-42408-large.mp4" type="video/mp4" />
        </video>

        {/* Light ambient overlay to keep text readable while video is brightly visible */}
        <div className="absolute inset-0 bg-[#0B0B0E]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/70 via-[#0B0B0E]/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Badges & Live Status */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 self-start">
              <span className="px-3 py-1 text-xs font-black uppercase tracking-wider text-white bg-[#FF5500] rounded-md flex items-center gap-1.5 shadow-sm">
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>PASCHIM VIHAR · DELHI</span>
              </span>
              <a 
                href={GYM_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs font-black uppercase tracking-wider text-[#FF5500] bg-[#FF5500]/15 hover:bg-[#FF5500]/25 border border-[#FF5500]/40 rounded-md flex items-center gap-1.5 backdrop-blur-md transition-colors cursor-pointer"
                title="View verified Google reviews"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
                <Star className="w-3.5 h-3.5 fill-[#FF5500]" />
                <span>4.3 ★ GOOGLE RATING (19 REVIEWS)</span>
              </a>
            </div>

            {/* Main Headline with High-Impact Typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-[0.92] mb-5 drop-shadow-lg">
              TRAIN HARD. <br />
              <span className="text-[#FF5500]">
                FEEL AT HOME.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-xl mb-8 drop-shadow-sm">
              A high-performance neighborhood gym with supportive coaches, heavy iron racks, Olympic barbells, and an electric atmosphere in Meera Bagh. Simple, scientific, and result-oriented.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="group btn-bounce-hover inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64C00] rounded-lg shadow-xl shadow-orange-950/50 cursor-pointer"
              >
                <span>JOIN NOW · FREE 1-DAY PASS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWhatsApp()}
                className="group btn-bounce-hover inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg shadow-xl shadow-emerald-950/40 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366] transition-transform group-hover:scale-110" />
                <span>WhatsApp Enquiry</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-black uppercase tracking-wider text-slate-200 hover:text-white bg-[#161620]/80 hover:bg-[#20202C] border border-[#262634] rounded-lg transition-colors backdrop-blur-md"
              >
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>Visit Us</span>
              </a>
            </div>

            {/* Proof marker */}
            <div className="flex items-center gap-2.5 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
              <span>Certified trainers on floor at all times · Free workout chart & diet guide</span>
            </div>

          </div>

          {/* Right Column: Framed Official Gym Photo (Real Floor from Meera Bagh) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Photo Card with Hover Movement */}
              <div className="relative bg-[#14141C]/90 backdrop-blur-md border border-[#262634] rounded-2xl overflow-hidden shadow-2xl group card-hover-move">
                <div className="overflow-hidden relative h-[360px] sm:h-[430px]">
                  <img
                    src={ukFitnessFloorImg}
                    alt="UK FITNESS Official Gym Floor in Paschim Vihar Delhi"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101015] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                </div>

                {/* Caption strip */}
                <div className="bg-[#101015] border-t border-[#262634] text-white px-5 py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <div>
                    <span className="text-[#FF5500] text-[10px] font-black block">UK FITNESS MEERA BAGH</span>
                    <span>Official Main Gym Floor & Lifting Zone</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 text-[10px] font-black">
                    Delhi 110087
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: 4.3 ★ on Google */}
              <a 
                href={GYM_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-4 -left-4 sm:-left-5 bg-[#14141C]/95 backdrop-blur-md text-white border border-[#262634] hover:border-[#FF5500] rounded-xl p-3 shadow-2xl animate-float cursor-pointer hover:scale-105 transition-all"
                title="Read reviews on Google"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF5500] flex items-center justify-center font-['Bebas_Neue'] text-xl font-black text-white shadow-md">
                    4.3
                  </div>
                  <div>
                    <div className="flex items-center text-[#FF5500]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#FF5500]" />
                      ))}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-300">
                      19 Google Reviews ↗
                    </div>
                  </div>
                </div>
              </a>

              {/* Floating Badge 2: Open till 10:30 PM */}
              <div 
                className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#14141C]/95 backdrop-blur-md text-white border border-[#262634] rounded-xl p-3 shadow-2xl animate-float [animation-delay:1.5s] cursor-default hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-white block font-['Bebas_Neue']">
                      OPEN TILL 10:30 PM
                    </span>
                    <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Open 7 Days A Week
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Facts Strip with Card Hover Animation */}
        <div className="mt-14 bg-[#14141C]/85 backdrop-blur-md border border-[#262634] rounded-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#262634]">
            {GYM_CONFIG.quickFacts.map((fact, idx) => (
              <div 
                key={idx} 
                className="p-5 flex flex-col justify-center hover:bg-[#1A1A24] transition-colors cursor-default group"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5500] mb-0.5 group-hover:translate-x-0.5 transition-transform">
                  {fact.label}
                </span>
                <span className="text-sm sm:text-base font-black uppercase tracking-tight text-white group-hover:text-[#FF5500] transition-colors">
                  {fact.val}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
