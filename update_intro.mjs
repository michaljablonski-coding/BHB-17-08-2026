import fs from 'fs';

let code = fs.readFileSync('src/components/ToolshedsLandingPage.tsx', 'utf-8');

const oldIntroRegex = /\{\/\* Intro section \*\/\}(.|\n)*?<\/section>/;

const newIntro = `{/* Intro section */}
      <section id="intro" className="py-20 md:py-32 bg-[#F9FAFB] px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#c68a47]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-semibold text-xs tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Funkcjonalność i styl
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-graphite mb-6 leading-[1.1]">
              Idealne rozwiązanie do <br/><span className="text-brand-green italic font-light">przechowywania</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Nasze szopy ogrodowe to doskonały dodatek do każdego ogrodu, oferujący dodatkową przestrzeń i organizację. Niezależnie od tego, czy potrzebujesz miejsca na narzędzia, rowery czy akcesoria basenowe – ułatwią Ci zarządzanie przestrzenią z zachowaniem najwyższej estetyki.
            </p>

            <div className="flex flex-col gap-6 mb-10 w-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-brand-green">
                  <Maximize className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-brand-graphite text-lg">Różnorodne rozmiary</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">Dostępne w wielu wariantach, idealnie dopasowane do wielkości Twojej przestrzeni ogrodowej.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-brand-green">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-brand-graphite text-lg">Trwałość i bezpieczeństwo</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">Wytrzymałe konstrukcje i solidne materiały chroniące Twój sprzęt przed czynnikami atmosferycznymi.</p>
                </div>
              </div>
            </div>

            <button onClick={() => document.getElementById('produkty')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-graphite hover:bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3">
              Zobacz modele <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/4.5]">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-4/5 h-[85%] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/06/PHOTO-2026-07-17-12-29-222-600x450.webp" alt="Nowoczesny domek narzędziowy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-[#F9FAFB]">
              <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001416-01-kopia-600x450.webp" alt="Detal domku" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/4 -left-4 md:-left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                <TargetIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-xl text-brand-graphite leading-none mb-1">Idealne</div>
                <div className="text-xs text-gray-500 font-medium">dopasowanie</div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

code = code.replace(oldIntroRegex, newIntro);

const oldProductsRegex = /<section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-brand-offwhite">/;
code = code.replace(oldProductsRegex, '<section id="produkty" className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 bg-brand-offwhite">');


fs.writeFileSync('src/components/ToolshedsLandingPage.tsx', code);
