'use client';

import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import StatsBar from './StatsBar';
import InfiniteCarousel from './InfiniteCarousel';

const colorClasses = {
  green: {
    border: 'border-green-500/50',
    gradient: 'from-green-500/20 via-green-600/10 to-transparent',
    text: 'text-green-300',
    glow: 'shadow-green-500/50',
  },
  blue: {
    border: 'border-blue-500/50',
    gradient: 'from-blue-500/20 via-blue-600/10 to-transparent',
    text: 'text-blue-300',
    glow: 'shadow-blue-500/50',
  },
  purple: {
    border: 'border-purple-500/50',
    gradient: 'from-purple-500/20 via-purple-600/10 to-transparent',
    text: 'text-purple-300',
    glow: 'shadow-purple-500/50',
  },
  indigo: {
    border: 'border-indigo-500/50',
    gradient: 'from-indigo-500/20 via-indigo-600/10 to-transparent',
    text: 'text-indigo-300',
    glow: 'shadow-indigo-500/50',
  },
  pink: {
    border: 'border-pink-500/50',
    gradient: 'from-pink-500/20 via-pink-600/10 to-transparent',
    text: 'text-pink-300',
    glow: 'shadow-pink-500/50',
  },
  emerald: {
    border: 'border-emerald-500/50',
    gradient: 'from-emerald-500/20 via-emerald-600/10 to-transparent',
    text: 'text-emerald-300',
    glow: 'shadow-emerald-500/50',
  },
  cyan: {
    border: 'border-cyan-500/50',
    gradient: 'from-cyan-500/20 via-cyan-600/10 to-transparent',
    text: 'text-cyan-300',
    glow: 'shadow-cyan-500/50',
  }
};

export default function ProjectsCarousel() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="proyectos-preview" 
      className="relative py-8 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden pt-[10px] md:pt-[20px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Title Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-0 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent pb-1">
            Proyectos que generan resultados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 -mt-2">
            <strong className="text-white">$51,000,000+ generados</strong> por nuestros clientes
          </p>
          
          {/* Stats Bar */}
          <div className="mb-1 md:mb-7">
            <StatsBar />
          </div>
        </div>

        {/* Carousel Container - Infinite Scroll */}
        <div 
          ref={carouselRef}
          className={`relative transition-all duration-1000 ${
            carouselVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <InfiniteCarousel 
            baseSpeed={2.0}
            gap={24}
            className="py-8"
          >
            {projects.map((project, index) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses];
              
              return (
                <div key={`${project.id}-${index}`} className="flex-shrink-0 w-[85vw] md:w-[450px] group">
                  <Link
                    href={`/proyectos/${project.id}`}
                    className="block hover:z-20 relative transition-transform duration-500 hover:scale-[1.08]"
                  >
                    <div className={`relative h-full bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border ${colors.border} rounded-3xl p-6 hover:border-opacity-100 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl`}>
                    {/* Gradient Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${project.id === 'poramoralcampo' ? 'bg-white p-2 rounded-xl' : ''}`}>
                          <Image 
                            src={project.logo} 
                            alt={`${project.name} Logo`}
                            width={50} 
                            height={50} 
                            className="rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-white">{project.name}</h3>
                          <p className={`${colors.text} text-sm font-medium`}>{project.tagline}</p>
                        </div>
                      </div>

                      {/* Images Container */}
                      <div className="relative h-64 mb-4">
                        {/* Main Image */}
                        <div className="relative h-full group-hover:scale-105 transition-all duration-500">
                          <Image 
                            src={project.mainImage} 
                            alt={project.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                        
                        {/* Floating Mobile Image */}
                        {project.mobileImage && (
                          <div className="absolute -right-4 -bottom-4 w-24 md:w-32 z-20 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500">
                            <div className={`relative ${project.id === 'mercado-app' ? 'h-40' : 'h-32'}`}>
                              <Image 
                                src={project.mobileImage} 
                                alt={`${project.name} Mobile`}
                                fill
                                className="object-contain drop-shadow-2xl"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.stats.slice(0, 2).map((stat) => (
                          <div 
                            key={stat.label} 
                            className={`bg-black/40 border ${colors.border} px-3 py-2 rounded-lg`}
                          >
                            <span className={`${colors.text} font-bold text-xs`}>
                              {stat.value}
                            </span>
                            <span className="text-gray-400 text-xs ml-1">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Arrow */}
                      
                    </div>
                  </div>
                  </Link>
                </div>
              );
            })}
          </InfiniteCarousel>
        </div>

        {/* Ver todos button */}
        <div className="text-center mt-2 md:mt-7">
          <Link 
            href="/proyectos"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300"
          >
            Ver más proyectos
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
