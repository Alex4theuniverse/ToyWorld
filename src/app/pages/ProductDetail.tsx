import { useParams, Link } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star, Package, Shield, Truck, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-3xl font-black mb-4">Producto no encontrado</h2>
        <Link
          to="/categorias/all"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold"
        >
          Ver todos los productos
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} añadido al carrito! 🎉`);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/categorias/all"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a productos
        </Link>
      </div>

      {/* Product Detail */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl"
            />
            {product.isOnSale && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                ¡OFERTA!
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-black mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-bold">
                {product.rating} / 5
              </span>
              <span className="text-gray-500">(128 reseñas)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-5xl font-black text-purple-600">
                  S/{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      S/{product.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-600">IVA incluido</p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-bold text-xl mb-2">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Details */}
            <div className="bg-purple-50 rounded-xl p-4 mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-purple-600" />
                <span><strong>Edad recomendada:</strong> {product.ageRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span><strong>Stock disponible:</strong> {product.stock} unidades</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-purple-600" />
                <span><strong>Envío:</strong> Gratis en compras +S/50</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 font-bold text-xl hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="px-6 py-2 font-bold text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-4 py-2 font-bold text-xl hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Añadir al Carrito
              </button>
            </div>

            {/* Safety info */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Advertencia:</strong> Este juguete no es adecuado para menores de 3 años. Contiene piezas pequeñas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-black mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
