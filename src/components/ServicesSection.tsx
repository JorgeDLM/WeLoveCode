'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ServiceIcons } from './ServiceIcons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    id: 'web',
    title: 'Desarrollo Web Profesional',
    description: 'Diseño de páginas web profesionales en Puebla, Mérida y Querétaro. Sitios web modernos, rápidos y optimizados para SEO',
    image: '/client-laptop-1.png',
    result: '$1M+ en ventas mensuales'
  },
  {
    id: 'apps',
    title: 'Desarrollo de Apps iOS y Android',
    description: 'Desarrollo de aplicaciones móviles nativas para iOS y Android. Apps profesionales con experiencia de usuario excepcional',
    image: '/mercado-app-1.webp',
    result: 'iOS & Android'
  },
  {
    id: 'sistemas',
    title: 'Desarrollo de CRM y Sistemas Empresariales',
    description: 'Desarrollo de CRM. Software a medida que automatiza y optimiza tus procesos empresariales',
    image: '/mercado-web-laptop-1.png',
    result: '90% de automatización'
  },
  {
    id: 'ai',
    title: 'Automatización con Inteligencia Artificial',
    description: 'Soluciones de inteligencia artificial para empresas. Automatizaciones inteligentes que potencian tu negocio',
    image: '/rilsa-web-laptop-1.png',
    result: 'Respuestas automáticas 24/7'
  }
];

export default function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section id="servicios" className="relative py-20 bg-gradient-to-b from-slate-900 via-black to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Soluciones tecnológicas completas para impulsar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const ServiceCard = () => {
              const { ref, isVisible } = useScrollAnimation(0.1);
              
              return (
                <div 
                  ref={ref}
                  key={service.id}
                  className={`group relative bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 hover:scale-105 hover:-rotate-1 transition-all duration-700 overflow-visible ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-20 scale-90 -rotate-3'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
              {/* Icon */}
              <div className={`mb-6 relative group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
              }`}
              style={{ transitionDelay: `${index * 150 + 100}ms` }}
              >
                {ServiceIcons[service.id as keyof typeof ServiceIcons]}
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl">
                  {ServiceIcons[service.id as keyof typeof ServiceIcons]}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold text-white mb-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >{service.title}</h3>
                <p className={`text-gray-400 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >{service.description}</p>
                
                {/* Result Badge */}
                <div className={`inline-block bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 px-4 py-2 rounded-full mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  <span className="text-green-400 font-semibold text-sm">✓ {service.result}</span>
                </div>

                <div className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  <Link 
                    href={`/servicios/${service.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    Ver más detalles
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Floating Image - positioned absolutely to overflow, in front */}
              <div className={`absolute z-20 ${(index === 0) ? '-right-12 -bottom-8 -rotate-6' : index === 2 ? '-right-10 -bottom-8 rotate-6' : '-right-8 -bottom-12 -rotate-6'} w-48 h-48 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 pointer-events-none ${
                isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
              );
            };
            
            return <ServiceCard key={service.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
