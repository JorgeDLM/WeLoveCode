import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const colorClasses = {
  green: {
    gradient: 'from-green-900/60 via-blue-900/40',
    border: 'border-green-500/50',
    text: 'text-green-400',
    bg: 'from-green-900/20'
  },
  blue: {
    gradient: 'from-blue-900/60 via-purple-900/40',
    border: 'border-blue-500/50',
    text: 'text-blue-400',
    bg: 'from-blue-900/20'
  },
  purple: {
    gradient: 'from-purple-900/60 via-blue-900/40',
    border: 'border-purple-500/50',
    text: 'text-purple-400',
    bg: 'from-purple-900/20'
  },
  indigo: {
    gradient: 'from-indigo-900/60 via-purple-900/40',
    border: 'border-indigo-500/50',
    text: 'text-indigo-400',
    bg: 'from-indigo-900/20'
  },
  pink: {
    gradient: 'from-pink-900/60 via-purple-900/40',
    border: 'border-pink-500/50',
    text: 'text-pink-400',
    bg: 'from-pink-900/20'
  },
  emerald: {
    gradient: 'from-emerald-900/60 via-blue-900/40',
    border: 'border-emerald-500/50',
    text: 'text-emerald-400',
    bg: 'from-emerald-900/20'
  },
  cyan: {
    gradient: 'from-cyan-900/60 via-teal-900/40',
    border: 'border-cyan-500/50',
    text: 'text-cyan-400',
    bg: 'from-cyan-900/20'
  }
};

