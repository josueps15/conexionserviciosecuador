import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, 
    Users,
    Instagram, Facebook,
    Search, MapPin, CheckCircle2,
    Briefcase, Building2
} from 'lucide-react';

import logoCS from './assets/logo-cs.png';
import { RegistrationModal } from './components/RegistrationModal';
import { cn } from './lib/utils';
import { useMediaQuery } from './hooks/useMediaQuery';
import { ThemeToggle } from './components/ThemeToggle';
import { MobileView } from './components/mobile/MobileView';
import { CategoryCard } from './components/CategoryCard';
import { SERVICES_DATA } from './constants/services';
import { InteractiveGridPattern } from './components/ui/InteractiveGridPattern';
import { InteractiveHoverButton } from './components/ui/InteractiveHoverButton';
import { AnimatedCursor } from './components/ui/AnimatedCursor';

// TikTok SVG Icon
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.53V6.84a4.85 4.85 0 0 1-1.02-.15z" />
    </svg>
);

const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
    instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
    tiktok: 'https://www.tiktok.com/@conexinservicios1',
};

export default function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        }
        return 'light';
    });

    const [isScrolled, setIsScrolled] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile specific view
    if (isMobile) {
        return <MobileView onOpenModal={() => setIsRegistrationOpen(true)} theme={theme} toggleTheme={toggleTheme} />;
    }

    const filteredServices = SERVICES_DATA.filter(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen font-inter bg-[var(--app-bg)] relative overflow-x-hidden transition-colors duration-500">
            <AnimatedCursor />
            
            {/* ─── Navigation ────────────────────────────────────────────────────────── */}
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between border-b",
                isScrolled 
                    ? "bg-[var(--nav-bg)] backdrop-blur-xl border-[var(--card-border)] shadow-sm" 
                    : "bg-transparent border-transparent"
            )}>
                <div className="flex items-center gap-2">
                    <img src={logoCS} alt="CS Logo" className="h-8 md:h-10 w-auto" />
                    <span className="font-outfit font-black text-xl md:text-2xl tracking-tighter uppercase text-[var(--app-text)]">
                        Conexión <span className="text-[var(--primary)]">Servicios</span>
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-10">
                    {['Inicio', 'Servicios', 'Negocios'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 mr-4">
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text)] hover:text-pink-500 transition-all shadow-sm">
                            <Instagram size={18} />
                        </a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text)] hover:text-blue-600 transition-all shadow-sm">
                            <Facebook size={18} />
                        </a>
                        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text)] hover:text-[var(--primary)] transition-all shadow-sm">
                            <TikTokIcon size={17} />
                        </a>
                    </div>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <InteractiveHoverButton text="Descargar App" className="bg-[var(--primary)] border-[var(--primary)] text-white text-[13px] font-bold shadow-lg shadow-[var(--primary)]/20" />
                </div>
            </nav>

            {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
            <section id="inicio" className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-8">
                            <ShieldCheck size={14} />
                            Profesionales 100% Verificados
                        </div>
                        
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-outfit text-[var(--app-text)] leading-[0.9] tracking-tight mb-8">
                            SALUD Y <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">BIENESTAR</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-[var(--app-text-muted)] leading-relaxed mb-10 max-w-xl font-medium">
                            Encuentra servicios médicos y profesionales de confianza en todo el Ecuador desde tu celular.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <InteractiveHoverButton 
                                text="EMPIEZA AHORA"
                                onClick={() => setIsRegistrationOpen(true)}
                                className="h-16 px-10 bg-[var(--primary)] border-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30"
                            />
                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[var(--app-bg-soft)] border border-[var(--card-border)]">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--app-bg)] bg-slate-200">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-[var(--app-text)]">+5,000 Usuarios</p>
                                    <p className="text-[10px] uppercase tracking-wider text-[var(--app-text-muted)] font-black">Confían en nosotros</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent blur-3xl rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <InteractiveGridPattern 
                                width={60} 
                                height={60} 
                                className="opacity-40"
                            />
                            <div className="relative mt-20">
                                <Building2 size={400} className="text-[var(--primary)] opacity-5 mx-auto" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--primary)]/10 blur-3xl rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--app-text-muted)] opacity-50">Sigue Bajando</p>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-0.5 h-12 bg-gradient-to-b from-[var(--primary)] to-transparent" 
                    />
                </div>
            </section>

            {/* ─── Search & Categories ────────────────────────────────────────────────── */}
            <section id="servicios" className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--app-bg-soft)]/30">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black font-outfit text-[var(--app-text)] mb-4 tracking-tight leading-none uppercase">
                                Explora <span className="text-[var(--primary)]">Categorías</span>
                            </h2>
                            <p className="text-lg text-[var(--app-text-muted)] font-medium">
                                Descubre los 26 sectores de servicios que tenemos para ti.
                            </p>
                        </div>
                        
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--app-text-muted)] transition-colors group-focus-within:text-[var(--primary)]" size={20} />
                            <input 
                                type="text"
                                placeholder="¿Mecánico, Doctor, Plomero?..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 bg-[var(--app-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--app-text)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all font-medium text-sm shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredServices.map((service) => (
                            <CategoryCard 
                                key={service.id} 
                                title={service.title}
                                icon={service.icon}
                                subcategories={service.subcategories}
                                description={service.description}
                            />
                        ))}
                    </div>

                    {filteredServices.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-xl text-[var(--app-text-muted)] font-medium">No encontramos servicios que coincidan con tu búsqueda.</p>
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="mt-4 text-[var(--primary)] font-black uppercase tracking-widest text-sm hover:underline"
                            >
                                Ver todos los servicios
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Business Section ───────────────────────────────────────────────────── */}
            <section id="negocios" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary)]/5 -skew-x-12 translate-x-1/4" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Users, title: 'Más Clientes', desc: 'Accede a miles de usuarios activos.' },
                                    { icon: ShieldCheck, title: 'Confianza', desc: 'Sello de profesional verificado.' },
                                    { icon: Briefcase, title: 'Gestión', desc: 'Administra tus servicios fácilmente.' },
                                    { icon: MapPin, title: 'Localización', desc: 'Aparece cerca de tus clientes.' }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-[2.5rem] bg-[var(--app-bg)] border border-[var(--card-border)] shadow-xl shadow-black/5 hover:translate-y-[-5px] transition-all group">
                                        <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                                            <item.icon size={28} />
                                        </div>
                                        <h4 className="text-lg font-black font-outfit text-[var(--app-text)] mb-2 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-sm text-[var(--app-text-muted)] leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl md:text-6xl font-black font-outfit text-[var(--app-text)] mb-8 tracking-tight leading-none uppercase">
                                ¿TIENES UN <br />
                                <span className="text-[var(--primary)]">NEGOCIO?</span>
                            </h2>
                            <p className="text-xl text-[var(--app-text-muted)] mb-10 leading-relaxed font-medium">
                                Únete a la red profesional más grande de Ecuador. Aumenta tu visibilidad, gestiona tus servicios y conecta con nuevos clientes cada día.
                            </p>
                            
                            <ul className="space-y-5 mb-12">
                                {[
                                    'Registro rápido y sencillo en 2 minutos.',
                                    'Perfil personalizado con tus especialidades.',
                                    'Soporte técnico las 24 horas del día.',
                                    'Sin comisiones ocultas por tus servicios.'
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <InteractiveHoverButton 
                                text="REGISTRAR MI NEGOCIO"
                                onClick={() => setIsRegistrationOpen(true)}
                                className="h-16 px-10 bg-[var(--primary)] border-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30 text-base"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Footer ────────────────────────────────────────────────────────────── */}
            <footer className="bg-[var(--app-bg-soft)] pt-24 pb-12 border-t border-[var(--card-border)]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="flex items-center gap-2 mb-8">
                                <img src={logoCS} alt="CS Logo" className="h-8" />
                                <span className="font-outfit font-black text-xl tracking-tight uppercase text-[var(--app-text)]">
                                    Conexión <span className="text-[var(--primary)]">Servicios</span>
                                </span>
                            </div>
                            <p className="text-[var(--app-text-muted)] text-sm mb-8 font-medium leading-relaxed italic">
                                "La plataforma líder para conectar profesionales con usuarios en todo el territorio ecuatoriano."
                            </p>
                            <div className="flex gap-4">
                                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-pink-500 hover:border-pink-500/30 transition-all font-outfit shadow-sm">
                                    <Instagram size={20} />
                                </a>
                                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-blue-600 hover:border-blue-600/30 transition-all font-outfit shadow-sm">
                                    <Facebook size={20} />
                                </a>
                                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-all font-outfit shadow-sm">
                                    <TikTokIcon size={19} />
                                </a>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-[var(--app-text)] font-black uppercase text-xs tracking-[0.2em] mb-8 font-outfit">Compañía</h4>
                            <ul className="space-y-4 text-sm font-bold text-[var(--app-text-muted)]">
                                <li><a href="#inicio" className="hover:text-[var(--primary)] transition-colors">Nosotros</a></li>
                                <li><a href="#servicios" className="hover:text-[var(--primary)] transition-colors">Categorías</a></li>
                                <li><a href="#negocios" className="hover:text-[var(--primary)] transition-colors">Registro de Negocios</a></li>
                                <li><a href="mailto:conexionserviciosec@gmail.com" className="hover:text-[var(--primary)] transition-colors">Contacto</a></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-[var(--app-text)] font-black uppercase text-xs tracking-[0.2em] mb-8 font-outfit">Soporte</h4>
                            <ul className="space-y-4 text-sm font-bold text-[var(--app-text-muted)]">
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Ayuda 24/7</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Políticas</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Seguridad</a></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-[var(--app-text)] font-black uppercase text-xs tracking-[0.2em] mb-8 font-outfit">Descarga</h4>
                            <div className="space-y-4">
                                <a href="#" className="block px-6 py-3 bg-black text-white rounded-2xl flex items-center gap-4 hover:scale-105 transition-all outline outline-1 outline-white/10">
                                    <span className="text-xl"></span>
                                    <div>
                                        <p className="text-[8px] uppercase opacity-60">App Store</p>
                                        <p className="text-xs font-bold">iOS Download</p>
                                    </div>
                                </a>
                                <a href="#" className="block px-6 py-3 bg-black text-white rounded-2xl flex items-center gap-4 hover:scale-105 transition-all outline outline-1 outline-white/10">
                                    <span className="text-xl">▶</span>
                                    <div>
                                        <p className="text-[8px] uppercase opacity-60">Google Play</p>
                                        <p className="text-xs font-bold">Android App</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-10 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-[var(--app-text-muted)] font-bold opacity-70">© 2026 CONEXIÓN SERVICIOS. TODOS LOS DERECHOS RESERVADOS.</p>
                        <div className="flex items-center gap-8">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                            <a href="#" className="text-[10px] font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit">Términos</a>
                            <a href="#" className="text-[10px] font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit">Privacidad</a>
                        </div>
                    </div>
                </div>
            </footer>

            <RegistrationModal 
                isOpen={isRegistrationOpen} 
                onClose={() => setIsRegistrationOpen(false)} 
            />
        </div>
    );
}
