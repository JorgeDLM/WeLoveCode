'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TechCarousel from './TechCarousel';

const technologies = [
  'JavaScript',
  'TypeScript', 
  'React',
  'React Native',
  'Python',
  'Java',
  'Django',
  'PHP',
  'AWS',
  'Heroku',
  'Netlify',
  'PostgreSQL',
  'MongoDB',
  'Node.js',
  'Express.js',
  'Socket.io',
  'Firebase',
  'Redis',
  'Tailwind CSS',
  'HTML',
  'Git',
  'GitHub',
  'Sass',
  'Bootstrap',
  'CSS'
];

export default function TechnologiesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Tecnologías que dominamos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trabajamos con las herramientas más modernas y confiables del mercado
          </p>
        </div>

        {/* Carrusel infinito */}
        <div 
          ref={carouselRef}
          className={`relative transition-all duration-1000 ${
            carouselVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <TechCarousel technologies={technologies} speed="fast" />
        </div>
      </div>
    </section>
  );
}
