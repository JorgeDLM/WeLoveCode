import PortfolioSection from '@/components/PortfolioSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos | Casos de Éxito Web, Apps y Sistemas | WeLoveCode Puebla',
  description: 'Proyectos exitosos de desarrollo web, apps móviles y sistemas empresariales en Puebla, Mérida y Querétaro. +$51M generados por nuestros clientes. Ve nuestro portafolio de páginas web, aplicaciones iOS/Android y CRM empresariales.',
  keywords: 'portafolio desarrollo web Puebla, casos de éxito apps móviles, proyectos desarrollo software, empresa de diseño web, agencia de desarrollo de apps, ejemplos páginas web profesionales, portafolio aplicaciones móviles, casos de éxito CRM Puebla',
  openGraph: {
    title: 'Portafolio de Proyectos | Casos de Éxito | WeLoveCode Puebla',
    description: 'Proyectos exitosos de desarrollo web, apps móviles y sistemas empresariales. +$51M generados por nuestros clientes.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'WeLoveCode'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio de Proyectos | Casos de Éxito | WeLoveCode',
    description: 'Proyectos exitosos de desarrollo web, apps móviles y sistemas empresariales. +$51M generados.'
  }
};

export default function ProyectosPage() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full text-white">
      <PortfolioSection />
    </main>
  );
}
