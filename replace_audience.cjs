const fs = require('fs');
let content = fs.readFileSync('src/components/SaunasLandingPage.tsx', 'utf-8');

const startTag = '{/* Editorial Target Audience Section */}';
const endTag = '{/* Footer */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Tags not found');
  process.exit(1);
}

const newSection = `
      {/* Premium Target Audience Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-brand-graphite tracking-tight mb-6">
              BHB Bertsch Holzbau
            </h2>
            <p className="text-xl sm:text-2xl text-brand-green font-medium font-heading italic">
              jest dla Ciebie, jeśli...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* 01 */}
            <div className="bg-white p-10 sm:p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute -right-4 -top-8 text-[120px] font-heading font-bold text-gray-50 select-none group-hover:text-brand-green/5 transition-colors">
                01
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-brand-green mb-8 rounded-sm"></div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-brand-graphite mb-4 leading-tight">
                  Zraziłeś się do cienkich domków z marketu
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Budujemy z masywnego, certyfikowanego świerku skandynawskiego (do 70 mm). Zapewniamy szczelną konstrukcję bez pęknięć – to luksus, który przetrwa dekady bez przykrych niespodzianek.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-white p-10 sm:p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute -right-4 -top-8 text-[120px] font-heading font-bold text-gray-50 select-none group-hover:text-brand-green/5 transition-colors">
                02
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-brand-green mb-8 rounded-sm"></div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-brand-graphite mb-4 leading-tight">
                  Cenisz drewno w nowoczesnym wydaniu
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Nasz autorski Zamek Tyrolski całkowicie ukrywa łączenia ciesielskie. Dzięki temu łączymy surową masę litych bloków drewna z minimalistycznym designem, pasującym do współczesnych ogrodów.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-white p-10 sm:p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute -right-4 -top-8 text-[120px] font-heading font-bold text-gray-50 select-none group-hover:text-brand-green/5 transition-colors">
                03
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-brand-green mb-8 rounded-sm"></div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-brand-graphite mb-4 leading-tight">
                  Oczekujesz bezproblemowej dostawy
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Koniec z paletami porzuconymi na ulicy. Posiadamy własną flotę aut z podwieszanymi wózkami widłowymi. Precyzyjnie dowieziemy i rozładujemy Twoją saunę dokładnie tam, gdzie wskażesz.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

`;

content = content.substring(0, startIndex) + newSection + content.substring(endIndex);

fs.writeFileSync('src/components/SaunasLandingPage.tsx', content);
console.log('Replaced successfully');
