import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const MobileHero: React.FC = () => {
    const heroImages = [
        { src: '/plomeria_img.png', label: 'Plomería', color: 'sky' },
        { src: '/medicos_img.png', label: 'Salud', color: 'rose' },
        { src: '/grua_camion.png', label: 'Grúas', color: 'orange' },
        { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80', label: 'Limpieza', color: 'emerald' }
    ];

    return (
        <section className="relative pt-8 pb-12 overflow-hidden px-6">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-10">
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                >
                    <span className="px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-primary/10 border border-primary/20 text-primary shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                        Plataforma Lista
                    </span>
                </motion.div>

                {/* Slogan */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-[2.6rem] leading-[1.1] font-black font-outfit uppercase tracking-tight text-white">
                        ¿Buscas un <span className="text-primary italic">Mecánico</span>,<br />
                        un <span className="text-secondary text-gradient">Electricista</span>,<br />
                        o una <span className="text-primary text-gradient">Grúa</span>?
                    </h1>
                    <p className="text-slate-400 text-base leading-relaxed max-w-[280px] mx-auto">
                        En la APP <span className="text-white font-bold">Conexión Servicios</span> encontrarás los mejores profesionales.
                    </p>
                </motion.div>

                {/* Visual Collage - Simplified for Mobile */}
                <div className="grid grid-cols-2 gap-3 aspect-square max-w-[320px] mx-auto">
                    {heroImages.map((img, i) => (
                        <motion.div
                            key={img.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-xl aspect-square group`}
                        >
                            <img src={img.src} alt={img.label} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                                <span className={`text-[10px] font-black uppercase tracking-widest text-white/90`}>
                                    {img.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col gap-4 pt-4"
                >
                    <button className="w-full h-16 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-all text-lg uppercase tracking-wider group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        <Download size={22} className="relative z-10" />
                        <span className="relative z-10">Descargar App</span>
                        <ArrowRight size={20} className="relative z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </button>
                    
                    <button className="w-full h-16 bg-white/5 border-2 border-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-lg uppercase tracking-wider backdrop-blur-md">
                        Explorar Servicios
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
