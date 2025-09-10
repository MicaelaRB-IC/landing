import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

interface GridCard {
  id: number;
  image: string;
  title: string;
  teaser: string;
  link: string;
  location?: string;
  date?: string;
}

interface GridSliceProps {
  title: string;
  subtitle?: string;
  cards: GridCard[];
  columns?: 2 | 3 | 4;
}

export const GridSlice: React.FC<GridSliceProps> = ({
  title,
  subtitle,
  cards,
  columns = 3
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Editable in Prismic */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards Grid - Editable in Prismic */}
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {cards.map((card) => (
            <article
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.title} festival atmosphere`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Optional Date Badge */}
                {card.date && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-gray-900 font-medium text-sm">{card.date}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Festival Name (H2/H3 for SEO) */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {card.title}
                </h3>
                
                {/* Optional Location */}
                {card.location && (
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {card.location}
                  </div>
                )}
                
                {/* SEO Teaser */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {card.teaser}
                </p>
                
                {/* Learn More CTA */}
                <a
                  href={card.link}
                  className="group/btn inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};