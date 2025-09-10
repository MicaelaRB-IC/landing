import React, { useState } from 'react';
import { Filter, Search, Calendar, MapPin, Music } from 'lucide-react';

const genres = ['All', 'Electronic', 'Rock', 'Hip-Hop', 'Indie', 'Country', 'Pop', 'Multi-Genre'];
const regions = ['All Regions', 'West Coast', 'East Coast', 'Midwest', 'South', 'Southwest'];
const months = ['All Months', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

export const FilterSection: React.FC = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [activeMonth, setActiveMonth] = useState('All Months');

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search festivals, artists, or locations..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-6">
          {/* Genre filter */}
          <div>
            <div className="flex items-center mb-3">
              <Music className="h-5 w-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Music Genre</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeGenre === genre
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Region filter */}
          <div>
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Region</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeRegion === region
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Time filter */}
          <div>
            <div className="flex items-center mb-3">
              <Calendar className="h-5 w-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">When</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => setActiveMonth(month)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeMonth === month
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active filters summary */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-purple-800">
              <Filter className="h-4 w-4 mr-2" />
              <span>
                Showing festivals: {activeGenre} • {activeRegion} • {activeMonth}
              </span>
            </div>
            <button className="text-purple-600 text-sm font-medium hover:underline">
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};