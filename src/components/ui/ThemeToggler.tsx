"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggler = () => {
    const [theme, setTheme] = React.useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "dark";
        }
        return "dark";
    });

    React.useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "light") {
            root.classList.add("light");
        } else {
            root.classList.remove("light");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative h-10 w-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center overflow-hidden hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
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
