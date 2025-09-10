import React from 'react';
import { Tag, Clock, Gift, Percent } from 'lucide-react';

interface PromoSliceProps {
  title: string;
  subtitle?: string;
  promoCode: string;
  discount: string;
  validUntil: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: 'orange' | 'pink' | 'purple' | 'blue';
}

export const PromoSlice: React.FC<PromoSliceProps> = ({
  title,
  subtitle,
  promoCode,
  discount,
  validUntil,
  description,
  ctaText,
  ctaLink,
  backgroundColor = 'orange'
}) => {
  const bgGradients = {
    orange: 'from-orange-500 to-pink-600',
    pink: 'from-pink-500 to-purple-600',
    purple: 'from-purple-500 to-indigo-600',
    blue: 'from-blue-500 to-cyan-600'
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-gradient-to-br ${bgGradients[backgroundColor]} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Gift className="h-8 w-8 text-white" />
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-xl text-white/90 mb-6">
                    {subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {description}
                </p>

                {/* CTA Button */}
                <a
                  href={ctaLink}
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  {ctaText}
                </a>
              </div>

              {/* Right Content - Promo Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Discount Badge */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                    <Percent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {discount}
                  </div>
                  <div className="text-white/80">
                    Festival Special
                  </div>
                </div>

                {/* Promo Code */}
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/80 mb-1">Promo Code</div>
                      <div className="text-2xl font-bold font-mono">
                        {promoCode}
                      </div>
                    </div>
                    <Tag className="h-6 w-6 text-white/60" />
                  </div>
                </div>

                {/* Valid Until */}
                <div className="flex items-center text-white/80">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Valid until {validUntil}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};