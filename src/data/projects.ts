export interface Project {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  logoAlt?: string;
  description: string;
  fullDescription: string;
  mainImage: string;
  mobileImage?: string;
  gallery?: string[];
  stats: Array<{ label: string; value: string }>;
  color: string;
  link?: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'mercado-web',
    name: 'Mercado a la Mano',
    tagline: 'Ecosistema Multiusuario E-commerce',
    logo: '/mercado-logo.svg',
    description: 'De una simple idea a $1,000,000+ en ventas mensuales. Ecosistema completo de 5 sistemas integrados que esta revolucionando la proveeduría de alimentos.',
    fullDescription: 'Desarrollamos un ecosistema completo de 5 sistemas en 3 plataformas interconectados que transformó la proveeduría tradicional de frutas y verduras en un negocio digital escalable que factura más de $1,000,000 mensuales. Cada sistema está diseñado específicamente para su usuario: Clientes que hacen pedidos fácilmente, Distribuidores con control total de su negocio, Proveedores que suministran productos, Choferes que optimizan entregas, y un Admin central que coordina toda la operación. Esta arquitectura permite que múltiples negocios operen bajo una misma infraestructura mientras mantienen su identidad de marca.',
    mainImage: '/mercado-web-laptop-1.png',
    mobileImage: '/mercado-web-movil-3.png',
    stats: [
      { label: 'Integrados', value: '5 Sistemas' },
      { label: 'Ingresos Mensuales', value: '$1,000,000+' }
    ],
    color: 'green',
    link: 'https://www.mercadoalamano.com',
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Cloudinary', 'Tailwind CSS'],
    features: [
      'Sistema de Clientes: Gestión completa de pedidos, manejo de deuda con plataforma y perfil personalizado',
      'Sistema de Distribuidores: Gestión total de precios de productos por distribuidor',
      'Distribuidores: Control completo de inventarios propios y pedidos de sus clientes',
      'Distribuidores: Administración de múltiples sucursales con inventarios independientes',
      'Distribuidores: Sistema de facturación automática para sus ventas',
      'Distribuidores: Dashboard analítico con métricas de su negocio en tiempo real',
      'Distribuidores: Gestión de clientes propios y control de deudores',
      'Distribuidores: Configuración de dominio propio y colores de plataforma white-label para sus clientes',
      'Distribuidores: Designación de horarios de venta y configuración de mínimos de compra',
      'Sistema de Proveedores: Portal donde visualizan productos disponibles para compra y suministro',
      'Sistema de Admin Central: Administración de comisiones de plataforma y gestión de productos globales',
      'Admin: Dashboard global de gestión de usuarios (clientes y distribuidores)',
      'Admin: Control y gestión de deuda de distribuidores con la plataforma',
      'Admin: Gestión centralizada de pedidos para solucionar problemas a usuarios',
      'Admin: Configuraciones globales de toda la plataforma',
      'Sistema de Choferes: Optimización de rutas de entrega y gestión de pedidos en tránsito'
    ]
  },
  {
    id: 'mercado-app',
    name: 'Mercado App',
    tagline: 'Aplicación Móvil Nativa',
    logo: '/logo-app.png',
    description: 'Integración multiplataforma del ecosistema Mercado a la Mano. Parte del sistema que factura más de $1,000,000+ mensuales.',
    fullDescription: 'Aplicación móvil nativa que forma parte integral del ecosistema multiplataforma de www.mercadoalamano.com, plataforma líder en proveeduría de frutas y verduras que factura más de $1,000,000 mensuales. Esta app móvil extiende toda la funcionalidad del sistema web, permitiendo a clientes realizar pedidos en cualquier momento y lugar, mientras que los administradores pueden gestionar operaciones en tiempo real desde sus dispositivos móviles.',
    mainImage: '/mercado-app-1.webp',
    mobileImage: '/mercado-app-2.webp',
    stats: [
      { label: 'Plataformas', value: 'iOS & Android' },
    ],
    color: 'blue',
    technologies: ['React Native', 'TypeScript', 'Python', 'Redis', 'AWS', 'Cloudinary'],
    features: [
      'Catálogo completo de productos frescos con imágenes de alta calidad',
      'Carrito de compras inteligente con sugerencias basadas en historial',
      'Seguimiento en tiempo real de pedidos desde almacén hasta entrega',
      'Notificaciones push para ofertas, promociones y estado de pedidos',
      'Gestión de múltiples direcciones de entrega',
      'Métodos de pago integrados (tarjetas, transferencias, efectivo)',
      'Historial completo de compras y reorden rápido',
      'Sistema de favoritos y listas de compra personalizadas',
      'Modo offline para navegar catálogo sin conexión',
      'Chat en vivo con soporte al cliente',
      'Panel administrativo móvil para gestionar inventario',
      'Dashboard de ventas y analytics en tiempo real'
    ]
  },
  {
    id: 'rilsa',
    name: 'RILSA',
    tagline: 'Sistema de Gestión Empresarial',
    logo: '/rilsa-logo.webp',
    description: 'Automatizamos sus procesos de cotización de +10 horas a 5 minutos. Sistema completo para gestionar +100,000 productos.',
    fullDescription: 'Sistema ERP completo que revolucionó la gestión empresarial de RILSA. Desarrollamos algoritmos inteligentes que automatizan la cotización de más de 100,000 productos, reduciendo drásticamente los tiempos de operación y eliminando errores humanos.',
    mainImage: '/rilsa-web-laptop-1.png',
    mobileImage: '/rilsa-web-movil-1.png',
    stats: [
      { label: 'Automatización', value: '90%' },
      { label: 'Tiempo Ahorrado', value: '+3,000 hrs' }
    ],
    color: 'purple',
    technologies: ['Django', 'Python', 'PostgreSQL', 'React', 'AWS'],
    features: [
      'Cotización automática inteligente',
      'Gestión de +100,000 productos',
      'Control de inventario',
      'Reportes y analytics',
      'Sistema de roles y permisos'
    ]
  },
  {
    id: 'client',
    name: 'Client',
    tagline: 'Marketplace de Propiedades Comisionables',
    logo: '/client-logo.webp',
    logoAlt: '/client-app-icon.webp',
    description: 'Aplicación móvil de marketplace que conecta agentes inmobiliarios con propiedades comisionables. Aumentó conversión en +80% y productividad en +150%.',
    fullDescription: 'Plataforma móvil completa diseñada para revolucionar el mercado inmobiliario conectando agentes con propiedades comisionables. Sistema integral que incluye gestión de propiedades, cálculo automático de comisiones, seguimiento de leads, comunicación en tiempo real y analytics avanzados para maximizar las ventas.',
    mainImage: '/client-app-1.webp',
    mobileImage: '/client-app-2.webp',
    stats: [
      { label: 'Productividad', value: '+150%' },
      { label: 'Conversión', value: '+80%' }
    ],
    color: 'green',
    technologies: ['React Native', 'TypeScript', 'MongoDB', 'Node.js', 'Firebase', 'AWS'],
    gallery: ['/client-app-1.webp', '/client-laptop-1.png'],
    features: [
      'Marketplace de propiedades con búsqueda avanzada',
      'Sistema de comisiones automatizado',
      'Gestión de leads y pipeline de ventas',
      'Chat en tiempo real entre agentes y clientes',
      'Notificaciones push para nuevas propiedades',
      'Calculadora de comisiones integrada',
      'Galería de fotos y tours virtuales',
      'Filtros por ubicación, precio y características',
      'Dashboard analítico para agentes',
      'Sistema de favoritos y alertas',
      'Integración con WhatsApp',
      'Seguimiento de visitas y citas'
    ]
  },
  {
    id: 'fidelity',
    name: 'FidelityApp',
    tagline: 'Marketplace de Cupones y Programa de Lealtad',
    logo: '/fidelity-app-icon-2.png',
    description: 'Ecosistema completo de fidelización: marketplace de cupones, tarjetas digitales, puntos intercambiables y promociones inteligentes. Aumentó retención en +200%.',
    fullDescription: 'WeLoveCode diseñó y desarrolló una solución completa que transformó la visión de FidelityApp en realidad. Sistema integral de lealtad que combina un marketplace de cupones bidireccional (usuarios publicadores y consumidores), tarjetas de fidelización digitales personalizables, sistema de puntos intercambiables entre comercios, descuentos dinámicos en horas muertas, y analytics avanzados de comportamiento. La plataforma incluye aplicación móvil nativa, panel administrativo para comercios y dashboard ejecutivo con métricas en tiempo real.',
    mainImage: '/fidelity-app-1.png',
    mobileImage: '/fidelity-app-2.png',
    stats: [
      { label: 'Horas muertas', value: '+300%' },
      { label: 'Retención', value: '+150%' },
      { label: 'Compras Recurrentes', value: '+130%' },
    ],
    color: 'pink',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'TypeScript', 'Redux', 'AWS'],
    features: [
      'Tarjetas de lealtad digitales personalizables por comercio',
      'Sistema de puntos y recompensas gamificado',
      'Marketplace de cupones y promociones bidireccional',
      'Gestión dual: usuarios que publican y usuarios que consumen',
      'Promociones personalizadas basadas en comportamiento del usuario',
      'Notificaciones push segmentadas e inteligentes',
      'Analytics de comportamiento y métricas en tiempo real',
      'Descuentos dinámicos por horarios (gestión de horas muertas)',
      'Sistema de puntos intercambiables entre múltiples comercios',
      'Geolocalización para ofertas y comercios cercanos',
      'Códigos QR para redención instantánea de cupones',
      'Programa de referidos con recompensas automáticas',
      'Dashboard administrativo completo para comercios',
      'Panel de configuración de campañas y promociones',
      'Reportes detallados de conversión y engagement',
      'Segmentación avanzada de clientes',
      'Gestión de múltiples sucursales por comercio',
      'Integración con sistemas de punto de venta (POS)',
      'Sistema de niveles VIP y beneficios exclusivos',
      'Historial completo de transacciones y canjes'
    ]
  },
  {
    id: 'poramoralcampo',
    name: 'Por Amor al Campo',
    tagline: 'E-commerce Agrícola',
    logo: '/poramoralcampo-logo.png',
    logoAlt: '/poramoralcampo-logo-blanco.png',
    description: 'Marketplace digital que conecta productores agrícolas directamente con compradores, eliminando intermediarios.',
    fullDescription: 'Plataforma e-commerce especializada en productos agrícolas que revoluciona la forma en que productores y compradores se conectan. Sistema completo de gestión de pedidos, logística y pagos diseñado específicamente para la industria agrícola, con aplicación móvil nativa para iOS y Android.',
    mainImage: '/poramoralcampo-app.png',
    gallery: ['/poramoralcampo-app.png', '/poramoralcampo-web.webp'],
    stats: [
      { label: 'Productos', value: '+1,000' },
      { label: 'Mejor pago a productores', value: '+100%' },
    ],
    color: 'emerald',
    link: 'https://www.poramoralcampo.com',
    technologies: ['React Native', 'React', 'Django', 'Express', 'PostgreSQL', 'AWS', 'Stripe'],
    features: [
      'Marketplace completo de productos agrícolas frescos',
      'Aplicación móvil nativa para iOS y Android',
      'Sistema web para compradores y productores',
      'Gestión integral de pedidos en tiempo real',
      'Control de inventario por productor',
      'Sistema de logística y rutas de entrega optimizadas',
      'Procesador de pagos integrado con Stripe',
      'Perfiles detallados de productores con certificaciones',
      'Seguimiento en tiempo real de entregas',
      'Sistema de calificaciones y reseñas',
      'Dashboard analítico para productores',
      'Notificaciones push para actualizaciones de pedidos',
      'Catálogo con imágenes de alta calidad',
      'Gestión de múltiples direcciones de entrega'
    ]
  },
  {
    id: 'arribo',
    name: 'Arribo',
    tagline: 'Valet sin Boletito',
    logo: '/arribo-app-icon.webp',
    description: 'Sistema de valet parking digital que elimina boletos físicos. QR para entrega, pago 1-tap, validación offline. Para empresas: operación en vivo, cero fraudes.',
    fullDescription: 'Arribo revoluciona el servicio de valet parking eliminando completamente los boletos físicos. Los usuarios entregan su auto escaneando un código QR, monitorean el estado en tiempo real, solicitan el auto cuando van saliendo, pagan con un tap y validan la entrega al valet aunque este no tenga internet. Para las empresas de valet: panel de operación en vivo, sistema diseñado para prevenir fraudes, cortes de caja automáticos y limpios. Para los usuarios: cero broncas con boletos perdidos, transparencia total del servicio, recibos y facturas digitales, e historial completo en su teléfono.',
    mainImage: '/arribo-app-3.webp',
    mobileImage: '/arribo-app-2.webp',
    gallery: ['/chofer-1.webp', '/arribo-app-3.webp', '/arribo-app-4.webp', '/arribo-app-1.webp', '/arribo-app-2.webp'],
    stats: [
      { label: 'Sin boletos', value: 'Digital' },
      { label: 'Reducción fraudes', value: '-95%' },
      { label: 'Tiempo promedio', value: '-40%' }
    ],
    color: 'cyan',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'PostgreSQL', 'QR Codes', 'Stripe', 'Offline-First'],
    features: [
      'Entrega y recepción con código QR único',
      'Monitoreo de estado del auto en tiempo real',
      'Pago digital con un solo tap (Stripe integrado)',
      'Validación del valet sin conexión a internet',
      'Panel de operación en vivo para empresas',
      'Sistema diseñado para prevenir fraudes y robos',
      'Cortes de caja automáticos sin errores',
      'Recibos y facturas digitales automáticos',
      'Historial completo de servicios en el celular',
      'Transparencia total: ubicación y estado del auto',
      'Notificaciones push cuando el auto está listo',
      'Sistema de calificación y rating para valets',
      'Gestión de múltiples ubicaciones de valet',
      'Dashboard con métricas de operación en tiempo real',
      'Control de turnos y asignación de valets',
      'Reportes financieros automáticos',
      'Sistema de propinas digital integrado',
      'Alertas de seguridad y geovallas',
      'Modo offline funcional para valets',
      'Sincronización automática al recuperar conexión'
    ]
  }
];
