import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Send, Navigation, MessageSquare, CheckCircle2, Flame } from 'lucide-react';
import { GYM_CONFIG } from '../gymData';

interface ContactProps {
  selectedPlan?: string;
  selectedClass?: string;
  onOpenWhatsApp: (plan?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedPlan, selectedClass, onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Strength & Muscle Building',
    plan: selectedPlan || '3 Months Transformation (Most Popular)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (selectedClass) {
      setFormData((prev) => ({
        ...prev,
        message: `Interested in the ${selectedClass} class schedule and coach guidance.`,
      }));
    }
  }, [selectedClass]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phone = 'Phone number is required for callback.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setSubmittedData({ ...formData });

      try {
        localStorage.setItem('uk_fitness_user_name', formData.name.trim());
        localStorage.setItem('uk_fitness_user_phone', formData.phone.trim());
      } catch {}
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      goal: 'Strength & Muscle Building',
      plan: '3 Months Transformation (Most Popular)',
      message: '',
    });
    setErrors({});
  };

  const openWhatsAppWithFormDetails = () => {
    const data = submittedData || formData;
    const details = [
      `Hi UK FITNESS!`,
      `My name is ${data.name || 'Prospective Member'}.`,
      `I am inquiring about: ${data.plan}.`,
      `Primary Goal: ${data.goal}.`,
      data.phone ? `My Contact Phone: ${data.phone}.` : '',
      data.message ? `My Question: ${data.message}` : '',
      `Please connect with me regarding registration!`,
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(details);
    window.open(`https://wa.me/919311549106?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="bg-[#0B0B0E] py-18 sm:py-24 border-b border-[#20202A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-md mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>GET IN TOUCH & VISIT US</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] uppercase tracking-tight text-white leading-none mb-3">
            DROP IN OR <span className="text-[#FF5500]">SEND A MESSAGE</span>
          </h2>
          <p className="text-base text-slate-300 font-medium leading-relaxed">
            Have a question about memberships, personal training, or timings? Message us below or navigate straight to our Meera Bagh location.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Contact Details + Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#14141C] border border-[#262634] rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-2 mb-2 text-[#FF5500]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Address</span>
                </div>
                <p className="text-xs font-bold text-white leading-snug">
                  {GYM_CONFIG.address}
                </p>
              </div>

              <div className="bg-[#14141C] border border-[#262634] rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-2 mb-2 text-[#FF5500]">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Phone</span>
                </div>
                <a
                  href={`tel:${GYM_CONFIG.phoneRaw}`}
                  className="text-sm font-black text-white hover:text-[#FF5500] transition-colors block"
                >
                  {GYM_CONFIG.phoneDisplay}
                </a>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Tap to call</span>
              </div>

              <div className="bg-[#14141C] border border-[#262634] rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-2 mb-2 text-[#25D366]">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Hours</span>
                </div>
                <p className="text-xs font-black text-white leading-snug">
                  {GYM_CONFIG.hoursBadge}
                </p>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Open 7 days a week</span>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-[#14141C] border border-[#262634] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-['Bebas_Neue'] uppercase tracking-tight text-white mb-1">
                MEMBERSHIP INQUIRY FORM
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
                Fill in your details and we&apos;ll call you back with exact pricing and schedule options.
              </p>

              {isSubmitted && submittedData ? (
                <div className="bg-[#1A1A24] border border-[#25D366]/40 rounded-xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 rounded-xl mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-['Bebas_Neue'] uppercase text-white">
                      MESSAGE RECEIVED!
                    </h4>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      Thanks <span className="font-bold underline text-white">{submittedData.name}</span>. Coach Kavy or our front desk will call you at <span className="font-bold text-[#FF5500]">{submittedData.phone}</span> shortly.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={openWhatsAppWithFormDetails}
                      className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                      <span>Continue to WhatsApp with Details</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 bg-[#161620] hover:bg-[#20202C] text-slate-300 border border-[#262634] font-bold uppercase tracking-wider text-xs rounded-lg"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name <span className="text-[#FF5500]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rohan Sharma"
                        className={`w-full px-4 py-3 bg-[#1A1A24] border rounded-lg text-sm font-medium text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-[#FF5500]' : 'border-[#262634] focus:border-[#FF5500]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-bold text-[#FF5500] mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number <span className="text-[#FF5500]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98112 XXXXX"
                        className={`w-full px-4 py-3 bg-[#1A1A24] border rounded-lg text-sm font-medium text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-[#FF5500]' : 'border-[#262634] focus:border-[#FF5500]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] font-bold text-[#FF5500] mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rohan@gmail.com"
                        className={`w-full px-4 py-3 bg-[#1A1A24] border rounded-lg text-sm font-medium text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-[#FF5500]' : 'border-[#262634] focus:border-[#FF5500]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-bold text-[#FF5500] mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-goal" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        id="contact-goal"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-medium text-white focus:outline-none"
                      >
                        <option value="Strength & Muscle Building">Strength & Muscle Building</option>
                        <option value="Weight Loss & Fat Burn">Weight Loss & Fat Burn</option>
                        <option value="General Health & Stamina">General Health & Stamina</option>
                        <option value="Personal Coaching 1-on-1">Personal Coaching 1-on-1</option>
                        <option value="Injury Recovery / Mobility">Injury Recovery / Mobility</option>
                      </select>
                    </div>
                  </div>

                  {/* Plan */}
                  <div>
                    <label htmlFor="contact-plan" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1.5">
                      Membership Plan of Interest
                    </label>
                    <select
                      id="contact-plan"
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-medium text-white focus:outline-none"
                    >
                      <option value="1 Month Kickstart (₹1,800)">1 Month Kickstart (₹1,800)</option>
                      <option value="3 Months Transformation (Most Popular - ₹4,500)">3 Months Transformation (Most Popular - ₹4,500)</option>
                      <option value="6 Months Dedication (₹7,800)">6 Months Dedication (₹7,800)</option>
                      <option value="1 Year Commitment (Best Value - ₹13,500)">1 Year Commitment (Best Value - ₹13,500)</option>
                      <option value="Need Advice on Best Plan">Need Advice on Best Plan</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Special Queries <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Any questions on batch timings, personal training availability..."
                      className="w-full px-4 py-3 bg-[#1A1A24] border border-[#262634] focus:border-[#FF5500] rounded-lg text-sm font-medium text-white placeholder-slate-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-[#FF5500] hover:bg-[#E64C00] text-white font-black uppercase tracking-wider text-sm rounded-lg shadow-lg shadow-orange-950/40 transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Membership Inquiry</span>
                    </button>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mt-2.5">
                      ✓ We&apos;ll call you back within 2 business hours. No spam guarantee.
                    </p>
                  </div>

                </form>
              )}
            </div>

          </div>

          {/* Right Column (5 cols): Map & Directions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="bg-[#14141C] border border-[#262634] rounded-2xl p-2 shadow-xl">
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-xl overflow-hidden bg-black">
                <iframe
                  title="UK FITNESS Location Map - Paschim Vihar, Delhi"
                  src={GYM_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Address Strip */}
              <div className="p-3.5 bg-[#101015] border-t border-[#262634] mt-2 rounded-lg flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5500] block">
                    NEIGHBORHOOD GYM LOCATION
                  </span>
                  <p className="text-xs font-bold text-white leading-snug">
                    A-4, Block A, Meera Bagh, Paschim Vihar, Delhi, 110087
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={GYM_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#FF5500] hover:bg-[#E64C00] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md transition-colors text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${GYM_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#161620] hover:bg-[#20202C] border border-[#262634] text-white font-black uppercase tracking-wider text-xs rounded-lg transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* WhatsApp Direct Button */}
            <button
              type="button"
              onClick={() => onOpenWhatsApp(formData.plan)}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black uppercase tracking-wider text-xs rounded-lg shadow-md transition-transform active:scale-98 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Chat with Coach on WhatsApp</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
