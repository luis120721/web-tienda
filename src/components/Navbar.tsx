import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';
import { UserMenu } from './UserMenu';

export const Navbar: React.FC = () => {
  const { cart } = useStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-800 font-serif tracking-wide hover:text-blue-600 transition-colors duration-200"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Tienda de Moda
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};