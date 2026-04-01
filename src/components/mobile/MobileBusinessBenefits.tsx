import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_BENEFITS } from '../../constants/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const MobileBusinessBenefits: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
    return (
        <section className="px-6 space-y-12">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={12} />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Para Negocios</span>
                </div>
                <h2 className="text-3xl font-black font-outfit uppercase tracking-tight text-[var(--app-text)] leading-none transition-colors duration-500">
                    ¿Tienes un<br />
                    <span className="text-gradient">Negocio en</span><br />
                    crecimiento?
                </h2>
                <p className="text-[var(--app-text-muted)] text-sm leading-relaxed transition-colors duration-500">
                    ¡Publícalo <span className="text-[var(--app-text)] dark:text-white font-bold uppercase">GRATIS</span> en la APP de Conexión Servicios!
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {BUSINESS_BENEFITS.map((benefit, i) => (
                    <motion.div
                        key={benefit.tag}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl group flex flex-col h-[320px] transition-colors duration-500"
                    >
                        {/* Image Layer */}
                        <img 
                            src={benefit.img} 
                            alt={benefit.tag} 
                            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] opacity-60 dark:opacity-60 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                        />
                        
                        {/* Content Layer Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 space-y-3">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${benefit.color === 'emerald' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]'}`} />
                                <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${benefit.color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>
                                    {benefit.tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold font-outfit text-white leading-tight">
                                {benefit.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="pt-4">
                <button 
                    onClick={onOpenModal}
                    className="w-full h-16 bg-emerald-600 dark:bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-95 transition-all text-lg uppercase tracking-wider group overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    Registra tu Negocio
                    <ArrowRight size={20} className="opacity-50" />
                </button>
            </div>
        </section>
    );
};
