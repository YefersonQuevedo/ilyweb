import React, { useState } from 'react';
import { ViewColumnsIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { Category } from '../types';

interface CategoriesProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number | null) => void;
}

export function Categories({ categories, selectedCategory, onSelectCategory }: CategoriesProps) {
  const [showImages, setShowImages] = useState(true);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Categorías</h2>
        <button
          onClick={() => setShowImages(!showImages)}
          className="p-2 hover:bg-gray-100 rounded-full"
          title={showImages ? "Ver lista" : "Ver imágenes"}
        >
          {showImages ? (
            <ListBulletIcon className="h-5 w-5" />
          ) : (
            <ViewColumnsIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {showImages ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          <button
            onClick={() => onSelectCategory(null)}
            className={`relative rounded-lg overflow-hidden aspect-[4/3] ${
              selectedCategory === null ? 'ring-2 ring-purple-600' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-medium text-lg">Todos</span>
            </div>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`relative rounded-lg overflow-hidden aspect-[4/3] ${
                selectedCategory === category.id ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-medium text-lg">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg ${
              selectedCategory === null ? 'bg-purple-600 text-white' : 'bg-white'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg ${
                selectedCategory === category.id ? 'bg-purple-600 text-white' : 'bg-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}