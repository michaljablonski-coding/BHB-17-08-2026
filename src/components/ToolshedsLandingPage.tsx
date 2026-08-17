import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Hammer, Sprout, Briefcase, Dumbbell, Palette, ArrowLeft, ArrowRight, ShieldCheck, TreePine, Factory, PaintBucket, Plus, Minus, Star, Check, X, MapPin, Wind, Zap, ChevronLeft, Sparkles, Globe, Target, Truck, Leaf, MessageCircle, ChevronRight, Maximize, Target as TargetIcon } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductPage from './ProductPage';

interface ToolshedsLandingPageProps {
  onGraphics?: () => void;
  onBack: () => void;
  onConfigurator?: () => void;
  onContact?: () => void;
  onAboutUs?: () => void;
}

const models = [
  {
    name: "GARGNANO",
    price: "od 29 900 PLN",
    desc: "Zbudowane z najwyższej jakości drewna, nasze szopy nie tylko wytrzymają próbę czasu, ale także podkreślą piękno Twojej zewnętrznej przestrzeni.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/06/PHOTO-2026-07-17-12-29-222-600x450.webp"
  },
  {
    name: "HANOI",
    price: "od 22 886 PLN",
    desc: "Idealne rozwiązanie do przechowywania narzędzi ogrodowych, sprzętu i mebli zewnętrznych.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2026/03/Tytulowe-1-600x338.webp"
  },
  {
    name: "MH Equipment Cabinet 03",
    price: "od 13 407 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001416-01-kopia-600x450.webp"
  },
  {
    name: "MH Equipment Cabinet 01",
    price: "od 9 036 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001055-01-kopia-600x695.webp"
  },
  {
    name: "MH CUBO HPL 2515",
    price: "od 31 925 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001413-01-1-kopia-600x800.webp"
  },
  {
    name: "MH CUBO 2830 ALU COMPOSITE + 310 SD",
    price: "od 61 418 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000785-01-kopia-600x400.webp"
  }
];

