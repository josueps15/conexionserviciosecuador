import { Instagram, Facebook, Mail, Globe } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface MobileFooterProps {
    theme?: 'light' | 'dark';
    toggleTheme?: () => void;
}

export const MobileFooter: React.FC<MobileFooterProps> = ({ theme, toggleTheme }) => {
    const SOCIAL_LINKS = {
        facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
        instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
        tiktok: 'https://www.tiktok.com/@conexinservicios1',
    };

    return (
        <footer className="px-6 pt-16 pb-32 space-y-12 border-t border-black/5 dark:border-white/5 bg-[var(--footer-bg)] text-[var(--footer-text)] transition-colors duration-500">
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-2 shadow-lg shadow-primary/20">
                        <img src="/logo-cs.png" alt="CS Logo" className="w-full h-full object-contain brightness-110" />
                    </div>
                    <span className="font-outfit font-black text-xl tracking-tight uppercase text-[var(--app-text)] transition-colors duration-500">
                        Conexión <span className="text-secondary">Servicios</span>
                    </span>
                </div>
                <p className="text-[var(--app-text-muted)] text-sm leading-relaxed max-w-[280px] transition-colors duration-500 font-medium">
                    Redefiniendo los servicios profesionales en Ecuador. La plataforma que conecta expertos con quienes los necesitan.
                </p>
                <div className="flex gap-4">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[var(--app-text-muted)] active:bg-pink-500 active:text-white transition-all">
                        <Instagram size={22} />
                    </a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[var(--app-text-muted)] active:bg-blue-600 active:text-white transition-all">
                        <Facebook size={22} />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                    <h4 className="font-black font-outfit uppercase tracking-widest text-[11px] text-[var(--app-text)] opacity-70 transition-colors duration-500">Explora</h4>
                    <ul className="space-y-3 text-[var(--app-text-muted)] font-bold transition-colors duration-500">
                        <li><a href="#inicio" className="hover:text-primary transition-colors font-outfit">Inicio</a></li>
                        <li><a href="#usuarios" className="hover:text-primary transition-colors font-outfit">Servicios</a></li>
                        <li><a href="#negocios" className="hover:text-primary transition-colors font-outfit">Negocios</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-black font-outfit uppercase tracking-widest text-[11px] text-[var(--app-text)] opacity-70 transition-colors duration-500">Legal</h4>
                    <ul className="space-y-3 text-[var(--app-text-muted)] font-bold transition-colors duration-500">
                        <li><a href="#" className="hover:text-primary transition-all">Términos</a></li>
                        <li><a href="#" className="hover:text-primary transition-all">Privacidad</a></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6 pt-4">
                <h4 className="font-black font-outfit uppercase tracking-widest text-[11px] text-[var(--app-text)] opacity-70 transition-colors duration-500">Ubicación</h4>
                <div className="flex items-center gap-3 text-[var(--app-text-muted)] text-sm font-bold transition-colors duration-500">
                    <Globe size={18} className="text-secondary" />
                    <span>Quito, Ecuador</span>
                </div>
                <a href="mailto:conexionserviciosec@gmail.com" className="flex items-center gap-3 text-[var(--app-text-muted)] text-sm font-bold transition-colors duration-500">
                    <Mail size={18} className="text-secondary" />
                    <span className="truncate">conexionserviciosec@gmail.com</span>
                </a>
            </div>

            <div className="pt-8 text-center space-y-6">
                {theme && toggleTheme && (
                    <div className="flex justify-center pb-4">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                )}
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] opacity-60 font-black transition-colors duration-500">
                    © 2026 CONEXIÓN SERVICIOS.
                </p>
            </div>
        </footer>
    );
};
