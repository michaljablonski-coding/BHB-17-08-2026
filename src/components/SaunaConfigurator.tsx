import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Grid, X, Ruler, Plus } from 'lucide-react';

interface ConfiguratorProps {
  onClose?: () => void;
}

type PathType = 'models' | 'custom' | null;

interface ConfigState {
  path: PathType;
  selectedModel: string | null;
  width: number;
  depth: number;
  height: number;
  layout: 'vertical' | 'horizontal';
  color: string;
  addons: string[];
  name: string;
  email: string;
  phone: string;
}

const MODELS = [
  { id: 'grunwald', name: 'GRÜNWALD', desc: 'Klasyczna, funkcjonalna sauna idealna na każdą posesję.', w: 200, d: 200, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2025/12/Tytul-600x338.webp' },
  { id: 'chiemsee', name: 'CHIEMSEE', desc: 'Tradycyjna, prosta konstrukcja dla zwolenników klasyki.', w: 220, d: 220, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2025/04/2013_szare-600x450.jpg' },
  { id: 'ammersee', name: 'AMMERSEE', desc: 'Kompaktowa przestrzeń i szybkie nagrzewanie.', w: 180, d: 180, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/000505-01-kopia-600x338.webp' },
  { id: 'triest', name: 'TRIEST', desc: 'Nowoczesna bryła pasująca do współczesnej architektury.', w: 250, d: 200, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001395-01-kopia-600x450.webp' },
  { id: 'haga', name: 'HAGA', desc: 'Duże przeszklenia i przestronne wnętrze sprzyjające relaksowi.', w: 300, d: 250, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001486-03-kopia-600x450.webp' },
  { id: 'relex', name: 'RELEX', desc: 'Zaprojektowana z myślą o maksymalnym relaksie.', w: 280, d: 220, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001550-22w-600x400.webp' },
  { id: 'oresund', name: 'ÖRESUND', desc: 'Ekskluzywny design i panoramiczny widok z wnętrza.', w: 350, d: 250, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001518-01-kopia-600x450.webp' },
  { id: 'hanni', name: 'HANNI', desc: 'Model premium ze strefą wypoczynku.', w: 400, d: 300, img: 'https://bertsch-holzbau.eu/wp-content/uploads/2024/08/001514-01-kopia-600x450.webp' },
];

const COLORS = [
  { name: 'Naturalne drewno', bg: 'bg-[#DEB887]', border: 'border-[#C29D6D]' },
  { name: 'Ciemny orzech', bg: 'bg-[#5C4033]', border: 'border-[#432E24]' },
  { name: 'Antracyt', bg: 'bg-[#383E42]', border: 'border-[#252A2D]' },
  { name: 'Bielony', bg: 'bg-[#F5F5DC]', border: 'border-[#D9D9C3]' }
];

const ADDONS = [
  'Piec Harvia Cilindro (WIFI)', 'Zestaw akcesoriów (ceber, chochla, termometr)',
  'Oświetlenie LED podławkowe', 'Przeszklenie panoramiczne',
  'Moduł audio Bluetooth', 'Oparcia ergonomiczne'
];

export default function SaunaConfigurator({ onClose }: ConfiguratorProps) {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<ConfigState>({
    path: null,
    selectedModel: null,
    width: 200,
    depth: 200,
    height: 220,
    layout: 'vertical',
    color: 'Naturalne drewno',
    addons: [],
    name: '',
    email: '',
    phone: ''
  });

  const updateConfig = <K extends keyof ConfigState>(key: K, value: ConfigState[K]) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const toggleAddon = (addon: string) => {
    setConfig(prev => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter(a => a !== addon)
        : [...prev.addons, addon]
    }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za przesłanie konfiguracji! Skontaktujemy się wkrótce.');
    if (onClose) onClose();
  };

  const isNextDisabled = () => {
    if (step === 0 && !config.path) return true;
    if (step === 1 && config.path === 'models' && !config.selectedModel) return true;
    return false;
  };

  const stepsList = [
    { id: 0, label: 'Start' },
    { id: 1, label: config.path === 'models' ? 'Model' : 'Wymiary' },
    { id: 2, label: 'Kolor' },
    { id: 3, label: 'Dodatki' },
    { id: 4, label: 'Podsumowanie' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#F9FAFB] flex flex-col h-screen w-screen overflow-hidden font-sans">
      
      {/* HEADER */}
      <header className="h-16 md:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-20">
        <div className="flex items-center">
          <img src="https://bertsch-holzbau.eu/wp-content/uploads/2024/07/logo-pl2.webp" alt="Bertsch Holzbau Logo" className="h-8 md:h-10 w-auto" />
        </div>
        
        {/* Step Indicator Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {stepsList.map((s, idx) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === s.id ? 'bg-brand-green text-white shadow-md' : step > s.id ? 'bg-brand-green/10 text-brand-green' : 'bg-gray-100 text-gray-400'}`}>
                {step > s.id ? <Check className="w-3 h-3" /> : idx + 1}
              </div>
              <span className={`text-xs font-bold ${step === s.id ? 'text-brand-graphite' : step > s.id ? 'text-gray-800' : 'text-gray-400'}`}>
                {s.label}
              </span>
              {idx < stepsList.length - 1 && (
                <div className={`w-8 h-px ml-3 ${step > s.id ? 'bg-brand-green/30' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full transition-colors group">
          <X className="w-5 h-5 text-gray-500 group-hover:text-brand-graphite" />
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow relative overflow-y-auto overflow-x-hidden flex flex-col p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col justify-center min-h-full py-4">
          <AnimatePresence mode="wait">
            
            {/* STEP 0: Path Selection */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="w-full">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-graphite mb-3">Skonfiguruj saunę</h1>
                  <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">Wybierz gotowy model bazowy do personalizacji lub zaprojektuj saunę całkowicie od zera na własny wymiar.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <button 
                    onClick={() => updateConfig('path', 'models')}
                    className={`group relative overflow-hidden text-left p-6 md:p-8 rounded-[1.5rem] border-2 transition-all duration-300 ${config.path === 'models' ? 'border-brand-green bg-white shadow-lg scale-[1.01]' : 'border-gray-100 bg-white hover:border-brand-green/30 hover:shadow-md'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${config.path === 'models' ? 'bg-brand-green text-white shadow-md' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green'}`}>
                      <Grid className="w-7 h-7" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-brand-graphite mb-2">Gotowe modele</h4>
                    <p className="text-gray-500 leading-relaxed text-sm mb-6">Wybierz jedną z naszych sprawdzonych propozycji i dostosuj jej detale (szybka ścieżka).</p>
                    <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                      <span>Wybieram</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>

                  <button 
                    onClick={() => updateConfig('path', 'custom')}
                    className={`group relative overflow-hidden text-left p-6 md:p-8 rounded-[1.5rem] border-2 transition-all duration-300 ${config.path === 'custom' ? 'border-brand-green bg-white shadow-lg scale-[1.01]' : 'border-gray-100 bg-white hover:border-brand-green/30 hover:shadow-md'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${config.path === 'custom' ? 'bg-brand-green text-white shadow-md' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green'}`}>
                      <Ruler className="w-7 h-7" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-brand-graphite mb-2">Na wymiar</h4>
                    <p className="text-gray-500 leading-relaxed text-sm mb-6">Zaprojektuj saunę od zera, zdefiniuj własne wymiary co do centymetra i stwórz unikalny projekt.</p>
                    <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                      <span>Wybieram</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 1: Models */}
            {step === 1 && config.path === 'models' && (
              <motion.div key="step1-models" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="w-full">
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite mb-2">Wybierz model bazowy</h1>
                  <p className="text-sm text-gray-500">Każdy model charakteryzuje się unikalnym stylem.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {MODELS.map(model => (
                    <button 
                      key={model.id}
                      onClick={() => updateConfig('selectedModel', model.id)}
                      className={`group flex flex-col text-left overflow-hidden rounded-2xl border-2 transition-all duration-300 ${config.selectedModel === model.id ? 'border-brand-green bg-brand-green/5 shadow-md transform -translate-y-1' : 'border-gray-100 bg-white hover:border-brand-green/30 hover:shadow-sm'}`}
                    >
                      <div className="w-full h-28 lg:h-32 bg-gray-100 relative overflow-hidden">
                        <img src={model.img} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${config.selectedModel === model.id ? 'bg-brand-green border-brand-green' : 'bg-white/50 border-white/80 backdrop-blur-sm'}`}>
                          {config.selectedModel === model.id && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                        </div>
                      </div>
                      <div className="p-3.5 flex flex-col flex-grow">
                        <h4 className="font-heading font-bold text-base text-brand-graphite mb-1 truncate">{model.name}</h4>
                        <p className="text-gray-500 text-[11px] leading-tight mb-3 flex-grow line-clamp-2">{model.desc}</p>
                        <div className="inline-block px-2 py-1 bg-white rounded flex-shrink-0 text-[10px] font-bold text-gray-500 border border-gray-100 self-start uppercase tracking-widest shadow-sm">
                          {model.w} × {model.d} cm
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 1: Custom */}
            {step === 1 && config.path === 'custom' && (
              <motion.div key="step1-custom" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="w-full max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite mb-2">Wymiary i układ</h1>
                  <p className="text-sm text-gray-500">Dostosuj przestrzeń idealnie do swojego ogrodu.</p>
                </div>
                
                <div className="bg-white rounded-[1.5rem] border border-gray-100 p-6 md:p-8 shadow-sm">
                  <div className="space-y-6">
                    {['width', 'depth', 'height'].map((dim) => {
                      const max = dim === 'height' ? 300 : 400;
                      const min = dim === 'height' ? 200 : 150;
                      const label = dim === 'width' ? 'Szerokość' : dim === 'depth' ? 'Głębokość' : 'Wysokość';
                      return (
                        <div key={dim} className="relative">
                          <div className="flex justify-between items-end mb-3">
                            <label className="text-xs font-bold text-gray-800 uppercase tracking-widest">{label}</label>
                            <div className="bg-brand-green/5 px-4 py-1.5 rounded-lg border border-brand-green/20 flex items-baseline gap-1">
                              <span className="text-brand-green font-bold text-lg">{config[dim as keyof ConfigState]}</span>
                              <span className="text-brand-green/70 font-bold text-xs">cm</span>
                            </div>
                          </div>
                          <input 
                            type="range" min={min} max={max} step={5} 
                            value={Number(config[dim as keyof ConfigState])} 
                            onChange={(e) => updateConfig(dim as keyof ConfigState, Number(e.target.value) as never)}
                            className="w-full accent-brand-green h-2 bg-gray-100 rounded-full appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold">
                            <span>{min} cm</span>
                            <span>{max} cm</span>
                          </div>
                        </div>
                      )
                    })}

                    <div className="pt-6 border-t border-gray-100">
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-4">Układ paneli elewacji</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => updateConfig('layout', 'vertical')}
                          className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${config.layout === 'vertical' ? 'border-brand-green bg-brand-green/5 text-brand-green' : 'border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}`}
                        >
                          Pionowy
                        </button>
                        <button 
                          onClick={() => updateConfig('layout', 'horizontal')}
                          className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${config.layout === 'horizontal' ? 'border-brand-green bg-brand-green/5 text-brand-green' : 'border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}`}
                        >
                          Poziomy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Color */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="w-full max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite mb-2">Wykończenie zewnętrzne</h1>
                  <p className="text-sm text-gray-500">Wybierz kolor impregnacji, który pasuje do otoczenia.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {COLORS.map(color => (
                    <button 
                      key={color.name}
                      onClick={() => updateConfig('color', color.name)}
                      className={`group flex flex-col items-center justify-center gap-4 p-6 bg-white border-2 rounded-[1.5rem] transition-all duration-300 ${config.color === color.name ? 'border-brand-green shadow-md bg-brand-green/5' : 'border-gray-100 hover:border-brand-green/30 hover:shadow-sm'}`}
                    >
                      <div className={`w-16 h-16 rounded-full shadow-inner border-4 ${color.bg} ${config.color === color.name ? 'border-brand-green' : color.border}`}></div>
                      <span className={`font-bold text-sm text-center transition-colors ${config.color === color.name ? 'text-brand-graphite' : 'text-gray-500 group-hover:text-brand-graphite'}`}>{color.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Addons */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="w-full max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-graphite mb-2">Wyposażenie dodatkowe</h1>
                  <p className="text-sm text-gray-500">Zaznacz elementy, które podniosą Twój komfort.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADDONS.map(addon => (
                    <button
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`flex items-center gap-4 p-4 bg-white border-2 rounded-xl transition-all duration-300 text-left ${config.addons.includes(addon) ? 'border-brand-green shadow-sm bg-brand-green/5' : 'border-gray-100 hover:border-gray-300'}`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center border-2 transition-colors ${config.addons.includes(addon) ? 'bg-brand-green border-brand-green' : 'bg-gray-50 border-gray-200'}`}>
                        {config.addons.includes(addon) ? <Check className="w-4 h-4 text-white" strokeWidth={3} /> : <Plus className="w-4 h-4 text-gray-400" />}
                      </div>
                      <span className={`text-sm ${config.addons.includes(addon) ? 'text-brand-graphite font-bold' : 'text-gray-600 font-medium'}`}>{addon}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Contact & Summary */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  
                  {/* Summary Side */}
                  <div className="bg-brand-graphite text-white rounded-[1.5rem] p-6 md:p-8 shadow-xl relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                    <div className="relative z-10">
                      <h3 className="font-heading text-xl font-bold mb-6">Twoja Konfiguracja</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-white/10">
                          <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Typ</span>
                          <span className="font-bold text-sm">{config.path === 'models' ? 'Model z oferty' : 'Sauna na wymiar'}</span>
                        </div>

                        {config.path === 'models' && config.selectedModel ? (
                           <div className="flex justify-between items-center pb-3 border-b border-white/10">
                             <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Model</span>
                             <span className="font-bold text-sm">{MODELS.find(m => m.id === config.selectedModel)?.name}</span>
                           </div>
                        ) : (
                          <div className="flex justify-between items-center pb-3 border-b border-white/10">
                            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Wymiary</span>
                            <span className="font-bold text-sm">{config.width} × {config.depth} × {config.height} cm</span>
                          </div>
                        )}

                        <div className="flex justify-between items-center pb-3 border-b border-white/10">
                          <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Kolor</span>
                          <span className="font-bold text-sm">{config.color}</span>
                        </div>

                        <div className="pt-2">
                          <span className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3 block">Dodatki ({config.addons.length})</span>
                          {config.addons.length > 0 ? (
                            <ul className="space-y-2">
                              {config.addons.map(a => (
                                <li key={a} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                                  <span className="text-xs font-medium text-white/90">{a}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-white/40 text-xs italic">Brak dodatków</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form Side */}
                  <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-sm border border-gray-100">
                    <div className="mb-6">
                      <h3 className="font-heading text-xl font-bold text-brand-graphite mb-2">Wyślij do wyceny</h3>
                      <p className="text-gray-500 text-sm">Podaj dane kontaktowe, a my przygotujemy bezpłatną wycenę.</p>
                    </div>

                    <form id="configurator-form" onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-widest">Imię i nazwisko</label>
                        <input 
                          type="text" required
                          value={config.name}
                          onChange={(e) => updateConfig('name', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm font-medium"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-widest">Numer telefonu</label>
                        <input 
                          type="tel" required
                          value={config.phone}
                          onChange={(e) => updateConfig('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm font-medium"
                          placeholder="+48 000 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-widest">Adres e-mail</label>
                        <input 
                          type="email" required
                          value={config.email}
                          onChange={(e) => updateConfig('email', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm font-medium"
                          placeholder="jan@example.com"
                        />
                      </div>
                      
                      <div className="pt-2 flex items-start gap-3">
                        <input type="checkbox" required className="mt-0.5 w-4 h-4 accent-brand-green cursor-pointer rounded" id="config-consent" />
                        <label htmlFor="config-consent" className="text-xs text-gray-500 leading-relaxed">
                          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przesłania oferty.
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER NAV */}
      <footer className="h-20 bg-white border-t border-gray-100 flex items-center px-4 md:px-8 flex-shrink-0 z-20">
        <div className="flex-1 flex justify-start">
          <button 
            onClick={prevStep}
            disabled={step === 0}
            className={`px-4 py-2.5 font-bold text-sm rounded-full transition-all flex items-center gap-2 ${step === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Wróć</span>
          </button>
        </div>
        
        <div className="flex-1 flex justify-center">
          {step < 4 ? (
            <button 
              onClick={nextStep}
              disabled={isNextDisabled()}
              className={`px-8 py-3 font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-md min-w-[140px] ${isNextDisabled() ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' : 'bg-brand-green text-white hover:bg-[#3d834a] hover:-translate-y-0.5 hover:shadow-lg'}`}
            >
              Dalej <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="submit"
              form="configurator-form"
              className="px-8 py-3 bg-brand-graphite text-white font-bold text-sm rounded-full hover:bg-black transition-all shadow-md hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 min-w-[140px]"
            >
              Wyślij <Check className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex-1 flex justify-end items-center gap-1.5 lg:hidden">
          {stepsList.map(s => (
            <div key={s.id} className={`h-1.5 rounded-full transition-all duration-300 ${step === s.id ? 'w-6 bg-brand-green' : step > s.id ? 'w-1.5 bg-brand-green/30' : 'w-1.5 bg-gray-200'}`} />
          ))}
        </div>
        <div className="flex-1 hidden lg:block"></div>
      </footer>
    </div>
  );
}
