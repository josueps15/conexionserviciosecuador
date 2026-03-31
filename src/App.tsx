import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
    ShieldCheck, 
    Users, Globe, Mail,
    Instagram, Facebook, Download, ArrowRight,
    Car, Home, Scissors,
    Sparkles, Shirt, Truck,
    Building2, GraduationCap,
    HeartPulse, Crown, WashingMachine,
    Dumbbell, UtensilsCrossed, Plane, Cpu,
    Menu, X
} from 'lucide-react';

import logoCS from './assets/logo-cs.png';
import { InteractiveHoverButton } from './components/ui/InteractiveHoverButton';
import { InteractiveGridPattern } from './components/ui/InteractiveGridPattern';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { RegistrationModal } from './components/RegistrationModal';
import { cn } from './lib/utils';

// TikTok SVG Icon (not in lucide-react)
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

// appScreens removed as the mockup was removed

const fadeIn = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
};



// ─── Business Benefits (Legacy) removed in favor of Visual Bento Grid ─────────────────

// ─── Service Categories ─────────────────────────────────────────────────────────
const SERVICE_CATEGORIES = [
    { 
        icon: Sparkles, label: 'Limpieza', color: '#06B6D4', 
        img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80',
        slogan: '¡Deja tu espacio impecable con expertos ahora mismo!',
        specialties: ['Hogar y Oficinas', 'Desinfección', 'Limpieza profunda', 'Alfombras y muebles'],
        bg: 'from-cyan-500/15 to-cyan-500/5', border: 'border-cyan-500/20' 
    },
    { 
        icon: Crown, label: 'Pastelería', color: '#EC4899', 
        img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
        slogan: '¡Date un gusto dulce con lo mejor de la pastelería aquí!',
        specialties: ['Tortas personalizadas', 'Bocaditos', 'Panadería artesanal', 'Mesa de dulces'],
        bg: 'from-pink-500/15 to-pink-500/5', border: 'border-pink-500/20' 
    },
    { 
        icon: Scissors, label: 'Belleza', color: '#A855F7', 
        img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80',
        slogan: '¿Listo para lucir increíble? ¡Mira nuestros especialistas!',
        specialties: ['Corte y color', 'Manicure y Pedicure', 'Maquillaje profesional', 'Tratamientos faciales'],
        bg: 'from-purple-500/15 to-purple-500/5', border: 'border-purple-500/20' 
    },
    { 
        icon: Shirt, label: 'Ropa', color: '#F97316', 
        img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
        slogan: '¡Viste con estilo y calidad! Encuentra tu sastre ideal hoy.',
        specialties: ['Confección a medida', 'Arreglos y costura', 'Limpieza en seco', 'Uniformes'],
        bg: 'from-orange-500/15 to-orange-500/5', border: 'border-orange-500/20' 
    },
    { 
        icon: Building2, label: 'Construcción', color: '#EF4444', 
        img: '/construccion_img.png',
        slogan: '¡Remodela y construye tus sueños con los mejores expertos!',
        specialties: ['Albañilería', 'Pintura y acabados', 'Gypsum y Drywall', 'Estructuras metálicas'],
        bg: 'from-red-500/15 to-red-500/5', border: 'border-red-500/20' 
    },
    { 
        icon: Truck, label: 'Courier', color: '#F59E0B', 
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80',
        slogan: '¡Envía y recibe tus paquetes con total seguridad y rapidez!',
        specialties: ['Entregas urbanas', 'Encomiendas nacionales', 'Compras internacionales', 'Logística'],
        bg: 'from-amber-500/15 to-amber-500/5', border: 'border-amber-500/20' 
    },
    { 
        icon: HeartPulse, label: 'Salud', color: '#F43F5E', 
        img: '/medicos_img.png',
        slogan: '¡Tu salud es prioridad! Consulta con médicos verificados.',
        specialties: ['Medicina General', 'Enfermería a domicilio', 'Terapia física', 'Laboratorio'],
        bg: 'from-red-400/15 to-red-400/5', border: 'border-red-400/20' 
    },
    { 
        icon: GraduationCap, label: 'Educación', color: '#8B5CF6', 
        img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&q=80',
        slogan: '¡Descubre nuevos conocimientos con los mejores tutores online!',
        specialties: ['Clases dirigidas', 'Idiomas', 'Cursos técnicos', 'Asesoría académica'],
        bg: 'from-violet-500/15 to-violet-500/5', border: 'border-violet-500/20' 
    },
    { 
        icon: Car, label: 'Automotriz', color: '#3B82F6', 
        img: '/mecanica_img.png',
        slogan: '¡Dale mantenimiento a tu vehículo con ayuda profesional hoy!',
        specialties: ['Mecánica preventiva', 'ABC de motor', 'Enderezada y pintura', 'Auxilio mecánico'],
        bg: 'from-blue-600/15 to-blue-600/5', border: 'border-blue-600/20' 
    },
    { 
        icon: WashingMachine, label: 'Lavandería', color: '#3B82F6', 
        img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80',
        slogan: '¡Ropa limpia y fresca sin esfuerzo! Mira los mejores servicios.',
        specialties: ['Lavado y secado', 'Planchado', 'Tintorería', 'Edredones y cortinas'],
        bg: 'from-blue-500/15 to-blue-500/5', border: 'border-blue-500/20' 
    },
    { 
        icon: Dumbbell, label: 'Deportes', color: '#10B981', 
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
        slogan: '¡Alcanza tus metas con entrenadores calificados cerca de ti!',
        specialties: ['Entrenamiento personal', 'Gimnasios', 'Yoga y Pilates', 'Nutrición deportiva'],
        bg: 'from-emerald-500/15 to-emerald-500/5', border: 'border-emerald-500/20' 
    },
    { 
        icon: UtensilsCrossed, label: 'Restaurantes', color: '#F97316', 
        img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80',
        slogan: '¡Explora sabores únicos listos para deleitar tu paladar ahora!',
        specialties: ['Comida Nacional', 'Buffets', 'Catering para eventos', 'Entrega a domicilio'],
        bg: 'from-orange-400/15 to-orange-400/5', border: 'border-orange-400/20' 
    },
    { 
        icon: Plane, label: 'Turismo', color: '#38BDF8', 
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
        slogan: '¡Planifica tu aventura inolvidable con guías certificados aquí!',
        specialties: ['Tours guiados', 'Transporte turístico', 'Paquetes de viaje', 'Hotelería'],
        bg: 'from-sky-500/15 to-sky-500/5', border: 'border-sky-500/20' 
    },
    { 
        icon: Cpu, label: 'Tecnología', color: '#22D3EE', 
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
        slogan: '¡Soluciones inteligentes y soporte técnico a tu alcance total!',
        specialties: ['Soporte técnico', 'Desarrollo web', 'Cámaras de seguridad', 'Reparación de PCs'],
        bg: 'from-cyan-600/15 to-cyan-600/5', border: 'border-cyan-600/20' 
    },
    { 
        icon: ShieldCheck, label: 'Seguridad', color: '#10B981', 
        img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80',
        slogan: '¡Protección real para tu hogar y negocio con expertos de élite!',
        specialties: ['Guardia privada', 'Monitoreo 24/7', 'Alarmas residenciales', 'Seguridad electrónica'],
        bg: 'from-emerald-600/15 to-emerald-600/5', border: 'border-emerald-600/20' 
    },
    { 
        icon: Home, label: 'Hogar', color: '#22C55E', 
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80',
        slogan: '¡Todo para tu casa en un solo lugar! Mira todos los detalles aquí.',
        specialties: ['Plomería', 'Electricidad', 'Cerrajería', 'Reparación de electrodomésticos'],
        bg: 'from-green-500/15 to-green-500/5', border: 'border-green-500/20' 
    },
];

