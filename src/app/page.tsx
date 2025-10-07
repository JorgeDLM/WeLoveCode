'use client';

import TypewriterHero from "../components/TypewriterHero";
import ServicesSection from "../components/ServicesSection";
import TechnologiesSection from "../components/TechnologiesSection";
import PortfolioSection from "../components/PortfolioSection";
import ProjectForm from "../components/ProjectForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const { ref: contactTitleRef, isVisible: contactTitleVisible } = useScrollAnimation(0.2);
  const { ref: contactFormRef, isVisible: contactFormVisible } = useScrollAnimation(0.1);

  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full text-white">
      {/* Hero with Typewriter Effect */}
      <TypewriterHero />

      {/* Services Section */}
      <ServicesSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Form Section */}
      <section id="contacto" className="relative py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div 
            ref={contactTitleRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              contactTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cuéntanos tu idea y te ayudaremos a convertirla en realidad
            </p>
          </div>
          
          <div
            ref={contactFormRef}
            className={`transition-all duration-1000 ${
              contactFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <ProjectForm />
          </div>
        </div>
      </section>
    </main>
  );
}
