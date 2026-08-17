interface FooterProps {
  onContact?: () => void;
  onAboutUs?: () => void;
  onGraphics?: () => void;
}

export default function Footer({ onContact, onAboutUs, onGraphics }: FooterProps = {}) {
  return (
    <footer id="footer" className="bg-brand-graphite py-12 lg:py-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12 lg:mb-16">
          
          {/* Logo & Intro */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <img 
              src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" 
              alt="Bertsch Holzbau Logo" 
              className="h-16 w-auto mb-6 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
              Tradycja i nowoczesność w harmonii z naturą. Tworzymy wyjątkowe konstrukcje drewniane dopasowane do Twoich potrzeb.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 text-center sm:text-left">
             <div className="flex flex-col gap-4">
               <h4 className="text-white font-bold text-lg tracking-wide">Kontakt</h4>
               <a href="mailto:kontakt@bertsch-holzbau.pl" className="text-gray-400 hover:text-white transition-colors text-sm">kontakt@bertsch-holzbau.pl</a>
               <a href="tel:+48000000000" className="text-gray-400 hover:text-white transition-colors text-sm">+48 000 000 000</a>
             </div>
             <div className="flex flex-col gap-4">
               <h4 className="text-white font-bold text-lg tracking-wide">Informacje</h4>
               <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Polityka prywatności</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Regulamin</a>
               {onGraphics && (
                 <button onClick={onGraphics} className="text-gray-400 hover:text-white transition-colors text-sm text-left">Materiały graficzne</button>
               )}
             </div>
          </div>
        </div>

        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bertsch Holzbau. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
