import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <img 
              src="/indiecampers_logo.webp" 
              alt="Indie Campers" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your gateway to unforgettable festival experiences. Premium campervans for the ultimate music adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Festivals</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electronic Festivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rock Festivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Multi-Genre Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Regional Festivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Festival Calendar</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Campervan Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Festival Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Group Bookings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">24/7 Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-orange-400" />
                <span>1-800-CAMPERS</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-orange-400" />
                <span>hello@indiecampers.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 IndieCampers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};