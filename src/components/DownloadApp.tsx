import { motion } from 'framer-motion';
import { 
    Instagram, 
    Facebook, 
    Stethoscope, 
    Zap, 
    Truck, 
    GraduationCap, 
    Settings, 
    HeartPulse
} from 'lucide-react';
import { InteractiveGridPattern } from './ui/InteractiveGridPattern';
import { Android as AndroidMockup } from './ui/AndroidMockup';
import { IPhoneMockup } from './ui/IPhoneMockup';

const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/share/17dGTfCQBY/',
    instagram: 'https://www.instagram.com/conexionservicios_ecuador?igsh=ODdlZGhtaGNmcHc4',
    tiktok: 'https://www.tiktok.com/@conexinservicios1',
};

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 1.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.53V6.84a4.85 4.85 0 0 1-1.02-.15z" />
    </svg>
);

export const DownloadApp = () => {
    return (
        <section id="descarga" className="relative py-24 md:py-32 overflow-hidden bg-[#020617]">
            {/* ─── Background Elements ────────────────────────────────────────── */}
            <InteractiveGridPattern 
                width={60} 
                height={60} 
                className="opacity-20 text-blue-500/20"
                squaresClassName="hover:fill-blue-500/10"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />

            {/* Decorative Floating Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute top-[15%] left-[10%] text-white"><Stethoscope size={80} /></motion.div>
                <motion.div animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 10 }} className="absolute top-[20%] right-[15%] text-white"><Zap size={60} /></motion.div>
                <motion.div animate={{ y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 12 }} className="absolute bottom-[20%] left-[15%] text-white"><Truck size={90} /></motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 9 }} className="absolute bottom-[10%] right-[10%] text-white"><GraduationCap size={100} /></motion.div>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-[50%] left-[5%] text-white"><Settings size={50} /></motion.div>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-[40%] right-[5%] text-white"><HeartPulse size={70} /></motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    
                    {/* ─── Left Column: Android Mockup ─────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, rotate: -20 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                        <AndroidMockup 
                            src="/app_shot_ios.jpg" 
                            className="w-[320px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                        />
                    </motion.div>

                    {/* ─── Center Column: Main Content ─────────────────────────────────── */}
                    <div className="flex flex-col items-center text-center space-y-10 lg:space-y-12">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        >
                            Descárgala ahora
                        </motion.div>

                        {/* Title & Slogan */}
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-black font-outfit text-white leading-[0.9] tracking-tighter"
                            >
                                Obtén la <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aplicación</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-md mx-auto"
                            >
                                Lleva el directorio de profesionales más completo contigo en todo momento. Disponible gratis para iOS y Android.
                            </motion.p>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-3xl font-black font-outfit"
                            >
                                <span className="text-white">Conecta con lo </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 uppercase tracking-tight">Mejor</span>
                            </motion.p>
                        </div>

                        {/* Store Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md"
                        >
                            {/* Play Store */}
                            <a href="#" className="flex-1 group relative flex items-center gap-3 px-6 py-4 bg-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                                <div className="text-white/80 group-hover:text-white transition-colors">
                                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.81,16.27C19.46,16.65 19.46,17.35 18.81,17.73L15.11,19.86L14.4,12.71L16.81,15.12M15.11,4.14L18.81,6.27C19.46,6.65 19.46,7.35 18.81,7.73L16.81,8.88L14.4,11.29L15.11,4.14M13,12.71L12.29,13.42L4.54,21.17C4.65,21.19 4.77,21.21 4.9,21.21C5.23,21.21 5.54,21.1 5.8,20.95L14.4,15.98L13,12.71M12.29,10.58L13,11.29L14.4,8.02L5.8,3.05C5.54,2.9 5.23,2.79 4.9,2.79C4.77,2.79 4.65,2.81 4.54,2.83L12.29,10.58Z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-[8px] uppercase font-bold text-slate-500 tracking-[0.2em] mb-0.1">Get it on</p>
                                    <p className="text-sm font-bold text-white tracking-tight">Google Play</p>
                                </div>
                            </a>

                            {/* App Store */}
                            <a href="#" className="flex-1 group relative flex items-center gap-3 px-6 py-4 bg-black border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                                <div className="text-white/80 group-hover:text-white transition-colors">
                                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-[8px] uppercase font-bold text-slate-500 tracking-[0.2em] mb-0.1">Download on the</p>
                                    <p className="text-sm font-bold text-white tracking-tight">App Store</p>
                                </div>
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <p className="text-[9px] uppercase font-black tracking-[0.4em] text-slate-500">Síguenos en nuestras redes</p>
                            <div className="flex gap-6">
                                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <Facebook size={24} />
                                </a>
                                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <TikTokIcon size={22} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─── Right Column: iOS Mockup ────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: 20 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 12 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                        <IPhoneMockup className="w-[280px] h-[580px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <img src="/app_shot_android.jpg" alt="Vista iOS" className="w-full h-full object-cover" />
                        </IPhoneMockup>
                    </motion.div>

                    {/* Mobile Mockups Display (Stacked) */}
                    <div className="lg:hidden flex justify-center gap-4 px-4 overflow-hidden pt-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 50, rotate: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                            className="w-1/2 scale-75 origin-top"
                        >
                            <AndroidMockup src="/app_shot_ios.jpg" className="w-full h-auto" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 8 }}
                            className="w-1/2 scale-75 origin-top"
                        >
                            <IPhoneMockup className="w-full h-auto">
                                <img src="/app_shot_android.jpg" alt="Mobile iOS" className="w-full h-full object-cover" />
                            </IPhoneMockup>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
