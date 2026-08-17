import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Thermometer, TreePine, Award, Wind , Plus, Minus, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Star, Check, X, Phone, Mail, ShieldCheck, Factory, Users, Globe, Truck, Handshake, Leaf } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SaunaConfigurator from './SaunaConfigurator';
import ProductPage from './ProductPage';


interface SaunasLandingPageProps {


  onGraphics?: () => void;
  onBack: () => void;
  onConfigurator: () => void;
  onContact?: () => void;
  onAboutUs?: () => void;
}

const features = [
  {
    title: "Doskonała izolacja",
    description: "Zastosowanie grubych profili z drewna świerkowego (od 45 mm do 58 mm) gwarantuje szybkie nagrzewanie i utrzymanie ciepła.",
    icon: Thermometer
  },
  {
    title: "Skandynawskie drewno",
    description: "Wykorzystujemy wyłącznie certyfikowane drewno pochodzące ze zrównoważonych upraw w surowym klimacie Skandynawii.",
    icon: TreePine
  },
  {
    title: "Niemiecka precyzja",
    description: "Jakość Bertsch Holzbau to dbałość o każdy detal – od solidnej konstrukcji dachu po bezpieczne i estetyczne szklane fronty.",
    icon: Award
  },
  {
    title: "Optymalna wentylacja",
    description: "System prawidłowej cyrkulacji powietrza zapewnia komfort i zapobiega powstawaniu wilgoci wewnątrz kabiny.",
    icon: Wind
  }
];

const faqs = [
  {
    question: "Jakiej inwestycji to wymaga i jakiego zwrotu mogę oczekiwać?",
    answer: "Inwestycja w sauny premium zaczyna się od około czternastu tysięcy złotych. Zwrot to natychmiastowa poprawa odporności i relaks na własnej posesji. Wykorzystanie gęstego świerku skandynawskiego zapewnia dekady nieskazitelnej eksploatacji bez ryzyka szybkich usterek."
  },
  {
    question: "Jak szybko po zamówieniu zobaczę pierwsze rezultaty?",
    answer: "Dzięki systemom prefabrykowanym z niezwykłą dokładnością CNC, montaż konstrukcji jest błyskawiczny. W przypadku innowacyjnych modeli szkieletowych linii CARA Easy, gotowy budynek możesz złożyć na swojej działce w przeciągu zaledwie jednego do dwóch dni."
  },
  {
    question: "Czym różni się wasza technologia od tańszych, masowych alternatyw?",
    answer: "Konkurencja stosuje cienkie deski i masową produkcję obniżającą koszty. My wyróżniamy się litym drewnem o grubości do siedemdziesięciu milimetrów oraz ekskluzywnym Zamkiem Tyrolskim. To gwarantuje niewiarygodną sztywność i niespotykanie czystą, nowoczesną formę wizualną."
  },
  {
    question: "A co, jeśli proces skomplikowanej dostawy na moją działkę się nie powiedzie?",
    answer: "Całkowicie wyeliminowaliśmy to stresujące ryzyko. Posiadamy własną nowoczesną flotę potężnych ciężarówek specjalnie wyposażonych w podwieszane wózki widłowe. Dzięki temu nasz kierowca samodzielnie i zupełnie bezkolizyjnie dostarcza ciężkie moduły bezpośrednio we wskazane miejsce posesji."
  },
  {
    question: "Próbowałem już wcześniej drewnianych konstrukcji, ale szybko uległy zniszczeniu i bolesnym pęknięciom...",
    answer: "Poprzednie problemy wynikały z użycia wilgotnego, słabego surowca. My stosujemy wyłącznie nordycki świerk, suszony komorowo do czternastu procent. Taki rygorystyczny proces całkowicie eliminuje paczenie się drewna oraz powstawanie głębokich pęknięć strukturalnych na przestrzeni lat."
  }
];

