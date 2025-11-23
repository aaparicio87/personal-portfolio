import { Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-2">
          Alejandro Aparicio Guerra
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Full-Stack JavaScript Developer | React Native & React.js Specialist
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Especializado en desarrollar aplicaciones web y móviles robustas con expertise en JavaScript, TypeScript y Python
        </p>
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://linkedin.com/in/alejandro-aparicio-guerra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-900 dark:text-white" />
          </a>
          <a
            href="mailto:rlaparicio87@gmail.com"
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
          </a>
        </div>
        <a
          href="#experience"
          className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
        >
          Ver experiencia
        </a>
      </div>
    </section>
  );
}
