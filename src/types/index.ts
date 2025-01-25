export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  units: string;
}