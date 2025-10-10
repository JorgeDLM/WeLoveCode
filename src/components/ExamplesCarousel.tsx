'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InfiniteCarousel from './InfiniteCarousel';

interface Example {
  name: string;
  description: string;
  image: string;
  logo?: string;
  link?: string;
}

interface ExamplesCarouselProps {
  examples: Example[];
  serviceId: string;
}

export default function ExamplesCarousel({ examples, serviceId }: ExamplesCarouselProps) {
  // Si hay 2 o menos ejemplos, mostrar layout estático
  const useStaticLayout = examples.length <= 2;

  // Encontrar el ID del proyecto basado en el nombre
  const getProjectSlug = (name: string) => {
    const slugMap: Record<string, string> = {
      'Mercado a la Mano': 'mercado-web',
      'Por Amor al Campo': 'poramoralcampo',
      'Mercado App': 'mercado-app',
      'FidelityApp': 'fidelity',
      'RILSA': 'rilsa',
      'Client': 'client',
      'Arribo': 'arribo'
    };
    return slugMap[name] || name.toLowerCase().replace(/\s+/g, '-');
  };

  // Layout estático para 2 o menos ejemplos
  if (useStaticLayout) {
    return (
      <div className="py-8 px-4">
        <div className={`grid ${examples.length === 1 ? 'grid-cols-1 max-w-xl mx-auto' : 'grid-cols-1 md:grid-cols-2'} gap-10`}>
          {examples.map((example, index) => (
          <div
            key={`${example.name}-${index}`}
            className="group w-full max-w-xl mx-auto"
          >
            <div className="relative h-full">
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(168,85,247,0.3)] group-hover:scale-[1.02] backdrop-blur-xl overflow-hidden">
                
                {/* Logo badge */}
                {example.logo && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="relative w-16 h-16 bg-white rounded-2xl shadow-2xl overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white/50 p-2">
                      <Image
                        src={example.logo}
                        alt={`${example.name} logo`}
                        fill
                        className="object-contain"
                        draggable={false}
                      />
                    </div>
                  </div>
                )}
                
                {/* Image container - completa y visible */}
                <div className="relative w-full h-72 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <div className="relative h-full w-full p-6 group-hover:p-4 transition-all duration-500">
                    <div className="relative h-full w-full">
                      <Image
                        src={example.image}
                        alt={example.name}
                        fill
                        className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                        draggable={false}
                      />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top gradient overlay */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>

                {/* Content section */}
                <div className="relative p-8 pt-6">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                  
                  <h3 className="text-2xl font-black mb-3 transition-all duration-300">
                    {example.name === 'FidelityApp' ? (
                      <span className="inline-flex items-baseline">
                        <span className="text-white group-hover:text-purple-300">Fidelity</span>
                        <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-indigo-500">App</span>
                      </span>
                    ) : (
                      <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
                        {example.name}
                      </span>
                    )}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {example.description}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    href={example.link || `/proyectos/${getProjectSlug(example.name)}`}
                    target={example.link ? '_blank' : undefined}
                    rel={example.link ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-400 font-bold group-hover:from-purple-600/40 group-hover:to-blue-600/40 group-hover:border-purple-400/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm">{example.link ? 'Visitar sitio web' : 'Ver proyecto completo'}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Ambient glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }

  // Layout carrusel para más de 2 ejemplos
  const carouselItems = examples.map((example, index) => (
          <div
            key={`${example.name}-${index}`}
            className="flex-shrink-0 w-[480px] group"
          >
            <div className="relative h-full">
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(168,85,247,0.3)] group-hover:scale-[1.02] backdrop-blur-xl overflow-hidden">
                
                {/* Logo badge */}
                {example.logo && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="relative w-16 h-16 bg-white rounded-2xl shadow-2xl overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white/50 p-2">
                      <Image
                        src={example.logo}
                        alt={`${example.name} logo`}
                        fill
                        className="object-contain"
                        draggable={false}
                      />
                    </div>
                  </div>
                )}
                
                {/* Image container - completa y visible */}
                <div className="relative w-full h-72 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <div className="relative h-full w-full p-6 group-hover:p-4 transition-all duration-500">
                    <div className="relative h-full w-full">
                      <Image
                        src={example.image}
                        alt={example.name}
                        fill
                        className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                        draggable={false}
                      />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top gradient overlay */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>

                {/* Content section */}
                <div className="relative p-8 pt-6">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                  
                  <h3 className="text-2xl font-black mb-3 transition-all duration-300">
                    {example.name === 'FidelityApp' ? (
                      <span className="inline-flex items-baseline">
                        <span className="text-white group-hover:text-purple-300">Fidelity</span>
                        <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-indigo-500">App</span>
                      </span>
                    ) : (
                      <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
                        {example.name}
                      </span>
                    )}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {example.description}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    href={example.link || `/proyectos/${getProjectSlug(example.name)}`}
                    target={example.link ? '_blank' : undefined}
                    rel={example.link ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-400 font-bold group-hover:from-purple-600/40 group-hover:to-blue-600/40 group-hover:border-purple-400/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm">{example.link ? 'Visitar sitio web' : 'Ver proyecto completo'}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Ambient glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
  ));

  return (
    <InfiniteCarousel 
      baseSpeed={2.0}
      gap={40}
      className="py-8"
    >
      {carouselItems}
    </InfiniteCarousel>
  );
}
