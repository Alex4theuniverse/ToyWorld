import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Admin } from './pages/Admin';
import { Offers } from './pages/Offers';
import { Login } from './pages/Login';
import { UserProfile } from './pages/UserProfile';
import { Unauthorized } from './pages/Unauthorized';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'categorias/:categoryId', Component: CategoryPage },
      { path: 'producto/:productId', Component: ProductDetail },
      { path: 'carrito', Component: Cart },
      { 
        path: 'checkout', 
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      { 
        path: 'perfil', 
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      { 
        path: 'admin', 
        element: (
          <ProtectedRoute requireAdmin>
            <Admin />
          </ProtectedRoute>
        ),
      },
      { path: 'ofertas', Component: Offers },
      { path: 'no-autorizado', Component: Unauthorized },
    ],
  },
]);