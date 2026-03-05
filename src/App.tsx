import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Zap,
    Diamond,
    Briefcase,
    Layers,
    Globe,
    Mail,
    Instagram,
    Facebook,
    Twitter
} from 'lucide-react';

import { TextReveal } from './components/ui/TextReveal';
import { InteractiveHoverButton } from './components/ui/InteractiveHoverButton';
import { IPhoneMockup } from './components/ui/IPhoneMockup';
import { BentoGrid, BentoGridItem } from './components/ui/BentoGrid';
import { ImageTrailCursor } from './components/ui/ImageTrailCursor';
import { ContainerScroll } from './components/ui/ContainerScroll';
import { ThemeToggler } from './components/ui/ThemeToggler';
import { DotPattern } from './components/ui/DotPattern';
import { Ripple } from './components/ui/Ripple';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { cn } from './lib/utils';

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    };

    const appScreens = [
        '/assets/screenshots/splash_screen.png',
        '/assets/screenshots/home_services.png',
        '/assets/screenshots/region_select.png',
        '/assets/screenshots/ai_support.png',
        '/assets/screenshots/register_business.png'
    ];

    return (
        <div id="root-app" className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-primary selection:text-white overflow-hidden" style={{ opacity: 1 }}>
            {/* Dynamic Background Patterns */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                    )}
                />
                <Ripple mainCircleSize={210} mainCircleOpacity={0.15} numCircles={8} />

                {/* Ambient Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/15 blur-[150px] rounded-full opacity-30" />
            </div>

            {/* Scroll Progress Bar */}
            <ScrollProgress className="top-0" />

            {/* Magic Animated Cursor */}
            <AnimatedCursor />

            {/* Interactive Cursor Trail */}
            <ImageTrailCursor images={appScreens} />

            {/* Header */}
            <header className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent border-b border-transparent"
            )}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 font-outfit font-extrabold text-2xl tracking-tight"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                            <Layers size={22} className="text-white" />
                        </div>
                        <span>Conexión <span className="text-primary">Servicios</span></span>
                    </motion.a>

                    <nav className="hidden md:flex items-center gap-10 font-medium text-slate-400">
                        {['Inicio', 'Objetivo', 'Servicios'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <div className="flex items-center gap-4">
                            <ThemeToggler />
                            <InteractiveHoverButton text="Descargar App" className="bg-white/5 border-white/10 text-white hover:text-black" />
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="inicio" className="relative min-h-screen flex items-center pt-24">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Sistemas Verificados 2024
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-outfit font-black mb-8 leading-[1.1] tracking-tighter">
                                Evoluciona tu <br />
                                <span className="text-gradient">Ecosistema Profesional</span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                                La plataforma definitiva que fusiona Inteligencia Artificial y expertos verificados para ofrecer resultados excepcionales en tiempo récord.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <InteractiveHoverButton text="Comenzar Ahora" />
                                <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                                    Saber Más
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="relative h-[600px] w-full hidden lg:block"
                        >
                            <div className="w-full h-full flex items-center justify-center font-outfit text-slate-500 italic text-center px-10">
                                <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                    <img
                                        src="/assets/screenshots/splash_screen.png"
                                        alt="App Preview"
                                        className="w-full h-full object-contain rounded-2xl shadow-2xl"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Text Reveal Section */}
                <section id="objetivo" className="relative">
                    <TextReveal text="Magic UI will change the way you design. Conexión Servicios evoluciona contigo hacia el futuro profesional." />
                </section>

                {/* Container Scroll Showcase */}
                <section className="py-20 bg-slate-950">
                    <ContainerScroll
                        titleComponent={
                            <div className="flex flex-col items-center">
                                <h1 className="text-4xl md:text-5xl font-outfit font-semibold text-white mb-4">
                                    Unleash the power of <br />
                                    <span className="text-gradient text-5xl md:text-[6rem] font-bold leading-none mt-4 block">
                                        Scroll Animations
                                    </span>
                                </h1>
                            </div>
                        }
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full bg-slate-900 overflow-hidden">
                            <div className="p-10 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-6">Experiencia Nativa</h3>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Nuestra App nativa para iOS y Android redefine la gestión de servicios. Rapidez, seguridad y una interfaz que amarás usar.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { title: 'IA Integrada', desc: 'Asistente 24/7' },
                                        { title: 'Pagos Seguros', desc: 'Encriptación' },
                                        { title: 'Verificación', desc: 'Filtros Pro' },
                                        { title: 'Soporte VIP', desc: 'Prioridad' },
                                    ].map((item) => (
                                        <div key={item.title}>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative bg-slate-800/50 flex items-center justify-center p-10">
                                <IPhoneMockup>
                                    <div className="w-full h-full relative">
                                        {appScreens.map((src, i) => (
                                            <motion.img
                                                key={src}
                                                src={src}
                                                alt="App Interface"
                                                className="absolute inset-0 w-full h-full object-cover"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 1, 1, 0] }}
                                                transition={{
                                                    duration: 5,
                                                    delay: i * 5,
                                                    repeat: Infinity,
                                                    times: [0, 0.1, 0.9, 1]
                                                }}
                                            />
                                        ))}
                                    </div>
                                </IPhoneMockup>
                            </div>
                        </div>
                    </ContainerScroll>
                </section>

                {/* Bento Grid Services */}
                <section id="servicios" className="py-32 px-6">
                    <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-5xl font-outfit font-black mb-4">Servicios que <span className="text-gradient">Definen Atribuciones</span></h2>
                        <p className="text-slate-400 text-lg">Explora nuestras categorías principales diseñadas para satisfacer las demandas más exigentes.</p>
                    </motion.div>

                    <BentoGrid>
                        <BentoGridItem
                            title="Mantenimiento de Elite"
                            description="Soluciones infraestructurales con garantía de por vida por expertos certificados."
                            header={<div className="flex-1 w-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center overflow-hidden">
                                <img src="/assets/web-dev.png" className="w-1/2 opacity-20 filter grayscale" alt="" />
                            </div>}
                            icon={<ShieldCheck className="h-4 w-4 text-primary" />}
                            className="md:col-span-2"
                        />
                        <BentoGridItem
                            title="Asistencia IT"
                            description="Soporte técnico avanzado."
                            header={<div className="flex-1 w-full min-h-[6rem] rounded-xl bg-slate-800/50" />}
                            icon={<Zap className="h-4 w-4 text-secondary" />}
                        />
                        <BentoGridItem
                            title="Para Empresas (B2B)"
                            description="Optimiza tus solicitudes corporativas con nuestro portal dedicado."
                            header={<div className="flex-1 w-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500/20 to-primary/10" />}
                            icon={<Briefcase className="h-4 w-4 text-blue-400" />}
                        />
                        <BentoGridItem
                            title="Premium Concierge"
                            description="Atención personalizada para gustos exigentes."
                            header={<div className="flex-1 w-full min-h-[6rem] rounded-xl bg-slate-800/50" />}
                            icon={<Diamond className="h-4 w-4 text-secondary" />}
                            className="md:col-span-2"
                        />
                    </BentoGrid>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-6">
                    <motion.div
                        {...fadeIn}
                        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-12 lg:p-24 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)]" />
                        <h2 className="text-5xl lg:text-7xl font-outfit font-black mb-8 relative z-10 leading-tight">
                            ¿Listo para dar el <br /><span className="text-gradient">Siguiente Gran Paso?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
                            Únete hoy a la comunidad de profesionales y clientes más exclusiva de Ecuador. Descarga la App y comienza tu evolución.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <InteractiveHoverButton text="App Store" />
                            <button className="px-10 py-4 rounded-full bg-primary text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                Google Play
                            </button>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#01030B] border-t border-white/5 py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-3 font-outfit font-extrabold text-2xl tracking-tight mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                                <Layers size={18} />
                            </div>
                            <span>Conexión <span className="text-primary">Servicios</span></span>
                        </a>
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
                            Redefiniendo el estándar de los servicios profesionales en Ecuador a través de la innovación y la confianza mutua.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-outfit font-bold text-white mb-6 uppercase tracking-widest text-sm">Explora</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Directorio de Expertos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Para Profesionales</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Garantía CS</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Soporte IA</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-outfit font-bold text-white mb-6 uppercase tracking-widest text-sm">Contacto</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3"><Globe size={18} className="text-slate-600" /> Quito, Ecuador</li>
                            <li className="flex items-center gap-3"><Mail size={18} className="text-slate-600" /> hola@conexionservicios.ec</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
                    <p>&copy; 2024 Conexión Servicios S.A. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
