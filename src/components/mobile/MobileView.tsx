import { useRef, useState, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    LayoutGrid,
    Building2,
    Download,
    X,
    Menu,
    Instagram,
    Facebook,
    Info,
    MessageCircle
} from 'lucide-react';
import { MobileHero } from './MobileHero';
import { MobileCategories } from './MobileCategories';
import { MobileBusinessBenefits } from './MobileBusinessBenefits';
import { DownloadApp } from '../DownloadApp';
import { MobileFooter } from './MobileFooter';
import { RegistrationModal } from '../RegistrationModal';
import { AboutUsModal } from '../AboutUsModal';
import { ThemeToggle } from '../ThemeToggle';

interface MobileViewProps {
    onOpenModal: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
    instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
    tiktok: 'https://www.tiktok.com/@conexinservicios1',
};

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.53V6.84a4.85 4.85 0 0 1-1.02-.15z" />
    </svg>
);

export const MobileView = ({ theme, toggleTheme }: MobileViewProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

    const heroRef = useRef<HTMLDivElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);
    const businessRef = useRef<HTMLDivElement>(null);
    const downloadRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: RefObject<HTMLDivElement | null>) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const NAV_ITEMS = [
        { label: 'Inicio', icon: Home, ref: heroRef, color: 'text-cyan-500' },
        { label: 'Servicios', icon: LayoutGrid, ref: categoriesRef, color: 'text-orange-500' },
        { label: 'Negocios', icon: Building2, ref: businessRef, color: 'text-purple-500' },
        { label: 'Descarga', icon: Download, ref: downloadRef, color: 'text-emerald-500' },
    ];

    return (
        <div className="min-h-[100dvh] bg-[var(--app-bg)] text-[var(--app-text)] flex flex-col relative overflow-x-hidden transition-colors duration-500">

            {/* ─── Fixed Header ─── */}
            <header className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4 pb-2">
                <div className="bg-[var(--nav-bg)] backdrop-blur-xl border border-black/5 dark:border-white/10 px-4 py-3 rounded-2xl flex justify-between items-center shadow-xl">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <img src="/logo-cs.png" alt="CS Logo" className="h-8 w-auto" />
                        <span className="font-outfit font-black text-base tracking-tight uppercase text-[var(--app-text)]">
                            Conexión <span className="text-[var(--primary)]">Servicios</span>
                        </span>
                    </div>

                    {/* Right: theme toggle + hamburger */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} isCircular />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[var(--app-text)] active:scale-90 transition-all"
                            aria-label="Menú"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* ─── Full-Screen Hamburger Menu ─── */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                        className="fixed inset-0 z-[110] bg-[var(--app-bg)] flex flex-col overflow-y-auto"
                        style={{ paddingTop: 'env(safe-area-inset-top)' }}
                    >
                        {/* Glow bg */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-0 w-[60%] h-[40%] bg-cyan-400/10 blur-[100px] rounded-full" />
                            <div className="absolute bottom-0 right-0 w-[50%] h-[40%] bg-orange-400/8 blur-[100px] rounded-full" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full px-6 pt-6 pb-10">
                            {/* Close + Logo Row */}
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-2.5">
                                    <img src="/logo-cs.png" alt="CS Logo" className="h-9 w-auto" />
                                    <span className="font-outfit font-black text-lg tracking-tight uppercase text-[var(--app-text)]">
                                        Conexión <span className="text-[var(--primary)]">Servicios</span>
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[var(--app-text)] active:scale-90 transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Nav Items */}
                            <nav className="flex flex-col gap-3 mb-8">
                                {NAV_ITEMS.map((item, i) => (
                                    <motion.button
                                        key={item.label}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        onClick={() => scrollToRef(item.ref)}
                                        className="flex items-center gap-4 p-5 rounded-3xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-left active:scale-[0.97] transition-all"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center ${item.color}`}>
                                            <item.icon size={22} />
                                        </div>
                                        <span className="text-xl font-black font-outfit uppercase tracking-wider text-[var(--app-text)]">{item.label}</span>
                                    </motion.button>
                                ))}

                                {/* Nosotros */}
                                <motion.button
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.24 }}
                                    onClick={() => { setIsMenuOpen(false); setIsAboutUsOpen(true); }}
                                    className="flex items-center gap-4 p-5 rounded-3xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] text-left active:scale-[0.97] transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-blue-500">
                                        <Info size={22} />
                                    </div>
                                    <span className="text-xl font-black font-outfit uppercase tracking-wider text-[var(--app-text)]">Nosotros</span>
                                </motion.button>
                            </nav>

                            {/* Social Links */}
                            <div className="flex gap-3 mb-5">
                                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 h-14 rounded-2xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] active:scale-95 transition-all hover:text-pink-500">
                                    <Instagram size={24} />
                                </a>
                                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 h-14 rounded-2xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] active:scale-95 transition-all hover:text-blue-600">
                                    <Facebook size={24} />
                                </a>
                                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 h-14 rounded-2xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] active:scale-95 transition-all hover:text-[var(--primary)]">
                                    <TikTokIcon size={22} />
                                </a>
                            </div>

                            {/* CTA: Registrar Negocio */}
                            <div className="pt-2 pb-2">
                                <button
                                    onClick={() => { setIsMenuOpen(false); setIsRegistrationOpen(true); }}
                                    className="w-full py-5 px-6 bg-gradient-to-r from-[var(--primary)] to-cyan-500 text-white font-black rounded-2xl uppercase tracking-[0.12em] shadow-2xl shadow-[var(--primary)]/30 active:scale-95 transition-all text-base flex items-center justify-center gap-3"
                                >
                                    <Building2 size={20} />
                                    Registrar mi Negocio
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── Main Content ─── */}
            <main className="flex-1 pt-[72px] pb-8 space-y-0">
                <div ref={heroRef}><MobileHero /></div>

                <div ref={categoriesRef}><MobileCategories /></div>

                <div ref={businessRef}><MobileBusinessBenefits onOpenModal={() => setIsRegistrationOpen(true)} /></div>

                <div ref={downloadRef}><DownloadApp /></div>

                {/* WhatsApp CTA */}
                <div className="px-4 pb-4">
                    <a
                        href="https://wa.me/593979783184?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20Conexión%20Servicios."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 active:scale-95 transition-all"
                    >
                        <div className="space-y-1">
                            <h3 className="text-base font-black font-outfit uppercase tracking-tight text-[var(--app-text)]">¿Necesitas ayuda?</h3>
                            <p className="text-[#25D366] text-xs font-bold uppercase tracking-widest">Escríbenos por WhatsApp</p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                            <MessageCircle size={22} fill="white" stroke="none" />
                        </div>
                    </a>
                </div>

                <MobileFooter
                    theme={theme}
                    toggleTheme={toggleTheme}
                    onOpenAboutUs={() => setIsAboutUsOpen(true)}
                    onOpenRegistration={() => setIsRegistrationOpen(true)}
                />
            </main>

            {/* Modals */}
            <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
            <AboutUsModal isOpen={isAboutUsOpen} onClose={() => setIsAboutUsOpen(false)} />
        </div>
    );
};
