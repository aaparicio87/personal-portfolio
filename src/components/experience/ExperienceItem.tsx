import { memo } from "react";
import { FiBriefcase } from "react-icons/fi";
import { Experience } from "../../data/experience";
import { useLanguage } from "../../context/LanguageContext";

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
            {experience.company} • {experience.period} •{" "}
            {t(experience.locationKey)}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {t(experience.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
});

export default memo(ExperienceItem);
