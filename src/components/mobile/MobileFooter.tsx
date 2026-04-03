import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface MobileFooterProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const MobileFooter = ({ theme, toggleTheme }: MobileFooterProps) => {
    const SOCIAL_LINKS = {
        facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
        instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
        tiktok: 'https://www.tiktok.com/@conexinservicios1',
    };

    // TikTok SVG Icon
    const TikTokIcon = ({ size = 20 }: { size?: number }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.53V6.84a4.85 4.85 0 0 1-1.02-.15z" />
        </svg>
    );

    return (
        <footer className="px-6 pt-16 pb-32 space-y-12 bg-[var(--footer-bg)] text-[var(--footer-text)] transition-colors duration-500 border-t border-[var(--card-border)] mt-12 rounded-t-[3rem]">
            <div className="pt-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <img src="/logo-cs.png" alt="CS Logo" className="h-8 w-auto" />
                    <span className="font-outfit font-bold text-xl tracking-tight text-[var(--app-text)] transition-colors duration-500">
                        Conexión <span className="text-[var(--primary)]">Servicios</span>
                    </span>
                </div>
                <p className="text-[var(--app-text-muted)] text-sm leading-relaxed mx-auto max-w-[280px] transition-colors duration-500 font-medium italic mb-6">
                    "Conectamos tus necesidades con los mejores profesionales verificados de Ecuador."
                </p>
                <div className="flex gap-4">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-pink-500 active:scale-90 transition-all font-outfit shadow-sm">
                        <Instagram size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-blue-600 active:scale-90 transition-all font-outfit shadow-sm">
                        <Facebook size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] hover:text-[var(--primary)] active:scale-90 transition-all font-outfit shadow-sm">
                        <TikTokIcon size={19} />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                    <h4 className="font-bold font-outfit text-base text-[var(--app-text)] tracking-tight">Plataforma</h4>
                    <ul className="space-y-3 text-[var(--app-text-muted)] font-medium">
                        <li><a href="#inicio" className="hover:text-[var(--primary)] transition-colors">Inicio</a></li>
                        <li><a href="#usuarios" className="hover:text-[var(--primary)] transition-colors">Servicios</a></li>
                        <li><a href="#negocios" className="hover:text-[var(--primary)] transition-colors">Negocios</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold font-outfit text-base text-[var(--app-text)] tracking-tight">Legal</h4>
                    <ul className="space-y-3 text-[var(--app-text-muted)] font-medium transition-colors duration-500">
                        <li><a href="#" className="hover:text-[var(--primary)] transition-all">Términos</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)] transition-all">Privacidad</a></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6 pt-4">
                <h4 className="font-bold font-outfit text-base text-[var(--app-text)] tracking-tight">Contacto</h4>
                <div className="flex items-center gap-3 text-[var(--app-text-muted)] text-sm font-medium transition-colors duration-500">
                    <MapPin size={18} className="text-[var(--primary)]" />
                    <span>Quito, Ecuador</span>
                </div>
                <a href="mailto:conexionserviciosec@gmail.com" className="flex items-center gap-3 text-[var(--app-text-muted)] text-sm font-medium transition-colors duration-500">
                    <Mail size={18} className="text-[var(--primary)]" />
                    <span className="truncate">conexionserviciosec@gmail.com</span>
                </a>
            </div>

            <div className="pt-8 text-center space-y-6">
                <div className="flex justify-center">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] opacity-60 font-black transition-colors duration-500">
                    © 2026 CONEXIÓN SERVICIOS.
                </p>
            </div>
        </footer>
    );
};
