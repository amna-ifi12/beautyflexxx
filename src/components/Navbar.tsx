import React, { useState } from 'react';
import { PageId } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { totalQuantity, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD2] transition-colors duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#4A2E1B] text-[#FAF7F2] text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E8C5A8]" />
          <span>Special Offer: 3 Acne Soaps in 1 Pack for Just 999 PKR · 100% Organic · Cash on Delivery</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C88242] rounded-md py-1"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-[#E8DDD2] shadow-xs transition-transform group-hover:scale-105 shrink-0 flex items-center justify-center">
              <img
                src="/assets/aistudio/Inviting_Acne_Business_Logo_with_Face_Outline_947bd64d.png"
                alt="BeautyFlex Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#23150D] group-hover:text-[#4A2E1B] transition-colors whitespace-nowrap">
                BeautyFlex
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C6D58] font-medium -mt-1">
                Coffee Skincare
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-line, quiet typography) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors whitespace-nowrap relative py-1 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#23150D] font-semibold'
                  : 'text-[#6A5243] hover:text-[#23150D]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C88242] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNav('shop')}
              className={`transition-colors whitespace-nowrap relative py-1 cursor-pointer ${
                currentPage === 'shop'
                  ? 'text-[#23150D] font-semibold'
                  : 'text-[#6A5243] hover:text-[#23150D]'
              }`}
            >
              Shop Soap
              {currentPage === 'shop' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C88242] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`transition-colors whitespace-nowrap relative py-1 cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#23150D] font-semibold'
                  : 'text-[#6A5243] hover:text-[#23150D]'
              }`}
            >
              About BeautyFlex
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C88242] rounded-full" />
              )}
            </button>
          </nav>

          {/* Zone 3: Primary Action & Cart Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping Cart with ${totalQuantity} items`}
              className="relative p-2.5 rounded-full text-[#23150D] hover:bg-[#F3EDE2] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C88242]"
            >
              <ShoppingBag className="w-5 h-5 text-[#4A2E1B]" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C88242] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm tabular-nums">
                  {totalQuantity}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNav('shop')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#4A2E1B] hover:bg-[#23150D] rounded-full shadow-sm transition-all hover:shadow duration-150 cursor-pointer whitespace-nowrap"
            >
              Shop Now
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="md:hidden p-2 rounded-lg text-[#23150D] hover:bg-[#F3EDE2] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DDD2] px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => handleNav('home')}
              className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-[#F3EDE2] text-[#23150D] font-semibold'
                  : 'text-[#6A5243]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('shop')}
              className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'shop'
                  ? 'bg-[#F3EDE2] text-[#23150D] font-semibold'
                  : 'text-[#6A5243]'
              }`}
            >
              Shop Coffee Acne Soap
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-[#F3EDE2] text-[#23150D] font-semibold'
                  : 'text-[#6A5243]'
              }`}
            >
              About BeautyFlex
            </button>
            <div className="pt-2 border-t border-[#E8DDD2]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-between py-3 px-4 bg-[#F3EDE2] text-[#23150D] rounded-lg font-medium cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#4A2E1B]" />
                  <span>View Cart</span>
                </span>
                <span className="bg-[#C88242] text-white text-xs font-bold px-2 py-0.5 rounded-full tabular-nums">
                  {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
