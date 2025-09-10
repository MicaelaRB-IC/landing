import React from 'react';
import { ArrowRight, Users, MapPin, Shield, Clock } from 'lucide-react';

interface CampervanModel {
  id: number;
  name: string;
  image: string;
  capacity: string;
  features: string[];
  priceFrom: string;
  slug: string;
}

const campervanModels: CampervanModel[] = [
  {
    id: 1,
    name: "Festival Cruiser",
    image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    capacity: "2-4 people",
    features: ["Solar panels", "Outdoor shower", "Festival gear storage", "Sound system"],
    priceFrom: "$89/day",
    slug: "festival-cruiser"
  },
  {
    id: 2,
    name: "Desert Explorer",
    image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    capacity: "4-6 people",
    features: ["AC/Heating", "Large water tank", "Dust protection", "Extra storage"],
    priceFrom: "$129/day",
    slug: "desert-explorer"
  },
  {
    id: 3,
    name: "Group Adventure",
    image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    capacity: "6-8 people",
    features: ["Multiple beds", "Large kitchen", "Entertainment system", "Group seating"],
    priceFrom: "$179/day",
    slug: "group-adventure"
  }
];

const usps = [
  {
    icon: MapPin,
    title: "Unlimited Mileage",
    description: "Drive as far as your festival dreams take you"
  },
  {
    icon: ArrowRight,
    title: "One-Way Trips",
    description: "Pick up in one city, drop off in another"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for peace of mind"
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description: "Comprehensive coverage included in every rental"
  }
];

export const CampervanTieIn: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Best Way to Experience Festivals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skip the crowded campgrounds and uncomfortable tents. Our premium campervans offer the perfect base camp for your festival adventures, combining comfort, convenience, and style.
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {usps.map((usp, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mb-4">
                <usp.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {usp.title}
              </h3>
              <p className="text-gray-600">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Campervan Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campervanModels.map((van) => (
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
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-gray-900 font-bold text-sm">{van.priceFrom}</span>
                  </div>
                </div>
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
                  {van.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`/vehicles/${van.slug}`}
                  className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Browse All Campervans
          </button>
        </div>
      </div>
    </section>
  );
};