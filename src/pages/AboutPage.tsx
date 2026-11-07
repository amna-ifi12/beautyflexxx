import React from 'react';
import { PageId } from '../types';
import {
  Sparkles,
  Heart,
  Coffee,
  ShieldCheck,
  ArrowRight,
  Smile,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
      {/* 1. Brand Introduction Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6D58]">
          <span className="w-2 h-2 rounded-full bg-[#C88242]" />
          <span>About BeautyFlex</span>
          <span aria-hidden="true">·</span>
          <span>Our Story & Heart</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#23150D] text-balance">
          Skincare created to make you feel comfortable in your own skin.
        </h1>

        <p className="text-base sm:text-lg text-[#5A3E2F] leading-relaxed">
          BeautyFlex exists for anyone who has ever felt tired, stressed, or self-conscious about their skin. We believe in gentle, honest self-care without judgment, unrealistic hype, or synthetic extremes.
        </p>
      </section>

      {/* 2. Brand Story & Visual Composition */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Authentic visual of the BeautyFlex soap packaging with jute string */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DDD2] shadow-lg aspect-4/5">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-03_at_6.30.43_PM_444972cc.jpeg"
              alt="BeautyFlex 100% Organic Coffee Acne Soap original artisanal glass jar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-[#E8DDD2] text-xs text-[#4A2E1B] flex items-center gap-2 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C88242] shrink-0" />
              <span>Handcrafted jar with natural twine bow — 100% Organic</span>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C88242]">
            Our Foundation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23150D]">
            The Journey Behind BeautyFlex
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#5A3E2F] leading-relaxed">
            <p>
              Growing up with acne or experiencing sudden flare-ups as a young adult can feel isolating. Walking into a store often means facing shelves filled with chemical-heavy promises, clinical warnings, and intimidating 10-step systems that leave your face stinging and dry.
            </p>
            <p>
              BeautyFlex began with a simple question: <em>What if cleansing your face felt calming, grounding, and kind?</em> Instead of fighting against your skin with harsh detergents, we chose to embrace 100% organic ingredients centered around natural coffee.
            </p>
            <p>
              We deliberately chose not to flood our catalog with dozens of trendy products. BeautyFlex focuses on doing <strong>one thing exceptionally well</strong>: our Coffee Acne Soap, conveniently packaged with 3 full soaps in each pack for just 999 PKR.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why We Focus on Coffee Acne Soap */}
      <section className="bg-white rounded-3xl border border-[#E8DDD2] p-8 sm:p-14 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E8DDD2] text-[#C88242] flex items-center justify-center mx-auto">
            <Coffee className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#23150D]">
            Why Coffee for Acne-Prone Skin?
          </h2>
          <p className="text-sm text-[#5A3E2F]">
            The organic power of coffee goes far beyond morning energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DDD2] space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#23150D]">
              Antioxidant Richness
            </h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              Organic coffee is packed with natural plant antioxidants that help protect stressed skin from daily environmental impurities and oxidative fatigue.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DDD2] space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#23150D]">
              Gentle Micro-Exfoliation
            </h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              Finely milled coffee grounds provide a soft, cushiony texture that lifts away dead skin cells without scratching or tearing sensitive blemishes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DDD2] space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#23150D]">
              Sensory Warmth & Ritual
            </h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              The warm, earthy aroma transforms a stressful chore into a comforting, grounding personal moment at the start and end of your day.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Brand Mission & Values */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D58]">
            What We Stand For
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#23150D]">
            Our Guiding Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8DDD2] shadow-xs space-y-2.5">
            <Heart className="w-5 h-5 text-[#C88242]" />
            <h3 className="font-serif font-bold text-base text-[#23150D]">Empathy First</h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              We never use scare tactics, shaming language, or mock flaw-magnifying images. We honor where your skin is today.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8DDD2] shadow-xs space-y-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C88242]" />
            <h3 className="font-serif font-bold text-base text-[#23150D]">100% Organic Purity</h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              No artificial colorants, no hidden harsh sulfates, no deceptive marketing claims. Pure ingredients you can trust.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8DDD2] shadow-xs space-y-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#C88242]" />
            <h3 className="font-serif font-bold text-base text-[#23150D]">Single Focus</h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              One signature product perfected with care, rather than chasing endless trends.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8DDD2] shadow-xs space-y-2.5">
            <Smile className="w-5 h-5 text-[#C88242]" />
            <h3 className="font-serif font-bold text-base text-[#23150D]">Genuine Confidence</h3>
            <p className="text-xs text-[#6A5243] leading-relaxed">
              Clear skin is a personal journey. We celebrate every step of progress and peaceful self-care along the way.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Emotional Connection Section */}
      <section className="bg-[#F7EBE4] rounded-3xl border border-[#E8DDD2] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8C6D58]">
          To Anyone Struggling with Blemishes
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#23150D]">
          You are more than your skin.
        </h2>
        <p className="text-sm sm:text-base text-[#5A3E2F] leading-relaxed max-w-2xl mx-auto">
          We know what it feels like to check the mirror first thing in the morning with worry. Take a deep breath. Wash gently. Be patient with your healing body. BeautyFlex is here as a supportive friend in your daily routine.
        </p>
      </section>

      {/* 6. Closing CTA to Shop */}
      <section className="text-center pt-4 pb-8 space-y-6">
        <h2 className="font-serif text-3xl font-bold text-[#23150D]">
          Ready to experience the Coffee Acne Soap?
        </h2>
        <p className="text-sm text-[#5A3E2F] max-w-md mx-auto">
          Explore our single signature product and begin your comforting daily cleansing ritual today.
        </p>
        <div>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-4 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Visit the Shop</span>
            <ArrowRight className="w-4 h-4 text-[#E8C5A8]" />
          </button>
        </div>
      </section>
    </div>
  );
};
