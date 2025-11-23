import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
    const hoverClass = hover
        ? 'hover:border-gray-900 dark:hover:border-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
        : '';

    return (
        <div className={`bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 ${hoverClass} ${className}`}>
            {children}
        </div>
    );
}
