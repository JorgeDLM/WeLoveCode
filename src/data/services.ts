export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  process: Array<{ step: string; description: string }>;
  technologies: string[];
  examples: Array<{ name: string; description: string; image: string; logo?: string }>;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    subtitle: 'Sitios web que convierten',
    description: 'Creamos sitios web modernos, rápidos y optimizados para SEO que transforman visitantes en clientes. Desde landing pages hasta plataformas complejas de e-commerce.',
    icon: '🌐',
    features: [
      'Diseño responsive y moderno',
      'Optimización SEO avanzada',
      'Velocidad de carga ultra rápida',
      'Integración con sistemas de pago',
      'Panel administrativo intuitivo',
      'Análisis y reportes en tiempo real'
    ],
    process: [
      { step: 'Análisis', description: 'Entendemos tu negocio, audiencia y objetivos' },
      { step: 'Diseño', description: 'Creamos wireframes y diseños que convierten' },
      { step: 'Desarrollo', description: 'Construimos con tecnologías modernas y escalables' },
      { step: 'Pruebas', description: 'Testing exhaustivo en múltiples dispositivos' },
      { step: 'Lanzamiento', description: 'Deployment optimizado y monitoreo continuo' }
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AWS'],
    examples: [
      {
        name: 'Mercado a la Mano',
        description: 'E-commerce completo que genera $1M+ en ventas mensuales',
        image: '/mercado-web-laptop-1.png',
        logo: '/mercado-logo.svg'
      },
      {
        name: 'Por Amor al Campo',
        description: 'Marketplace agrícola con +50 productores conectados',
        image: '/mercado-web-laptop-1.png',
        logo: '/poramoralcampo-icon.png'
      }
    ],
    benefits: [
      'Aumenta tus ventas',
      'Página única y profesional',
      'Mejor posicionamiento en Google (SEO)',
      'Experiencia de usuario excepcional',
    ]
  },
  {
    id: 'apps',
    title: 'Desarrollo de Apps Nativas',
    subtitle: 'iOS y Android de alto rendimiento',
    description: 'Desarrollamos aplicaciones móviles nativas que ofrecen la mejor experiencia posible en iOS y Android, con rendimiento superior y acceso completo a las funcionalidades del dispositivo.',
    icon: '📱',
    features: [
      'Desarrollo nativo para iOS y Android',
      'Experiencia de usuario fluida',
      'Integración con hardware del dispositivo',
      'Tarjetas de lealtad digitales personalizables',
      'Sistema de puntos y recompensas gamificado',
      'Marketplace de cupones y promociones',
      'Gestión dual: usuarios publicadores y consumidores',
      'Promociones personalizadas por comportamiento',
      'Notificaciones push segmentadas e inteligentes',
      'Analytics y métricas de comportamiento en tiempo real',
      'Descuentos dinámicos por horarios (horas muertas)',
      'Sistema de puntos intercambiables entre comercios',
      'Geolocalización para ofertas cercanas',
      'Códigos QR para redención de cupones',
      'Programa de referidos y recompensas',
      'Dashboard administrativo para comercios',
      'Modo offline funcional',
      'Sincronización en tiempo real'
    ],
    process: [
      { step: 'Discovery', description: 'Definimos funcionalidades y flujos de usuario' },
      { step: 'UI/UX', description: 'Diseñamos interfaces nativas e intuitivas' },
      { step: 'Desarrollo', description: 'Codificamos con React Native o nativa en Java/Swift' },
      { step: 'Testing', description: 'Pruebas en dispositivos reales múltiples' },
      { step: 'App Store', description: 'Publicación en Apple App Store y Google Play' }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'TypeScript'],
    examples: [
      {
        name: 'Mercado App',
        description: 'App de e-commerce con calificación 4.8/5 en ambas plataformas',
        image: '/mercado-app-1.webp',
        logo: '/logo-app.png'
      },
      {
        name: 'FidelityApp',
        description: 'Marketplace de cupones y sistema de lealtad completo: promociones, tarjetas de fidelización, descuentos en horas muertas, y sistema de puntos intercambiables. Aumentó retención en +200%',
        image: '/fidelity-app-2.png',
        logo: '/fidelity-app-icon-2.png'
      },
      {
        name: 'Por Amor al Campo',
        description: 'App nativa de e-commerce agrícola con +50 productores conectados y $500K+ en ventas mensuales',
        image: '/poramoralcampo-app.png',
        logo: '/poramoralcampo-icono.jpg'
      },
      {
        name: 'Client',
        description: 'Marketplace de propiedades comisionables que aumentó conversión en +80% y productividad en +150%',
        image: '/client-app-2.webp',
        logo: '/client-app-icon.webp'
      }
    ],
    benefits: [
      'Mayor engagement con notificaciones push',
      'Experiencia móvil superior',
      'Acceso a funcionalidades nativas',
      'Mejor retención de usuarios',
      'Posibilidad de monetización'
    ]
  },
  {
    id: 'sistemas',
    title: 'Desarrollo de Sistemas',
    subtitle: 'CRM y ERP a medida',
    description: 'Creamos sistemas personalizados que automatizan y optimizan tus procesos empresariales. Desde CRM hasta sistemas ERP completos que se adaptan a tu forma de trabajar.',
    icon: '⚙️',
    features: [
      'Automatización de procesos',
      'Gestión de inventarios inteligente',
      'Sistema de roles y permisos',
      'Reportes y analytics avanzados',
      'Integraciones con sistemas existentes',
      'Dashboard ejecutivo en tiempo real'
    ],
    process: [
      { step: 'Mapeo', description: 'Documentamos todos tus procesos actuales' },
      { step: 'Diseño', description: 'Creamos la arquitectura del sistema' },
      { step: 'Desarrollo', description: 'Construimos módulo por módulo' },
      { step: 'Migración', description: 'Transferimos datos existentes con seguridad' },
      { step: 'Capacitación', description: 'Entrenamos a tu equipo para usar el sistema' }
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'React', 'Redis', 'AWS'],
    examples: [
      {
        name: 'RILSA',
        description: 'ERP que redujo tiempos de cotización de 10 horas a 5 minutos',
        image: '/rilsa-web-laptop-1.png',
        logo: '/rilsa-logo.webp'
      },
      {
        name: 'Mercado a la Mano',
        description: 'Ecosistema completo de e-commerce que factura $1M+ mensuales con 5 sistemas integrados',
        image: '/mercado-web-laptop-1.png',
        logo: '/mercado-logo.svg'
      }
    ],
    benefits: [
      'Ahorro de +3,000 horas anuales',
      'Automatización del 90% de procesos',
      'Eliminación de errores humanos',
      'Toma de decisiones basada en datos',
      'ROI en menos de 6 meses'
    ]
  },
  {
    id: 'ai',
    title: 'Integraciones y Automatizaciones con IA',
    subtitle: 'Potencia tu negocio con IA',
    description: 'Implementamos soluciones de inteligencia artificial que automatizan tareas repetitivas, mejoran la atención al cliente y optimizan procesos con aprendizaje continuo.',
    icon: '🤖',
    features: [
      'Chatbots inteligentes 24/7',
      'Automatización de WhatsApp Business',
      'Procesamiento de lenguaje natural',
      'Análisis predictivo de datos',
      'Clasificación automática de contenido',
      'Recomendaciones personalizadas'
    ],
    process: [
      { step: 'Análisis', description: 'Identificamos oportunidades de automatización' },
      { step: 'Diseño', description: 'Definimos flujos y respuestas inteligentes' },
      { step: 'Entrenamiento', description: 'Configuramos y entrenamos los modelos de IA' },
      { step: 'Integración', description: 'Conectamos con tus sistemas existentes' },
      { step: 'Optimización', description: 'Mejoramos continuamente con datos reales' }
    ],
    technologies: ['OpenAI', 'GPT-4', 'Claude', 'Anthropic', 'Gemini', 'Midjourney', 'DALL-E', 'Stable Diffusion', 'Hugging Face', 'LangChain', 'TensorFlow', 'PyTorch'],
    examples: [],
    benefits: [
      'Atención al cliente 24/7',
      'Reducción de costos operativos en 70%',
      'Tiempo de respuesta inmediato',
      'Escalabilidad sin límites',
      'Mejora continua automática'
    ]
  }
];
