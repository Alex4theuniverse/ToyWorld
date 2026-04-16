import { useAuth } from '../context/AuthContext';
import { User, Package, MapPin, CreditCard, Heart, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada correctamente');
    navigate('/');
  };

  // Datos de ejemplo para el usuario
  const mockOrders = [
    { id: 'TOY10234', date: '2026-04-10', total: 89.99, status: 'Entregado' },
    { id: 'TOY10198', date: '2026-03-25', total: 124.50, status: 'En camino' },
    { id: 'TOY10145', date: '2026-03-15', total: 54.99, status: 'Entregado' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-black mb-8">Mi Perfil</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            {/* User Info */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                {user?.avatar || '👤'}
              </div>
              <h2 className="text-2xl font-black mb-1">{user?.name}</h2>
              <p className="text-gray-600">{user?.email}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                {user?.role === 'admin' ? '👑 Administrador' : '✨ Cliente'}
              </span>
            </div>

            {/* Menu */}
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-bold">
                <User className="w-5 h-5" />
                Mi Información
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
                <Package className="w-5 h-5" />
                Mis Pedidos
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
                <MapPin className="w-5 h-5" />
                Direcciones
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
                <CreditCard className="w-5 h-5" />
                Métodos de Pago
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
                <Heart className="w-5 h-5" />
                Lista de Deseos
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
                <Settings className="w-5 h-5" />
                Configuración
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition font-bold"
              >
                <LogOut className="w-5 h-5" />
                Cerrar Sesión
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">Información Personal</h2>
              <button className="text-purple-600 hover:text-purple-700 font-bold">
                Editar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={user?.name || ''}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">Pedidos Recientes</h2>
              <button className="text-purple-600 hover:text-purple-700 font-bold">
                Ver todos
              </button>
            </div>

            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-purple-600">#{order.id}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        order.status === 'Entregado'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{new Date(order.date).toLocaleDateString('es-ES')}</span>
                    <span className="font-bold">S/{order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Addresses */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">Direcciones Guardadas</h2>
              <button className="text-purple-600 hover:text-purple-700 font-bold">
                + Añadir
              </button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-purple-500 rounded-lg p-4 bg-purple-50">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold">Casa</h3>
                  <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full font-bold">
                    Principal
                  </span>
                </div>
                <p className="text-gray-700">
                  Calle Principal 123<br />
                  28001 Madrid, España<br />
                  Tel: +34 600 000 000
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold mb-2">Oficina</h3>
                <p className="text-gray-700">
                  Av. Empresarial 45<br />
                  28020 Madrid, España<br />
                  Tel: +34 600 111 222
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
