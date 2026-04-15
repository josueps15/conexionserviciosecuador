import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Eye, Handshake, Users, TrendingUp } from 'lucide-react';


interface MobileBusinessBenefitsProps {
    onOpenModal: () => void;
}

export const MobileBusinessBenefits: React.FC<MobileBusinessBenefitsProps> = ({ onOpenModal }) => {
    return (
        <section id="negocios" className="relative overflow-hidden bg-[var(--app-bg)] transition-colors duration-500 px-4 py-12">
            {/* Background: Skewed element + blobs */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[var(--primary)]/[0.03] -skew-x-12 translate-x-1/3 pointer-events-none" />
            <motion.div
                animate={{ y: [0, 40, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-orange-400/10 dark:bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 -left-10 w-[250px] h-[250px] bg-cyan-400/10 blur-[80px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 space-y-8">
                {/* Section Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-[10px] font-black uppercase tracking-widest">
                        <Building2 size={13} />
                        Portal de Socios
                    </div>
                    <h2 className="text-[2rem] font-black font-outfit text-[var(--app-text)] tracking-tight leading-none uppercase">
                        IMPULSA TU{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-cyan-500">
                            ÉXITO
                        </span>
                    </h2>
                </motion.div>

                {/* Business Images Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { src: '/biz_electrician.png', label: 'Electricistas', sub: 'Verificado' },
                        { src: '/biz_plumber.png', label: 'Plomeros', sub: 'En tu zona' },
                        { src: '/biz_mechanic.png', label: 'Mecánicos', sub: 'Taller certificado' },
                        { src: '/biz_owner.png', label: 'Tu Negocio', sub: 'Crece con nosotros' },
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="relative aspect-square rounded-[1.5rem] overflow-hidden border border-[var(--card-border)] shadow-lg group"
                        >
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover transition-transform duration-500 group-active:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-3">
                                <p className="text-white font-black text-sm font-outfit leading-tight">{img.label}</p>
                                <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest">{img.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Publicalo Gratis Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 via-[var(--app-bg)] to-transparent border border-[var(--primary)]/20 shadow-lg relative overflow-hidden"
                >
                    <div className="absolute -top-6 -right-4 opacity-[0.04] dark:opacity-10">
                        <TrendingUp size={120} />
                    </div>
                    <h4 className="text-lg font-black font-outfit text-[var(--app-text)] mb-4 leading-tight">
                        Publícalo{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-cyan-500">
                            gratis
                        </span>{' '}
                        en la app de Conexión Servicios
                    </h4>
                    <ul className="space-y-4">
                        {[
                            {
                                label: 'Beneficios:',
                                text: 'Publicalo 100% gratis, durante 6 meses sin contratos de permanencia.',
                            },
                            {
                                label: 'Cero comisiones:',
                                text: 'Todo el pago es para ti.',
                            },
                            {
                                label: 'Conexión directa:',
                                text: 'Sin intermediarios.',
                            },
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 bg-emerald-500/10 p-1.5 rounded-full text-emerald-500 flex-shrink-0">
                                    <CheckCircle2 size={14} />
                                </div>
                                <span className="text-sm font-medium text-[var(--app-text-muted)] leading-snug">
                                    <strong className="text-[var(--app-text)] font-black uppercase">{item.label}</strong>{' '}
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Crear Perfil Gratis Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="p-5 rounded-3xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] shadow-lg"
                >
                    <h4 className="text-base font-black font-outfit text-[var(--app-text)] mb-2">
                        Publicalo gratis en la app de Conexión Servicios
                    </h4>
                    <p className="text-sm text-[var(--app-text-muted)] font-medium mb-5 leading-relaxed">
                        ¿Tienes un negocio? Regístrate hoy y obtén un bono de{' '}
                        <strong className="text-[var(--primary)]">6 meses Gratis.</strong>
                    </p>

                    {/* 4 Benefits Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        {[
                            { icon: Eye, title: 'Visibilidad', desc: 'Tu perfil ante miles de clientes.' },
                            { icon: Handshake, title: 'Conexión', desc: 'Trato directo, resultados inmediatos.' },
                            { icon: Users, title: 'Más clientes', desc: 'Llega a miles de nuevos clientes.' },
                            { icon: TrendingUp, title: 'Crecimiento', desc: 'Escala tu negocio a otro nivel.' },
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="w-10 h-10 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--primary)]">
                                    <item.icon size={20} />
                                </div>
                                <h5 className="text-xs font-black font-outfit text-[var(--app-text)] uppercase tracking-tight">{item.title}</h5>
                                <p className="text-[10px] text-[var(--app-text-muted)] font-bold italic leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onOpenModal}
                        className="w-full h-14 bg-gradient-to-r from-[var(--primary)] to-cyan-500 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl shadow-[var(--primary)]/30 active:scale-95 transition-all text-sm"
                    >
                        UNIRME AHORA
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
