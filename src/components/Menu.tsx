import React from 'react';
import { ComputerDesktopIcon, CurrencyDollarIcon, ArrowPathIcon, PlusIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const menuItems = [
    { icon: <ComputerDesktopIcon className="h-5 w-5" />, text: 'Instalar aplicación' },
    { icon: <CurrencyDollarIcon className="h-5 w-5" />, text: 'Entrada/salida de efectivo' },
    { icon: <ArrowPathIcon className="h-5 w-5" />, text: 'Volver a cargar los productos' },
    { icon: <PlusIcon className="h-5 w-5" />, text: 'Crear producto' },
    { icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />, text: 'Salir (sin cerrar sesión)' },
    { icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />, text: 'Cerrar caja registradora' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}