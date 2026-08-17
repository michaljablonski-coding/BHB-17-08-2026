import { motion } from 'motion/react';

interface GatewayProps {
  onSelect: () => void;
}

const regions = [
  { id: 'en', name: 'English', sub: 'Angielski', code: 'gb' },
  { id: 'fr', name: 'Français', sub: 'Francuski', code: 'fr' },
  { id: 'de', name: 'Deutsch', sub: 'Niemiecki', code: 'de' },
  { id: 'it', name: 'Italiano', sub: 'Włoski', code: 'it' },
  { id: 'at', name: 'Austria', sub: 'Niemiecki', code: 'at' },
  { id: 'ch', name: 'Switzerland', sub: 'Niemiecki', code: 'ch' },
  { id: 'nl', name: 'Nederlands', sub: 'Holenderski', code: 'nl' },
  { id: 'es', name: 'Español', sub: 'Hiszpański', code: 'es' },
  { id: 'ro', name: 'Română', sub: 'Rumuński', code: 'ro' },
  { id: 'ie', name: 'Irish', sub: 'Irlandzki', code: 'ie' },
  { id: 'hu', name: 'Magyar', sub: 'Węgierski', code: 'hu' },
  { id: 'pl', name: 'Polska', sub: 'Polski', code: 'pl' }
];

export default function Gateway({ onSelect }: GatewayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2025/07/BHB_13.webp" 
          alt="Tło" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white rounded-2xl md:rounded-[2rem] shadow-2xl p-6 md:p-12 max-w-5xl w-full mx-4 flex flex-col items-center max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
      >
        <img 
          src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
          alt="Bertsch Holzbau Logo" 
          className="h-10 md:h-16 w-auto mb-2 md:mb-4 shrink-0"
        />
        
        <h1 className="text-xl md:text-3xl font-heading font-bold text-brand-graphite mb-4 md:mb-10 text-center tracking-tight shrink-0">
          Wybierz swój region
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-12 gap-y-3 md:gap-y-6 w-full px-0 md:px-8">
          {regions.map((region) => (
            <button 
              key={region.id}
              onClick={onSelect}
              className="group flex flex-col md:flex-row items-center gap-1.5 md:gap-5 p-1 md:p-2 rounded-xl border border-transparent hover:bg-gray-50 hover:border-gray-100 transition-all duration-300 text-center md:text-left"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                <img 
                  src={"https://flagcdn.com/w80/" + region.code + ".png"}
                  alt={region.name + " flag"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="text-[13px] sm:text-base md:text-xl font-bold text-brand-graphite group-hover:text-brand-green transition-colors leading-tight">
                  {region.name}
                </div>
                <div className="hidden md:block text-xs md:text-base text-gray-400 font-medium mt-0.5">
                  {region.sub}
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
