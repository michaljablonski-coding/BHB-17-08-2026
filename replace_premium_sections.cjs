const fs = require('fs');
let content = fs.readFileSync('src/components/SaunasLandingPage.tsx', 'utf-8');

const section1StartTag = '{/* Asymmetrical Feature Section 1 */}';
const section2EndTag = '{/* Comparison Table Section */}';

const startIndex = content.indexOf(section1StartTag);
const endIndex = content.indexOf(section2EndTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Tags not found');
  process.exit(1);
}

const newSections = `
      {/* Asymmetrical Feature Section 1 */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-[1400px] mx-auto">
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
      <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#FAFAFA]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 max-w-[1400px] mx-auto">
          <div className="flex-1 relative w-full pt-10 pr-4 sm:pr-10 lg:pl-12">
            
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-10 w-auto mb-10" />
            
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium text-brand-graphite mb-12 leading-[0.9] tracking-tighter">
              Duże przeszklenia
            </h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-brand-green/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Naturalne światło</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Wnętrze pełne promieni słońca dające poczucie nieograniczonej przestrzeni.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-brand-green/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-green" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-medium text-brand-graphite mb-1">Widok na ogród</h4>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">Pełen relaks w otoczeniu natury, łączący wnętrze z otoczeniem.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-brand-green/20 flex items-center justify-center shrink-0 mt-0.5">
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

      `;

content = content.substring(0, startIndex) + newSections + content.substring(endIndex);

fs.writeFileSync('src/components/SaunasLandingPage.tsx', content);
console.log('Replaced successfully');
