import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { translations, Locale, TranslationPath } from "@data/traslations";

interface LanguageContextType {
  language: Locale;
  toggleLanguage: () => void;
  t: (key: TranslationPath) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

type Props = PropsWithChildren;

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<Locale>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Locale) || "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: TranslationPath): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export { LanguageProvider, useLanguage };
