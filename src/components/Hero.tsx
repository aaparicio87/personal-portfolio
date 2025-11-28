import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Main title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t("hero.greeting")}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/alejandro-aparicio-guerra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6 text-gray-900 dark:text-white" />
              </a>
              <a
                href="https://github.com/aaparicio87"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6 text-gray-900 dark:text-white" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl transform rotate-3"></div>

              {/* Profile image container */}
              <div className="relative bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                <img
                  src="/profile.png"
                  alt="Alejandro Aparicio"
                  className="w-72 h-72 rounded-full object-cover border-4 border-gray-900 dark:border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
