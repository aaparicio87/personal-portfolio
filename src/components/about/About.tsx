import { useLanguage } from "@context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {t("about.title")}
        </h2>
        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>{t("about.description")}</p>
        </div>
      </div>
    </section>
  );
}
