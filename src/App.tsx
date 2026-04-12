import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, 
    Users,
    Instagram, Facebook,
    Search,
    ChevronRight,
    LayoutGrid, Building2,
    Eye, Handshake, TrendingUp, CheckCircle2
} from 'lucide-react';


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
import { DownloadApp } from './components/DownloadApp';

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
    const [showAllCategories, setShowAllCategories] = useState(false);

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

    const displayedServices = searchQuery ? filteredServices : (showAllCategories ? filteredServices : filteredServices.slice(0, 4));

    return (
        <div className="min-h-screen font-inter bg-[var(--app-bg)] relative overflow-x-hidden transition-colors duration-500">
            <AnimatedCursor />
            
            {/* ─── Navigation ────────────────────────────────────────────────────────── */}
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 flex justify-center border-b bg-[var(--nav-bg)] backdrop-blur-xl border-[var(--card-border)] shadow-sm",
                isScrolled ? "py-3" : "py-5"
            )}>
                <div className="max-w-[1440px] w-full px-6 md:px-12 flex items-center justify-between relative">
                    <div className="flex items-center gap-2">
                        <img src="/logo-cs.png" alt="CS Logo" className="h-8 md:h-10 w-auto" />
                        <span className="font-outfit font-black text-xl md:text-2xl tracking-tighter uppercase text-[var(--app-text)] hidden sm:inline-block">
                            Conexión <span className="text-[var(--primary)]">Servicios</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                        {['Inicio', 'Servicios', 'Negocios'].map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit"
                            >
                                {item}
                            </a>
                        ))}
                        <a 
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                            }}
                            className="text-sm font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit"
                        >
                            Contacto
                        </a>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 flex-shrink-0 rounded-full bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text)] hover:text-pink-500 transition-all shadow-sm group">
                            <Instagram size={17} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 flex-shrink-0 rounded-full bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text)] hover:text-blue-600 transition-all shadow-sm group">
                            <Facebook size={17} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-9 h-9 flex-shrink-0 rounded-full bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text)] hover:text-[var(--primary)] transition-all shadow-sm group">
                            <div className="group-hover:scale-110 transition-transform"><TikTokIcon size={16} /></div>
                        </a>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} isCircular={true} />
                        
                        <div className="pl-3 sm:pl-4 ml-1 sm:ml-2 border-l border-[var(--card-border)] hidden sm:block">
                            <InteractiveHoverButton 
                                text="Descargar App" 
                                onClick={() => document.getElementById('descarga')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                className="bg-[var(--primary)] border-[var(--primary)] text-white text-[12px] py-1.5 px-4 sm:py-2 sm:px-5 font-bold shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40 transition-all duration-300" 
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* ─── Hero Section ──────────────────────────────────────────────── */}
            <section id="inicio" className="relative pt-32 pb-40 px-6 md:px-12 lg:px-24 min-h-screen flex items-center overflow-hidden bg-[var(--app-bg)] transition-colors duration-500">
                {/* Atmospheric Glows — adapt to theme */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                    <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-cyan-400/15 dark:bg-cyan-900/20 blur-[150px] rounded-full opacity-70" />
                    <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-blue-300/10 dark:bg-blue-900/10 blur-[150px] rounded-full opacity-50" />
                    
                    {/* Glass blocks */}
                    {[
                        // Top Left pattern
                        { w: 320, h: 220, x: -8, y: -2, r: 24 },
                        { w: 200, h: 200, x: 14, y: 16, r: 24 },
                        { w: 260, h: 160, x: -2, y: 38, r: 24 },
                        
                        // Bottom Left pattern
                        { w: 280, h: 280, x: 8, y: 72, r: 24 },
                        { w: 180, h: 180, x: 28, y: 88, r: 24 },
                        
                        // Top Right pattern
                        { w: 280, h: 220, x: 74, y: -5, r: 24 },
                        { w: 220, h: 260, x: 88, y: 22, r: 24 },
                        
                        // Bottom Right pattern
                        { w: 300, h: 200, x: 68, y: 68, r: 24 },
                        { w: 240, h: 280, x: 86, y: 84, r: 24 },

                        // Center soft accents
                        { w: 350, h: 200, x: 42, y: 8, r: 24 },
                        { w: 200, h: 200, x: 45, y: 80, r: 24 },
                    ].map((block, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-[3rem] border border-cyan-400/60 dark:border-cyan-400/50 shadow-[0_20px_40px_rgba(8,145,178,0.4)] dark:shadow-[0_20px_40px_rgba(8,145,178,0.2)] bg-gradient-to-br from-cyan-400/50 to-blue-400/20 dark:from-cyan-600/50 dark:to-transparent backdrop-blur-2xl p-4"
                            initial={{ opacity: 0, scale: 0.95, rotate: block.r }}
                            animate={{ 
                                opacity: [0, 0.9, 0.9, 0],
                                y: [-15, i % 2 === 0 ? -35 : 25, i % 2 === 0 ? -20 : 10, -15],
                                x: [-10, i % 3 === 0 ? 40 : -30, i % 2 === 0 ? 30 : -40, -10],
                                rotate: [block.r, block.r + (i % 2 === 0 ? 15 : -15), block.r + (i % 2 === 0 ? 30 : -30), block.r]
                            }}
                            transition={{ 
                                duration: 60, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                times: [0, 0.05, 0.95, 1],
                                delay: (i % 4) * 15 
                            }}
                            style={{
                                width: block.w,
                                height: block.h,
                                left: `${block.x}%`,
                                top: `${block.y}%`,
                                zIndex: i + 1
                            }}
                        />
                    ))}

                    <InteractiveGridPattern 
                        width={100} 
                        height={100} 
                        className="opacity-[0.04] dark:opacity-[0.02] relative z-20"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10 px-12">
                    {/* Left Column: Text & CTAs */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-10">
                            <ShieldCheck size={14} />
                            La Red de Confianza del Ecuador
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-[var(--app-text)] leading-[1.05] tracking-tight mb-8">
                            Encuentra el servicio <br /> que necesitas,<br />
                            con la <span className="text-[var(--primary)] font-black">confianza</span><br />
                            que <span className="text-[var(--secondary)] font-black">mereces.</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-[var(--app-text-muted)] leading-relaxed mb-12 max-w-xl font-medium">
                            Conectamos a miles de familias y empresas ecuatorianas con <span className="text-[var(--app-text)] font-bold">profesionales verificados</span> en todo el país.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <InteractiveHoverButton 
                                text="Descargar la App"
                                onClick={() => document.getElementById('descarga')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                className="h-16 px-10 bg-[var(--primary)] border-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/20 font-bold"
                            />
                            <button 
                                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                                className="h-16 px-10 rounded-2xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-[var(--app-text)] font-bold hover:bg-[var(--primary)]/5 transition-all flex items-center gap-3 shadow-[0_15px_30px_-5px_rgba(8,145,178,0.15)] dark:shadow-none"
                            >
                                Ver Servicios <span className="opacity-40">→</span>
                            </button>
                        </div>

                    </motion.div>



                    {/* Right Column: Transparent Portrait Collage */}
                    <div className="relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="relative z-10"
                        >
                            <img 
                                src="/professionals_studio.png" 
                                alt="Expertos Profesionales de Conexión Servicios" 
                                className="w-full h-auto object-contain max-h-[750px] drop-shadow-2xl rounded-[3rem]" 
                            />
                            {/* Glassmorphism trust card floating on image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -bottom-4 -left-8 bg-[var(--app-bg)]/90 backdrop-blur-xl border border-[var(--card-border)] rounded-2xl p-4 shadow-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-[var(--app-text)] uppercase tracking-wide">Verificados y Certificados</p>
                                        <p className="text-[10px] text-[var(--app-text-muted)] font-medium">Profesionales de confianza</p>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Coverage badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute -top-4 -right-4 bg-[var(--primary)] text-white rounded-2xl px-4 py-3 shadow-xl shadow-[var(--primary)]/30"
                            >
                                <p className="text-xs font-black uppercase tracking-widest">Todo Ecuador</p>
                                <p className="text-[10px] font-medium opacity-80">24 Provincias</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* ─── Search & Categories ────────────────────────────────────────────────── */}
            <section id="servicios" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[var(--section-alt-bg)] transition-colors duration-500">
                {/* Section Decorations */}
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-black uppercase tracking-widest mb-4"
                            >
                                <LayoutGrid size={12} />
                                Directorio Profesional
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-black font-outfit text-[var(--app-text)] mb-6 tracking-tight leading-none uppercase">
                                Explora nuestros <br />
                                <span className="text-[var(--primary)]">Servicios</span>
                            </h2>
                            <p className="text-xl text-[var(--app-text-muted)] font-medium max-w-lg">
                                Conectamos con más de <span className="text-[var(--app-text)] font-black">26 categorías</span> de servicios profesionales para el hogar y la empresa.
                            </p>
                        </div>
                        
                        <div className="relative w-full md:w-[450px] group">
                            <div className="absolute inset-0 bg-[var(--primary)]/5 blur-xl group-focus-within:bg-[var(--primary)]/10 transition-all" />
                            <div className="relative">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--app-text-muted)] transition-colors group-focus-within:text-[var(--primary)]" size={22} />
                                <input 
                                    type="text"
                                    placeholder="¿Qué servicio necesitas hoy?..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-16 pr-8 py-6 bg-[var(--app-bg-soft)] border border-[var(--card-border)] rounded-3xl text-[var(--app-text)] focus:ring-4 focus:ring-[var(--primary)]/10 focus:border-[var(--primary)] outline-none transition-all font-bold text-base shadow-[0_20px_50px_-10px_rgba(8,145,178,0.15)] dark:shadow-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {displayedServices.map((service) => (
                            <CategoryCard 
                                key={service.id} 
                                title={service.title}
                                icon={service.icon}
                                image={(service as any).image}
                                subcategories={service.subcategories}
                                description={service.description}
                            />
                        ))}
                    </div>

                    {!searchQuery && (
                        <div className="mt-16 text-center">
                            {showAllCategories ? (
                                <motion.button 
                                    onClick={() => {
                                        setShowAllCategories(false);
                                        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="px-10 py-5 bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-[var(--app-text)] font-bold rounded-2xl hover:bg-[var(--primary)]/5 transition-colors shadow-[0_15px_30px_-5px_rgba(8,145,178,0.15)] dark:shadow-none flex items-center gap-4 mx-auto group ring-2 ring-transparent hover:ring-[var(--primary)]/30"
                                >
                                    Ver Menos
                                    <ChevronRight size={18} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            ) : (
                                <motion.button 
                                    onClick={() => setShowAllCategories(true)}
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="px-10 py-5 bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-[var(--app-text)] font-bold rounded-2xl hover:bg-[var(--primary)]/5 transition-colors shadow-[0_15px_30px_-5px_rgba(8,145,178,0.15)] dark:shadow-none flex items-center gap-4 mx-auto group ring-2 ring-transparent hover:ring-[var(--primary)]/30"
                                >
                                    Ver Todas las Categorías
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            )}
                        </div>
                    )}

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
            <section id="negocios" className="py-20 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[var(--app-bg)] transition-colors duration-500 min-h-screen flex items-center">
                {/* Background skewed element */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[var(--primary)]/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none" />
                
                {/* Floating animated blobs */}
                <motion.div 
                    animate={{ y: [0, 60, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-orange-400/10 dark:bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"
                />
                <motion.div 
                    animate={{ x: [0, -40, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none"
                />

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Visual Side: Modern Grid with Generated Images */}
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6"
                                >
                                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[var(--card-border)] relative">
                                        <img src="/biz_electrician.png" alt="Electricista Profesional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                            <p className="text-white font-black text-xl font-outfit">Electricistas</p>
                                            <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Verificado</p>
                                        </div>
                                    </div>
                                    <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[var(--card-border)] relative">
                                        <img src="/biz_plumber.png" alt="Plomero Profesional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                            <p className="text-white font-black text-xl font-outfit">Plomeros</p>
                                            <p className="text-white/70 text-sm font-bold uppercase tracking-widest">En tu zona</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-6 pt-12"
                                >
                                    <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[var(--card-border)] relative">
                                        <img src="/biz_mechanic.png" alt="Mecánico Profesional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                            <p className="text-white font-black text-xl font-outfit">Mecánicos</p>
                                            <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Taller certificado</p>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-[var(--card-border)] relative">
                                        <img src="/biz_owner.png" alt="Emprendedor Profesional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                            <p className="text-white font-black text-xl font-outfit">Tu Negocio</p>
                                            <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Crece con nosotros</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            {/* Decorative accent behind images */}
                            <div className="absolute -inset-10 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent blur-[120px] -z-0 rounded-[4rem]" />
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-black uppercase tracking-widest mb-6">
                                    <Building2 size={16} />
                                    Portal de Socios
                                </div>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-outfit text-[var(--app-text)] mb-8 tracking-tight leading-none uppercase">
                                    IMPULSA TU <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-cyan-500 pb-2 pr-4 inline-block">ÉXITO</span>
                                </h2>

                                <div className="p-5 md:p-6 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 via-[var(--app-bg)] to-transparent border border-[var(--primary)]/20 shadow-lg relative overflow-hidden mb-8">
                                    <div className="absolute -top-10 -right-6 p-4 opacity-[0.04] dark:opacity-10">
                                        <TrendingUp size={140} />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-black font-outfit text-[var(--app-text)] mb-4">
                                        Publícalo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-cyan-500">gratis</span> en la app de Conexión Servicios
                                    </h4>
                                    <ul className="space-y-4 relative z-10">
                                        <li className="flex items-start gap-4">
                                            <div className="mt-0.5 bg-emerald-500/10 p-1.5 rounded-full text-emerald-500 flex-shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-sm md:text-base font-medium text-[var(--app-text-muted)] leading-snug">
                                                <strong className="text-[var(--app-text)] font-black uppercase">Beneficios:</strong> Publícalo 100% gratis durante tres meses, sin contratos.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-0.5 bg-emerald-500/10 p-1.5 rounded-full text-emerald-500 flex-shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-sm md:text-base font-medium text-[var(--app-text-muted)] leading-snug">
                                                <strong className="text-[var(--app-text)] font-black uppercase">Cero comisiones:</strong> Todo el pago es para ti.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-0.5 bg-emerald-500/10 p-1.5 rounded-full text-emerald-500 flex-shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-sm md:text-base font-medium text-[var(--app-text-muted)] leading-snug">
                                                <strong className="text-[var(--app-text)] font-black uppercase">Conexión directa:</strong> Sin intermediarios.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-8"
                            >
                                {[
                                    { icon: Eye, title: 'Visibilidad', desc: 'Tu perfil ante miles de clientes.' },
                                    { icon: Handshake, title: 'Conexión', desc: 'Trato directo, resultados inmediatos.' },
                                    { icon: Users, title: 'Más clientes', desc: 'Llega a miles de clientes nuevos cada día.' },
                                    { icon: TrendingUp, title: 'Crecimiento', desc: 'Escala tu negocio a otro nivel.' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2 group">
                                        <div className="w-12 h-12 rounded-2xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] shadow-[0_15px_30px_-5px_rgba(8,145,178,0.15)] dark:shadow-none flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                                            <item.icon size={24} />
                                        </div>
                                        <h4 className="text-base font-black font-outfit text-[var(--app-text)] uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-[var(--app-text-muted)] text-xs md:text-sm leading-relaxed font-bold italic">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>

                            <div className="relative z-20">
                                <InteractiveHoverButton 
                                    text="UNIRME AHORA"
                                    onClick={() => setIsRegistrationOpen(true)}
                                    className="h-16 px-10 bg-gradient-to-r from-[var(--primary)] to-cyan-500 border-none text-white shadow-2xl shadow-[var(--primary)]/40 text-lg font-black rounded-2xl w-full sm:w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <DownloadApp />
            
            {/* ─── Footer ────────────────────────────────────────────────────────────── */}
            <footer className="bg-[var(--app-bg-soft)] pt-24 pb-12 border-t border-[var(--card-border)]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="flex items-center gap-2 mb-8">
                                <img src="/logo-cs.png" alt="CS Logo" className="h-8" />
                                <span className="font-outfit font-black text-xl tracking-tight uppercase text-[var(--app-text)]">
                                    Conexión <span className="text-[var(--primary)]">Servicios</span>
                                </span>
                            </div>
                            <p className="text-[var(--app-text-muted)] text-sm mb-8 font-medium leading-relaxed italic">
                                "La plataforma líder para conectar profesionales con usuarios en todo el territorio ecuatoriano."
                            </p>
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-[var(--app-text)] font-black uppercase text-xs tracking-[0.2em] mb-8 font-outfit">Compañía</h4>
                            <ul className="space-y-4 text-sm font-bold text-[var(--app-text-muted)]">
                                <li><a href="#inicio" className="hover:text-[var(--primary)] transition-colors">Nosotros</a></li>
                                <li><a href="#servicios" className="hover:text-[var(--primary)] transition-colors">Categorías</a></li>
                                <li><a href="#negocios" className="hover:text-[var(--primary)] transition-colors">Registro de Negocios</a></li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-[var(--app-text)] font-black uppercase text-xs tracking-[0.2em] mb-8 font-outfit">Contacto</h4>
                            <ul className="space-y-4 text-sm font-bold text-[var(--app-text-muted)]">
                                <li>
                                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-pink-500 transition-colors">
                                        <Instagram size={18} /> Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-blue-600 transition-colors">
                                        <Facebook size={18} /> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-[var(--primary)] transition-colors">
                                        <TikTokIcon size={17} /> TikTok
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="mailto:info@conexionserviciosecuador.com" className="inline-flex items-center gap-3 hover:text-[var(--primary)] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> Correo Electrónico
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="https://wa.me/593000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-lg hover:bg-emerald-500 hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h4 className="text-[var(--app-text)] font-black uppercase text-xs tracking-[0.2em] mb-8 font-outfit">Descarga</h4>
                            <div className="flex flex-col gap-3 items-start">
                                {/* Google Play Footer Button */}
                                <a href="#" className="group transition-all hover:scale-[1.02] active:scale-95 w-44">
                                    <div className="bg-black rounded-[8px] border border-[#a6a6a6] p-[1.5px] h-full">
                                        <div className="flex items-center justify-center gap-3 px-2 py-1.5 bg-black rounded-[6.5px]">
                                            <svg viewBox="0 0 512 512" className="w-5 h-5 flex-shrink-0">
                                                <path d="M10.1,23.3C9.4,24,9,25,9,26.2v459.7c0,1.2,0.4,2.2,1.1,2.9l1.4,1.4L259.9,256L11.5,21.9L10.1,23.3z" fill="#00e676"/>
                                                <path d="M341.6,337.8L259.9,256L11.5,504.1c1.2,1.2,3.1,1.4,5.2,0.2l324.9-185.3L341.6,337.8z" fill="#ffeb3b"/>
                                                <path d="M486.2,243.3L341.6,174.2L259.9,256l81.7,81.8L486.2,268.7C493.5,264.5,493.5,257.5,486.2,243.3z" fill="#f44336"/>
                                                <path d="M341.6,174.2L16.7,7.7C14.6,6.5,12.7,6.6,11.5,7.9l248.4,248.1L341.6,174.2z" fill="#2196f3"/>
                                            </svg>
                                            <div className="flex flex-col leading-tight items-start pr-1">
                                                <span className="text-[7px] text-white font-bold tracking-tight opacity-90">GET IT ON</span>
                                                <span className="text-[14px] text-white font-bold -mt-0.5 tracking-tight">Google Play</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* App Store Footer Button */}
                                <a href="#" className="group transition-all hover:scale-[1.02] active:scale-95 w-44">
                                    <div className="bg-black rounded-[8px] border border-[#a6a6a6] p-[1.5px] h-full">
                                        <div className="flex items-center justify-center gap-3 px-2 py-1.5 bg-black rounded-[6.5px]">
                                            <svg viewBox="0 0 384 512" className="w-5 h-5 flex-shrink-0" fill="white">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 39.3 14.4 81.2 36.4 115.6 20.9 31.8 51 64.9 84.4 64.9 31.5-1.2 42.6-21.7 87.5-21.7 44.9 0 54.4 20.7 88.5 20.7 34.6 0 62.4-30.8 84.4-64.9 14.2-20.7 21.5-41.4 21.9-42.5-1.2-.5-65.7-25-66.5-76.9zM224 81c19.1-23.1 31.9-55.2 28.4-87.1-28.3 1.1-62.7 18.9-83 42.4-18.2 21-33.9 53.6-29.6 84.5 31.3 2.4 62.2-16.7 84.2-40.2z" />
                                            </svg>
                                            <div className="flex flex-col leading-tight items-start pr-1">
                                                <span className="text-[7px] text-white font-medium tracking-tight opacity-95">Download on the</span>
                                                <span className="text-[14px] text-white font-semibold -mt-0.5 tracking-tight">App Store</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-10 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-[var(--app-text-muted)] font-bold opacity-70">© 2026 CONEXIÓN SERVICIOS. TODOS LOS DERECHOS RESERVADOS.</p>
                        <div className="flex items-center gap-8">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                            <a href="https://conexionserviciosec.blogspot.com/p/terminos-y-condiciones-de-uso-de-la.html" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit">Términos</a>
                            <a href="https://blog.conexionserviciosecuador.com/privacidad" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-[var(--app-text-muted)] hover:text-[var(--primary)] uppercase tracking-widest transition-colors font-outfit">Privacidad / Seguridad</a>
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