// Función para obtener el icono SVG según el contenido de la característica
function getFeatureIcon(feature: string, color: string) {
  const lowerFeature = feature.toLowerCase();
  
  if (lowerFeature.includes('catálogo') || lowerFeature.includes('productos')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
  }
  if (lowerFeature.includes('carrito') || lowerFeature.includes('compras')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
  }
  if (lowerFeature.includes('seguimiento') || lowerFeature.includes('tiempo real') || lowerFeature.includes('tracking')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
  }
  if (lowerFeature.includes('notificacion') || lowerFeature.includes('push') || lowerFeature.includes('alertas')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
  }
  if (lowerFeature.includes('pago') || lowerFeature.includes('pagos') || lowerFeature.includes('transferencia')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
  }
  if (lowerFeature.includes('dirección') || lowerFeature.includes('direcciones') || lowerFeature.includes('entrega')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
  }
  if (lowerFeature.includes('historial') || lowerFeature.includes('reorden')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  }
  if (lowerFeature.includes('favorito') || lowerFeature.includes('listas')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
  }
  if (lowerFeature.includes('offline') || lowerFeature.includes('sin conexión')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>;
  }
  if (lowerFeature.includes('chat') || lowerFeature.includes('soporte') || lowerFeature.includes('mensaj')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
  }
  if (lowerFeature.includes('dashboard') || lowerFeature.includes('panel') || lowerFeature.includes('analytics')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
  }
  if (lowerFeature.includes('inventario') || lowerFeature.includes('stock') || lowerFeature.includes('gestión')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
  }
  if (lowerFeature.includes('rutas') || lowerFeature.includes('logística') || lowerFeature.includes('optimiz')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>;
  }
  if (lowerFeature.includes('promo') || lowerFeature.includes('descuento') || lowerFeature.includes('oferta')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
  }
  if (lowerFeature.includes('proveedor') || lowerFeature.includes('proveedores')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
  }
  if (lowerFeature.includes('whatsapp') || lowerFeature.includes('integración')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
  }
  if (lowerFeature.includes('factura') || lowerFeature.includes('fiscal')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  }
  if (lowerFeature.includes('seo') || lowerFeature.includes('tráfico') || lowerFeature.includes('orgánico')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
  }
  if (lowerFeature.includes('referid') || lowerFeature.includes('invita')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
  }
  if (lowerFeature.includes('calidad') || lowerFeature.includes('devoluc')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  }
  if (lowerFeature.includes('reporte') || lowerFeature.includes('financier') || lowerFeature.includes('contable')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  }
  if (lowerFeature.includes('recurrent') || lowerFeature.includes('pedidos')) {
    return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
  }
  
  // Default icon
  return <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const colors = colorClasses[project.color as keyof typeof colorClasses];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className={`relative pt-4 pb-8 md:pt-8 md:pb-12 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-black/80`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Link 
            href="/proyectos"
            className={`inline-flex items-center ${colors.text} hover:opacity-80 mb-8 transition-all`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className={project.id === 'client' ? 'bg-white rounded-2xl p-4 shadow-2xl' : ''}>
              <Image 
                src={project.logoAlt || project.logo} 
                alt={`${project.name} Logo`}
                width={120} 
                height={120} 
                className="rounded-2xl"
              />
            </div>
            <div className='text-center md:text-left'>
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                {project.name === 'FidelityApp' ? (
                  <>
                    <span className="text-white">Fidelity</span>
                    <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">App</span>
                  </>
                ) : (
                  project.name
                )}
              </h1>
              <p className={`text-lg tablet:text-2xl ${colors.text} mb-4`}>{project.tagline}</p>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${colors.text} hover:underline font-semibold`}
                >
                  Visitar sitio web
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.stats.map((stat) => (
                  <div key={stat.label} className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} px-6 py-4 rounded-xl`}>
                    <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative ${project.id === 'client' ? 'max-w-xs mx-auto' : ''}`}>
              <Image 
                src={project.mainImage} 
                alt={project.name}
                width={600} 
                height={400} 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design Highlight */}
      <section className="relative py-12 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 border-2 border-purple-500/50 p-8 md:p-12">
            <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-black text-sm md:text-base animate-pulse shadow-lg">
              INCLUIDO GRATIS
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <svg className="w-20 h-20 md:w-24 md:h-24 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Diseño UI/UX Integral Profesional
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nos encargamos del <span className="text-purple-400 font-bold">diseño completo de la interfaz</span> y la experiencia de usuario. 
                  Cada pantalla, interacción y flujo fue diseñado desde cero por nuestro equipo para garantizar una 
                  <span className="text-blue-400 font-bold"> experiencia excepcional y moderna</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Lo que desarrollamos para {project.name === 'FidelityApp' ? (
                <>
                  <span className="text-white">Fidelity</span>
                  <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">App</span>
                </>
              ) : (
                project.name
              )}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              WeLoveCode diseñó y desarrolló una solución completa que transformó su visión en realidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 flex items-start gap-4`}
              >
                <div className={`${colors.text} flex-shrink-0 mt-1`}>
                  {getFeatureIcon(feature, colors.text)}
                </div>
                <p className="text-white font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative pb-8 md:pt-10 md:pb-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className={`bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} px-6 py-3 rounded-full hover:scale-105 transition-all`}
              >
                <span className={`font-semibold ${colors.text}`}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Galería del Proyecto
          </h2>
          
          {project.id === 'mercado-app' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Imagen grande principal */}
              <div className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 group">
                <Image 
                  src="/mercado-app-1.webp" 
                  alt="Mercado App - Pantalla principal"
                  fill
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Imagen móvil vertical */}
              <div className="relative h-[400px] md:h-[290px] overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-slate-900 group">
                <Image 
                  src="/mercado-app-8.png" 
                  alt="Mercado App - Vista móvil"
                  fill
                  className="object-contain p-5 group-hover:scale-110 transition-transform duration-700 -rotate-6"
                />
              </div>
              
              {/* Tercera imagen */}
              <div className="relative h-[400px] md:h-[290px] overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-800 to-purple-900/30 group">
                <Image 
                  src="/mercado-app-5.png" 
                  alt="Mercado App - Interfaz de usuario"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 rotate-6"
                />
              </div>
              
              {/* Cuarta imagen - laptop */}
              <div className="md:col-span-3 relative h-[320px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 group">
                <Image 
                  src="/mercado-web-laptop-1.png" 
                  alt="Mercado App - Versión web integrada"
                  fill
                  className="object-contain pt-2 px-2 pb-8 md:pt-6 md:px-6 md:pb-16 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md w-[300px] md:w-[400px] text-center md:text-2xl font-bold">Admin para gestionar App</span>
              </div>
            </div>
          ) : project.id === 'mercado-web' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sistema Admin - Grande */}
              <div className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 group">
                <Image 
                  src="/mercado-admin-1.webp" 
                  alt="Mercado a la Mano - Sistema Admin Central"
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white px-6 py-2 rounded-full text-sm md:text-lg font-bold backdrop-blur-sm">
                  Admin Plataforma
                </span>
              </div>
              
              {/* Sistema Cliente */}
              <div className="relative h-[400px] md:h-[290px] overflow-hidden rounded-3xl shadow-2xl flex flex-col items-center justify-center bg-gradient-to-br from-green-900/20 to-slate-900 group">
                <Image 
                  src="/mercado-cliente.webp" 
                  alt="Mercado a la Mano - Sistema de Clientes"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-sky-600/90  md:w-[200px] w-[170px] text-center text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold backdrop-blur-sm">
                  Sistema Clientes
                </span>
              </div>
              
              {/* Sistema Proveedor */}
              <div className="relative h-[400px] md:h-[290px] overflow-hidden rounded-3xl shadow-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-green-900/20 group">
                <Image 
                  src="/mercado-proveedor.webp" 
                  alt="Mercado a la Mano - Sistema de Proveedores"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:w-[200px] w-[170px] text-center bg-red-600/90 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold backdrop-blur-sm">
                  Sistema Proveedores
                </span>
              </div>
              
              {/* Sistema Admin - Dashboard */}
              <div className="md:col-span-3 relative h-[400px] overflow-hidden rounded-3xl shadow-2xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-green-900/20 group">
                <Image 
                  src="/mercado-admin-0.webp" 
                  alt="Mercado a la Mano - Dashboard Administrativo"
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-emerald-700/90  md:w-[400px] w-[170px] text-center text-white px-6 py-2 rounded-full text-sm md:text-lg font-bold backdrop-blur-sm">
                  Dashboard Global & Analytics
                </span>
              </div>
            </div>
          ) : project.gallery && project.gallery.length > 2 ? (
            // Galería completa para proyectos con múltiples imágenes
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 group ${
                    index === 0 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]' : 'h-[400px] md:h-[290px]'
                  }`}
                >
                  <Image 
                    src={image} 
                    alt={`${project.name} - Imagen ${index + 1}`}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 group">
                <Image 
                  src={project.mainImage} 
                  alt={`${project.name} - Vista principal`}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {project.mobileImage && (
                <div className={`relative h-96 rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 group ${project.id === 'client' ? 'overflow-visible' : 'overflow-hidden'}`}>
                  <Image 
                    src={project.mobileImage} 
                    alt={`${project.name} - Vista móvil`}
                    width={280}
                    height={560}
                    className={`group-hover:scale-110 transition-transform duration-700 ${project.id === 'client' ? 'object-cover h-[500px] w-auto' : 'object-contain'}`}
                  />
                </div>
              )}
              {project.gallery && project.gallery[1] && (
                <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 group">
                  <Image 
                    src={project.gallery[1]} 
                    alt={`${project.name} - Vista adicional`}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Quieres un proyecto como este?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Podemos crear algo similar o mejor para tu negocio
          </p>
          <Link 
            href="/#contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Cotizar mi proyecto
          </Link>
        </div>
      </section>
    </main>
  );
}
