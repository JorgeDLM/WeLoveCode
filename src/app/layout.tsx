import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeLoveCode | Agencia Digital Puebla | Desarrollo Web, Apps y Sistemas con IA",
  description: "Empresa de desarrollo de software en Puebla, Mérida y Querétaro. Diseño de páginas web profesionales, desarrollo de apps iOS/Android, CRM empresariales y automatización con inteligencia artificial. +$50M generados por clientes.",
  keywords: "agencia digital Puebla, desarrollo de sitios web Puebla, desarrollo de sitios web Mérida, desarrollo de sitios web Querétaro, diseño de páginas web profesionales, empresa de desarrollo de apps, desarrollo app nativa Android, desarrollo app iOS profesional, empresa CRM Puebla, desarrollo de sistemas empresariales, automatización con inteligencia artificial, software de gestión empresarial, soluciones digitales con IA, desarrollo de software personalizado, agencia de software Puebla, inteligencia artificial para empresas, agencia de tecnología, cotizar desarrollo web, contratar desarrolladores Puebla, empresa tecnológica Puebla, servicios de transformación digital, desarrollo tecnológico para empresas Puebla",
  authors: [{ name: "WeLoveCode" }],
  creator: "WeLoveCode",
  publisher: "WeLoveCode",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://welovecode.mx",
    siteName: "WeLoveCode",
    title: "WeLoveCode | Agencia Digital Puebla | Desarrollo Web, Apps y Sistemas con IA",
    description: "Empresa de desarrollo de software en Puebla, Mérida y Querétaro. Diseño de páginas web profesionales, desarrollo de apps iOS/Android, CRM empresariales y automatización con inteligencia artificial.",
    images: [
      {
        url: "/icono-app.png",
        width: 1200,
        height: 630,
        alt: "WeLoveCode - Agencia Digital Puebla"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "WeLoveCode | Agencia Digital Puebla | Desarrollo Web, Apps y Sistemas con IA",
    description: "Empresa de desarrollo de software en Puebla, Mérida y Querétaro. Diseño de páginas web profesionales, desarrollo de apps iOS/Android, CRM empresariales y automatización con IA.",
    images: ["/icono-app.png"]
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed"
};

import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <meta property="og:title" content="WeLoveCode | Agencia Digital Puebla | Desarrollo Web, Apps y Sistemas con IA" />
        <meta property="og:description" content="Empresa de desarrollo de software en Puebla, Mérida y Querétaro. Diseño de páginas web profesionales, desarrollo de apps iOS/Android, CRM empresariales y automatización con inteligencia artificial." />
        <meta property="og:image" content="/icono-app.png" />
        <meta property="og:url" content="https://welovecode.mx" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WeLoveCode" />
        <meta property="og:locale" content="es_MX" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WeLoveCode | Agencia Digital Puebla | Desarrollo Web, Apps y Sistemas con IA" />
        <meta name="twitter:description" content="Empresa de desarrollo de software en Puebla, Mérida y Querétaro. Diseño de páginas web profesionales, desarrollo de apps iOS/Android y automatización con IA." />
        <meta name="twitter:image" content="/icono-app.png" />
        
        <meta name="description" content="Empresa de desarrollo de software en Puebla, Mérida y Querétaro. Diseño de páginas web profesionales, desarrollo de apps iOS/Android, CRM empresariales y automatización con inteligencia artificial. +$50M generados por clientes." />
        <meta name="keywords" content="agencia digital Puebla, desarrollo de sitios web Puebla, desarrollo de sitios web Mérida, desarrollo de sitios web Querétaro, diseño de páginas web profesionales, empresa de desarrollo de apps, desarrollo app nativa Android, desarrollo app iOS profesional, empresa CRM Puebla, desarrollo de sistemas empresariales, automatización con inteligencia artificial, software de gestión empresarial, soluciones digitales con IA, desarrollo de software personalizado, agencia de software Puebla, inteligencia artificial para empresas, agencia de tecnología, cotizar desarrollo web, contratar desarrolladores Puebla, empresa tecnológica Puebla, servicios de transformación digital, desarrollo tecnológico para empresas Puebla" />
        <meta name="author" content="WeLoveCode" />
        <meta name="robots" content="index, follow" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="MX-PUE" />
        <meta name="geo.placename" content="Puebla" />
        <meta name="geo.position" content="19.0414;-98.2063" />
        <meta name="ICBM" content="19.0414, -98.2063" />
        
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WeLoveCode",
              "description": "Agencia digital en Puebla especializada en desarrollo de páginas web, aplicaciones móviles y sistemas empresariales con inteligencia artificial",
              "url": "https://welovecode.mx",
              "logo": "https://welovecode.mx/icono-app.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Puebla",
                "addressRegion": "Puebla",
                "addressCountry": "MX"
              },
              "areaServed": ["Puebla", "Mérida", "Querétaro", "México"],
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "areaServed": "MX",
                "availableLanguage": ["Spanish"]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Desarrollo",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Desarrollo de Páginas Web",
                      "description": "Diseño de páginas web profesionales en Puebla, Mérida y Querétaro"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Desarrollo de Apps Móviles",
                      "description": "Desarrollo de aplicaciones móviles nativas iOS y Android"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sistemas CRM Empresariales",
                      "description": "Desarrollo de CRM y sistemas de gestión empresarial con IA en Puebla"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automatización con IA",
                      "description": "Soluciones de inteligencia artificial para empresas"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17562407817"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17562407817');
            `,
          }}
        />
      </head>
      <body className={inter.className + " bg-gray-50 min-h-screen select-none overflow-x-hidden"}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

