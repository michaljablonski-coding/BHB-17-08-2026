import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'saunas',
    title: 'Sauny Ogrodowe',
    description: 'Prywatna strefa relaksu. Ekskluzywne sauny fińskie z drewna skandynawskiego.',
    image: '/Sauna_Przycieta.png',
    link: '#product',
    bgColor: 'bg-white',
  },
  {
    id: 'modular',
    title: 'Wiaty drewniane',
    description: 'Trwałe i estetyczne zadaszenia. Solidne wiaty drewniane idealne do Twojego ogrodu.',
    image: '/Sauna_Przycieta-1.png',
    link: '#product',
    bgColor: 'bg-white',
  },
  {
    id: 'toolsheds',
    title: 'Domki narzędziowe',
    description: 'Stylowe i ponadczasowe domki narzędziowe. Zorganizuj swoją przestrzeń.',
    image: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001509-01.jpg',
    link: 'https://bertsch-holzbau.eu/pl/domki-narzedziowe-drewniane',
    bgColor: 'bg-white',
  },
  {
    id: 'gardenhouses',
    title: 'Domki ogrodowe',
    description: 'Idealne na wypoczynek. Funkcjonalne konstrukcje komponujące się z otoczeniem.',
    image: 'https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_15.webp',
    link: 'https://bertsch-holzbau.eu/pl/domki-ogrodowe',
    bgColor: 'bg-white',
  }
];

export default function Categories({ onSelectCategory, onContact, onAboutUs }: { onSelectCategory?: (id: string) => void; onContact?: () => void; onAboutUs?: () => void; onGraphics?: () => void }) {
  return (
    <section id="categories" className="min-h-screen pt-28 pb-20 md:pt-40 md:pb-32 w-full flex flex-col items-center justify-start relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_13.webp" 
          alt="Tło" 
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm fixed"></div>
      </div>

      {/* Top Logo - Fixed position to act as a minimal header */}
      <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-50">
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
          alt="Bertsch Holzbau" 
          className="h-8 md:h-12 w-auto object-contain"
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-10 lg:mb-14">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-brand-graphite font-bold tracking-tight leading-[1.1]">
            Ekskluzywne <span className="text-brand-green">konstrukcje</span><br className="hidden md:block"/>
            <span className="text-brand-green"> z drewna</span> <span className="whitespace-nowrap">na lata</span>
          </h1>
        </div>

        {/* Vertical Cards Layout (4 in a row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full items-stretch">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`group relative overflow-hidden rounded-3xl md:rounded-[2rem] flex flex-col ${category.bgColor} shadow-xl border border-gray-100 h-full`}
            >
              {/* Product Image */}
              <div className="w-full h-[220px] sm:h-[250px] relative overflow-hidden bg-white flex items-center justify-center shrink-0 border-b border-gray-50">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                    category.id === 'saunas' || category.id === 'modular' || category.id === 'toolsheds' 
                      ? 'object-contain p-6 md:p-8 scale-95' 
                      : 'object-cover'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 text-left relative z-20 p-5 lg:p-6 xl:p-8">
                <h3 className="font-heading text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-3 tracking-tight text-brand-graphite leading-tight whitespace-nowrap">{category.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 max-w-full">
                  {category.description}
                </p>
                
                <div className="flex justify-start mt-auto">
                  <a 
                    href={category.link}
                    onClick={(e) => {
                      if (onSelectCategory && (category.id === 'saunas' || category.id === 'modular' || category.id === 'toolsheds')) {
                        e.preventDefault();
                        onSelectCategory(category.id);
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-5 py-3 bg-brand-green hover:bg-[#3d834a] text-white font-bold rounded-full shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-sm whitespace-nowrap"
                  >
                    Sprawdź modele
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
