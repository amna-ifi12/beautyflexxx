import React, { useState } from 'react';
import { PageId, CustomerReview } from '../types';
import { COFFEE_ACNE_SOAP } from '../data/product';
import { useCart } from '../context/CartContext';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Coffee,
  CheckCircle2,
  HeartHandshake,
  Star,
  Plus,
  MessageSquarePlus,
  Info
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenReviewModal: () => void;
  reviews: CustomerReview[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenReviewModal,
  reviews,
}) => {
  const { addToCart } = useCart();
  const [selectedHeroImage, setSelectedHeroImage] = useState(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleHeroAdd = () => {
    addToCart(COFFEE_ACNE_SOAP, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1800);
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 md:py-16 overflow-hidden">
        {/* Subtle warm background elements */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F7EBE4] rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#E8DDD2] rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D58]">
                <span className="w-2 h-2 rounded-full bg-[#C88242]" />
                <span>3 Acne Soaps in 1 Pack</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-[#4A2E1B] font-mono tabular-nums">Just 999 PKR</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#23150D] leading-[1.15] text-balance">
                Gentle care for clear, confident skin.
              </h1>

              <p className="text-base sm:text-lg text-[#5A3E2F] max-w-xl leading-relaxed">
                Breakouts don’t define who you are. BeautyFlex Coffee Acne Soap brings natural organic coffee and soothing botanicals into a gentle daily cleanse. Get <strong>3 full soaps in 1 pack for just 999 PKR</strong>.
              </p>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-[#E8DDD2] shadow-xs">
                  <div className="text-[#C88242] font-semibold text-xs flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>3 Soaps in 1 Pack</span>
                  </div>
                  <p className="text-[11px] text-[#6A5243]">Just 999 PKR total</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E8DDD2] shadow-xs">
                  <div className="text-[#C88242] font-semibold text-xs flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% Organic</span>
                  </div>
                  <p className="text-[11px] text-[#6A5243]">Authentic formulation</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E8DDD2] shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-[#C88242] font-semibold text-xs flex items-center gap-1.5 mb-1">
                    <Droplets className="w-4 h-4" />
                    <span>Acne-Prone Care</span>
                  </div>
                  <p className="text-[11px] text-[#6A5243]">Gentle daily cleanse</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-8 py-3.5 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Shop 3-Soap Pack</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleHeroAdd}
                  className="px-6 py-3.5 bg-[#F7EBE4] hover:bg-[#E8DDD2] text-[#4A2E1B] border border-[#E8DDD2] text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#C88242]" />
                  <span>{addedAnimation ? 'Added to Bag!' : 'Quick Add · 3 Soaps for 999 PKR'}</span>
                </button>
              </div>

              {/* Reassurance text */}
              <p className="text-xs text-[#8C6D58] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C88242]" />
                <span>Individually sealed for freshness · No synthetic fragrances or sulfates</span>
              </p>
            </div>

            {/* Right Showcase Column (Original Uploaded Product Image) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative warm aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#C88242]/20 via-[#F7EBE4]/40 to-transparent rounded-3xl -z-10 blur-xl" />

                {/* Primary Photo Container */}
                <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DDD2] shadow-xl aspect-4/5 sm:aspect-1/1 lg:aspect-4/5">
                  <img
                    src={COFFEE_ACNE_SOAP.images[selectedHeroImage].url}
                    alt={COFFEE_ACNE_SOAP.images[selectedHeroImage].alt}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Organic Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8DDD2] shadow-xs text-[11px] font-semibold text-[#4A2E1B] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C88242]" />
                    <span>{COFFEE_ACNE_SOAP.images[selectedHeroImage].badge || '100% Organic'}</span>
                  </div>
                </div>

                {/* Thumbnail Selector Bar */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  {COFFEE_ACNE_SOAP.images.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedHeroImage(idx)}
                      aria-label={`View photo ${idx + 1}`}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedHeroImage === idx
                          ? 'border-[#4A2E1B] scale-105 shadow-md ring-2 ring-[#C88242]/30'
                          : 'border-[#E8DDD2] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMOTIONAL CONNECTION SECTION */}
      <section className="bg-gradient-to-b from-[#F7EBE4] via-[#FDFBF7] to-[#FAF7F2] py-16 md:py-20 border-y border-[#E8DDD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-white border border-[#E8DDD2] text-[#C88242] flex items-center justify-center mx-auto shadow-xs">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D58]">
              An Empathetic Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23150D] text-balance">
              Your skin journey is personal. We're here to make self-care feel good.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#5A3E2F] leading-relaxed max-w-2xl mx-auto">
            Acne can be exhausting. It tests your patience, brings moments of doubt, and sometimes makes you feel like hiding. We understand the vulnerability that comes with breakouts. BeautyFlex was never built to shame you or promise unrealistic overnight miracles. We simply believe in gentle, honest cleansing that helps you feel at peace in your own skin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-5 rounded-xl bg-white border border-[#E8DDD2] shadow-xs">
              <h3 className="font-serif font-bold text-[#23150D] text-base mb-1">
                Zero Skin-Shaming
              </h3>
              <p className="text-xs text-[#6A5243] leading-relaxed">
                Breakouts happen to almost everyone. Your skin deserves patience, kindness, and gentle care, not frustration.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8DDD2] shadow-xs">
              <h3 className="font-serif font-bold text-[#23150D] text-base mb-1">
                Simple Daily Ritual
              </h3>
              <p className="text-xs text-[#6A5243] leading-relaxed">
                No complex 10-step routines with conflicting ingredients. One organic bar that gently purifies and balances.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8DDD2] shadow-xs">
              <h3 className="font-serif font-bold text-[#23150D] text-base mb-1">
                Warmth & Comfort
              </h3>
              <p className="text-xs text-[#6A5243] leading-relaxed">
                The comforting, grounding scent of organic coffee grounds makes washing your face a refreshing moment you look forward to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#E8DDD2] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Authentic Product Imagery */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8DDD2] shadow-inner aspect-4/5">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-08_at_12.51.08_AM_cf8cd159.jpeg"
                  alt="BeautyFlex Anti-Acne Soap jar with wrapped bar and Thank You seal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center text-xs text-[#8C6D58]">
                Authentic handcrafted packaging with individual thank-you seal
              </p>
            </div>

            {/* Product Details & Purchase Trigger */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C88242]">
                  The Signature 3-in-1 Value Pack
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23150D] mt-1">
                  Coffee Acne Soap (3 Soaps in 1 Pack)
                </h2>
                <p className="text-sm font-semibold text-[#8C6D58] mt-1">
                  3 Handcrafted Soap Bars · 100% Organic · Just 999 PKR
                </p>
              </div>

              <p className="text-base text-[#5A3E2F] leading-relaxed">
                Formulated exclusively for acne-prone skin, this artisanal bar marries organic coffee with gentle cleansing plant oils. Every pack delivers <strong>3 full soap bars</strong> to keep your skin clear, calm, and visibly refreshed for weeks.
              </p>

              {/* Specifications Pills/List */}
              <div className="border-t border-b border-[#F3EDE2] py-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#8C6D58] block">Pack Contents:</span>
                  <strong className="text-[#23150D]">3 Soaps in 1 Pack</strong>
                </div>
                <div>
                  <span className="text-[#8C6D58] block">Certification:</span>
                  <strong className="text-[#23150D]">100% Organic</strong>
                </div>
                <div>
                  <span className="text-[#8C6D58] block">Skin Concern:</span>
                  <strong className="text-[#23150D]">Blemishes & Breakouts</strong>
                </div>
                <div>
                  <span className="text-[#8C6D58] block">Price:</span>
                  <strong className="text-[#4A2E1B] font-mono tabular-nums">999 PKR (Complete Pack)</strong>
                </div>
              </div>

              {/* Price Transparency & Direct Order CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#8C6D58] block">Pack Price:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif font-bold text-[#4A2E1B] font-mono tabular-nums">
                      999 PKR
                    </span>
                    <span className="text-xs text-[#8C6D58]">for all 3 soaps · Cash on Delivery</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onNavigate('shop')}
                    className="flex-1 sm:flex-initial px-6 py-3 border border-[#4A2E1B] text-[#4A2E1B] hover:bg-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => addToCart(COFFEE_ACNE_SOAP, 1)}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer text-center"
                  >
                    Add 3-in-1 Pack · 999 PKR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE BEAUTYFLEX (VERIFIED ATTRIBUTES ONLY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D58]">
            Pure Integrity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23150D]">
            Why choose BeautyFlex?
          </h2>
          <p className="text-sm sm:text-base text-[#5A3E2F]">
            No false miracles or synthetic gimmicks. We rely only on verified organic qualities and honest skincare principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COFFEE_ACNE_SOAP.features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-[#E8DDD2] shadow-xs hover:border-[#C88242]/50 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DDD2] flex items-center justify-center text-[#C88242]">
                {feature.icon === 'sparkles' && <Sparkles className="w-5 h-5" />}
                {feature.icon === 'shield-check' && <ShieldCheck className="w-5 h-5" />}
                {feature.icon === 'droplets' && <Droplets className="w-5 h-5" />}
                {feature.icon === 'coffee' && <Coffee className="w-5 h-5" />}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#23150D]">
                {feature.title}
              </h3>
              <p className="text-xs text-[#6A5243] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW TO USE RITUAL */}
      <section className="bg-[#FAF7F2] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D58]">
              The Daily Cleanse
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23150D]">
              How to use Coffee Acne Soap
            </h2>
            <p className="text-sm text-[#5A3E2F]">
              A mindful, comforting cleansing ritual for morning and evening.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COFFEE_ACNE_SOAP.usageSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-[#E8DDD2] shadow-xs relative"
              >
                <span className="text-3xl font-serif font-bold text-[#E8C5A8] block mb-2">
                  {step.step}
                </span>
                <h3 className="font-serif font-bold text-[#23150D] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6A5243] leading-relaxed">
                  {step.instruction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GENUINE CUSTOMER REVIEWS (NO FAKE TESTIMONIALS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#E8DDD2] p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#F3EDE2]">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D58]">
                Real Stories & Reflections
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#23150D]">
                Community Experiences
              </h2>
              <p className="text-xs text-[#8C6D58] max-w-md">
                We believe in 100% genuine feedback. We never buy or simulate testimonials. Here is what real customers share about their skincare moments.
              </p>
            </div>

            <button
              onClick={onOpenReviewModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F7EBE4] hover:bg-[#E8DDD2] text-[#4A2E1B] text-xs font-semibold uppercase tracking-wider rounded-full border border-[#E8DDD2] transition-colors cursor-pointer self-start md:self-auto"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#C88242]" />
              <span>Share Your Story</span>
            </button>
          </div>

          {reviews.length === 0 ? (
            <div className="text-center py-10 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#8C6D58] flex items-center justify-center mx-auto">
                <Info className="w-6 h-6" />
              </div>
              <p className="font-serif text-lg text-[#23150D] font-semibold">
                Be the first to share your journey!
              </p>
              <p className="text-xs text-[#6A5243] max-w-md mx-auto">
                As a newly launched organic skincare batch, we welcome your authentic experience with BeautyFlex Coffee Acne Soap.
              </p>
              <button
                onClick={onOpenReviewModal}
                className="mt-2 px-6 py-2 bg-[#4A2E1B] text-white text-xs font-semibold rounded-full hover:bg-[#23150D] transition-colors cursor-pointer"
              >
                Write First Review
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DDD2] space-y-3"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < rev.rating
                            ? 'text-[#C88242] fill-[#C88242]'
                            : 'text-[#D9C3B3]'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-[#4A2E1B] italic leading-relaxed">
                    "{rev.comment}"
                  </p>

                  <div className="pt-2 border-t border-[#E8DDD2] flex items-center justify-between text-[11px] text-[#8C6D58]">
                    <span className="font-semibold text-[#23150D]">{rev.author}</span>
                    <span>{rev.city}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#4A2E1B] to-[#23150D] text-white p-8 sm:p-14 shadow-xl text-center space-y-6 relative overflow-hidden">
          {/* Subtle warm decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C88242]/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs uppercase tracking-widest text-[#E8C5A8] font-bold">
            Start Your Gentle Cleansing Ritual
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-balance">
            Give your skin the kindness and care it deserves.
          </h2>

          <p className="text-sm sm:text-base text-[#D9C3B3] max-w-xl mx-auto leading-relaxed">
            Discover how 100% organic coffee grounds and soothing lather transform your daily routine into a moment of pure confidence.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-3.5 bg-[#C88242] hover:bg-[#B46F33] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Product & Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
            >
              Our Brand Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
