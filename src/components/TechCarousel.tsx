'use client';

import InfiniteCarousel from './InfiniteCarousel';

interface TechCarouselProps {
  technologies: string[];
  speed?: 'slow' | 'normal' | 'fast';
}

export default function TechCarousel({ technologies, speed = 'normal' }: TechCarouselProps) {
  const techItems = technologies.map((tech, index) => (
    <div
      key={`${tech}-${index}`}
      className="px-6 py-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-full"
    >
      <span className="font-semibold text-purple-400 whitespace-nowrap">
        {tech}
      </span>
    </div>
  ));

  return (
    <InfiniteCarousel 
      baseSpeed={-2.0}
      gap={24}
    >
      {techItems}
    </InfiniteCarousel>
  );
}
