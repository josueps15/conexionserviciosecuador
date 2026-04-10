import { 
  Car, HeartPulse, Dog, Dumbbell, UtensilsCrossed, 
  Palmtree, Home, HardHat, Zap, Building2, 
  Landmark, Cpu, Factory, GraduationCap, Briefcase, 
  ShieldCheck, PartyPopper, Megaphone, Bug, WashingMachine, 
  Sparkles, Cake, Flower2, Scissors, Shirt, Truck 
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'automotriz',
    title: 'Automotriz',
    icon: Car,
    image: '/category_automotive.png',
    description: 'Mantenimiento y cuidado para tu vehículo.',
    subcategories: ['Mecánica', 'Mecánica de motos', 'Rectificadora de motores/aros', 'Torno', 'Repuestos', 'Llantas', 'Parabrisas', 'Tapicería', 'Audio', 'Autolujos', 'Lavadora y lubricadora', 'Vulcanizadora', 'Alineación', 'Frenos', 'Enderezada y pintura', 'Electricidad/Electrónico', 'Venta autos/motos', 'Grúa']
  },
  {
    id: 'salud',
    title: 'Salud',
    icon: HeartPulse,
    image: '/category_health.png',
    description: 'Atención médica especializada y bienestar.',
    subcategories: ['Medicina general', 'Endocrinología', 'Odontología', 'Lab. dental/clínico', 'Traumatología', 'Reumatología', 'Ginecología', 'Oftalmología', 'Neurología', 'Podología', 'Dermatología', 'Urología', 'Cirugía plástica', 'Cosmetología', 'Rayos X', 'Farmacia 24h', 'Geriatría', 'Ambulancia', 'Psiquiatría', 'Pediatría', 'Gastroenterología', 'Psicología']
  },
  {
    id: 'mascotas',
    title: 'Mascotas',
    icon: Dog,
    image: '/category_pets.png',
    description: 'Todo para el cuidado de tus mejores amigos.',
    subcategories: ['Hospital', 'Veterinaria', 'Peluquería canina', 'Adiestramiento canino']
  },
  {
    id: 'deportes',
    title: 'Deportes',
    icon: Dumbbell,
    image: '/category_sports.png',
    description: 'Actividad física y entrenamiento profesional.',
    subcategories: ['Gym', 'Escuelas deportivas', 'Parapente', 'Indoor Cycling', 'Canchas deportivas']
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: UtensilsCrossed,
    description: 'Gastronomía local e internacional.',
    subcategories: ['Chifa', 'Sushi', 'Burger', 'Parrillas y asados', 'Cevichería', 'Cafetería', 'Heladería']
  },
  {
    id: 'turismo',
    title: 'Turismo',
    icon: Palmtree,
    description: 'Explora los mejores destinos turísticos.',
    subcategories: ['Agencia de viajes', 'Piscinas', 'Hospedaje', 'Playa', 'Ríos', 'Transporte turístico', 'Galápagos']
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    icon: Home,
    description: 'Alojamiento cómodo y seguro.',
    subcategories: ['Departamentos', 'Habitaciones', 'Casas de campo']
  },
  {
    id: 'construccion',
    title: 'Construcción',
    icon: HardHat,
    description: 'Proyectos, remodelaciones y materiales.',
    subcategories: ['Arquitectura', 'Gypsum', 'Vidriería', 'Materiales', 'Maquinaria pesada/obra', 'Casas', 'Estructuras metálicas', 'Electricista', 'Arreglos varios', 'Trabajos en alturas']
  },
  {
    id: 'electricidad',
    title: 'Electricidad',
    icon: Zap,
    description: 'Sistemas eléctricos y reparaciones.',
    subcategories: ['Electromecánica', 'Instalaciones eléctricas', 'Reparaciones']
  },
  {
    id: 'inmobiliaria',
    title: 'Inmobiliaria',
    icon: Building2,
    description: 'Venta y alquiler de bienes raíces.',
    subcategories: ['Venta de Casas', 'Alquiler de Departamentos', 'Terrenos', 'Locales Comerciales']
  },
  {
    id: 'bancarios',
    title: 'Bancarios',
    icon: Landmark,
    description: 'Soluciones financieras y ahorro.',
    subcategories: ['Ahorro y crédito']
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    icon: Cpu,
    description: 'Hardware, software y soporte técnico.',
    subcategories: ['Computadoras', 'Teléfonos', 'Radio técnico']
  },
  {
    id: 'fabricas',
    title: 'Fábricas',
    icon: Factory,
    description: 'Producción industrial y maquinaria.',
    subcategories: ['Ropa', 'Zapatos', 'Muebles', 'Cocinas y maquinaria']
  },
  {
    id: 'educacion',
    title: 'Educación',
    icon: GraduationCap,
    description: 'Formación académica e idiomas.',
    subcategories: ['Escuela de idiomas', 'Música', 'Guardería', 'Escuela/Colegio', 'Escuela de conducir']
  },
  {
    id: 'asesoria',
    title: 'Asesoría',
    icon: Briefcase,
    description: 'Servicios legales y contables.',
    subcategories: ['Abogado', 'Contabilidad']
  },
  {
    id: 'seguridad',
    title: 'Seguridad',
    icon: ShieldCheck,
    description: 'Protección para tu hogar y negocio.',
    subcategories: ['Cámaras y Cerca', 'Seguridad privada']
  },
  {
    id: 'eventos',
    title: 'Eventos',
    icon: PartyPopper,
    description: 'Organización y servicios para eventos.',
    subcategories: ['Organizador de eventos', 'Fotografía y video', 'DJ', 'Sala de velaciones', 'Sala de asuntos sociales']
  },
  {
    id: 'publicidad',
    title: 'Publicidad',
    icon: Megaphone,
    description: 'Marketing, diseño y software.',
    subcategories: ['Software', 'Páginas web', 'Marketing', 'Impresiones']
  },
  {
    id: 'plagas',
    title: 'Plagas',
    icon: Bug,
    description: 'Control y fumigación especializada.',
    subcategories: ['Fumigación']
  },
  {
    id: 'linea_blanca',
    title: 'Línea Blanca',
    icon: WashingMachine,
    description: 'Venta y reparación de electrodomésticos.',
    subcategories: ['Venta', 'Reparación']
  },
  {
    id: 'limpieza',
    title: 'Limpieza',
    icon: Sparkles,
    description: 'Cuidado y mantenimiento de espacios.',
    subcategories: ['Limpieza General', 'Lavandería', 'Lavado de Alfombras', 'Vidrios en alturas', 'Jardinería']
  },
  {
    id: 'pasteleria',
    title: 'Pastelería',
    icon: Cake,
    description: 'Dulces y pasteles personalizados.',
    subcategories: ['Pasteles para asuntos sociales']
  },
  {
    id: 'floristeria',
    title: 'Floristería',
    icon: Flower2,
    description: 'Arreglos florales para toda ocasión.',
    subcategories: ['Arreglos Florales']
  },
  {
    id: 'belleza',
    title: 'Belleza',
    icon: Scissors,
    description: 'Estética y cuidado personal.',
    subcategories: ['Maquillaje', 'Peluquería mujer', 'Barber Shop Hombre']
  },
  {
    id: 'moda',
    title: 'Moda',
    icon: Shirt,
    description: 'Prendas, calzado y accesorios.',
    subcategories: ['Zapatos', 'Ropa Deportiva', 'Alquiler de trajes/disfraces', 'Trajes hombre', 'Outlets']
  },
  {
    id: 'courier',
    title: 'Courier',
    icon: Truck,
    description: 'Envíos nacionales e internacionales.',
    subcategories: ['Paquetería', 'Viajes puerta a puerta']
  }
];
