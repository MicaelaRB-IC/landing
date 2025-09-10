import React from 'react';
import { Search, Menu, MapPin, Calendar, Users } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/indiecampers_logo.webp" 
              alt="Indie Campers" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#festivals" className="text-gray-700 hover:text-purple-600 transition-colors">
              Festivals
            </a>
            <a href="#destinations" className="text-gray-700 hover:text-orange-600 transition-colors">
              Destinations
            </a>
            <a href="#vehicles" className="text-gray-700 hover:text-orange-600 transition-colors">
              Vehicles
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </a>
          </nav>
          
          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search festivals..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow">
              Book Now
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button onClick={onMenuToggle} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};