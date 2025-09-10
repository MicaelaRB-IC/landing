import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

interface FestivalCard {
  id: number;
  name: string;
  location: string;
  date: string;
  image: string;
  teaser: string;
  slug: string;
}

const festivals: FestivalCard[] = [
  {
    id: 1,
    name: "Coachella Valley Music Festival",
    location: "Indio, California",
    date: "April 11-13 & 18-20, 2025",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    teaser: "Experience the ultimate desert festival with world-class artists and iconic art installations in the California desert.",
    slug: "coachella-2025"
  },
  {
    id: 2,
    name: "Electric Forest",
    location: "Rothbury, Michigan",
    date: "June 26-29, 2025",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    teaser: "Dance among the trees in this magical electronic music wonderland featuring immersive art and forest camping.",
    slug: "electric-forest-2025"
  },
  {
    id: 3,
    name: "Burning Man",
    location: "Black Rock Desert, Nevada",
    date: "August 25 - September 2, 2025",
    image: "https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    teaser: "Join the ultimate self-expression gathering in the Nevada desert with art, music, and radical community.",
    slug: "burning-man-2025"
  },
  {
    id: 4,
    name: "Bonnaroo Music Festival",
    location: "Manchester, Tennessee",
    date: "June 12-15, 2025",
    image: "https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    teaser: "Four days of music, arts, and positive vibes on a 700-acre farm in Tennessee's countryside.",
    slug: "bonnaroo-2025"
  },
  {
    id: 5,
    name: "Outside Lands",
    location: "San Francisco, California",
    date: "August 8-10, 2025",
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    teaser: "San Francisco's premier music festival combining world-class artists with the city's incredible food and wine scene.",
    slug: "outside-lands-2025"
  },
  {
    id: 6,
    name: "Lollapalooza Chicago",
    location: "Chicago, Illinois",
    date: "July 31 - August 3, 2025",
    image: "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    teaser: "Chicago's iconic music festival featuring diverse genres against the stunning backdrop of the city skyline.",
    slug: "lollapalooza-chicago-2025"
  }
];

export const FeaturedFestivals: React.FC = () => {
  return (
    <section id="festivals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Summer Festivals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore America's most iconic music festivals and plan your perfect campervan adventure
          </p>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival) => (
            <article
              key={festival.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Festival Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={festival.image}
                  alt={`${festival.name} festival atmosphere`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-gray-900 font-medium text-sm">{festival.date}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Festival Name (H3 for SEO) */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {festival.name}
                </h3>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  {festival.location}
                </div>
                
                {/* SEO Teaser */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {festival.teaser}
                </p>
                
                {/* Learn More CTA */}
                <a
                  href={`/festivals/${festival.slug}`}
                  className="group/btn inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            View All Summer Festivals
          </button>
        </div>
      </div>
    </section>
  );
};