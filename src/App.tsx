import React, { useState, useEffect } from 'react';
import logoCS from './assets/logo-cs.png';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Star, MapPin, BadgeCheck,
    Users, TrendingUp, Layers, Globe, Mail,
    Instagram, Facebook, Download, ArrowRight,
    Car, Cpu, Home, Scissors,
    Sparkles, Shirt, Package, Truck, Dumbbell, UtensilsCrossed,
    Plane, Building2, Landmark, Factory, GraduationCap, Scale,
    Megaphone, WashingMachine, HeartPulse, Crown,
    CalendarRange
} from 'lucide-react';

import { InteractiveHoverButton } from './components/ui/InteractiveHoverButton';
import { IPhoneMockup } from './components/ui/IPhoneMockup';
import { InteractiveGridPattern } from './components/ui/InteractiveGridPattern';

// TikTok SVG Icon (not in lucide-react)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.53V6.84a4.85 4.85 0 0 1-1.02-.15z" />
    </svg>
);
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { RegistrationModal } from './components/RegistrationModal';
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
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
};



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
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
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
                        <motion.img
                            src={logoCS}
                            alt="Conexión Servicios"
                            className="h-12 w-12 object-contain"
                            whileHover={{ scale: 1.18, rotate: -6, filter: 'drop-shadow(0 0 12px rgba(0,120,255,0.7))' }}
                            whileTap={{ scale: 0.9, rotate: 6 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                        />
                        <span>Conexión <span className="text-secondary">Servicios</span></span>
                    </motion.a>

                    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-400">
                        {[['Inicio', '#inicio'], ['Usuarios', '#usuarios'], ['Negocios', '#negocios'], ['Contacto', '#contacto']].map(([label, href]) => (
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
                            <a href="#descargar">
                                <InteractiveHoverButton text="Descargar App" className="bg-white/5 border-white/10 text-white hover:text-black text-sm" />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {/* ── HERO ── */}
                <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-24">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-bold mb-8 tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                PLATAFORMA LISTA PARA LANZAMIENTO
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black mb-8 leading-[1.05] tracking-tighter text-white">
                                ¿Buscas un Mecánico, <br className="hidden sm:block" />
                                un Electricista, <span className="whitespace-nowrap">una Grúa</span> <br className="hidden sm:block" />
                                o un <span className="text-gradient">Centro Educativo</span>?
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed font-medium">
                                En la <strong>APP Conexión Servicios</strong> encontrarás los mejores servicios profesionales.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <a href="#descargar" className="group relative px-8 py-4 rounded-2xl bg-blue-600 font-bold text-white flex items-center gap-3 hover:bg-blue-700 transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95 overflow-hidden">
                                    <span className="relative z-10 font-outfit">Descargar la App</span>
                                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="relative z-10">
                                        <Download size={20} className="text-blue-100" />
                                    </motion.span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </a>
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

                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:flex justify-center items-center h-[550px] w-full">
                            <div className="relative w-full h-full max-w-[500px] z-10 flex items-center justify-center">
                                
                                {/* Central huge image (Architecture/Construction) */}
                                <motion.div 
                                    whileHover={{ scale: 1.03, zIndex: 50 }}
                                    className="absolute w-64 h-80 rounded-[2rem] overflow-hidden border-[6px] border-slate-900 shadow-2xl z-20 transition-all duration-300"
                                >
                                    <img src="https://images.unsplash.com/photo-1541888081696-6d60156fc201?w=600&q=80" alt="Construcción" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent flex flex-col justify-end p-5">
                                        <span className="bg-primary/20 text-primary text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-2 backdrop-blur-md">Construcción</span>
                                        <span className="text-white font-bold flex items-center gap-1.5"><Star size={16} className="text-amber-400 fill-amber-400"/> 4.9 <span className="font-normal text-slate-300 text-sm ml-1">(120 reseñas)</span></span>
                                    </div>
                                </motion.div>

                                {/* Top left tilted image (Mechanic) */}
                                <motion.div 
                                    whileHover={{ scale: 1.05, zIndex: 50 }}
                                    className="absolute top-4 left-0 w-48 h-56 rounded-[2rem] overflow-hidden border-[6px] border-slate-900 shadow-xl z-10 -rotate-6 transition-all duration-300"
                                >
                                    <img src="https://images.unsplash.com/photo-1619642751034-765f0119f9bb?w=500&q=80" alt="Mecánico" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent flex flex-col justify-end p-4">
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-full w-fit backdrop-blur-md">Mecánica</span>
                                    </div>
                                </motion.div>

                                {/* Bottom right tilted image (Beauty) */}
                                <motion.div 
                                    whileHover={{ scale: 1.05, zIndex: 50 }}
                                    className="absolute bottom-4 right-0 w-52 h-52 rounded-[2rem] overflow-hidden border-[6px] border-slate-900 shadow-xl z-30 rotate-6 transition-all duration-300"
                                >
                                    <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80" alt="Belleza" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent flex flex-col justify-end p-4">
                                        <span className="bg-pink-500/20 text-pink-400 text-xs font-bold px-2.5 py-1 rounded-full w-fit backdrop-blur-md">Belleza</span>
                                    </div>
                                </motion.div>

                                {/* Top right small image (Cleaning) */}
                                <motion.div 
                                    whileHover={{ scale: 1.05, zIndex: 50 }}
                                    className="absolute top-10 right-4 w-40 h-40 rounded-[1.5rem] overflow-hidden border-[6px] border-slate-900 shadow-xl z-10 rotate-[12deg] transition-all duration-300"
                                >
                                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80" alt="Limpieza" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-3">
                                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full w-fit backdrop-blur-md">Limpieza</span>
                                    </div>
                                </motion.div>

                                {/* Floating Badges */}
                                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -left-12 top-1/2 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-800/90 border border-white/10 backdrop-blur-xl text-sm font-medium z-40 shadow-2xl whitespace-nowrap">
                                    <BadgeCheck size={18} className="text-emerald-400" /> Profesionales Verificados
                                </motion.div>

                                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity }}
                                    className="absolute -right-8 top-1/3 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-800/90 border border-white/10 backdrop-blur-xl text-sm font-medium z-40 shadow-2xl whitespace-nowrap">
                                    <MapPin size={18} className="text-cyan-400" /> Disponible en todo el país
                                </motion.div>
                                
                            </div>
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 blur-[120px] rounded-full z-0" />
                            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 blur-[120px] rounded-full z-0" />
                        </motion.div>
                    </div>
                </section>

                {/* ── PARA USUARIOS (Visual Category Grid) ── */}
                <section id="usuarios" className="py-24 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto">
                        <motion.div {...fadeIn} className="mb-10 text-center">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-5">
                                    Para Usuarios
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-4">
                                    Encuentra fácilmente el <br className="hidden md:block" />
                                    <span className="text-gradient">servicio que necesitas</span>
                                </h2>
                                <p className="text-slate-300 max-w-xl mx-auto text-lg md:text-xl font-medium">
                                    Explora nuestra red con más de 50 categorías profesionales, 100% visual y rápido.
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

                                {/* +100 Especialidades banner (Moved inside grid) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 0.4, delay: SERVICE_CATEGORIES.length * 0.04 }}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    className="group relative col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-3 flex flex-col justify-center items-center px-6 py-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-white/10 backdrop-blur-md text-center cursor-default transition-all duration-300 hover:shadow-xl"
                                >
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-0"
                                        style={{ boxShadow: `0 0 30px rgba(34,211,238,0.2)` }} />

                                    {/* Shimmer lines */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                                    <p className="text-slate-400 text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-1 relative z-10">y muchas más dentro de la app</p>
                                    <p className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-primary via-secondary to-cyan-400 bg-clip-text text-transparent leading-none my-1 relative z-10">
                                        +100
                                    </p>
                                    <p className="font-outfit font-bold text-lg sm:text-xl md:text-2xl text-white relative z-10">
                                        Especialidades
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>



                {/* ── BENEFICIOS PARA NEGOCIOS ── */}
                <section id="negocios" className="py-24 px-6 relative overflow-hidden">
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
                                    ¿Tienes un <span className="text-gradient">negocio</span> en crecimiento?
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-200 font-medium mb-10 leading-relaxed text-gradient">
                                    ¡Publícalo GRATIS en la APP de Conexión Servicios!
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

                                <button
                                    onClick={() => setIsRegistrationModalOpen(true)}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 font-bold text-white hover:bg-emerald-700 transition-all shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] active:scale-95">
                                    Registra tu Negocio <ArrowRight size={18} />
                                </button>
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
                <section id="descargar" className="py-24 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary mb-4 relative z-10">
                            DESCÁRGALA AHORA
                        </span>
                        <h2 className="text-5xl lg:text-7xl font-outfit font-black relative z-10 leading-tight text-white">
                            Obtén la <span className="text-gradient">Aplicación</span>
                        </h2>
                    </div>

                    <motion.div
                        {...fadeIn}
                        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-10 lg:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto relative z-10">
                            Lleva el directorio de profesionales más completo contigo en todo momento.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            <a href="#" className="transform transition-transform hover:scale-105 active:scale-95 duration-300">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                    alt="Descargar en App Store" 
                                    className="h-[52px] w-auto"
                                />
                            </a>
                            <a href="#" className="transform transition-transform hover:scale-105 active:scale-95 duration-300">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                    alt="Disponible en Google Play" 
                                    className="h-[52px] w-auto"
                                />
                            </a>
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
            <footer id="contacto" className="bg-[#01030B] border-t border-white/5 py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <div className="col-span-2 md:col-span-1">
                        <a href="#inicio" className="flex items-center gap-2 font-outfit font-extrabold text-xl tracking-tight mb-4">
                            <img src={logoCS} alt="Conexión Servicios" className="h-8 w-8 object-contain drop-shadow-md" />
                            <span>Conexión <span className="text-secondary">Servicios</span></span>
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
                        {/* Mobile & Desktop WhatsApp Button inside the grid */}
                        <div className="mt-8 flex justify-start">
                            <a
                                href="https://wa.me/593979783184?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20Conexión%20Servicios."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="w-5 h-5 relative z-10 drop-shadow-sm"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                <span className="relative z-10 drop-shadow-sm tracking-wide text-sm whitespace-nowrap">Contáctanos por WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-xs border-t border-white/5">
                    <p>&copy; 2026 Conexión Servicios. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="https://conexionserviciosec.blogspot.com/p/terminos-y-condiciones-de-uso-de-la.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Términos</a>
                        <a href="https://conexionserviciosec.blogspot.com/p/terminos-y-condiciones-de-uso-de-la.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="https://conexionserviciosec.blogspot.com/p/terminos-y-condiciones-de-uso-de-la.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </footer>
            <RegistrationModal
                isOpen={isRegistrationModalOpen}
                onClose={() => setIsRegistrationModalOpen(false)}
            />
        </div>
    );
};

export default App;
