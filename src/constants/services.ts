import { 
    Sparkles, Crown, Scissors, Shirt, Building2, Truck, HeartPulse, 
    GraduationCap, Car, Dumbbell, UtensilsCrossed, Plane, Cpu, 
    Hammer, Shovel, Trees, Home, WashingMachine, Microscope
} from 'lucide-react';

export const SERVICE_CATEGORIES = [
    { 
        icon: Sparkles, label: 'Limpieza', color: '#06B6D4', 
        img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80',
        slogan: '¡Deja tu espacio impecable con expertos ahora mismo!',
        specialties: ['Hogar y Oficinas', 'Desinfección', 'Limpieza profunda', 'Alfombras y muebles'],
        bg: 'from-cyan-500/15 to-cyan-500/5', border: 'border-cyan-500/20' 
    },
    { 
        icon: Crown, label: 'Pastelería', color: '#EC4899', 
        img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
        slogan: '¡Date un gusto dulce con lo mejor de la pastelería aquí!',
        specialties: ['Tortas personalizadas', 'Bocaditos', 'Panadería artesanal', 'Mesa de dulces'],
        bg: 'from-pink-500/15 to-pink-500/5', border: 'border-pink-500/20' 
    },
    { 
        icon: Scissors, label: 'Belleza', color: '#A855F7', 
        img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80',
        slogan: '¿Listo para lucir increíble? ¡Mira nuestros especialistas!',
        specialties: ['Corte y color', 'Manicure y Pedicure', 'Maquillaje profesional', 'Tratamientos faciales'],
        bg: 'from-purple-500/15 to-purple-500/5', border: 'border-purple-500/20' 
    },
    { 
        icon: Shirt, label: 'Ropa', color: '#F97316', 
        img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
        slogan: '¡Viste con estilo y calidad! Encuentra tu sastre ideal hoy.',
        specialties: ['Confección a medida', 'Arreglos y costura', 'Limpieza en seco', 'Uniformes'],
        bg: 'from-orange-500/15 to-orange-500/5', border: 'border-orange-500/20' 
    },
    { 
        icon: Building2, label: 'Construcción', color: '#EF4444', 
        img: '/construccion_img.png',
        slogan: '¡Remodela y construye tus sueños con los mejores expertos!',
        specialties: ['Albañilería', 'Pintura y acabados', 'Gypsum y Drywall', 'Estructuras metálicas'],
        bg: 'from-red-500/15 to-red-500/5', border: 'border-red-500/20' 
    },
    { 
        icon: Truck, label: 'Courier', color: '#F59E0B', 
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80',
        slogan: '¡Envía y recibe tus paquetes con total seguridad y rapidez!',
        specialties: ['Entregas urbanas', 'Encomiendas nacionales', 'Compras internacionales', 'Logística'],
        bg: 'from-amber-500/15 to-amber-500/5', border: 'border-amber-500/20' 
    },
    { 
        icon: HeartPulse, label: 'Salud', color: '#F43F5E', 
        img: '/medicos_img.png',
        slogan: '¡Tu salud es prioridad! Consulta con médicos verificados.',
        specialties: ['Medicina General', 'Enfermería a domicilio', 'Terapia física', 'Laboratorio'],
        bg: 'from-red-400/15 to-red-400/5', border: 'border-red-400/20' 
    },
    { 
        icon: GraduationCap, label: 'Educación', color: '#8B5CF6', 
        img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&q=80',
        slogan: '¡Descubre nuevos conocimientos con los mejores tutores online!',
        specialties: ['Clases dirigidas', 'Idiomas', 'Cursos técnicos', 'Asesoría académica'],
        bg: 'from-violet-500/15 to-violet-500/5', border: 'border-violet-500/20' 
    },
    { 
        icon: Car, label: 'Automotriz', color: '#3B82F6', 
        img: '/mecanica_img.png',
        slogan: '¡Dale mantenimiento a tu vehículo con ayuda profesional hoy!',
        specialties: ['Mecánica preventiva', 'ABC de motor', 'Enderezada y pintura', 'Auxilio mecánico'],
        bg: 'from-blue-500/15 to-blue-500/5', border: 'border-blue-500/20' 
    },
    { 
        icon: Dumbbell, label: 'Bienestar', color: '#10B981', 
        img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
        slogan: '¡Entrena y siéntete mejor con los mejores instructores!',
        specialties: ['Personal Trainer', 'Yoga y Pilates', 'Nutrición', 'Crossfit'],
        bg: 'from-emerald-500/15 to-emerald-500/5', border: 'border-emerald-500/20' 
    },
    { 
        icon: UtensilsCrossed, label: 'Gastronomía', color: '#F59E0B', 
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
        slogan: '¡Disfruta de la mejor comida técnica y tradicional!',
        specialties: ['Chef a domicilio', 'Catering eventos', 'Comida saludable', 'Cursos de cocina'],
        bg: 'from-amber-600/15 to-amber-600/5', border: 'border-amber-600/20' 
    },
    { 
        icon: Plane, label: 'Turismo', color: '#0ea5e9', 
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
        slogan: '¡Explora Ecuador con las mejores guías y operadoras!',
        specialties: ['Tours guiados', 'Transporte turístico', 'Alojamiento', 'Deportes de aventura'],
        bg: 'from-sky-500/15 to-sky-500/5', border: 'border-sky-500/20' 
    },
    { 
        icon: Cpu, label: 'Tecnología', color: '#6366f1', 
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
        slogan: '¡Soporte técnico y soluciones digitales al instante!',
        specialties: ['Software & Apps', 'Mantenimiento PC', 'Redes e Internet', 'Asesoría tech'],
        bg: 'from-indigo-500/15 to-indigo-500/5', border: 'border-indigo-500/20' 
    }
];

export const BUSINESS_BENEFITS = [
    {
        tag: "Visibilidad",
        title: "¡Tu perfil ante miles de clientes!",
        img: "/beneficio_visibilidad.png",
        color: "emerald"
    },
    {
        tag: "Conexión",
        title: "Trato directo, resultados inmediatos.",
        img: "/beneficio_conexion.png",
        color: "blue"
    },
    {
        tag: "Más Clientes",
        title: "Llega a miles de clientes nuevos cada día.",
        img: "/beneficio_clientes.png",
        color: "emerald"
    },
    {
        tag: "Crecimiento",
        title: "Escala tu negocio sin límites.",
        img: "/beneficio_crecimiento.png",
        color: "blue"
    }
];
