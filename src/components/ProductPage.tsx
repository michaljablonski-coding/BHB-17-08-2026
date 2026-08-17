import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Phone, Mail, ArrowRight, Download, Send, Check, ChevronLeft, ChevronRight, Star, ShieldCheck, Clock, Lock, Info } from 'lucide-react';

export interface ModelData {
  id?: string;
  name: string;
  desc: string;
  price: string;
  img?: string;
  image?: string;
}

interface ProductPageProps {
  model: ModelData;
  category?: string;
  onBack: () => void;
}

export default function ProductPage({ model, category = "Kategoria", onBack }: ProductPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za zapytanie. Skontaktujemy się wkrótce!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const imageUrl = model.img || model.image || '';

  const galleryImages = [
    imageUrl,
    'https://bertsch-holzbau.eu/wp-content/uploads/2026/07/LIMONE_2.webp',
    'https://bertsch-holzbau.eu/wp-content/uploads/2026/07/LIMONE_3.webp',
    'https://bertsch-holzbau.eu/wp-content/uploads/2026/07/LIMONE_4.webp',
    'https://bertsch-holzbau.eu/wp-content/uploads/2026/07/LIMONE_5.webp',
    'https://bertsch-holzbau.eu/wp-content/uploads/2026/07/LIMONE_8.webp'
  ];

  const specs = [
    { label: "Wymiary całkowite", value: "250 × 330 cm" },
    { label: "Profil ścian", value: "Grubość 94 mm (najwyższej jakości drewno świerkowe)" },
    { label: "Konstrukcja dachu", value: "Dach jednospadowy (izolowany)" },
    { label: "Wykończenie podłogi", value: "Deska ThermoWood – grubość 26 mm" },
    { label: "Ogrzewanie", value: "Piec Harvia 20PRO WK 200 wraz z akcesoriami" },
    { label: "Przeszklenia i drzwi", value: "Szkło hartowane ESG (8 mm), izolacja termiczna" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-white min-h-screen relative pb-24 lg:pb-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6 md:py-12">
        <div className="flex items-center mb-6 md:mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-brand-graphite transition-colors font-medium text-sm">
            <ArrowLeft className="w-4 h-4" />
            Wróć do modelu
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Slider & Specs Table */}
          <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#e8f3ea] text-brand-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Bestseller
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="text-sm font-semibold text-gray-700 ml-1">4.9/5</span>
                  <span className="text-sm text-gray-500">(24 opinie)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-graphite mb-4">{model.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{model.desc}</p>
            </div>

            {/* Slider */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={galleryImages[currentImageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                    alt={`${model.name} - slide ${currentImageIndex + 1}`}
                  />
                </AnimatePresence>
                
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-brand-graphite shadow-sm backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-brand-graphite shadow-sm backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-2 snap-x scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                {galleryImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 sm:w-28 relative aspect-[4/3] rounded-lg overflow-hidden transition-all snap-start ${currentImageIndex === idx ? 'ring-2 ring-brand-green ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${model.name} thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Specs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-brand-graphite">Specyfikacja Techniczna</h2>
              </div>
              <div className="flex flex-col border border-gray-100 rounded-lg overflow-hidden">
                {specs.map((spec, idx) => (
                  <div key={idx} className={`flex flex-col sm:flex-row sm:items-center p-4 sm:p-5 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 transition-colors`}>
                    <div className="w-full sm:w-1/3 text-gray-500 font-medium text-sm mb-1 sm:mb-0 pr-4">
                      {spec.label}
                    </div>
                    <div className="w-full sm:w-2/3 text-brand-graphite font-semibold text-sm">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-brand-graphite mb-6">Dlaczego ten model?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  "Gotowa konstrukcja modułowa - błyskawiczny montaż.",
                  "System najwyższej klasy drewna świerkowego (C24).",
                  "Pełna odporność na warunki atmosferyczne.",
                  "Optymalna wentylacja, zapobiegająca wilgoci.",
                  "Zamek tyrolski zapewniający całkowitą szczelność.",
                  "Wieloletnia gwarancja producenta."
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50/50 p-5 rounded-xl border border-gray-100">
                    <div className="bg-brand-green p-1.5 rounded-full text-white shadow-sm flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm leading-snug pt-0.5">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-brand-offwhite p-8 rounded-xl border border-gray-100">
                <h3 className="font-heading font-bold text-2xl text-brand-graphite mb-4">Opis rozszerzony</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Ten produkt łączy w sobie wyjątkową trwałość i przemyślaną estetykę wykonania. Dzięki zastosowaniu innowacyjnych rozwiązań technologicznych oraz starannie wyselekcjonowanych, certyfikowanych materiałów, gwarantuje niespotykaną długowieczność oraz niezawodność, nawet przy intensywnej eksploatacji w najtrudniejszych warunkach pogodowych. Każdy detal został zaprojektowany z myślą o maksymalnym komforcie użytkownika, bezkompromisowej jakości oraz harmonijnym wkomponowaniu w otoczenie ogrodu lub tarasu.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 flex flex-col gap-6">
              
              {/* Pricing & Form Card */}
              <div id="inquiry-form" className="bg-white p-6 md:p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm overflow-hidden scroll-mt-24">
                <div className="absolute top-0 left-0 right-0 h-1 flex">
                  <div className="flex-1 bg-[#efba81]"></div>
                  <div className="flex-1 bg-[#43a0d5]"></div>
                  <div className="flex-1 bg-[#69bf90]"></div>
                  <div className="flex-1 bg-[#767676]"></div>
                </div>
                <div className="mt-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="text-brand-graphite font-heading font-bold text-3xl md:text-4xl">{model.price}</div>
                </div>

                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-heading text-xl font-bold text-brand-graphite">Zapytaj o wycenę</h3>
                </div>
                <p className="text-sm text-gray-500 mb-6">Doradzimy i przygotujemy darmową ofertę.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Imię i nazwisko" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 focus:border-brand-green focus:bg-white outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="Numer telefonu" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 focus:border-brand-green focus:bg-white outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Adres e-mail" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 focus:border-brand-green focus:bg-white outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="mt-2">
                    <button type="submit" className="w-full bg-brand-green hover:bg-[#3d834a] text-white font-bold py-4 rounded-lg transition-all text-sm uppercase tracking-wider shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5">
                      Wyślij zapytanie
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 mt-3 text-xs font-medium text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-brand-green" />
                      Odpowiadamy średnio w 2 godziny
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mt-1 text-xs text-gray-400">
                      <Lock className="w-3 h-3" />
                      Twoje dane są bezpieczne
                    </div>
                  </div>
                </form>

                <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-gray-100">
                  <a href="tel:+48888362918" className="flex items-center gap-3 text-brand-graphite hover:text-brand-green transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5 text-brand-green" />
                    </div>
                    <span className="font-semibold text-sm">0048 888 362 918</span>
                  </a>
                  <a href="mailto:kontakt@bertsch-holzbau.eu" className="flex items-center gap-3 text-brand-graphite hover:text-brand-green transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5 text-brand-green" />
                    </div>
                    <span className="font-semibold text-sm">kontakt@bertsch-holzbau.eu</span>
                  </a>
                </div>
              </div>



            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-12 lg:mt-32 bg-brand-graphite rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://bertsch-holzbau.eu/wp-content/themes/BHB/assets/images/map.svg')] bg-no-repeat bg-center bg-cover"></div>
          <div className="relative z-10 px-6 py-10 md:px-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-2">
                Kup ten produkt w jednej z <span className="text-brand-green">500+ lokalizacji</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Sprawdź najbliższego dealera Bertsch Holzbau w Twojej okolicy.</p>
            </div>
            <button className="flex-shrink-0 whitespace-nowrap flex items-center gap-2 bg-brand-green hover:bg-[#3d834a] text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-brand-green/20 uppercase tracking-widest text-sm">
              Znajdź dealera
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div>
          <div className="text-[10px] uppercase font-bold text-gray-500 mb-0.5 tracking-widest">Cena orientacyjna</div>
          <div className="font-heading font-bold text-xl text-brand-graphite">{model.price}</div>
        </div>
        <button 
          onClick={() => {
            document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-brand-green hover:bg-[#3d834a] text-white font-bold py-3 px-6 rounded-lg text-sm uppercase tracking-wider shadow-lg shadow-brand-green/20"
        >
          Zapytaj
        </button>
      </div>
    </div>
  );
}
