import React from 'react';
import { PageId } from '../types';
import { PolicyType } from './PolicyModal';
import { Heart, Instagram, Sparkles, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  return (
    <footer className="bg-[#23150D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#3A2417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#3D2517]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-[#3E271A] shadow-xs shrink-0 flex items-center justify-center">
                <img
                  src="/assets/aistudio/Inviting_Acne_Business_Logo_with_Face_Outline_947bd64d.png"
                  alt="BeautyFlex Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                BeautyFlex
              </span>
            </div>
            <p className="text-sm text-[#D9C3B3] max-w-sm leading-relaxed">
              Gentle care for clearer-looking skin. Our 100% organic Coffee Acne Soap turns daily cleansing into a grounding, confidence-building self-care ritual.
            </p>
            <div className="p-4 rounded-xl bg-[#2D1B11] border border-[#3E271A] text-xs text-[#E8DDD2] flex items-start gap-2.5 max-w-sm">
              <Sparkles className="w-4 h-4 text-[#C88242] shrink-0 mt-0.5" />
              <span>
                "Your skin journey is personal. BeautyFlex is here to make self-care feel good."
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#C88242]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D9C3B3]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Shop Coffee Acne Soap
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About BeautyFlex
                </button>
              </li>
            </ul>
          </div>

          {/* Transparency & Customer Care */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#C88242]">
              Customer Care & Transparency
            </h4>
            <p className="text-xs text-[#D9C3B3] leading-relaxed">
              We provide only verified organic attributes and transparent batch details. Zero synthetic harshness, zero unrealistic claims.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-[#D9C3B3]">
              <div className="flex items-center gap-2 text-xs">
                <Mail className="w-4 h-4 text-[#C88242]" />
                <span>care@beautyflex.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#C88242]" />
                <span>Handcrafted & Inspected in Fresh Batches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Policy Modals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A98D7B]">
          <p>© {new Date().getFullYear()} BeautyFlex. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenPolicy('shipping')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Shipping & Delivery
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
