import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
];

export default function Navigation() {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
                    Alejandro
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
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

                <div className="md:hidden flex items-center gap-4">
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

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
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
