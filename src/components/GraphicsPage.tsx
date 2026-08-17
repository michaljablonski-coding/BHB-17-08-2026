import React from 'react';
import { ArrowLeft, Maximize, ShieldCheck, Download, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface GraphicsPageProps {
  onBack: () => void;
  onContact?: () => void;
  onAboutUs?: () => void;
  onGraphics?: () => void;
}

export default function GraphicsPage({ onBack, onContact, onAboutUs, onGraphics }: GraphicsPageProps) {
  const logoUrl = "https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp";
  const bgImageUrl = "https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_13.webp";

  return (
    <div className="min-h-screen bg-brand-offwhite">
      <Navbar onContact={onContact} onAboutUs={onAboutUs} />
      
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-20 min-h-[60vh]">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-graphite transition-colors font-medium text-sm mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-graphite mb-4">
            Materiały graficzne (Remarketing)
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Propozycje kreacji reklamowych (format 1:1, np. na Facebook/Instagram). Możesz wykorzystać te szablony do swoich kampanii.
          </p>
        </div>

        <div className="flex flex-col gap-16 max-w-lg mx-auto pb-12">
          
          {/* Koncepcja 1: Produktowa BHB */}
          <div className="flex flex-col gap-4">
            <div className="text-center mb-2">
              <h3 className="font-bold text-brand-graphite text-2xl">Koncepcja 1: Klasyczna BHB</h3>
              <p className="text-sm text-gray-500">Mocno osadzona w identyfikacji wizualnej, bogatsza w treść i detale.</p>
            </div>
            
            <div className="w-full aspect-square bg-brand-graphite relative flex flex-col shadow-2xl group overflow-hidden border border-brand-graphite">
              {/* Pasek firmowy */}
              <div className="absolute top-0 left-0 right-0 h-3 flex z-20">
                <div className="flex-1 bg-[#efba81]"></div>
                <div className="flex-1 bg-[#43a0d5]"></div>
                <div className="flex-1 bg-brand-green"></div>
                <div className="flex-1 bg-[#767676]"></div>
              </div>

              {/* Tło i zdjęcie płynnie przechodzące */}
              <div className="absolute inset-0 z-0 bg-brand-graphite">
                <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/000028-04-kopia-1024x778.webp" alt="Wiata" className="w-full h-[75%] object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 origin-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite from-25% via-brand-graphite/60 via-50% to-transparent"></div>
              </div>

              {/* Zawartość nałożona na układ */}
              <div className="relative z-10 flex-1 flex flex-col p-6 pt-6">
                
                {/* Górny wiersz: Wymiar i Logo */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/95 backdrop-blur px-4 py-2 flex items-center gap-2 shadow-sm border border-gray-100 mt-1">
                     <Maximize className="w-4 h-4 text-brand-graphite" />
                     <span className="font-bold text-sm text-brand-graphite">6m x 5,8m</span>
                  </div>
                  
                  <div className="bg-white px-5 py-3 shadow-xl border-b-[3px] border-brand-green">
                    <img src={logoUrl} alt="Logo" className="w-36 object-contain" />
                  </div>
                </div>

                {/* Dolna część z tekstami, zepchnięta na dół */}
                <div className="mt-auto flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#efba81] text-brand-graphite text-[10px] font-black uppercase tracking-widest px-2.5 py-1 shadow-md">Bestseller</span>
                    <span className="text-brand-green font-bold text-sm uppercase tracking-wider drop-shadow-md">Klasa Premium</span>
                  </div>
                  
                  <h4 className="font-heading font-bold text-white text-[2.5rem] leading-none tracking-tight drop-shadow-md mb-4">Solidna wiata<br/>samochodowa</h4>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                      <span className="text-gray-200 text-xs font-medium">Certyfikowane drewno C24</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                      <span className="text-gray-200 text-xs font-medium">Niemiecka jakość</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                      <span className="text-gray-200 text-xs font-medium">Odporność na lata</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                      <span className="text-gray-200 text-xs font-medium">Bezpośrednio od producenta</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-600/50 pt-5 mt-auto">
                     <div className="flex flex-col">
                       <span className="text-gray-400 text-[10px] uppercase tracking-widest mb-0.5">Cena orientacyjna</span>
                       <div className="text-white font-bold text-[1.75rem] leading-none">
                          od <span className="text-brand-green">16 500 zł</span>
                       </div>
                     </div>
                     <div className="bg-brand-green text-white px-5 py-2.5 font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 border border-brand-green hover:bg-transparent transition-colors">
                        Sprawdź <ArrowLeft className="w-4 h-4 rotate-180" />
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-[#3d834a] text-white font-bold py-4 shadow-lg shadow-brand-green/20 transition-all text-base rounded-none">
              <Download className="w-5 h-5" />
              Pobierz projekt (1080x1080)
            </button>
          </div>

          {/* Koncepcja 2: Elegancka */}
          <div className="flex flex-col gap-4">
            <div className="text-center mb-2">
              <h3 className="font-bold text-brand-graphite text-2xl">Koncepcja 2: Wizerunkowa</h3>
              <p className="text-sm text-gray-500">Ciemna, prestiżowa kolorystyka połączona z nowoczesnym układem.</p>
            </div>
            
            <div className="w-full aspect-square bg-brand-graphite relative flex flex-col shadow-2xl group border border-brand-graphite">
              <div className="absolute top-0 left-0 right-0 h-2 flex z-20">
                <div className="flex-1 bg-[#efba81]"></div>
                <div className="flex-1 bg-brand-green"></div>
              </div>
              
              <div className="h-[60%] relative overflow-hidden">
                <img src="https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_13.webp" alt="Wiata" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-brand-graphite/40 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-[#efba81] text-brand-graphite text-xs font-bold px-4 py-2 shadow-md">Bestseller</span>
                </div>
              </div>
              
              <div className="h-[40%] flex flex-col justify-between p-8 relative z-10 -mt-6">
                <h4 className="text-white font-heading font-bold text-4xl leading-tight">Nowoczesne wiaty<br/>samochodowe</h4>
                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-xs font-medium">Cena orientacyjna</span>
                    <span className="text-white font-bold text-3xl">od <span className="text-brand-green">16 500 zł</span></span>
                  </div>
                  <img src={logoUrl} alt="Logo" className="w-24 object-contain brightness-0 invert opacity-90" />
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-[#3d834a] text-white font-bold py-4 shadow-lg shadow-brand-green/20 transition-all text-base rounded-none">
              <Download className="w-5 h-5" />
              Pobierz projekt (1080x1080)
            </button>
          </div>

        </div>
      </main>

      <Footer onContact={onContact} onAboutUs={onAboutUs} onGraphics={onGraphics} />
    </div>
  );
}
