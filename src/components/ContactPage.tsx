import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Coffee, Plus, Minus } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ContactPageProps {
  onGraphics?: () => void;
  onBack: () => void;
  onAboutUs?: () => void;
}

const faqs = [
  { 
    question: "Jak długo pracujemy?", 
    answer: "Nasze biuro jest otwarte od poniedziałku do piątku w godzinach 8:00 - 16:00. W tych godzinach nasi doradcy są do Twojej dyspozycji telefonicznie oraz mailowo." 
  },
  { 
    question: "Czy istnieje biuro BHB Bertsch Holzbau w Polsce?", 
    answer: "Tak, nasze oficjalne przedstawicielstwo i biuro obsługi klienta na rynek polski znajduje się w Nowym Sączu przy ul. Jana Pawła II 29." 
  },
  { 
    question: "W jakim języku możemy skontaktować się z przedstawicielami BHB Bertsch Holzbau?", 
    answer: "Z naszym polskim oddziałem możesz bez problemu skontaktować się w języku polskim. Obsługujemy również zapytania w języku angielskim i niemieckim." 
  }
];

export default function ContactPage({ onBack, onAboutUs, onGraphics }: ContactPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onBack={onBack} onAboutUs={onAboutUs} />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/Zdjecie_Kontakt.png" 
              alt="Kontakt - Biuro obsługi" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Title Box */}
          <div className="absolute bottom-0 left-0 lg:left-0 xl:left-[calc((100%-1400px)/2)] bg-white px-6 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12 z-20 min-w-[300px] lg:min-w-[400px]">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-graphite">
              Kontakt
            </h1>
          </div>
        </section>

        {/* Contact Info & Map Section */}
        <section className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            
            {/* Left Column: Contact Methods */}
            <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-8 md:gap-12">
              
              {/* Phone */}
              <div className="flex items-start gap-5 md:gap-8">
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-brand-graphite stroke-[1.5]" />
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-brand-graphite mb-2 md:mb-3">Zadzwoń</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">tel:</span>
                    <a href="tel:+48184444170" className="text-brand-green font-bold text-base md:text-lg hover:text-[#3d834a] transition-colors">
                      +48 18 444 41 70
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 md:gap-8">
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-brand-graphite stroke-[1.5]" />
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-brand-graphite mb-2 md:mb-3">Napisz</h3>
                  <a href="mailto:info@bertsch-holzbau.eu" className="text-brand-green font-medium text-base md:text-lg hover:text-[#3d834a] transition-colors">
                    info@bertsch-holzbau.eu
                  </a>
                </div>
              </div>

              {/* Visit */}
              <div className="flex items-start gap-5 md:gap-8">
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center">
                  <Coffee className="w-6 h-6 md:w-8 md:h-8 text-brand-graphite stroke-[1.5]" />
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-brand-graphite mb-2 md:mb-3">Odwiedź</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Jana Pawła II 29,<br/>
                    PL 33-300 Nowy Sącz
                  </p>
                </div>
              </div>

              <button className="mt-4 w-full bg-[#1e824c] hover:bg-[#156339] text-white font-bold py-4 px-6 md:py-5 md:px-8 transition-colors text-base md:text-lg">
                Napisz do nas
              </button>

            </div>

            {/* Right Column: Google Map */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-auto bg-gray-100 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.766324838384!2d20.68652397693992!3d49.620892071445776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de4421b84e03f%3A0xc319207e32a67389!2sJana%20Paw%C5%82a%20II%2029%2C%2033-300%20Nowy%20S%C4%85cz!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '100%' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

          </div>
        </section>

        {/* Europe Section */}
        <section className="w-full relative overflow-hidden flex flex-col">
          {/* Top white part */}
          <div className="bg-white w-full pt-10 md:pt-16 pb-8 md:pb-12 lg:pb-8 relative z-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
              <div className="w-full lg:w-1/2">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-graphite leading-tight mb-2">
                  Europa to nasz dom
                </h2>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green leading-tight">
                  Poznaj nasze oddziały
                </h2>
              </div>
            </div>
          </div>

          {/* Bottom gray part */}
          <div className="bg-[#f5f5f5] w-full py-10 md:py-16 relative z-0 flex-grow">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-8">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 shrink-0">
                <p className="text-lg md:text-xl font-bold text-brand-graphite mb-6 md:mb-8 lg:mt-4">
                  Wybierz kraj i poznaj nasz zespół
                </p>

                <h3 className="font-heading text-4xl md:text-5xl font-bold text-brand-green mb-8 md:mb-12">
                  Polska
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <h4 className="text-xl md:text-2xl font-bold text-brand-graphite">
                    Edward Majowski
                  </h4>
                  
                  <div className="flex items-center gap-3 md:gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-graphite" strokeWidth={1.5} />
                    <a href="tel:0048888362918" className="text-base md:text-lg text-gray-800 hover:text-brand-green transition-colors">
                      0048 888 362 918
                    </a>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-graphite" strokeWidth={1.5} />
                    <a href="mailto:e.majowski@bertsch-holzbau.eu" className="text-base md:text-lg text-gray-800 hover:text-brand-green transition-colors">
                      e.majowski@bertsch-holzbau.eu
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Absolute positioned Map overlaying both sections on large screens */}
          <div className="hidden lg:flex absolute top-0 right-0 w-[60%] h-full pointer-events-none z-20 items-center justify-end overflow-visible">
            <img 
              src="/Europa_Wektor.svg" 
              alt="Mapa oddziałów w Europie" 
              className="w-full h-auto object-contain object-right transform translate-x-12 xl:translate-x-32 scale-125"
            />
          </div>
          {/* Mobile Map */}
          <div className="block lg:hidden bg-[#f5f5f5] pb-10 md:pb-16 px-4">
            <img 
              src="/Europa_Wektor.svg" 
              alt="Mapa oddziałów w Europie" 
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1200px] mx-auto w-full px-4 sm:px-8 lg:px-12 py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite mb-8 md:mb-12">
            Często zadawane pytania
          </h2>
          
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 md:py-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-sans text-lg md:text-xl text-gray-800 group-hover:text-brand-graphite pr-8">
                    {faq.question}
                  </span>
                  <div className="shrink-0 flex items-center justify-center text-brand-graphite">
                    {openFaqIndex === index ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 md:pb-8 text-sm md:text-base text-gray-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer onContact={() => {}} onAboutUs={onAboutUs} onGraphics={onGraphics} />
    </div>
  );
}
