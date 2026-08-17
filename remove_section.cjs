const fs = require('fs');
let content = fs.readFileSync('src/components/SaunasLandingPage.tsx', 'utf-8');

// Remove the green section completely
const regex = /<section className="py-24 px-4 sm:px-8 lg:px-12 bg-white">\s*<div id="konfigurator"[\s\S]*?<\/section>/;
content = content.replace(regex, '');

// Give the "Gotowy na relaks" section the id="konfigurator"
content = content.replace(
  /<section className="relative h-\[60vh\] min-h-\[500px\] w-full flex flex-col justify-center items-center overflow-hidden text-center">/,
  '<section id="konfigurator" className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-center items-center overflow-hidden text-center">'
);

// Replace the button onClick in the "Gotowy na relaks" section to be onConfigurator
// We'll search for it inside the #konfigurator block
const ctaSectionRegex = /(<section id="konfigurator"[\s\S]*?)onClick=\{scrollToConfigurator\}([\s\S]*?<\/section>)/;
content = content.replace(ctaSectionRegex, '$1onClick={onConfigurator}$2');

fs.writeFileSync('src/components/SaunasLandingPage.tsx', content);
