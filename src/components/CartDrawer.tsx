import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToShop }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalQuantity,
    subtotal,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Dim backdrop */}
      <div
        className="fixed inset-0 bg-[#23150D]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#E8DDD2]">
          {/* Header */}
          <div className="p-6 border-b border-[#E8DDD2] flex items-center justify-between bg-white/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DDD2] flex items-center justify-center text-[#4A2E1B]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#23150D]">Your Shopping Bag</h2>
                <p className="text-xs text-[#8C6D58]">
                  {totalQuantity === 0
                    ? 'Your bag is currently empty'
                    : `${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'} in your order`}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#8C6D58] hover:text-[#23150D] hover:bg-[#F3EDE2] rounded-full transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F3EDE2] text-[#8C6D58] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#23150D] mb-2">
                  Your bag feels light
                </h3>
                <p className="text-sm text-[#6A5243] max-w-xs mb-6">
                  Ready to embrace comforting skincare? Discover our 100% Organic Coffee Acne Soap.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigateToShop();
                  }}
                  className="px-6 py-2.5 bg-[#4A2E1B] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#23150D] transition-colors cursor-pointer"
                >
                  Explore Coffee Acne Soap
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 rounded-xl bg-white border border-[#E8DDD2] shadow-xs flex gap-4"
                  >
                    {/* Authentic Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F3EDE2] shrink-0 border border-[#E8DDD2]/60">
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.images[0].alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif font-semibold text-[#23150D] text-base leading-snug">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#8C6D58] hover:text-[#C88242] p-1 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[#8C6D58] mt-0.5">
                          3 Soaps in 1 Pack · 100% Organic
                        </p>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-xs font-semibold text-[#4A2E1B] font-mono tabular-nums">
                            {item.product.unitPrice ?? 999} PKR / pack
                          </span>
                          {item.quantity > 1 && (
                            <span className="text-[11px] text-[#8C6D58] font-mono tabular-nums">
                              (Total: {((item.product.unitPrice ?? 999) * item.quantity).toLocaleString()} PKR for {item.quantity * 3} soaps)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F3EDE2]">
                        <span className="text-xs text-[#8C6D58]">
                          {item.quantity === 1 ? '1 Pack (3 soaps):' : `${item.quantity} Packs (${item.quantity * 3} soaps):`}
                        </span>
                        <div className="flex items-center gap-2 border border-[#E8DDD2] rounded-lg bg-[#FAF7F2] p-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-[#4A2E1B] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold text-[#23150D] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-[#4A2E1B] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Packaging and quality assurance banner */}
                <div className="p-3.5 rounded-lg bg-[#F7EBE4] border border-[#E8DDD2] flex items-start gap-3 text-xs text-[#6A5243]">
                  <ShieldCheck className="w-4 h-4 text-[#C88242] shrink-0 mt-0.5" />
                  <span>
                    Each pack contains 3 individually wrapped 100% Organic Coffee Acne Soaps to maintain fresh herbal and coffee properties.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Order Actions */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E8DDD2] bg-white space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#8C6D58]">
                  <span>Packs Ordered</span>
                  <span className="font-semibold text-[#23150D] tabular-nums">
                    {totalQuantity} {totalQuantity === 1 ? 'pack (3 soaps)' : `packs (${totalQuantity * 3} soaps)`}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-[#F3EDE2]">
                  <span className="font-serif text-base font-bold text-[#23150D]">
                    Subtotal
                  </span>
                  <span className="text-base font-bold text-[#4A2E1B] text-right font-mono tabular-nums">
                    {subtotal.toLocaleString()} PKR
                  </span>
                </div>
                <p className="text-[11px] text-[#8C6D58] leading-tight">
                  Transparent checkout with Cash on Delivery (COD) across Pakistan.
                </p>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Proceed to Order Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 text-xs text-[#8C6D58] hover:text-[#23150D] transition-colors font-medium cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
