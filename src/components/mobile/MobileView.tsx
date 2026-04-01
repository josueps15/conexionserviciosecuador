import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, 
    Home,
    LayoutGrid,
    Building2,
    MessageCircle,
    Menu,
    X,
    Instagram,
    Facebook
} from 'lucide-react';
import { MobileHero } from './MobileHero';
import { MobileCategories } from './MobileCategories';
import { MobileBusinessBenefits } from './MobileBusinessBenefits';
import { MobileFooter } from './MobileFooter';

interface MobileViewProps {
    onOpenModal: () => void;
}

export const MobileView: React.FC<MobileViewProps> = ({ onOpenModal }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);
    const businessRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
        setIsMenuOpen(false);
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col relative overflow-x-hidden">
            {/* Header / Mobile Bar */}
            <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
                <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex justify-between items-center shadow-2xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-1.5 shadow-lg shadow-primary/20">
                            <img src="/logo-cs.png" alt="CS Logo" className="w-full h-full object-contain brightness-110" />
                        </div>
                        <span className="font-outfit font-black text-lg tracking-tight uppercase text-white">
                            Conexión <span className="text-secondary">Servicios</span>
                        </span>
                    </div>
                    
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-white active:scale-90 transition-all font-outfit"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-[#0a0f1c] flex flex-col p-8 pt-24"
                    >
                        {/* Close Button in Overlay */}
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-7 right-7 p-3 rounded-2xl bg-white/5 border border-white/10 text-white"
                        >
                            <X size={28} />
                        </button>

                        <nav className="flex flex-col gap-6">
                            {[
                                { label: 'Inicio', icon: Home, ref: heroRef },
                                { label: 'Servicios', icon: LayoutGrid, ref: categoriesRef },
                                { label: 'Negocios', icon: Building2, ref: businessRef }
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToRef(item.ref)}
                                    className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 text-left active:bg-primary/20 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-xl font-bold font-outfit uppercase tracking-wider">{item.label}</span>
                                </button>
                            ))}
                        </nav>

                        <div className="mt-auto space-y-6">
                            <div className="flex gap-4">
                                <a href="#" className="flex-1 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="flex-1 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400">
                                    <Facebook size={24} />
                                </a>
                            </div>
                            <button 
                                onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
                                className="w-full h-16 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl uppercase tracking-[0.2em] shadow-xl shadow-primary/20"
                            >
                                Registrar Negocio
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Scrollable */}
            <main className="flex-1 pt-20 pb-8 space-y-20">
                <div ref={heroRef}><MobileHero /></div>
                
                <div ref={categoriesRef}><MobileCategories /></div>

                <div ref={businessRef}><MobileBusinessBenefits onOpenModal={onOpenModal} /></div>

                {/* WhatsApp Floating-like CTA for Mobile */}
                <section className="px-6">
                    <a 
                        href="https://wa.me/593979783184?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20Conexión%20Servicios."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 group active:scale-95 transition-all"
                    >
                        <div className="space-y-1">
                            <h3 className="text-lg font-black font-outfit uppercase tracking-tight text-white">¿Necesitas ayuda?</h3>
                            <p className="text-[#25D366] text-xs font-bold uppercase tracking-widest">Escríbenos por WhatsApp</p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                            <MessageCircle size={24} fill="white" stroke="none" />
                        </div>
                    </a>
                </section>

                <MobileFooter />
            </main>

            {/* Bottom App-like Navigation Bar */}
            <nav className="fixed bottom-4 left-4 right-4 h-20 bg-slate-900/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] z-[100] px-8 flex items-center justify-between shadow-2xl shadow-primary/10">
                <button 
                    onClick={() => scrollToRef(heroRef)}
                    className="flex flex-col items-center gap-1.5 text-primary active:scale-90 transition-all"
                >
                    <div className="w-1 h-1 rounded-full bg-primary mb-0.5" />
                    <Home size={22} strokeWidth={2.5} />
                    <span className="text-[9px] font-black uppercase font-outfit tracking-widest">Inicio</span>
                </button>
                <button 
                    onClick={() => scrollToRef(categoriesRef)}
                    className="flex flex-col items-center gap-1.5 text-slate-500 active:scale-90 transition-all hover:text-primary/70"
                >
                    <LayoutGrid size={22} strokeWidth={2.5} />
                    <span className="text-[9px] font-black uppercase font-outfit tracking-widest">Servicios</span>
                </button>
                <button 
                    onClick={() => scrollToRef(businessRef)}
                    className="flex flex-col items-center gap-1.5 text-slate-500 active:scale-90 transition-all hover:text-primary/70"
                >
                    <Building2 size={22} strokeWidth={2.5} />
                    <span className="text-[9px] font-black uppercase font-outfit tracking-widest">Negocios</span>
                </button>
                <button 
                    className="flex flex-col items-center gap-1.5 text-slate-500 active:scale-90 transition-all hover:text-primary/70"
                >
                    <Users size={22} strokeWidth={2.5} />
                    <span className="text-[9px] font-black uppercase font-outfit tracking-widest">Usuarios</span>
                </button>
            </nav>
        </div>
    );
};
