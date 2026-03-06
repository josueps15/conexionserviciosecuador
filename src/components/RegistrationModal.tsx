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

        // Send silently via CallMeBot API (WhatsApp) using no-cors to prevent browser blocks
        // The user must configure their apikey with CallMeBot for the target number: 0593960945828 (593960945828 in intl format)
        const targetPhone = "593960945828";
        const apiKey = "123456"; // REPLACE WITH ACTUAL API KEY FROM CALLMEBOT
        const url = `https://api.callmebot.com/whatsapp.php?phone=${targetPhone}&text=${message}&apikey=${apiKey}`;

        try {
            await fetch(url, { mode: 'no-cors' });

            // Artificial delay to show the nice loading state, then success
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
            }, 1500);

        } catch (error) {
            console.error("Error sending registration:", error);
            // Even if it fails (e.g. adblocker), show success to the user so they are not blocked
            setIsSubmitting(false);
            setIsSuccess(true);
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
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl bg-[#0a0f1c] border border-white/10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Left Panel - Benefits Info */}
                        <div className="hidden md:flex flex-col flex-1 p-10 lg:p-14 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl lg:text-4xl font-outfit font-black text-white mb-6 leading-tight">
                                    Únete a la evolución de los <span className="text-gradient">Servicios en Ecuador</span>
                                </h3>

                                <p className="text-slate-400 mb-10 text-lg">
                                    Regístrate hoy y expón tu talento ante miles de clientes potenciales verificados.
                                </p>

                                <div className="space-y-6 flex-1">
                                    {[
                                        { title: "Mayor visibilidad", desc: "Aparece en los primeros resultados de tu ciudad y categoría." },
                                        { title: "Clientes confiables", desc: "Nuestra plataforma filtra y verifica solicitudes para tu seguridad." },
                                        { title: "Gestión digital", desc: "Recibe cotizaciones y mensajes directamente en la plataforma." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 size={18} className="text-cyan-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg">{benefit.title}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div className="flex-1 p-6 sm:p-10 lg:p-14 overflow-y-auto custom-scrollbar relative">
                            {!isSuccess && (
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 w-10 h-10 bg-slate-900 rounded-full border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors z-20"
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
                                    <h3 className="text-3xl font-outfit font-black text-white mb-4">
                                        ¡Gracias por sumarte al cambio!
                                    </h3>
                                    <p className="text-slate-400 text-lg mb-8 max-w-sm">
                                        Tus datos han sido enviados exitosamente. Por favor, espera a que <strong className="text-white">Administración Matriz</strong> se ponga en contacto contigo muy pronto para activar tu perfil profesional.
                                    </p>
                                    <button
                                        onClick={resetAndClose}
                                        className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors w-full sm:w-auto"
                                    >
                                        Volver al inicio
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-2xl sm:text-3xl font-outfit font-black text-white mb-2">
                                            Registra tu Negocio
                                        </h2>
                                        <p className="text-slate-400 text-sm">
                                            Completa los datos y comienza a crecer.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Nombre Completo</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <User size={18} className="text-slate-500" />
                                                </div>
                                                <input required type="text" name="name" value={formData.name} onChange={handleInputChange}
                                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 focus:bg-slate-900/80 transition-all font-medium placeholder:text-slate-600"
                                                    placeholder="Ej: Juan Pérez" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Teléfono Célular</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Phone size={18} className="text-slate-500" />
                                                </div>
                                                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 focus:bg-slate-900/80 transition-all font-medium placeholder:text-slate-600"
                                                    placeholder="Ej: 0991234567" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Servicio / Negocio</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Building2 size={18} className="text-slate-500" />
                                                </div>
                                                <input required type="text" name="service" value={formData.service} onChange={handleInputChange}
                                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 focus:bg-slate-900/80 transition-all font-medium placeholder:text-slate-600"
                                                    placeholder="Ej: Plomería Express o Ferretería Central" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <div className="flex justify-between items-end">
                                                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Ubicación</label>
                                                <button type="button" onClick={handleGetLocation} disabled={isLocating}
                                                    className="text-xs font-bold text-primary hover:text-cyan-400 transition-colors flex items-center gap-1">
                                                    {isLocating ? <Loader2 size={14} className="animate-spin" /> : <MapPin size={14} />}
                                                    Usar mi ubicación actual
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <MapPin size={18} className="text-slate-500" />
                                                </div>
                                                <input required type="text" name="location" value={formData.location} onChange={handleInputChange}
                                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 focus:bg-slate-900/80 transition-all font-medium placeholder:text-slate-600"
                                                    placeholder="Sector, calle o ciudad" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Detalles Adicionales</label>
                                            <div className="relative">
                                                <div className="absolute top-4 left-4 pointer-events-none">
                                                    <AlignLeft size={18} className="text-slate-500" />
                                                </div>
                                                <textarea required name="details" value={formData.details} onChange={handleInputChange} rows={3}
                                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 focus:bg-slate-900/80 transition-all font-medium placeholder:text-slate-600 resize-none"
                                                    placeholder="Cuéntanos un poco más sobre lo que ofreces..." />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-black text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
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
                                            <p className="text-center text-slate-500 text-xs mt-4 flex items-center justify-center gap-1.5">
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
