import { useLanguage } from "@context/LanguageContext";
import { experiences } from "@data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t("experience.title")}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.roleKey} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
