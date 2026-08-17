import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf-8');
code = code.replace("'carports | 'toolsheds''", "'carports' | 'toolsheds'");
code = code.replace("'carports | 'toolsheds''", "'carports'");
code = code.replace("'carports | 'toolsheds''", "'carports'");
code = code.replace("\"carports | 'toolsheds'\"", '"carports"');

code = code.replace(
  "import CarportsLandingPage from './components/CarportsLandingPage';",
  "import CarportsLandingPage from './components/CarportsLandingPage';\nimport ToolshedsLandingPage from './components/ToolshedsLandingPage';"
);

code = code.replace(
  "if (id === 'modular') setCurrentView('carports');",
  "if (id === 'modular') setCurrentView('carports');\n                if (id === 'toolsheds') setCurrentView('toolsheds');"
);

code = code.replace(
  "<CarportsLandingPage",
  "</motion.div>\n        )}\n        {currentView === 'toolsheds' && (\n          <motion.div key=\"toolsheds\" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>\n            <ToolshedsLandingPage \n              onBack={() => setCurrentView('home')} \n              onConfigurator={() => setCurrentView('configurator')} \n              onContact={() => setCurrentView('contact')}\n              onAboutUs={() => setCurrentView('about')}\n              onGraphics={() => setCurrentView('graphics')}\n            />\n          </motion.div>\n        )}\n        {currentView === 'carports' && (\n          <motion.div key=\"carports\" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>\n            <CarportsLandingPage"
);
fs.writeFileSync('src/App.tsx', code);
