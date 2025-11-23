import { memo } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface Project {
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    titleKey: 'projects.items.mobilepro.title',
    descriptionKey: 'projects.items.mobilepro.description',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    titleKey: 'projects.items.sensordata.title',
    descriptionKey: 'projects.items.sensordata.description',
    technologies: ['React Native CLI', 'OneSignal', 'Fastlane', 'react-native-maps'],
    github: '#',
    live: '#',
  },
  {
    titleKey: 'projects.items.basspago.title',
    descriptionKey: 'projects.items.basspago.description',
    technologies: ['React.js', 'React Native', 'Firebase', 'SUMSUB SDK', 'Material UI'],
    github: '#',
    live: '#',
  },
];

const ProjectCard = memo(({ project }: { project: Project }) => {
  const { t } = useLanguage();

  return (
    <Card hover className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {t(project.titleKey)}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t(project.descriptionKey)}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>{t('projects.viewCode')}</span>
        </a>
        <a
          href={project.live}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>{t('projects.viewDemo')}</span>
        </a>
      </div>
    </Card>
  );
});

ProjectCard.displayName = 'ProjectCard';

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
