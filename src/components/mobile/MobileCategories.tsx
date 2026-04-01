import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_CATEGORIES } from '../../constants/services';
import { ArrowRight } from 'lucide-react';

export const MobileCategories: React.FC = () => {
    // Show only the first 6 for mobile to keep it clean, or all if preferred.
    // Let's show all but in a nice grid.
    return (
        <section className="px-6 space-y-6">
            <div className="flex items-end justify-between">
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Explora</span>
                    <h2 className="text-2xl font-black font-outfit uppercase tracking-tight text-[var(--app-text)] leading-none transition-colors duration-500">
                        Servicios <span className="text-gradient">Disponibles</span>
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {SERVICE_CATEGORIES.map((cat, i) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="relative group active:scale-95 transition-all"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} rounded-3xl border border-black/5 dark:${cat.border} opacity-50 dark:opacity-50 group-active:opacity-100 transition-opacity`} />
                        <div className="relative p-5 flex flex-col items-center text-center space-y-3">
                            <div 
                                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                            >
                                <cat.icon size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-[var(--app-text)] opacity-90 transition-colors duration-500">
                                {cat.label}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="w-full py-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl text-[var(--app-text-muted)] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:bg-black/10 dark:active:bg-white/10 transition-all transition-colors duration-500">
                Ver todas las subcategorías
                <ArrowRight size={14} />
            </button>
        </section>
    );
};
