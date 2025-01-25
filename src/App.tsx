import React, { useState } from 'react';
import { MagnifyingGlassIcon, HomeIcon, UserCircleIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Categories } from './components/Categories';
import { categories, products } from './data';
import { CartItem, Product } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Gabinete Grande', quantity: 1.00, price: 368.00, units: 'Unidades' },
    { id: 2, name: 'Caja de Almacenamiento', quantity: 1.00, price: 18.17, units: 'Unidades' },
    { id: 3, name: 'Bandeja de Cartas', quantity: 1.00, price: 5.52, units: 'Unidades' },
  ]);
  const [selectedCustomer] = useState('Anita Oliver');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const updateQuantity = (id: number, increment: boolean) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(0, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, true);
    } else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        units: 'Unidades'
      }]);
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  const filteredProducts = products.filter(product => 
    (selectedCategory === null || product.categoryId === selectedCategory) &&
    (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
        {/* Left Panel - Cart */}
        <div className="w-full md:w-1/3 bg-white flex flex-col order-2 md:order-1">
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      {item.quantity} {item.units} x ${item.price.toFixed(2)} / {item.units}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, false)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, true)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                    <div className="ml-4 font-medium">
                      ${(item.quantity * item.price).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total section */}
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>IVA (16%): </span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold mt-2 text-xl">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Customer section */}
            <div className="mt-4 flex items-center gap-2">
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
              <span className="text-blue-600">{selectedCustomer}</span>
            </div>
          </div>
          
          <div className="bg-purple-700 text-white p-4 text-center">
            <span className="text-xl">Pago</span>
          </div>
        </div>

        {/* Right Panel - Products */}
        <div className="w-full md:w-2/3 p-4 bg-gray-100 order-1 md:order-2 overflow-auto">
          <div className="flex items-center space-x-4 mb-4">
            <HomeIcon className="h-6 w-6" />
            <span className="text-gray-500">/</span>
            <span>Productos</span>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>

          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded mb-2" />
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-purple-600">${product.price.toFixed(2)}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;