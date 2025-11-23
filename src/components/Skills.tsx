import { Code2, Smartphone, Server, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Context API', 'Material UI', 'Tailwind CSS', 'Next.js'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native CLI', 'Expo.js', 'Swift', 'Kotlin', 'Firebase', 'OneSignal', 'Fastlane', 'CubiCasa SDK', 'Zoom Video SDK'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Python', 'REST APIs', 'Firebase Cloud Functions', 'AWS Lambda', 'Microservices'],
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'TypeORM', 'Firebase Firestore', 'Docker', 'Git', 'AWS', 'VMware', 'KVM', 'Proxmox'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
