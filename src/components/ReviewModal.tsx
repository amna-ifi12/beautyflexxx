import React, { useState } from 'react';
import { CustomerReview } from '../types';
import { X, Star, Heart } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Omit<CustomerReview, 'id' | 'date'>) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmitReview }) => {
  const [author, setAuthor] = useState('');
  const [city, setCity] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    onSubmitReview({
      author,
      city: city || 'Verified Customer',
      rating,
      comment,
      isVerified: true,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setAuthor('');
      setCity('');
      setComment('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Submit Customer Review">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-[#23150D]/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

        <div className="inline-block w-full max-w-lg my-8 overflow-hidden text-left align-middle transition-all transform bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DDD2]">
          <div className="px-6 py-4 bg-white border-b border-[#E8DDD2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#C88242]" />
              <h3 className="font-serif text-lg font-bold text-[#23150D]">
                Share Your BeautyFlex Experience
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8C6D58] hover:text-[#23150D] hover:bg-[#F3EDE2] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#EAF5EC] text-[#2E7D32] mx-auto flex items-center justify-center">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#23150D]">Thank You!</h4>
                <p className="text-sm text-[#6A5243]">
                  Your genuine feedback helps others on their skin journey feel understood and empowered.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-[#6A5243]">
                  BeautyFlex believes in 100% honesty. We never generate fake ratings. Share your real thoughts about Coffee Acne Soap.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                        aria-label={`${star} star rating`}
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating
                              ? 'text-[#C88242] fill-[#C88242]'
                              : 'text-[#D9C3B3]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-[#8C6D58] ml-2 font-medium">
                      {rating} out of 5 stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Maya R."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
                    City / Location (Optional)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Seattle, WA"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A2E1B] mb-1">
                    Your Honest Thoughts & Skin Feeling *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="How does the soap feel on your skin? Tell us about your cleansing experience..."
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E8DDD2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C88242] resize-none"
                  />
                </div>

                <div className="pt-3 border-t border-[#E8DDD2] flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-xs font-semibold text-[#8C6D58] hover:text-[#23150D] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#4A2E1B] hover:bg-[#23150D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Review
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
