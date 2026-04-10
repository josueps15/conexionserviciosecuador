import { motion } from 'framer-motion';
import { Download, ShieldCheck } from 'lucide-react';
import { InteractiveGridPattern } from '../ui/InteractiveGridPattern';

export const MobileHero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-12 overflow-hidden px-4 bg-[var(--app-bg)] transition-colors duration-500">
            {/* Background (Full Width) */}
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <InteractiveGridPattern width={40} height={40} />
            </div>
            
            <div className="relative z-10 space-y-8 px-4">
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center pt-8"
                >
                    <span className="px-4 py-1.5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase bg-[var(--secondary)]/10 text-[var(--secondary)] font-outfit border border-[var(--secondary)]/20">
                        Nueva Plataforma Digital 2026
                    </span>
                </motion.div>
 
                {/* Slogan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-[1.8rem] leading-[1.05] font-bold font-outfit text-[var(--app-text)] tracking-tight">
                        ¿Buscas un <span className="text-[var(--primary)] font-black">Mecánico</span>,<br />
                        un <span className="text-[var(--secondary)] font-black">Electricista</span>, una <span className="text-[var(--primary)] font-black">Grúa</span> <br />
                        o un <span className="text-[var(--secondary)] font-black">Centro Educativo</span>?
                    </h1>
                    <p className="text-[var(--app-text-muted)] text-xs leading-relaxed max-w-[280px] mx-auto font-medium">
                        En la <span className="text-[var(--app-text)] font-bold uppercase tracking-tight">Conexión <span className="text-[var(--primary)]">Servicios</span></span> encontrarás los mejores profesionales.
                    </p>
                </motion.div>

                {/* Team Image / Visual (Clean PNG) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative px-4"
                >
                    <img 
                        src="/professionals_studio.png" 
                        alt="Equipo Profesional" 
                        className="w-full h-auto object-contain max-h-[300px] drop-shadow-xl rounded-[2rem]"
                    />
                    
                    {/* Floating Trust Badge */}
                    <div className="absolute -bottom-2 left-6 right-6 bg-[var(--app-bg)]/90 backdrop-blur-xl p-3 rounded-2xl border border-[var(--card-border)] shadow-xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                            <ShieldCheck size={16} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[var(--app-text)] leading-tight">Profesionales Verificados</p>
                            <p className="text-[8px] font-bold text-[var(--app-text-muted)]">Seguridad Garantizada</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-3 pt-6"
                >
                    <button 
                        onClick={() => document.getElementById('descarga')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full h-14 bg-[var(--primary)] text-white font-bold rounded-2xl shadow-lg shadow-[var(--primary)]/20 flex items-center justify-center gap-3 active:scale-95 transition-all text-sm uppercase tracking-wider font-outfit"
                    >
                        <Download size={18} />
                        Descargar App
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
                            <p className="text-base font-bold font-outfit text-[var(--app-text)]">{s.value}</p>
                            <p className="text-[7px] font-black uppercase tracking-[0.15em] text-[var(--app-text-muted)]">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
