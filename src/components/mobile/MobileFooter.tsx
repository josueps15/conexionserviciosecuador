import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface MobileFooterProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onOpenAboutUs: () => void;
    onOpenRegistration: () => void;
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

export const MobileFooter = ({ theme, toggleTheme, onOpenAboutUs, onOpenRegistration }: MobileFooterProps) => {
    return (
        <footer className="px-5 pt-14 pb-10 space-y-10 bg-[var(--app-bg-soft)] text-[var(--app-text)] transition-colors duration-500 border-t border-[var(--card-border)] rounded-t-[3rem]">

            {/* Logo & Tagline */}
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2.5">
                    <img src="/logo-cs.png" alt="CS Logo" className="h-9 w-auto" />
                    <span className="font-outfit font-black text-xl tracking-tight uppercase text-[var(--app-text)]">
                        Conexión <span className="text-[var(--primary)]">Servicios</span>
                    </span>
                </div>
                <p className="text-[var(--app-text-muted)] text-sm leading-relaxed max-w-[280px] mx-auto font-medium italic">
                    "La plataforma líder para conectar profesionales con usuarios en todo el territorio ecuatoriano."
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-2">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] active:scale-90 transition-all hover:text-pink-500 shadow-sm">
                        <Instagram size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] active:scale-90 transition-all hover:text-blue-600 shadow-sm">
                        <Facebook size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--app-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--app-text-muted)] active:scale-90 transition-all hover:text-[var(--primary)] shadow-sm">
                        <TikTokIcon size={19} />
                    </a>
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-8 text-sm">
                {/* Compañía */}
                <div className="space-y-4">
                    <h4 className="font-black font-outfit text-xs uppercase tracking-[0.2em] text-[var(--app-text)]">Compañía</h4>
                    <ul className="space-y-3 text-[var(--app-text-muted)] font-bold">
                        <li>
                            <button
                                onClick={onOpenAboutUs}
                                className="hover:text-[var(--primary)] transition-colors text-left active:scale-95"
                            >
                                Nosotros
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hover:text-[var(--primary)] transition-colors text-left active:scale-95"
                            >
                                Categorías
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={onOpenRegistration}
                                className="hover:text-[var(--primary)] transition-colors text-left active:scale-95"
                            >
                                Registro de Negocios
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Contacto */}
                <div className="space-y-4">
                    <h4 className="font-black font-outfit text-xs uppercase tracking-[0.2em] text-[var(--app-text)]">Contacto</h4>
                    <ul className="space-y-3 text-[var(--app-text-muted)] font-bold">
                        <li>
                            <div className="flex items-center gap-2">
                                <MapPin size={15} className="text-[var(--primary)] shrink-0" />
                                <span>Quito, Ecuador</span>
                            </div>
                        </li>
                        <li>
                            <a href="mailto:info@conexionserviciosecuador.com"
                                className="flex items-start gap-2 hover:text-[var(--primary)] transition-colors active:scale-95">
                                <Mail size={15} className="text-[var(--primary)] shrink-0 mt-0.5" />
                                <span className="break-all text-xs leading-relaxed">info@conexionserviciosecuador.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Legal Links */}
            <div className="flex justify-center gap-6 text-[10px] font-bold text-[var(--app-text-muted)] uppercase tracking-widest">
                <a href="https://conexionserviciosec.blogspot.com/p/terminos-y-condiciones-de-uso-de-la.html"
                    target="_blank" rel="noreferrer"
                    className="hover:text-[var(--primary)] transition-colors active:scale-95">
                    Términos
                </a>
                <a href="https://blog.conexionserviciosecuador.com/privacidad"
                    target="_blank" rel="noreferrer"
                    className="hover:text-[var(--primary)] transition-colors active:scale-95">
                    Privacidad
                </a>
            </div>

            {/* Bottom: Theme Toggle + Copyright */}
            <div className="pt-4 border-t border-[var(--card-border)] flex flex-col items-center gap-5">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--app-text-muted)] opacity-60 font-black text-center">
                    © 2026 CONEXIÓN SERVICIOS. TODOS LOS DERECHOS RESERVADOS.
                </p>
            </div>
        </footer>
    );
};
