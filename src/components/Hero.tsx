import { ArrowRight, Settings } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center bg-brand-graphite overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2564&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-brand-graphite/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-graphite/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-wood animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Premium Holzbau Polska</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
            Ekskluzywne <span className="text-brand-wood">konstrukcje z drewna</span> na lata.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
            Odkryj najwyższej klasy sauny ogrodowe i domki modułowe. Połączenie niemieckiej precyzji, szlachetnych materiałów i nowoczesnego designu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#categories" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-dark text-white text-lg font-semibold rounded-full shadow-lg shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Zobacz ofertę
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#product" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              <Settings className="w-5 h-5" />
              Skonfiguruj projekt
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
