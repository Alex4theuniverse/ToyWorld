import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { CreditCard, Wallet, Building2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    toast.success('¡Pedido realizado con éxito! 🎉');

    // Clear cart after 3 seconds and redirect
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !orderComplete) {
    navigate('/carrito');
    return null;
  }

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-black mb-4">¡Pedido Confirmado!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Tu pedido ha sido procesado exitosamente
          </p>
          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <p className="text-green-800 font-bold mb-2">
              Número de pedido: #TOY{Math.floor(Math.random() * 100000)}
            </p>
            <p className="text-green-700">
              Recibirás un correo electrónico con los detalles de tu pedido
            </p>
          </div>
          <p className="text-gray-500">
            Redirigiendo a la página principal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-black mb-8">Finalizar Compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-black mb-6">Información de Envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Apellidos</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Pérez"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2">Dirección</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Calle Principal 123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Ciudad</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Madrid"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Código Postal</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="28001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-black mb-6">Método de Pago</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition ${
                    paymentMethod === 'card'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                >
                  <CreditCard className="w-8 h-8 text-purple-600" />
                  <span className="font-bold">Tarjeta</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition ${
                    paymentMethod === 'paypal'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                >
                  <Wallet className="w-8 h-8 text-purple-600" />
                  <span className="font-bold">PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition ${
                    paymentMethod === 'bank'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                >
                  <Building2 className="w-8 h-8 text-purple-600" />
                  <span className="font-bold">Transferencia</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Número de Tarjeta</label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Fecha Exp.</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">CVV</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <p className="text-blue-800 mb-4">
                    Serás redirigido a PayPal para completar el pago
                  </p>
                  <div className="text-5xl">💳</div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-green-800 font-bold mb-2">
                    Datos para transferencia:
                  </p>
                  <p className="text-sm text-green-700">
                    IBAN: ES12 1234 5678 9012 3456 7890<br />
                    Concepto: Pedido ToyWorld
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-bold text-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Procesando...' : `Pagar S/${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-black mb-6">Resumen</h2>

            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x S/{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
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
              <div className="border-t pt-2 flex justify-between text-xl">
                <span className="font-black">Total</span>
                <span className="font-black text-purple-600">
                  S/{total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
