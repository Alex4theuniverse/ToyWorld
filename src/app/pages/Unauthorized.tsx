import { Link } from 'react-router';
import { ShieldX } from 'lucide-react';

export function Unauthorized() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <ShieldX className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-5xl font-black mb-4">Acceso Denegado</h1>
        <p className="text-xl text-gray-600 mb-8">
          No tienes permisos para acceder a esta sección
        </p>
        <div className="space-y-4">
          <p className="text-gray-500">
            Esta área está restringida solo para administradores
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Volver al Inicio
            </Link>
            <Link
              to="/perfil"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition"
            >
              Ir a Mi Perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
