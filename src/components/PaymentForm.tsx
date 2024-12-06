import React from 'react';
import { PaymentDetails } from '../types';
import { CreditCard } from 'lucide-react';

interface PaymentFormProps {
  payment: PaymentDetails;
  onChange: (payment: PaymentDetails) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ payment, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <CreditCard className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold">Información de Pago</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Número de Tarjeta
          </label>
          <input
            type="text"
            id="cardNumber"
            value={payment.cardNumber}
            onChange={(e) => onChange({ ...payment, cardNumber: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Fecha de Expiración
            </label>
            <input
              type="text"
              id="expiryDate"
              value={payment.expiryDate}
              onChange={(e) => onChange({ ...payment, expiryDate: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/AA"
              maxLength={5}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={payment.cvv}
              onChange={(e) => onChange({ ...payment, cvv: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="123"
              maxLength={4}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
            Nombre en la Tarjeta
          </label>
          <input
            type="text"
            id="cardHolder"
            value={payment.cardHolder}
            onChange={(e) => onChange({ ...payment, cardHolder: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};