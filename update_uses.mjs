import fs from 'fs';

let code = fs.readFileSync('src/components/ToolshedsLandingPage.tsx', 'utf-8');

// Update imports
code = code.replace(
  /import \{ ArrowLeft/,
  "import { Box, Hammer, Sprout, Briefcase, Dumbbell, Palette, ArrowLeft"
);

// Replace the section
const oldSectionRegex = /<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:divide-x divide-gray-100">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Box className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-3 text-xl">Szopy do przechowywania i patio</h3>
                <p className="text-gray-500 text-base leading-relaxed">Idealne do organizacji kosiarek, rowerów i narzędzi ogrodowych oraz ochrony przed czynnikami atmosferycznymi i kradzieżą. Szopy patio są idealne dla wybrukowanych obszarów, z hakami na narzędzia i półkami na niezbędne artykuły ogrodnicze.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Hammer className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-3 text-xl">Warsztat ogrodowy</h3>
                <p className="text-gray-500 text-base leading-relaxed">Zamień swoją szopę w praktyczny warsztat z wysokiej jakości stołem roboczym i półkami, idealny do prac stolarskich lub czyszczenia narzędzi z dala od głównego domu.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Sprout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-3 text-xl">Sadzenie roślin</h3>
                <p className="text-gray-500 text-base leading-relaxed">Nasze szopy doskonale łączą przestrzeń do przechowywania i hodowli roślin, z dużymi oknami zapewniającymi dużo światła słonecznego i wygodny dostęp do narzędzi ogrodniczych.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-3 text-xl">Biuro ogrodowe</h3>
                <p className="text-gray-500 text-base leading-relaxed">Stwórz dedykowaną przestrzeń do pracy w ogrodzie, aby zwiększyć produktywność i oddzielić życie zawodowe od domowego. Możliwość dostosowania do instalacji elektrycznych i mebli biurowych.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Dumbbell className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-3 text-xl">Domowa siłownia</h3>
                <p className="text-gray-500 text-base leading-relaxed">Pożegnaj się z wysokimi opłatami za siłownię i witaj osobistej siłowni w ogrodzie. Wybierz szopy z solidnymi podłogami lub takie, które mogą być zakotwiczone do betonowej bazy, dla solidnego środowiska treningowego.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#E8EFEA] flex items-center justify-center text-brand-green">
                <Palette className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-brand-graphite mb-3 text-xl">Pracownia artystyczna i hobby</h3>
                <p className="text-gray-500 text-base leading-relaxed">Idealne miejsce do rozwijania pasji. Stwórz cichą i inspirującą przestrzeń do malowania, rzeźbienia, majsterkowania lub po prostu relaksu z dala od domowego zgiełku.</p>
              </div>
            </div>
          </div>
        </div>
      </section>`;

code = code.replace(oldSectionRegex, newSection);

fs.writeFileSync('src/components/ToolshedsLandingPage.tsx', code);
