import { TreePine, Combine, ShieldCheck, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: <TreePine className="w-10 h-10 text-brand-wood" />,
    title: 'Selekcjonowane Drewno',
    description: 'Korzystamy wyłącznie z surowca najwyższej klasy (m.in. świerk skandynawski). Każdy element jest starannie dobierany pod kątem wytrzymałości i unikalnej estetyki.'
  },
  {
    icon: <Combine className="w-10 h-10 text-brand-wood" />,
    title: 'Niemiecka Precyzja',
    description: 'Obróbka na najnowocześniejszych niemieckich parkach maszynowych gwarantuje idealne spasowanie każdego elementu. Technologia spotyka rzemiosło.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-wood" />,
    title: 'Top of the Top',
    description: 'Oferujemy bezkompromisową jakość. Wykończenie klasy premium bez dróg na skróty i półśrodków. Inwestycja, która przetrwa pokolenia.'
  }
];

export default function USPs() {
  return (
    <section id="usps" className="py-24 bg-brand-graphite text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 tracking-tight">Filary Marki Bertsch Holzbau</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center group bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="w-20 h-20 rounded-2xl bg-brand-green/20 text-brand-green flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium mb-6">
                {pillar.description}
              </p>
              <div className="mt-auto w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
