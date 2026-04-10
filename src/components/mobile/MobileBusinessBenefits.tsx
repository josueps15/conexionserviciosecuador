import { motion } from 'framer-motion';
import { CheckCircle2, Users, Briefcase, Building2, Search, ArrowRight } from 'lucide-react';

export const MobileBusinessBenefits = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const benefits = [
        { 
            icon: Users, 
            title: '+ Clientes', 
            desc: 'Flujo constante de solicitudes diarias.',
            color: 'bg-orange-500/10 text-orange-500'
        },
        { 
            icon: Building2, 
            title: 'Crecimiento', 
            desc: 'Escala tu negocio a nivel nacional.',
            color: 'bg-green-500/10 text-green-500'
        },
        { 
            icon: Briefcase, 
            title: 'Gestión', 
            desc: 'Control total desde tu móvil.',
            color: 'bg-blue-500/10 text-blue-500'
        },
        { 
            icon: Search, 
            title: 'Visibilidad', 
            desc: 'Aparece en las búsquedas de tu zona.',
            color: 'bg-purple-500/10 text-purple-500'
        }
    ];

    return (
        <section className="px-6 space-y-10 pt-12 pb-20 bg-[var(--app-bg-soft)] rounded-[3rem] mx-4 transition-colors duration-500">
            <div className="space-y-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">
                    <CheckCircle2 size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Para Negocios</span>
                </div>
                <h2 className="text-3xl font-bold font-outfit text-[var(--app-text)] leading-tight">
                    ¿Tienes un Negocio en <span className="text-[var(--primary)]">crecimiento</span>?
                </h2>
                <p className="text-[var(--app-text-muted)] text-sm leading-relaxed max-w-[280px] mx-auto font-medium transition-colors duration-500">
                    Únete a la red más grande de servicios en Ecuador. ¡Publícalo GRATIS ahora!
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[var(--app-bg-soft)] p-5 rounded-3xl border border-[var(--card-border)] shadow-[0_15px_30px_-5px_rgba(8,145,178,0.15)] dark:shadow-none flex flex-col items-center text-center space-y-3 transition-colors duration-500"
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${benefit.color}`}>
                            <benefit.icon size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--app-text)] text-sm mb-1 font-outfit">{benefit.title}</h4>
                            <p className="text-[10px] text-[var(--app-text-muted)] font-medium leading-tight">{benefit.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="pt-4 px-2">
                <button 
                    onClick={onOpenModal}
                    className="w-full h-16 bg-[var(--primary)] text-white font-bold rounded-2xl shadow-xl shadow-[var(--primary)]/20 flex items-center justify-center gap-3 active:scale-95 transition-all text-base uppercase tracking-wider font-outfit"
                >
                    Registrar Negocio
                    <ArrowRight size={20} className="opacity-70" />
                </button>
            </div>
        </section>
    );
};
