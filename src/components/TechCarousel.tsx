'use client';

interface TechCarouselProps {
  technologies: string[];
  speed?: 'slow' | 'normal' | 'fast';
}

export default function TechCarousel({ technologies, speed = 'normal' }: TechCarouselProps) {
  // Duplicamos el array para el efecto infinito
  const duplicatedTechs = [...technologies, ...technologies];
  
  // Velocidad normal en desktop, 3x más rápido en móvil
  const speedClass = {
    slow: 'animate-scroll-fast md:animate-scroll',
    normal: 'animate-scroll-fast md:animate-scroll',
    fast: 'animate-scroll-faster md:animate-scroll-faster'
  };

  return (
    <div className="relative overflow-hidden">
      <div className={`flex ${speedClass[speed]}`}>
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex-shrink-0 mx-3 px-6 py-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-full"
          >
            <span className="font-semibold text-purple-400 whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
