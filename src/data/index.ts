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

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:5000/api/products');
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    
    const data = await response.json();
    
    // Mapear los datos de la API al formato esperado
    return data.map((product: any) => ({
      id: product.ID,
      name: product.nombre,
      price: parseFloat(product.precio),
      image: product.imagen || 'https://placehold.co/200x150',
      categoryId: product.categoria_id || 1
    }));
    
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
