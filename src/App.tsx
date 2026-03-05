import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Zap, Star, MapPin, Bot, BadgeCheck,
    Users, TrendingUp, Layers, Globe, Mail,
    Instagram, Facebook, Download, ArrowRight, CheckCircle2,
    Car, Cpu, Home, Scissors,
    Sparkles, Shirt, Package, Truck, Dumbbell, UtensilsCrossed,
    Plane, Building2, Landmark, Factory, GraduationCap, Scale,
    Megaphone, WashingMachine, HeartPulse, Crown,
    CalendarRange
} from 'lucide-react';

import { InteractiveHoverButton } from './components/ui/InteractiveHoverButton';
import { IPhoneMockup } from './components/ui/IPhoneMockup';
import { ContainerScroll } from './components/ui/ContainerScroll';
import { InteractiveGridPattern } from './components/ui/InteractiveGridPattern';

// TikTok SVG Icon (not in lucide-react)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.53V6.84a4.85 4.85 0 0 1-1.02-.15z" />
    </svg>
);
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { cn } from './lib/utils';

const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
    instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
    tiktok: 'https://www.tiktok.com/@conexinservicios1',
};

const appScreens = [
    '/assets/screenshots/splash_screen.png',
    '/assets/screenshots/home_services.png',
    '/assets/screenshots/region_select.png',
    '/assets/screenshots/ai_support.png',
    '/assets/screenshots/register_business.png'
];

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

