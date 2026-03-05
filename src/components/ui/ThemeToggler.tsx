import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";

export const ThemeToggler = ({ className }: { className?: string }) => {
    // Initial state from localStorage or default
    const [theme, setTheme] = React.useState<"light" | "dark">("dark");

    // Initialize theme on mount
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            // Uncomment if you want to follow system preference
            // setTheme("light");
        }
    }, []);

    // Apply theme changes
    React.useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "light") {
            root.classList.add("light");
            root.style.colorScheme = "light";
        } else {
            root.classList.remove("light");
            root.style.colorScheme = "dark";
        }
        localStorage.setItem("theme", theme);
        console.log("Theme updated to:", theme, "Classes:", root.className);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className={cn(
                "relative h-10 w-10 rounded-xl bg-slate-800/10 dark:bg-slate-200/10 border border-slate-800/10 dark:border-slate-200/10 flex items-center justify-center overflow-hidden hover:bg-slate-800/20 dark:hover:bg-slate-200/20 transition-all",
                className
            )}
            aria-label="Toggle Theme"
        >
            <motion.div
                animate={{
                    y: theme === "dark" ? 0 : 40,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                className="absolute"
            >
                <Moon size={20} className="text-primary" />
            </motion.div>
            <motion.div
                animate={{
                    y: theme === "light" ? 0 : -40,
                    opacity: theme === "light" ? 1 : 0,
                }}
                className="absolute"
            >
                <Sun size={20} className="text-secondary" />
            </motion.div>
        </button>
    );
};
