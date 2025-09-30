'use client';

import Image from "next/image";
import ProjectForm from "../components/ProjectForm";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full text-white">
      {/* Hero + Form Section Integrada */}
      <section className="relative py-5 tablet:py-0 tablet:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(168,85,247,0.1)_60deg,_transparent_120deg)] animate-spin-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:py-16 w-full">
          <div className="grid lg:grid-cols-1 items-center">
            {/* Hero Content */}
            
            {/* Formulario */}
            <div className="w-full">
              <ProjectForm />
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito - Integrado */}
      <section id="casos" className="relative tablet:py-20 pb-10">
        {/* Fondo integrado */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-0 pt-16 tablet:pb-16 overflow-visible">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Tecnología que genera resultados
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Ecosistemas digitales completos que <strong className="text-white">transforman ideas en negocios millonarios</strong>.
            </p>
          </div>
          
          <div className="flex flex-col space-y-5 tablet:space-y-16">
            {/* RILSA Project */}
            <div className="order-3 mt-5 tablet:mt-0 md:order-1 group bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/50 md:border-none md:bg-none rounded-3xl md:rounded-none p-6 lg:p-8 ">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Texto - Siempre primero en móvil */}
                <div className="order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <Image 
                      src="/rilsa-logo.webp" 
                      alt="RILSA Logo" 
                      width={60} 
                      height={60} 
                      className="rounded-xl"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">RILSA</h3>
                      <p className="text-purple-300 font-medium">Sistema de gestión empresarial</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Automatizamos sus procesos de cotización de <strong className="text-purple-400">+10 horas a 5 minutos</strong>. 
                    Sistema completo para gestionar <strong className="text-purple-400">+100,000 productos</strong> con algoritmos inteligentes.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                      <span className="text-purple-300 font-semibold text-sm">90% Automatización</span>
                    </div>
                    <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                      <span className="text-purple-300 font-semibold text-sm">+3,000 hrs ahorradas</span>
                    </div>
                  </div>
                </div>
                {/* Imágenes - Segundo en móvil */}
                <div className="order-2 relative">
                  <Image 
                    src="/rilsa-web-laptop-1.png" 
                    alt="RILSA Web System" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Móvil flotando encima */}
                  <div className="absolute -bottom-3 right-8 z-10 transform transition-all duration-700 group-hover:rotate-2 group-hover:scale-[1.15] group-hover:-translate-y-5">
                    <Image 
                      src="/rilsa-web-movil-1.png" 
                      alt="RILSA Mobile" 
                      width={160} 
                      height={322} 
                      className="rounded-xl drop-shadow-2xl w-[112px] h-[225px] md:w-[160px] md:h-[322px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mercado Web Project */}
            <a href="https://www.mercadoalamano.com" target="_blank" rel="noopener noreferrer" className="block order-1 md:order-2">
              <div className="group bg-gradient-to-br -mt-10 tablet:mt-0 from-green-900/10 to-transparent md:bg-none rounded-3xl md:rounded-none p-6 lg:p-8 border border-green-500/50 md:border-none cursor-pointer hover:bg-green-900/20 transition-colors duration-300">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Texto - Primero en móvil, segundo en desktop */}
                  <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <Image 
                      src="/mercado-logo.svg" 
                      alt="Mercado Logo" 
                      width={150} 
                      height={80} 
                      className="rounded-xl bg-white/10 p-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Mercado a la Mano</h3>
                      <p className="text-green-300 font-medium">Plataforma E-commerce</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    De una simple idea a <strong className="text-green-400">$1M+ en ventas mensuales</strong>. 
                    Plataforma completa de e-commerce con sistema administrativo integrado y experiencia de usuario optimizada.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-green-900/30 px-4 py-2 rounded-lg">
                      <span className="text-green-300 font-semibold text-sm">+400% Ventas</span>
                    </div>
                    <div className="bg-green-900/30 px-4 py-2 rounded-lg">
                      <span className="text-green-300 font-semibold text-sm">$1M+ Mensual</span>
                    </div>
                  </div>
                </div>
                {/* Imágenes - Segundo en móvil, primero en desktop */}
                <div className="order-2 lg:order-1 relative">
                  <Image 
                    src="/mercado-web-laptop-1.png" 
                    alt="Mercado Web Platform" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Móvil flotando encima */}
                  <div className="absolute bottom-0 laptop:bottom-2 right-4 z-10 transform transition-all duration-700 group-hover:-rotate-1 group-hover:scale-[1.15] group-hover:-translate-y-3">
                    <Image 
                      src="/mercado-web-movil-3.png" 
                      alt="Mercado Mobile Web" 
                      width={145} 
                      height={292} 
                      className="rounded-xl drop-shadow-2xl w-[95px] h-[191px] md:w-[145px] md:h-[292px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            </a>

            {/* Mercado App Project - Centered */}
            <div className="order-2 md:order-3 group bg-gradient-to-br from-blue-900/10 to-transparent md:bg-none rounded-3xl md:rounded-none p-6 lg:p-8 border border-blue-500/50 md:border-none max-w-4xl mx-auto">
              <div className="text-center mb-8 lg:mb-12">
                <div className="flex items-center gap-4 justify-center mb-6">
                  <Image 
                    src="/logo-app.png" 
                    alt="Mercado App Logo" 
                    width={90} 
                    height={90} 
                    className="rounded-xl"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Mercado App</h3>
                    <p className="text-blue-300 font-medium">Aplicación Móvil Nativa</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  Aplicación móvil nativa para <strong className="text-blue-400">iOS y Android</strong> que complementa 
                  perfectamente la plataforma web, ofreciendo una experiencia móvil optimizada.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <div className="bg-blue-900/30 px-4 py-2 rounded-lg">
                    <span className="text-blue-300 font-semibold text-sm">iOS & Android</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-8">
                <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                  <Image 
                    src="/mercado-app-2.webp" 
                    alt="Mercado Mobile App Screen 2" 
                    width={280} 
                    height={400} 
                    className="rounded-2xl mx-auto"
                  />
                </div>
                <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <Image 
                    src="/mercado-app-1.webp" 
                    alt="Mercado Mobile App Screen 1" 
                    width={280} 
                    height={400} 
                    className="rounded-2xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="tablet:mt-20 mt-10 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">$51M+</div>
                <div className="text-gray-300 text-sm font-medium">Generado por clientes</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">23</div>
                <div className="text-gray-300 text-sm font-medium">Proyectos exitosos</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm font-medium">Clientes satisfechos</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">5</div>
                <div className="text-gray-300 text-sm font-medium">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
