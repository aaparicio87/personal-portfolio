import { memo } from "react";
import {
  FiCode,
  FiSmartphone,
  FiServer,
  FiDatabase,
  FiCloud,
  FiTool,
} from "react-icons/fi";
import { useLanguage } from "@context/LanguageContext";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface SkillCategory {
  titleKey: string;
  icon: typeof FiCode;
  skills: string[];
}

const SkillCategoryCard = memo(({ category }: { category: SkillCategory }) => {
  const { t } = useLanguage();
  const Icon = category.icon;

  return (
    <Card hover className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {t(category.titleKey)}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </Card>
  );
});

SkillCategoryCard.displayName = "SkillCategoryCard";

function Skills() {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: "skills.mobile",
      icon: FiSmartphone,
      skills: [
        "React Native",
        "Expo.js",
        "TypeScript",
        "Redux Toolkit",
        "Native Modules (Swift/Kotlin)",
      ],
    },
    {
      titleKey: "skills.web",
      icon: FiCode,
      skills: [
        "React.js",
        "JavaScript",
        "Material UI",
        "HTML/CSS",
        "Responsive Design",
      ],
    },
    {
      titleKey: "skills.backend",
      icon: FiServer,
      skills: ["Node.js", "Nest.js", "FastAPI", "Python", "REST APIs"],
    },
    {
      titleKey: "skills.databases",
      icon: FiDatabase,
      skills: [
        "SQLite",
        "TypeORM",
        "Firebase Firestore",
        "MariaDB",
        "PostgreSQL",
      ],
    },
    {
      titleKey: "skills.cloud",
      icon: FiCloud,
      skills: [
        "AWS (Lambda, S3, Cognito)",
        "Firebase",
        "Docker",
        "CI/CD",
        "Fastlane",
      ],
    },
    {
      titleKey: "skills.tools",
      icon: FiTool,
      skills: ["Git", "Scrum/Agile", "VS Code", "Xcode", "Android Studio"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {t("skills.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
