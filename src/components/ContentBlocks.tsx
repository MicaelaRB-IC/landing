import React from 'react';
import { MapPin, Play, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// Text + Image Block Component
interface TextImageBlockProps {
  title: string;
  content: string;
  image: string;
  imagePosition: 'left' | 'right';
  richMedia?: {
    type: 'video' | 'social' | 'embed';
    url: string;
  };
  internalLinks?: Array<{
    text: string;
    url: string;
  }>;
}

export const TextImageBlock: React.FC<TextImageBlockProps> = ({ 
  title, 
  content, 
  image, 
  imagePosition,
  richMedia,
  internalLinks = []
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imagePosition === 'right' ? '' : 'lg:grid-flow-col-dense'
        }`}>
          {/* Text Content */}
          <div className={imagePosition === 'right' ? '' : 'lg:col-start-2'}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed mb-6">
              <p>{content}</p>
            </div>
            
            {/* Internal Links for SEO */}
            {internalLinks.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {internalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors group"
                  >
                    {link.text}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Image */}
          <div className={imagePosition === 'right' ? '' : 'lg:col-start-1'}>
            {richMedia ? (
              <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
                {richMedia.type === 'video' && (
                  <iframe
                    src={richMedia.url}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded video content"
                  />
                )}
                {richMedia.type === 'social' && (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-600">Social media embed placeholder</p>
                  </div>
                )}
                {richMedia.type === 'embed' && (
                  <iframe
                    src={richMedia.url}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Embedded content"
                  />
                )}
              </div>
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Two-Column List Block Component
interface TwoColumnListProps {
  title: string;
  subtitle?: string;
  leftColumn: {
    title: string;
    items: string[];
  };
  rightColumn: {
    title: string;
    items: string[];
  };
}

export const TwoColumnListBlock: React.FC<TwoColumnListProps> = ({
  title,
  subtitle,
  leftColumn,
  rightColumn
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Two Column Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {leftColumn.title}
            </h3>
            <ul className="space-y-4">
              {leftColumn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {rightColumn.title}
            </h3>
            <ul className="space-y-4">
              {rightColumn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Block Component
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export const FAQBlock: React.FC<FAQBlockProps> = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Location Map Embed Component
interface LocationMapProps {
  title: string;
  subtitle?: string;
  mapEmbedUrl: string;
  locations: Array<{
    name: string;
    address: string;
    description: string;
  }>;
}

export const LocationMapBlock: React.FC<LocationMapProps> = ({
  title,
  subtitle,
  mapEmbedUrl,
  locations
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Embed */}
          <div className="lg:col-span-2">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Festival locations map"
              />
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {location.address}
                    </p>
                    <p className="text-sm text-gray-700">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Embed Component
interface VideoEmbedProps {
  title: string;
  subtitle?: string;
  videoUrl: string;
  thumbnail: string;
  description?: string;
}

export const VideoEmbedBlock: React.FC<VideoEmbedProps> = ({
  title,
  subtitle,
  videoUrl,
  thumbnail,
  description
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="relative">
              <img
                src={thumbnail}
                alt="Video thumbnail"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-orange-500/90 backdrop-blur-sm border border-orange-400/50 rounded-full p-6 hover:bg-orange-600 transition-all duration-300 group"
                >
                  <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={videoUrl}
              width="100%"
              height="500"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Festival experience video"
            />
          )}
        </div>

        {/* Description */}
        {description && (
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};