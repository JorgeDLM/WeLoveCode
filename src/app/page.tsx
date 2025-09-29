'use client';

import Image from "next/image";
import ProjectForm from "../components/ProjectForm";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full text-white">
      {/* Hero + Form Section Integrada */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(168,85,247,0.1)_60deg,_transparent_120deg)] animate-spin-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              {/* App Icon */}
              <div className="justify-center lg:justify-start animate-fade-in-up sm:hidden flex mb-6">
                <div className="relative">
                  <Image 
                    src="/icono-welovecode.png" 
                    alt="WeLoveCode App Icon" 
                    width={120} 
                    height={120} 
                    className="hover:scale-110 transition-transform duration-300 p-4"
                    priority
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-green-500/30 blur-xl opacity-60 animate-pulse -z-10"></div>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.95] bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up mb-6">
                <span className="block">Convertimos tus ideas en</span>
                <span className="text-green-400 animate-pulse drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">negocios de $1M+</span>
              </h1>
              
              <div className="relative mb-6">
                <p className="text-lg md:text-xl lg:text-2xl text-purple-200 font-semibold animate-fade-in-up animation-delay-200 tracking-tight">
                  Creamos webs, apps y sistemas que escalan contigo.
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/15 to-blue-600/15 blur-lg rounded-full opacity-40"></div>
              </div>
              
              <div className="relative inline-block mb-8">
                <p className="text-md md:text-lg lg:text-xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-300 font-medium">
                  Ya generamos <strong className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">+$50 millones</strong> para <strong className="text-white">nuestros clientes</strong>.
                </p>
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
              </div>
            </div>
            
            {/* Formulario */}
            <div className="w-full">
              <ProjectForm />
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito - Minimalista */}
      <section id="casos" className="bg-black/20 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 overflow-visible">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Proyectos que generan resultados
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Así se ven nuestras soluciones en acción. <strong className="text-white">Ecosistemas digitales completos</strong> que transforman ideas en negocios millonarios.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* RILSA Project */}
            <div className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
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
                  <div className="flex gap-4">
                    <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                      <span className="text-purple-300 font-semibold">90% Automatización</span>
                    </div>
                    <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                      <span className="text-purple-300 font-semibold">+3,000 hrs ahorradas</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <Image 
                    src="/rilsa-web-laptop-1.png" 
                    alt="RILSA Web System" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Móvil flotando encima */}
                  <div className="absolute -bottom-5 right-10 z-10 transform transition-all duration-700 group-hover:rotate-2 group-hover:scale-[1.15] group-hover:-translate-y-5">
                    <Image 
                      src="/rilsa-web-movil-1.png" 
                      alt="RILSA Mobile" 
                      width={130} 
                      height={360} 
                      className="rounded-xl drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mercado Web Project */}
            <div className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image 
                    src="/mercado-web-laptop-1.png" 
                    alt="Mercado Web Platform" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Móvil flotando encima */}
                  <div className="absolute bottom-0 right-6 z-10 transform transition-all duration-700 group-hover:-rotate-1 group-hover:scale-[1.15] group-hover:-translate-y-3">
                    <Image 
                      src="/mercado-web-movil-3.png" 
                      alt="Mercado Mobile Web" 
                      width={120} 
                      height={160} 
                      className="rounded-xl drop-shadow-2xl"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image 
                      src="/mercado-logo.svg" 
                      alt="Mercado Logo" 
                      width={80} 
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
                  <div className="flex gap-4">
                    <div className="bg-green-900/30 px-4 py-2 rounded-lg">
                      <span className="text-green-300 font-semibold">+400% Ventas</span>
                    </div>
                    <div className="bg-green-900/30 px-4 py-2 rounded-lg">
                      <span className="text-green-300 font-semibold">$1M+ Mensual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mercado App Project - Centered */}
            <div className="group max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center gap-4 justify-center mb-6">
                  <Image 
                    src="/logo-app.png" 
                    alt="Mercado App Logo" 
                    width={60} 
                    height={60} 
                    className="rounded-xl"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Mercado App</h3>
                    <p className="text-blue-300 font-medium">Aplicación Móvil Nativa</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  Aplicación móvil nativa para <strong className="text-blue-400">iOS y Android</strong> que complementa 
                  perfectamente la plataforma web, ofreciendo una experiencia móvil optimizada para los usuarios.
                </p>
              </div>
              
              <div className="flex justify-center gap-8">
                <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                  <Image 
                    src="/mercado-app-2.webp" 
                    alt="Mercado Mobile App Screen 2" 
                    width={300} 
                    height={400} 
                    className="rounded-2xl"
                  />
                </div>
                <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <Image 
                    src="/mercado-app-1.webp" 
                    alt="Mercado Mobile App Screen 1" 
                    width={300} 
                    height={400} 
                    className="rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="text-center mt-8">
                <div className="inline-flex gap-4">
                  <div className="bg-blue-900/30 px-4 py-2 rounded-lg">
                    <span className="text-blue-300 font-semibold">iOS & Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
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
