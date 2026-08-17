const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');
code = code.replace(/'carports \| 'toolsheds''/g, "'carports' | 'toolsheds'");
code = code.replace(/if \(id === 'modular'\) setCurrentView\('carports' \| 'toolsheds'\);/g, "if (id === 'modular') setCurrentView('carports');\n                if (id === 'toolsheds') setCurrentView('toolsheds');");
code = code.replace(/\{currentView === 'carports' \| 'toolsheds'/g, "{currentView === 'carports'");
code = code.replace(/<motion\.div key="carports' \| 'toolsheds'"/g, '<motion.div key="carports"');
fs.writeFileSync('src/App.tsx', code);
