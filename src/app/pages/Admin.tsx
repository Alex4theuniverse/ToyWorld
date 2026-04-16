import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { products, categories } from '../data/products';
import { ShoppingCart, DollarSign, Package, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Admin() {
  const { user } = useAuth();
  
  // Mock data for analytics
  const totalRevenue = products.reduce((sum, p) => sum + (p.price * (Math.random() * 50 + 10)), 0);
  const totalOrders = Math.floor(Math.random() * 500 + 200);
  const totalProducts = products.length;
  const totalCustomers = Math.floor(Math.random() * 1000 + 500);

  // Sales by category
  const categoryData = categories.slice(1).map(cat => {
    const categoryProducts = products.filter(p => p.category === cat.id);
    const sales = categoryProducts.reduce((sum, p) => sum + (Math.random() * 100 + 50), 0);
    return {
      name: cat.name,
      ventas: Math.floor(sales),
    };
  }).sort((a, b) => b.ventas - a.ventas);

  // Top products
  const topProducts = products
    .map(p => ({
      name: p.name.substring(0, 20),
      ventas: Math.floor(Math.random() * 100 + 20),
    }))
    .sort((a, b) => b.ventas - a.ventas)
    .slice(0, 5);

  // Monthly revenue
  const monthlyData = [
    { mes: 'Ene', ingresos: 4200, pedidos: 85 },
    { mes: 'Feb', ingresos: 3800, pedidos: 76 },
    { mes: 'Mar', ingresos: 5100, pedidos: 102 },
    { mes: 'Abr', ingresos: 6200, pedidos: 124 },
    { mes: 'May', ingresos: 5800, pedidos: 116 },
    { mes: 'Jun', ingresos: 7100, pedidos: 142 },
  ];

  // Stock status
  const stockData = [
    { name: 'En Stock', value: products.filter(p => p.stock > 10).length, color: '#22c55e' },
    { name: 'Stock Bajo', value: products.filter(p => p.stock <= 10 && p.stock > 0).length, color: '#f59e0b' },
    { name: 'Agotado', value: Math.floor(Math.random() * 5), color: '#ef4444' },
  ];

  const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#3b82f6', '#10b981', '#f97316'];

  return (
    <div>
      {/* Admin Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-black">Panel de Administración</h1>
            <p className="opacity-90">Bienvenido, {user?.name} - Gestiona tu tienda y visualiza informes en tiempo real</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-10 h-10" />
            <TrendingUp className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-sm opacity-90 mb-1">Ingresos Totales</p>
          <p className="text-3xl font-black">S/{totalRevenue.toFixed(2)}</p>
          <p className="text-xs mt-2 opacity-75">+12% vs mes anterior</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="w-10 h-10" />
            <TrendingUp className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-sm opacity-90 mb-1">Pedidos Totales</p>
          <p className="text-3xl font-black">{totalOrders}</p>
          <p className="text-xs mt-2 opacity-75">+8% vs mes anterior</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Package className="w-10 h-10" />
            <div className="text-xs opacity-75">ACTIVOS</div>
          </div>
          <p className="text-sm opacity-90 mb-1">Productos</p>
          <p className="text-3xl font-black">{totalProducts}</p>
          <p className="text-xs mt-2 opacity-75">En catálogo</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-10 h-10" />
            <TrendingUp className="w-6 h-6 opacity-75" />
          </div>
          <p className="text-sm opacity-90 mb-1">Clientes</p>
          <p className="text-3xl font-black">{totalCustomers}</p>
          <p className="text-xs mt-2 opacity-75">+15% vs mes anterior</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Revenue */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-black mb-6">Ingresos Mensuales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ingresos" stroke="#8b5cf6" strokeWidth={3} name="Ingresos (S/)" />
              <Line type="monotone" dataKey="pedidos" stroke="#ec4899" strokeWidth={3} name="Pedidos" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stock Status */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-black mb-6">Estado del Inventario</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `S/{name}: S/{value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {stockData.map((entry, index) => (
                  <Cell key={`cell-S/{index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales by Category */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-black mb-6">Ventas por Categoría</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ventas" name="Ventas Totales (S/)">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-S/{index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-black mb-6">Productos Más Vendidos</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={topProducts} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="ventas" fill="#ec4899" name="Unidades Vendidas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-black mb-6">Pedidos Recientes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-bold">ID Pedido</th>
                <th className="text-left py-3 px-4 font-bold">Cliente</th>
                <th className="text-left py-3 px-4 font-bold">Producto</th>
                <th className="text-left py-3 px-4 font-bold">Total</th>
                <th className="text-left py-3 px-4 font-bold">Estado</th>
                <th className="text-left py-3 px-4 font-bold">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, i) => {
                const randomProduct = products[Math.floor(Math.random() * products.length)];
                const statuses = ['Completado', 'En proceso', 'Enviado'];
                const statusColors = ['text-green-600 bg-green-50', 'text-yellow-600 bg-yellow-50', 'text-blue-600 bg-blue-50'];
                const statusIndex = Math.floor(Math.random() * 3);
                
                return (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold text-purple-600">#TOY{10000 + i}</td>
                    <td className="py-3 px-4">Cliente {i + 1}</td>
                    <td className="py-3 px-4">{randomProduct.name}</td>
                    <td className="py-3 px-4 font-bold">S/{randomProduct.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold S/{statusColors[statusIndex]}`}>
                        {statuses[statusIndex]}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}