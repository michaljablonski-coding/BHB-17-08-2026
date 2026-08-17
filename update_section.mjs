import fs from 'fs';

let code = fs.readFileSync('src/components/ToolshedsLandingPage.tsx', 'utf-8');

const oldSectionRegex = /\{\/\* Types of sheds \*\/\}(.|\n)*?<\/section>/;

const newSection = `{/* Types of sheds */}
      <section className="bg-white relative pb-16 md:pb-24">
        {/* Background visual element */}
        <div className="absolute top-0 left-0 w-full h-[350px] md:h-[450px]">
          <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000785-03.jpg" alt="Tło domków" className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row px-4 sm:px-8 lg:px-12 pt-[250px] md:pt-[350px]">
          <div className="lg:w-5/12 flex flex-col justify-end pb-12 lg:pb-0 pr-8">
            <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-8 md:h-12 w-auto object-contain mb-8 self-start" />
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-brand-graphite leading-tight">
              Rodzaje<br/>
              <span className="text-brand-green font-medium">szopy na narzędzia</span>
            </h2>
          </div>
          
          <div className="lg:w-7/12 flex flex-col w-full mt-8 lg:-mt-24">
            <div className="bg-brand-green text-white p-8 md:p-12 lg:p-16 relative z-20">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 md:mb-6">Domki narzędziowe modułowe</h3>
              <p className="text-white/95 leading-relaxed text-sm md:text-base">
                Dla tych, którzy wymagają elastyczności, nasze szopy modułowe oferują możliwość dostosowania rozmiaru i układu, dopasowując się do różnych potrzeb przechowywania i rozmiarów ogrodów. Są to szopy prefabrykowane, czyli składające się z gotowych do montażu elementów, o wymiarach do 25 m2.
              </p>
            </div>
            
            <div className="bg-[#2d2d2d] text-white p-8 md:p-12 lg:p-16 relative z-10 lg:ml-12 -mt-4 lg:-mt-0">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 md:mb-6">Domki narzędziowe z profili</h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                Posiadające wyraźne profile, te szopy dodają elementu wyrafinowania do Twojej zewnętrznej przestrzeni, łącząc funkcjonalność z unikalnym architektonicznym dotykiem, od 9 m2 do maks. 36 m2.
              </p>
            </div>
          </div>
        </div>
      </section>`;

code = code.replace(oldSectionRegex, newSection);

fs.writeFileSync('src/components/ToolshedsLandingPage.tsx', code);
