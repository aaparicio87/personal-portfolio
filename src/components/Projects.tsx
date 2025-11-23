import { memo } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'MobilePro Migration',
    description: 'Migración completa de aplicación móvil a Expo y TypeScript, mejorando rendimiento y mantenibilidad. Implementación de gestión de estado avanzada con Redux Toolkit.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    title: 'SensorData Mobile App',
    description: 'Aplicación nativa para iOS y Android con mapas en tiempo real, notificaciones push y despliegues automatizados.',
    technologies: ['React Native CLI', 'OneSignal', 'Fastlane', 'react-native-maps'],
    github: '#',
    live: '#',
  },
  {
    title: 'Basspago Payment Platform',
    description: 'Plataforma de pagos web y móvil con autenticación 2FA, procesos KYC y generación de invoices PDF.',
    technologies: ['React.js', 'React Native', 'Firebase', 'SUMSUB SDK', 'Material UI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Ecolog Web Platform',
    description: 'Plataforma web con módulo de formularios dinámicos para recopilación de datos estratégicos, arquitectura de componentes reutilizables.',
    technologies: ['React.js', 'TypeScript', 'Firebase Firestore', 'Material UI', 'Scrum'],
    github: '#',
    live: '#',
  },
  {
    title: 'ERPNext Customization',
    description: 'Módulos personalizados de ERPNext con interfaces intuitivas y gestión eficiente de datos transaccionales.',
    technologies: ['Python', 'JavaScript', 'MariaDB', 'HTML', 'CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'TodoLegal Backend Services',
    description: 'Servicios REST para gestión de Smart Contracts con reportes dinámicos y deployment escalable en AWS.',
    technologies: ['FastAPI', 'Python', 'AWS Lambda', 'Amazon S3', 'ReportLab'],
    github: '#',
    live: '#',
  },
];

const ProjectCard = memo(({ project }: { project: Project }) => (
  <Card hover>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <Badge key={index}>
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>Código</span>
        </a>
        <a
          href={project.live}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </Card>
));

ProjectCard.displayName = 'ProjectCard';

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
