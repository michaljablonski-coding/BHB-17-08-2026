const fs = require("fs");

const newComponent = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Settings2, Palette, Box, Grid, Phone, Mail, User, X, Zap } from 'lucide-react';

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
  { name: 'Naturalne drewno', bg: 'bg-[#DEB887]' },
  { name: 'Ciemny orzech', bg: 'bg-[#5C4033]' },
  { name: 'Antracyt', bg: 'bg-[#383E42]' },
  { name: 'Bielony', bg: 'bg-[#F5F5DC]' }
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

  return (
    <div className="fixed inset-0 z-50 bg-[#fafafa] flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* LEFT PANEL - Form/Steps */}
      <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] h-full bg-white shadow-2xl flex flex-col overflow-y-auto relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center text-white">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl text-brand-graphite leading-tight">Konfigurator</h2>
              <p className="text-xs text-brand-green font-bold tracking-widest uppercase">Krok {step + 1} / 5</p>
            </div>
          </div>
          {onClose && (
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {/* STEP 0: Path Selection */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="h-full flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3">Od czego zaczynamy?</h3>
                <p className="text-gray-500 text-sm mb-8">Wybierz, w jaki sposób chcesz stworzyć swoją wymarzoną saunę.</p>
                
                <div className="space-y-4 flex-grow">
                  <button 
                    onClick={() => updateConfig('path', 'models')}
                    className={\`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 \${config.path === 'models' ? 'border-brand-green bg-brand-green/5 shadow-md transform -translate-y-1' : 'border-gray-100 hover:border-brand-green/30 hover:bg-gray-50'}\`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={\`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 \${config.path === 'models' ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-500'}\`}>
                        <Grid className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-brand-graphite mb-1">Gotowe modele</h4>
                        <p className="text-sm text-gray-500">Wybierz jeden z naszych sprawdzonych modeli i dostosuj jego detale (najszybsza opcja).</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => updateConfig('path', 'custom')}
                    className={\`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 \${config.path === 'custom' ? 'border-brand-green bg-brand-green/5 shadow-md transform -translate-y-1' : 'border-gray-100 hover:border-brand-green/30 hover:bg-gray-50'}\`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={\`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 \${config.path === 'custom' ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-500'}\`}>
                        <Settings2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-brand-graphite mb-1">Pełna konfiguracja (na wymiar)</h4>
                        <p className="text-sm text-gray-500">Zaprojektuj saunę od zera - podaj własne wymiary, wybierz układ materiałów i wyposażenie.</p>
                      </div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 1: Dimensions or Models */}
            {step === 1 && config.path === 'models' && (
              <motion.div key="step1-models" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="h-full flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3">Wybierz model bazowy</h3>
                <p className="text-gray-500 text-sm mb-6">Wszystkie modele możemy dostosować w kolejnych krokach.</p>
                <div className="space-y-4 flex-grow">
                  {MODELS.map(model => (
                    <button 
                      key={model.id}
                      onClick={() => updateConfig('selectedModel', model.id)}
                      className={\`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 \${config.selectedModel === model.id ? 'border-brand-green bg-brand-green/5 shadow-md transform -translate-y-1' : 'border-gray-100 hover:border-brand-green/30 hover:bg-gray-50'}\`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-brand-graphite">{model.name}</h4>
                        {config.selectedModel === model.id && <Check className="w-5 h-5 text-brand-green" />}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{model.desc}</p>
                      <div className="inline-block px-3 py-1 bg-white rounded-md text-xs font-bold text-gray-600 shadow-sm border border-gray-100">
                        {model.w} x {model.d} cm
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && config.path === 'custom' && (
              <motion.div key="step1-custom" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="h-full flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3">Wymiary i materiał</h3>
                <p className="text-gray-500 text-sm mb-6">Dostosuj wymiary co do centymetra.</p>
                
                <div className="space-y-6 flex-grow">
                  {['width', 'depth', 'height'].map((dim) => {
                    const max = dim === 'height' ? 300 : 400;
                    const min = dim === 'height' ? 200 : 150;
                    const label = dim === 'width' ? 'Szerokość' : dim === 'depth' ? 'Głębokość' : 'Wysokość';
                    return (
                      <div key={dim} className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">{label}</label>
                          <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 flex items-baseline gap-1">
                            <span className="text-brand-green font-bold text-xl">{config[dim as keyof ConfigState]}</span>
                            <span className="text-gray-400 font-bold text-sm">cm</span>
                          </div>
                        </div>
                        <input 
                          type="range" min={min} max={max} step={5} 
                          value={Number(config[dim as keyof ConfigState])} 
                          onChange={(e) => updateConfig(dim as keyof ConfigState, Number(e.target.value) as never)}
                          className="w-full accent-brand-green h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                          <span>{min} cm</span>
                          <span>{max} cm</span>
                        </div>
                      </div>
                    )
                  })}

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-3">Układ paneli elewacji</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => updateConfig('layout', 'vertical')}
                        className={\`py-4 rounded-xl border-2 text-sm font-bold transition-all \${config.layout === 'vertical' ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-sm' : 'border-gray-100 text-gray-600 hover:border-gray-300'}\`}
                      >
                        Pionowy
                      </button>
                      <button 
                        onClick={() => updateConfig('layout', 'horizontal')}
                        className={\`py-4 rounded-xl border-2 text-sm font-bold transition-all \${config.layout === 'horizontal' ? 'border-brand-green bg-brand-green/5 text-brand-green shadow-sm' : 'border-gray-100 text-gray-600 hover:border-gray-300'}\`}
                      >
                        Poziomy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Color */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="h-full flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3">Kolor zewnętrzny</h3>
                <p className="text-gray-500 text-sm mb-6">Wybierz wykończenie, które najlepiej pasuje do Twojego ogrodu.</p>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {COLORS.map(color => (
                    <button 
                      key={color.name}
                      onClick={() => updateConfig('color', color.name)}
                      className={\`flex flex-col items-center justify-center gap-3 p-5 border-2 rounded-2xl transition-all duration-300 \${config.color === color.name ? 'border-brand-green bg-brand-green/5 shadow-md transform -translate-y-1' : 'border-gray-100 hover:border-brand-green/30 hover:bg-gray-50'}\`}
                    >
                      <div className={\`w-14 h-14 rounded-full shadow-inner \${color.bg} \${config.color === color.name ? 'ring-4 ring-offset-4 ring-brand-green' : ''}\`}></div>
                      <span className="text-sm font-bold text-gray-800 text-center">{color.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Addons */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="h-full flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3">Wyposażenie dodatkowe</h3>
                <p className="text-gray-500 text-sm mb-6">Zaznacz elementy, które chcesz dodać do sauny.</p>
                <div className="space-y-3 flex-grow overflow-y-auto pr-2 pb-10">
                  {ADDONS.map(addon => (
                    <button
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={\`w-full flex items-center gap-4 p-4 border-2 rounded-xl transition-all text-left \${config.addons.includes(addon) ? 'border-brand-green bg-brand-green/5 shadow-sm' : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'}\`}
                    >
                      <div className={\`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border-2 transition-colors \${config.addons.includes(addon) ? 'bg-brand-green border-brand-green' : 'bg-white border-gray-300'}\`}>
                        {config.addons.includes(addon) && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                      </div>
                      <span className={\`text-sm \${config.addons.includes(addon) ? 'text-brand-graphite font-bold' : 'text-gray-600 font-medium'}\`}>{addon}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Contact */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="h-full flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3">Twoje dane</h3>
                <p className="text-gray-500 text-sm mb-6">Podaj dane kontaktowe, by otrzymać spersonalizowaną ofertę.</p>
                <form id="configurator-form" onSubmit={handleSubmit} className="space-y-4 flex-grow">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Imię i nazwisko</label>
                    <input 
                      type="text" required
                      value={config.name}
                      onChange={(e) => updateConfig('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-sm"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Adres e-mail</label>
                    <input 
                      type="email" required
                      value={config.email}
                      onChange={(e) => updateConfig('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-sm"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Numer telefonu</label>
                    <input 
                      type="tel" required
                      value={config.phone}
                      onChange={(e) => updateConfig('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-sm"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                  <div className="pt-2 flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 w-4 h-4 accent-brand-green cursor-pointer" id="config-consent" />
                    <label htmlFor="config-consent" className="text-xs text-gray-500 leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przesłania oferty.
                    </label>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 border-t border-gray-100 bg-white sticky bottom-0 z-20 flex items-center justify-between">
          <button 
            onClick={prevStep}
            disabled={step === 0}
            className={\`px-6 py-3 font-bold text-sm rounded-full transition-colors flex items-center gap-2 \${step === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}\`}
          >
            <ArrowLeft className="w-4 h-4" /> Wróć
          </button>

          {step < 4 ? (
            <button 
              onClick={nextStep}
              disabled={isNextDisabled()}
              className={\`px-8 py-3 font-bold text-sm rounded-full transition-all shadow-md flex items-center gap-2 \${isNextDisabled() ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' : 'bg-brand-green text-white hover:bg-[#3d834a] hover:-translate-y-0.5'}\`}
            >
              Dalej <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="submit"
              form="configurator-form"
              className="px-8 py-3 bg-brand-graphite text-white font-bold text-sm rounded-full hover:bg-black transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              Wyślij <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* RIGHT PANEL - Preview */}
      <div className="hidden md:flex flex-1 bg-[#1A1F1C] relative flex-col overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div 
              key={step} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 1.05, y: -20 }} 
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white"
            >
              <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6">Podsumowanie konfiguracji</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/70">Ścieżka</span>
                  <span className="font-bold">{config.path === 'models' ? 'Model z oferty' : config.path === 'custom' ? 'Na wymiar' : '-'}</span>
                </div>
                
                {config.path === 'models' && config.selectedModel && (
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Model</span>
                    <span className="font-bold">{MODELS.find(m => m.id === config.selectedModel)?.name}</span>
                  </div>
                )}

                {config.path === 'custom' && (
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Wymiary (Sz x Gł x Wy)</span>
                    <span className="font-bold">{config.width} x {config.depth} x {config.height} cm</span>
                  </div>
                )}

                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/70">Kolor</span>
                  <span className="font-bold">{config.color}</span>
                </div>

                <div className="pt-2">
                  <span className="text-white/70 block mb-3">Dodatki ({config.addons.length})</span>
                  {config.addons.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {config.addons.map(a => (
                        <span key={a} className="px-3 py-1 bg-brand-green/20 border border-brand-green/30 rounded-lg text-xs font-medium text-brand-green">
                          {a}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-white/40 italic">Brak wybranych dodatków</span>
                  )}
                </div>
              </div>

              <div className="mt-10 p-6 bg-brand-green/10 border border-brand-green/20 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Darmowa wycena w 24h</h5>
                  <p className="text-sm text-white/70 leading-relaxed">Prześlij konfigurację, a nasi specjaliści przygotują dokładny projekt oraz wycenę Twojej sauny, uwzględniając koszty dostawy.</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync("src/components/SaunaConfigurator.tsx", newComponent);
console.log("Rewritten");
