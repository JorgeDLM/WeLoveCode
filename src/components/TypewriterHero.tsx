'use client';

import { useState, useEffect } from 'react';

const phrases = [
  'PÁGINAS WEB',
  'APPS MÓVILES',
  'SISTEMAS',
  'AUTOMATIZACIONES',
  'INTEGRACIONES'
];

export default function TypewriterHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          setTypingSpeed(30); // Velocidad mucho más rápida al borrar
        } else {
          // Move to next phrase immediately
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setTypingSpeed(0); // Sin pausa, empieza inmediatamente
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section className="relative min-h-[calc(60vh-100px)] md:min-h-[calc(80vh-100px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(168,85,247,0.1)_60deg,_transparent_120deg)] animate-spin-slow"></div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-70 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
      <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50 shadow-[0_0_10px_RGBA(168,85,247,0.6)]"></div>
      <div className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce opacity-60 shadow-[0_0_12px_RGBA(59,130,246,0.6)]"></div>
      <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse opacity-60 shadow-[0_0_10px_RGBA(236,72,153,0.6)]"></div>
      <div className="absolute bottom-[15%] left-[40%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-40 shadow-[0_0_8px_RGBA(34,211,238,0.6)]"></div>
      <div className="absolute top-[40%] left-[10%] w-2 h-2 bg-sky-400 rounded-full animate-bounce opacity-50 shadow-[0_0_10px_RGBA(250,204,21,0.6)]"></div>
      <div className="absolute top-[75%] right-[30%] w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse opacity-70 shadow-[0_0_12px_RGBA(34,197,94,0.6)]"></div>
      <div className="absolute bottom-[45%] right-[10%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50 shadow-[0_0_8px_RGBA(168,85,247,0.6)]"></div>
      <div className="absolute top-[30%] left-[70%] w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60 shadow-[0_0_10px_RGBA(59,130,246,0.6)]"></div>
      <div className="absolute bottom-[60%] left-[60%] w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse opacity-50 shadow-[0_0_12px_RGBA(236,72,153,0.6)]"></div>
      <div className="absolute top-[85%] left-[35%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-40 shadow-[0_0_8px_RGBA(34,211,238,0.6)]"></div>
      <div className="absolute bottom-[25%] right-[40%] w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce opacity-60 shadow-[0_0_10px_RGBA(250,204,21,0.6)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white -mb-4 md:mb-4">
            Creamos
          </h1>
          <div className="h-20 sm:h-24 md:h-32 flex items-center justify-center px-2">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-purple-200 bg-clip-text text-transparent break-words max-w-full">
              {currentText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          <span className="hidden md:block">Agencia digital en Puebla, Mérida y Querétaro. </span>Transformamos tus ideas en tecnología que genera resultados reales
        </p>
        <div className="mt-12">
          <a 
            href="#servicios" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Conoce nuestros servicios
          </a>
        </div>
      </div>
    </section>
  );
}
