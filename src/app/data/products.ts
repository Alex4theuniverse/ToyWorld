export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  stock: number;
  isOnSale: boolean;
  isFeatured: boolean;
  ageRange: string;
}

export const categories = [
  { id: 'all', name: 'Todos', icon: '🎁' },
  { id: 'robots', name: 'Robots', icon: '🤖' },
  { id: 'peluches', name: 'Peluches', icon: '🧸' },
  { id: 'vehiculos', name: 'Vehículos', icon: '🚗' },
  { id: 'educativos', name: 'Educativos', icon: '📚' },
  { id: 'munecas', name: 'Muñecas', icon: '👧' },
  { id: 'puzzles', name: 'Puzzles', icon: '🧩' },
  { id: 'construccion', name: 'Construcción', icon: '🧱' },
  { id: 'dinosaurios', name: 'Dinosaurios', icon: '🦕' },
  { id: 'superheroes', name: 'Superhéroes', icon: '🦸' },
  { id: 'cocina', name: 'Cocina', icon: '🍳' },
  { id: 'musica', name: 'Música', icon: '🎵' },
  { id: 'juegos', name: 'Juegos de Mesa', icon: '🎲' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Robot Interactivo',
    price: 49.99,
    originalPrice: 69.99,
    category: 'robots',
    image: 'https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRveSUyMHJvYm90JTIwa2lkc3xlbnwxfHx8fDE3NzYzNTkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Robot programable con luces LED y sonidos. Perfecto para introducir a los niños en la programación.',
    rating: 4.5,
    stock: 15,
    isOnSale: true,
    isFeatured: true,
    ageRange: '6-10 años'
  },
  {
    id: 2,
    name: 'Osito de Peluche Premium',
    price: 29.99,
    category: 'peluches',
    image: 'https://images.unsplash.com/photo-1767777230445-3ba39170835c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWZmZWQlMjB0ZWRkeSUyMGJlYXJ8ZW58MXx8fHwxNzc2MzU5Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Adorable osito de peluche súper suave, el compañero perfecto para dormir.',
    rating: 5,
    stock: 30,
    isOnSale: false,
    isFeatured: true,
    ageRange: '0-12 años'
  },
  {
    id: 3,
    name: 'Carro de Carreras',
    price: 34.99,
    originalPrice: 44.99,
    category: 'vehiculos',
    image: 'https://images.unsplash.com/photo-1773847336433-ac0eb70b1735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBraWRzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzYzNTkzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Carro de carreras a control remoto con alta velocidad y batería recargable.',
    rating: 4.7,
    stock: 20,
    isOnSale: true,
    isFeatured: false,
    ageRange: '5-12 años'
  },
  {
    id: 4,
    name: 'Bloques de Madera Educativos',
    price: 24.99,
    category: 'educativos',
    image: 'https://images.unsplash.com/photo-1774464593838-85b320eb7453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBlZHVjYXRpb25hbCUyMHRveXMlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzYzNTkzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Set de bloques de madera para desarrollar habilidades motoras y creatividad.',
    rating: 4.8,
    stock: 25,
    isOnSale: false,
    isFeatured: true,
    ageRange: '2-6 años'
  },
  {
    id: 5,
    name: 'Muñeca Fashion',
    price: 39.99,
    category: 'munecas',
    image: 'https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xscyUyMHRveXMlMjBraWRzfGVufDF8fHx8MTc3NjM1OTM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Muñeca con accesorios y ropa intercambiable. Incluye vestidos y zapatos.',
    rating: 4.6,
    stock: 18,
    isOnSale: false,
    isFeatured: false,
    ageRange: '4-10 años'
  },
  {
    id: 6,
    name: 'Puzzle 3D Avanzado',
    price: 19.99,
    originalPrice: 29.99,
    category: 'puzzles',
    image: 'https://images.unsplash.com/photo-1759678444821-565ff103465c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjB0b3klMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzYzNTkzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Puzzle 3D de 500 piezas, ideal para desarrollar concentración y paciencia.',
    rating: 4.4,
    stock: 22,
    isOnSale: true,
    isFeatured: false,
    ageRange: '8-14 años'
  },
  {
    id: 7,
    name: 'Set de Bloques LEGO',
    price: 59.99,
    category: 'construccion',
    image: 'https://images.unsplash.com/photo-1633469924738-52101af51d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdvJTIwYmxvY2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc2MzU5MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Set completo de bloques de construcción con 1000 piezas de colores variados.',
    rating: 5,
    stock: 12,
    isOnSale: false,
    isFeatured: true,
    ageRange: '4-99 años'
  },
  {
    id: 8,
    name: 'Dinosaurio T-Rex Realista',
    price: 44.99,
    originalPrice: 54.99,
    category: 'dinosaurios',
    image: 'https://images.unsplash.com/photo-1693654125022-a4283a0f6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBkaW5vc2F1ciUyMGtpZHN8ZW58MXx8fHwxNzc2MzU5MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Dinosaurio T-Rex con movimiento y sonidos realistas. Incluye control remoto.',
    rating: 4.7,
    stock: 10,
    isOnSale: true,
    isFeatured: true,
    ageRange: '5-10 años'
  },
  {
    id: 9,
    name: 'Figuras de Superhéroes',
    price: 54.99,
    category: 'superheroes',
    image: 'https://images.unsplash.com/photo-1573405202162-52ba7a3e0377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFjdGlvbiUyMGZpZ3VyZXMlMjBzdXBlcmhlcm98ZW58MXx8fHwxNzc2MzU5MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Set de 5 figuras de acción de superhéroes con accesorios intercambiables.',
    rating: 4.9,
    stock: 8,
    isOnSale: false,
    isFeatured: true,
    ageRange: '6-12 años'
  },
  {
    id: 10,
    name: 'Cocina de Juguete Completa',
    price: 89.99,
    originalPrice: 119.99,
    category: 'cocina',
    image: 'https://images.unsplash.com/photo-1624895674048-ab6ed423555e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBraXRjaGVuJTIwcGxheXNldCUyMGtpZHN8ZW58MXx8fHwxNzc2MzU5MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cocina de juguete con luces, sonidos y accesorios de cocina incluidos.',
    rating: 4.8,
    stock: 6,
    isOnSale: true,
    isFeatured: true,
    ageRange: '3-8 años'
  },
  {
    id: 11,
    name: 'Piano Infantil Musical',
    price: 34.99,
    category: 'musica',
    image: 'https://images.unsplash.com/photo-1615824108598-b3b780d64862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2FsJTIwaW5zdHJ1bWVudCUyMHRveSUyMGNoaWxkcmVufGVufDF8fHx8MTc3NjM1OTM5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Piano electrónico con 24 teclas, ritmos pregrabados y función de grabación.',
    rating: 4.5,
    stock: 16,
    isOnSale: false,
    isFeatured: false,
    ageRange: '3-10 años'
  },
  {
    id: 12,
    name: 'Juego de Mesa Familiar',
    price: 27.99,
    category: 'juegos',
    image: 'https://images.unsplash.com/photo-1758687126101-b1b13b1fe700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBraWRzJTIwZmFtaWx5fGVufDF8fHx8MTc3NjM1OTM5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Juego de mesa para toda la familia. 2-6 jugadores, diversión garantizada.',
    rating: 4.6,
    stock: 20,
    isOnSale: false,
    isFeatured: false,
    ageRange: '6-99 años'
  }
];

export const banners = [
  {
    id: 1,
    title: '¡Mega Ofertas de Primavera!',
    subtitle: 'Hasta 40% de descuento en juguetes seleccionados',
    image: 'https://images.unsplash.com/photo-1633469924738-52101af51d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdvJTIwYmxvY2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc2MzU5MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Ver Ofertas'
  },
  {
    id: 2,
    title: 'Nuevos Robots Interactivos',
    subtitle: 'La tecnología más avanzada para los más pequeños',
    image: 'https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRveSUyMHJvYm90JTIwa2lkc3xlbnwxfHx8fDE3NzYzNTkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Descubrir'
  },
  {
    id: 3,
    title: 'Juguetes Educativos',
    subtitle: 'Aprende mientras te diviertes',
    image: 'https://images.unsplash.com/photo-1774464593838-85b320eb7453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBlZHVjYXRpb25hbCUyMHRveXMlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzYzNTkzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explorar'
  }
];
