import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
];

export default function Navigation() {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

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
                {/* Logo with profile photo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <img
                        src="/profile.png"
                        alt="Alejandro Aparicio"
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 group-hover:border-gray-900 dark:group-hover:border-white transition-colors"
                    />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        Alejandro
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
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
                                className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white transition-opacity ${activeSection === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                                    }`}
                            />
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

                {/* Mobile Navigation */}
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

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
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
