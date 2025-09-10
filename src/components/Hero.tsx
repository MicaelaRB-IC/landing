import React from 'react';
import { Search, Star, Users, Shield, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Editable in Prismic */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* H1 Headline - Editable in Prismic */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover the Best Summer
          <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Festivals in the US
          </span>
        </h1>
        
        {/* SEO Intro Text - Editable in Prismic */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Experience unforgettable music festivals across America with Indie Campers. 
          From Coachella to Burning Man, travel in comfort and style with our premium campervan rentals.
        </p>
        
        {/* Search Widget - Mandatory, Consistent with IC pages */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Pick-up Location</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white">
                <option>Los Angeles, CA</option>
                <option>San Francisco, CA</option>
                <option>Las Vegas, NV</option>
                <option>Denver, CO</option>
              </select>
            </div>
            
            {/* Check-in */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                defaultValue="2025-06-15"
              />
            </div>
            
            {/* Check-out */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                defaultValue="2025-06-22"
              />
            </div>
            
            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
        
        {/* Reviews/Trustworthiness Widget - Mandatory */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/90">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 font-medium">4.9/5 from 10,000+ reviews</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-orange-400" />
            <span>50,000+ happy festival-goers</span>
          </div>
          
          <div className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-green-400" />
            <span>Fully insured & 24/7 support</span>
          </div>
          
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-blue-400" />
            <span>Award-winning service</span>
          </div>
        </div>
      </div>
    </section>
  );
};