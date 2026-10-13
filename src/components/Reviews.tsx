import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { GYM_CONFIG, ReviewItem } from '../gymData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="bg-[#0E0E14] py-18 sm:py-24 border-b border-[#20202A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
              MEMBER TESTIMONIALS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none">
              WHAT MEMBERS SAY ABOUT <span className="text-[#FF5500]">UK FITNESS</span>
            </h2>
            <p className="text-base text-slate-300 font-medium mt-2 max-w-xl">
              Unfiltered words from lifters and fitness enthusiasts who train with us every week in Paschim Vihar.
            </p>
          </div>

          {/* Big Google Score Stamp & Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#14141C] border border-[#262634] rounded-2xl p-4 sm:p-5 shadow-xl self-start lg:self-auto">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-[#FF5500] rounded-xl flex items-center justify-center font-['Bebas_Neue'] text-2xl font-black text-white shadow-md">
                4.3
              </div>
              <div>
                <div className="flex items-center text-[#FF5500]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF5500]" />
                  ))}
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-300 mt-0.5">
                  19 Google Reviews
                </div>
              </div>
            </div>

            <a
              href={GYM_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#1A1A24] hover:bg-[#FF5500] border border-[#262634] hover:border-[#FF5500] rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-md"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {GYM_CONFIG.reviews.map((rev: ReviewItem, idx) => (
            <div
              key={rev.id}
              className="bg-[#14141C] border border-[#262634] rounded-2xl p-7 flex flex-col justify-between group card-hover-move cursor-pointer relative"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 mb-5 self-start">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Verified Google Review</span>
              </div>

              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#FF5500]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF5500]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-white/15" />
                </div>

                {/* The Review Quote */}
                <p className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-snug mb-8 font-['Bebas_Neue']">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer signature */}
              <div className="pt-4 border-t border-[#262634] flex items-center justify-between text-xs">
                <div>
                  <span className="font-black uppercase tracking-wider text-white block">
                    {rev.author}
                  </span>
                  <span className="text-slate-400 font-semibold text-[11px]">
                    {rev.timeAgo}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-[#1A1A24] border border-[#262634] rounded text-[10px] font-bold text-[#FF5500]">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
            Real members · Real workouts · Located at A-4, Meera Bagh, Paschim Vihar, Delhi
          </p>
        </div>

      </div>
    </section>
  );
};
