import { Product, Category } from '../types';

export const categories: Category[] = [
  { 
    id: 1, 
    name: 'Escritorios', 
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=500&q=80'
  },
  { 
    id: 2, 
    name: 'Sillas', 
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=500&q=80'
  },
  { 
    id: 3, 
    name: 'Almacenamiento', 
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500&q=80'
  },
  { 
    id: 4, 
    name: 'Accesorios', 
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=500&q=80'
  },
];

export const products: Product[] = [
  { id: 1, name: 'Escritorio Esquina Izquierda', price: 97.75, image: 'https://placehold.co/200x150', categoryId: 1 },
  { id: 2, name: 'Escritorio Esquina Derecha', price: 169.05, image: 'https://placehold.co/200x150', categoryId: 1 },
  { id: 3, name: 'Escritorio Personalizable', price: 920.46, image: 'https://placehold.co/200x150', categoryId: 1 },
  { id: 4, name: 'Escritorio para 4 Personas', price: 2702.50, image: 'https://placehold.co/200x150', categoryId: 1 },
  { id: 5, name: 'Silla Ejecutiva', price: 368.00, image: 'https://placehold.co/200x150', categoryId: 2 },
  { id: 6, name: 'Silla de Visita', price: 185.50, image: 'https://placehold.co/200x150', categoryId: 2 },
  { id: 7, name: 'Archivero', price: 517.50, image: 'https://placehold.co/200x150', categoryId: 3 },
  { id: 8, name: 'Lámpara de Escritorio', price: 89.99, image: 'https://placehold.co/200x150', categoryId: 4 },
];