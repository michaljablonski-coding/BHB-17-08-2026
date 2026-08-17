import fs from 'fs';

const code = `import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck, TreePine, Factory, PaintBucket, Plus, Minus, Star, Check, X, MapPin, Wind, Zap, ChevronLeft, Sparkles, Globe, Target, Truck, Leaf, MessageCircle, ChevronRight, Maximize, Target as TargetIcon } from 'lucide-react';
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
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000206-03.jpg"
  },
  {
    name: "HANOI",
    price: "od 22 886 PLN",
    desc: "Idealne rozwiązanie do przechowywania narzędzi ogrodowych, sprzętu i mebli zewnętrznych.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001099-04.jpg"
  },
  {
    name: "MH Equipment Cabinet 03",
    price: "od 13 407 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000028-05.jpg"
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
      <section className="relative h-[80dvh] min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000206-03.jpg" alt="Domki narzędziowe drewniane" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Centered Title */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 pt-10">
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-medium text-white leading-[1.1] tracking-tighter font-heading mb-10 flex flex-col items-center drop-shadow-lg text-center bg-black/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
            <span>Domki narzędziowe</span>
            <span className="text-brand-green italic font-light mt-2">drewniane</span>
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase drop-shadow-md text-center max-w-[200px] leading-relaxed">Zobacz więcej</span>
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-sm hover:bg-white/10 transition-colors">
            <ArrowRight className="w-5 h-5 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section id="intro" className="py-16 md:py-24 bg-white px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              Idealne rozwiązanie do przechowywania narzędzi ogrodowych, sprzętu i mebli zewnętrznych. Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację. Niezależnie od tego, czy potrzebujesz miejsca na narzędzia ogrodnicze, rowery czy akcesoria basenowe, nasze szopy ogrodowe zapewniają funkcjonalność i styl, ułatwiając zarządzanie przestrzenią na zewnątrz. Wszystkie nasze szopy są dostępne w różnych rozmiarach, w zależności od typu, co zapewnia znalezienie idealnego dopasowania do Twojej przestrzeni.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001099-04.jpg" alt="Domek" className="w-full h-full object-cover rounded-sm aspect-square" />
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000028-05.jpg" alt="Domek" className="w-full h-full object-cover rounded-sm aspect-square" />
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000206-03.jpg" alt="Domek" className="w-full h-full object-cover rounded-sm aspect-square" />
          </div>
        </div>
      </section>

      {/* Green Banner */}
      <section className="bg-brand-green py-16 px-4 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
        {/* Placeholder for tilted images effect from design */}
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at left, white, transparent)' }}></div>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-end gap-12 z-10">
          <div className="lg:w-2/3 text-right">
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
               Stwórz swój wymarzony obiekt<br/>dokładnie według własnych,<br/>indywidualnych życzeń!
             </h2>
             <button className="inline-flex items-center gap-3 bg-white text-brand-green px-6 py-3 rounded hover:bg-gray-50 transition-colors font-bold uppercase tracking-wide text-sm">
               Domki narzędziowe drewniane na wymiar
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

      {/* Products Grid with Filters */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-brand-graphite tracking-tight mb-4">Domki narzędziowe na sprzedaż</h2>
          <p className="text-gray-600 mb-12 max-w-4xl text-sm leading-relaxed">
            Zbudowane z najwyższej jakości drewna, nasze szopy nie tylko wytrzymają próbę czasu, ale także podkreślą piękno Twojej zewnętrznej przestrzeni. Konstrukcja jest zaprojektowana dla łatwego montażu, z wszystkimi elementami w zestawie, co pozwala na prosty proces instalacji. Ponadto, nasze szopy mogą być dostosowane do Twoich konkretnych potrzeb, czy to przez dostosowanie rozmiaru, dodanie okien, czy wybór wykończenia, czyniąc każdą szopę wyjątkowo Twoją.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-64 shrink-0 bg-[#f4f3f1] rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-heading text-2xl font-bold mb-6 text-brand-graphite">Filtruj</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-brand-green transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Cena: Rosnąco</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-brand-green transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Cena: Malejąco</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-sm mb-4 text-brand-graphite">Kształt dachu</h4>
                  <div className="space-y-2">
                    {['Dach Czterospadowy', 'Dach Dwuspadowy', 'Dach Jednospadowy', 'Dach Podwójnie Jednospadowy', 'Dach Płaski'].map((roof) => (
                      <label key={roof} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-brand-green transition-colors"></div>
                        <span className="text-sm text-gray-700">{roof}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-brand-green hover:bg-[#1a5b32] text-white py-2 rounded font-medium text-sm transition-colors">Filtruj</button>
                  <button className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded font-medium text-sm transition-colors">Wyczyść</button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {models.map((model, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                  <div className="h-56 bg-gray-100 w-full relative">
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-center items-center">
                    <h3 className="font-heading text-lg font-bold text-brand-graphite uppercase mb-1">{model.name}</h3>
                    <div className="text-brand-green font-bold text-lg mb-1">{model.price}</div>
                    <p className="text-gray-400 text-xs mb-6">zawiera VAT</p>
                    <button onClick={() => setSelectedProduct(model)} className="w-full py-3 rounded-full border border-gray-200 text-brand-graphite font-bold uppercase tracking-wider text-xs hover:border-brand-green hover:text-brand-green transition-all flex items-center justify-center gap-2 mt-auto">
                      Zobacz produkt <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section 1 - Dark Green */}
      <section className="py-16 md:py-24 bg-[#0a381f] px-4 sm:px-8 lg:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-medium mb-6">Jaki domek na narzędzia wybrać?</h2>
          <p className="text-white/80 leading-relaxed max-w-4xl mb-16 text-sm md:text-base">
            Wybór idealnej szopy ogrodowej to coś więcej niż tylko rozmiar i funkcja; chodzi o dopasowanie do estetyki zewnętrznej i maksymalne wykorzystanie dostępnej przestrzeni. Przed podjęciem decyzji rozważ następujące kwestie:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-full border-2 border-brand-green flex items-center justify-center">
                <TargetIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Cel</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Określ, do czego będziesz używać szopy. Proste przechowywanie narzędzi ogrodowych lub rowerów może wymagać tylko małej szopy. Jeśli jesteś entuzjastą majsterkowania i potrzebujesz miejsca do pracy, rozważ większą szopę z podwójnymi drzwiami dla łatwego dostępu.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-full border-2 border-brand-green flex items-center justify-center">
                <Maximize className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Wykorzystanie przestrzeni</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Oceń dostępną przestrzeń. Duża szopa w małym ogrodzie może nie być praktyczna, ponieważ zajmie zbyt dużo miejsca. Zastanów się, ile przestrzeni ogrodowej jesteś gotów poświęcić na szopę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styl i design */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-16 bg-[#2d2d2d] text-white">
          <div className="md:w-1/3">
             <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001099-04.jpg" alt="Detale drewna" className="w-full h-full object-cover min-h-[300px]" />
          </div>
          <div className="md:w-2/3 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Styl i design</h2>
            <p className="text-white/80 leading-relaxed">
              Styl drzwi i typ dachu są ważne zarówno dla funkcjonalności, jak i estetyki. Wybierz projekt, który komplementuje wygląd Twojego ogrodu i spełnia Twoje potrzeby przechowywania lub przestrzeni roboczej.
            </p>
          </div>
        </div>
      </section>

      {/* Popular uses */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-center text-brand-graphite mb-16">
            Popularne zastosowania <span className="text-brand-green">domku na narzędzia</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:divide-x divide-gray-100">
            <div className="px-4">
              <h3 className="font-bold text-brand-graphite mb-4 text-lg">Szopy do przechowywania i patio</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Idealne do organizacji kosiarek, rowerów i narzędzi ogrodowych oraz ochrony przed czynnikami atmosferycznymi i kradzieżą. Szopy patio są idealne dla wybrukowanych obszarów, z hakami na narzędzia i półkami na niezbędne artykuły ogrodnicze.</p>
            </div>
            <div className="px-4">
              <h3 className="font-bold text-brand-graphite mb-4 text-lg">Warsztat ogrodowy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Zamień swoją szopę w praktyczny warsztat z wysokiej jakości stołem roboczym i półkami, idealny do prac stolarskich lub czyszczenia narzędzi z dala od głównego domu.</p>
            </div>
            <div className="px-4">
              <h3 className="font-bold text-brand-graphite mb-4 text-lg">Sadzenie roślin</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Nasze szopy doskonale łączą przestrzeń do przechowywania i hodowli roślin, z dużymi oknami zapewniającymi dużo światła słonecznego i wygodny dostęp do narzędzi ogrodniczych.</p>
            </div>
            <div className="px-4">
              <h3 className="font-bold text-brand-graphite mb-4 text-lg">Biuro ogrodowe</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Stwórz dedykowaną przestrzeń do pracy w ogrodzie, aby zwiększyć produktywność i oddzielić życie zawodowe od domowego. Możliwość dostosowania do instalacji elektrycznych i mebli biurowych.</p>
            </div>
            <div className="px-4">
              <h3 className="font-bold text-brand-graphite mb-4 text-lg">Domowa siłownia</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Pożegnaj się z wysokimi opłatami za siłownię i witaj osobistej siłowni w ogrodzie. Wybierz szopy z solidnymi podłogami lub takie, które mogą być zakotwiczone do betonowej bazy, dla solidnego środowiska treningowego.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of sheds */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
        {/* Background visual element */}
        <div className="absolute top-0 right-0 w-full h-40 bg-[url('https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_13.webp')] bg-cover bg-center opacity-30"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-graphite font-light">
              Rodzaje<br/>
              <span className="text-brand-green font-medium">szopy na narzędzia</span>
            </h2>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-6 w-full">
            <div className="bg-brand-green text-white p-8 md:p-12">
              <h3 className="font-heading text-2xl font-bold mb-4">Domki narzędziowe modułowe</h3>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                Dla tych, którzy wymagają elastyczności, nasze szopy modułowe oferują możliwość dostosowania rozmiaru i układu, dopasowując się do różnych potrzeb przechowywania i rozmiarów ogrodów. Są to szopy prefabrykowane, czyli składające się z gotowych do montażu elementów, o wymiarach do 25 m2.
              </p>
            </div>
            
            <div className="bg-[#2d2d2d] text-white p-8 md:p-12 ml-0 lg:ml-12 shadow-xl">
              <h3 className="font-heading text-2xl font-bold mb-4">Domki narzędziowe z profili</h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                Posiadające wyraźne profile, te szopy dodają elementu wyrafinowania do Twojej zewnętrznej przestrzeni, łącząc funkcjonalność z unikalnym architektonicznym dotykiem, od 9 m2 do maks. 36 m2.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
    </div>
  );
}
`;
fs.writeFileSync('src/components/ToolshedsLandingPage.tsx', code);
