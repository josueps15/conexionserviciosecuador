import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck, 
    Users, Globe, Mail, MessageCircle,
    Instagram, Facebook, Download, ArrowRight,
    Car, Home, Scissors,
    Sparkles, Shirt, Truck,
    Building2, GraduationCap,
    HeartPulse, Crown, WashingMachine,
    Dumbbell, UtensilsCrossed, Plane, Cpu
} from 'lucide-react';

import logoCS from './assets/logo-cs.png';
import { InteractiveHoverButton } from './components/ui/InteractiveHoverButton';
import { InteractiveGridPattern } from './components/ui/InteractiveGridPattern';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { RegistrationModal } from './components/RegistrationModal';
import { cn } from './lib/utils';
import { useMediaQuery } from './hooks/useMediaQuery';
import { ThemeToggle } from './components/ThemeToggle';
import { MobileView } from './components/mobile/MobileView';

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
            initial={false}
            animate={{ 
                scale: isFocused ? 1.08 : 0.96,
                zIndex: isFocused ? 20 : 1,
                filter: isFocused ? "brightness(1) contrast(1.05)" : "brightness(0.6) contrast(1)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="min-w-[72vw] md:min-w-[29vw] snap-center flex-shrink-0 py-8"
        >
            <motion.div
                animate={{
                    boxShadow: isFocused 
                        ? `0 40px 100px -20px rgba(0,0,0,0.8), 0 0 50px -10px ${cat.color}40` 
                        : "0 20px 40px -12px rgba(0,0,0,0.4)"
                }}
                className={cn(
                    "group relative h-[400px] md:h-[420px] rounded-[3rem] overflow-hidden border cursor-pointer bg-[var(--card-bg)] transition-all duration-700",
                    cat.isMega && "bg-white/5 border-dashed border-2 border-white/20 dark:bg-white/5",
                    isFocused ? "border-primary/50 dark:border-white/30" : "border-[var(--card-border)]"
                )}
            >
                {cat.isMega ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center overflow-hidden">
                        <MegaCardCollage />
                        <div className="absolute inset-0 bg-slate-950/80 group-hover:bg-slate-950/60 transition-colors duration-700 z-[1]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-[2]" />
                        
                        <motion.div 
                            animate={{ scale: isFocused ? 1.15 : 1 }}
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
                                <motion.img 
                                    src={cat.img} 
                                    alt={cat.label} 
                                    animate={{ scale: isFocused ? 1.1 : 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-all duration-700",
                                isFocused ? "opacity-30" : "opacity-80"
                            )} />
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br transition-all duration-700",
                                isFocused ? "opacity-20" : "opacity-40"
                            )}
                                 style={{ backgroundImage: `linear-gradient(to bottom right, ${cat.color}, transparent)` }} />
                        </div>

                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                            <div className="flex items-center gap-5 mb-5">
                                <motion.div 
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-3xl border border-white/30"
                                    style={{ background: `${cat.color}40` }}
                                    animate={{ 
                                        scale: isFocused ? 1.2 : 1,
                                        boxShadow: isFocused ? `0 0 25px ${cat.color}80` : "none"
                                    }}
                                >
                                    <cat.icon size={30} style={{ color: cat.color }} />
                                </motion.div>
                                <h3 className="text-2xl lg:text-3xl font-black text-white dark:text-white drop-shadow-lg leading-tight">{cat.label}</h3>
                            </div>

                            <div className={cn(
                                "space-y-2 mb-6 transition-all duration-700 transform",
                                isFocused ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}>
                                {cat.specialties.slice(0, 3).map((spec: string) => (
                                    <div key={spec} className="flex items-center gap-3 text-white/90 text-sm font-semibold">
                                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: cat.color }} />
                                        <span className="truncate drop-shadow-md">{spec}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <a 
                                href="#descargar"
                                onClick={(e) => {
                                    if (isFocused) e.stopPropagation();
                                }}
                                className={cn(
                                    "mt-2 flex items-center gap-3 transition-all duration-500 font-bold uppercase tracking-widest group/link",
                                    isFocused ? "text-primary text-[12px] opacity-100" : "text-white/40 text-[10px] opacity-50"
                                )}
                            >
                                <span className="relative">
                                    Ver Profesionales
                                    {isFocused && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50" />}
                                </span>
                                <ArrowRight size={isFocused ? 20 : 16} className={cn(isFocused && "animate-pulse")} />
                            </a>
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};

const App: React.FC = () => {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    
    // Mobile Detection
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    // ─── HANDLERS ────────────────────────────────────────────────────────────
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');


    const scrollToIndex = (i: number) => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const cards = Array.from(container.children);
        const targetCard = cards[i] as HTMLElement;
        if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            setActiveIndex(i);
        }
    };

    const handleCarouselScroll = () => {
        if (!carouselRef.current) return;
        requestAnimationFrame(() => {
            const container = carouselRef.current;
            if (!container) return;
            const cards = Array.from(container.children);
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            let closestIndex = activeIndex;
            let minDistance = Infinity;
            
            cards.forEach((card, i) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(containerCenter - cardCenter);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = i;
                }
            });
            
            if (closestIndex !== activeIndex) {
                setActiveIndex(closestIndex);
            }
        });
    };


    if (!isDesktop) {
        return (
            <div className="font-outfit">
                <MobileView 
                    onOpenModal={() => setIsRegistrationModalOpen(true)} 
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <RegistrationModal
                    isOpen={isRegistrationModalOpen}
                    onClose={() => setIsRegistrationModalOpen(false)}
                />
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[var(--app-bg)] font-inter text-[var(--app-text)] selection:bg-primary/30 overflow-x-hidden transition-colors duration-500">

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
            <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.a href="#" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 sm:gap-3 font-outfit font-extrabold text-xl sm:text-2xl tracking-tight relative z-50 text-[var(--app-text)]">
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
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-[var(--app-text-muted)]">
                        {[['Inicio', '#inicio'], ['Usuarios', '#usuarios'], ['Negocios', '#negocios'], ['Contacto', '#contacto']].map(([label, href]) => (
                            <a key={label} href={href} className="hover:text-[var(--app-text)] transition-colors relative group text-sm font-semibold">
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <div className="flex items-center gap-2">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-black/15 dark:border-white/10 bg-black/10 dark:bg-white/5 flex items-center justify-center text-[var(--app-text-muted)] hover:text-pink-500 hover:border-pink-500/30 transition-all font-bold" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-black/15 dark:border-white/10 bg-black/10 dark:bg-white/5 flex items-center justify-center text-[var(--app-text-muted)] hover:text-blue-500 hover:border-blue-500/30 transition-all font-bold" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-black/15 dark:border-white/10 bg-black/10 dark:bg-white/5 flex items-center justify-center text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:border-black/30 dark:hover:border-white/30 transition-all font-bold" aria-label="TikTok">
                                <TikTokIcon size={15} />
                            </a>
                            <a href="#descargar">
                                <InteractiveHoverButton 
                                    text="Descargar App" 
                                    className="bg-black/10 dark:bg-white/5 border-black/20 dark:border-white/10 text-[var(--app-text)] dark:text-white text-sm font-bold shadow-sm" 
                                />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {/* ── HERO ── */}
                <section id="inicio" className="relative min-h-screen flex items-center pt-10 pb-10">
                    {/* Floating Side Images Collage */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 lg:z-10 overflow-visible">
                        {/* Left Side Collage */}
                        {/* Plomero (Outer Top) */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 0.5, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-[12%] left-[3%] w-44 h-56 lg:w-52 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[2px] border-sky-500/30 shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-500 -rotate-6 z-10 pointer-events-auto group overflow-hidden scale-[0.42] sm:scale-75 lg:scale-[0.90] origin-top-left"
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
                            className="absolute top-[12%] right-[3%] w-44 h-56 lg:w-52 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[2px] border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all duration-500 rotate-6 z-10 pointer-events-auto group overflow-hidden scale-[0.42] sm:scale-75 lg:scale-[0.90] origin-top-right"
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
                                NUEVA PLATAFORMA DIGITAL
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-8 leading-[1.15] tracking-tight text-[var(--app-text)]">
                                ¿Buscas un Mecánico, <br className="hidden sm:block" />
                                un Electricista, <span className="whitespace-nowrap">una Grúa</span> <br className="hidden sm:block" />
                                o un <span className="text-gradient pb-1 pr-1">Centro Educativo</span>?
                            </h1>
                            <p className="text-xl md:text-2xl text-[var(--app-text-muted)] mb-12 max-w-2xl leading-relaxed font-medium">
                                En la <strong className="text-[var(--app-text)]">APP Conexión Servicios</strong> encontrarás los mejores servicios profesionales.
                            </p>
                            <div className="flex flex-wrap justify-center gap-5">
                                <a href="#descargar" className="group relative px-8 py-4 rounded-2xl bg-blue-600 font-bold text-white flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95 overflow-hidden w-full sm:w-auto">
                                    <span className="relative z-10 font-outfit text-white">Descargar la App</span>
                                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="relative z-10">
                                        <Download size={20} className="text-blue-100" />
                                    </motion.span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </a>
                                <a href="#usuarios" className="px-8 py-4 rounded-2xl border border-black/5 dark:border-white/5 bg-[var(--card-bg)] font-bold text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:bg-[var(--footer-bg)] transition-all backdrop-blur-md font-outfit flex items-center justify-center gap-2 w-full sm:w-auto">
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
                                        <p className="text-3xl md:text-4xl font-outfit font-black text-[var(--app-text)]">{s.value}</p>
                                        <p className="text-xs md:text-sm text-[var(--app-text-muted)] mt-1">{s.label}</p>
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
                            <span className="inline-block px-4 py-1 rounded-full text-[13px] font-black tracking-widest uppercase bg-violet-500/10 border border-violet-500/30 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-2 transition-colors duration-500">
                                Para Usuarios
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-black text-[var(--app-text)] mb-3 leading-tight max-w-[280px] sm:max-w-none mx-auto transition-colors duration-500">
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
                                    className="text-[var(--app-text-muted)] mx-auto text-base md:text-xl font-bold italic h-8 whitespace-nowrap opacity-80"
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
                                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                                className={cn(
                                    "absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-950/60 border border-white/10 flex items-center justify-center text-white z-40 transition-all hover:bg-primary/30 backdrop-blur-md shadow-2xl",
                                    activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}
                                aria-label="Anterior"
                            >
                                <ArrowRight size={30} className="rotate-180" />
                            </button>
                            <button 
                                onClick={() => scrollToIndex(Math.min(SERVICE_CATEGORIES.length, activeIndex + 1))}
                                className={cn(
                                    "absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-950/60 border border-white/10 flex items-center justify-center text-white z-40 transition-all hover:bg-primary/30 backdrop-blur-md shadow-2xl",
                                    activeIndex === SERVICE_CATEGORIES.length ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}
                                aria-label="Siguiente"
                            >
                                <ArrowRight size={30} />
                            </button>
                        </div>

                        <div 
                            id="category-scroll-v3"
                            ref={carouselRef}
                            onScroll={handleCarouselScroll}
                            className="flex gap-6 md:gap-10 overflow-x-auto overflow-y-visible pb-16 pt-4 px-[10vw] md:px-[36vw] scrollbar-none snap-x snap-mandatory scroll-smooth items-center h-[580px] relative"
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
                                <span className="inline-block px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-6">
                                    Para Negocios y Profesionales
                                </span>
                                <h2 className="text-4xl md:text-5xl font-outfit font-black mb-6 leading-tight text-[var(--app-text)] transition-colors duration-500">
                                    ¿Tienes un <span className="text-gradient">negocio</span> en crecimiento?
                                </h2>
                                <p className="text-xl md:text-2xl text-[var(--app-text-muted)] font-medium mb-10 leading-relaxed transition-colors duration-500">
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
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                                <item.icon size={20} />
                                            </div>
                                            <p className="text-[var(--app-text-muted)] group-hover:text-[var(--app-text)] font-bold transition-colors duration-500">{item.text}</p>
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
                                            className="relative h-[220px] md:h-[280px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl group cursor-pointer transition-colors duration-500"
                                        >
                                            <img src="/beneficio_visibilidad.png" alt="Visibilidad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[var(--app-bg-elevated)] border border-black/5 dark:border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[var(--app-bg)] shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase transition-colors duration-500">Visibilidad</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-[var(--app-text)] leading-tight drop-shadow-sm transition-colors duration-500">¡Tu perfil ante miles de clientes!</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Box 3: Impacto */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[280px] md:h-[340px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl group cursor-pointer transition-colors duration-500"
                                        >
                                            <img src="/beneficio_clientes.png" alt="Más Clientes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[var(--app-bg-elevated)] border border-black/5 dark:border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[var(--app-bg)] shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                                                    <p className="text-[11px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase transition-colors duration-500">Más Clientes</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-[var(--app-text)] leading-tight drop-shadow-sm transition-colors duration-500">Llega a miles de clientes nuevos cada día.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="flex flex-col gap-4 md:gap-6 w-1/2 pb-8 md:pb-16">
                                        {/* Box 2: Conexión */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[280px] md:h-[360px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl group cursor-pointer transition-colors duration-500"
                                        >
                                            <img src="/beneficio_conexion.png" alt="Conexión" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[var(--app-bg-elevated)] border border-black/5 dark:border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[var(--app-bg)] shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase transition-colors duration-500">Conexión</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-[var(--app-text)] leading-tight drop-shadow-sm transition-colors duration-500">Trato directo, resultados inmediatos.</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Box 4: Crecimiento */}
                                        <motion.div 
                                            whileHover={{ scale: 1.02, zIndex: 20 }}
                                            className="relative h-[220px] md:h-[260px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl group cursor-pointer transition-colors duration-500"
                                        >
                                            <img src="/beneficio_crecimiento.png" alt="Crecimiento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                                <div className="backdrop-blur-md bg-[var(--app-bg-elevated)] border border-black/5 dark:border-white/10 rounded-[1.5rem] p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-[var(--app-bg)] shadow-2xl">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                                                        <p className="text-[11px] font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase transition-colors duration-500">Crecimiento</p>
                                                    </div>
                                                    <p className="text-sm md:text-base font-bold text-[var(--app-text)] leading-tight drop-shadow-sm transition-colors duration-500">Escala tu negocio sin límites.</p>
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
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-black leading-tight text-[var(--app-text)] mb-1 md:mb-2 transition-colors duration-500">
                                Obtén la <span className="text-gradient drop-shadow-sm">Aplicación</span>
                            </h2>
                            <p className="text-lg md:text-xl text-[var(--app-text-muted)] font-medium max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
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
                                
                            <h3 className="text-3xl xl:text-4xl font-bold text-[var(--app-text)] mb-8 transition-colors duration-500">
                                Conecta con lo <span className="text-primary drop-shadow-[0_0_10px_rgba(14,165,233,0.3)] dark:drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">Mejor</span>
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
                                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--app-text-muted)] hover:text-pink-500 transition-colors">
                                            <Instagram size={22} />
                                        </a>
                                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-[var(--app-text-muted)] hover:text-blue-500 transition-colors">
                                            <Facebook size={22} />
                                        </a>
                                        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-[var(--app-text-muted)] hover:text-[var(--app-text)] transition-colors">
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
            <footer id="contacto" className="bg-[var(--footer-bg)] border-t border-black/5 dark:border-white/10 pt-16 pb-12 transition-colors duration-500 text-[var(--footer-text)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1 space-y-6">
                            <div className="flex items-center gap-3 font-outfit font-black text-2xl tracking-tighter text-[var(--app-text)]">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-2 shadow-lg shadow-primary/20 flex items-center justify-center">
                                    <img src={logoCS} alt="CS Logo" className="w-full h-full object-contain brightness-110" />
                                </div>
                                <span>Conexión <span className="text-secondary">Servicios</span></span>
                            </div>
                            <p className="text-[var(--app-text-muted)] text-sm leading-relaxed max-w-xs font-medium">
                                La plataforma líder en Ecuador para encontrar servicios profesionales verificados y de alta calidad. Conectamos expertos con soluciones reales.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" 
                                   className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[var(--app-text-muted)] hover:text-pink-500 hover:border-pink-500/30 transition-all active:scale-90" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[var(--app-text-muted)] hover:text-blue-500 hover:border-blue-500/30 transition-all active:scale-90" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:border-black/30 dark:hover:border-white/30 transition-all active:scale-90" aria-label="TikTok">
                                    <TikTokIcon size={18} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-outfit font-bold text-lg mb-6 uppercase tracking-widest text-[var(--app-text)]">Plataforma</h4>
                            <ul className="space-y-4 text-[var(--app-text-muted)] text-sm font-semibold">
                                <li><a href="#inicio" className="hover:text-primary transition-all">Inicio</a></li>
                                <li><a href="#usuarios" className="hover:text-primary transition-all">Para Usuarios</a></li>
                                <li><a href="#negocios" className="hover:text-primary transition-all">Para Negocios</a></li>
                                <li><a href="#descargar" className="hover:text-primary transition-all">Descargar App</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-outfit font-bold text-lg mb-6 uppercase tracking-widest text-[var(--app-text)]">Contacto</h4>
                            <ul className="space-y-4 text-[var(--app-text-muted)] text-sm font-semibold">
                                <li className="flex items-center gap-3">
                                    <Globe size={18} className="text-secondary" />
                                    <span>Ecuador</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={18} className="text-secondary" />
                                    <a href="mailto:conexionserviciosec@gmail.com" className="hover:text-primary transition-all truncate">conexionserviciosec@gmail.com</a>
                                </li>
                                <li className="pt-2">
                                    <a
                                        href="https://wa.me/593979783184?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20Conexión%20Servicios."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-xl shadow-lg shadow-[#25D366]/20 font-bold hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95"
                                    >
                                        <MessageCircle size={18} fill="white" stroke="none" />
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-outfit font-bold text-lg mb-6 uppercase tracking-widest text-[var(--app-text)]">Descargar App</h4>
                            <div className="space-y-4">
                                <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black dark:bg-white/5 border border-white/10 hover:bg-zinc-900 transition-all group w-full lg:w-fit">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.523 15.3414c-.0661.1641-.1652.3218-.2898.4616-.5409.6053-1.071 1.2582-1.8491 1.7482-.6015.38-1.5714.8872-2.585.8872-1.1274 0-1.521-.7367-2.7303-.7367-1.229 0-1.6373.7142-2.7147.7142-.99 0-2.0396-.5492-2.723-.9845-1.4244-.9066-2.5936-2.7247-2.5936-4.524 0-2.7827 1.8028-4.2494 3.5133-4.2494.91 0 1.7616.634 2.3023.634.524 0 1.4883-.694 2.5028-.694 1.107 0 2.2282.5293 2.9463 1.3414-1.396.8415-1.165 2.7663.021 3.4019zm-4.708-8.835c-.114-1.2057 1.0264-2.28 2.1934-2.31 0 0 .211 1.35-.916 2.4-1.135 1.05-1.2774-.09-1.2774-.09z" /></svg>
                                    </div>
                                    <div className="flex flex-col text-white">
                                        <span className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on</span>
                                        <span className="text-sm font-bold">App Store</span>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black dark:bg-white/5 border border-white/10 hover:bg-zinc-900 transition-all group w-full lg:w-fit">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M3.609 1.814l12.441 7.15c.677.389 1.127 1.096 1.127 1.87 0 .773-.45 1.481-1.127 1.87L3.609 19.854c-.672.386-1.503.383-2.172-.01-.669-.392-1.077-1.092-1.077-1.861V3.684c0-.769.408-1.469 1.077-1.861.669-.393 1.5-.396 2.172-.009zM.364 2.8c.002 0 .002.001.002.002v15.933c0 .002-.002.003-.004.002-.012-.007-.024-.015-.035-.024l8.361-8.361-8.324-8.324h.364zM.918 2.164c.001 0 .002-.001.003-.001.123 0 .248.032.361.097l12.33 7.086c.012.007.012.023 0 .03L.918 16.51c.01 0-.012.015-.022.015-.001 0-.002.001-.004.001h-.001c-.126 0-.251-.035-.363-.102l8.324-8.324-8.361-8.361c.112-.067.237-.101.363-.101.022 0 .044.004.064.011zm.006 17.51c-.001 0-.001-.001-.002-.002V3.739c0-.001.001-.002.004-.002.009.006.018.013.028.021l8.361 8.361-8.361 8.361c-.01-.008-.02-.016-.03-.022v-.023z" /></svg>
                                    </div>
                                    <div className="flex flex-col text-white">
                                        <span className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</span>
                                        <span className="text-sm font-bold">Google Play</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col items-center md:items-start gap-2">
                             <p className="text-[var(--app-text-muted)] text-[10px] uppercase tracking-[0.3em] font-black opacity-60">
                                © 2026 CONEXIÓN SERVICIOS. TODOS LOS DERECHOS RESERVADOS.
                            </p>
                            <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black text-[var(--app-text-muted)] opacity-50">
                                <a href="#" className="hover:text-primary transition-all">Términos y Condiciones</a>
                                <a href="#" className="hover:text-primary transition-all">Política de Privacidad</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                            <div className="flex items-center gap-3 pb-1">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--app-text-muted)] opacity-70">Sistema Operativo</span>
                            </div>
                        </div>
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
