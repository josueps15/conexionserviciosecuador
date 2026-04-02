import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../../constants/services';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export const MobileCategories: React.FC = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    return (
        <section className="px-6 space-y-8">
            <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--primary)] font-outfit">Explora</span>
                <h2 className="text-3xl font-bold font-outfit text-[var(--app-text)] leading-tight">
                    Nuestros <span className="text-[var(--primary)]">Servicios</span>
                </h2>
                <p className="text-sm text-[var(--app-text-muted)] font-medium">
                    Toca una categoría para ver todas las especialidades disponibles.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {SERVICES_DATA.map((cat, i) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                        className={cn(
                            "relative overflow-hidden rounded-[2rem] border transition-all duration-300",
                            expandedCategory === cat.id 
                                ? "bg-[var(--app-bg-soft)] border-[var(--primary)] shadow-xl shadow-[var(--primary)]/10" 
                                : "bg-[var(--app-bg-soft)]/50 border-[var(--card-border)]"
                        )}
                    >
                        <button 
                            onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                            className="w-full p-6 flex items-center justify-between text-left"
                        >
                            <div className="flex items-center gap-5">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
                                    expandedCategory === cat.id ? "bg-[var(--primary)] text-white" : "bg-[var(--primary)]/10 text-[var(--primary)]"
                                )}>
                                    <cat.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-outfit text-[var(--app-text)]">{cat.title}</h3>
                                    <p className="text-xs text-[var(--app-text-muted)] font-medium">{cat.subcategories.length} especialistas</p>
                                </div>
                            </div>
                            <ChevronRight 
                                size={20} 
                                className={cn(
                                    "text-[var(--app-text-muted)] transition-transform duration-300",
                                    expandedCategory === cat.id && "rotate-90 text-[var(--primary)]"
                                )} 
                            />
                        </button>

                        <AnimatePresence>
                            {expandedCategory === cat.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-2">
                                        <p className="text-sm text-[var(--app-text-muted)] mb-5 italic border-l-2 border-[var(--primary)]/30 pl-3">
                                            {cat.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {cat.subcategories.map((sub, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-[var(--app-bg)] text-[var(--app-text)] text-[11px] rounded-xl border border-[var(--card-border)] font-bold shadow-sm"
                                                >
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                        <button className="w-full py-4 bg-[var(--primary)] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary)]/20 active:scale-95 transition-all">
                                            <ChevronRight size={18} />
                                            Descargar App
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
