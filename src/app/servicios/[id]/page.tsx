import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import ProjectForm from '@/components/ProjectForm';
import { ServiceIconsLarge } from '@/components/ServiceIcons';
import TechCarousel from '@/components/TechCarousel';
import ExamplesCarousel from '@/components/ExamplesCarousel';

const allTechnologies = [
  'JavaScript',
  'TypeScript', 
  'React',
  'Next.js',
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

// Tecnologías filtradas por servicio
const serviceTechnologies: Record<string, string[]> = {
  web: allTechnologies.filter(tech => 
    !['React Native', 'Swift', 'Kotlin', 'TensorFlow', 'OpenAI', 'WhatsApp API', 'AWS Lambda'].includes(tech)
  ),
  apps: ['React Native', 'TypeScript', 'JavaScript', 'Firebase', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Git', 'GitHub'],
  sistemas: ['Python', 'Django', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'AWS', 'Git', 'GitHub', 'HTML', 'CSS', 'Tailwind CSS'],
  ai: ['OpenAI', 'GPT-4', 'Claude', 'Anthropic', 'Gemini', 'Midjourney', 'DALL-E', 'Stable Diffusion', 'Hugging Face', 'LangChain', 'TensorFlow', 'PyTorch']
};

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-4 pb-20 md:pt-8 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image - Behind everything */}
        {params.id === 'web' && (
          <div className="absolute inset-0 z-0">
            <Image 
              src="/codigo-pantalla.png"
              alt="Background code"
              fill
              className="object-cover opacity-60 scale-110 animate-[scale_20s_ease-in-out_infinite]"
              priority
            />
          </div>
        )}
        {params.id === 'sistemas' && (
          <div className="absolute inset-0 z-0">
            <Image 
              src="/background-image-systems.png"
              alt="Background systems"
              fill
              className="object-cover opacity-15 scale-110 animate-[scale_20s_ease-in-out_infinite]"
              priority
            />
          </div>
        )}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Overlays on top of image */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-purple-900/70 via-blue-900/60 to-black/90"></div>
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-[3] opacity-10" style={{backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Link 
            href="/#servicios"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-12 transition-all hover:gap-3 gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a servicios
          </Link>

          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-10 flex justify-center relative">
              <div className="absolute inset-0 blur-3xl opacity-50 animate-pulse">
                {ServiceIconsLarge[params.id as keyof typeof ServiceIconsLarge]}
              </div>
              <div className="relative drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] transform hover:scale-110 transition-transform duration-500">
                {ServiceIconsLarge[params.id as keyof typeof ServiceIconsLarge]}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight animate-fade-in">
              {service.title}
            </h1>
            
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600/30 border-2 border-purple-400 rounded-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <svg className="w-6 h-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-xl md:text-2xl text-purple-200 font-bold">
                {service.subtitle}
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
              {service.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                Iniciar Proyecto
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#casos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg transition-all hover:scale-105"
              >
                Ver Casos de Éxito
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section - Visual Showcase */}
      <section className="relative py-10 md:py-24 bg-black overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-bold mb-6">
              NUESTRO TRABAJO
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Así es como trabajamos
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Diseño, desarrollo y resultados de clase mundial
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large feature card with image */}
            <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl">
              <div className="relative h-full min-h-[350px] md:min-h-[450px] lg:min-h-[600px] flex flex-col">
                {/* Background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500"></div>
                
                {/* Image showcase - Desbordada completamente */}
                <div className="relative flex-1 -mt-8 md:-mt-12 pt-8 md:pt-12 flex items-start justify-center">
                  <div className="relative w-full h-[280px] md:h-[400px] lg:h-[500px] scale-105 md:scale-110 group-hover:scale-110 md:group-hover:scale-[1.15] transition-transform duration-700">
                    <Image
                      src={params.id === 'web' ? '/mercado-landing-1.webp' : params.id === 'apps' ? '/mercado-app-1.webp' : '/rilsa-web-laptop-1.png'}
                      alt="Proyecto showcase"
                      fill
                      className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] md:drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Content overlay */}
                <div className="relative p-6 md:p-8 bg-slate-900/95 backdrop-blur-sm rounded-b-3xl border-t border-white/5 z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4 text-white leading-tight">
                    {service.features[0]}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg">
                    {service.features[0] === 'Diseño responsive y moderno' && 'Se ve perfecto en celular, tablet y computadora'}
                    {service.features[0] === 'Desarrollo nativo para iOS y Android' && 'Tu app funciona perfecta en iPhone y Android'}
                    {service.features[0] === 'Automatización de procesos' && 'El sistema hace el trabajo repetitivo por ti'}
                    {service.features[0] === 'Chatbots inteligentes 24/7' && 'Un asistente virtual que atiende a tus clientes día y noche'}
                    {!['Diseño responsive y moderno', 'Desarrollo nativo para iOS y Android', 'Automatización de procesos', 'Chatbots inteligentes 24/7'].includes(service.features[0]) && 'Cada proyecto está diseñado para destacar y generar resultados'}
                  </p>
                </div>
              </div>
            </div>

            {/* Smaller feature cards */}
            {service.features.slice(1, 5).map((feature, index) => {
              // Descripciones simples para cada característica
              const featureDescriptions: Record<string, string> = {
                'Optimización SEO avanzada': 'Aparece en los primeros resultados cuando te buscan en Google',
                'Velocidad de carga ultra rápida': 'Carga súper rápido, sin tiempos de espera molestos',
                'Integración con sistemas de pago': 'Tus clientes pueden pagar fácilmente con tarjeta o transferencia',
                'Panel administrativo intuitivo': 'Controla todo desde un panel fácil de usar, sin complicaciones',
                'Análisis y reportes en tiempo real': 'Ve al instante cuántas personas visitan tu sitio y qué hacen',
                'Diseño responsive y moderno': 'Se ve perfecto en celular, tablet y computadora',
                // Apps
                'Desarrollo nativo para iOS y Android': 'Tu app funciona perfecta en iPhone y Android',
                'Experiencia de usuario fluida': 'Tus usuarios navegan sin problemas ni confusiones',
                'Integración con hardware del dispositivo': 'Usa la cámara, GPS y notificaciones del celular',
                'Notificaciones push segmentadas e inteligentes': 'Envía mensajes directos a tus clientes en su celular',
                // Sistemas
                'Automatización de procesos': 'El sistema hace el trabajo repetitivo por ti',
                'Gestión de inventarios inteligente': 'Controla tus productos y nunca te quedes sin stock',
                'Sistema de roles y permisos': 'Cada persona ve solo lo que necesita para su trabajo',
                'Reportes y analytics avanzados': 'Gráficas claras que te ayudan a tomar mejores decisiones',
                // AI
                'Chatbots inteligentes 24/7': 'Un asistente virtual que atiende a tus clientes día y noche',
                'Automatización de WhatsApp Business': 'Responde automáticamente mensajes de WhatsApp',
                'Procesamiento de lenguaje natural': 'Entiende lo que tus clientes escriben y responde correctamente',
                'Análisis predictivo de datos': 'Predice qué va a pasar con tu negocio antes de que suceda'
              };

              // Iconos específicos para cada característica
              const getFeatureIcon = (featureName: string) => {
                const icons: Record<string, JSX.Element> = {
                  // Web
                  'Optimización SEO avanzada': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  ),
                  'Velocidad de carga ultra rápida': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  ),
                  'Integración con sistemas de pago': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  ),
                  'Panel administrativo intuitivo': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  ),
                  'Análisis y reportes en tiempo real': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  ),
                  // Apps
                  'Desarrollo nativo para iOS y Android': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  ),
                  'Experiencia de usuario fluida': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  ),
                  'Integración con hardware del dispositivo': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  ),
                  'Notificaciones push segmentadas e inteligentes': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  ),
                  // Sistemas
                  'Automatización de procesos': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  ),
                  'Gestión de inventarios inteligente': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  ),
                  'Sistema de roles y permisos': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  ),
                  'Reportes y analytics avanzados': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  ),
                  // AI
                  'Chatbots inteligentes 24/7': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  ),
                  'Automatización de WhatsApp Business': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  ),
                  'Procesamiento de lenguaje natural': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  ),
                  'Análisis predictivo de datos': (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  )
                };
                
                return icons[featureName] || <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />;
              };

              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition-all duration-500 min-h-[180px] md:min-h-[220px] flex flex-col justify-between overflow-hidden"
                >
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {getFeatureIcon(feature)}
                      </svg>
                    </div>
                    
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-2 leading-tight">
                      {feature}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {featureDescriptions[feature] || 'Solución profesional diseñada para tu negocio'}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              );
            })}

            {/* Stats card if there are more features */}
            {service.features.length > 5 && (
              <div className="group relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 min-h-[180px] md:min-h-[220px] flex flex-col justify-center text-center overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {service.features.length}+
                  </div>
                  <p className="text-purple-300 font-semibold text-sm md:text-base">
                    Características incluidas
                  </p>
                </div>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section - Rediseño UI/UX */}
      <section className="relative pt-12 md:py-24 bg-black overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)', backgroundSize: '100px 100px'}}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-bold mb-6">
              METODOLOGÍA
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nuestro Proceso
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              5 pasos simples que garantizan tu éxito
            </p>
          </div>
          
          {/* Process Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {service.process.map((step, index) => {
              const isDesignStep = step.step === 'Diseño' || step.step === 'UI/UX';
              
              // Descripciones simples para cada paso del proceso
              const processDescriptions: Record<string, Record<string, string>> = {
                // Web
                'Análisis': {
                  web: 'Platicamos contigo para entender qué necesitas y quiénes visitarán tu sitio',
                  apps: 'Conocemos tu idea y qué quieres que haga tu app',
                  sistemas: 'Vemos cómo trabajas ahora para saber qué podemos mejorar',
                  ai: 'Descubrimos qué tareas repetitivas podemos automatizar con IA'
                },
                'Diseño UI/UX': {
                  web: 'Hacemos bocetos de cómo se verá tu sitio antes de programarlo',
                  apps: 'Dibujamos las pantallas y botones de tu app',
                  sistemas: 'Planeamos cómo se verá y funcionará tu sistema',
                  ai: 'Creamos los mensajes y respuestas que dará el asistente virtual'
                },
                'UI/UX': {
                  apps: 'Hacemos que tu app se vea bonita y sea fácil de usar',
                  default: 'Diseñamos para que sea fácil e intuitivo de usar'
                },
                'Desarrollo': {
                  web: 'Programamos tu sitio web con las mejores herramientas',
                  apps: 'Construimos tu app para que funcione en todos los celulares',
                  sistemas: 'Creamos tu sistema parte por parte, probando cada pedazo',
                  ai: 'Entrenamos la inteligencia artificial con tu información'
                },
                'Discovery': {
                  apps: 'Platicamos para saber todas las funciones que tendrá tu app',
                  default: 'Exploramos todas las posibilidades de tu proyecto'
                },
                'Pruebas': {
                  web: 'Probamos que todo funcione bien en celular, tablet y computadora',
                  apps: 'Probamos tu app en muchos celulares diferentes',
                  sistemas: 'Nos aseguramos que todo funcione sin errores',
                  ai: 'Verificamos que la IA responda correctamente'
                },
                'Testing': {
                  apps: 'Probamos tu app en diferentes celulares para que funcione perfecta',
                  default: 'Revisamos que todo funcione sin problemas'
                },
                'Lanzamiento': {
                  web: 'Ponemos tu sitio en internet para que todos lo vean',
                  apps: 'Subimos tu app a las tiendas de iPhone y Android',
                  sistemas: 'Activamos tu sistema y capacitamos a tu equipo',
                  ai: 'Ponemos tu asistente virtual a trabajar'
                },
                'App Store': {
                  apps: 'Publicamos tu app para que la gente la pueda descargar',
                  default: 'Lanzamos tu producto al público'
                },
                'Mapeo': {
                  sistemas: 'Escribimos todos los pasos de cómo trabajas ahora',
                  default: 'Documentamos todos tus procesos actuales'
                },
                'Migración': {
                  sistemas: 'Pasamos toda tu información antigua al sistema nuevo con cuidado',
                  default: 'Movemos tu información al nuevo sistema'
                },
                'Capacitación': {
                  sistemas: 'Le enseñamos a tu equipo cómo usar el sistema nuevo',
                  default: 'Entrenamos a tu equipo para que domine el sistema'
                },
                'Integración': {
                  ai: 'Conectamos la IA con tus sistemas actuales',
                  default: 'Conectamos todo con tus sistemas existentes'
                },
                'Optimización': {
                  ai: 'Mejoramos la IA cada día para que sea más inteligente',
                  default: 'Mejoramos continuamente con datos reales'
                },
                'Entrenamiento': {
                  ai: 'Le enseñamos a la IA sobre tu negocio para que responda bien',
                  default: 'Configuramos y entrenamos los modelos de IA'
                }
              };

              const getDescription = (stepName: string) => {
                const descriptions = processDescriptions[stepName];
                if (!descriptions) return 'Te guiamos paso a paso en este proceso';
                return descriptions[params.id] || descriptions.default || 'Te guiamos paso a paso en este proceso';
              };

              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-cyan-500/20 hover:border-cyan-500/50 hover:scale-105 transition-all duration-500 overflow-visible opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards'}}
                >
                  {/* Free Design Badge - Solo para paso de diseño */}
                  {isDesignStep && (
                    <div className="absolute -top-6 -right-6 z-30">
                      <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full shadow-2xl transform rotate-12 animate-pulse border-2 border-green-400">
                        <div className="text-sm font-black tracking-wide">GRATIS</div>
                        <div className="text-xs font-bold -mt-0.5">Ahorra $25,000</div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-green-400/40 rounded-full blur-lg -z-10"></div>
                      </div>
                    </div>
                  )}

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-cyan-300 font-black text-lg">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />}
                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />}
                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                        {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-black mb-3 text-white">
                      {isDesignStep ? 'Diseño UI/UX' : step.step}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {getDescription(step.step)}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-teal-600/0 group-hover:from-cyan-600/5 group-hover:to-teal-600/5 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}

            {/* CTA Card - Posición 6 */}
            <div
              className="group relative bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-purple-900/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-purple-500/50 hover:border-purple-400/80 hover:scale-105 transition-all duration-500 overflow-hidden opacity-0 animate-fade-in flex flex-col justify-center items-center text-center min-h-[250px]"
              style={{animationDelay: `${service.process.length * 0.2}s`, animationFillMode: 'forwards'}}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  ¿Listo para empezar?
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Cotiza tu proyecto ahora y recibe una propuesta personalizada
                </p>
                
                <a 
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-bold text-white transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                >
                  Cotiza tu {service.title.toLowerCase()}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-10 md:py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-7 md:mb-12">
            Tecnologías que usamos
          </h2>
          <TechCarousel 
            technologies={serviceTechnologies[params.id] || service.technologies} 
            speed="normal" 
          />
        </div>
      </section>

      {/* Examples Section */}
      {service.examples.length > 0 && (
        <section id="casos" className="relative pt-7 md:py-24 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center pb-8 md:mb-16">
              <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-bold mb-6">
                CASOS DE ÉXITO
              </span>
              <h2 className="text-4xl md:text-5xl pb-1 font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Proyectos que transformaron negocios
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto -mt-2">
                Conoce cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos
              </p>
            </div>
            <ExamplesCarousel examples={service.examples} serviceId={params.id} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contacto" className="relative pt-12 pb-4 md:py-24 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-bold mb-6">
              COMIENZA TU PROYECTO
            </span>
            <h2 className="text-4xl md:text-6xl pb-2 font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed -mt-3">
              Cuéntanos tu proyecto y te ayudaremos a convertirlo en realidad. <strong className="text-white">Sin compromiso</strong>, solo grandes ideas.
            </p>
          </div>
          
          {/* Form container with glow effect */}
          <div className="relative max-w-3xl mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20"></div>
            
            {/* Form */}
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-3xl">
              <ProjectForm defaultInterest={service.title} />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>100% Confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
