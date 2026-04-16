import { Link, useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-3xl font-black mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-8">
          ¡Añade algunos juguetes increíbles para empezar!
        </p>
        <Link
          to="/categorias/all"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Explorar Productos
        </Link>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div>
      <h1 className="text-4xl font-black mb-8 flex items-center gap-3">
        <ShoppingBag className="w-10 h-10 text-purple-600" />
        Mi Carrito de Compras
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6"
            >
              {/* Image */}
              <Link to={`/producto/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg hover:scale-105 transition"
                />
              </Link>

              {/* Info */}
              <div className="flex-1">
                <Link to={`/producto/${item.id}`}>
                  <h3 className="font-bold text-xl mb-2 hover:text-purple-600 transition">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3">{item.ageRange}</p>
                <p className="text-2xl font-bold text-purple-600">
                  S/{item.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition"
                    disabled={item.quantity >= item.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-black mb-6">Resumen del Pedido</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">S/{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="font-bold">
                  {shipping === 0 ? (
                    <span className="text-green-600">¡GRATIS!</span>
                  ) : (
                    `S/${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {subtotal < 50 && (
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <p className="text-blue-800">
                    Añade <strong>S/{(50 - subtotal).toFixed(2)}</strong> más para envío gratis
                  </p>
                </div>
              )}
              <div className="border-t pt-3 flex justify-between text-xl">
                <span className="font-black">Total</span>
                <span className="font-black text-purple-600">
                  S/{total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Proceder al Pago
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/categorias/all"
              className="block text-center text-purple-600 hover:text-purple-700 font-bold mt-4"
            >
              Continuar Comprando
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="text-2xl">🔒</div>
                <span>Pago 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="text-2xl">↩️</div>
                <span>Devoluciones en 30 días</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="text-2xl">✅</div>
                <span>Garantía de calidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
