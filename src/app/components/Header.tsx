import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X, User, LogOut, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export function Header() {
  const { getTotalItems } = useCart();
  const { user, logout, isAdmin, isAuthenticated } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl">🎁</div>
            <div>
              <h1 className="text-2xl font-black">ToyWorld</h1>
              <p className="text-xs opacity-90">Diversión sin límites</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`hover:text-yellow-300 transition ${
                isActive('/') ? 'text-yellow-300 font-bold' : ''
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/categorias/all"
              className={`hover:text-yellow-300 transition ${
                location.pathname.startsWith('/categorias') ? 'text-yellow-300 font-bold' : ''
              }`}
            >
              Productos
            </Link>
            <Link
              to="/ofertas"
              className={`hover:text-yellow-300 transition ${
                isActive('/ofertas') ? 'text-yellow-300 font-bold' : ''
              }`}
            >
              Ofertas 🔥
            </Link>
            {isAdmin() && (
              <Link
                to="/admin"
                className={`hover:text-yellow-300 transition flex items-center gap-1 ${
                  isActive('/admin') ? 'text-yellow-300 font-bold' : ''
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Admin
              </Link>
            )}
          </nav>

          {/* Cart and User */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/carrito" className="relative hover:scale-110 transition">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated() ? (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/perfil"
                  className="flex items-center gap-2 hover:text-yellow-300 transition"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    {user?.avatar || '👤'}
                  </div>
                  <span className="font-bold">{user?.name?.split(' ')[0]}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-yellow-300 transition"
                  title="Cerrar sesión"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition font-bold"
              >
                <User className="w-4 h-4" />
                Ingresar
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/categorias/all"
              className="block py-2 hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/ofertas"
              className="block py-2 hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Ofertas 🔥
            </Link>
            {isAdmin() && (
              <Link
                to="/admin"
                className="block py-2 hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                👑 Admin
              </Link>
            )}
            <div className="border-t border-white/20 my-2 pt-2">
              {isAuthenticated() ? (
                <>
                  <Link
                    to="/perfil"
                    className="block py-2 hover:text-yellow-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {user?.avatar} Mi Perfil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block py-2 hover:text-yellow-300 transition w-full text-left"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block py-2 hover:text-yellow-300 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ingresar
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}