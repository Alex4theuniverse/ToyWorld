import { useParams, Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';

export function CategoryPage() {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const currentCategory = categories.find(c => c.id === categoryId);
  
  let filteredProducts = categoryId === 'all' 
    ? products 
    : products.filter(p => p.category === categoryId);

  // Apply price filter
  if (priceRange === 'under25') {
    filteredProducts = filteredProducts.filter(p => p.price < 25);
  } else if (priceRange === '25to50') {
    filteredProducts = filteredProducts.filter(p => p.price >= 25 && p.price <= 50);
  } else if (priceRange === 'over50') {
    filteredProducts = filteredProducts.filter(p => p.price > 50);
  }

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.isFeatured ? 1 : -1;
    }
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-2">
          {currentCategory && <span className="text-5xl">{currentCategory.icon}</span>}
          <h1 className="text-4xl font-black text-gray-900">
            {currentCategory?.name || 'Todos los Productos'}
          </h1>
        </div>
        <p className="text-gray-600">
          {sortedProducts.length} productos disponibles
        </p>
      </div>

      {/* Categories Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categorias/${cat.id}`}
            className={`px-4 py-2 rounded-full font-bold transition ${
              cat.id === categoryId
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.icon} {cat.name}
          </Link>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-purple-600" />
          <h3 className="font-bold text-lg">Filtros y Ordenamiento</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sort By */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Ordenar por
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="featured">Destacados</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Valorados</option>
              <option value="name">Nombre A-Z</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Rango de Precio
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Todos los precios</option>
              <option value="under25">Menos de S/25</option>
              <option value="25to50">S/25 - S/50</option>
              <option value="over50">Más de S/50</option>
            </select>
          </div>

          {/* View Mode (decorative) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Vista
            </label>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2">
                <Grid className="w-4 h-4" />
                Cuadrícula
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center gap-2 opacity-50">
                <List className="w-4 h-4" />
                Lista
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">😔</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-gray-600 mb-6">
            Intenta ajustar los filtros o explora otras categorías
          </p>
          <Link
            to="/categorias/all"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Ver todos los productos
          </Link>
        </div>
      )}
    </div>
  );
}
