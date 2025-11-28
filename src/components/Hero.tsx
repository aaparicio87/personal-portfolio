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

            {/* CV Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/CURRICULUM-VITAE-ENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gray-900 dark:hover:border-white transition-all duration-300"
              >
                <span>📄</span>
                <span>{t("hero.cv.english")}</span>
              </a>
              <a
                href="/CURRICULUM-VITAE-ESP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-gray-900 dark:hover:border-white transition-all duration-300"
              >
                <span>📄</span>
                <span>{t("hero.cv.spanish")}</span>
              </a>
            </div>

            {/* Social links */}

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
