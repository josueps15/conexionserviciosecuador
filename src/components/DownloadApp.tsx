import { motion } from 'framer-motion';
import { 
    Stethoscope, 
    Zap, 
    Truck, 
    GraduationCap, 
    Instagram,
    Facebook
} from 'lucide-react';
import { InteractiveGridPattern } from './ui/InteractiveGridPattern';
import { Android as AndroidMockup } from './ui/AndroidMockup';
import { IPhoneMockup } from './ui/IPhoneMockup';

import appIPhone from '../assets/app_iphone.png';
import appAndroid from '../assets/app_android.png';

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
        <section id="descarga" className="relative py-32 md:py-48 overflow-hidden bg-[var(--app-bg)] transition-colors duration-500">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <InteractiveGridPattern 
                    width={80} 
                    height={80} 
                    className="opacity-20 text-[var(--primary)]/20"
                    squaresClassName="hover:fill-[var(--primary)]/10"
                />
            </div>
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[var(--primary)]/10 blur-[150px] rounded-full opacity-60 dark:opacity-100 transition-opacity duration-700" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-cyan-400/10 blur-[150px] rounded-full opacity-60 dark:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Decorative Floating Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-50">
                <motion.div animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 12 }} className="absolute top-[10%] left-[10%] text-cyan-500"><Stethoscope size={56} /></motion.div>
                <motion.div animate={{ y: [0, -35, 0] }} transition={{ repeat: Infinity, duration: 9 }} className="absolute top-[18%] right-[12%] text-orange-500"><Zap size={40} /></motion.div>
                <motion.div animate={{ y: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 15 }} className="absolute bottom-[25%] left-[12%] text-blue-600"><Truck size={64} /></motion.div>
                <motion.div animate={{ y: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 11 }} className="absolute bottom-[12%] right-[10%] text-pink-500"><GraduationCap size={72} /></motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Android Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -60, rotate: -20, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -12, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="hidden lg:block relative origin-bottom-right"
                    >
                        <div className="relative transform hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_45px_70px_rgba(0,0,0,0.5)]">
                            <AndroidMockup src={appAndroid} />
                        </div>
                    </motion.div>

                    {/* Center Column: Main Content */}
                    <div className="flex flex-col items-center text-center space-y-12">
                        {/* News Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-8 py-3 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-[11px] font-black uppercase tracking-[0.4em] shadow-xl backdrop-blur-sm"
                        >
                            <span className="relative flex h-2.5 w-2.5 mr-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
                            </span>
                            Descárgala ahora
                        </motion.div>

                        {/* Title & Slogan */}
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-6xl md:text-8xl font-black font-outfit text-[var(--app-text)] leading-[0.85] tracking-tighter"
                            >
                                Obtén la <br />
                                <span className="text-[var(--primary)] text-[1.1em]">Aplicación</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-[var(--app-text-muted)] font-medium leading-relaxed max-w-lg mx-auto"
                            >
                                Lleva el directorio de profesionales más completo del país en tu bolsillo.
                            </motion.p>
                        </div>

                        {/* Store Buttons: Precise SVG Replication */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-[480px]"
                        >
                            {/* Google Play Button */}
                            <a href="#" className="flex-1 group transition-all hover:scale-[1.02] active:scale-95">
                                <div className="bg-black rounded-[10px] border border-[#a6a6a6] p-[2px] shadow-xl">
                                    <div className="flex items-center gap-3 px-3 py-1.5 bg-black rounded-[8px]">
                                        <svg viewBox="0 0 512 512" className="w-7 h-7 flex-shrink-0">
                                            <path d="M10.1,23.3C9.4,24,9,25,9,26.2v459.7c0,1.2,0.4,2.2,1.1,2.9l1.4,1.4L259.9,256L11.5,21.9L10.1,23.3z" fill="#00e676"/>
                                            <path d="M341.6,337.8L259.9,256L11.5,504.1c1.2,1.2,3.1,1.4,5.2,0.2l324.9-185.3L341.6,337.8z" fill="#ffeb3b"/>
                                            <path d="M486.2,243.3L341.6,174.2L259.9,256l81.7,81.8L486.2,268.7C493.5,264.5,493.5,257.5,486.2,243.3z" fill="#f44336"/>
                                            <path d="M341.6,174.2L16.7,7.7C14.6,6.5,12.7,6.6,11.5,7.9l248.4,248.1L341.6,174.2z" fill="#2196f3"/>
                                        </svg>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[9px] text-white font-bold tracking-tight opacity-90">GET IT ON</span>
                                            <span className="text-[17px] text-white font-bold -mt-0.5 tracking-tight">Google Play</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* App Store Button */}
                            <a href="#" className="flex-1 group transition-all hover:scale-[1.02] active:scale-95">
                                <div className="bg-black rounded-[10px] border border-[#a6a6a6] p-[2px] shadow-xl">
                                    <div className="flex items-center gap-3 px-3 py-1.5 bg-black rounded-[8px]">
                                        <svg viewBox="0 0 384 512" className="w-7 h-7 flex-shrink-0" fill="white">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 39.3 14.4 81.2 36.4 115.6 20.9 31.8 51 64.9 84.4 64.9 31.5-1.2 42.6-21.7 87.5-21.7 44.9 0 54.4 20.7 88.5 20.7 34.6 0 62.4-30.8 84.4-64.9 14.2-20.7 21.5-41.4 21.9-42.5-1.2-.5-65.7-25-66.5-76.9zM224 81c19.1-23.1 31.9-55.2 28.4-87.1-28.3 1.1-62.7 18.9-83 42.4-18.2 21-33.9 53.6-29.6 84.5 31.3 2.4 62.2-16.7 84.2-40.2z" />
                                        </svg>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[9px] text-white font-medium tracking-tight opacity-95">Download on the</span>
                                            <span className="text-[17px] text-white font-semibold -mt-0.5 tracking-tight">App Store</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        <div className="flex flex-col items-center gap-8 pt-10">
                            <p className="text-3xl font-black font-outfit italic text-[var(--app-text)]">
                                Conecta con lo <span className="text-orange-500 uppercase text-4xl">MEJOR</span>
                            </p>
                            
                            <div className="flex gap-10">
                                {[
                                    { icon: Instagram, link: SOCIAL_LINKS.instagram },
                                    { icon: Facebook, link: SOCIAL_LINKS.facebook },
                                    { icon: TikTokIcon, link: SOCIAL_LINKS.tiktok }
                                ].map((soc, i) => (
                                    <a 
                                        key={i} 
                                        href={soc.link} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="w-14 h-14 rounded-[1.2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[var(--primary)] transition-all shadow-lg group"
                                    >
                                        <soc.icon size={28} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: iOS Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, rotate: 20, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 12, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="hidden lg:block relative origin-bottom-left"
                    >
                        <div className="relative transform hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_45px_70px_rgba(0,0,0,0.5)]">
                            <IPhoneMockup>
                                <img src={appIPhone} alt="Vista iOS App" className="w-full h-full object-cover" />
                            </IPhoneMockup>
                        </div>
                    </motion.div>

                    {/* Mobile View */}
                    <div className="lg:hidden flex flex-col items-center gap-12 pt-16 overflow-hidden pb-10">
                        <div className="flex gap-6">
                            <motion.div initial={{ y: 50, rotate: -5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="w-[180px]">
                                <AndroidMockup src={appAndroid} />
                            </motion.div>
                            <motion.div initial={{ y: 80, rotate: 5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="w-[180px] translate-y-12">
                                <IPhoneMockup>
                                    <img src={appIPhone} alt="Mobile Screen" className="w-full h-full object-cover" />
                                </IPhoneMockup>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