const MODELS = [
  { id: 'grunwald', name: 'GRÜNWALD', desc: 'Klasyczna, funkcjonalna sauna idealna na każdą posesję.', price: 'od 16 500 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2025/12/Tytul-600x338.webp' },
  { id: 'chiemsee', name: 'CHIEMSEE', desc: 'Tradycyjna, prosta konstrukcja dla zwolenników klasyki.', price: 'od 18 200 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2025/04/2013_szare-600x450.jpg' },
  { id: 'ammersee', name: 'AMMERSEE', desc: 'Kompaktowa przestrzeń i szybkie nagrzewanie.', price: 'od 14 900 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000505-01-kopia-600x338.webp' },
  { id: 'triest', name: 'TRIEST', desc: 'Nowoczesna bryła pasująca do współczesnej architektury.', price: 'od 21 500 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001395-01-kopia-600x450.webp' },
  { id: 'haga', name: 'HAGA', desc: 'Duże przeszklenia i przestronne wnętrze sprzyjające relaksowi.', price: 'od 24 800 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001486-03-kopia-600x450.webp' },
  { id: 'relex', name: 'RELEX', desc: 'Zaprojektowana z myślą o maksymalnym relaksie.', price: 'od 27 900 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001550-22w-600x400.webp' },
  { id: 'oresund', name: 'ÖRESUND', desc: 'Ekskluzywny design i panoramiczny widok z wnętrza.', price: 'od 31 500 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001518-01-kopia-600x450.webp' },
  { id: 'hanni', name: 'HANNI', desc: 'Model premium ze strefą wypoczynku.', price: 'od 38 200 PLN', img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001514-01-kopia-600x450.webp' },
];

const comparisonData = [
  {
    feature: "Precyzja i całkowita szczelność konstrukcji ścian",
    bhb: { text: "Tolerancja 0,1 mm", good: true },
    traditional: { text: "Ryzyko błędów ludzkich", good: false },
    diy: { text: "Powstające mostki termiczne", good: false }
  },
  {
    feature: "Architektura ogrodowa całkowicie wolna od konserwacji",
    bhb: { text: "Linia metalowa MAFAL", good: true },
    traditional: { text: "Cykliczne malowanie drewna", good: false },
    diy: { text: "Szybko rdzewiejąca blacha", good: false }
  },
  {
    feature: "Bezpieczna spedycja gabarytów pod same drzwi",
    bhb: { text: "Zwinne manewrowanie paczką", good: true },
    traditional: { text: "Problemy z rozładunkiem", good: false },
    diy: { text: "Transport we własnym zakresie", good: false }
  },
  {
    feature: "Zimowa ochrona cieplna i naturalna masa termiczna",
    bhb: { text: "Znakomita akumulacja energii", good: true },
    traditional: { text: "Niestabilne oddawanie ciepła", good: false },
    diy: { text: "Błyskawiczne wychładzanie wnętrza", good: false }
  },
  {
    feature: "Rodzaj drewna w strefach kontaktu cielesnego",
    bhb: { text: "Chłodne afrykańskie Abachi", good: true },
    traditional: { text: "Gorące, żywiczne gatunki", good: false },
    diy: { text: "Tania, parząca sosna", good: false }
  },
  {
    feature: "Zaawansowane systemy ukrytych połączeń belek drewnianych",
    bhb: { text: "Innowacyjny Zamek Tyrolski", good: true },
    traditional: { text: "Anachroniczne, rustykalne ostatki", good: false },
    diy: { text: "Widoczne wkręty montażowe", good: false }
  },
  {
    feature: "Gwarancja powtarzalności oraz niezmiennej jakości wykonania",
    bhb: { text: "Fabryczne panele prefabrykowane", good: true },
    traditional: { text: "Zmienna, niepewna jakość", good: false },
    diy: { text: "Słabe materiały zastępcze", good: false }
  }
];




export default function SaunasLandingPage({ onBack, onConfigurator, onContact, onAboutUs, onGraphics }: SaunasLandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onBack={onBack} onContact={onContact} onAboutUs={onAboutUs} />
        <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ProductPage model={selectedProduct} category="Sauny zewnętrzne" onBack={() => setSelectedProduct(null)} />
        </motion.div>
        <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
      </div>
    );
  }
  

  
  const scrollToConfigurator = () => {
    const element = document.getElementById('konfigurator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBack={onBack} onContact={onContact} onAboutUs={onAboutUs} />
      
      

      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[500px] md:min-h-[600px] md:h-screen flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Sauny_Hero_SzerokieZdjecie.webp" 
            alt="Sauna zewnętrzna - panorama"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Centered Title */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 pt-10">
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] font-medium text-white leading-[0.9] tracking-tighter font-heading mb-10 flex flex-col items-center drop-shadow-lg text-center">
            <span>Sauny</span>
            <span className="text-white/90 italic font-light mt-2">ogrodowe</span>
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer" onClick={() => document.getElementById('opinie')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase drop-shadow-md text-center max-w-[200px] leading-relaxed">Zejdź niżej<br/>by poznać szczegóły</span>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2 shadow-sm">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      
      {/* Reviews Section */}
      <section id="opinie" className="py-12 md:py-24 px-4 sm:px-8 lg:px-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-medium text-brand-graphite leading-tight mb-4">
              <span className="text-brand-green">Ponad 3 000 klientów z 15 państw europejskich</span> zaufało nam, by stworzyć bezpieczną i luksusową przestrzeń relaksu na własnej posesji
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



      
      {/* Asymmetrical Feature Section 1 */}
      <section className="py-12 md:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24 max-w-[1400px] mx-auto">
          <div className="flex-1 relative w-full pt-10 pl-4 sm:pl-10">
            {/* Temperature Badge */}
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#F2F5F3] rounded-full flex items-center justify-center -z-10 opacity-70 blur-2xl"></div>
            <div className="absolute top-4 left-4 w-20 h-20 sm:w-24 sm:h-24 bg-white shadow-xl shadow-brand-green/10 rounded-full flex items-center justify-center -z-10 border border-gray-50">
              <span className="text-brand-green font-heading font-medium text-xl sm:text-2xl">90°C</span>
            </div>
            
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mb-10" />
            
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium text-brand-graphite mb-12 leading-[0.9] tracking-tighter">
              Klasyka i styl
            </h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Solidna konstrukcja</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Optymalna izolacja cieplna zapewniająca szybkie nagrzewanie.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Naturalny mikroklimat</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Idealne warunki dzięki wykorzystaniu certyfikowanego drewna.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Precyzyjne wykończenie</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Detale dopracowane do perfekcji przez naszych specjalistów.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full lg:pr-8">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-green/10 group">
              <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src="/Sauny_1.jpg" 
                alt="Zewnętrzna sauna klasyczna" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetrical Feature Section 2 (Reversed) */}
      <section className="py-12 md:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#FAFAFA]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-16 lg:gap-24 max-w-[1400px] mx-auto">
          <div className="flex-1 relative w-full pt-10 pr-4 sm:pr-10 lg:pl-12">
            
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mb-10" />
            
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium text-brand-graphite mb-12 leading-[0.9] tracking-tighter">
              Duże przeszklenia
            </h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Naturalne światło</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Wnętrze pełne promieni słońca dające poczucie nieograniczonej przestrzeni.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Widok na ogród</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Pełen relaks w otoczeniu natury, łączący wnętrze z otoczeniem.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Hartowane szkło</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Najwyższe bezpieczeństwo i doskonała izolacja termiczna na lata.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full lg:pl-8">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-green/10 group">
              <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src="/Sauny_2.jpg.webp" 
                alt="Nowoczesna sauna z przeszkleniami" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="relative py-12 md:py-24 px-4 sm:px-8 lg:px-12 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_15.webp" 
            alt="BHB Sauna Tło"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-graphite/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-5xl font-medium tracking-wide mb-4">
              Inteligentny Wybór: BHB kontra Inne Podejścia
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Zrozum kluczowe różnice i podejmij świadomą decyzję przy wyborze sauny do swojego ogrodu.
            </p>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 sm:p-6 border-b border-white/10 font-heading text-sm sm:text-base uppercase tracking-widest text-gray-400 font-medium w-1/3">
                    Cecha Porównawcza<br/><span className="text-xs text-gray-400/70">(Kluczowe Różnice)</span>
                  </th>
                  <th className="p-4 sm:p-6 border-b border-brand-green/30 border-l border-white/5 bg-black/40 backdrop-blur-sm font-heading text-base sm:text-lg tracking-wide text-brand-green font-bold w-1/4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="BHB Bertsch Holzbau" className="h-12 brightness-0 invert opacity-90 mx-auto" />
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 border-b border-white/10 border-l border-white/5 font-heading text-sm sm:text-base tracking-wide text-white/80 font-medium w-1/4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span>⚒️</span> Tradycyjna Metoda
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 border-b border-white/10 border-l border-white/5 font-heading text-sm sm:text-base tracking-wide text-white/80 font-medium w-1/4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span>🛒</span> Markety Budowlane
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
                    <td className="p-4 sm:p-6 border-b border-white/10 border-l border-white/5 text-center">
                      <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                        {row.traditional.good ? (
                          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <X className="w-5 h-5 shrink-0 text-white" />
                        )}
                        <span className="leading-snug">{row.traditional.text}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 border-b border-white/10 border-l border-white/5 text-center">
                      <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                        {row.diy.good ? (
                          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <X className="w-5 h-5 shrink-0 text-white" />
                        )}
                        <span className="leading-snug">{row.diy.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4">
            <button 
              onClick={scrollToConfigurator}
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-green hover:bg-[#3d834a] text-white font-bold font-sans rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest uppercase hover:-translate-y-0.5 shadow-lg shadow-brand-green/20"
            >
              Skonfiguruj swoją saunę
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mt-1">
              <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt="Google" className="h-6 object-contain brightness-0 invert opacity-90" />
              <div className="flex text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-white/90 text-sm font-medium font-sans">Jakość oceniana na 5,0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wide Feature Section */}
      <section className="py-12 md:py-24 px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="flex flex-col mb-16 gap-6 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-brand-graphite leading-tight">
            Ciężko pracujesz i <span className="text-brand-green font-semibold">marzysz o głębokim relaksie we własnym ogrodzie,</span> ale przeraża Cię wizja nietrwałych konstrukcji?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            W BHB Bertsch Holzbau oferujemy perfekcyjny balans między najnowocześniejszą inżynierią a całkowitą wygodą:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {[
            { icon: ShieldCheck, text: "Certyfikat drewna C24" },
            { icon: Factory, text: "Zaawansowane linie Hundegger" },
            { icon: Users, text: "150 Wykwalifikowanych Specjalistów" },
            { icon: Star, text: "Reputacja na Trustindex" },
            { icon: Globe, text: "Klienci w 15 Państwach" },
            { icon: Truck, text: "Flota 25 Ciężarówek" },
            { icon: Handshake, text: "450 Globalnych Dystrybutorów" },
            { icon: Leaf, text: "Odporność Biologiczna Cedru" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-5 sm:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-brand-green/30 transition-colors text-center group">
              <div className="w-12 h-12 rounded-md bg-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-gray-800 leading-snug">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mb-16">
          <button 
              onClick={scrollToConfigurator}
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-green hover:bg-[#3d834a] text-white font-bold font-sans rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest uppercase hover:-translate-y-0.5 shadow-lg shadow-brand-green/20"
            >
              Skonfiguruj swoją saunę
              <ArrowRight className="w-5 h-5" />
            </button>
          <div className="flex items-center gap-3">
            <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt="Google" className="h-6 object-contain" />
            <div className="flex text-yellow-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-gray-600 text-sm font-medium font-sans">Jakość oceniana na 5,0</span>
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
              Od kompaktowych kabin na każdą posesję, po ekskluzywne modele spa o niespotykanym komforcie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODELS.map((model, idx) => (
              <div key={idx} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
                <div className="h-56 bg-gray-200 w-full relative">
                   <img src={model.img} alt={model.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
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

      {/* Full Width Section */}
      <section className="w-full">
         <img 
           src="/Sauny_3.jpg.webp" 
           alt="Wnętrze luksusowej sauny" 
           className="w-full h-auto md:h-[60vh] object-cover" 
         />
      </section>

      {/* Features List Section */}
      <section id="dlaczego-my" className="py-12 md:py-24 px-4 sm:px-8 lg:px-12 bg-white border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-3xl md:text-6xl font-medium text-brand-green tracking-wide mb-10">
              Dlaczego my?
            </h2>
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="/Sauny_4.jpg.webp" 
                alt="Detal wykończenia sauny" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-gray-100 py-8 first:pt-0">
                  <div className="w-12 h-12 bg-brand-green rounded-sm flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg sm:text-xl font-medium text-brand-graphite tracking-wide mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* Premium Target Audience Section */}
      <section className="py-12 md:py-32 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-24 text-center flex flex-col items-center">
            <img 
              src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
              alt="Bertsch Holzbau Logo" 
              className="h-10 w-auto mb-8"
            />
            <h2 className="font-heading text-3xl sm:text-5xl font-medium text-brand-graphite tracking-tight leading-[1.1] mb-2">
              BHB Bertsch Holzbau
            </h2>
            <p className="text-2xl sm:text-4xl text-brand-green font-medium font-heading italic">
              jest dla Ciebie, jeśli...
            </p>
          </div>
          
          <div className="flex flex-col gap-10 sm:gap-24 pl-0 sm:pl-20">
            
            {/* 01 */}
            <div className="group relative">
              <div className="hidden sm:block absolute -left-24 -top-3 text-brand-green font-heading font-bold text-6xl lg:text-7xl select-none opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-graphite">
                01
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-brand-graphite mb-5 leading-tight">
                <span className="sm:hidden text-brand-green font-bold mr-3">01</span>
                Zraziłeś się do nietrwałych i cienkich domków z marketu
              </h3>
              <div className="w-12 h-1 bg-[#d8eedf] mb-6 rounded-sm"></div>
              <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[17px] font-light max-w-2xl">
                Budujemy z masywnego, certyfikowanego świerku skandynawskiego (do 70 mm). Zapewniamy szczelną konstrukcję bez pęknięć – to luksus, który przetrwa dekady bez przykrych niespodzianek.
              </p>
            </div>

            {/* 02 */}
            <div className="group relative">
              <div className="hidden sm:block absolute -left-24 -top-3 text-brand-green font-heading font-bold text-6xl lg:text-7xl select-none opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-graphite">
                02
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-brand-graphite mb-5 leading-tight">
                <span className="sm:hidden text-brand-green font-bold mr-3">02</span>
                Znasz uroki drewna, ale nienawidzisz klasycznych, rustykalnych łączeń
              </h3>
              <div className="w-12 h-1 bg-[#d8eedf] mb-6 rounded-sm"></div>
              <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[17px] font-light max-w-2xl">
                Nasz autorski Zamek Tyrolski całkowicie ukrywa łączenia ciesielskie. Łączymy surową masę litych bloków drewna z minimalistycznym designem, idealnie pasującym do współczesnych ogrodów.
              </p>
            </div>

            {/* 03 */}
            <div className="group relative">
              <div className="hidden sm:block absolute -left-24 -top-3 text-brand-green font-heading font-bold text-6xl lg:text-7xl select-none opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-graphite">
                03
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-brand-graphite mb-5 leading-tight">
                <span className="sm:hidden text-brand-green font-bold mr-3">03</span>
                Byłeś zostawiony sam sobie z wielką paletą na drodze
              </h3>
              <div className="w-12 h-1 bg-[#d8eedf] mb-6 rounded-sm"></div>
              <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[17px] font-light max-w-2xl">
                Koniec z paletami porzuconymi na ulicy. Posiadamy flotę ciężarówek wyposażonych w wózki widłowe. Precyzyjnie dowieziemy i rozładujemy Twoją saunę dokładnie tam, gdzie zechcesz.
              </p>
            </div>

          </div>
          
          <div className="mt-20 flex flex-col items-center gap-4">
            <button 
              onClick={scrollToConfigurator}
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-green hover:bg-[#3d834a] text-white font-bold font-sans rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest uppercase hover:-translate-y-0.5 shadow-lg shadow-brand-green/20"
            >
              Skonfiguruj swoją saunę
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mt-1">
              <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt="Google" className="h-6 object-contain" />
              <div className="flex text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-gray-600 text-sm font-medium font-sans">Jakość oceniana na 5,0</span>
            </div>
          </div>
        </div>
      </section>

{/* Full Width Image Section */}
      <section className="w-full">
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_13.webp" 
          alt="Sauna ogrodowa" 
          className="w-full h-[40vh] sm:h-[70vh] lg:h-[80vh] object-cover"
        />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <img 
              src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
              alt="Bertsch Holzbau Logo" 
              className="h-12 w-auto mx-auto mb-6"
            />
            <h2 className="font-heading text-2xl md:text-5xl font-medium text-brand-graphite tracking-wide mb-4">
              Często zadawane pytania
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Wszystko co musisz wiedzieć przed zakupem sauny.
            </p>
          </div>
          
          <div className="space-y-4">
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
      <section id="konfigurator" className="relative h-[80dvh] md:h-[60vh] min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img 
            src="/Sauny_Hero_SzerokieZdjecie.webp" 
            alt="Sauna relaks" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-brand-graphite/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 flex flex-col items-center">
          <p className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4">
            GOTOWY NA RELAKS?
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-medium text-white leading-[0.9] tracking-tighter mb-10 max-w-4xl mx-auto">
            Zanurz się w<br/>cieple i spokoju
          </h2>
          <div className="flex flex-col items-center gap-4">
              <button 
              onClick={onConfigurator}
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-green hover:bg-[#3d834a] text-white font-bold font-sans rounded-full transition-all duration-300 text-xs md:text-sm tracking-widest uppercase hover:-translate-y-0.5 shadow-lg shadow-brand-green/20"
            >
              Skonfiguruj swoją saunę
              <ArrowRight className="w-5 h-5" />
            </button>
              <div className="flex items-center justify-center gap-3 mt-1">
                <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt="Google" className="h-6 object-contain brightness-0 invert opacity-90" />
                <div className="flex text-yellow-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-white/90 text-sm font-medium font-sans">Jakość oceniana na 5,0</span>
              </div>
            </div>
        </div>
      </section>

            

      <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
    </div>
  );
}
