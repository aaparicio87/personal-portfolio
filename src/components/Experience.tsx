import { memo } from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Mobile Developer',
    company: 'Agentic Dream',
    period: 'Junio 2023 - Presente',
    description: 'Migración de MobilePro a Expo y TypeScript. Implementación de Redux Toolkit y Context API. Integración de Nest.js con Firebase Cloud Functions. Desarrollo de base de datos SQLite offline-first con TypeORM. Autenticación con RTK Query y AWS Cognito. Módulos nativos personalizados con CubiCasa SDK y Zoom Video SDK (Swift/Kotlin).',
  },
  {
    title: 'Mobile Developer',
    company: 'SensorData',
    period: 'Marzo 2023 - Agosto 2023',
    description: 'Mantenimiento y mejora de SensorData para Android e iOS con React Native CLI. Automatización de despliegues con Fastlane. Integración de notificaciones push con OneSignal. Implementación de mapas en tiempo real con react-native-maps.',
  },
  {
    title: 'Web and Mobile Developer',
    company: 'Basspago',
    period: 'Agosto 2022 - Mayo 2023',
    description: 'Desarrollo de plataforma de pagos con React.js y React Native. Integración de Firebase para autenticación 2FA y Google 2FA. Implementación de procesos KYC con SUMSUB SDK. Generación de PDF invoices y medidas de seguridad avanzadas.',
  },
  {
    title: 'Web and Mobile Developer',
    company: 'Elastic Dev Team',
    period: 'Febrero 2021 - Agosto 2022',
    description: 'Desarrollo con Material UI en Ecolog. Integración Firebase para autenticación y Firestore real-time. Diseño de módulo Dynamic Questions para formularios interactivos. Arquitectura de componentes reutilizables.',
  },
  {
    title: 'Developer',
    company: 'Intellisys',
    period: 'Diciembre 2020 - Enero 2021',
    description: 'Desarrollo y personalización de módulos ERPNext con Python y JavaScript. Implementación de interfaces con HTML y CSS. Configuración de bases de datos MariaDB.',
  },
  {
    title: 'Back-end Developer',
    company: 'TodoLegal',
    period: 'Agosto 2020 - Octubre 2020',
    description: 'Desarrollo de servicios REST con FastAPI para Smart Contracts. Generación de reportes dinámicos con ReportLab. Integración AWS Lambda y S3 para deployment y almacenamiento.',
  },
  {
    title: 'Systems and Network Administrator',
    company: 'Cuba',
    period: 'Septiembre 2010 - Julio 2020',
    description: 'Administración de servidores Linux (CentOS, Ubuntu, Debian). Virtualización con VMware, KVM, Proxmox y Docker. Diseño de redes LAN/WAN con IPSec, VLAN, VPN y firewalls.',
  },
];

const ExperienceItem = memo(({ experience }: { experience: Experience }) => (
  <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 pb-8 relative">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-900 dark:bg-white" />
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <Briefcase className="w-6 h-6 text-gray-900 dark:text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {experience.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          {experience.company} • {experience.period}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          {experience.description}
        </p>
      </div>
    </div>
  </div>
));

ExperienceItem.displayName = 'ExperienceItem';

function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Experiencia
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);
