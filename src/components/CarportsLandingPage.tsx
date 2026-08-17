import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck, TreePine, Factory, PaintBucket, Plus, Minus, Star, Check, X, MapPin, Wind, Zap, ChevronLeft, Sparkles, Globe, Target, Truck, Leaf, MessageCircle, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductPage from './ProductPage';

interface CarportsLandingPageProps {
  onGraphics?: () => void;
  onBack: () => void;
  onConfigurator: () => void;
  onContact?: () => void;
  onAboutUs?: () => void;
}

const features = [
  {
    title: "Surowiec z Koła Biegunowego",
    description: "Certyfikowany świerk skandynawski o wilgotności 12-14%. Powolny przyrost gwarantuje dziesięciolecia bez pęknięć i deformacji.",
    icon: TreePine
  },
  {
    title: "Inżynieria Przecząca Prawom Fizyki",
    description: "Drewno klejone BSH Si neutralizuje naprężenia, pozwalając na monumentalne rozpiętości dachów bez uciążliwych, środkowych filarów.",
    icon: ShieldCheck
  },
  {
    title: "Frezowana Przyszłość",
    description: "5-osiowe maszyny CNC gwarantują precyzję do 0,1 mm. Otrzymujesz gładkość klasy meblowej na zewnątrz swojego domu.",
    icon: Factory
  },
  {
    title: "Kolor Odporny Na Słońce",
    description: "Trzykrotne szlifowanie i fabryczna impregnacja w palecie RAL. Twoja wiata stworzy absolutną harmonię ze stolarką okienną willi.",
    icon: PaintBucket
  }
];

const faqs = [
  {
    question: "Czy budowa wiaty wymaga pozwolenia na budowę?",
    answer: "Zgodnie z przepisami, wiaty o powierzchni zabudowy do 50 m² na działkach z zabudową mieszkaniową zazwyczaj nie wymagają pozwolenia na budowę, a jedynie prostego zgłoszenia. To oszczędność wielu miesięcy biurokracji w porównaniu do garażu murowanego."
  },
  {
    question: "Jak technologia drewna BSH zapobiega pękaniu?",
    answer: "Drewno klejone warstwowo (BSH) składa się z wielu idealnie wysuszonych (ok. 10% wilgotności) lameli klejonych pod potężnym ciśnieniem. Naprężenia wewnętrzne znoszą się wzajemnie, co eliminuje ryzyko głębokich pęknięć i skręcania materiału, gwarantując nieskazitelną estetykę na lata."
  },
  {
    question: "Czy mogę zamknąć ściany wiaty w przyszłości?",
    answer: "Tak. Nasze konstrukcje są systemowe. Oferujemy modułowe obudowy z naturalnego drewna, żaluzje stałe i ruchome, a także bezobsługowe kompozyty WPC czy panele metalowe. Otwartość wiaty to stan wyboru, a nie ograniczenie techniczne."
  },
  {
    question: "W jaki sposób unikamy zniszczeń na działce podczas montażu?",
    answer: "Nasz proces jest chirurgicznie precyzyjny. Eliminujemy ciężki sprzęt budowlany. Konstrukcja z wyciętymi z dokładnością do 0,1 mm zamkami przyjeżdża jako gotowy zestaw. Nasi kierowcy posiadają własne wózki widłowe do autonomicznego i bezkolizyjnego rozładunku, a sam montaż przypomina składanie luksusowych mebli."
  },
  {
    question: "Garaż murowany czy wiata – co jest lepsze dla samochodu?",
    answer: "Wiata drewniana! Garaż zimą powoduje potężny szok termiczny. Auto z ujemnej temperatury i w soli drogowej zamknięte w ciepłym garażu błyskawicznie pokrywa się rosą, co drastycznie przyspiesza korozję. Wiata gwarantuje 100% ochrony przed opadami przy jednoczesnej stałej, naturalnej cyrkulacji powietrza."
  },
  {
    question: "Jak dbać o drewnianą konstrukcję wiaty na przestrzeni lat?",
    answer: "Stosujemy wyłącznie wyselekcjonowane i zaimpregnowane drewno klasy premium. Zalecamy jednak odświeżenie powłoki malarskiej (lazury) co 4-5 lat, aby zachować pierwotną głębię koloru i zmaksymalizować odporność na promieniowanie UV. Proces ten jest bardzo prosty i nie wymaga specjalistycznego sprzętu."
  },
  {
    question: "Czy mogę zaprojektować wiatę o niestandardowych wymiarach?",
    answer: "Oczywiście. Poza naszą standardową ofertą, specjalizujemy się w architekturze na wymiar. Nasz dział projektowy dostosuje konstrukcję do specyfiki Twojej działki, bryły istniejącego budynku oraz liczby i gabarytów posiadanych pojazdów."
  },
  {
    question: "Jak przygotować podłoże pod wiatę?",
    answer: "Wymagane jest stabilne i wypoziomowane podłoże (np. kostka brukowa, płyta betonowa lub punktowe stopy fundamentowe pod słupy nośne). Dostarczymy Ci precyzyjny plan punktów podparcia (rzut z góry) przed planowanym montażem, abyś mógł bez problemu przygotować teren."
  }
];

