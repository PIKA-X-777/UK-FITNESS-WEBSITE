/**
 * UK FITNESS (by imkavy) - Paschim Vihar, Delhi
 * ══════════════════════════════════════════════════════════════════
 * SINGLE-PAGE GYM WEBSITE (SOLID COLOR PALETTE · ZERO GRADIENTS)
 * 
 * EDITABLE CONFIGURATION SUMMARY (Prices & Details):
 * - Address: A-4, Block A, Meera Bagh, Paschim Vihar, Delhi, 110087
 * - Phone: 093115 49106 (Tap-to-call)
 * - Official WhatsApp: +91 93115 49106 (Redirects with user name & plan)
 * - Google Rating: 4.3 ★ from 19 Reviews
 * - Hours: Open Daily, closes 10:30 PM (6:00 AM - 10:30 PM)
 * - 1 Month Plan: ₹1,800 (~₹60/day)
 * - 3 Months Plan: ₹4,500 (~₹50/day - Most Popular)
 * - 6 Months Plan: ₹7,800 (~₹43/day)
 * - 1 Year Plan: ₹13,500 (~₹37/day - Best Value)
 * (All detailed configuration items live in src/gymData.ts for easy editing!)
 * ══════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Classes } from './components/Classes';
import { Plans } from './components/Plans';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { TrialBanner } from './components/TrialBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TourModal } from './components/TourModal';
import { LightboxModal } from './components/LightboxModal';
import { CookieConsent } from './components/CookieConsent';
import { WhatsAppModal } from './components/WhatsAppModal';
import { GYM_CONFIG, GalleryPhoto } from './gymData';

export default function App() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppPlan, setWhatsAppPlan] = useState<string>('3 Months Transformation (Most Popular)');
  const [selectedPlan, setSelectedPlan] = useState<string>('3 Months Transformation (Most Popular)');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  // When user clicks "Choose Plan"
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Enquire About Class"
  const handleSelectClass = (className: string) => {
    setSelectedClass(className);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open WhatsApp modal with custom prefilled plan
  const handleOpenWhatsApp = (planName?: string) => {
    if (planName) {
      setWhatsAppPlan(planName);
    }
    setWhatsAppModalOpen(true);
  };

  // Gallery lightbox navigation
  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    if (!lightboxPhoto) return;
    const gallery = GYM_CONFIG.gallery;
    const currentIndex = gallery.findIndex((item) => item.id === lightboxPhoto.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
      setLightboxPhoto(gallery[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % gallery.length;
      setLightboxPhoto(gallery[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-slate-100 flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      {/* 1. STICKY NAVBAR */}
      <Navbar
        onOpenTourModal={() => setTourModalOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero
          onOpenTourModal={() => setTourModalOpen(true)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 3. WHY UK FITNESS */}
        <WhyUs onOpenTourModal={() => setTourModalOpen(true)} />

        {/* 4. CLASSES & TRAINING */}
        <Classes onSelectClassForEnquiry={handleSelectClass} />

        {/* 5. MEMBERSHIP PLANS & COMPARISON TABLE */}
        <Plans
          onSelectPlan={handleSelectPlan}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 6. PHOTO GALLERY */}
        <Gallery onPhotoClick={(photo) => setLightboxPhoto(photo)} />

        {/* 7. REAL MEMBER REVIEWS (4.3 ★) */}
        <Reviews />

        {/* 8. FREE TRIAL & GYM TOUR OFFER BANNER */}
        <TrialBanner
          onOpenTourModal={() => setTourModalOpen(true)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 9. CONTACT & GOOGLE MAPS */}
        <Contact
          selectedPlan={selectedPlan}
          selectedClass={selectedClass}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* FLOATING ACTION BAR FOR MOBILE */}
      <FloatingActions onOpenWhatsApp={handleOpenWhatsApp} />

      {/* PRIVACY COOKIES POPUP WITH LOCALSTORAGE CACHING */}
      <CookieConsent />

      {/* INTERACTIVE MODALS */}
      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        defaultPlan={selectedPlan}
      />

      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        initialPlan={whatsAppPlan}
      />

      <LightboxModal
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onNavigate={handleLightboxNavigate}
      />
    </div>
  );
}
