import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GalleryPhoto } from '../gymData';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, onNavigate]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1A1816]/90 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F2] border-2 border-[#1A1816] shadow-solid-lg overflow-hidden animate-scale-in text-[#1A1816]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={photo.title}
      >
        {/* Top bar with category & close */}
        <div className="bg-[#1A1816] px-5 py-3.5 flex items-center justify-between border-b-2 border-[#1A1816] text-white">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#C92A2A]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#E69A10]">
              UK FITNESS FLOOR · {photo.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 bg-[#FAF7F2] hover:bg-[#C92A2A] hover:text-white text-[#1A1816] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image frame */}
        <div className="relative bg-[#1A1816] max-h-[65vh] flex items-center justify-center overflow-hidden">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full max-h-[65vh] object-contain"
          />

          {/* Nav arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#FAF7F2] hover:bg-[#E69A10] text-[#1A1816] border-2 border-[#1A1816] shadow-solid-sm transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#FAF7F2] hover:bg-[#E69A10] text-[#1A1816] border-2 border-[#1A1816] shadow-solid-sm transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom details */}
        <div className="p-4 sm:p-5 bg-[#EFE9DD] border-t-2 border-[#1A1816] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1816]">
              {photo.title}
            </h3>
            <p className="text-xs text-[#1A1816]/80 font-medium">
              {photo.caption}
            </p>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C92A2A] shrink-0">
            A-4, Meera Bagh, Paschim Vihar
          </span>
        </div>
      </div>
    </div>
  );
};
