import React, { useRef } from 'react';
import { 
    Users, 
    Home,
    LayoutGrid,
    Building2,
    MessageCircle
} from 'lucide-react';
import { MobileHero } from './MobileHero';
import { MobileCategories } from './MobileCategories';
import { MobileBusinessBenefits } from './MobileBusinessBenefits';
import { MobileFooter } from './MobileFooter';

interface MobileViewProps {
    onOpenModal: () => void;
}

export const MobileView: React.FC<MobileViewProps> = ({ onOpenModal }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);
    const businessRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col relative">
            {/* Header / Mobile Bar */}
            <header className="fixed top-4 left-4 right-4 z-[100]">
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 p-4 rounded-2xl flex justify-between items-center shadow-2xl shadow-primary/10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-1.5 shadow-lg shadow-primary/20">
                            <img src="/logo-cs.png" alt="CS Logo" className="w-full h-full object-contain brightness-110" />
                        </div>
                        <span className="font-outfit font-black text-lg tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-flow drop-shadow-sm">
                            Conexión
                        </span>
                    </div>
                </div>
            </header>

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
