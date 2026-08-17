const fs = require('fs');
let content = fs.readFileSync('src/components/SaunasLandingPage.tsx', 'utf-8');

const startTag = '{/* Premium Target Audience Section */}';
const endTag = '{/* Full Width Image Section */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Tags not found');
  process.exit(1);
}

const newSection = `
      {/* Premium Target Audience Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-24 text-center flex flex-col items-center">
            <img 
              src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
              alt="Bertsch Holzbau Logo" 
              className="h-10 w-auto mb-8"
            />
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-graphite tracking-tight leading-[1.1]">
              BHB Bertsch Holzbau<br />
              <span className="text-brand-green italic font-light">jest dla Ciebie, jeśli...</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-20 sm:gap-28 pl-0 sm:pl-24">
            
            {/* 01 */}
            <div className="relative group">
              <div className="hidden sm:block absolute -left-24 -top-3 text-brand-green font-heading font-medium text-6xl lg:text-7xl select-none opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-graphite">
                01
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-graphite mb-6 leading-tight max-w-xl">
                <span className="sm:hidden text-brand-green mr-3">01.</span>
                Zraziłeś się do cienkich domków z marketu
              </h3>
              <div className="w-16 h-[2px] bg-brand-green mb-6 transition-all duration-500 group-hover:w-24"></div>
              <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-2xl font-light">
                Budujemy z masywnego, certyfikowanego świerku skandynawskiego (do 70 mm). Zapewniamy szczelną konstrukcję bez pęknięć – to luksus, który przetrwa dekady bez przykrych niespodzianek.
              </p>
            </div>

            {/* 02 */}
            <div className="relative group">
              <div className="hidden sm:block absolute -left-24 -top-3 text-brand-green font-heading font-medium text-6xl lg:text-7xl select-none opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-graphite">
                02
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-graphite mb-6 leading-tight max-w-xl">
                <span className="sm:hidden text-brand-green mr-3">02.</span>
                Cenisz drewno w nowoczesnym wydaniu
              </h3>
              <div className="w-16 h-[2px] bg-brand-green mb-6 transition-all duration-500 group-hover:w-24"></div>
              <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-2xl font-light">
                Nasz autorski Zamek Tyrolski całkowicie ukrywa łączenia ciesielskie. Łączymy surową masę litych bloków drewna z minimalistycznym designem, idealnie pasującym do współczesnych ogrodów.
              </p>
            </div>

            {/* 03 */}
            <div className="relative group">
              <div className="hidden sm:block absolute -left-24 -top-3 text-brand-green font-heading font-medium text-6xl lg:text-7xl select-none opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-graphite">
                03
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-graphite mb-6 leading-tight max-w-xl">
                <span className="sm:hidden text-brand-green mr-3">03.</span>
                Oczekujesz bezproblemowej dostawy
              </h3>
              <div className="w-16 h-[2px] bg-brand-green mb-6 transition-all duration-500 group-hover:w-24"></div>
              <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-2xl font-light">
                Koniec z paletami porzuconymi na ulicy. Posiadamy flotę ciężarówek z wózkami widłowymi. Precyzyjnie dowieziemy i rozładujemy Twoją saunę dokładnie w wybranym miejscu ogrodu.
              </p>
            </div>

          </div>
        </div>
      </section>
`;

content = content.substring(0, startIndex) + newSection + content.substring(endIndex);

fs.writeFileSync('src/components/SaunasLandingPage.tsx', content);
console.log('Replaced successfully');
