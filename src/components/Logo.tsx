export default function Logo() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:scale-110"
        >
            {/* Curly braces {} */}
            <path
                d="M12 6C10 6 9 7 9 9V12C9 13 8 14 6 14C8 14 9 15 9 16V19C9 21 10 22 12 22M20 6C22 6 23 7 23 9V12C23 13 24 14 26 14C24 14 23 15 23 16V19C23 21 22 22 20 22"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900 dark:text-white"
            />
        </svg>
    );
}
