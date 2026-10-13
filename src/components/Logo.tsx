import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Precision Geometric UK Athletic Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
        >
          {/* Backing subtle dark rounded shield */}
          <rect
            x="4"
            y="6"
            width="92"
            height="88"
            rx="16"
            fill="#14141C"
            stroke="#262634"
            strokeWidth="2"
          />

          {/* Letter 'U' in Vibrant Athletic Orange #FF5500 */}
          {/* Perfectly balanced athletic U with uniform 10px thickness, aligned with K at y=18 to y=82 */}
          <path
            d="M 18 18 L 28 18 L 28 58 C 28 66 31 72 35 72 C 39 72 42 66 42 58 L 42 18 L 52 18 L 52 58 C 52 74 45 82 35 82 C 25 82 18 74 18 58 Z"
            fill="#FF5500"
          />

          {/* Letter 'K' in Crisp White #FFFFFF */}
          {/* Vertical spine of K */}
          <path
            d="M 58 18 L 68 18 L 68 82 L 58 82 Z"
            fill="#FFFFFF"
          />
          {/* Upper diagonal arm of K */}
          <path
            d="M 68 48 L 86 24 L 96 24 L 76 52 Z"
            fill="#FFFFFF"
          />
          {/* Lower diagonal arm of K */}
          <path
            d="M 74 48 L 96 78 L 84 82 L 68 58 Z"
            fill="#FFFFFF"
          />

          {/* Dynamic center orange wedge linking the monogram */}
          <polygon points="68,48 76,38 74,48" fill="#FF5500" />
        </svg>
      </div>

      {/* Stacked Typography matching FITNESS SIMPLIFIED */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline">
          <span
            className={`font-['Barlow_Condensed'] font-black uppercase tracking-wider text-white ${
              size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl'
            }`}
            style={{ letterSpacing: '0.04em' }}
          >
            UK
          </span>
          <span
            className={`font-['Barlow_Condensed'] font-black uppercase tracking-wider text-[#FF5500] ml-1.5 ${
              size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl'
            }`}
            style={{ letterSpacing: '0.04em' }}
          >
            FITNESS
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
            by imkavy · Paschim Vihar
          </span>
        )}
      </div>
    </div>
  );
};
