import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { InteractiveHoverButton } from './ui/InteractiveHoverButton';

interface AboutUsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AboutUsModal: React.FC<AboutUsModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 22, stiffness: 350, mass: 0.8 }}
                        className="relative w-full max-w-4xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] rounded-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(8,145,178,0.25)] dark:shadow-2xl overflow-hidden max-h-[90vh] transition-colors duration-500"
                    >
                        {/* Background with blend mode */}
                        <div className="absolute inset-0 z-0">
                            <img src="/bg-business-join.png" alt="Nosotros" className="w-full h-full object-cover opacity-60 dark:opacity-30 mix-blend-overlay hover:scale-105 transition-transform duration-[10s]" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--app-bg)]/95 via-[var(--app-bg)]/80 to-[var(--primary)]/30 dark:from-[var(--app-bg)]/98 dark:to-[var(--primary)]/20"></div>
                        </div>

                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/20 blur-[100px] rounded-full z-0" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/20 blur-[100px] rounded-full z-0" />

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center h-full overflow-y-auto hide-scrollbar">
                            <button 
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--app-bg)]/50 hover:bg-[var(--app-bg)] text-[var(--app-text-muted)] hover:text-[var(--app-text)] transition-colors border border-[var(--card-border)] backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-6 flex justify-center items-center">
                                <img src="/logo-cs.png" alt="Conexión Servicios Logo" className="h-16 md:h-20 w-auto drop-shadow-lg drop-shadow-cyan-500/20" />
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black text-[var(--app-text)] mb-8 leading-tight transition-colors duration-500 tracking-tighter uppercase">
                                ¿Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Somos?</span>
                            </h2>

                            <div className="max-w-2xl mx-auto space-y-6 mb-12">
                                <p className="text-lg sm:text-xl md:text-2xl text-[var(--app-text)] font-semibold leading-relaxed transition-colors duration-500">
                                    Somos una empresa Publicitaria dedicada a solucionar los problemas cotidianos del día a día.
                                </p>
                                <p className="text-lg md:text-xl text-[var(--app-text-muted)] font-medium leading-relaxed transition-colors duration-500">
                                    Conexión Servicios es una plataforma líder en todo el Ecuador que conecta personas con servicios de calidad, impulsando el desarrollo de Miles de negocios.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[var(--app-bg)] via-[var(--app-bg-soft)] to-[var(--primary)]/10 p-8 rounded-3xl border border-[var(--card-border)] shadow-lg w-full max-w-3xl transform hover:-translate-y-1 transition-transform">
                                <p className="text-xl md:text-2xl font-black text-[var(--app-text)] mb-6 tracking-tight">
                                    ¡Únete a la evolución de los servicios en Ecuador! <span className="text-orange-500">Descarga nuestra app hoy mismo.</span>
                                </p>
                                <InteractiveHoverButton 
                                    text="DESCARGAR APP" 
                                    onClick={() => {
                                        onClose();
                                        setTimeout(() => {
                                            document.getElementById('descarga')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        }, 300);
                                    }}
                                    className="bg-gradient-to-r from-[var(--primary)] to-cyan-500 border-none text-white shadow-xl shadow-[var(--primary)]/30 text-base md:text-lg px-8 py-3 rounded-2xl mx-auto w-full max-w-sm flex items-center justify-center font-black"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
