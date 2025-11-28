export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hey, I'm Alejandro! 👋",
      description:
        "Software Engineer especializado en desarrollo Full-Stack con JavaScript, TypeScript y Python. Enfocado en crear aplicaciones web y móviles robustas con React Native y React.js.",
      cv: {
        english: "CV (Inglés)",
        spanish: "CV (Español)",
      },
    },
    about: {
      title: "Sobre mí",
      intro: "Desarrollador experimentado en aplicaciones web y móviles",
      description:
        "Con experiencia en el desarrollo de aplicaciones web y móviles, implementando soluciones robustas. Mi experiencia abarca JavaScript, TypeScript y Python, con un fuerte dominio de frameworks como React Native, Expo.js y React.js. Busco oportunidades para aplicar mis habilidades e impulsar el crecimiento profesional.",
    },
    experience: {
      title: "Experiencia Profesional",
      present: "Presente",
      agentic: {
        role: "Mobile Developer",
        location: "Miami, USA (Remoto)",
        description:
          "Migración de aplicación a Expo y TypeScript, implementación de Redux Toolkit, integración con Nest.js y Firebase, desarrollo de módulo SQLite con TypeORM, autenticación con AWS Cognito, y desarrollo de módulos nativos en Swift y Kotlin.",
      },
      sensordata: {
        role: "Mobile Developer",
        location: "Montevideo, UY (Remoto)",
        description:
          "Mantenimiento de app React Native, automatización de despliegues con Fastlane, integración de notificaciones push con OneSignal, y visualización de ubicaciones en tiempo real con react-native-maps.",
      },
      basspago: {
        role: "Web and Mobile Developer",
        location: "Brasil",
        description:
          "Desarrollo con Material UI, React.js y React Native, integración de Firebase Auth, implementación de procesos KYC con SUMSUB SDK, generación de facturas PDF, y autenticación de dos factores (2FA).",
      },
      elastic: {
        role: "Web and Mobile Developer",
        location: "Bogotá, COL (Remoto)",
        description:
          "Desarrollo de plataforma Ecolog con React.js y React Native, integración de Firebase Auth y Firestore, diseño de módulo de Preguntas Dinámicas, y arquitectura de componentes reutilizables.",
      },
    },
    skills: {
      title: "Habilidades",
      mobile: "Desarrollo Móvil",
      web: "Desarrollo Web",
      backend: "Back-end",
      databases: "Bases de Datos",
      cloud: "Cloud & DevOps",
      tools: "Herramientas & Otros",
    },
    projects: {
      title: "Proyectos Destacados",
      viewCode: "Ver Código",
      viewDemo: "Ver Demo",
      appStore: "App Store",
      playStore: "Play Store",
      items: {
        mobilepro: {
          title: "MobilePro",
          description:
            "Migración completa de aplicación móvil a Expo y TypeScript, mejorando rendimiento y mantenibilidad. Gestión de estado avanzada con Redux Toolkit. (Disponible solo en USA)",
        },
        sensordata: {
          title: "SensorData",
          description:
            "Aplicación nativa para iOS y Android con mapas en tiempo real, notificaciones push y despliegues automatizados.",
        },
        basspago: {
          title: "Basspago",
          description:
            "Plataforma de pagos web y móvil con autenticación 2FA, procesos KYC y generación de facturas PDF.",
        },
        portfolio: {
          title: "Portfolio Personal",
          description:
            "Portfolio web moderno y responsivo con modo oscuro e internacionalización.",
        },
      },
    },
    contact: {
      title: "Construyamos algo grandioso.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey, I'm Alejandro! 👋",
      description:
        "Software Engineer specialized in Full-Stack development with JavaScript, TypeScript, and Python. Focused on creating robust web and mobile applications with React Native and React.js.",
      cv: {
        english: "CV (English)",
        spanish: "CV (Spanish)",
      },
    },
    about: {
      title: "About Me",
      intro: "Experienced developer in web and mobile applications",
      description:
        "Experienced in developing web and mobile applications and implementing robust solutions. My expertise spans JavaScript, TypeScript, and Python, with a strong command of frameworks including React Native, Expo.js, and React.js. Seeking opportunities to apply my skills and drive professional growth.",
    },
    experience: {
      title: "Professional Experience",
      present: "Present",
      agentic: {
        role: "Mobile Developer",
        location: "Miami, USA (Remote)",
        description:
          "Migrated MobilePro app to Expo and TypeScript, implemented Redux Toolkit, integrated Nest.js and Firebase services, developed SQLite module with TypeORM, AWS Cognito authentication, and native modules in Swift and Kotlin.",
      },
      sensordata: {
        role: "Mobile Developer",
        location: "Montevideo, UY (Remote)",
        description:
          "Maintained React Native app, automated deployments with Fastlane, integrated push notifications with OneSignal, and real-time location visualization with react-native-maps.",
      },
      basspago: {
        role: "Web and Mobile Developer",
        location: "Brazil",
        description:
          "Development with Material UI, React.js and React Native, Firebase Auth integration, KYC processes with SUMSUB SDK, PDF invoice generation, and two-factor authentication (2FA).",
      },
      elastic: {
        role: "Web and Mobile Developer",
        location: "Bogotá, COL (Remote)",
        description:
          "Developed Ecolog platform with React.js and React Native, Firebase Auth and Firestore integration, Dynamic Questions module design, and reusable component architecture.",
      },
    },
    skills: {
      title: "Skills",
      mobile: "Mobile Development",
      web: "Web Development",
      backend: "Back-end",
      databases: "Databases",
      cloud: "Cloud & DevOps",
      tools: "Tools & Other",
    },
    projects: {
      title: "Featured Projects",
      viewCode: "View Code",
      viewDemo: "View Demo",
      appStore: "App Store",
      playStore: "Play Store",
      items: {
        mobilepro: {
          title: "MobilePro",
          description:
            "Complete mobile app migration to Expo and TypeScript, improving performance and maintainability. Advanced state management with Redux Toolkit. (Available only in USA)",
        },
        sensordata: {
          title: "SensorData",
          description:
            "Native iOS and Android app with real-time maps, push notifications, and automated deployments.",
        },
        basspago: {
          title: "Basspago",
          description:
            "Web and mobile payment platform with 2FA authentication, KYC processes, and PDF invoice generation.",
        },
        portfolio: {
          title: "Personal Portfolio",
          description:
            "Modern and responsive web portfolio with dark mode and internationalization.",
        },
      },
    },
    contact: {
      title: "Let's build something great.",
    },
  },
} as const;

export type Translations = typeof translations;
export type TranslationKeys = keyof Translations;
export type Locale = keyof Translations;

// Tipo para las rutas de traducción (ej: "nav.about", "hero.greeting")
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? Join<K, Paths<T[K]>>
          : K
        : never;
    }[keyof T]
  : never;

export type TranslationPath = Paths<Translations["es"]>;
