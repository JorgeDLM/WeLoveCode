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
      <section className="relative pt-4 pb-8 md:pt-8 md:pb-12 overflow-hidden">
        {/* Background Image - Behind everything */}
        {params.id === 'web' && (
          <div className="absolute inset-0 z-0">
            <Image 
              src="/codigo-pantalla.png"
              alt="Background code"
              fill
              className="object-cover opacity-20"
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
              className="object-cover opacity-15"
              priority
            />
          </div>
        )}
        
        {/* Overlays on top of image */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-purple-900/70 via-blue-900/60 to-black/90"></div>
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Link 
            href="/#servicios"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a servicios
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              {ServiceIconsLarge[params.id as keyof typeof ServiceIconsLarge]}
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">{service.title}</h1>
            <p className="text-2xl text-purple-300 mb-8">{service.subtitle}</p>
            <p className="text-xl text-gray-300 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              ¿Qué incluye este servicio?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Todo lo que necesitas para tener un producto digital de clase mundial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-2xl p-5 hover:border-purple-500/60 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-cyan-500 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un flujo de trabajo optimizado que garantiza resultados excepcionales
            </p>
          </div>
          
          <div className="relative">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div 
                  key={index}
                  className="relative"
                >
                  <div className="flex gap-6 items-start group">
                    {/* Animated number circle with connecting line */}
                    <div className="relative flex-shrink-0 z-10">
                      {/* Vertical line BEFORE circle (connects to previous) */}
                      {index > 0 && (
                        <div className="absolute left-1/2 bottom-full w-0.5 h-[calc(2rem+32px)] -translate-x-1/2 overflow-hidden">
                          {/* Base gradient line */}
                          <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-blue-600"></div>
                          {/* Static glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-blue-400 blur-[2px] opacity-40"></div>
                          {/* Flowing energy glow */}
                          <div 
                            className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-white to-transparent blur-md opacity-80 animate-energy-flow"
                            style={{ animationDelay: `${index * 0.6}s` }}
                          ></div>
                          {/* Bright center pulse */}
                          <div 
                            className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-cyan-300 to-transparent blur-sm animate-energy-flow"
                            style={{ animationDelay: `${index * 0.6 + 0.1}s` }}
                          ></div>
                        </div>
                      )}
                      
                      {/* Number circle */}
                      <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-xl font-black shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-all duration-300">
                        <span className="relative z-10">{index + 1}</span>
                        {/* Animated ring pulse */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                        {/* Static glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-xl opacity-60"></div>
                      </div>
                      
                      {/* Vertical line AFTER circle (connects to next) */}
                      {index < service.process.length - 1 && (
                        <div className="absolute left-1/2 top-full w-0.5 h-[calc(2rem+32px)] -translate-x-1/2 overflow-hidden">
                          {/* Base gradient line */}
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-cyan-500 to-cyan-600"></div>
                          {/* Static glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-cyan-400 blur-[2px] opacity-40"></div>
                          {/* Flowing energy glow */}
                          <div 
                            className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-white to-transparent blur-md opacity-80 animate-energy-flow"
                            style={{ animationDelay: `${index * 0.6}s` }}
                          ></div>
                          {/* Bright center pulse */}
                          <div 
                            className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-cyan-300 to-transparent blur-sm animate-energy-flow"
                            style={{ animationDelay: `${index * 0.6 + 0.1}s` }}
                          ></div>
                        </div>
                      )}
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-transparent border border-white/10 rounded-2xl p-6 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                      <h3 className="text-xl font-black mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        {step.step}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final destination badge */}
            <div className="mt-8 flex justify-center">
              <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border-2 border-green-500/50 rounded-full px-8 py-4 shadow-lg">
                <svg className="w-8 h-8 text-green-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-black text-white">¡Proyecto Exitoso!</span>
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
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
        <section className="relative py-20 bg-gradient-to-b from-black to-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              Casos de Éxito
            </h2>
            <ExamplesCarousel examples={service.examples} serviceId={params.id} />
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Beneficios para tu negocio
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/30 rounded-xl p-6"
              >
                <div className="text-green-400 text-2xl">✓</div>
                <p className="text-white text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cuéntanos tu proyecto y te ayudaremos a convertirlo en realidad
            </p>
          </div>
          
          <ProjectForm defaultInterest={service.title} />
        </div>
      </section>
    </main>
  );
}
