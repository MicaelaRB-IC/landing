import React from 'react';
import { ArrowRight, Users, MapPin, Shield, Clock, Wifi, Car } from 'lucide-react';

interface CampervanModel {
  id: number;
  name: string;
  image: string;
  capacity: string;
  features: string[];
  priceFrom: string;
  availability?: 'available' | 'limited' | 'unavailable';
  ctaText: string;
  ctaLink: string;
}

interface FleetSliceProps {
  title: string;
  subtitle?: string;
  campervans: CampervanModel[];
  isDynamic?: boolean; // For country-specific vs non-specific pages
}

export const FleetSlice: React.FC<FleetSliceProps> = ({
  title,
  subtitle,
  campervans,
  isDynamic = false
}) => {
  const getAvailabilityColor = (availability?: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getAvailabilityText = (availability?: string) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'limited': return 'Limited availability';
      case 'unavailable': return 'Fully booked';
      default: return 'Check availability';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Editable in Prismic */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Campervan Cards - 4 cards as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campervans.slice(0, 4).map((van) => (
            <div
              key={van.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Van Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={van.image}
                  alt={`${van.name} campervan`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-gray-900 font-bold text-sm">{van.priceFrom}</span>
                  </div>
                </div>

                {/* Availability Badge (for dynamic pages) */}
                {isDynamic && van.availability && (
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(van.availability)}`}>
                      {getAvailabilityText(van.availability)}
                    </div>
                  </div>
                )}
              </div>

              {/* Van Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {van.name}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  {van.capacity}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {van.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={van.ctaLink}
                  className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {van.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* USPs Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Unlimited Mileage
            </h3>
            <p className="text-gray-600">
              Drive as far as your festival dreams take you
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
              <Car className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              One-Way Trips
            </h3>
            <p className="text-gray-600">
              Pick up in one city, drop off in another
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock assistance for peace of mind
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Full Insurance
            </h3>
            <p className="text-gray-600">
              Comprehensive coverage included in every rental
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};