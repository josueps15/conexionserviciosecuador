import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Cambiar tema"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{ 
                        scale: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : 90,
                        opacity: theme === 'light' ? 1 : 0
                    }}
                    className="absolute"
                >
                    <Sun className="text-amber-500" size={20} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ 
                        scale: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : -90,
                        opacity: theme === 'dark' ? 1 : 0
                    }}
                    className="absolute"
                >
                    <Moon className="text-blue-400" size={20} />
                </motion.div>
            </div>
            <span className="relative z-10 text-[13px] font-black uppercase tracking-wider text-primary transition-colors duration-300">
                {theme === 'light' ? 'Modo Claro' : 'Modo Oscuro'}
            </span>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
};
