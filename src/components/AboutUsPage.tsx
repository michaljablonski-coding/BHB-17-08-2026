import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface AboutUsPageProps {
  onGraphics?: () => void;
  onBack: () => void;
  onContact?: () => void;
}

const timelineEvents = [
  { year: '1998', month: 'Maj', description: 'Pierwsze projekty domków z drewna. Joachim Bertsch zaczyna swoją pasję realizować w małym warsztacie.' },
  { year: '2001', month: 'Styczeń', description: 'Założenie firmy BHB Bertsch Holzbau. Początki profesjonalnej produkcji i zatrudnienie pierwszych pracowników.' },
  { year: '2005', month: 'Wrzesień', description: 'Otwarcie nowej hali produkcyjnej i wprowadzenie innowacyjnych technologii obróbki drewna.' },
  { year: '2010', month: 'Marzec', description: 'Ekspansja na rynki europejskie. BHB staje się liderem w dostarczaniu najwyższej jakości domków.' },
  { year: '2015', month: 'Lipiec', description: 'Wprowadzenie innowacyjnych technologii do procesu produkcji domków.' },
  { year: '2020', month: 'Maj', description: 'Otwarcie nowych oddziałów i powiększenie rodziny BHB.' },
];

const reasons = [
  { id: '1', title: 'Realizujemy projekty niestandardowe', desc: 'Dowolna skala i skomplikowane kształty nie stanowią dla nas wyzwania.' },
  { id: '2', title: 'Twój projekt, nasze rozwiązania', desc: 'Dbamy o każdy detal, dopasowując konstrukcje dokładnie do Twoich potrzeb.' },
  { id: '3', title: 'Bez kompromisów', desc: 'Dążymy do perfekcji, ponieważ Twoja pełna satysfakcja jest dla nas kluczowa.' },
  { id: '4', title: 'Profesjonalne doradztwo', desc: 'Zapewniamy wsparcie i elastyczność, gwarantując komfort na każdym etapie współpracy.' },
  { id: '5', title: 'Najnowocześniejsze technologie', desc: 'Korzystamy z innowacyjnych rozwiązań, aby realizować projekty z najwyższą precyzją.' },
  { id: '6', title: 'Kompleksowa obsługa', desc: 'Projekt, produkcja, transport i montaż – zapewniamy pełne wsparcie w jednym miejscu.' },
];

