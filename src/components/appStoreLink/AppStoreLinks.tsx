import { memo } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useLanguage } from "@context/LanguageContext";

interface AppStoreLinksProps {
  appStoreUrl?: string;
  playStoreUrl?: string;
}

function AppStoreLinks({ appStoreUrl, playStoreUrl }: AppStoreLinksProps) {
  const { t } = useLanguage();

  // No renderizar nada si no hay URLs
  if (!appStoreUrl && !playStoreUrl) {
    return null;
  }

  return (
    <>
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("projects.appStore") || "App Store"}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          title={t("projects.appStore")}
        >
          <FaApple className="w-5 h-5" />
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("projects.playStore") || "Play Store"}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          title={t("projects.playStore")}
        >
          <FaGooglePlay className="w-5 h-5" />
        </a>
      )}
    </>
  );
}

export default memo(AppStoreLinks);
