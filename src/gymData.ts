/**
 * UK FITNESS (by imkavy) - Paschim Vihar, Delhi
 * 
 * ══════════════════════════════════════════════════════════════════
 * EDITABLE GYM CONFIGURATION
 * Edit prices, hours, contact numbers, classes and photos right here!
 * ══════════════════════════════════════════════════════════════════
 */

// Image imports from local gym photography
import heroGymImg from './assets/images/hero_gym_interior_1791905889696.jpg';
import heroCinematicGymImg from './assets/images/hero_cinematic_gym_1791909638063.jpg';
import trainerImg from './assets/images/trainer_coaching_1791905890733.jpg';
import cardioFloorImg from './assets/images/gym_cardio_floor_1791905890810.jpg';
import weightsRackImg from './assets/images/weights_dumbbells_rack_1791905890742.jpg';
import ukFitnessFloorImg from './assets/images/uk_fitness_real_floor_1791910558055.jpg';
import coachKavyImg from './assets/images/coach_kavy_founder_1791910583350.jpg';

export { heroCinematicGymImg, ukFitnessFloorImg, coachKavyImg };

export interface MembershipPlan {
  id: string;
  name: string;
  durationMonths: number;
  priceINR: number;
  originalPriceINR?: number;
  perDayINR: number;
  badge?: string; // e.g. "MOST POPULAR", "BEST VALUE"
  badgeColor?: 'mustard' | 'brick';
  description: string;
  features: string[];
}

export interface GymClass {
  id: string;
  number: string;
  title: string;
  goal: string;
  duration: string;
  trainer: string;
  intensity: 'Beginner' | 'Moderate' | 'High Intensity' | 'All Levels';
  schedule: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  badge: string;
  timeAgo: string;
  rating: number;
  tiltClass: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: 'Gym Floor' | 'Coaching' | 'Equipment' | 'Community';
  spanClass?: string;
}

