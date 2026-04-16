import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🎁</div>
              <h3 className="text-xl font-bold">ToyWorld</h3>
            </div>
            <p className="text-gray-400 text-sm">
              La mejor tienda de juguetes para hacer felices a los más pequeños. Calidad y diversión garantizada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Inicio</a></li>
              <li><a href="/categorias/all" className="text-gray-400 hover:text-white transition">Productos</a></li>
              <li><a href="/ofertas" className="text-gray-400 hover:text-white transition">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Envíos y Devoluciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@toyworld.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 ToyWorld. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
