import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../../constants/services';
import { ChevronRight, LayoutGrid, Download,
    Stethoscope, Zap, Truck, GraduationCap,
    Wrench, Home, Briefcase, Scissors } from 'lucide-react';
import { cn } from '../../lib/utils';

export const MobileCategories: React.FC = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const displayed = showAll ? SERVICES_DATA : SERVICES_DATA.slice(0, 4);

    return (
        <section id="servicios" className="relative overflow-hidden bg-[var(--app-bg)] transition-colors duration-500 px-4 py-12">
            {/* Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[var(--primary)]/10 blur-[120px] rounded-full opacity-60 dark:opacity-100" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-cyan-400/10 blur-[120px] rounded-full opacity-60 dark:opacity-100" />
            </div>

            {/* Floating Icon Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-35 z-0">
                <motion.div animate={{ y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 10 }} className="absolute top-[5%]  left-[3%]  text-cyan-500"><Stethoscope size={36} /></motion.div>
                <motion.div animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 12 }} className="absolute top-[40%] left-[2%]  text-green-500"><Wrench size={30} /></motion.div>
                <motion.div animate={{ y: [0, 35, 0] }} transition={{ repeat: Infinity, duration: 14 }} className="absolute bottom-[8%] left-[5%]  text-blue-500"><Truck size={38} /></motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 9  }} className="absolute top-[3%]  right-[4%] text-orange-500"><Zap size={28} /></motion.div>
                <motion.div animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 15 }} className="absolute top-[45%] right-[2%] text-pink-500"><GraduationCap size={40} /></motion.div>
                <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 11 }} className="absolute bottom-[5%] right-[4%] text-yellow-500"><Briefcase size={34} /></motion.div>
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 13 }} className="absolute top-[22%] left-[6%]  text-purple-500"><Home size={26} /></motion.div>
                <motion.div animate={{ y: [0, -35, 0] }} transition={{ repeat: Infinity, duration: 16 }} className="absolute top-[20%] right-[5%] text-teal-400"><Scissors size={30} /></motion.div>
            </div>

            <div className="relative z-10 space-y-8">
                {/* Section Header */}
                <div className="text-center space-y-3">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-black uppercase tracking-widest"
                    >
                        <LayoutGrid size={11} />
                        Directorio Profesional
                    </motion.div>
                    <h2 className="text-[1.7rem] font-black font-outfit text-[var(--app-text)] leading-tight uppercase tracking-tight">
                        Explora nuestros<br />
                        <span className="text-[var(--primary)]">Servicios Disponibles en</span>{' '}
                        <span className="text-orange-500">la APP</span>
                    </h2>
                    <p className="text-sm text-[var(--app-text-muted)] font-medium max-w-xs mx-auto">
                        Conectamos con más de{' '}
                        <strong className="text-[var(--app-text)] font-black">26 categorías</strong>{' '}
                        de servicios profesionales para el hogar y la empresa.
                    </p>
                </div>

                {/* Category Cards */}
                <div className="space-y-4">
                    {displayed.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={cn(
                                "relative overflow-hidden rounded-[2rem] border transition-all duration-300",
                                expandedCategory === cat.id
                                    ? "bg-[var(--app-bg-soft)] border-[var(--primary)] shadow-[0_20px_40px_-5px_rgba(0,209,255,0.2)]"
                                    : "bg-[var(--app-bg-soft)]/60 border-[var(--card-border)] shadow-[0_8px_20px_-5px_rgba(8,145,178,0.08)]"
                            )}
                        >
                            {/* Category Image */}
                            {(cat as any).image && (
                                <div className="h-36 w-full overflow-hidden relative">
                                    <img
                                        src={(cat as any).image}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                        alt={cat.title}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <span className="absolute bottom-3 left-4 text-white font-black text-base font-outfit uppercase">
                                        {cat.title}
                                    </span>
                                </div>
                            )}

                            <button
                                onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                                className="w-full p-5 flex items-center justify-between text-left min-h-[64px]"
                            >
                                <div className="flex items-center gap-4">
                                    {!(cat as any).image && (
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
                                            expandedCategory === cat.id ? "bg-[var(--primary)] text-white" : "bg-[var(--primary)]/10 text-[var(--primary)]"
                                        )}>
                                            <cat.icon size={24} />
                                        </div>
                                    )}
                                    <div>
                                        {!(cat as any).image && (
                                            <h3 className="text-base font-black font-outfit text-[var(--app-text)]">{cat.title}</h3>
                                        )}
                                        <p className="text-xs text-[var(--app-text-muted)] font-medium">{cat.subcategories.length} especialidades</p>
                                    </div>
                                </div>
                                <ChevronRight
                                    size={20}
                                    className={cn(
                                        "text-[var(--app-text-muted)] transition-transform duration-300 shrink-0",
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
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-6 pt-1 space-y-4">
                                            <p className="text-sm text-[var(--app-text-muted)] italic border-l-2 border-[var(--primary)]/30 pl-3 leading-relaxed">
                                                {cat.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {cat.subcategories.map((sub, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 bg-[var(--app-bg)] text-[var(--app-text)] text-[11px] rounded-xl border border-[var(--card-border)] font-bold"
                                                    >
                                                        {sub}
                                                    </span>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => document.getElementById('descarga')?.scrollIntoView({ behavior: 'smooth' })}
                                                className="w-full py-4 bg-[var(--primary)] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary)]/25 active:scale-95 transition-all text-sm"
                                            >
                                                <Download size={16} />
                                                Descargar App
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Ver Más / Ver Menos */}
                <div>
                    <button
                        onClick={() => {
                            setShowAll(prev => {
                                if (prev) document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                                return !prev;
                            });
                        }}
                        className="w-full py-5 bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-[var(--app-text)] font-bold rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-sm"
                    >
                        {showAll ? 'Ver Menos' : 'Ver Todas las Categorías'}
                        <ChevronRight size={18} className={cn("transition-transform", showAll && "-rotate-90")} />
                    </button>
                </div>
            </div>
        </section>
    );
};
