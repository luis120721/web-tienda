export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'men' | 'women';
  image: string;
  description: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingDetails {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
}

export interface CheckoutData {
  shipping: ShippingDetails;
  payment: PaymentDetails;
}