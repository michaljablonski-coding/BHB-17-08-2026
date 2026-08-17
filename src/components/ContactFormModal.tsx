import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Lock, ArrowRight, Loader2 } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[580px] bg-white z-[101] shadow-2xl rounded-sm overflow-hidden"
          >
            <div className="relative p-6 sm:p-8 max-h-[95vh] overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors p-1"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-medium text-brand-graphite font-heading mb-2">Dziękujemy</h3>
                  <p className="text-gray-500 max-w-[280px]">
                    Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą najszybciej jak to możliwe.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 text-center">
                    <img 
                      src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
                      alt="Bertsch Holzbau Logo" 
                      className="h-8 w-auto mx-auto mb-4"
                    />
                    <h3 className="font-heading text-2xl sm:text-3xl font-medium text-brand-graphite mb-2 leading-tight">
                      Odbierz bezpłatną wycenę i projekt sauny
                    </h3>
                  </div>

                  {/* Subtle bullet points */}
                  <ul className="mb-6 space-y-2.5">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                      <span><strong>Szybki kontakt.</strong> Odezwiemy się w ciągu 24h w dni robocze.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                      <span><strong>Darmowa konsultacja.</strong> Rozmowa nie zobowiązuje do zakupu.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                      <span><strong>Indywidualne podejście.</strong> Projektujemy sauny na miarę potrzeb.</span>
                    </li>
                  </ul>

                  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium text-gray-700 mb-1.5">Imię i nazwisko</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all text-sm text-brand-graphite placeholder:text-gray-400"
                        placeholder="np. Jan Kowalski"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-[13px] font-medium text-gray-700 mb-1.5">Telefon</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all text-sm text-brand-graphite placeholder:text-gray-400"
                          placeholder="+48 000 000 000"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[13px] font-medium text-gray-700 mb-1.5">E-mail</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all text-sm text-brand-graphite placeholder:text-gray-400"
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                        Wiadomość <span className="text-gray-400 font-normal">(opcjonalnie)</span>
                      </label>
                      <textarea 
                        id="message" 
                        rows={2}
                        className="w-full px-3.5 py-2.5 bg-gray-50/50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none text-sm text-brand-graphite placeholder:text-gray-400"
                        placeholder="Napisz, o jakiej saunie myślisz..."
                      ></textarea>
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-[#3d834a] text-white py-3 px-6 rounded-full text-sm font-semibold tracking-wide uppercase transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Wysyłanie...
                          </>
                        ) : (
                          <>
                            Wyślij zapytanie
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <div className="mt-3 flex items-center justify-center gap-1.5 text-[#888888] text-[11px]">
                        <Lock className="w-3 h-3" strokeWidth={2} />
                        <span>Twoje dane są bezpieczne i nie zostaną przekazane osobom trzecim.</span>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