export const GYM_CONFIG = {
  // Business Identification
  name: "UK FITNESS",
  subName: "(by imkavy)",
  fullName: "UK FITNESS (by imkavy)",
  type: "Gym & Fitness Centre",
  tagline: "Train Hard. Feel at Home.",
  subTagline: "A real neighborhood gym with supportive coaches, heavy iron, and unmatched energy in Meera Bagh.",

  // Contact & Location
  phoneDisplay: "093115 49106",
  phoneRaw: "+919311549106",
  address: "A-4, Block A, Meera Bagh, Paschim Vihar, Delhi, 110087",
  landmark: "Near Meera Bagh Roundabout, Paschim Vihar",
  city: "Delhi, 110087",
  hoursText: "Open daily, closes 10:30 pm",
  hoursBadge: "Open until 10:30 pm",
  operatingHours: "Monday to Sunday: 6:00 AM – 10:30 PM",

  // Social & External Links
  whatsappUrl: "https://wa.me/919311549106?text=Hi%20UK%20Fitness!%20I%20am%20interested%20in%20joining%20the%20gym.%20Please%20share%20membership%20details.",
  googleReviewsUrl: "https://share.google/xTzlUtk5bcTjV7pHB",
  googleMapsUrl: "https://share.google/xTzlUtk5bcTjV7pHB",
  googleMapsEmbed: "https://maps.google.com/maps?q=A-4,%20Block%20A,%20Meera%20Bagh,%20Paschim%20Vihar,%20Delhi,%20110087&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagramHandle: "@ukfitness_paschimvihar",

  // Rating & Social Proof
  ratingStars: 4.3,
  reviewCount: 19,
  ratingLabel: "4.3 ★ on Google",
  ratingSub: "19 Real Google Reviews",

  // Quick facts below Hero
  quickFacts: [
    { label: "Location", val: "Paschim Vihar, Delhi" },
    { label: "Coaching", val: "Supportive Coaches" },
    { label: "Schedule", val: "Open Daily till 10:30 PM" },
    { label: "Vibe", val: "Great Ambience & Lighting" },
  ],

  // ══════════════════════════════════════════════════════════════
  // MEMBERSHIP PLANS & PRICING (Edit values here)
  // ══════════════════════════════════════════════════════════════
  plans: [
    {
      id: "1-month",
      name: "1 Month Kickstart",
      durationMonths: 1,
      priceINR: 1800,
      perDayINR: 60,
      description: "Ideal for testing the waters, seasonal training, or getting back into the routine.",
      features: [
        "Full access to gym floor & equipment",
        "Free locker & shower facilities",
        "Initial fitness & posture assessment",
        "General trainer floor guidance",
        "Customized starter workout chart",
      ],
    },
    {
      id: "3-months",
      name: "3 Months Transformation",
      durationMonths: 3,
      priceINR: 4500,
      originalPriceINR: 5400,
      perDayINR: 50,
      badge: "MOST POPULAR",
      badgeColor: "mustard",
      description: "Our most chosen plan. Enough time to build solid workout discipline and see real changes.",
      features: [
        "Full unlimited gym floor access",
        "Complimentary fitness & body composition check",
        "Personalized monthly workout routine",
        "Nutritional guidance & diet tips",
        "Active floor coaching by experienced trainers",
        "Free freeze period (up to 7 days)",
      ],
    },
    {
      id: "6-months",
      name: "6 Months Dedication",
      durationMonths: 6,
      priceINR: 7800,
      originalPriceINR: 10800,
      perDayINR: 43,
      description: "Lock in your progress, stay accountable across seasons, and transform your strength.",
      features: [
        "Unlimited gym & cardio zone access",
        "Bi-weekly progress tracking & weight audits",
        "Complete muscle-gain or fat-loss workout charts",
        "Personalized meal plan framework",
        "2 Free Guest Day Passes for friends/family",
        "Free freeze period (up to 15 days)",
      ],
    },
    {
      id: "1-year",
      name: "1 Year Commitment",
      durationMonths: 12,
      priceINR: 13500,
      originalPriceINR: 21600,
      perDayINR: 37,
      badge: "BEST VALUE",
      badgeColor: "mustard",
      description: "Maximum savings for committed lifters. Just ₹37/day for top gear and guidance.",
      features: [
        "Full year uninterrupted gym access",
        "Priority guidance from head trainers",
        "Quarterly revised training & nutrition plans",
        "Free gym starter merchandise pack",
        "5 Free Guest Day Passes",
        "Emergency freeze period (up to 30 days)",
      ],
    },
  ] as MembershipPlan[],

  // Feature comparison matrix
  comparisonFeatures: [
    { feature: "Full Gym & Free Weights Access", m1: true, m3: true, m6: true, m12: true },
    { feature: "Cardio & Treadmill Zone", m1: true, m3: true, m6: true, m12: true },
    { feature: "Trainer Floor Guidance", m1: true, m3: true, m6: true, m12: true },
    { feature: "Personalized Workout Chart", m1: true, m3: true, m6: true, m12: true },
    { feature: "Diet & Meal Guidelines", m1: false, m3: true, m6: true, m12: true },
    { feature: "Body Composition & Progress Tracking", m1: false, m3: true, m6: true, m12: true },
    { feature: "Free Guest Passes", m1: false, m3: false, m6: "2 Passes", m12: "5 Passes" },
    { feature: "Membership Freeze Flexibility", m1: false, m3: "7 Days", m6: "15 Days", m12: "30 Days" },
  ],

  // ══════════════════════════════════════════════════════════════
  // WHY UK FITNESS - BENEFIT PILLARS
  // ══════════════════════════════════════════════════════════════
  benefits: [
    {
      id: "personal-training",
      title: "Personal Training",
      tagline: "One-on-one attention without the intimidation",
      description: "Our certified coaches in Meera Bagh correct your form on every rep, customize progression plans, and push you past your plateaus safely.",
      image: coachKavyImg,
      icon: "Dumbbell",
      highlight: "Coach Kavy & Certified Coaches",
    },
    {
      id: "group-fitness",
      title: "Group Fitness & HIIT",
      tagline: "High-voltage group motivation",
      description: "Sweat together in high-energy sessions including HIIT, functional circuits, and bodyweight conditioning. The energy in the room keeps you moving.",
      image: cardioFloorImg,
      icon: "Users",
      highlight: "High Energy Community",
    },
    {
      id: "amenities",
      title: "Gym & Studio Amenities",
      tagline: "Clean, well-lit and heavy-duty gear",
      description: "Heavy cast iron dumbbells, Olympic bars, sturdy power racks, smooth cable stations, and pristine locker areas. We keep the gym clean, cool, and ready.",
      image: ukFitnessFloorImg,
      icon: "ShieldCheck",
      highlight: "Real UK FITNESS Floor & Gear",
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // CLASSES & TRAINING PROGRAMS (01 - 08)
  // ══════════════════════════════════════════════════════════════
  classes: [
    {
      id: "c1",
      number: "01",
      title: "Strength & Heavy Lifting",
      goal: "Muscle & Power",
      duration: "60 Mins",
      trainer: "Coach Kavy & Team",
      intensity: "Moderate",
      schedule: "Daily slots: Mornings & Evenings",
      description: "Master compound movements: squats, deadlifts, bench presses, and barbell rows with strict technique.",
    },
    {
      id: "c2",
      number: "02",
      title: "Cardio & Stamina Building",
      goal: "Heart Health & Endurance",
      duration: "45 Mins",
      trainer: "Floor Trainers",
      intensity: "Beginner",
      schedule: "Open all day",
      description: "Treadmills, cross-trainers, and stationary bikes programmed for fat burn and peak cardiovascular capacity.",
    },
    {
      id: "c3",
      number: "03",
      title: "Weight Loss & Shred",
      goal: "Fat Loss & Conditioning",
      duration: "50 Mins",
      trainer: "Dedicated Coaches",
      intensity: "High Intensity",
      schedule: "Mon, Wed, Fri (7 AM & 7 PM)",
      description: "High-burn metabolic circuits that melt stubborn fat while maintaining lean muscle tissue.",
    },
    {
      id: "c4",
      number: "04",
      title: "Hypertrophy & Bodybuilding",
      goal: "Muscle Size & Definition",
      duration: "60 Mins",
      trainer: "Senior Mentors",
      intensity: "Moderate",
      schedule: "Daily Push-Pull-Legs routines",
      description: "Targeted isolated movements, supersets, and progressive overload protocols for aesthetic physique development.",
    },
    {
      id: "c5",
      number: "05",
      title: "HIIT Circuit Training",
      goal: "Quick Explosive Burn",
      duration: "40 Mins",
      trainer: "Conditioning Specialist",
      intensity: "High Intensity",
      schedule: "Tue, Thu, Sat (8 AM & 6:30 PM)",
      description: "Short burst intervals with battle ropes, kettlebells, slam balls, and plyometrics for athletic fitness.",
    },
    {
      id: "c6",
      number: "06",
      title: "Mobility & Core Recovery",
      goal: "Flexibility & Joint Health",
      duration: "50 Mins",
      trainer: "Mobility Instructors",
      intensity: "All Levels",
      schedule: "Weekend Mornings",
      description: "Release tight hips, strengthen abdominal wall, decompress the spine, and prevent training injuries.",
    },
    {
      id: "c7",
      number: "07",
      title: "Zumba & Dance Cardio",
      goal: "Fun Full-Body Burn",
      duration: "50 Mins",
      trainer: "Guest Instructor",
      intensity: "All Levels",
      schedule: "Special Weekend Evenings",
      description: "Groove to upbeat music while incinerating hundreds of calories in an energetic group setting.",
    },
    {
      id: "c8",
      number: "08",
      title: "Functional & Cross Training",
      goal: "Everyday Agility",
      duration: "45 Mins",
      trainer: "Functional Coach",
      intensity: "Moderate",
      schedule: "Mon to Sat",
      description: "Multi-joint functional movements that prepare your body for real-life tasks, speed, and balance.",
    },
  ] as GymClass[],

  // ══════════════════════════════════════════════════════════════
  // REAL TESTIMONIALS (Exact quotes from user brief)
  // ══════════════════════════════════════════════════════════════
  reviews: [
    {
      id: "rev-1",
      quote: "Great gym with supportive staff, the ambience and lighting is great.",
      author: "Verified Member",
      badge: "Google Reviewer",
      timeAgo: "Local Guide · Paschim Vihar",
      rating: 5,
      tiltClass: "-rotate-1",
    },
    {
      id: "rev-2",
      quote: "Best energy, best environment, best place.",
      author: "Gym Regular",
      badge: "Google Reviewer",
      timeAgo: "Regular Lifter · Meera Bagh",
      rating: 5,
      tiltClass: "rotate-2",
    },
    {
      id: "rev-3",
      quote: "I love the vibe of the gym, feels great coming everyday for workout!",
      author: "Daily Trainee",
      badge: "Google Reviewer",
      timeAgo: "Morning Batch Member",
      rating: 5,
      tiltClass: "-rotate-2",
    },
  ] as ReviewItem[],

  // ══════════════════════════════════════════════════════════════
  // GALLERY IMAGES
  // ══════════════════════════════════════════════════════════════
  gallery: [
    {
      id: "g1",
      src: ukFitnessFloorImg,
      title: "Official UK FITNESS Meera Bagh Floor",
      caption: "Spacious gym floor with leg presses, Olympic barbell platform, bumper plates and celebratory ambience.",
      category: "Gym Floor",
    },
    {
      id: "g2",
      src: coachKavyImg,
      title: "Coach Kavy & Member Dedication",
      caption: "Founder Coach Kavy and members celebrating strength, dedication, and everyday gym progression.",
      category: "Coaching",
    },
    {
      id: "g3",
      src: cardioFloorImg,
      title: "Functional & Cardio Floor",
      caption: "Ample room for kettlebells, plyometrics, sprints, and treadmill sessions.",
      category: "Gym Floor",
    },
    {
      id: "g4",
      src: weightsRackImg,
      title: "Heavy Dumbbell Racks & Cable Station",
      caption: "Organized dumbbell pairs up to heavy weights for serious lifters.",
      category: "Equipment",
    },
  ] as GalleryPhoto[],
};
