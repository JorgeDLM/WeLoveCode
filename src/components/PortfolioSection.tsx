'use client';

import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CountUp from 'react-countup';

const colorClasses = {
  green: {
    border: 'border-green-500/50 md:border-none',
    bg: 'from-green-900/10',
    text: 'text-green-300',
    statBg: 'bg-green-900/30',
    statText: 'text-green-300',
    highlight: 'text-green-400'
  },
  blue: {
    border: 'border-blue-500/50 md:border-none',
    bg: 'from-blue-900/10',
    text: 'text-blue-300',
    statBg: 'bg-blue-900/30',
    statText: 'text-blue-300',
    highlight: 'text-blue-400'
  },
  purple: {
    border: 'border-purple-500/50 md:border-none',
    bg: 'from-purple-900/10',
    text: 'text-purple-300',
    statBg: 'bg-purple-900/30',
    statText: 'text-purple-300',
    highlight: 'text-purple-400'
  },
  indigo: {
    border: 'border-indigo-500/50 md:border-none',
    bg: 'from-indigo-900/10',
    text: 'text-indigo-300',
    statBg: 'bg-indigo-900/30',
    statText: 'text-indigo-300',
    highlight: 'text-indigo-400'
  },
  pink: {
    border: 'border-pink-500/50 md:border-none',
    bg: 'from-pink-900/10',
    text: 'text-pink-300',
    statBg: 'bg-pink-900/30',
    statText: 'text-pink-300',
    highlight: 'text-pink-400'
  },
  emerald: {
    border: 'border-emerald-500/50 md:border-none',
    bg: 'from-emerald-900/10',
    text: 'text-emerald-300',
    statBg: 'bg-emerald-900/30',
    statText: 'text-emerald-300',
    highlight: 'text-emerald-400'
  }
};

function StatsRow() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`mt-20 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ${
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
            {isVisible && <CountUp end={23} duration={4} />}
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

export default function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section id="portafolio" className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Nuestros resultados hablan por sí mismos
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">$51,000,000+ generados</strong> por nuestros clientes. Ecosistemas digitales que transforman ideas en éxito real
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            const isEven = index % 2 === 0;

            const ProjectCard = () => {
              const { ref, isVisible } = useScrollAnimation(0.15);
              
              return (
                <Link 
                  key={project.id}
                  href={`/proyectos/${project.id}`}
                  className="block"
                >
                  <div 
                    ref={ref}
                    className={`group relative bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-3xl p-6 lg:p-10 hover:border-opacity-80 hover:scale-[1.02] transition-all duration-1000 overflow-visible ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-20 scale-95'
                    }`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={`${!isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6 relative z-10`}>
                        <div className={`flex items-center gap-4 transition-all duration-700 delay-100 ${
                          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                        }`}>
                          <div className={`${project.id === 'poramoralcampo' ? 'bg-white p-2 rounded-2xl' : ''}`}>
                            <Image 
                              src={project.logo} 
                              alt={`${project.name} Logo`}
                              width={70} 
                              height={70} 
                              className="rounded-xl"
                            />
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-white mb-1">{project.name}</h3>
                            <p className={`${colors.text} font-medium text-lg`}>{project.tagline}</p>
                          </div>
                        </div>
                        
                        <p className={`text-gray-300 text-lg leading-relaxed transition-all duration-700 delay-200 ${
                          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                        }`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.stats.map((stat, statIndex) => (
                            <div 
                              key={stat.label} 
                              className={`bg-black/40 border ${colors.border} px-5 py-3 rounded-xl transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                              }`}
                              style={{ transitionDelay: `${300 + statIndex * 100}ms` }}
                            >
                              <span className={`${colors.highlight} font-bold text-base`}>
                                {stat.value}
                              </span>
                              <span className="text-gray-400 text-sm ml-2">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Images - Desbordándose del card */}
                      <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                        {/* Desktop/Laptop image */}
                        <div className={`relative group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 delay-100 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                        }`}>
                          <div className="relative h-64 md:h-96 overflow-visible">
                            <Image 
                              src={project.mainImage} 
                              alt={project.name}
                              fill
                              className="object-contain drop-shadow-[0_20px_50px_RGBA(0,0,0,0.5)] group-hover:drop-shadow-[0_25px_60px_RGBA(0,0,0,0.6)] transition-all duration-500"
                            />
                          </div>
                        </div>
                        
                        {/* Floating mobile image - desbordándose */}
                        {project.mobileImage && (
                          <div className={`absolute ${isEven ? '-right-8 md:-right-16 bottom-4 md:bottom-8' : '-left-8 md:-left-16 bottom-4 md:bottom-8'} ${project.id === 'mercado-app' ? 'w-40 md:w-56' : 'w-28 md:w-40'} z-20 group-hover:scale-110 group-hover:-translate-y-4 group-hover:${isEven ? 'rotate-6' : '-rotate-6'} transition-all duration-700 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0 rotate-0' : `opacity-0 translate-y-10 ${isEven ? '-rotate-12' : 'rotate-12'}`
                          }`}>
                            <div className={`relative ${project.id === 'mercado-app' ? 'h-56 md:h-80' : 'h-40 md:h-64'}`}>
                              <Image 
                                src={project.mobileImage} 
                                alt={`${project.name} Mobile`}
                                fill
                                className="object-contain drop-shadow-[0_20px_40px_RGBA(0,0,0,0.7)]"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Botón al final del card */}
                    <div className={`mt-8 relative z-10 transition-all duration-700 delay-400 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                      <Link 
                        href={`/proyectos/${project.id}`}
                        className={`inline-flex items-center ${colors.highlight} hover:underline font-bold text-lg group-hover:translate-x-2 transition-transform`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver proyecto completo
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            };
            
            return <ProjectCard key={project.id} />;
          })}
        </div>

        {/* Stats Row */}
        <StatsRow />
      </div>
    </section>
  );
}
