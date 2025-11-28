export interface Project {
    titleKey: string;
    descriptionKey: string;
    technologies: string[];
    github?: string;
    live?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
}

export const projects: Project[] = [
    {
        titleKey: 'projects.items.mobilepro.title',
        descriptionKey: 'projects.items.mobilepro.description',
        technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase'],
        // GitHub omitido - proyecto privado de empresa
        appStoreUrl: 'https://apps.apple.com/app/merge-mobilepro/id6738745095',
    },
    {
        titleKey: 'projects.items.sensordata.title',
        descriptionKey: 'projects.items.sensordata.description',
        technologies: ['React Native CLI', 'OneSignal', 'Fastlane', 'react-native-maps'],
        // GitHub omitido - proyecto privado de empresa
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sensordata.uy&pcampaignid=web_share',
        appStoreUrl: 'https://apps.apple.com/es/app/sensordata/id1423295317?l=en-GB',
    },
    {
        titleKey: 'projects.items.basspago.title',
        descriptionKey: 'projects.items.basspago.description',
        technologies: ['React.js', 'React Native', 'Firebase', 'SUMSUB SDK', 'Material UI'],
        // GitHub omitido - proyecto privado de empresa
        live: 'https://www.basspago.com.br/conta-digital',
    },
    {
        titleKey: 'projects.items.portfolio.title',
        descriptionKey: 'projects.items.portfolio.description',
        technologies: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/aaparicio87/personal-portfolio',
    },
];
