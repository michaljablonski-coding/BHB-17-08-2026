const fs = require("fs");

const newComponent = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Settings2, Grid, X, Zap, Ruler, Palette, Plus } from 'lucide-react';

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
  { id: 'classic', name: 'Classic Nordic', desc: 'Tradycyjna, prosta konstrukcja', w: 200, d: 200 },
  { id: 'modern', name: 'Modern Glass', desc: 'Przeszklony front, nowoczesny design', w: 250, d: 200 },
  { id: 'premium', name: 'Premium Spa', desc: 'Duża przestrzeń, ekskluzywne wykończenie', w: 300, d: 250 },
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
      <header className="h-24 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-12 flex-shrink-0 z-20">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl tracking-tight text-brand-graphite">BERTSCH</span>
          <span className="font-heading font-normal text-2xl tracking-tight text-brand-green">HOLZBAU</span>
        </div>
        
        {/* Step Indicator Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {stepsList.map((s, idx) => (
            <div key={s.id} className="flex items-center gap-3">
              <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all \${step === s.id ? 'bg-brand-green text-white shadow-md' : step > s.id ? 'bg-brand-green/10 text-brand-green' : 'bg-gray-100 text-gray-400'}\`}>
                {step > s.id ? <Check className="w-4 h-4" /> : idx + 1}
              </div>
              <span className={\`text-sm font-bold \${step === s.id ? 'text-brand-graphite' : step > s.id ? 'text-gray-800' : 'text-gray-400'}\`}>
                {s.label}
              </span>
              {idx < stepsList.length - 1 && (
                <div className={\`w-12 h-px ml-5 \${step > s.id ? 'bg-brand-green/30' : 'bg-gray-200'}\`} />
              )}
            </div>
          ))}
        </div>

        <button onClick={onClose} className="w-12 h-12 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full transition-colors group">
          <X className="w-6 h-6 text-gray-500 group-hover:text-brand-graphite" />
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow relative overflow-y-auto overflow-x-hidden flex flex-col p-6 md:p-12">
        <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col justify-center min-h-full">
          <AnimatePresence mode="wait">
            
            {/* STEP 0: Path Selection */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-graphite mb-4">Stwórz swoją idealną saunę</h1>
                  <p className="text-lg text-gray-500 max-w-2xl mx-auto">Wybierz sposób konfiguracji, który najbardziej Ci odpowiada. Możesz skorzystać z gotowych modeli lub zaprojektować wszystko od zera.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <button 
                    onClick={() => updateConfig('path', 'models')}
                    className={\`group relative overflow-hidden text-left p-10 md:p-12 rounded-[2rem] border-2 transition-all duration-500 \${config.path === 'models' ? 'border-brand-green bg-white shadow-xl scale-[1.02]' : 'border-gray-100 bg-white hover:border-brand-green/30 hover:shadow-lg'}\`}
                  >
                    <div className={\`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-green/5 to-transparent rounded-bl-full -z-10 transition-opacity \${config.path === 'models' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}\`} />
                    <div className={\`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 \${config.path === 'models' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green'}\`}>
                      <Grid className="w-10 h-10" />
                    </div>
                    <h4 className="font-heading font-bold text-3xl text-brand-graphite mb-4">Gotowe modele</h4>
                    <p className="text-gray-500 leading-relaxed text-lg mb-8">Szybka ścieżka. Wybierz jedną z naszych sprawdzonych, wyselekcjonowanych propozycji i dostosuj jej detale.</p>
                    <div className="flex items-center gap-2 text-brand-green font-bold">
                      <span>Wybieram</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </button>

                  <button 
                    onClick={() => updateConfig('path', 'custom')}
                    className={\`group relative overflow-hidden text-left p-10 md:p-12 rounded-[2rem] border-2 transition-all duration-500 \${config.path === 'custom' ? 'border-brand-green bg-white shadow-xl scale-[1.02]' : 'border-gray-100 bg-white hover:border-brand-green/30 hover:shadow-lg'}\`}
                  >
                    <div className={\`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-green/5 to-transparent rounded-bl-full -z-10 transition-opacity \${config.path === 'custom' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}\`} />
                    <div className={\`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 \${config.path === 'custom' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green'}\`}>
                      <Ruler className="w-10 h-10" />
                    </div>
                    <h4 className="font-heading font-bold text-3xl text-brand-graphite mb-4">Na wymiar</h4>
                    <p className="text-gray-500 leading-relaxed text-lg mb-8">Pełna wolność. Zaprojektuj saunę od zera, zdefiniuj własne wymiary co do centymetra i stwórz unikalny projekt.</p>
                    <div className="flex items-center gap-2 text-brand-green font-bold">
                      <span>Wybieram</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 1: Models */}
            {step === 1 && config.path === 'models' && (
              <motion.div key="step1-models" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-heading font-bold text-brand-graphite mb-4">Wybierz model bazowy</h1>
                  <p className="text-lg text-gray-500">Każdy model charakteryzuje się unikalnym stylem. Wybierz ten, który najlepiej trafia w Twój gust.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MODELS.map(model => (
                    <button 
                      key={model.id}
                      onClick={() => updateConfig('selectedModel', model.id)}
                      className={\`group text-left p-8 rounded-[2rem] border-2 transition-all duration-300 \${config.selectedModel === model.id ? 'border-brand-green bg-white shadow-xl transform -translate-y-2' : 'border-gray-100 bg-white hover:border-brand-green/30 hover:shadow-lg hover:-translate-y-1'}\`}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className={\`w-12 h-12 rounded-full flex items-center justify-center transition-colors \${config.selectedModel === model.id ? 'bg-brand-green text-white shadow-md shadow-brand-green/20' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green'}\`}>
                          <Grid className="w-6 h-6" />
                        </div>
                        <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors \${config.selectedModel === model.id ? 'bg-brand-green border-brand-green' : 'border-gray-300'}\`}>
                          {config.selectedModel === model.id && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                        </div>
                      </div>
                      <h4 className="font-heading font-bold text-2xl text-brand-graphite mb-3">{model.name}</h4>
                      <p className="text-gray-500 mb-8 min-h-[48px]">{model.desc}</p>
                      
                      <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Wymiary</span>
                        <span className="font-bold text-brand-graphite">{model.w} × {model.d} cm</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 1: Custom */}
            {step === 1 && config.path === 'custom' && (
              <motion.div key="step1-custom" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-heading font-bold text-brand-graphite mb-4">Wymiary i układ</h1>
                  <p className="text-lg text-gray-500">Dostosuj przestrzeń idealnie do swojego ogrodu.</p>
                </div>
                
                <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                  <div className="space-y-10">
                    {['width', 'depth', 'height'].map((dim) => {
                      const max = dim === 'height' ? 300 : 400;
                      const min = dim === 'height' ? 200 : 150;
                      const label = dim === 'width' ? 'Szerokość' : dim === 'depth' ? 'Głębokość' : 'Wysokość';
                      return (
                        <div key={dim} className="relative">
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-sm font-bold text-gray-800 uppercase tracking-widest">{label}</label>
                            <div className="bg-brand-green/5 px-6 py-2 rounded-xl border border-brand-green/20 flex items-baseline gap-1">
                              <span className="text-brand-green font-bold text-2xl">{config[dim as keyof ConfigState]}</span>
                              <span className="text-brand-green/70 font-bold text-base">cm</span>
                            </div>
                          </div>
                          <input 
                            type="range" min={min} max={max} step={5} 
                            value={Number(config[dim as keyof ConfigState])} 
                            onChange={(e) => updateConfig(dim as keyof ConfigState, Number(e.target.value) as never)}
                            className="w-full accent-brand-green h-2.5 bg-gray-100 rounded-full appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-sm text-gray-400 mt-3 font-bold">
                            <span>{min} cm</span>
                            <span>{max} cm</span>
                          </div>
                        </div>
                      )
                    })}

                    <div className="pt-8 border-t border-gray-100">
                      <label className="block text-sm font-bold text-gray-800 uppercase tracking-widest mb-6">Układ paneli elewacji</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => updateConfig('layout', 'vertical')}
                          className={\`py-5 rounded-2xl border-2 font-bold text-lg transition-all \${config.layout === 'vertical' ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-sm' : 'border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}\`}
                        >
                          Pionowy
                        </button>
                        <button 
                          onClick={() => updateConfig('layout', 'horizontal')}
                          className={\`py-5 rounded-2xl border-2 font-bold text-lg transition-all \${config.layout === 'horizontal' ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-sm' : 'border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}\`}
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
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-heading font-bold text-brand-graphite mb-4">Wykończenie zewnętrzne</h1>
                  <p className="text-lg text-gray-500">Wybierz kolor impregnacji, który najlepiej wpisze się w Twoje otoczenie.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {COLORS.map(color => (
                    <button 
                      key={color.name}
                      onClick={() => updateConfig('color', color.name)}
                      className={\`group flex flex-col items-center justify-center gap-6 p-8 bg-white border-2 rounded-[2rem] transition-all duration-300 \${config.color === color.name ? 'border-brand-green shadow-xl transform -translate-y-2' : 'border-gray-100 hover:border-brand-green/30 hover:shadow-lg hover:-translate-y-1'}\`}
                    >
                      <div className={\`w-24 h-24 rounded-full shadow-inner border-4 \${color.bg} \${config.color === color.name ? 'border-brand-green' : color.border}\`}></div>
                      <span className={\`font-bold text-lg text-center transition-colors \${config.color === color.name ? 'text-brand-graphite' : 'text-gray-500 group-hover:text-brand-graphite'}\`}>{color.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Addons */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-heading font-bold text-brand-graphite mb-4">Wyposażenie dodatkowe</h1>
                  <p className="text-lg text-gray-500">Podnieś komfort korzystania z sauny dodając wybrane akcesoria.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ADDONS.map(addon => (
                    <button
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={\`flex items-center gap-6 p-6 bg-white border-2 rounded-[1.5rem] transition-all duration-300 text-left \${config.addons.includes(addon) ? 'border-brand-green shadow-md transform -translate-y-1' : 'border-gray-100 hover:border-gray-300 hover:shadow-sm'}\`}
                    >
                      <div className={\`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center border-2 transition-colors \${config.addons.includes(addon) ? 'bg-brand-green border-brand-green' : 'bg-gray-50 border-gray-200'}\`}>
                        {config.addons.includes(addon) ? <Check className="w-5 h-5 text-white" strokeWidth={3} /> : <Plus className="w-5 h-5 text-gray-400" />}
                      </div>
                      <span className={\`text-lg \${config.addons.includes(addon) ? 'text-brand-graphite font-bold' : 'text-gray-600 font-medium'}\`}>{addon}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Contact & Summary */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  
                  {/* Summary Side */}
                  <div className="lg:col-span-2 bg-brand-graphite text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <div className="relative z-10">
                      <h3 className="font-heading text-2xl font-bold mb-8">Twoja Konfiguracja</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Typ</p>
                          <p className="font-bold text-lg">{config.path === 'models' ? 'Model z oferty' : 'Sauna na wymiar'}</p>
                        </div>

                        {config.path === 'models' && config.selectedModel ? (
                           <div>
                             <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Wybrany model</p>
                             <p className="font-bold text-lg">{MODELS.find(m => m.id === config.selectedModel)?.name}</p>
                           </div>
                        ) : (
                          <div>
                            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Wymiary (Sz x Gł x Wy)</p>
                            <p className="font-bold text-lg">{config.width} × {config.depth} × {config.height} cm</p>
                          </div>
                        )}

                        <div>
                          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Kolor</p>
                          <p className="font-bold text-lg">{config.color}</p>
                        </div>

                        <div>
                          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">Dodatki ({config.addons.length})</p>
                          {config.addons.length > 0 ? (
                            <ul className="space-y-2">
                              {config.addons.map(a => (
                                <li key={a} className="flex items-start gap-2">
                                  <Check className="w-5 h-5 text-brand-green flex-shrink-0" />
                                  <span className="text-sm font-medium text-white/90">{a}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-white/40 text-sm italic">Brak dodatków</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form Side */}
                  <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="mb-10">
                      <h3 className="font-heading text-3xl font-bold text-brand-graphite mb-4">Wyślij do wyceny</h3>
                      <p className="text-gray-500 text-lg">Podaj dane kontaktowe, a nasi specjaliści skontaktują się z Tobą w ciągu 24h z przygotowaną, darmową wyceną Twojego projektu.</p>
                    </div>

                    <form id="configurator-form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Imię i nazwisko</label>
                          <input 
                            type="text" required
                            value={config.name}
                            onChange={(e) => updateConfig('name', e.target.value)}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-white hover:border-brand-green/30 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-base font-medium shadow-sm"
                            placeholder="Jan Kowalski"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Numer telefonu</label>
                          <input 
                            type="tel" required
                            value={config.phone}
                            onChange={(e) => updateConfig('phone', e.target.value)}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-white hover:border-brand-green/30 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-base font-medium shadow-sm"
                            placeholder="+48 000 000 000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Adres e-mail</label>
                        <input 
                          type="email" required
                          value={config.email}
                          onChange={(e) => updateConfig('email', e.target.value)}
                          className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-white hover:border-brand-green/30 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-base font-medium shadow-sm"
                          placeholder="jan@example.com"
                        />
                      </div>
                      
                      <div className="pt-4 flex items-start gap-4">
                        <input type="checkbox" required className="mt-1 w-5 h-5 accent-brand-green cursor-pointer rounded" id="config-consent" />
                        <label htmlFor="config-consent" className="text-sm text-gray-500 leading-relaxed">
                          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania i przesłania oferty, zgodnie z polityką prywatności firmy Bertsch Holzbau.
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
      <footer className="h-24 bg-white border-t border-gray-100 flex items-center justify-between px-6 md:px-12 flex-shrink-0 z-20">
        <div className="w-1/3">
          <button 
            onClick={prevStep}
            disabled={step === 0}
            className={\`px-6 py-4 font-bold text-base rounded-full transition-all flex items-center gap-3 \${step === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}\`}
          >
            <ArrowLeft className="w-5 h-5" /> Wróć
          </button>
        </div>
        
        <div className="w-1/3 flex justify-center gap-2">
          {stepsList.map(s => (
            <div key={s.id} className={\`w-2 h-2 rounded-full transition-all duration-300 \${step === s.id ? 'w-8 bg-brand-green' : step > s.id ? 'bg-brand-green/30' : 'bg-gray-200'}\`} />
          ))}
        </div>

        <div className="w-1/3 flex justify-end">
          {step < 4 ? (
            <button 
              onClick={nextStep}
              disabled={isNextDisabled()}
              className={\`px-8 py-4 font-bold text-base rounded-full transition-all flex items-center gap-3 shadow-lg \${isNextDisabled() ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' : 'bg-brand-green text-white hover:bg-[#3d834a] hover:-translate-y-1 hover:shadow-xl'}\`}
            >
              Dalej <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button 
              type="submit"
              form="configurator-form"
              className="px-8 py-4 bg-brand-graphite text-white font-bold text-base rounded-full hover:bg-black transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl flex items-center gap-3"
            >
              Wyślij do wyceny <Check className="w-5 h-5" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
`

fs.writeFileSync("src/components/SaunaConfigurator.tsx", newComponent);
console.log("Rewritten");