const comparisonData = [
  {
    feature: "Kondensacja i szok termiczny (Korozja)",
    bhb: { text: "Naturalna wentylacja, brak wilgoci", good: true },
    garage: { text: "Katalizator powstawania rdzy", good: false },
    typical: { text: "Często brak pełnej szczelności na opady", good: false },
  },
  {
    feature: "Lekkość i harmonia architektoniczna",
    bhb: { text: "Subtelna bryła przedłużająca dom", good: true },
    garage: { text: "Przytłaczający, ciężki blok", good: false },
    typical: { text: "Toporny, rustykalny wygląd tartaczny", good: false },
  },
  {
    feature: "Precyzja i jakość wykończenia (CNC)",
    bhb: { text: "Tolerancja 0,1 mm, gładkość meblowa", good: true },
    garage: { text: "Jakość w pełni zależna od ekipy", good: false },
    typical: { text: "Szorstkie słupy, ręczne docinanie", good: false },
  },
  {
    feature: "Stabilność konstrukcji drewna",
    bhb: { text: "Wyselekcjonowane BSH (brak pęknięć)", good: true },
    garage: { text: "Ryzyko pękania osiadających tynków", good: false },
    typical: { text: "Drewno litym - silne pękanie i skręcanie", good: false },
  },
  {
    feature: "Inwazyjność i czas budowy",
    bhb: { text: "Błyskawiczny, niemal sterylny montaż", good: true },
    garage: { text: "Tygodnie brudu i ciężkiego sprzętu", good: false },
    typical: { text: "Uciążliwe docinanie na trawniku", good: false },
  },
  {
    feature: "Logistyka rozładunku na posesji",
    bhb: { text: "Pełna autonomia (nasz wózek widłowy)", good: true },
    garage: { text: "Wielokrotne, uciążliwe dostawy", good: false },
    typical: { text: "Wynajem sprzętu zrzucony na klienta", good: false },
  },
  {
    feature: "Możliwość adaptacji (Zabudowa ścian)",
    bhb: { text: "System modułowy, potężny wybór materiałów", good: true },
    garage: { text: "Brak możliwości szybkiej zmiany kubatury", good: false },
    typical: { text: "Sztukowanie i brak systemowych żaluzji", good: false },
  }
];

