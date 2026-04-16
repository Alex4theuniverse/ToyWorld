import { Link } from 'react-router';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Sparkles, TrendingUp, Gift } from 'lucide-react';

export function Home() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const onSaleProducts = products.filter(p => p.isOnSale).slice(0, 4);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-black mb-6 flex items-center gap-2">
          <Gift className="w-8 h-8 text-purple-600" />
          Explora por Categorías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(1).map((category) => (
            <Link
              key={category.id}
              to={`/categorias/${category.id}`}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-2">{category.icon}</div>
              <p className="font-bold text-gray-900">{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            Productos Destacados
          </h2>
          <Link
            to="/categorias/all"
            className="text-purple-600 hover:text-purple-700 font-bold"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8" />
            <h2 className="text-3xl font-black">¡Ofertas Especiales!</h2>
          </div>
          <p className="text-xl mb-4">No te pierdas nuestras increíbles promociones</p>
          <Link
            to="/ofertas"
            className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Ver todas las ofertas
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {onSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">🚚</div>
          <h3 className="font-bold text-xl mb-2">Envío Gratis</h3>
          <p className="text-gray-600">En compras superiores a S/50</p>
        </div>
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">🔒</div>
          <h3 className="font-bold text-xl mb-2">Pago Seguro</h3>
          <p className="text-gray-600">100% protección garantizada</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <div className="text-5xl mb-3">↩️</div>
          <h3 className="font-bold text-xl mb-2">Devolución Fácil</h3>
          <p className="text-gray-600">30 días para devoluciones</p>
        </div>
      </section>
    </div>
  );
}
