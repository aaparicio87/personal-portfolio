import { memo } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

interface Experience {
  company: string;
  period: string;
  roleKey: string;
  locationKey: string;
  descriptionKey: string;
}

const ExperienceItem = memo(({ experience }: { experience: Experience }) => {
  const { t } = useLanguage();

  return (
    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 pb-8 relative">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-900 dark:bg-white" />
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <FiBriefcase className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {t(experience.roleKey)}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {experience.company} • {experience.period} • {t(experience.locationKey)}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {t(experience.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
});

ExperienceItem.displayName = 'ExperienceItem';

function Experience() {
  const { t } = useLanguage();

  const experiences: Experience[] = [
    {
      company: 'Agentic Dream',
      period: 'Jun 2023 - ' + t('experience.present'),
      roleKey: 'experience.agentic.role',
      locationKey: 'experience.agentic.location',
      descriptionKey: 'experience.agentic.description',
    },
    {
      company: 'SensorData',
      period: 'Mar 2023 - Aug 2023',
      roleKey: 'experience.sensordata.role',
      locationKey: 'experience.sensordata.location',
      descriptionKey: 'experience.sensordata.description',
    },
    {
      company: 'Basspago',
      period: 'Aug 2022 - May 2023',
      roleKey: 'experience.basspago.role',
      locationKey: 'experience.basspago.location',
      descriptionKey: 'experience.basspago.description',
    },
    {
      company: 'Elastic Dev Team',
      period: 'Feb 2021 - Aug 2022',
      roleKey: 'experience.elastic.role',
      locationKey: 'experience.elastic.location',
      descriptionKey: 'experience.elastic.description',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('experience.title')}
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
