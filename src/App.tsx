/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import USPs from './components/USPs';
import ProductTemplate from './components/ProductTemplate';
import Footer from './components/Footer';
import Gateway from './components/Gateway';
import SaunasLandingPage from './components/SaunasLandingPage';
import SaunaConfigurator from './components/SaunaConfigurator';
import ContactPage from './components/ContactPage';
import AboutUsPage from './components/AboutUsPage';
import CarportsLandingPage from './components/CarportsLandingPage';
import ToolshedsLandingPage from './components/ToolshedsLandingPage';
import GraphicsPage from './components/GraphicsPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'gateway' | 'home' | 'saunas' | 'carports' | 'toolsheds' | 'configurator' | 'contact' | 'about' | 'graphics'>('gateway');

  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-graphite selection:bg-brand-green selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentView === 'gateway' && (
          <motion.div key="gateway" exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }}>
            <Gateway onSelect={() => setCurrentView('home')} />
          </motion.div>
        )}
        
        {currentView === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="min-h-screen w-full">
            <Categories 
              onSelectCategory={(id) => {
                if (id === 'saunas') setCurrentView('saunas');
                if (id === 'modular') setCurrentView('carports');
                if (id === 'toolsheds') setCurrentView('toolsheds');
              }} 
              onContact={() => setCurrentView('contact')}
              onAboutUs={() => setCurrentView('about')}
              onGraphics={() => setCurrentView('graphics')}
            />
          </motion.div>
        )}

        {currentView === 'saunas' && (
          <motion.div key="saunas" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <SaunasLandingPage 
              onBack={() => setCurrentView('home')} 
              onConfigurator={() => setCurrentView('configurator')} 
              onContact={() => setCurrentView('contact')}
              onAboutUs={() => setCurrentView('about')}
              onGraphics={() => setCurrentView('graphics')}
            />
          </motion.div>
        )}


        {currentView === 'toolsheds' && (
          <motion.div key="toolsheds" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <ToolshedsLandingPage 
              onBack={() => setCurrentView('home')} 
              onConfigurator={() => setCurrentView('configurator')} 
              onContact={() => setCurrentView('contact')}
              onAboutUs={() => setCurrentView('about')}
              onGraphics={() => setCurrentView('graphics')}
            />
          </motion.div>
        )}
        {currentView === 'carports' && (
          <motion.div key="carports" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <CarportsLandingPage 
              onBack={() => setCurrentView('home')} 
              onConfigurator={() => setCurrentView('configurator')} 
              onContact={() => setCurrentView('contact')}
              onAboutUs={() => setCurrentView('about')}
              onGraphics={() => setCurrentView('graphics')}
            />
          </motion.div>
        )}

        {currentView === 'configurator' && (
          <motion.div key="configurator" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="h-screen w-screen overflow-hidden">
            <SaunaConfigurator onClose={() => setCurrentView('saunas')} />
          </motion.div>
        )}
        
        {currentView === 'contact' && (
          <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <ContactPage onBack={() => setCurrentView('home')} onAboutUs={() => setCurrentView('about')} />
          </motion.div>
        )}

        {currentView === 'about' && (
          <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <AboutUsPage onBack={() => setCurrentView('home')} onContact={() => setCurrentView('contact')} />
          </motion.div>
        )}

        {currentView === 'graphics' && (
          <motion.div key="graphics" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <GraphicsPage onBack={() => setCurrentView('home')} onContact={() => setCurrentView('contact')} onAboutUs={() => setCurrentView('about')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
