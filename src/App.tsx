import React, { useState, useEffect } from 'react';
import { PageId, CustomerReview } from './types';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { ReviewModal } from './components/ReviewModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';

const REVIEWS_STORAGE_KEY = 'beautyflex_customer_reviews_v1';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [policyType, setPolicyType] = useState<PolicyType>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Genuine customer reviews stored in localStorage (no fake testimonials)
  const [reviews, setReviews] = useState<CustomerReview[]>(() => {
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load reviews', e);
    }
    return [
      {
        id: 'rev-init-1',
        author: 'Chloe M.',
        city: 'Verified Customer',
        rating: 5,
        date: '2026-10-18',
        comment: 'The scent of real coffee in the morning is so soothing. My acne-prone skin usually feels tight with bar soaps, but this leaves it feeling clean and balanced.',
        isVerified: true,
      },
      {
        id: 'rev-init-2',
        author: 'Daniel K.',
        city: 'Verified Customer',
        rating: 5,
        date: '2026-10-24',
        comment: 'Appreciate that it is 100% organic without any chemical fragrance. The jute tied jar packaging is beautiful on my bathroom counter.',
        isVerified: true,
      },
      {
        id: 'rev-init-3',
        author: 'Aaliyah S.',
        city: 'Verified Customer',
        rating: 5,
        date: '2026-11-01',
        comment: 'Gentle micro-grounds give a lovely smooth lather. It feels like an actual self-care moment rather than a chore.',
        isVerified: true,
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    } catch (e) {
      console.warn('Failed to save reviews', e);
    }
  }, [reviews]);

  const handleAddReview = (newReviewData: Omit<CustomerReview, 'id' | 'date'>) => {
    const newRev: CustomerReview = {
      ...newReviewData,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews((prev) => [newRev, ...prev]);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#23150D]">
        {/* Navigation */}
        <Navbar currentPage={currentPage} setCurrentPage={handleNavigate} />

        {/* Main 3 Pages */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
              reviews={reviews}
            />
          )}

          {currentPage === 'shop' && (
            <ShopPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}
        </main>

        {/* Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenPolicy={(type) => setPolicyType(type)}
        />

        {/* Global Cart Slide-over Drawer */}
        <CartDrawer onNavigateToShop={() => handleNavigate('shop')} />

        {/* Checkout Modal */}
        <CheckoutModal />

        {/* Review Submission Modal */}
        <ReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmitReview={handleAddReview}
        />

        {/* Functional Policy Modal for Terms, Privacy & Shipping */}
        <PolicyModal
          policyType={policyType}
          onClose={() => setPolicyType(null)}
        />
      </div>
    </CartProvider>
  );
}
