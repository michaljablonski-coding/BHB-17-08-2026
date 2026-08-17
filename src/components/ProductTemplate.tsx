import { Check, Maximize2, Thermometer, Wind, Send, TreePine } from 'lucide-react';
import React, { useState } from 'react';

export default function ProductTemplate() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Dziękujemy za zapytanie. Skontaktujemy się wkrótce!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Label */}
        <div className="mb-8">
          <span className="text-brand-wood font-medium tracking-wide uppercase text-sm">Sauny Ogrodowe</span>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-graphite font-bold mt-2">Sauna Modułowa "Nordic"</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Image Gallery & Specs */}
          <div>
            {/* Hero Image */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative group shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544607755-e7f0d0144d93?q=80&w=2670&auto=format&fit=crop" 
                alt="Sauna Nordic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm font-semibold text-brand-graphite shadow-sm">
                Bestseller
              </div>
            </div>

            {/* Tech Specs */}
            <h3 className="font-heading text-2xl font-bold text-brand-graphite mb-6">Specyfikacja Techniczna</h3>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gray-50 flex items-center justify-center flex-shrink-0 text-brand-wood">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Wymiary (Sz. x Gł.)</p>
                  <p className="text-brand-graphite font-semibold">250 cm x 250 cm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gray-50 flex items-center justify-center flex-shrink-0 text-brand-wood">
                  <TreePine className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Materiał</p>
                  <p className="text-brand-graphite font-semibold">Świerk Skandynawski</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gray-50 flex items-center justify-center flex-shrink-0 text-brand-wood">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Grubość ściany</p>
                  <p className="text-brand-graphite font-semibold">45 mm / 70 mm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gray-50 flex items-center justify-center flex-shrink-0 text-brand-wood">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Wyposażenie</p>
                  <p className="text-brand-graphite font-semibold">Ławki z drewna lipowego</p>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <h3 className="font-heading text-2xl font-bold text-brand-graphite mb-6">Zalety Modelu</h3>
            <ul className="space-y-4">
              {['Nowoczesny, panoramiczny front ze szkła hartowanego', 'Możliwość personalizacji układu ławek', 'Wbudowany system wentylacji grawitacyjnej', 'Gotowa konstrukcja modułowa - szybki montaż na miejscu'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full text-brand-green">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:pl-10">
            <div className="bg-brand-offwhite p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl sticky top-28">
              <h3 className="font-heading text-3xl font-bold text-brand-graphite mb-2">Poproś o darmową wycenę</h3>
              <p className="text-gray-600 mb-8">Nasz doradca przygotuje dla Ciebie spersonalizowaną ofertę na model "Nordic".</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i Nazwisko</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-wood focus:border-transparent outline-none transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-wood focus:border-transparent outline-none transition-all"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-wood focus:border-transparent outline-none transition-all"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Dodatkowe uwagi (opcjonalnie)</label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-wood focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Interesuje mnie montaż na terenie Warszawy..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-full flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-brand-green/20"
                >
                  <Send className="w-5 h-5" />
                  Wyślij zapytanie o wycenę
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Wysyłając formularz akceptujesz politykę prywatności.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Need to add TreePine to imports
// Doing it inline above: import { Check, Maximize2, Thermometer, Wind, Send, TreePine } from 'lucide-react';
