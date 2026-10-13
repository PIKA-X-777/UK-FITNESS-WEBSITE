import React from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GYM_CONFIG, GalleryPhoto } from '../gymData';

interface GalleryProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onPhotoClick }) => {
  return (
    <section id="gallery" className="bg-[#0B0B0E] py-18 sm:py-24 border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>FACILITY & GYM FLOOR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none">
              INSIDE <span className="text-[#FF5500]">UK FITNESS</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-md">
            Real photos from our gym floor in Meera Bagh, Paschim Vihar. Clean machines, proper iron, good ventilation, and supportive atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GYM_CONFIG.gallery.map((photo: GalleryPhoto) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(photo)}
              className="group relative bg-[#14141C] border border-[#262634] rounded-2xl overflow-hidden cursor-pointer hover:border-[#FF5500] transition-colors flex flex-col"
            >
              {/* Photo */}
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="bg-[#101015] border-t border-[#262634] text-white p-4 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5500] block mb-0.5">
                    {photo.category}
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-white group-hover:text-[#FF5500] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                </div>
                <div className="w-8 h-8 bg-[#1A1A24] border border-[#262634] text-white rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#FF5500] group-hover:border-[#FF5500] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 bg-[#14141C] border border-[#262634] rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300">
          <span>Tour the floor in person anytime between 6:00 AM and 10:30 PM daily.</span>
          <span className="text-[#FF5500]">Click any photo to enlarge</span>
        </div>

      </div>
    </section>
  );
};
