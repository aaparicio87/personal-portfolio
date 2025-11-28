import { memo } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { projects, type Project } from '../data/projects';
import Card from './ui/Card';
import Badge from './ui/Badge';
import AppStoreLinks from './AppStoreLinks';

const ProjectCard = memo(({ project }: { project: Project }) => {
  const { t } = useLanguage();

  return (
    <Card hover className="p-6 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {t(project.titleKey)}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {t(project.descriptionKey)}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>
      <div className="flex gap-3 mt-auto justify-end">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('projects.viewCode')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            title={t('projects.viewCode')}
          >
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('projects.viewDemo')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            title={t('projects.viewDemo')}
          >
            <FiExternalLink className="w-5 h-5" />
          </a>
        )}
        <AppStoreLinks
          appStoreUrl={project.appStoreUrl}
          playStoreUrl={project.playStoreUrl}
        />
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
