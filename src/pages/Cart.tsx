import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Trash2 } from 'lucide-react';
import { ShippingForm } from '../components/ShippingForm';
import { PaymentForm } from '../components/PaymentForm';
import { ShippingDetails, PaymentDetails } from '../types';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useStore();
  const [showThankYou, setShowThankYou] = useState(false);
  const [shipping, setShipping] = useState<ShippingDetails>({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });
  const [payment, setPayment] = useState<PaymentDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
  });

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      clearCart();
      setShowThankYou(false);
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Carrito de Compras</h2>
        <p className="text-gray-600">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Carrito de Compras</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-gray-600">
                      ${item.product.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleCheckout} className="space-y-6">
            <ShippingForm shipping={shipping} onChange={setShipping} />
            <PaymentForm payment={payment} onChange={setPayment} />
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Finalizar Compra
            </button>
          </form>
        </div>
      </div>

      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              ¡Gracias por tu compra!
            </h3>
            <p>Tu pedido ha sido procesado exitosamente.</p>
          </div>
        </div>
      )}
    </div>
  );
};