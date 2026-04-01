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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-[2.4rem] leading-[1.1] font-black font-outfit uppercase tracking-tight text-white drop-shadow-lg">
                        ¿Buscas un <span className="text-primary italic">Mecánico</span>,<br />
                        un <span className="text-secondary text-gradient">Electricista</span>,<br />
                        una <span className="text-primary text-gradient">Grúa</span> o un <br />
                        <span className="text-secondary text-gradient underline decoration-secondary/30 underline-offset-4">Centro Educativo</span>?
                    </h1>
                    <p className="text-slate-300 text-base leading-relaxed max-w-[300px] mx-auto font-medium">
                        En la <strong className="text-white">APP Conexión Servicios</strong> encontrarás los mejores servicios profesionales.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-4 pt-2"
                >
                    <button className="w-full h-16 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 active:scale-95 transition-all text-lg uppercase tracking-wider group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        <Download size={22} className="relative z-10" />
                        <span className="relative z-10 font-outfit">Descargar App</span>
                    </button>
                    
                    <button className="w-full h-16 bg-slate-900/50 border-2 border-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-lg uppercase tracking-wider backdrop-blur-md font-outfit">
                        Explorar Servicios
                        <ArrowRight size={20} className="opacity-50" />
                    </button>
                </motion.div>

                {/* Visual Showcase (Horizontal Scroll) - Creative Solution */}
                <div className="pt-4 overflow-hidden -mx-6">
                    <div className="flex gap-4 overflow-x-auto px-6 pb-6 no-scrollbar snap-x">
                        {heroImages.map((img, i) => (
                            <motion.div
                                key={img.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex-shrink-0 w-[180px] aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl snap-center"
                            >
                                <img src={img.src} alt={img.label} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-4">
                                    <span className="text-[11px] font-black uppercase tracking-widest text-white tracking-widest">
                                        {img.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 w-full">
                    {[
                        { value: '50+', label: 'Categorías' },
                        { value: '100%', label: 'Verificados' },
                        { value: '24', label: 'Provincias' },
                    ].map((s, i) => (
                        <div key={s.label} className="text-center space-y-1">
                            <p className="text-2xl font-black font-outfit text-white">{s.value}</p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{s.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
