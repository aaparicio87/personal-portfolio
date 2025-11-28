import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          {t("contact.title")}
        </h2>

        <div className="mb-12">
          <a
            href="mailto:rlaparicio87@gmail.com"
            className="text-2xl md:text-3xl font-medium hover:underline underline-offset-8 decoration-2 decoration-gray-500 hover:decoration-white transition-all"
          >
            rlaparicio87@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/aaparicio87"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/alejandro-aparicio-guerra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/dlaparicio87/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all hover:-translate-y-1"
            aria-label="Instagram"
          >
            <FiInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/alejo_guerr25"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all hover:-translate-y-1"
            aria-label="Twitter"
          >
            <FiTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
