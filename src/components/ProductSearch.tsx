import React, { useState } from 'react';
import { searchProducts } from '../services/product.service';
import { Producto } from '../types';

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Producto[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchProducts(searchTerm);
      setProducts(results as Producto[]);
    } catch (error) {
      console.error('Error buscando productos:', error);
      setError('Error al buscar productos. Intente nuevamente.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute inset-y-0 left-0 pl-3">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {loading && (
        <div className="mt-4 text-center">Cargando productos...</div>
      )}
      {products !== null && products.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          No se encontraron productos
        </div>
      )}
      
      {error && (
        <div className="mt-4 text-red-500 text-center">{error}</div>
      )}

      {products && products.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Productos encontrados:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex-1">
                  <div className="font-medium mb-2 truncate">{product.nombre}</div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Ref:</span> {product.referencia}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Precio:</span> ${product.precio_venta.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Cantidad:</span> {product.cantidad}
                  </div>
                  <div className="text-xs text-gray-500 italic">
                    {product.categoria_id}
                  </div>
                </div>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => {/* Agregar función para agregar al carrito */}}
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
