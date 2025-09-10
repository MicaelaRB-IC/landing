import React from 'react';
import { ArrowRight, MapPin, Calendar, Music } from 'lucide-react';

export const SEOFooter: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main SEO Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Summer Festivals in the US: Your Ultimate Road Trip Guide
            </h2>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Experience the magic of America's summer festival season with Indie Campers, your trusted partner for unforgettable music festival road trips. From the desert landscapes of Coachella to the mystical forests of Electric Forest, our premium campervan rentals provide the perfect mobile basecamp for your festival adventures.
              </p>
              
              <p>
                Summer 2025 promises to be an incredible year for music festivals across the United States. Whether you're drawn to the electronic beats of EDM festivals, the diverse lineups of multi-genre events, or the intimate vibes of indie music gatherings, there's a perfect festival waiting for you. Our comprehensive guide covers over 150 festivals across all 50 states, helping you plan the ultimate summer of music and adventure.
              </p>
              
              <p>
                Why choose a campervan for your festival experience? Skip the crowded campgrounds, long bathroom lines, and uncomfortable sleeping arrangements. Our fully-equipped campervans offer private bathrooms, comfortable beds, kitchen facilities, and climate control – everything you need to recharge between sets and arrive at each day refreshed and ready to dance.
              </p>
              
              <p>
                From coast to coast, America's festival circuit offers something for every music lover. West Coast favorites like Outside Lands in San Francisco and Lightning in a Bottle in California showcase the region's innovative spirit, while East Coast classics like Governors Ball in New York and Firefly in Delaware bring together diverse musical acts in stunning settings. The Midwest delivers with Electric Forest in Michigan and Lollapalooza in Chicago, while the South offers unique experiences like Bonnaroo in Tennessee and Austin City Limits in Texas.
              </p>
              
              <p>
                Planning your festival road trip has never been easier with Indie Campers. Our one-way rental options let you create epic cross-country adventures, picking up your campervan in one city and dropping it off in another. With unlimited mileage, 24/7 roadside assistance, and comprehensive insurance included, you can focus on what matters most – the music, the memories, and the magic of the festival experience.
              </p>
              
              <p>
                <strong>Ready to start your festival adventure?</strong> Browse our collection of premium campervans, each designed for comfort and equipped with everything you need for the perfect festival experience. From compact couples' vans to spacious group vehicles, we have the perfect home-on-wheels for your summer of music.
              </p>
            </div>
          </div>
          
          {/* Quick Links Sidebar */}
          <div className="space-y-8">
            {/* Festival Categories */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Music className="h-5 w-5 mr-2 text-orange-500" />
                Festival Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/festivals/electronic" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Electronic & EDM Festivals
                  </a>
                </li>
                <li>
                  <a href="/festivals/rock" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Rock & Alternative Festivals
                  </a>
                </li>
                <li>
                  <a href="/festivals/indie" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Indie & Folk Festivals
                  </a>
                </li>
                <li>
                  <a href="/festivals/multi-genre" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Multi-Genre Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Regional Guides */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-pink-500" />
                Regional Festival Guides
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/road-trips/west-coast" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    West Coast Festival Road Trip
                  </a>
                </li>
                <li>
                  <a href="/road-trips/east-coast" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    East Coast Festival Circuit
                  </a>
                </li>
                <li>
                  <a href="/road-trips/midwest" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Midwest Festival Adventure
                  </a>
                </li>
                <li>
                  <a href="/road-trips/southwest" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Southwest Desert Festivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Campervan Resources */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                Planning Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/vehicles" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Campervan Models
                  </a>
                </li>
                <li>
                  <a href="/guides/festival-packing" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Festival Packing Guide
                  </a>
                </li>
                <li>
                  <a href="/guides/camping-tips" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Festival Camping Tips
                  </a>
                </li>
                <li>
                  <a href="/guides/road-trip-routes" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Best Road Trip Routes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};