const fs = require('fs');
let content = fs.readFileSync('src/components/SaunasLandingPage.tsx', 'utf-8');

const startTag = '{/* Reviews Section */}';
const endTag = '{/* Models Section */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Tags not found');
  process.exit(1);
}

const newReviews = `
      {/* Reviews Section */}
      <section id="opinie" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-brand-graphite leading-tight mb-4">
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
              <div className="snap-center shrink-0 w-[90vw] sm:w-[400px] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
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
              <div className="snap-center shrink-0 w-[90vw] sm:w-[400px] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
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
              <div className="snap-center shrink-0 w-[90vw] sm:w-[400px] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
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

      `;

content = content.substring(0, startIndex) + newReviews + content.substring(endIndex);

content = content.replace("import { ArrowLeft, Thermometer, TreePine, Award, Wind , Plus, Minus, ArrowRight, ChevronDown, Star, Check, X, Phone, Mail, ShieldCheck, Factory, Users, Globe, Truck, Handshake, Leaf } from 'lucide-react';", "import { ArrowLeft, Thermometer, TreePine, Award, Wind , Plus, Minus, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Star, Check, X, Phone, Mail, ShieldCheck, Factory, Users, Globe, Truck, Handshake, Leaf } from 'lucide-react';");

fs.writeFileSync('src/components/SaunasLandingPage.tsx', content);
console.log('Replaced successfully');
