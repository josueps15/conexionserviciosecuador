import React from 'react';
import { Instagram, Facebook, Mail, Globe } from 'lucide-react';

export const MobileFooter: React.FC = () => {
    const SOCIAL_LINKS = {
        facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
        instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
        tiktok: 'https://www.tiktok.com/@conexinservicios1',
    };

    return (
        <footer className="px-6 pt-16 pb-32 space-y-12 border-t border-white/5 bg-slate-950/20">
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-2 shadow-lg shadow-primary/20">
                        <img src="/logo-cs.png" alt="CS Logo" className="w-full h-full object-contain brightness-110" />
                    </div>
                    <span className="font-outfit font-black text-xl tracking-tight uppercase text-white">
                        Conexión
                    </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                    Redefiniendo los servicios profesionales en Ecuador. La plataforma que conecta expertos con quienes los necesitan.
                </p>
                <div className="flex gap-4">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 active:bg-pink-500 active:text-white transition-all">
                        <Instagram size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 active:bg-blue-600 active:text-white transition-all">
                        <Facebook size={20} />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                    <h4 className="font-black font-outfit uppercase tracking-widest text-[11px] text-white/50">Explora</h4>
                    <ul className="space-y-3 text-slate-400 font-bold">
                        <li>Inicio</li>
                        <li>Servicios</li>
                        <li>Usuarios</li>
                        <li>Negocios</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-black font-outfit uppercase tracking-widest text-[11px] text-white/50">Ayuda</h4>
                    <ul className="space-y-3 text-slate-400 font-bold">
                        <li>FAQ</li>
                        <li>Soporte</li>
                        <li>Términos</li>
                        <li>Privacidad</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6 pt-4">
                <h4 className="font-black font-outfit uppercase tracking-widest text-[11px] text-white/50">Ubicación</h4>
                <div className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Globe size={18} className="text-primary" />
                    <span>Quito, Ecuador</span>
                </div>
                <a href="mailto:conexionserviciosec@gmail.com" className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Mail size={18} className="text-primary" />
                    <span>conexionserviciosec@gmail.com</span>
                </a>
            </div>

            <div className="pt-8 text-center space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-black">
                    © 2026 Conexión Servicios
                </p>
                <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-slate-600 font-black">
                    <span>Términos</span>
                    <span>Privacidad</span>
                </div>
            </div>
        </footer>
    );
};
