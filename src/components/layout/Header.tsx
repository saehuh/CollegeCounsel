import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search colleges, tasks..."
              className="bg-gray-100 w-64 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              3
            </span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">Emma Watson</p>
              <p className="text-xs text-gray-500">Class of 2025</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              EW
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;