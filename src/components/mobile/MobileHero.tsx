import { motion } from 'framer-motion';
import { ShieldCheck, Download, ChevronRight } from 'lucide-react';

export const MobileHero: React.FC = () => {
    return (
        <section className="relative pt-8 pb-16 overflow-hidden px-4 bg-[var(--app-bg)] transition-colors duration-500">
            {/* Atmospheric Glows */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] bg-cyan-400/15 dark:bg-cyan-900/20 blur-[120px] rounded-full opacity-70" />
                <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-blue-300/10 dark:bg-blue-900/10 blur-[120px] rounded-full opacity-50" />

                {/* Floating Cyan Blocks */}
                {[
                    { w: 160, h: 160, left: '-6%', top: '8%', r: 12 },
                    { w: 200, h: 200, left: '78%', top: '5%', r: -15 },
                    { w: 140, h: 140, left: '-4%', top: '55%', r: 25 },
                    { w: 180, h: 180, left: '75%', top: '60%', r: -10 },
                ].map((block, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-[2.5rem] bg-[#00D1FF]/20 dark:bg-[#00D1FF]/10 shadow-[0_10px_30px_rgba(0,209,255,0.12)]"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.9, 0.9, 0, 0, 0.9, 0.9, 0],
                            y: [0, -15, 15, 0, 0, -15, 15, 0],
                        }}
                        transition={{
                            duration: 120,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.02, 0.48, 0.5, 0.501, 0.52, 0.98, 1],
                            delay: i * 2,
                        }}
                        style={{
                            width: block.w,
                            height: block.h,
                            left: block.left,
                            top: block.top,
                            rotate: block.r,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 space-y-6 px-1">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center pt-2"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.18em] uppercase bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 font-outfit">
                        <ShieldCheck size={12} />
                        La Red de Confianza del Ecuador
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-[2rem] leading-[1.1] font-bold font-outfit text-[var(--app-text)] tracking-tight">
                        Encuentra el servicio<br />
                        que necesitas,<br />
                        con la <span className="text-[var(--primary)] font-black">confianza</span><br />
                        que <span className="text-[var(--secondary)] font-black">mereces.</span>
                    </h1>
                    <p className="text-[var(--app-text-muted)] text-sm leading-relaxed max-w-[300px] mx-auto font-medium">
                        Conectamos a miles de familias y empresas ecuatorianas con{' '}
                        <strong className="text-[var(--app-text)] font-bold">profesionales verificados</strong>{' '}
                        en todo el país.
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative px-2"
                >
                    <img
                        src="/professionals_studio.png"
                        alt="Expertos Profesionales de Conexión Servicios"
                        className="w-full h-auto object-contain max-h-[320px] drop-shadow-2xl rounded-[2rem]"
                        loading="lazy"
                    />

                    {/* Floating Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -bottom-3 left-4 right-4 bg-[var(--app-bg)]/90 backdrop-blur-xl p-3 rounded-2xl border border-[var(--card-border)] shadow-xl flex items-center gap-3"
                    >
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--app-text)] leading-tight">Verificados y Certificados</p>
                            <p className="text-[9px] font-bold text-[var(--app-text-muted)]">Profesionales de confianza</p>
                        </div>
                        {/* Coverage badge */}
                        <div className="ml-auto bg-[var(--primary)] text-white rounded-xl px-3 py-1.5 shadow-lg text-center shrink-0">
                            <p className="text-[9px] font-black uppercase tracking-wider">Todo Ecuador</p>
                            <p className="text-[8px] font-medium opacity-80">24 Provincias</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-col gap-3 pt-8 px-1"
                >
                    <button
                        onClick={() => document.getElementById('descarga')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full h-14 bg-[var(--primary)] text-white font-black rounded-2xl shadow-xl shadow-[var(--primary)]/30 flex items-center justify-center gap-3 active:scale-95 transition-all text-sm uppercase tracking-wider font-outfit"
                    >
                        <Download size={18} />
                        Descargar la App
                    </button>
                    <button
                        onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full h-14 bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-[var(--app-text)] font-bold rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-sm font-outfit"
                    >
                        Ver Servicios <ChevronRight size={18} className="opacity-50" />
                    </button>
                </motion.div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[var(--card-border)]">
                    {[
                        { value: '26+', label: 'Categorías' },
                        { value: '100%', label: 'Verificados' },
                        { value: '24', label: 'Provincias' },
                    ].map((s) => (
                        <div key={s.label} className="text-center py-3 space-y-1">
                            <p className="text-lg font-black font-outfit text-[var(--app-text)]">{s.value}</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[var(--app-text-muted)]">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
