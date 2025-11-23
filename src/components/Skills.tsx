import { memo } from 'react';
import { Code2, Smartphone, Server, Database, Cloud, Wrench } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Expo.js', 'TypeScript', 'Redux Toolkit', 'Native Modules (Swift/Kotlin)'],
  },
  {
    title: 'Web Development',
    icon: Code2,
    skills: ['React.js', 'JavaScript', 'Material UI', 'HTML/CSS', 'Responsive Design'],
  },
  {
    title: 'Back-end',
    icon: Server,
    skills: ['Node.js', 'Nest.js', 'FastAPI', 'Python', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQLite', 'TypeORM', 'Firebase Firestore', 'MariaDB', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS (Lambda, S3, Cognito)', 'Firebase', 'Fastlane', 'Docker', 'CI/CD'],
  },
  {
    title: 'Tools & Other',
    icon: Wrench,
    skills: ['Git', 'Redux', 'RTK Query', 'OneSignal', 'JSONForms', 'Zoom SDK'],
  },
];

const SkillCategoryCard = memo(({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;

  return (
    <Card className="p-6" hover>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <Badge key={index}>
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
});

SkillCategoryCard.displayName = 'SkillCategoryCard';

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Habilidades
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
