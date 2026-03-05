"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggler = () => {
    const [theme, setTheme] = React.useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden hover:bg-white/10 transition-colors"
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
