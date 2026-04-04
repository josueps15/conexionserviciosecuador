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
                            {/* Play Store Original Badge Style */}
                            <a href="#" className="flex-1 group relative flex items-center gap-3 px-5 py-3 bg-black border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                                <svg viewBox="0 0 512 512" width="24" height="24" className="mr-1">
                                    <path fill="#4db6ac" d="M10.1,23.3C9.4,24,9,25,9,26.2v459.7c0,1.2,0.4,2.2,1.1,2.9l1.4,1.4L259.9,256L11.5,21.9L10.1,23.3z" />
                                    <path fill="#dce775" d="M341.6,337.8L259.9,256L11.5,504.1c1.2,1.2,3.1,1.4,5.2,0.2l324.9-185.3L341.6,337.8z" />
                                    <path fill="#ff8a65" d="M486.2,243.3L341.6,174.2L259.9,256l81.7,81.8L486.2,268.7C493.5,264.5,493.5,257.5,486.2,243.3z" />
                                    <path fill="#f06292" d="M341.6,174.2L16.7,7.7C14.6,6.5,12.7,6.6,11.5,7.9l248.4,248.1L341.6,174.2z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] sm:text-[8px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Get it on</p>
                                    <p className="text-sm sm:text-base font-bold text-white tracking-tight -mt-1">Google Play</p>
                                </div>
                            </a>

                            {/* App Store Original Badge Style */}
                            <a href="#" className="flex-1 group relative flex items-center gap-3 px-5 py-3 bg-black border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                                <svg viewBox="0 0 384 512" width="22" height="22" fill="white" className="mr-1">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 39.3 14.4 81.2 36.4 115.6 20.9 31.8 51 64.9 84.4 64.9 31.5-1.2 42.6-21.7 87.5-21.7 44.9 0 54.4 20.7 88.5 20.7 34.6 0 62.4-30.8 84.4-64.9 14.2-20.7 21.5-41.4 21.9-42.5-1.2-.5-65.7-25-66.5-76.9zM224 81c19.1-23.1 31.9-55.2 28.4-87.1-28.3 1.1-62.7 18.9-83 42.4-18.2 21-33.9 53.6-29.6 84.5 31.3 2.4 62.2-16.7 84.2-40.2z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] sm:text-[8px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Download on the</p>
                                    <p className="text-sm sm:text-base font-bold text-white tracking-tight -mt-1">App Store</p>
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
