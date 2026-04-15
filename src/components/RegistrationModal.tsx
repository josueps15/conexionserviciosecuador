import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Send, Loader2, Info, Building2, Phone, AlignLeft, User, CheckCircle2 } from 'lucide-react';


interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        location: '',
        details: ''
    });

    const [isLocating, setIsLocating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert('Tu navegador no soporta la geolocalización.');
            return;
        }

        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    // OpenStreetMap Reverse Geocoding (Free & No API Key required)
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();

                    if (data && data.display_name) {
                        setFormData({ ...formData, location: data.display_name });
                    } else {
                        setFormData({ ...formData, location: `${latitude}, ${longitude}` });
                    }
                } catch (error) {
                    console.error("Error getting location details:", error);
                    setFormData({ ...formData, location: `${position.coords.latitude}, ${position.coords.longitude}` });
                } finally {
                    setIsLocating(false);
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert('No pudimos acceder a tu ubicación. Por favor, escríbela manualmente.');
                setIsLocating(false);
            }
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare the message for WhatsApp
        const message = `*NUEVO REGISTRO DE NEGOCIO*%0A%0A` +
            `*Nombre:* ${formData.name}%0A` +
            `*Teléfono:* ${formData.phone}%0A` +
            `*Negocio/Servicio:* ${formData.service}%0A` +
            `*Ubicación:* ${formData.location}%0A` +
            `*Detalles:* ${formData.details}`;

        // The user must configure their apikey with CallMeBot for the target number: 593979783184
        const targetPhone = "593979783184";
        const url = `https://wa.me/${targetPhone}?text=${message}`;

        try {
            // Open WhatsApp in a new tab/window
            window.open(url, '_blank');

            // Show success message immediately after opening
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
            }, 500);

        } catch (error) {
            console.error("Error opening WhatsApp:", error);
            setIsSubmitting(false);
            alert("No se pudo abrir WhatsApp. Por favor, intenta de nuevo o escríbenos directamente al +593960945828.");
        }
    };

    const resetAndClose = () => {
        setIsSuccess(false);
        setFormData({ name: '', phone: '', service: '', location: '', details: '' });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={isSuccess ? resetAndClose : onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 22, stiffness: 350, mass: 0.8 }}
                        className="relative w-full max-w-5xl bg-[var(--app-bg-soft)] border border-[var(--card-border)] rounded-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(8,145,178,0.25)] dark:shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transition-colors duration-500"
                    >
                        {/* Left Panel - Benefits Info */}
                        <div className="hidden md:flex flex-col flex-1 p-8 lg:p-10 relative overflow-hidden bg-[var(--app-bg)]">
                            <div className="absolute inset-0 z-0">
                                <img src="/bg-business-join.png" alt="Crecimiento y Conexión" className="w-full h-full object-cover opacity-60 dark:opacity-30 mix-blend-overlay hover:scale-105 transition-transform duration-[10s]" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--app-bg)]/90 via-[var(--app-bg)]/70 to-[var(--primary)]/20 dark:from-[var(--app-bg)]/95 dark:to-[var(--primary)]/10"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/20 blur-[100px] rounded-full z-0" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/20 blur-[100px] rounded-full z-0" />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl lg:text-4xl font-outfit font-black text-[var(--app-text)] mb-4 leading-tight transition-colors duration-500">
                                    ¡Publícalo <span className="text-cyan-500">GRATIS</span> en la
                                    <br/> APP de <span className="text-orange-500">Conexión Servicios!</span>
                                </h3>

                                <p className="text-[var(--app-text-muted)] mb-6 text-[15px] font-medium transition-colors duration-500">
                                    ¿Tienes un negocio? Regístrate hoy y obten un bono de 6 meses Gratis.
                                </p>

                                <div className="space-y-4 flex-1">
                                    {[
                                        { title: "Visibilidad Total", desc: "¡Tu perfil ante miles de clientes! Aparece en los primeros resultados." },
                                        { title: "Contacto Directo", desc: "Trato directo, resultados inmediatos. Conexión sin intermediarios ni comisiones ocultas." },
                                        { title: "Crecimiento Digital", desc: "Escala tu negocio sin límites. Construye historias de éxito que inspiran confianza." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-500">
                                                <CheckCircle2 size={18} className="text-cyan-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-[var(--app-text)] font-bold text-lg transition-colors duration-500">{benefit.title}</h4>
                                                <p className="text-[var(--app-text-muted)] text-sm leading-relaxed transition-colors duration-500">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div className="flex-1 p-6 sm:p-8 lg:p-8 overflow-y-auto no-scrollbar relative bg-[var(--app-bg-soft)] transition-colors duration-500 z-10">
                            {!isSuccess && (
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/5 dark:bg-slate-900 rounded-full border border-black/5 dark:border-white/10 text-[var(--app-text-muted)] hover:text-[var(--app-text)] flex items-center justify-center transition-all z-20"
                                >
                                    <X size={20} />
                                </button>
                            )}

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-10"
                                >
                                    <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mb-8">
                                        <CheckCircle2 size={48} className="text-emerald-500" />
                                    </div>
                                    <h3 className="text-3xl font-outfit font-black text-[var(--app-text)] mb-4 transition-colors duration-500">
                                        ¡Gracias por sumarte al cambio!
                                    </h3>
                                    <p className="text-[var(--app-text-muted)] text-[15px] mb-8 max-w-sm transition-colors duration-500">
                                        Tus datos han sido enviados exitosamente. Por favor, espera a que <strong className="text-[var(--app-text)]">Administración Matriz</strong> se ponga en contacto contigo muy pronto para activar tu perfil profesional.
                                    </p>
                                    <button
                                        onClick={resetAndClose}
                                        className="px-8 py-3 bg-[var(--primary)] text-white font-bold rounded-xl hover:opacity-90 transition-all w-full sm:w-auto"
                                    >
                                        Volver al inicio
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-4">
                                        <h2 className="text-2xl sm:text-3xl font-outfit font-black text-[var(--app-text)] mb-0.5 transition-colors duration-500">
                                            Crear Perfil Gratis
                                        </h2>
                                        <p className="text-emerald-600 dark:text-emerald-400 text-[13px] font-bold transition-colors duration-500">
                                            ¡Publica tu negocio sin costo alguno!
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-3.5">
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-[var(--app-text-muted)] uppercase tracking-wider pl-1 transition-colors duration-500">Nombre Completo</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <User size={16} className="text-[var(--app-text-muted)] opacity-50" />
                                                </div>
                                                <input required type="text" name="name" value={formData.name} onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--card-border)] rounded-xl text-[var(--app-text)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all font-medium placeholder:text-[var(--app-text-muted)] placeholder:opacity-40 shadow-sm dark:shadow-none"
                                                    placeholder="Ej: Juan Pérez" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-[var(--app-text-muted)] uppercase tracking-wider pl-1 transition-colors duration-500">Teléfono Célular</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Phone size={16} className="text-[var(--app-text-muted)] opacity-50" />
                                                </div>
                                                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--card-border)] rounded-xl text-[var(--app-text)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all font-medium placeholder:text-[var(--app-text-muted)] placeholder:opacity-40 shadow-sm dark:shadow-none"
                                                    placeholder="Ej: 0991234567" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-[var(--app-text-muted)] uppercase tracking-wider pl-1 transition-colors duration-500">Servicio / Negocio</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Building2 size={16} className="text-[var(--app-text-muted)] opacity-50" />
                                                </div>
                                                <input required type="text" name="service" value={formData.service} onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--card-border)] rounded-xl text-[var(--app-text)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all font-medium placeholder:text-[var(--app-text-muted)] placeholder:opacity-40 shadow-sm dark:shadow-none"
                                                    placeholder="Ej: Plomería Express o Ferretería Central" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="flex justify-between items-end">
                                                <label className="text-[11px] font-bold text-[var(--app-text-muted)] uppercase tracking-wider pl-1 transition-colors duration-500">Ubicación</label>
                                                <button type="button" onClick={handleGetLocation} disabled={isLocating}
                                                    className="text-[11px] font-bold text-primary hover:text-cyan-400 transition-colors flex items-center gap-1">
                                                    {isLocating ? <Loader2 size={12} className="animate-spin" /> : <MapPin size={12} />}
                                                    Usar ubicación
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <MapPin size={16} className="text-[var(--app-text-muted)] opacity-50" />
                                                </div>
                                                <input required type="text" name="location" value={formData.location} onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--card-border)] rounded-xl text-[var(--app-text)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all font-medium placeholder:text-[var(--app-text-muted)] placeholder:opacity-40 shadow-sm dark:shadow-none"
                                                    placeholder="Sector, calle o ciudad" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-[var(--app-text-muted)] uppercase tracking-wider pl-1 transition-colors duration-500">Detalles Adicionales</label>
                                            <div className="relative">
                                                <div className="absolute top-3 left-4 pointer-events-none">
                                                    <AlignLeft size={16} className="text-[var(--app-text-muted)] opacity-50" />
                                                </div>
                                                <textarea required name="details" value={formData.details} onChange={handleInputChange} rows={2}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--card-border)] rounded-xl text-[var(--app-text)] text-sm outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all font-medium placeholder:text-[var(--app-text-muted)] placeholder:opacity-40 resize-none shadow-sm dark:shadow-none"
                                                    placeholder="Cuéntanos un poco más sobre lo que ofreces..." />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-black text-[15px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 size={20} className="animate-spin" />
                                                        Enviando Registro...
                                                    </>
                                                ) : (
                                                    <>
                                                        Enviar Registro <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                            <p className="text-center text-[var(--app-text-muted)] opacity-50 text-xs mt-4 flex items-center justify-center gap-1.5 transition-colors duration-500">
                                                <Info size={12} />
                                                Tus datos están protegidos y seguros.
                                            </p>
                                        </div>

                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
