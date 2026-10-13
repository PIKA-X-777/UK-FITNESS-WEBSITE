import React from 'react';
import { Check, MessageSquare, ArrowRight, Star, Flame } from 'lucide-react';
import { GYM_CONFIG, MembershipPlan } from '../gymData';

interface PlansProps {
  onSelectPlan: (planName: string) => void;
  onOpenWhatsApp: (plan?: string) => void;
}

export const Plans: React.FC<PlansProps> = ({ onSelectPlan, onOpenWhatsApp }) => {
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="plans" className="bg-[#0E0E14] py-18 sm:py-24 border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
            TRANSPARENT MEMBERSHIP PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none mb-4">
            CHOOSE YOUR <span className="text-[#FF5500]">MEMBERSHIP PLAN</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Pick a duration that matches your fitness goals. Every plan includes full access to all weights, machines, locker facilities, and experienced floor trainer guidance.
          </p>
        </div>

        {/* 4 Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GYM_CONFIG.plans.map((plan: MembershipPlan) => {
            const isPopular = plan.id === '3-months';
            const isBestValue = plan.id === '1-year';

            return (
              <div
                key={plan.id}
                className={`relative bg-[#14141C] border rounded-2xl flex flex-col justify-between card-hover-move cursor-pointer group ${
                  isPopular
                    ? 'border-[#FF5500] ring-1 ring-[#FF5500] shadow-xl shadow-orange-950/40 lg:-translate-y-2'
                    : isBestValue
                    ? 'border-[#FF5500]/60 hover:border-[#FF5500]'
                    : 'border-[#262634] hover:border-[#FF5500]'
                }`}
              >
                {/* Stamp Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5500] text-white px-3.5 py-0.5 rounded-full whitespace-nowrap z-10 flex items-center gap-1 font-['Bebas_Neue'] text-xs font-black uppercase tracking-wider shadow-md">
                    <Star className="w-3 h-3 fill-white" />
                    <span>★ {plan.badge} ★</span>
                  </div>
                )}

                {/* Card Top */}
                <div className="p-6 sm:p-7">
                  {/* Plan Name & Duration */}
                  <div className="pb-3 border-b border-[#262634] mb-4">
                    <h3 className="text-2xl font-['Bebas_Neue'] uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {plan.durationMonths === 1 ? '30 Days Access' : `${plan.durationMonths} Months Duration`}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-['Bebas_Neue'] font-black tracking-tight text-white">
                        {formatINR(plan.priceINR)}
                      </span>
                      {plan.originalPriceINR && (
                        <span className="text-sm font-bold text-slate-500 line-through">
                          {formatINR(plan.originalPriceINR)}
                        </span>
                      )}
                    </div>
                    
                    <div className="inline-block mt-1 px-2.5 py-0.5 text-xs font-bold uppercase text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded">
                      Approx. ₹{plan.perDayINR} / day
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 pt-3 border-t border-[#262634]">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      WHAT&apos;S INCLUDED:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-200">
                        <span className="w-4 h-4 bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40 rounded flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTAs */}
                <div className="p-6 sm:p-7 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className="w-full py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E64C00] rounded-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-950/30"
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenWhatsApp(plan.name)}
                    className="w-full py-2.5 px-3 text-[11px] font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-[#14141C] border border-[#262634] rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-6 bg-[#101015] border-b border-[#262634] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-['Bebas_Neue'] uppercase tracking-wider text-white">
              MEMBERSHIP PLAN COMPARISON
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
              Transparent breakdown across all options
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#181822] border-b border-[#262634] text-slate-300 font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-2/5">Feature / Benefit</th>
                  <th className="py-4 px-3 text-center border-l border-[#262634]">1 Month</th>
                  <th className="py-4 px-3 text-center border-l border-[#262634] bg-[#FF5500]/10 text-white font-extrabold">3 Months</th>
                  <th className="py-4 px-3 text-center border-l border-[#262634]">6 Months</th>
                  <th className="py-4 px-3 text-center border-l border-[#262634] bg-[#FF5500]/20 text-white font-extrabold">1 Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262634] font-medium text-slate-300">
                {GYM_CONFIG.comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}>
                    <td className="py-3.5 px-6 font-bold text-white">
                      {row.feature}
                    </td>

                    {/* 1 Month */}
                    <td className="py-3.5 px-3 text-center border-l border-[#262634]">
                      {typeof row.m1 === 'boolean' ? (
                        row.m1 ? (
                          <span className="inline-flex w-5 h-5 bg-[#FF5500]/20 text-[#FF5500] items-center justify-center rounded">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-bold text-white">{row.m1}</span>
                      )}
                    </td>

                    {/* 3 Months */}
                    <td className="py-3.5 px-3 text-center border-l border-[#262634] bg-[#FF5500]/5">
                      {typeof row.m3 === 'boolean' ? (
                        row.m3 ? (
                          <span className="inline-flex w-5 h-5 bg-[#FF5500] text-white items-center justify-center rounded">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-bold text-white">{row.m3}</span>
                      )}
                    </td>

                    {/* 6 Months */}
                    <td className="py-3.5 px-3 text-center border-l border-[#262634]">
                      {typeof row.m6 === 'boolean' ? (
                        row.m6 ? (
                          <span className="inline-flex w-5 h-5 bg-[#FF5500]/20 text-[#FF5500] items-center justify-center rounded">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-bold text-white">{row.m6}</span>
                      )}
                    </td>

                    {/* 1 Year */}
                    <td className="py-3.5 px-3 text-center border-l border-[#262634] bg-[#FF5500]/10">
                      {typeof row.m12 === 'boolean' ? (
                        row.m12 ? (
                          <span className="inline-flex w-5 h-5 bg-[#FF5500] text-white items-center justify-center rounded">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="text-slate-600 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-black text-white">{row.m12}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#101015] border-t border-[#262634] flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-slate-300 gap-2">
            <span>Travelling or exams? Ask about our easy membership pause/freeze policy.</span>
            <span className="text-[#FF5500] uppercase font-black">Zero Registration Fee This Month</span>
          </div>
        </div>

      </div>
    </section>
  );
};