const models = [
  {
    name: "CARPORT STRATO 4530 P",
    price: "od 12 116 PLN",
    desc: "Ekonomiczny model wejściowy, idealny na wąskie działki.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000028-01-kopia-600x468.webp"
  },
  {
    name: "CARPORT LINEA 3060 F",
    price: "od 12 812 PLN",
    desc: "Zgrabna, minimalistyczna forma dla jednego pojazdu.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001601-01-kopia-600x314.webp"
  },
  {
    name: "CARPORT CARO 6835 F + 1835 AN",
    price: "od 33 056 PLN",
    desc: "Podwójna funkcjonalność – wiata połączona z solidnym pomieszczeniem (szopą).",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001573-01-kopia-600x400.webp"
  },
  {
    name: "CARPORT PRESTIGE 5950 S",
    price: "od 46 256 PLN",
    desc: "Złoty standard klasy premium. Równowaga między estetyką a ceną.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000436-01-600x401.webp"
  },
  {
    name: "GARAGE BELFAST",
    price: "od 89 042 PLN",
    desc: "Model hybrydowy. Pełnoprawny garaż połączony z zadaszeniem otwartym.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000437-01-600x395.webp"
  },
  {
    name: "CARPORT BUTTERFLY",
    price: "od 188 449 PLN",
    desc: "Flagowiec i produkt halo. Zdumiewający dach wklęsły, potężne dźwigary BSH.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000438-01-600x450.webp"
  }
];