export default function AboutUsPage({ onBack, onContact, onGraphics }: AboutUsPageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-graphite selection:bg-brand-green selection:text-white">
      <Navbar onBack={onBack} onContact={onContact} onAboutUs={() => {}} />

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[450px] lg:h-[600px] w-full flex items-end justify-start">
          <div className="absolute inset-0 z-0">
            <img 
              src="/Zdjecie_ONas.png" 
              alt="Siedziba firmy BHB" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1a4a2e]/20 mix-blend-multiply" />
          </div>

          {/* White Box Overlay */}
          <div className="relative z-20 bg-white px-6 md:px-8 lg:px-16 py-4 md:py-6 lg:py-10 max-w-[90%] lg:max-w-none border-t-4 border-brand-green">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-brand-graphite inline-flex items-center gap-4">
              Poznaj historię <span className="text-brand-green font-light tracking-tight">BHB</span>
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-white w-full py-12 md:py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Image/Video Placeholder */}
              <div className="w-full lg:w-[55%] relative group rounded-sm overflow-hidden">
                <img 
                  src="/Filmik_Zdjęcie.png" 
                  alt="Fabryka BHB" 
                  className="w-full aspect-[16/9] lg:aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-[45%]">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-graphite mb-8 leading-tight">
                  Nasza opowieść zaczyna się od pasji
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Wszystko zaczęło się od jednej idei – miłości do drewna. Joachim Bertsch, założyciel firmy, połączył swoje pasje: rzemiosło i projektowanie, tworząc od podstaw firmę opartą na precyzji i jakości.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-[#489959] w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 lg:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-0">
                Nasza historia
              </h2>
              <div className="flex gap-4">
                <button onClick={scrollLeft} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-brand-green transition-all hover:border-white">
                  <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
                </button>
                <button onClick={scrollRight} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-brand-green transition-all hover:border-white">
                  <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
                </button>
              </div>
            </div>

            <div className="relative">
              {/* The Timeline Line */}
              <div className="absolute bottom-[72px] left-0 right-0 h-[2px] bg-white/30" />
              
              {/* Events Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto snap-x scrollbar-hide pb-8 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 relative z-10"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {timelineEvents.map((event, index) => (
                  <div key={index} className="shrink-0 w-[260px] md:w-[300px] lg:w-[350px] snap-start relative group pb-16">
                    
                    {/* The Info Card */}
                    <div className="bg-white h-full p-6 lg:p-8 rounded-sm shadow-2xl relative transform group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-graphite tracking-tight">{event.year}</span>
                        <span className="text-lg md:text-xl text-gray-500 font-medium">{event.month}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {event.description}
                      </p>
                      
                      {/* Arrow down to timeline */}
                      <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white rotate-45" />
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute bottom-[29px] left-8 w-6 h-6 rounded-full bg-brand-green border-[4px] border-white z-10 shadow-sm" />
                    
                    {/* Progress Segment overlay (optional decoration) */}
                    <div className="absolute bottom-[40px] left-8 right-0 h-[2px] bg-white/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rodzinna tradycja */}
        <section className="bg-white w-full py-12 md:py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-center">
              
              {/* Family Image */}
              <div className="w-full lg:w-1/2 flex justify-center items-center relative py-12 lg:py-0">
                 <img 
                   src="https://bertsch-holzbau.eu/wp-content/uploads/2024/12/bhb-2.png" 
                   alt="BHB Rodzina" 
                   className="w-[80%] lg:w-[70%] object-contain relative z-10"
                 />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-graphite mb-8 leading-tight">
                  Rodzinna tradycja i nowe pokolenia
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                  BHB to firma rodzinna, budowana przez pokolenia profesjonalistów, z którymi staliśmy się międzynarodowym liderem.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Dziś łączymy ludzi z pasją do drewna. Nasze konstrukcje to harmonia natury z nowoczesnym designem, a klientów traktujemy jak partnerów, wspierając ich na każdym etapie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image Section */}
        <section className="w-full">
          <img 
            src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/02_2005-2048x1152.jpg.webp" 
            alt="Bertsch Holzbau" 
            className="w-full h-auto object-cover max-h-[50vh] md:max-h-[60vh] lg:max-h-[80vh]"
          />
        </section>

        {/* Drewno z duszą */}
        <section className="bg-white w-full py-12 md:py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Text Content */}
            <div className="w-full lg:w-[45%]">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-graphite mb-8 leading-tight">
                Drewno – <span className="text-brand-green">materiał z duszą</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  Drewno to dla nas coś więcej niż materiał. To symbol trwałości i harmonii z naturą.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Starannie dobieramy każdą deskę, by sprostać najwyższym standardom. Każdy projekt traktujemy jak dzieło sztuki, wydobywając z drewna jego unikalny charakter.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-[55%] relative">
              <div className="rounded-[2rem] overflow-hidden relative">
                <img 
                  src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/03_2024-1-1-scaled.jpg" 
                  alt="Drewno konstrukcyjne w fabryce" 
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[16/10]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Dlaczego warto postawić na BHB */}
        <section className="bg-[#489959] w-full py-12 md:py-20 lg:py-32 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            
            <div className="text-center mb-12 md:mb-16 lg:mb-24 flex flex-col items-center">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 tracking-wide">
                Dlaczego warto postawić na BHB?
              </h2>
              <div className="w-20 h-1 bg-white/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-[1200px] mx-auto">
              {reasons.map((reason) => (
                <div key={reason.id} className="bg-white hover:bg-gray-50 rounded-sm shadow-xl hover:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-4 -top-8 text-[#489959]/10 group-hover:text-[#489959]/20 transition-colors duration-500 font-heading font-bold text-[180px] leading-none z-0 select-none">
                    {reason.id}
                  </div>
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-brand-graphite mb-5">{reason.title}</h3>
                    <div className="w-10 h-[3px] bg-[#cc0000] mb-6 opacity-90" />
                    <p className="text-gray-500 leading-relaxed text-base font-light">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer onContact={onContact} onAboutUs={() => {}} onGraphics={() => {}} />
    </div>
  );
}
