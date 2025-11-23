import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'outlined';
    className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    const baseClasses = 'px-3 py-1 text-sm rounded-full inline-block';

    const variantClasses = variant === 'outlined'
        ? 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';

    return (
        <span className={`${baseClasses} ${variantClasses} ${className}`}>
            {children}
        </span>
    );
}
