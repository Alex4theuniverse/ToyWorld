import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Flame } from 'lucide-react';

export function Offers() {
  const onSaleProducts = products.filter(p => p.isOnSale);

  return (
    <div>
      <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 md:p-12 mb-8 text-white text-center">
        <Flame className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-5xl font-black mb-4">¡Ofertas Especiales! 🔥</h1>
        <p className="text-2xl mb-2">Hasta 40% de descuento</p>
        <p className="text-lg opacity-90">No te pierdas estas increíbles promociones</p>
      </div>

      {onSaleProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {onSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎁</div>
          <h2 className="text-2xl font-black mb-2">No hay ofertas disponibles</h2>
          <p className="text-gray-600">Vuelve pronto para ver nuevas promociones</p>
        </div>
      )}
    </div>
  );
}