export default function ToolshedsLandingPage({ onBack, onConfigurator, onContact, onAboutUs, onGraphics }: ToolshedsLandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onBack={onBack} onContact={onContact} onAboutUs={onAboutUs} />
        <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ProductPage model={selectedProduct} category="Domki narzędziowe" onBack={() => setSelectedProduct(null)} />
        </motion.div>
        <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-graphite selection:bg-brand-green selection:text-white">
      <Navbar onBack={onBack} onContact={onContact} onAboutUs={onAboutUs} />

      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/06/IMG_7717.webp" alt="Domki narzędziowe drewniane" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Centered Title */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 pt-10">
          <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-medium text-white leading-[1.1] tracking-tighter font-heading mb-10 flex flex-col items-center drop-shadow-sm text-center">
            <span>Domki narzędziowe</span>
            <span className="text-white italic font-light mt-2">drewniane</span>
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase drop-shadow-sm text-center max-w-[200px] leading-relaxed">Zobacz więcej</span>
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-sm hover:bg-white/10 transition-colors">
            <ArrowRight className="w-5 h-5 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section id="intro" className="py-20 md:py-32 bg-[#F9FAFB] px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#c68a47]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-semibold text-xs tracking-widest uppercase mb-6">
              Funkcjonalność i styl
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-graphite mb-6 leading-[1.1]">
              Idealne rozwiązanie do <br/><span className="text-brand-green italic font-light">przechowywania</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nasze domki narzędziowe to funkcjonalna i estetyczna przestrzeń do przechowywania sprzętu ogrodowego, rowerów czy narzędzi.
            </p>

            <div className="flex flex-col gap-4 mb-10 w-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green shadow-sm flex items-center justify-center shrink-0 text-white">
                  <Maximize className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-graphite text-lg">Różnorodne rozmiary</h4>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green shadow-sm flex items-center justify-center shrink-0 text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-graphite text-lg">Trwałość i bezpieczeństwo</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/3]">
            {/* Main Image */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/06/PHOTO-2026-07-17-12-29-222-600x450.webp" alt="Nowoczesny domek narzędziowy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Projects Banner */}
      <section className="py-20 md:py-28 bg-brand-green relative overflow-hidden mt-8 mb-16">
        {/* Subtle geometric background patterns */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/15 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/3 translate-y-1/3 z-0"></div>

        {/* Right side absolute background image for large screens */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0">
          <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001413-01.jpg" alt="Projekt indywidualny domku" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="lg:w-1/2 flex flex-col items-start text-left lg:pr-16 py-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 font-semibold text-xs tracking-widest uppercase mb-8 backdrop-blur-sm shadow-sm">
               Własna produkcja
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-bold text-white mb-8 leading-[1.1] drop-shadow-sm">
              Stwórz swój <span className="italic font-light">wymarzony domek narzędziowy</span> dokładnie według życzeń
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
               <button onClick={onContact} className="w-full sm:w-auto bg-white text-brand-green hover:bg-gray-50 px-8 py-4.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 flex items-center justify-center gap-3">
                 Projekt indywidualny <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative lg:hidden mt-12">
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
               <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001413-01.jpg" alt="Projekt indywidualny domku" className="w-full h-[400px] object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Products Grid with Filters */}
      <section id="produkty" className="py-20 md:py-24 px-4 sm:px-8 lg:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto object-contain mb-6" />
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-graphite tracking-tight mb-4 max-w-3xl leading-[1.1]">
              Gotowe modele<br/><span className="italic font-light text-brand-green">dostępne od ręki</span>
            </h2>
            
            <p className="text-gray-500 max-w-xl text-base md:text-lg leading-relaxed font-light">
              Zbudowane z najwyższej jakości drewna, zaprojektowane z myślą o trwałości i prostym montażu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, idx) => (
              <div key={idx} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="w-full aspect-[3/2] relative overflow-hidden bg-gray-50">
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                  
                  {/* Subtle overlay gradient on image for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Container */}
                <div className="p-5 flex flex-col flex-grow relative bg-white">
                  
                  <div className="flex flex-col mb-4">
                    <h3 className="font-heading font-bold text-brand-graphite text-lg leading-tight mb-2 group-hover:text-brand-green transition-colors">{model.name}</h3>
                    
                    <div className="flex flex-col items-start gap-0.5">
                      <div className="text-brand-graphite font-black text-lg tracking-tight">
                        {model.price}
                      </div>
                      <div className="text-gray-400 text-[9px] font-medium uppercase tracking-wider">
                        Zawiera podatek VAT
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-2">
                    <button onClick={() => setSelectedProduct(model)} className="w-full py-3.5 rounded-full bg-brand-green text-white font-bold text-sm tracking-wide hover:shadow-lg hover:bg-[#3D8A4C] transition-all flex items-center justify-center gap-2.5 group/btn">
                      Zobacz szczegóły <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#c68a47]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* Guide Section 1 - Dark Green */}
      <section className="py-20 md:py-32 bg-brand-green px-4 sm:px-8 lg:px-12 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/3"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left side: Heading */}
            <div className="lg:w-5/12 lg:sticky top-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm shadow-sm">
                 <span className="text-white text-xs font-bold uppercase tracking-wider">Poradnik kupującego</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-bold mb-6 leading-[1.1] drop-shadow-sm">
                Jaki domek na narzędzia <span className="text-brand-offwhite/80 italic font-light">wybrać?</span>
              </h2>
              <p className="text-white/80 leading-relaxed text-lg lg:text-xl font-light">
                Wybierz konstrukcję dopasowaną do Twojej przestrzeni i potrzeb.
              </p>
            </div>

            {/* Right side: Cards */}
            <div className="lg:w-7/12 flex flex-col gap-6">
              
              <div className="bg-white rounded-[2rem] p-8 md:p-12 transition-all duration-500 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <TargetIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 font-heading text-brand-graphite">Cel</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                      Określ przeznaczenie domku – od przechowywania sprzętu ogrodowego po przestrzeń do majsterkowania.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 md:p-12 transition-all duration-500 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <Maximize className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 font-heading text-brand-graphite">Wykorzystanie przestrzeni</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                      Dobierz wymiary tak, aby optymalnie zagospodarować ogród bez zaburzania jego układu.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Styl i design */}
      <section className="w-full flex flex-col md:flex-row bg-[#2d2d2d] text-white">
        <div className="md:w-1/3">
           <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/001409-11-e1709424972362-800x462.webp" alt="Detale drewna" className="w-full h-full object-cover min-h-[300px] md:min-h-full" />
        </div>
        <div className="md:w-2/3 p-12 md:p-24 lg:p-32 flex flex-col justify-center items-start">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Styl i design</h2>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-light">
              Dobierz styl drzwi i rodzaj dachu, który idealnie dopełni architekturę Twojego ogrodu.
            </p>
          </div>
        </div>
      </section>

      {/* Popular uses */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-center mb-8">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto object-contain" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-center text-brand-graphite mb-16">
            Popularne zastosowania <span className="text-brand-green">domku na narzędzia</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Box className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-2 text-xl">Przechowywanie sprzętu</h3>
                <p className="text-gray-500 text-base leading-relaxed">Bezpieczne miejsce na kosiarki, narzędzia ogrodowe i akcesoria.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Hammer className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-2 text-xl">Warsztat majsterkowicza</h3>
                <p className="text-gray-500 text-base leading-relaxed">Praktyczna przestrzeń na stół roboczy, narzędzia i codzienne prace.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-2 text-xl">Rowery i sprzęt sportowy</h3>
                <p className="text-gray-500 text-base leading-relaxed">Wygodne i suche schronienie dla rowerów, grilla oraz sprzętu rekreacyjnego.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Sprout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-2 text-xl">Akcesoria ogrodowe i meble</h3>
                <p className="text-gray-500 text-base leading-relaxed">Ochrona mebli tarasowych, donic i poduszek ogrodowych poza sezonem.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button onClick={onContact} className="bg-brand-green hover:bg-[#1a5b32] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl">
              Skontaktuj się z nami <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Types of sheds */}
      <section className="py-20 md:py-24 bg-brand-offwhite px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto object-contain mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-brand-graphite leading-[1.1] font-bold">
              Rodzaje <span className="text-brand-green italic font-light">domków narzędziowych</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
            
            {/* Left side: Image */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex-grow w-full rounded-[2rem] overflow-hidden shadow-2xl min-h-[400px] lg:min-h-[500px] relative group">
                <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000785-03.jpg" alt="Tło domków" className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Right side: The Types (Cards) */}
            <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
              
              {/* Type 1 */}
              <div className="bg-brand-green text-white p-10 sm:p-12 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col justify-center flex-1">
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl font-bold mb-4 drop-shadow-sm">Domki modułowe</h3>
                  <p className="text-white/90 leading-relaxed text-lg font-light">
                    Prefabrykowane konstrukcje modułowe do 25 m², zapewniające szybki i elastyczny montaż.
                  </p>
                </div>
              </div>
              
              {/* Type 2 */}
              <div className="bg-[#2d2d2d] text-white p-10 sm:p-12 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex flex-col justify-center flex-1">
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl font-bold mb-4 drop-shadow-sm">Domki z profili</h3>
                  <p className="text-white/80 leading-relaxed text-lg font-light">
                    Klasyczna konstrukcja z profili drewnianych od 9 m² do 36 m², łącząca funkcjonalność z trwałością.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
    </div>
  );
}
