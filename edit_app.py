import re
import os

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Nav update
code = code.replace("['Servicios', '#servicios'], ", "")

# 2. Hero slogan update
code = re.sub(
    r'<h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-8 leading-\[1.05\] tracking-tighter text-white">.*?<span className="text-gradient">profesionales</span> en segundos.\s*</h1>',
    """<h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black mb-8 leading-[1.05] tracking-tighter text-white">
                                ¿Buscas un Mecánico, <br />
                                un Electricista, una Grúa <br />
                                o un <span className="text-gradient">Centro Educativo</span>?
                            </h1>""",
    code, flags=re.DOTALL
)

code = re.sub(
    r'<p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">.*?Nuestra misión es revolucionar la forma en que contratas y ofreces servicios.*?</p>',
    """<p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed font-medium">
                                En la <strong>APP Conexión Servicios</strong> encontrarás los mejores servicios profesionales.
                            </p>""",
    code, flags=re.DOTALL
)

# 3. Replace the whole SERVICIOS AND USUARIOS section with a combined visually appealing USUARIOS section
m1 = re.search(r'\{/\*\s*── SERVICIOS QUE OFRECE LA APP ──\s*\*/\}', code)
m2 = re.search(r'\{/\*\s*── BENEFICIOS PARA NEGOCIOS ──\s*\*/\}', code)
if m1 and m2:
    start_servicios = m1.start()
    start_negocios = m2.start()

    new_usuarios_section = """{/* ── PARA USUARIOS (Visual Category Grid) ── */}
                <section id="usuarios" className="py-24 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto">
                        <motion.div {...fadeIn} className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-6">
                                Para Usuarios
                            </span>
                            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-6 leading-tight text-white">
                                Encuentra fácilmente el <br className="hidden md:block"/> <span className="text-gradient">servicio que necesitas</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Más de 50 categorías de profesionales listos para ayudarte. ¡Todo visual, rápido y 100% verificado!
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                                {SERVICE_CATEGORIES.map((cat, i) => (
                                    <motion.div
                                        key={cat.label}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.4, delay: (i % 5) * 0.04 }}
                                        whileHover={{ y: -5, scale: 1.03 }}
                                        className={`group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${cat.bg} border ${cat.border} backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-xl text-center`}
                                    >
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ boxShadow: `0 0 30px ${cat.color}25` }} />
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
                                            style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}30` }}>
                                            <cat.icon size={22} style={{ color: cat.color }} />
                                        </div>
                                        <span className="font-semibold text-sm text-slate-200 leading-tight relative z-10">
                                            {cat.label}
                                        </span>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="group relative col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-2 flex flex-col justify-center items-center px-6 py-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-white/10 backdrop-blur-md text-center cursor-default transition-all duration-300 mt-0"
                                >
                                    <p className="font-outfit font-black text-xl sm:text-2xl text-white my-1 z-10 leading-tight">
                                        ¡Y muchas más conectadas en la App!
                                    </p>
                                </motion.div>
                            </div>
                    </div>
                </section>

                """

    code = code[:start_servicios] + new_usuarios_section + code[start_negocios:]

# 4. Update "Para negocios"
m3 = re.search(r'\{/\*\s*── BENEFICIOS PARA NEGOCIOS ──\s*\*/\}', code)
m4 = re.search(r'\{/\*\s*── APP SHOWCASE \(ContainerScroll\) ──\s*\*/\}', code)
if m3 and m4:
    start_n = m3.start()
    end_n = m4.start()

    new_negocios_section = """{/* ── PARA NEGOCIOS ── */}
                <section id="negocios" className="py-24 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8">
                                Para Negocios y Profesionales
                            </span>
                            <h2 className="text-4xl md:text-6xl font-outfit font-black mb-6 leading-tight text-white">
                                ¿Tienes un negocio <br className="hidden sm:block"/> en <span className="text-emerald-400">crecimiento</span>?
                            </h2>
                            <p className="text-xl md:text-3xl text-white font-bold mb-12 leading-relaxed bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                ¡Publícalo GRATIS en la APP <br/>de Conexión Servicios!
                            </p>
                            
                            <button
                                onClick={() => setIsRegistrationModalOpen(true)}
                                className="inline-flex flex-col items-center gap-2 group mx-auto">
                                <span className="inline-flex items-center gap-3 px-10 py-5 rounded-3xl bg-emerald-600 font-black text-lg md:text-xl text-white hover:bg-emerald-700 transition-all shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] group-hover:scale-105 group-active:scale-95">
                                    Registrar mi Negocio Ahora <ArrowRight size={24} />
                                </span>
                                <span className="text-emerald-500/80 text-sm font-medium mt-2">Es 100% gratuito</span>
                            </button>
                        </motion.div>
                    </div>
                </section>

                """
    code = code[:start_n] + new_negocios_section + code[end_n:]

# 5. Remove APP SHOWCASE
m5 = re.search(r'\{/\*\s*── APP SHOWCASE \(ContainerScroll\) ──\s*\*/\}', code)
m6 = re.search(r'\{/\*\s*── CTA ──\s*\*/\}', code)
if m5 and m6:
    start_a = m5.start()
    end_a = m6.start()
    code = code[:start_a] + code[end_a:]

# 6. Update Descargar/CTA Section text
code = re.sub(
    r'<span className="inline-block px-4 py-1\.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary mb-4 relative z-10">.*?</span>',
    """<span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary mb-4 relative z-10">
                            DISPONIBLE PARA TODOS
                        </span>""",
    code, flags=re.DOTALL
)

code = re.sub(
    r'<h2 className="text-5xl lg:text-7xl font-outfit font-black relative z-10 leading-tight">.*?¿Listo para dar el <br className="hidden md:block" /><span className="text-gradient">Siguiente Gran Paso\?</span>.*?</h2>',
    """<h2 className="text-5xl lg:text-7xl font-outfit font-black relative z-10 leading-tight text-white">
                            Descarga nuestra <br className="hidden md:block" /><span className="text-gradient">Aplicación</span>
                        </h2>""",
    code, flags=re.DOTALL
)

code = re.sub(
    r'<p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto relative z-10">.*?Únete.*?</p>',
    """<p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto relative z-10">
                            Lleva el directorio de profesionales más completo contigo en todo momento.
                        </p>""",
    code, flags=re.DOTALL
)

# 7. Update Footer Website url
code = code.replace(
    'Redefiniendo los servicios profesionales en Ecuador.',
    'Redefiniendo los servicios profesionales en Ecuador.<br/><br/><a href="https://www.conexionserviciosecuador.com" target="_blank" rel="noreferrer" className="text-white hover:text-primary font-medium tracking-wide">www.conexionserviciosecuador.com</a>'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(code)
print("done")
