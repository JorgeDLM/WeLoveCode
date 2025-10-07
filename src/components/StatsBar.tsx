'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CountUp from 'react-countup';

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
            {isVisible && (
              <>
                $<CountUp end={51000000} duration={100} separator="," />+
              </>
            )}
          </div>
          <div className="text-gray-300 text-sm font-medium">Generado por clientes</div>
        </div>
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">
            {isVisible && <CountUp end={23} duration={2.5} />}
          </div>
          <div className="text-gray-300 text-sm font-medium">Proyectos exitosos</div>
        </div>
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">
            {isVisible && (
              <>
                <CountUp end={100} duration={2} />%
              </>
            )}
          </div>
          <div className="text-gray-300 text-sm font-medium">Clientes satisfechos</div>
        </div>
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">
            {isVisible && <CountUp end={7} duration={1.5} />}
          </div>
          <div className="text-gray-300 text-sm font-medium">Años de experiencia</div>
        </div>
      </div>
    </div>
  );
}
