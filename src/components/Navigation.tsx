import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navigation() {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navLinks = [
        { href: '#about', label: t('nav.about') },
        { href: '#experience', label: t('nav.experience') },
        { href: '#skills', label: t('nav.skills') },
        { href: '#projects', label: t('nav.projects') },
        { href: '#contact', label: t('nav.contact') },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <Logo />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        Alejandro Aparicio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative group"
                        >
                            <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                                {link.label}
                            </span>
                            {/* Active indicator */}
                            <span
                                className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-500 ease-in-out ${activeSection === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                                    }`}
                            />
                        </a>
                    ))}

                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                            aria-label="Select language"
                        >
                            <Languages className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {language.toUpperCase()}
                            </span>
                        </button>

                        {isLanguageMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 overflow-hidden">
                                <button
                                    onClick={() => {
                                        if (language !== 'es') toggleLanguage();
                                        setIsLanguageMenuOpen(false);
                                    }}
                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-between ${language === 'es'
                                            ? 'text-gray-900 dark:text-white font-bold bg-gray-50 dark:bg-gray-800/50'
                                            : 'text-gray-600 dark:text-gray-400'
                                        }`}
                                >
                                    <span>{language === 'es' ? 'Español' : 'Spanish'}</span>
                                    {language === 'es' && <span className="text-xs">✓</span>}
                                </button>
                                <button
                                    onClick={() => {
                                        if (language !== 'en') toggleLanguage();
                                        setIsLanguageMenuOpen(false);
                                    }}
                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-between ${language === 'en'
                                            ? 'text-gray-900 dark:text-white font-bold bg-gray-50 dark:bg-gray-800/50'
                                            : 'text-gray-600 dark:text-gray-400'
                                        }`}
                                >
                                    <span>{language === 'es' ? 'Inglés' : 'English'}</span>
                                    {language === 'en' && <span className="text-xs">✓</span>}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        ) : (
                            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                        aria-label="Toggle language"
                    >
                        <Languages className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {language.toUpperCase()}
                        </span>
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        ) : (
                            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        )}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-900 dark:text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${activeSection === link.href ? 'text-gray-900 dark:text-white font-semibold' : ''
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