// ─── App Features ──────────────────────────────────────────────────────────────
const APP_FEATURES = [
    { icon: MapPin, label: 'Búsqueda Regional', desc: 'Encuentra profesionales en tu ciudad o cantón.', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
    { icon: Bot, label: 'Asistente IA 24/7', desc: 'IA que te ayuda a encontrar el servicio ideal.', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { icon: BadgeCheck, label: 'Identidad Verificada', desc: 'Todos los proveedores son verificados con documentos.', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
    { icon: Star, label: 'Reseñas Reales', desc: 'Calificaciones reales de clientes reales.', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
    { icon: Users, label: 'Directorio Completo', desc: 'Cientos de profesionales listados por especialidad y zona.', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
    { icon: Layers, label: 'Multi-Categoría', desc: 'Desde plomería hasta tecnología, todo en un solo lugar.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
];

// ─── User Benefits ─────────────────────────────────────────────────────────────
const USER_BENEFITS = [
    { icon: Zap, title: 'Encuentra en segundos', desc: 'Busca por categoría, nombre o ubicación y obtén resultados inmediatos.' },
    { icon: BadgeCheck, title: '100% verificados', desc: 'Cada profesional pasa por un proceso de verificación de identidad y antecedentes.' },
    { icon: Bot, title: 'Soporte IA 24/7', desc: 'Nuestro asistente inteligente te guía en cada paso de la contratación.' },
    { icon: Star, title: 'Reseñas auténticas', desc: 'Consulta opiniones reales de otros clientes antes de contratar.' },
    { icon: MapPin, title: 'Búsqueda por región', desc: 'Filtra profesionales por ciudad, cantón o provincia para encontrar al más cercano.' },
];

// ─── Business Benefits ──────────────────────────────────────────────────────────
const BUSINESS_BENEFITS = [
    { icon: TrendingUp, title: 'Más Visibilidad', desc: 'Aparece en búsquedas locales y llega a miles de clientes potenciales en tu ciudad y provincia.' },
    { icon: Users, title: 'Llega a Más Clientes', desc: 'Amplía tu alcance y conecta con personas que ya están buscando activamente tus servicios.' },
    { icon: BadgeCheck, title: 'Garantiza tu Calidad', desc: 'Muestra tus credenciales, verificaciones y reseñas reales para generar confianza desde el primer momento.' },
    { icon: Globe, title: 'Atención Directa al Usuario', desc: 'Los clientes pueden encontrar tu perfil, ver tus servicios y contactarte de forma directa desde la app.' },
    { icon: Star, title: 'Contacto con Usuarios Registrados', desc: 'Interactúa con usuarios verificados que ya tienen cuenta en la plataforma y están listos para contratar.' },
    { icon: Layers, title: 'Perfil Profesional Completo', desc: 'Crea un perfil con tu portafolio, especialidades, zona de trabajo, descripción y calificaciones.' },
];

// ─── Service Categories ─────────────────────────────────────────────────────────
const SERVICE_CATEGORIES = [
    { icon: Sparkles, label: 'Limpieza', color: '#06B6D4', bg: 'from-cyan-500/15 to-cyan-500/5', border: 'border-cyan-500/20' },
    { icon: Crown, label: 'Pastelería', color: '#EC4899', bg: 'from-pink-500/15 to-pink-500/5', border: 'border-pink-500/20' },
    { icon: Scissors, label: 'Belleza', color: '#A855F7', bg: 'from-purple-500/15 to-purple-500/5', border: 'border-purple-500/20' },
    { icon: Shirt, label: 'Ropa', color: '#F97316', bg: 'from-orange-500/15 to-orange-500/5', border: 'border-orange-500/20' },
    { icon: Building2, label: 'Construcción', color: '#EF4444', bg: 'from-red-500/15 to-red-500/5', border: 'border-red-500/20' },
    { icon: Truck, label: 'Courier', color: '#F59E0B', bg: 'from-amber-500/15 to-amber-500/5', border: 'border-amber-500/20' },
    { icon: WashingMachine, label: 'Lavandería', color: '#3B82F6', bg: 'from-blue-500/15 to-blue-500/5', border: 'border-blue-500/20' },
    { icon: Dumbbell, label: 'Deportes', color: '#10B981', bg: 'from-emerald-500/15 to-emerald-500/5', border: 'border-emerald-500/20' },
    { icon: UtensilsCrossed, label: 'Restaurant', color: '#F97316', bg: 'from-orange-400/15 to-orange-400/5', border: 'border-orange-400/20' },
    { icon: Plane, label: 'Turismo', color: '#38BDF8', bg: 'from-sky-500/15 to-sky-500/5', border: 'border-sky-500/20' },
    { icon: Landmark, label: 'Bancarios y Financieros', color: '#6366F1', bg: 'from-indigo-500/15 to-indigo-500/5', border: 'border-indigo-500/20' },
    { icon: Cpu, label: 'Tecnología', color: '#22D3EE', bg: 'from-cyan-600/15 to-cyan-600/5', border: 'border-cyan-600/20' },
    { icon: Factory, label: 'Fábricas', color: '#78716C', bg: 'from-stone-500/15 to-stone-500/5', border: 'border-stone-500/20' },
    { icon: GraduationCap, label: 'Centros Educativos', color: '#8B5CF6', bg: 'from-violet-500/15 to-violet-500/5', border: 'border-violet-500/20' },
    { icon: Scale, label: 'Asesoría y Jurídico', color: '#F59E0B', bg: 'from-yellow-500/15 to-yellow-500/5', border: 'border-yellow-500/20' },
    { icon: ShieldCheck, label: 'Seguridad', color: '#10B981', bg: 'from-emerald-600/15 to-emerald-600/5', border: 'border-emerald-600/20' },
    { icon: CalendarRange, label: 'Sala de Eventos y Reuniones', color: '#E879F9', bg: 'from-fuchsia-500/15 to-fuchsia-500/5', border: 'border-fuchsia-500/20' },
    { icon: Megaphone, label: 'Publicidad', color: '#EF4444', bg: 'from-rose-500/15 to-rose-500/5', border: 'border-rose-500/20' },
    { icon: Package, label: 'Línea Blanca', color: '#94A3B8', bg: 'from-slate-500/15 to-slate-500/5', border: 'border-slate-500/20' },
    { icon: HeartPulse, label: 'Salud', color: '#F43F5E', bg: 'from-red-400/15 to-red-400/5', border: 'border-red-400/20' },
    { icon: Car, label: 'Automotriz', color: '#3B82F6', bg: 'from-blue-600/15 to-blue-600/5', border: 'border-blue-600/20' },
    { icon: Home, label: 'Hogar', color: '#22C55E', bg: 'from-green-500/15 to-green-500/5', border: 'border-green-500/20' },
];

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeScreen, setActiveScreen] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveScreen(prev => (prev + 1) % appScreens.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="root-app" className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-primary selection:text-white overflow-x-hidden" style={{ opacity: 1 }}>

            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <InteractiveGridPattern
                    className={cn("[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]")}
                    width={40} height={40}
                    squares={[30, 30]}
                    squaresClassName="hover:fill-primary/30"
                />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/15 blur-[150px] rounded-full opacity-30" />
            </div>

            <AnimatedCursor />

            {/* ── Header ── */}
            <header className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent border-b border-transparent"
            )}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.a href="#" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 font-outfit font-extrabold text-2xl tracking-tight">
                        <img src="/assets/logo-cs.png" alt="Conexión Servicios" className="h-10 w-10 object-contain drop-shadow-md" />
                        <span>Conexión <span className="text-primary">Servicios</span></span>
                    </motion.a>

                    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-400">
                        {[['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Usuarios', '#usuarios'], ['Negocios', '#negocios']].map(([label, href]) => (
                            <a key={label} href={href} className="hover:text-white transition-colors relative group text-sm">
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <div className="flex items-center gap-2">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/30 transition-all" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all" aria-label="TikTok">
                                <TikTokIcon size={15} />
                            </a>
                            <InteractiveHoverButton text="Descargar App" className="bg-white/5 border-white/10 text-white hover:text-black text-sm" />
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {/* ── HERO ── */}
                <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-bold mb-8 tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                PLATAFORMA LISTA PARA LANZAMIENTO
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-8 leading-[1.05] tracking-tighter text-white">
                                Conecta con los mejores <br />
                                <span className="text-gradient">profesionales</span> en segundos.
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
                                Nuestra misión es revolucionar la forma en que contratas y ofreces servicios. Un ecosistema 100% verificado, seguro y diseñado para la excelencia.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <button className="group relative px-8 py-4 rounded-2xl bg-blue-600 font-bold text-white flex items-center gap-3 hover:bg-blue-700 transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95 overflow-hidden">
                                    <span className="relative z-10 font-outfit">Descargar la App</span>
                                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="relative z-10">
                                        <Download size={20} className="text-blue-100" />
                                    </motion.span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </button>
                                <a href="#servicios" className="px-8 py-4 rounded-2xl border border-white/5 bg-slate-900/50 font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-all backdrop-blur-md font-outfit flex items-center gap-2">
                                    Explorar Servicios <ArrowRight size={16} />
                                </a>
                            </div>

                            {/* Stats row */}
                            <div className="flex gap-8 mt-14 pt-8 border-t border-white/5">
                                {[
                                    { value: '50+', label: 'Categorías' },
                                    { value: '100%', label: 'Verificados' },
                                    { value: 'IA', label: 'Soporte 24/7' },
                                ].map(s => (
                                    <div key={s.label}>
                                        <p className="text-3xl font-outfit font-black text-white">{s.value}</p>
                                        <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:flex justify-center">
                            <div className="relative z-10">
                                {/* Cuenca chip - far left */}
                                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -left-36 top-24 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/90 border border-white/10 backdrop-blur-md text-sm font-medium z-20 shadow-xl whitespace-nowrap">
                                    <MapPin size={14} className="text-cyan-400" /> Cuenca, Ecuador
                                </motion.div>
                                {/* Verificado chip - far right top */}
                                <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 3.5, repeat: Infinity }}
                                    className="absolute -right-28 top-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md text-sm font-medium text-emerald-400 z-20 shadow-xl whitespace-nowrap">
                                    <BadgeCheck size={14} /> Verificado
                                </motion.div>
                                {/* Calificacion chip - far right bottom */}
                                <motion.div animate={{ y: [-5, 10, -5] }} transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute -right-32 bottom-36 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/90 border border-white/10 backdrop-blur-md text-sm font-medium z-20 shadow-xl whitespace-nowrap">
                                    <Star size={14} className="text-amber-400 fill-amber-400" /> 4.9 &#9733; Calificación
                                </motion.div>

                                <IPhoneMockup className="drop-shadow-[0_40px_80px_rgba(0,102,255,0.3)] rotate-3">
                                    <motion.img
                                        key={activeScreen}
                                        src={appScreens[activeScreen]}
                                        alt="App Preview"
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </IPhoneMockup>
                            </div>
                            <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/20 blur-[100px] rounded-full z-0" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/20 blur-[100px] rounded-full z-0" />
                        </motion.div>
                    </div>
                </section>

                {/* ── SERVICIOS QUE OFRECE LA APP ── */}
                <section id="servicios" className="py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto">
                        <motion.div {...fadeIn} className="text-center mb-20">
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary mb-6">
                                ¿Qué Ofrece la App?
                            </span>
                            <h2 className="text-4xl md:text-6xl font-outfit font-black mb-6 leading-tight">
                                Todo lo que necesitas <br /><span className="text-gradient">en un solo lugar</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Conexión Servicios reúne las herramientas necesarias para que contratar y ofrecer servicios sea simple, seguro e inteligente.
                            </p>
                        </motion.div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {APP_FEATURES.map((feat, i) => (
                                <motion.div
                                    key={feat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className={`group relative p-7 rounded-3xl border ${feat.bg} bg-slate-900/50 backdrop-blur-md cursor-default transition-all duration-300 hover:shadow-2xl hover:shadow-${feat.color}/10`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${feat.bg}`}>
                                        <feat.icon size={24} className={feat.color} />
                                    </div>
                                    <h3 className="text-xl font-outfit font-bold text-white mb-3">{feat.label}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-3xl bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${feat.color}`} />
                                </motion.div>
                            ))}
                        </div>

                        {/* ── DEDICATED CATEGORIES SECTION ── */}
                        <motion.div {...fadeIn} className="mt-28">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-secondary/10 border border-secondary/20 text-secondary mb-5">
                                    Todas las categorías
                                </span>
                                <h2 className="text-3xl md:text-4xl font-outfit font-black text-white mb-3">
                                    Encuentra el servicio que
                                    <span className="text-gradient">necesitas</span>
                                </h2>
                                <p className="text-slate-400 max-w-xl mx-auto text-base">
                                    Explora nuestra amplia red de profesionales verificados en todas las áreas.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                                {SERVICE_CATEGORIES.map((cat, i) => (
                                    <motion.div
                                        key={cat.label}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        transition={{ duration: 0.4, delay: i * 0.04 }}
                                        whileHover={{ y: -5, scale: 1.03 }}
                                        className={`group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${cat.bg} border ${cat.border} backdrop-blur-sm cursor-default transition-all duration-300 hover:shadow-xl text-center`}
                                    >
                                        {/* Glow on hover */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ boxShadow: `0 0 30px ${cat.color}25` }} />
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
                                            style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}30` }}>
                                            <cat.icon size={22} style={{ color: cat.color }} />
                                        </div>
                                        <span className="font-semibold text-sm text-slate-200 leading-tight relative z-10">
                                            {cat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* +100 Especialidades banner */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <div className="relative px-10 py-6 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-white/10 backdrop-blur-md text-center overflow-hidden">
                                    {/* Shimmer line */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                                    <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">y muchas más dentro de la app</p>
                                    <p className="font-outfit font-black text-5xl md:text-7xl bg-gradient-to-r from-primary via-secondary to-cyan-400 bg-clip-text text-transparent leading-none">
                                        +100
                                    </p>
                                    <p className="font-outfit font-bold text-xl md:text-3xl text-white mt-1">
                                        Especialidades
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ── BENEFICIOS PARA USUARIOS ── */}
                <section id="usuarios" className="py-32 px-6 relative">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left: Phone mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative hidden lg:flex justify-center order-2 lg:order-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-[100px] rounded-full" />
                            <IPhoneMockup className="-rotate-3 drop-shadow-[0_40px_80px_rgba(139,92,246,0.3)] relative z-10">
                                {appScreens.map((src, i) => (
                                    <motion.img
                                        key={src}
                                        src={src}
                                        alt="App para Usuarios"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: activeScreen === i ? 1 : 0 }}
                                        transition={{ duration: 0.7 }}
                                    />
                                ))}
                            </IPhoneMockup>
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="order-1 lg:order-2"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-6">
                                Para Usuarios
                            </span>
                            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-6 leading-tight">
                                La forma más <span className="text-gradient">inteligente</span> de contratar
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Olvídate de buscar por recomendaciones o arriesgarte con desconocidos. Con Conexión Servicios, cada contratación es rápida, segura y exitosa.
                            </p>
                            <div className="space-y-5">
                                {USER_BENEFITS.map((b, i) => (
                                    <motion.div
                                        key={b.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-violet-500/20 hover:bg-slate-900/70 transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                                            <b.icon size={18} className="text-violet-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm mb-1">{b.title}</p>
                                            <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                                        </div>
                                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-1" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── APP SHOWCASE (ContainerScroll) ── */}
                <section className="py-20 bg-slate-950 relative">
                    <ContainerScroll
                        titleComponent={
                            <div className="flex flex-col items-center">
                                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary mb-5">
                                    Disponible Pronto
                                </span>
                                <h2 className="text-4xl md:text-5xl font-outfit font-semibold text-white mb-2">
                                    Experiencia Nativa
                                </h2>
                                <span className="text-gradient text-5xl md:text-[6rem] font-black leading-none mt-2 block">
                                    iOS &amp; Android
                                </span>
                            </div>
                        }
                    >
                        {/* Premium redesigned dashboard */}
                        <div className="relative h-full w-full overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0d1528 60%, #080d1a 100%)' }}>

                            {/* Ambient glows */}
                            <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute top-1/2 left-0 w-40 h-40 bg-cyan-500/8 blur-[60px] rounded-full pointer-events-none" />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 h-full p-1">

                                {/* Left panel */}
                                <div className="md:col-span-3 flex flex-col justify-center p-8 lg:p-12 gap-7">

                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                                            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span></span>
                                            App Móvil Nativa
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-outfit font-black text-white mb-3">
                                            Todo lo que necesitas,<br />
                                            <span className="text-gradient">en tu bolsillo</span>
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                            Encuentra profesionales verificados, consulta reseñas reales y contrata con total confianza desde cualquier lugar del Ecuador.
                                        </p>
                                    </div>

                                    {/* Stat cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { value: '50+', label: 'Categorías', color: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-500/20', num: 'text-cyan-400' },
                                            { value: '24', label: 'Provincias', color: 'from-violet-500/20 to-indigo-500/10', border: 'border-violet-500/20', num: 'text-violet-400' },
                                            { value: '100%', label: 'Verificados', color: 'from-emerald-500/20 to-teal-500/10', border: 'border-emerald-500/20', num: 'text-emerald-400' },
                                        ].map(s => (
                                            <div key={s.label} className={`rounded-2xl bg-gradient-to-br ${s.color} border ${s.border} p-4 text-center backdrop-blur-sm`}>
                                                <p className={`text-xl font-outfit font-black ${s.num}`}>{s.value}</p>
                                                <p className="text-slate-400 text-[10px] mt-1 font-medium">{s.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Feature grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { icon: Bot, label: 'Asistente IA', sub: 'Soporte inteligente 24/7', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                                            { icon: BadgeCheck, label: 'Verificado', sub: 'Identidad comprobada', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                                            { icon: Star, label: 'Reseñas Reales', sub: 'Calificaciones auténticas', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
                                            { icon: MapPin, label: 'Búsqueda Local', sub: 'Por ciudad y cantón', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
                                        ].map(f => (
                                            <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all">
                                                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 ${f.bg}`}>
                                                    <f.icon size={14} className={f.color} />
                                                </div>
                                                <div>
                                                    <p className="text-white text-xs font-bold leading-tight">{f.label}</p>
                                                    <p className="text-slate-500 text-[10px] leading-tight mt-0.5">{f.sub}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right panel: iPhone */}
                                <div className="md:col-span-2 relative flex items-center justify-center p-6">
                                    <div className="absolute inset-0 bg-gradient-to-l from-primary/8 to-transparent" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-primary/20 blur-[80px] rounded-full" />
                                    <div className="relative z-10 drop-shadow-[0_30px_60px_rgba(0,102,255,0.4)]">
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
                                                        transition={{ duration: 5, delay: i * 5, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
                                                    />
                                                ))}
                                            </div>
                                        </IPhoneMockup>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ContainerScroll>
                </section>

                {/* ── BENEFICIOS PARA NEGOCIOS ── */}
                <section id="negocios" className="py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                            {/* Left: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                                    Para Negocios y Profesionales
                                </span>
                                <h2 className="text-4xl md:text-5xl font-outfit font-black mb-6 leading-tight">
                                    Haz crecer tu <span className="text-gradient">negocio</span> con tecnología
                                </h2>
                                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                    Únete a la plataforma que conecta a los mejores profesionales de Ecuador con miles de clientes listos para contratar. Sin complicaciones, solo resultados.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 mb-10">
                                    {[
                                        { value: '+500', label: 'Profesionales' },
                                        { value: '+100k', label: 'Vistas/mes' },
                                        { value: '≥4.8★', label: 'Satisfacción' },
                                    ].map(s => (
                                        <div key={s.label} className="text-center p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                                            <p className="text-2xl font-outfit font-black text-white">{s.value}</p>
                                            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 font-bold text-white hover:bg-emerald-700 transition-all shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] active:scale-95">
                                    Registra tu Negocio <ArrowRight size={18} />
                                </a>
                            </motion.div>

                            {/* Right: Benefit Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {BUSINESS_BENEFITS.map((b, i) => (
                                    <motion.div
                                        key={b.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        whileHover={{ y: -4 }}
                                        className="p-6 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/20 transition-all group"
                                    >
                                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <b.icon size={20} className="text-emerald-400" />
                                        </div>
                                        <h3 className="font-outfit font-bold text-white mb-2">{b.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-32 px-6">
                    <motion.div
                        {...fadeIn}
                        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-12 lg:p-24 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12)_0%,transparent_70%)]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
                        <h2 className="text-5xl lg:text-7xl font-outfit font-black mb-8 relative z-10 leading-tight">
                            ¿Listo para dar el <br /><span className="text-gradient">Siguiente Gran Paso?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
                            Únete hoy a la comunidad de profesionales y clientes más exclusiva de Ecuador. Descarga la App y comienza tu evolución.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <button className="group px-10 py-5 rounded-2xl bg-white text-slate-950 font-black text-lg hover:bg-slate-100 transition-all shadow-xl active:scale-95 flex items-center gap-3">
                                App Store <Download size={20} />
                            </button>
                            <button className="px-10 py-5 rounded-2xl bg-primary text-white font-black text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-3">
                                Google Play <Download size={20} />
                            </button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10 relative z-10">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors text-sm">
                                <Instagram size={16} /> @conexionservicios_ecuador
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                <Facebook size={16} /> Conexión Servicios Ecuador
                            </a>
                            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                                <TikTokIcon size={16} /> @conexinservicios1
                            </a>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* ── FOOTER ── */}
            <footer className="bg-[#01030B] border-t border-white/5 py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <div className="col-span-2 md:col-span-1">
                        <a href="#inicio" className="flex items-center gap-2 font-outfit font-extrabold text-xl tracking-tight mb-4">
                            <img src="/assets/logo-cs.png" alt="Conexión Servicios" className="h-8 w-8 object-contain drop-shadow-md" />
                            <span>Conexión <span className="text-primary">Servicios</span></span>
                        </a>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">
                            Redefiniendo los servicios profesionales en Ecuador.
                        </p>
                        <div className="flex gap-3">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white hover:border-transparent transition-all" aria-label="TikTok">
                                <TikTokIcon size={15} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-outfit font-bold text-white mb-4 uppercase tracking-widest text-xs">Explora</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
                            <li><a href="#usuarios" className="hover:text-primary transition-colors">Para Usuarios</a></li>
                            <li><a href="#negocios" className="hover:text-primary transition-colors">Para Negocios</a></li>
                            <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-2">
                        <h4 className="font-outfit font-bold text-white mb-4 uppercase tracking-widest text-xs">Contacto</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li className="flex items-center gap-2"><Globe size={14} className="text-slate-600 flex-shrink-0" /> Ecuador</li>
                            <li>
                                <a href="mailto:conexionserviciosec@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Mail size={14} className="text-slate-600 flex-shrink-0" /> conexionserviciosec@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                                    <Instagram size={14} className="text-slate-600 flex-shrink-0" /> @conexionservicios_ecuador
                                </a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                                    <Facebook size={14} className="text-slate-600 flex-shrink-0" /> Conexión Servicios Ecuador
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
                    <p>&copy; 2026 Conexión Servicios. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
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
