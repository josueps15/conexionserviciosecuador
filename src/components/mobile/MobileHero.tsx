import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck } from 'lucide-react';

export const MobileHero: React.FC = () => {
    return (
        <section className="relative pt-6 pb-12 overflow-hidden px-6">
            {/* Background Light Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[var(--primary)]/10 blur-[90px] rounded-full pointer-events-none transition-colors duration-500" />
            
            <div className="relative z-10 space-y-8">
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                >
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.25em] uppercase bg-[var(--primary)]/10 text-[var(--primary)] font-outfit">
                        Plataforma 2026
                    </span>
                </motion.div>
 
                {/* Slogan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center space-y-5"
                >
                    <h1 className="text-[2.2rem] leading-[1.05] font-bold font-outfit text-[var(--app-text)] tracking-tight">
                        ¿Necesitas un <span className="text-[var(--primary)]">Mecánico</span>,<br />
                        una <span className="text-[var(--primary)]">Grúa</span> o cualquier <br />
                        otro <span className="text-[var(--primary)]">Servicio</span>?
                    </h1>
                    <p className="text-[var(--app-text-muted)] text-sm leading-relaxed max-w-[280px] mx-auto font-medium transition-colors duration-500">
                        Encuentra profesionales de confianza en todo el Ecuador con <span className="font-bold text-[var(--app-text)] uppercase tracking-tight">Conexión <span className="text-[var(--primary)]">Servicios</span></span>.
                    </p>
                </motion.div>

                {/* Team Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-[2.5rem] overflow-hidden border-4 border-[var(--app-bg-soft)] shadow-2xl"
                >
                    <img 
                        src="/professionals_collage.png" 
                        alt="Equipo Profesional" 
                        className="w-full h-auto aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--app-bg)]/40 to-transparent" />
                    
                    {/* Floating Trust Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0">
                            <ShieldCheck size={16} />
                        </div>
                        <p className="text-[10px] font-bold text-slate-800 leading-tight">Profesionales 100% Verificados</p>
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-3 pt-2"
                >
                    <button className="w-full h-14 bg-[var(--primary)] text-white font-bold rounded-2xl shadow-lg shadow-[var(--primary)]/20 flex items-center justify-center gap-3 active:scale-95 transition-all text-base uppercase tracking-wider font-outfit">
                        <Download size={18} />
                        Descargar App
                    </button>
                    
                    <button className="w-full h-14 bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-[var(--app-text)] font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-base uppercase tracking-wider font-outfit">
                        Explorar Servicios
                        <ArrowRight size={18} className="opacity-50" />
                    </button>
                </motion.div>

                {/* Mini Stats Row */}
                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[var(--card-border)] w-full">
                    {[
                        { value: '50+', label: 'Categorías' },
                        { value: '100%', label: 'Seguro' },
                        { value: '24', label: 'Provincias' },
                    ].map((s) => (
                        <div key={s.label} className="text-center space-y-0.5">
                            <p className="text-xl font-bold font-outfit text-[var(--app-text)]">{s.value}</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[var(--app-text-muted)]">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
