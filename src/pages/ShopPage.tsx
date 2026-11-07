import React, { useState } from 'react';
import { PageId } from '../types';
import { COFFEE_ACNE_SOAP } from '../data/product';
import { useCart } from '../context/CartContext';
import {
  Sparkles,
  ShieldCheck,
  Droplets,
  Coffee,
  CheckCircle2,
  Plus,
  Minus,
  ShoppingBag,
  HelpCircle,
  Package,
  Heart,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ShopPageProps {
  onNavigate: (page: PageId) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onNavigate }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse'>('benefits');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(COFFEE_ACNE_SOAP, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
      {/* Toast Notification when added */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#23150D] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-[#C88242] animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#C88242]" />
          <span className="text-xs font-semibold">
            Added {quantity} {quantity === 1 ? 'bar' : 'bars'} to your shopping bag!
          </span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs text-[#E8C5A8] underline font-bold cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Main Product Showcase (PDP Contiguous Purchase Module) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Product Image Gallery using exact uploaded photos */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DDD2] shadow-sm aspect-4/5 sm:aspect-1/1">
            <img
              src={COFFEE_ACNE_SOAP.images[activeImageIndex].url}
              alt={COFFEE_ACNE_SOAP.images[activeImageIndex].alt}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8DDD2] text-xs font-semibold text-[#4A2E1B] flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C88242]" />
              <span>{COFFEE_ACNE_SOAP.images[activeImageIndex].badge}</span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {COFFEE_ACNE_SOAP.images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#4A2E1B] ring-2 ring-[#C88242]/40 shadow-sm'
                    : 'border-[#E8DDD2] opacity-70 hover:opacity-100'
                }`}
                aria-label={`Switch to ${img.title}`}
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

          <div className="p-4 rounded-xl bg-[#F7EBE4] border border-[#E8DDD2] text-xs text-[#6A5243] flex items-center gap-2.5">
            <Package className="w-4 h-4 text-[#C88242] shrink-0" />
            <span>
              <strong>3-in-1 Value Pack:</strong> 3 individually wrapped organic coffee acne soaps in 1 pack for just 999 PKR.
            </span>
          </div>
        </div>

        {/* Right: Purchase Controls & Product Specifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-wider">
              <span>BeautyFlex Skincare</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C88242] font-bold">3 Soaps in 1 Pack</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23150D]">
              Coffee Acne Soap (Pack of 3)
            </h1>

            <p className="text-sm font-semibold text-[#5A3825]">
              3 Acne Soaps in 1 Pack · Just 999 PKR · 100% Organic
            </p>
          </div>

          {/* Pricing & Order Status Notice */}
          <div className="p-5 rounded-2xl bg-white border border-[#E8DDD2] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8C6D58] uppercase tracking-wider font-semibold">Special Direct Pack Offer</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF5EC] text-[#2E7D32]">
                In Stock · 3 Soaps in 1 Pack
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#4A2E1B] font-mono tabular-nums">
                999 PKR
              </div>
              <span className="text-xs text-[#8C6D58]">for complete 3-soap pack (333 PKR / soap)</span>
            </div>
            {quantity > 1 && (
              <div className="text-xs font-semibold text-[#C88242] font-mono tabular-nums pt-1 border-t border-[#F3EDE2]">
                Total for {quantity} packs ({quantity * 3} soaps): {(999 * quantity).toLocaleString()} PKR
              </div>
            )}
            <p className="text-xs text-[#6A5243]">
              Pay easily upon arrival with Cash on Delivery (COD) or direct transfer across Pakistan.
            </p>
          </div>

          <p className="text-sm text-[#4A2E1B] leading-relaxed">
            Formulated specifically to support acne-prone skin without stripping natural barrier moisture. Features 100% organic coffee grounds for mild micro-exfoliation, clearing pore congestion and reviving dull tone. Each pack includes <strong>3 full handcrafted bars</strong>.
          </p>

          {/* Quantity Selector & Add to Cart */}
          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DDD2] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A2E1B] block">
                  Select Quantity:
                </span>
                <span className="text-[11px] text-[#8C6D58]">
                  {quantity} {quantity === 1 ? 'pack (3 soaps)' : `packs (${quantity * 3} soaps)`}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#E8DDD2] rounded-xl p-1 shadow-2xs">
                <button
                  onClick={decrementQty}
                  disabled={quantity <= 1}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#FAF7F2] text-[#4A2E1B] disabled:opacity-30 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-bold text-base text-[#23150D] tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={incrementQty}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#FAF7F2] text-[#4A2E1B] cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 px-6 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#E8C5A8]" />
                <span>Add {quantity} {quantity === 1 ? 'Pack (3 Soaps)' : 'Packs'} · {(999 * quantity).toLocaleString()} PKR</span>
              </button>

              <button
                onClick={() => {
                  addToCart(COFFEE_ACNE_SOAP, quantity);
                  setIsCartOpen(true);
                }}
                className="py-4 px-6 bg-[#C88242] hover:bg-[#B46F33] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center cursor-pointer whitespace-nowrap"
              >
                Order Now · {(999 * quantity).toLocaleString()} PKR
              </button>
            </div>

            <div className="pt-2 text-[11px] text-[#8C6D58] flex items-center justify-between">
              <span>✓ Certified 100% Organic</span>
              <span>✓ Cash on Delivery Friendly</span>
              <span>✓ Direct Support</span>
            </div>
          </div>

          {/* Interactive Information Tabs */}
          <div className="border-t border-[#E8DDD2] pt-6">
            <div className="flex items-center gap-4 border-b border-[#E8DDD2] pb-2 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`pb-2 relative cursor-pointer transition-colors ${
                  activeTab === 'benefits'
                    ? 'text-[#23150D] font-bold border-b-2 border-[#C88242]'
                    : 'text-[#8C6D58] hover:text-[#23150D]'
                }`}
              >
                Verified Benefits
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-2 relative cursor-pointer transition-colors ${
                  activeTab === 'ingredients'
                    ? 'text-[#23150D] font-bold border-b-2 border-[#C88242]'
                    : 'text-[#8C6D58] hover:text-[#23150D]'
                }`}
              >
                Ingredients & Integrity
              </button>
              <button
                onClick={() => setActiveTab('howToUse')}
                className={`pb-2 relative cursor-pointer transition-colors ${
                  activeTab === 'howToUse'
                    ? 'text-[#23150D] font-bold border-b-2 border-[#C88242]'
                    : 'text-[#8C6D58] hover:text-[#23150D]'
                }`}
              >
                Usage Instructions
              </button>
            </div>

            <div className="pt-4 text-xs text-[#5A3E2F] leading-relaxed">
              {activeTab === 'benefits' && (
                <div className="space-y-2.5">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C88242] shrink-0 mt-0.5" />
                    <span><strong>Gently Cleanses Acne-Prone Skin:</strong> Lifts daily oil and surface pollution without irritating active blemishes.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C88242] shrink-0 mt-0.5" />
                    <span><strong>Natural Coffee Grounds:</strong> Provides soft, non-abrasive micro-exfoliation to slough off dead cells.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C88242] shrink-0 mt-0.5" />
                    <span><strong>Preserves Moisture Balance:</strong> Avoids the tight, dry stinging sensation caused by harsh conventional soaps.</span>
                  </p>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-2">
                  <p>
                    <strong>100% Organic Base:</strong> Pure saponified organic plant oils, organic finely ground coffee beans, botanical emollients, and spring water.
                  </p>
                  <p className="text-[11px] text-[#8C6D58]">
                    We strictly uphold transparency: no parabens, no SLS/sulfates, no artificial colorants, no animal testing.
                  </p>
                </div>
              )}

              {activeTab === 'howToUse' && (
                <div className="space-y-2">
                  <p>
                    1. Wet face and lather soap with warm water between palms.<br />
                    2. Massage the rich coffee froth gently for 30–45 seconds.<br />
                    3. Rinse thoroughly and pat dry with a soft cloth.<br />
                    4. Use daily in your morning and evening skincare ritual.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQs Section */}
      <section className="bg-white rounded-3xl border border-[#E8DDD2] p-8 sm:p-12 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E8DDD2] text-[#C88242] flex items-center justify-center mx-auto">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#23150D]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#8C6D58]">
            Clear, transparent answers about BeautyFlex Coffee Acne Soap.
          </p>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-[#F3EDE2]">
          {COFFEE_ACNE_SOAP.faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#23150D] hover:text-[#4A2E1B] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-4 h-4 text-[#C88242] shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#8C6D58] shrink-0 ml-2" />
                )}
              </button>

              {openFaq === index && (
                <p className="mt-2 text-xs text-[#6A5243] leading-relaxed pr-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Brand Promise */}
      <section className="rounded-2xl bg-[#F7EBE4] border border-[#E8DDD2] p-8 text-center space-y-4">
        <Heart className="w-8 h-8 text-[#C88242] mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-[#23150D]">
          Focusing on One Product Done Right
        </h3>
        <p className="text-xs sm:text-sm text-[#5A3E2F] max-w-xl mx-auto leading-relaxed">
          Rather than launching dozens of untested skincare bottles, BeautyFlex is dedicated exclusively to perfecting our Coffee Acne Soap. Handcrafted in small batches, tested with love, and made to bring you confidence every day.
        </p>
        <button
          onClick={() => onNavigate('about')}
          className="text-xs font-semibold text-[#4A2E1B] underline hover:text-[#23150D] cursor-pointer"
        >
          Read the full BeautyFlex story →
        </button>
      </section>
    </div>
  );
};