export default function CarportsLandingPage({ onBack, onConfigurator, onContact, onAboutUs, onGraphics }: CarportsLandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onBack={onBack} onContact={onContact} onAboutUs={onAboutUs} />
        <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ProductPage model={selectedProduct} category="Zadaszenia i wiaty" onBack={() => setSelectedProduct(null)} />
        </motion.div>
        <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
      </div>
    );
  }

  const scrollToConfigurator = () => {
    onConfigurator();
  };

  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-graphite selection:bg-brand-green selection:text-white">
      <Navbar onBack={onBack} onContact={onContact} onAboutUs={onAboutUs} />

      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[500px] md:min-h-[600px] md:h-screen flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001600-09.jpg" alt="Wiata drewniana" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Centered Title */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 pt-10">
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] font-medium text-white leading-[0.9] tracking-tighter font-heading mb-10 flex flex-col items-center drop-shadow-lg text-center">
            <span>Wiaty</span>
            <span className="text-white/90 italic font-light mt-2">drewniane</span>
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer" onClick={() => document.getElementById('trust-bar')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase drop-shadow-md text-center max-w-[200px] leading-relaxed">Zejdź niżej<br/>by poznać szczegóły</span>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2 shadow-sm">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section id="trust-bar" className="bg-white border-b border-gray-100 py-8 lg:py-12 relative z-20 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-2 lg:gap-12 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center px-2 sm:px-4">
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-graphite mb-1 sm:mb-2">25+</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide sm:tracking-wider">Lat Rynkowej Hegemonii</span>
            </div>
            <div className="flex flex-col items-center text-center px-2 sm:px-4">
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-graphite mb-1 sm:mb-2">100k+</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide sm:tracking-wider">Zrealizowanych Projektów</span>
            </div>
            <div className="flex flex-col items-center text-center px-2 sm:px-4">
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-graphite mb-1 sm:mb-2">15+</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide sm:tracking-wider">Krajów Europy Zach.</span>
            </div>
            <div className="flex flex-col items-center text-center px-2 sm:px-4">
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-green mb-1 sm:mb-2">C24 & BSH</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide sm:tracking-wider">Klasy Wytrzymałości</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="opinie" className="py-12 md:py-24 px-4 sm:px-8 lg:px-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-medium text-brand-graphite leading-tight mb-4 max-w-4xl mx-auto">
              <span className="text-brand-green">Ponad 3 000 klientów</span> z 15 krajów Europy <span className="whitespace-nowrap">zaufało naszej jakości</span>
            </h2>
          </div>
          <div className="relative">
            {/* Slider arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-colors"
              onClick={() => {
                const container = document.getElementById('reviews-slider');
                if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-colors"
              onClick={() => {
                const container = document.getElementById('reviews-slider');
                if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div id="reviews-slider" className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              
              {/* Review 1 */}
              <div className="snap-center shrink-0 w-[90vw] sm:w-[400px] bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src="https://ui-avatars.com/api/?name=Hubert+Olech&background=f3f4f6&color=374151" alt="Hubert Olech" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Hubert Olech</h4>
                      <p className="text-xs text-gray-500">Lokalny przewodnik · 13 opinii · 7 zdjęć</p>
                    </div>
                  </div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkWUlIGKa9bZKqpuDZ7IWzr3kcNrCABEwjlNKYrRz3w&s=10" alt="Google" className="h-5 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs text-gray-500 ml-3">6 dni temu</span>
                  <span className="text-[10px] font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-100 ml-2 text-gray-600">NOWA</span>
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-6 flex-grow">
                  Jestem więcej niż zadowolony z jakości, którą prezentuje BHB Bertsch Holzbau - zarówno obsługi, jak i samego produktu. Wysoki profesjonalizm oraz naprawdę niepowtarzalna jakość (a widziałem wiele produktów konkurencyjnych) nie pozostawia mi nic innego jak jedynie otwarcie polecić!
                </p>
                <div className="mt-auto rounded-xl overflow-hidden h-40 w-full">
                  <img src="/Realizacja_Hubert.png" alt="Realizacja" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Review 2 */}
              <div className="snap-center shrink-0 w-[90vw] sm:w-[400px] bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0a4d41] text-white flex items-center justify-center font-bold text-lg shrink-0">
                      D
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Daniel Steiner</h4>
                      <p className="text-xs text-gray-500">Lokalny przewodnik · 31 opinii · 27 zdjęć</p>
                    </div>
                  </div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkWUlIGKa9bZKqpuDZ7IWzr3kcNrCABEwjlNKYrRz3w&s=10" alt="Google" className="h-5 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs text-gray-500 ml-3">6 dni temu</span>
                  <span className="text-[10px] font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-100 ml-2 text-gray-600">NOWA</span>
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-6 flex-grow">
                  Z firmą Bertsch Holzbau łączy nas wieloletnia i pełna zaufania współpraca. Od wielu lat wspólnie tworzymy wysokiej jakości, szyte na miarę domki ogrodowe dla naszych klientów. Szczególnie cenimy ich wysoką jakość wykonania, elastyczność w ...
                </p>
                <div className="mt-auto rounded-xl overflow-hidden h-40 w-full">
                  <img src="/Realizacja_Daniel.png" alt="Realizacja" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Review 3 */}
              <div className="snap-center shrink-0 w-[90vw] sm:w-[400px] bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2a6828] text-white flex items-center justify-center font-bold text-lg shrink-0">
                      B
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Bartek Najduch</h4>
                      <p className="text-xs text-gray-500">2 opinie</p>
                    </div>
                  </div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkWUlIGKa9bZKqpuDZ7IWzr3kcNrCABEwjlNKYrRz3w&s=10" alt="Google" className="h-5 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs text-gray-500 ml-3">5 dni temu</span>
                  <span className="text-[10px] font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-100 ml-2 text-gray-600">NOWA</span>
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-6 flex-grow">
                  Jestem bardzo zadowolony ze współpracy z BHB Bertsch Holzbau. Firma oferuje produkty z dbałością o każdy detal. Na duży plus zasługuje profesjonalna obsługa, terminowa realizacja oraz fachowe doradztwo na każdym etapie zamówienia. Widać, że firma posiada duże doświadczenie i stawia na jakość. Zdecydowanie polecam każdemu, kto szuka trwałych i estetycznych wyrobów drewnianych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wide Image Section Before Comparison */}
      <section className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001509-05.jpg" 
          alt="Detale wiaty BHB" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-graphite tracking-tight leading-tight">
              Dlaczego wiaty Bertsch Holzbau to <span className="text-brand-green italic font-light">inwestycja pokoleniowa?</span><br className="hidden lg:block"/>
              <span className="font-light text-gray-500 mt-3 block text-2xl sm:text-3xl lg:text-4xl">Przekładamy inżynierię na Twój spokój ducha.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 lg:p-10 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-brand-graphite mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Steps Process */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-graphite tracking-tight mb-6">
                Od koncepcji do realizacji.<br/><span className="text-brand-green italic font-light">Proces inwestycyjny.</span>
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-12 max-w-xl">
                Zapewniamy pełną przewidywalność na każdym etapie – od projektu po montaż.
              </p>
              
              <div className="flex flex-col">
                {[
                  { title: "Konsultacja i Projekt", desc: "Analiza potrzeb i dopasowanie wiaty do posesji." },
                  { title: "Obróbka CNC", desc: "Precyzyjna produkcja z dokładnością do ułamków milimetra." },
                  { title: "Dedykowana Logistyka", desc: "Bezpieczna dostawa bezpośrednio pod wskazany adres." },
                  { title: "Bezkolizyjny Rozładunek", desc: "Wyładunek własnym wózkiem bez ryzyka uszkodzeń." },
                  { title: "Szybki Montaż", desc: "Sprawna i sterylna instalacja w zaledwie kilka dni." },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group relative pb-10 last:pb-0">
                    {idx < 4 && <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gray-200 group-hover:bg-brand-green/30 transition-colors duration-500" />}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-brand-green group-hover:text-brand-green transition-all duration-300 font-heading text-xl font-medium bg-white z-10 relative">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-heading text-xl font-medium text-brand-graphite mb-2 group-hover:text-brand-green transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[850px] rounded-sm overflow-hidden">
              <img 
                src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/000028-04-kopia-1024x778.webp" 
                alt="Proces inwestycyjny" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Comparison Section */}
      <section className="relative py-12 md:py-24 px-4 sm:px-8 lg:px-12 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000028-02.jpg" 
            alt="Porównanie wiat BHB" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-graphite/80" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-5xl font-medium tracking-wide mb-4">
              Inteligentny Wybór: BHB kontra Inne Podejścia
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Zrozum kluczowe różnice i podejmij świadomą decyzję przy inwestycji w wiatę klasy premium.
            </p>
          </div>

          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <table className="w-full text-left border-collapse min-w-full md:min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 sm:p-6 border-b border-white/10 font-heading text-sm sm:text-base uppercase tracking-widest text-gray-400 font-medium w-1/2 md:w-1/4">
                    Cecha Porównawcza
                  </th>
                  <th className="p-4 sm:p-6 border-b border-brand-green/30 border-l border-white/5 bg-black/40 backdrop-blur-sm font-heading text-base sm:text-lg tracking-wide text-brand-green font-bold w-1/2 md:w-1/4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="BHB Bertsch Holzbau" className="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90 mx-auto" />
                    </div>
                  </th>
                  <th className="hidden md:table-cell p-4 sm:p-6 border-b border-white/10 border-l border-white/5 font-heading text-sm sm:text-base tracking-wide text-white/80 font-medium w-1/4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span>⚒️</span> Garaż Murowany
                    </div>
                  </th>
                  <th className="hidden md:table-cell p-4 sm:p-6 border-b border-white/10 border-l border-white/5 font-heading text-sm sm:text-base tracking-wide text-white/80 font-medium w-1/4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span>🛒</span> Typowa Firma
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm sm:text-base bg-black/20 backdrop-blur-md">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-6 border-b border-white/10 text-gray-200 font-medium leading-relaxed">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 border-b border-white/10 border-l border-white/5 bg-black/40 group-hover:bg-black/60 transition-colors text-center">
                      <div className="flex flex-col items-center justify-center gap-3 text-brand-green font-medium">
                        {row.bhb.good ? (
                          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <X className="w-5 h-5 shrink-0 text-white" />
                        )}
                        <span className="leading-snug">{row.bhb.text}</span>
                      </div>
                    </td>
                    <td className="hidden md:table-cell p-4 sm:p-6 border-b border-white/10 border-l border-white/5 text-center">
                      <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                        {row.garage.good ? (
                          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <X className="w-5 h-5 shrink-0 text-white" />
                        )}
                        <span className="leading-snug">{row.garage.text}</span>
                      </div>
                    </td>
                    <td className="hidden md:table-cell p-4 sm:p-6 border-b border-white/10 border-l border-white/5 text-center">
                      <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                        {row.typical.good ? (
                          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <X className="w-5 h-5 shrink-0 text-white" />
                        )}
                        <span className="leading-snug">{row.typical.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Models / Anchoring */}
      <section className="py-20 lg:py-32 bg-brand-offwhite">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-graphite tracking-tight mb-6">
              Architektura Cennika
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Od minimalistycznych form dla jednego pojazdu, po hybrydowe flagowce o potężnych rozpiętościach dachu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                <div className="h-64 bg-gray-200 w-full relative">
                   <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-bold text-brand-graphite mb-2">{model.name}</h3>
                  <div className="text-brand-green font-bold text-xl mb-4">{model.price}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{model.desc}</p>
                  
                  <button onClick={() => setSelectedProduct(model)} className="text-brand-graphite font-bold uppercase tracking-wider text-xs border-b-2 border-brand-green pb-1 self-start hover:text-brand-green transition-colors">
                    Sprawdź szczegóły
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Wide Image Section Before FAQ */}
      <section className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001509-01.jpg" 
          alt="Ekskluzywna wiata BHB" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Bento Stats Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-brand-green text-white">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Mobile Title */}
          <div className="lg:hidden mb-10 text-center px-2">
            <h2 className="font-heading text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              <span className="font-bold">187 500+</span><br/>zrealizowanych zamówień
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-fr">
            
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner mb-6 sm:mb-8">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-lg sm:text-xl leading-tight mt-auto">25 lat<br/>tradycji</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner mb-6 sm:mb-8">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-lg sm:text-xl leading-tight mt-auto">14<br/>krajów</h3>
            </div>

            {/* Main Text Block (Desktop only) */}
            <div className="hidden lg:flex col-span-2 bg-transparent py-4 sm:py-6 flex-col justify-center lg:pl-12">
              <h2 className="font-heading text-4xl lg:text-5xl font-medium tracking-tight mb-2 sm:mb-4">
                <span className="font-bold">187 500+</span> zrealizowanych zamówień
              </h2>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner mb-6 sm:mb-8">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-lg sm:text-xl leading-tight mt-auto">Precyzja</h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner mb-6 sm:mb-8">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-lg sm:text-xl leading-tight mt-auto">Dostawa<br/>pod dom</h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-green-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner mb-6 sm:mb-8">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-lg sm:text-xl leading-tight mt-auto">Innowacje<br/>i ekologia</h3>
            </div>

            {/* Card 6 */}
            <div className="bg-white text-brand-green rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#E8EFEA] rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />
              </div>
              <h3 className="font-medium text-lg sm:text-xl leading-tight mt-auto">Jesteśmy do Państwa<br/>dyspozycji</h3>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-5xl font-medium text-brand-graphite tracking-wide mb-4">
              Często zadawane pytania
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Wiedza inwestycyjna przed zamówieniem wiaty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-heading font-bold text-lg text-brand-graphite pr-8">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-[#F2F5F3] text-brand-green">
                    {openFaqIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-4 sm:p-6 pt-0 text-gray-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="konfigurator" className="relative h-[80dvh] md:h-[60vh] min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center overflow-hidden text-center bg-brand-graphite">
        <div className="absolute inset-0">
          <img 
            src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000028-05.jpg" 
            alt="Ekskluzywna wiata z drewna" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-graphite/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 flex flex-col items-center">
          <p className="text-brand-green text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Stwórz idealne miejsce dla swojego samochodu
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-medium text-white leading-[0.9] tracking-tighter mb-10 max-w-4xl mx-auto">
            Skonfiguruj wiatę<br/>na własny wymiar
          </h2>
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={onConfigurator}
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-green hover:bg-[#3d834a] text-white font-bold font-sans rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest uppercase hover:-translate-y-0.5 shadow-lg shadow-brand-green/20"
            >
              Otwórz Konfigurator Wiaty
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-white/70 text-sm mt-4 font-light max-w-lg mx-auto">
              Zaprojektuj ekskluzywną wiatę z drewna skandynawskiego, dopasowaną idealnie do Twoich potrzeb.
            </p>
          </div>
        </div>
      </section>
      
      <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
    </div>
  );
}