const MegaCardCollage = () => {
    const images = [
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&q=80", // Internet
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&q=80", // Events
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&q=80", // Drivers
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&q=80", // Car rental
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80", // Grocery
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300&q=80", // Pets
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=300&q=80", // Agricola
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80", // Limpieza
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&q=80", // Cocina
    ];

    return (
        <div className="absolute inset-0 z-0 grid grid-cols-3 grid-rows-3 gap-1 opacity-50 hover:opacity-70 transition-all duration-1000 scale-110 group-hover:scale-125">
            {images.map((img, i) => (
                <div key={i} className="relative w-full h-full overflow-hidden">
                    <img src={img} alt="Service" className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
};

const CategoryCard = ({ cat, isFocused, onSelect }: { cat: any, isFocused: boolean, onSelect: () => void }) => {
    return (
        <motion.div
            onClick={onSelect}
            animate={{ 
                scale: isFocused ? 1.15 : 1,
                zIndex: isFocused ? 20 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="min-w-[72vw] md:min-w-[29vw] snap-center flex-shrink-0"
        >
            <motion.div
                className={cn(
                    "group relative h-[400px] md:h-[420px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer bg-slate-900 transition-all duration-500",
                    cat.isMega && "bg-white/5 border-dashed border-2 border-white/20"
                )}
            >
                {cat.isMega ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center overflow-hidden">
                        <MegaCardCollage />
                        <div className="absolute inset-0 bg-slate-950/80 group-hover:bg-slate-950/60 transition-colors duration-700 z-[1]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-[2]" />
                        
                        <motion.div 
                            animate={{ scale: isFocused ? 1.2 : 1 }}
                            className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 relative z-10"
                        >
                            <ArrowRight size={50} className="text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                        </motion.div>
                        <h3 className="text-6xl font-black text-white mb-2 relative z-10 tracking-tighter shadow-black drop-shadow-2xl">+ de 100</h3>
                        <p className="text-xl text-white font-bold mb-8 relative z-10 leading-tight">categorías y especialidades <br/> esperando por ti</p>
                        <a href="#descargar" className="px-10 py-5 rounded-3xl bg-blue-600 font-black text-white text-sm relative z-10 hover:bg-blue-500 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-white/20 flex items-center gap-3">
                            EXPLORAR TODO
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ArrowRight size={20} />
                            </motion.span>
                        </a>
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 z-0 text-white/0">
                            {cat.img && (
                                <img 
                                    src={cat.img} 
                                    alt={cat.label} 
                                    className="w-full h-full object-cover transition-transform duration-[2000ms]"
                                />
                            )}
                            {/* Dynamic overlay: clearer on focus */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-700",
                                isFocused ? "opacity-30" : "opacity-80"
                            )} />
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br transition-opacity duration-700",
                                isFocused ? "opacity-20" : "opacity-40"
                            )}
                                 style={{ backgroundImage: `linear-gradient(to bottom right, ${cat.color}, transparent)` }} />
                        </div>

                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                            <div className="flex items-center gap-5 mb-5">
                                <motion.div 
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-3xl border border-white/30"
                                    style={{ background: `${cat.color}40` }}
                                    animate={{ scale: isFocused ? 1.25 : 1 }}
                                >
                                    <cat.icon size={30} style={{ color: cat.color }} />
                                </motion.div>
                                <h3 className="text-2xl lg:text-3xl font-black text-white drop-shadow-lg leading-tight">{cat.label}</h3>
                            </div>

                            {/* Specialties: Visible on center focus automatically */}
                            <div className={cn(
                                "space-y-1.5 mb-5 transition-all duration-700 transform",
                                isFocused ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                            )}>
                                {cat.specialties.slice(0, 3).map((spec: string) => (
                                    <div key={spec} className="flex items-center gap-3 text-slate-200 text-sm font-semibold">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                                        <span className="truncate">{spec}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-2 flex items-center gap-3 text-white/40 group-hover:text-white transition-all text-[9px] font-black uppercase tracking-widest">
                                Ver Profesionales <ArrowRight size={16} />
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};

const App: React.FC = () => {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const { scrollX } = useScroll({ container: carouselRef });

    const scrollToIndex = (i: number) => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const cardElements = container.getElementsByClassName('snap-center');
        if (cardElements[i]) {
            cardElements[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    };

    useMotionValueEvent(scrollX, "change", (latest: number) => {
        if (!carouselRef.current) return;
        const isMobile = window.innerWidth < 1024;
        const cardPct = isMobile ? 0.72 : 0.32; // match min-w-[72vw] vs md:min-w-[29vw] (approx 32 with gap)
        const cardWidth = window.innerWidth * cardPct;
        const index = Math.round(latest / cardWidth);
        const centerIndex = Math.max(0, index + (isMobile ? 0 : 1)); 
        if (centerIndex !== activeIndex) {
            setActiveIndex(centerIndex);
        }
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                        className="flex items-center gap-2 sm:gap-3 font-outfit font-extrabold text-xl sm:text-2xl tracking-tight relative z-50">
                        <motion.img
                            src={logoCS}
                            alt="Conexión Servicios"
                            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                            whileHover={{ scale: 1.18, rotate: -6, filter: 'drop-shadow(0 0 12px rgba(0,120,255,0.7))' }}
                            whileTap={{ scale: 0.9, rotate: 6 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                        />
                        <span>Conexión <span className="text-secondary">Servicios</span></span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-400">
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

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2 rounded-xl bg-white/5 border border-white/10 text-white"
                        aria-label="Abrir Menú"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-[100] lg:hidden bg-slate-950 flex flex-col pt-32 px-10"
                        >
                            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
                                <div className="absolute top-[10%] right-[-20%] w-[300px] h-[300px] bg-primary/40 blur-[100px] rounded-full" />
                                <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] bg-secondary/30 blur-[100px] rounded-full" />
                            </div>

                            <nav className="flex flex-col gap-8 mb-12 relative z-10">
                                {[['Inicio', '#inicio'], ['Usuarios', '#usuarios'], ['Negocios', '#negocios'], ['Contacto', '#contacto']].map(([label, href]) => (
                                    <motion.a 
                                        key={label}
                                        href={href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-4xl font-outfit font-black text-white hover:text-secondary transition-colors tracking-tight"
                                    >
                                        {label}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="flex flex-col gap-10 mt-auto pb-16 relative z-10">
                                <div className="flex gap-6">
                                    {[
                                        { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
                                        { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
                                        { Icon: TikTokIcon, href: SOCIAL_LINKS.tiktok, label: 'TikTok' }
                                    ].map(({ Icon, href, label }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" 
                                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>
                                <a href="#descargar" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                    <InteractiveHoverButton text="Descargar App" className="w-full h-16 text-lg bg-primary/20 border-primary/30" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main>
                {/* ── HERO ── */}
                <section id="inicio" className="relative min-h-screen flex items-center pt-10 pb-10">
                    {/* Floating Side Images Collage */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 lg:z-10 overflow-visible">
                        {/* Left Side Collage */}
                        {/* Plomero (Outer Top) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 0.5, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-[8%] left-[3%] w-44 h-56 lg:w-52 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[2px] border-sky-500/30 shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-500 -rotate-6 z-10 pointer-events-auto group overflow-hidden scale-[0.42] sm:scale-75 lg:scale-[0.90] origin-top-left"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[1.8rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="/plomeria_img.png" alt="Plomero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[1.8rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-sky-500/20 text-sky-400 border border-sky-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Plomería</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Médico (Inner High) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, -10, 0] }} transition={{ duration: 0.5, delay: 0.1, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-[25%] left-[16%] w-48 h-60 lg:w-60 lg:h-[18rem] rounded-[1.5rem] lg:rounded-[2.5rem] border-[2px] border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.15)] hover:border-rose-500/60 hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-500 rotate-3 z-30 pointer-events-auto group overflow-hidden scale-[0.45] sm:scale-75 lg:scale-[0.90] origin-top-left"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[2.3rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="/medicos_img.png" alt="Médico" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[2.3rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Salud y Médicos</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Electricista (Outer Low) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 0.5, delay: 0.2, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute bottom-[22%] left-[4%] w-44 h-56 lg:w-52 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[2px] border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:border-yellow-500/60 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] transition-all duration-500 -rotate-3 z-10 pointer-events-auto group overflow-hidden scale-[0.42] sm:scale-75 lg:scale-100 origin-bottom-left"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[1.8rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80" alt="Electricista" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[1.8rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Electricista</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mecánica (Inner Low) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, -10, 0] }} transition={{ duration: 0.5, delay: 0.3, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute bottom-[10%] left-[16%] w-48 h-60 lg:w-60 lg:h-[18rem] rounded-[1.5rem] lg:rounded-[2.5rem] border-[2px] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-500 rotate-6 z-20 pointer-events-auto group overflow-hidden scale-[0.45] sm:scale-75 lg:scale-100 origin-bottom-left"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[2.3rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="/mecanica_img.png" alt="Mecánico" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[2.3rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Mecánica</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side Collage */}
                        {/* Grúa (Outer Top) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 0.5, delay: 0.15, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-[8%] right-[3%] w-44 h-56 lg:w-52 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[2px] border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all duration-500 rotate-6 z-10 pointer-events-auto group overflow-hidden scale-[0.42] sm:scale-75 lg:scale-[0.90] origin-top-right"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[1.8rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="/grua_camion.png" alt="Grúa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[1.8rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Grúas y Auxilio</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Limpieza (Inner High) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, -10, 0] }} transition={{ duration: 0.5, delay: 0.25, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-[25%] right-[16%] w-48 h-60 lg:w-60 lg:h-[18rem] rounded-[1.5rem] lg:rounded-[2.5rem] border-[2px] border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500 -rotate-3 z-30 pointer-events-auto group overflow-hidden scale-[0.45] sm:scale-75 lg:scale-[0.90] origin-top-right"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[2.3rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80" alt="Limpieza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[2.3rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Limpieza</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Educación (Outer Low) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 0.5, delay: 0.2, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute bottom-[22%] right-[4%] w-44 h-56 lg:w-52 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[2px] border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-violet-500/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500 rotate-3 z-10 pointer-events-auto group overflow-hidden scale-[0.42] sm:scale-75 lg:scale-100 origin-bottom-right"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[1.8rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&q=80" alt="Educación" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[1.8rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Educación</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Belleza (Inner Low) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, -10, 0] }} transition={{ duration: 0.5, delay: 0.3, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute bottom-[10%] right-[16%] w-48 h-60 lg:w-60 lg:h-[18rem] rounded-[1.5rem] lg:rounded-[2.5rem] border-[2px] border-fuchsia-500/30 shadow-[0_0_30_rgba(217,70,239,0.15)] hover:border-fuchsia-500/60 hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all duration-500 -rotate-6 z-20 pointer-events-auto group overflow-hidden scale-[0.45] sm:scale-75 lg:scale-100 origin-bottom-right"
                        >
                            <div className="w-full h-full rounded-[1.3rem] lg:rounded-[2.3rem] overflow-hidden relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>
                                <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80" alt="Belleza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[1.3rem] lg:rounded-[2.3rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end items-center pb-6">
                                    <span className="bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit backdrop-blur-md">Belleza</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-primary/20 blur-[120px] rounded-full z-0" />
                        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-secondary/20 blur-[120px] rounded-full z-0" />
                    </div>

                    {/* Center Content */}
                    <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] sm:text-[13px] font-bold mb-8 tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                PLATAFORMA LISTA PARA LANZAMIENTO
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-8 leading-[1.15] tracking-tight text-white">
                                ¿Buscas un Mecánico, <br className="hidden sm:block" />
                                un Electricista, <span className="whitespace-nowrap">una Grúa</span> <br className="hidden sm:block" />
                                o un <span className="text-gradient pb-1 pr-1">Centro Educativo</span>?
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
                                En la <strong className="text-white">APP Conexión Servicios</strong> encontrarás los mejores servicios profesionales.
                            </p>
                            <div className="flex flex-wrap justify-center gap-5">
                                <a href="#descargar" className="group relative px-8 py-4 rounded-2xl bg-blue-600 font-bold text-white flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95 overflow-hidden w-full sm:w-auto">
                                    <span className="relative z-10 font-outfit">Descargar la App</span>
                                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="relative z-10">
                                        <Download size={20} className="text-blue-100" />
                                    </motion.span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </a>
                                <a href="#usuarios" className="px-8 py-4 rounded-2xl border border-white/5 bg-slate-900/50 font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-all backdrop-blur-md font-outfit flex items-center justify-center gap-2 w-full sm:w-auto">
                                    Explorar Servicios <ArrowRight size={16} />
                                </a>
                            </div>

                            {/* Stats row */}
                            <div className="flex justify-center gap-8 sm:gap-14 mt-16 pt-8 border-t border-white/10 w-full max-w-3xl">
                                {[
                                    { value: '50+', label: 'Categorías' },
                                    { value: '100%', label: 'Verificados' },
                                    { value: '24', label: 'Provincias Cobertura' },
                                ].map(s => (
                                    <div key={s.label}>
                                        <p className="text-3xl md:text-4xl font-outfit font-black text-white">{s.value}</p>
                                        <p className="text-xs md:text-sm text-slate-500 mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── PARA USUARIOS (Interactive Focus Carousel) ── */}
                <section id="usuarios" className="min-h-screen py-12 flex flex-col justify-center relative overflow-hidden scroll-mt-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
                    
                    {/* Header: Centered & Compact to ensure visibility */}
                    <div className="max-w-7xl mx-auto px-6 relative z-10 mb-0">
                        <motion.div {...fadeIn} className="text-center">
                            <span className="inline-block px-4 py-1 rounded-full text-[13px] font-bold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-2">
                                Para Usuarios
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-3 leading-tight max-w-[280px] sm:max-w-none mx-auto">
                                Encuentra fácilmente el <br className="hidden md:block" />
                                <span className="text-gradient">servicio que necesitas</span>
                            </h2>
                            <AnimatePresence mode="wait">
                                <motion.p 
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-slate-200 mx-auto text-base md:text-xl font-bold italic h-8 whitespace-nowrap"
                                >
                                    {activeIndex < SERVICE_CATEGORIES.length 
                                        ? SERVICE_CATEGORIES[activeIndex].slogan 
                                        : "Explora todas las posibilidades que tenemos para ti."}
                                </motion.p>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative group/carousel w-full">
                        {/* Navigation Buttons */}
                        <div className="hidden lg:block">
                            <button 
                                onClick={() => {
                                    const el = document.getElementById('category-scroll-v3');
                                    if (el) el.scrollBy({ left: -window.innerWidth * 0.32, behavior: 'smooth' });
                                }}
                                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-900/40 border border-white/5 flex items-center justify-center text-white z-20 opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-primary/20 backdrop-blur-md"
                            >
                                <ArrowRight size={30} className="rotate-180" />
                            </button>
                            <button 
                                onClick={() => {
                                    const el = document.getElementById('category-scroll-v3');
                                    if (el) el.scrollBy({ left: window.innerWidth * 0.32, behavior: 'smooth' });
                                }}
                                className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-900/40 border border-white/5 flex items-center justify-center text-white z-20 opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-primary/20 backdrop-blur-md"
                            >
                                <ArrowRight size={30} />
                            </button>
                        </div>

                        <div 
                            id="category-scroll-v3"
                            ref={carouselRef}
                            className="flex gap-6 md:gap-10 overflow-x-auto overflow-y-visible pb-16 pt-4 px-[4vw] md:px-[5vw] scrollbar-none snap-x snap-mandatory scroll-smooth items-center h-[580px]"
                            style={{ 
                                scrollbarWidth: 'none', 
                                msOverflowStyle: 'none',
                                overscrollBehaviorX: 'contain',
                                perspective: '1200px'
                            }}
                        >
                            {SERVICE_CATEGORIES.map((cat, i) => (
                                <CategoryCard key={cat.label} cat={cat} isFocused={i === activeIndex} onSelect={() => scrollToIndex(i)} />
                            ))}

                            {/* Final Mega Card */}
                            <CategoryCard
                                cat={{
                                    label: '+100',
                                    color: '#22d3ee',
                                    icon: ArrowRight,
                                    img: '',
                                    specialties: ['Todas las categorías', 'Más servicios', 'Descúbrelo todo'],
                                    isMega: true
                                }}
                                isFocused={SERVICE_CATEGORIES.length === activeIndex}
                                onSelect={() => scrollToIndex(SERVICE_CATEGORIES.length)}
                            />
                        </div>
                    </div>
                </section>

                {/* ── BENEFICIOS PARA NEGOCIOS ── */}
                <section id="negocios" className="pt-16 pb-24 px-6 relative overflow-hidden scroll-mt-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left: Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                                    Para Negocios y Profesionales
                                </span>
                                <h2 className="text-4xl md:text-5xl font-outfit font-black mb-6 leading-tight text-white">
                                    ¿Tienes un <span className="text-gradient">negocio</span> en crecimiento?
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-200 font-medium mb-10 leading-relaxed">
                                    ¡Publícalo GRATIS en la APP de Conexión Servicios!
                                </p>

                                {/* Key Features List (More useful than stats) */}
                                <div className="space-y-6 mb-10">
                                    {[
                                        { icon: Sparkles, text: 'Publicación 100% GRATIS sin contratos.' },
                                        { icon: ShieldCheck, text: 'Cero comisiones: Todo el pago es para ti.' },
                                        { icon: Users, text: 'Conexión directa con clientes sin intermediarios.' },
                                    ].map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                                <item.icon size={20} />
                                            </div>
                                            <p className="text-slate-300 font-bold group-hover:text-white transition-colors">{item.text}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setIsRegistrationModalOpen(true)}
                                    className="group relative px-10 py-5 rounded-2xl bg-emerald-600 font-black text-white hover:bg-emerald-500 transition-all shadow-[0_20px_40px_-15px_rgba(16,185,129,0.5)] active:scale-95 overflow-hidden w-full sm:w-auto">
                                    <span className="relative z-10 flex items-center justify-center gap-3">Registra tu Negocio <ArrowRight size={22} /></span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </button>
                            </motion.div>

                            {/* Right: Creative Staggered Collage */}
                            <div className="relative md:col-span-1 h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center">
                                {/* Decorative Background Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                                
                                <div className="flex gap-4 md:gap-6 w-full h-full justify-center">
                                    {/* Left Column */}
                                    <div className="flex flex-col gap-4 md:gap-6 w-1/2 pt-8 md:pt-16">
                                        {/* Box 1: Visibilidad */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[220px] md:h-[280px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                                        >
                                            <img src="https://images.unsplash.com/photo-1556761175-597219aa3c4d?w=800&q=80" alt="Visibilidad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[#0a0f1c]/60 border border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[#0a0f1c]/80 shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-emerald-400 uppercase">Visibilidad</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-white leading-tight drop-shadow-sm">¡Tu perfil ante miles de clientes!</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Box 3: Impacto */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[280px] md:h-[340px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                                        >
                                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Impacto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[#0a0f1c]/60 border border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[#0a0f1c]/80 shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-emerald-400 uppercase">Impacto</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-white leading-tight drop-shadow-sm">Historias de éxito que inspiran.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="flex flex-col gap-4 md:gap-6 w-1/2 pb-8 md:pb-16">
                                        {/* Box 2: Conexión */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[280px] md:h-[360px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                                        >
                                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Conexión" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[#0a0f1c]/60 border border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[#0a0f1c]/80 shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-blue-400 uppercase">Conexión</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-white leading-tight drop-shadow-sm">Trato directo, resultados inmediatos.</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Box 4: Crecimiento */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[220px] md:h-[260px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                                        >
                                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Crecimiento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[#0a0f1c]/60 border border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[#0a0f1c]/80 shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-blue-400 uppercase">Crecimiento</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-white leading-tight drop-shadow-sm">Escala tu negocio sin límites.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* ── CTA / DESCARGAS (PANTALLA COMPLETA - 3 COLUMNAS) ── */}
                <section id="descargar" className="min-h-[85vh] pt-20 pb-16 flex flex-col items-center justify-center relative overflow-hidden bg-transparent scroll-mt-24">
                    
                    {/* Background Ambient Glows */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="w-full max-w-[1500px] mx-auto relative z-10 px-4 flex flex-col items-center justify-center h-full">
                        
                        {/* TÍTULO FUERA DEL RECUADRO */}
                        <div className="text-center mb-1 lg:mb-2 shrink-0">
                            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] md:text-[13px] font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary mb-1 md:mb-2 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                                DESCÁRGALA AHORA
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-black leading-tight text-white mb-1 md:mb-2">
                                Obtén la <span className="text-gradient drop-shadow-sm">Aplicación</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                                Lleva el directorio de profesionales más completo contigo en todo momento. Disponible gratis para iOS y Android.
                            </p>
                        </div>

                        {/* DESKTOP/MOBILE MOCKUPS DISPLAY */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 w-full h-full lg:h-[500px] mt-0">
                            
                            {/* LEFT COLUMN: ANDROID MOCKUP */}
                            <div className="flex flex-1 justify-center lg:justify-end items-center h-full perspective-[1500px] order-2 lg:order-1">
                                <motion.div 
                                    initial={{ opacity: 0, x: -30, rotateY: 15, rotateZ: -5 }}
                                    whileInView={{ opacity: 1, x: 0, rotateY: 15, rotateZ: -8 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="w-[265px] xl:w-[285px] h-[550px] xl:h-[590px] bg-black border-slate-800 border-[12px] rounded-[2rem] shadow-[0_30px_50px_-15px_rgba(0,0,0,0.8)] z-10 overflow-hidden relative group transform -translate-y-16 lg:-translate-y-32"
                                >
                                    {/* Android Camera Hole */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-900 border-[1px] border-slate-700 shadow-inner z-20"></div>
                                    <img src="/app_shot_ios.jpg" alt="iOS App Screenshot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 origin-top" />
                                </motion.div>
                            </div>

                            {/* CENTER COLUMN: Text, Buttons, Socials */}
                            <div className="flex-[1.5] w-full flex flex-col items-center justify-center text-center z-20 px-4 shrink-0 mt-8 mb-8 lg:mt-0 order-1 lg:order-2 transform -translate-y-0 lg:-translate-y-28">
                                
                                <h3 className="text-3xl xl:text-4xl font-bold text-white mb-8">
                                    Conecta con lo <span className="text-primary drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">Mejor</span>
                                </h3>

                                <div className="flex flex-col sm:flex-row gap-5 mb-10">
                                    <a href="#" className="transform transition-all hover:scale-105 active:scale-95 duration-300 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_10px_40px_rgba(255,255,255,0.1)] bg-black px-1 rounded-xl flex items-center border border-white/5">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                            alt="Disponible en Google Play"
                                            className="h-[50px] xl:h-[54px] w-auto object-contain"
                                        />
                                    </a>
                                    <a href="#" className="transform transition-all hover:scale-105 active:scale-95 duration-300 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_10px_40px_rgba(255,255,255,0.1)]">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                            alt="Descargar en App Store"
                                            className="h-[52px] xl:h-[56px] w-auto"
                                        />
                                    </a>
                                </div>
                                
                                {/* Socials */}
                                <div className="w-full max-w-sm pt-8 border-t border-white/10 flex flex-col items-center gap-4">
                                    <p className="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-widest">Síguenos en nuestras redes</p>
                                    <div className="flex gap-6">
                                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors">
                                            <Instagram size={22} />
                                        </a>
                                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                            <Facebook size={22} />
                                        </a>
                                        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                            <TikTokIcon size={22} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: IOS MOCKUP */}
                            <div className="flex flex-1 justify-center lg:justify-start items-center h-full perspective-[1500px] order-3 lg:order-3">
                                <motion.div 
                                    initial={{ opacity: 0, x: 30, rotateY: -15, rotateZ: 5 }}
                                    whileInView={{ opacity: 1, x: 0, rotateY: -15, rotateZ: 8 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="w-[265px] xl:w-[285px] h-[550px] xl:h-[590px] bg-black border-slate-950 border-[14px] rounded-[3rem] shadow-[0_30px_50px_-15px_rgba(0,0,0,0.8)] z-10 overflow-hidden relative group transform -translate-y-16 lg:-translate-y-32"
                                    style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 30px 60px -15px rgba(0,0,0,1)' }}
                                >
                                    {/* iOS Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20 flex items-center justify-between px-2 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]"></div>
                                    </div>
                                    <img src="/app_shot_android.jpg" alt="Android App Screenshot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 origin-top" />
                                    
                                    {/* Screen Glare Effect */}
                                    <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -rotate-45 pointer-events-none"></div>
                                </motion.div>
                            </div>

                            </div>
                        </div>
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
