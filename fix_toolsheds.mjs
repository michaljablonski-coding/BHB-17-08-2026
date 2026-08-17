import fs from 'fs';

let code = fs.readFileSync('src/components/ToolshedsLandingPage.tsx', 'utf-8');

const newModels = `const models = [
  {
    name: "GARGNANO",
    price: "od 29 900 PLN",
    desc: "Zbudowane z najwyższej jakości drewna, nasze szopy nie tylko wytrzymają próbę czasu, ale także podkreślą piękno Twojej zewnętrznej przestrzeni.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/06/PHOTO-2026-07-17-12-29-222-600x450.webp"
  },
  {
    name: "HANOI",
    price: "od 22 886 PLN",
    desc: "Idealne rozwiązanie do przechowywania narzędzi ogrodowych, sprzętu i mebli zewnętrznych.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2026/03/Tytulowe-1-600x338.webp"
  },
  {
    name: "MH Equipment Cabinet 03",
    price: "od 13 407 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001416-01-kopia-600x450.webp"
  },
  {
    name: "MH Equipment Cabinet 01",
    price: "od 9 036 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001055-01-kopia-600x695.webp"
  },
  {
    name: "MH CUBO HPL 2515",
    price: "od 31 925 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001413-01-1-kopia-600x800.webp"
  },
  {
    name: "MH CUBO 2830 ALU COMPOSITE + 310 SD",
    price: "od 61 418 PLN",
    desc: "Te praktyczne, małe konstrukcje są doskonałym dodatkiem do każdego ogrodu, oferując dodatkową przestrzeń i organizację.",
    image: "https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000785-01-kopia-600x400.webp"
  }
];`;

code = code.replace(/const models = \[[\s\S]*?\];/, newModels);

const newGrid = `          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="bg-white flex flex-col">
                <div className="w-full aspect-[4/3] bg-gray-100 relative">
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col px-0 sm:px-2 md:px-4">
                  <div className="flex justify-between items-start mb-6 gap-2">
                    <h3 className="font-heading font-bold text-brand-graphite text-lg leading-tight uppercase flex-1 pr-4">{model.name}</h3>
                    <div className="text-right shrink-0">
                      <div className="text-brand-green font-bold text-xl leading-none">{model.price}</div>
                      <div className="text-gray-500 text-xs mt-1">zawiera VAT</div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProduct(model)} className="w-full py-3.5 rounded-full border border-brand-green text-brand-graphite font-bold text-[15px] hover:bg-brand-green hover:text-white transition-colors flex items-center justify-center gap-2 group">
                    Zobacz produkt <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>`;

code = code.replace(/<div className="flex flex-col lg:flex-row gap-8 items-start">[\s\S]*?{model\.name}<\/h3>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, newGrid + "\n        </div>\n      </section>");

fs.writeFileSync('src/components/ToolshedsLandingPage.tsx', code);
