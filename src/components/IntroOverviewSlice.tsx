import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroOverviewSliceProps {
  title: string;
  content: string;
  internalLinks?: Array<{
    text: string;
    url: string;
  }>;
}

export const IntroOverviewSlice: React.FC<IntroOverviewSliceProps> = ({
  title,
  content,
  internalLinks = []
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H2 Title - Editable in Prismic */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        
        {/* Rich Text Content - Editable in Prismic */}
        <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed mb-8">
          <p>{content}</p>
        </div>
        
        {/* Internal Links - Editable in Prismic */}
        {internalLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {internalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors group"
              >
                {link.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};