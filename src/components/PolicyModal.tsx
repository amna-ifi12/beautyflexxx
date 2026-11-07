import React from 'react';
import { X, Shield, Truck, FileText } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'shipping' | null;

interface PolicyModalProps {
  policyType: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Policy information">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-[#23150D]/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DDD2]">
          <div className="px-6 py-4 bg-white border-b border-[#E8DDD2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {policyType === 'privacy' && <Shield className="w-5 h-5 text-[#C88242]" />}
              {policyType === 'terms' && <FileText className="w-5 h-5 text-[#C88242]" />}
              {policyType === 'shipping' && <Truck className="w-5 h-5 text-[#C88242]" />}
              <h3 className="font-serif text-lg font-bold text-[#23150D]">
                {policyType === 'privacy' && 'Privacy Policy'}
                {policyType === 'terms' && 'Terms of Service'}
                {policyType === 'shipping' && 'Shipping & Handcrafted Fulfillment'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8C6D58] hover:text-[#23150D] hover:bg-[#F3EDE2] rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 text-sm text-[#4A2E1B] space-y-4 max-h-[70vh] overflow-y-auto leading-relaxed">
            {policyType === 'privacy' && (
              <>
                <p>
                  At <strong>BeautyFlex</strong>, we honor your personal privacy and sensitive skincare journey. We only collect the necessary information (your name, contact number, and delivery address) needed to fulfill and deliver your Coffee Acne Soap order.
                </p>
                <h4 className="font-serif font-bold text-[#23150D] text-base mt-3">Data Protection</h4>
                <p>
                  We never sell, rent, or trade your personal information to third parties or marketing brokers. Your phone number is strictly used for shipment dispatch and order confirmation.
                </p>
                <h4 className="font-serif font-bold text-[#23150D] text-base mt-3">Cookies & Analytics</h4>
                <p>
                  Our website uses lightweight local storage to preserve your cart items and browsing preference across visits. No aggressive cross-site tracking scripts are deployed.
                </p>
              </>
            )}

            {policyType === 'terms' && (
              <>
                <p>
                  Welcome to <strong>BeautyFlex</strong>. By visiting our website or ordering our Coffee Acne Soap, you agree to our terms of service designed to maintain trust and transparency.
                </p>
                <h4 className="font-serif font-bold text-[#23150D] text-base mt-3">Product Authenticity & Care</h4>
                <p>
                  BeautyFlex Coffee Acne Soap is an artisanal 100% organic cleansing product designed for cosmetic skincare use. It is crafted with natural organic coffee grounds. It does not replace medical therapies for clinical skin conditions. If you experience an allergy, discontinue use and consult a physician.
                </p>
                <h4 className="font-serif font-bold text-[#23150D] text-base mt-3">Order Reservations</h4>
                <p>
                  Submissions through our direct checkout represent official batch reservations. Each order is individually checked for batch freshness prior to dispatch.
                </p>
              </>
            )}

            {policyType === 'shipping' && (
              <>
                <p>
                  Every jar and bar of BeautyFlex Coffee Acne Soap is hand-packaged with care to ensure the organic coffee aromatics and texture remain perfectly intact.
                </p>
                <h4 className="font-serif font-bold text-[#23150D] text-base mt-3">Dispatch & Transit Times</h4>
                <p>
                  Orders are dispatched within 24–48 hours of confirmation. Delivery times vary between 2–5 business days depending on your regional location.
                </p>
                <h4 className="font-serif font-bold text-[#23150D] text-base mt-3">Inspection Guarantee</h4>
                <p>
                  If your package arrives compromised, simply contact our care team with your order reference number and we will dispatch a replacement promptly.
                </p>
              </>
            )}
          </div>

          <div className="p-4 bg-white border-t border-[#E8DDD2] text-right">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#4A2E1B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#23150D] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
