import React from 'react';
import { UserCircleIcon, WifiIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-4 py-2">
        <img src="https://www.odoo.com/web/image/website/1/logo/Odoo?unique=8a1f66c" alt="Odoo" className="h-8" />
        <div className="flex items-center space-x-4">
          <WifiIcon className="h-5 w-5 text-green-500" />
          <UserCircleIcon className="h-8 w-8 text-gray-500" />
          <span className="hidden md:inline">Mitchell Admin</span>
          <button onClick={onMenuClick}>
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}