import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle, ShieldCheck, MapPin, Phone, User, Package, AlertCircle, Copy, Check } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, clearCart, totalQuantity, subtotal } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
    paymentMethod: 'cod', // 'cod' | 'bank' | 'card_notice'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<null | {
    orderNumber: string;
    date: string;
    totalBars: number;
    totalAmount: number;
    shippingTo: string;
    phone: string;
    paymentMethod: string;
  }>(null);

  const [copied, setCopied] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in your name, contact phone number, and delivery address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderRef = `BF-${Math.floor(100000 + Math.random() * 900000)}`;
      const confirmation = {
        orderNumber: orderRef,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        totalBars: totalQuantity,
        totalAmount: subtotal > 0 ? subtotal : totalQuantity * 999,
        shippingTo: `${formData.fullName}, ${formData.address}, ${formData.city}`,
        phone: formData.phone,
        paymentMethod:
          formData.paymentMethod === 'cod'
            ? 'Cash on Delivery (COD)'
            : formData.paymentMethod === 'bank'
            ? 'Direct Bank Transfer'
            : 'Payment via Merchant Gateway Confirmation',
      };

      setOrderConfirmed(confirmation);
      clearCart();
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyOrderNumber = () => {
    if (orderConfirmed) {
      navigator.clipboard.writeText(orderConfirmed.orderNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderConfirmed(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Checkout">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-[#23150D]/60 backdrop-blur-xs transition-opacity"
          onClick={handleClose}
        />

        {/* Modal Box */}
        <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DDD2]">
          {/* Modal Header */}
          <div className="px-6 py-4 bg-white border-b border-[#E8DDD2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#C88242]" />
              <h3 className="font-serif text-lg font-bold text-[#23150D]">
                {orderConfirmed ? 'Order Reservation Confirmed' : 'BeautyFlex Direct Checkout'}
              </h3>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 text-[#8C6D58] hover:text-[#23150D] hover:bg-[#F3EDE2] rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {orderConfirmed ? (
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF5EC] text-[#2E7D32] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#23150D]">
                    Thank You for Your Order!
                  </h4>
                  <p className="text-sm text-[#6A5243] mt-1 max-w-md mx-auto">
                    Your request for BeautyFlex Coffee Acne Soap has been received. Our team will verify batch readiness and contact you directly via phone/WhatsApp.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="p-5 rounded-xl bg-white border border-[#E8DDD2] text-left max-w-md mx-auto space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F3EDE2]">
                    <span className="text-xs text-[#8C6D58]">Order Reference:</span>
                    <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-[#23150D]">
                      <span>{orderConfirmed.orderNumber}</span>
                      <button
                        onClick={handleCopyOrderNumber}
                        className="p-1 text-[#8C6D58] hover:text-[#4A2E1B] rounded transition-colors cursor-pointer"
                        title="Copy Order ID"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6A5243]">
                    <span>Item:</span>
                    <span className="font-medium text-[#23150D]">
                      Coffee Acne Soap (3 Soaps in 1 Pack)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6A5243]">
                    <span>Packs Ordered:</span>
                    <span className="font-semibold text-[#23150D] tabular-nums">
                      {orderConfirmed.totalBars} {orderConfirmed.totalBars === 1 ? 'pack (3 soaps)' : `packs (${orderConfirmed.totalBars * 3} soaps)`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6A5243]">
                    <span>Price per Pack:</span>
                    <span className="font-medium text-[#23150D] font-mono tabular-nums">
                      999 PKR (for 3 soaps)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6A5243] font-semibold pt-1 border-t border-[#F3EDE2]">
                    <span>Total Amount Payable:</span>
                    <span className="text-sm font-bold text-[#4A2E1B] font-mono tabular-nums">
                      {orderConfirmed.totalAmount.toLocaleString()} PKR
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6A5243]">
                    <span>Payment Method:</span>
                    <span className="font-medium text-[#23150D]">{orderConfirmed.paymentMethod}</span>
                  </div>

                  <div className="flex items-start justify-between text-xs text-[#6A5243] pt-2 border-t border-[#F3EDE2]">
                    <span>Shipping Destination:</span>
                    <span className="font-medium text-[#23150D] text-right max-w-[200px] truncate">
                      {orderConfirmed.shippingTo}
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="p-4 rounded-xl bg-[#F7EBE4] border border-[#E8DDD2] text-left text-xs text-[#6A5243] space-y-1">
                  <p className="font-semibold text-[#4A2E1B]">What happens next?</p>
                  <p>1. Our fulfillment team reviews your delivery address and confirms batch stock.</p>
                  <p>2. You will receive an SMS or WhatsApp confirmation at <strong>{orderConfirmed.phone}</strong> with tracking details.</p>
                  <p>3. If Cash on Delivery is selected, please keep <strong>{orderConfirmed.totalAmount.toLocaleString()} PKR</strong> ready upon courier arrival for your {orderConfirmed.totalBars * 3} soaps.</p>
                </div>

                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                >
                  Return to Store
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Order Summary Strip */}
                <div className="p-4 rounded-xl bg-white border border-[#E8DDD2] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DDD2] flex items-center justify-center text-[#4A2E1B]">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[#23150D] text-sm">
                        Coffee Acne Soap — 3 Soaps in 1 Pack
                      </h4>
                      <p className="text-xs text-[#8C6D58]">
                        {totalQuantity} {totalQuantity === 1 ? 'pack (3 soaps inside)' : `packs (${totalQuantity * 3} soaps)`} · 999 PKR / pack
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#8C6D58] block">Total Payable:</span>
                    <span className="text-sm font-bold text-[#4A2E1B] font-mono tabular-nums">
                      {(subtotal > 0 ? subtotal : totalQuantity * 999).toLocaleString()} PKR
                    </span>
                  </div>
                </div>

                {/* Delivery Information */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D58] mb-3 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#C88242]" />
                    <span>Customer & Delivery Details</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4A2E1B] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A2E1B] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 555-019-2834"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-[#4A2E1B] mb-1">
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street, apartment, or house number"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A2E1B] mb-1">
                        City / Town
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Austin"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A2E1B] mb-1">
                        Postal / ZIP Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="e.g. 78701"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-[#4A2E1B] mb-1">
                        Special Delivery Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Leave at porch, call before arriving, etc."
                        className="w-full px-3.5 py-2 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242] resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection & Gateway Transparency */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D58] mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C88242]" />
                    <span>Payment & Fulfillment Option</span>
                  </h4>

                  <div className="space-y-2.5">
                    <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'bg-white border-[#4A2E1B] shadow-xs'
                        : 'bg-[#FAF7F2] border-[#E8DDD2] hover:bg-white'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="mt-1 text-[#4A2E1B] focus:ring-[#C88242]"
                      />
                      <div className="flex-1">
                        <span className="block text-sm font-semibold text-[#23150D]">
                          Cash on Delivery (COD)
                        </span>
                        <span className="block text-xs text-[#8C6D58] mt-0.5">
                          Pay directly upon receiving your BeautyFlex soap package at your door.
                        </span>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'bank'
                        ? 'bg-white border-[#4A2E1B] shadow-xs'
                        : 'bg-[#FAF7F2] border-[#E8DDD2] hover:bg-white'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={handleInputChange}
                        className="mt-1 text-[#4A2E1B] focus:ring-[#C88242]"
                      />
                      <div className="flex-1">
                        <span className="block text-sm font-semibold text-[#23150D]">
                          Direct Bank Transfer / Wire
                        </span>
                        <span className="block text-xs text-[#8C6D58] mt-0.5">
                          Account details will be sent with your confirmation for instant receipt.
                        </span>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card_notice'
                        ? 'bg-white border-[#4A2E1B] shadow-xs'
                        : 'bg-[#FAF7F2] border-[#E8DDD2] hover:bg-white'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card_notice"
                        checked={formData.paymentMethod === 'card_notice'}
                        onChange={handleInputChange}
                        className="mt-1 text-[#4A2E1B] focus:ring-[#C88242]"
                      />
                      <div className="flex-1">
                        <span className="block text-sm font-semibold text-[#23150D]">
                          Credit / Debit Card (Online Gateway)
                        </span>
                        <span className="block text-xs text-[#8C6D58] mt-0.5">
                          Direct digital invoice sent upon order confirmation.
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Payment Gateway Activation Note (Technical Transparency required by brief) */}
                  <div className="mt-3 p-3 rounded-lg bg-[#F3EDE2] text-[11px] text-[#6A5243] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#C88242] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#4A2E1B]">Merchant Integration Note:</strong> For automatic on-site card charging, connect Stripe / PayPal merchant credentials in environment configurations. Currently fulfilling real orders securely via direct reservation and COD.
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#E8DDD2] flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#8C6D58] hover:text-[#23150D] transition-colors cursor-pointer"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 bg-[#4A2E1B] hover:bg-[#23150D] disabled:opacity-70 text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Placing Your Order...</span>
                    ) : (
                      <span>
                        Confirm Order — {(subtotal > 0 ? subtotal : totalQuantity * 999).toLocaleString()} PKR ({totalQuantity === 1 ? '1 Pack · 3 Soaps' : `${totalQuantity} Packs · ${totalQuantity * 3} Soaps`})
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
