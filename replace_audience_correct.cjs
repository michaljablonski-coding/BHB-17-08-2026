const fs = require('fs');
let content = fs.readFileSync('src/components/SaunasLandingPage.tsx', 'utf-8');

const startTag = '{/* Editorial Target Audience Section */}';
const endTag = '{/* Full Width Image Section */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Tags not found', startIndex, endIndex);
  process.exit(1);
}

const newSection = `
      {/* Premium Target Audience Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-24 text-center flex flex-col items-center">
            <img 
              src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
              alt="Bertsch Holzbau Logo" 
              className="h-10 w-auto mb-8"
            />
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-brand-graphite tracking-tight leading-[1.1] mb-2">
              BHB Bertsch Holzbau
            </h2>
            <p className="text-3xl sm:text-4xl text-brand-green font-medium font-heading italic">
              jest dla Ciebie, jeśli...
            </p>
          </div>
          
          <div className="flex flex-col gap-16 sm:gap-24 pl-0 sm:pl-20">
            
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
              onClick={() => {
                const element = document.getElementById('modele');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 px-10 py-5 bg-brand-green hover:bg-[#3d834a] text-white font-bold font-sans rounded-full transition-all duration-300 text-sm tracking-widest uppercase hover:-translate-y-1 shadow-lg shadow-brand-green/30"
            >
              Sprawdź dostępne modele
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

`;

content = content.substring(0, startIndex) + newSection + content.substring(endIndex);

fs.writeFileSync('src/components/SaunasLandingPage.tsx', content);
console.log('Replaced successfully');
