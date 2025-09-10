import React, { useState } from 'react';
import { Mail, Bell, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6">
            <Bell className="h-8 w-8 text-white animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss a Beat
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get the inside scoop on new festival announcements, exclusive deals, and early bird pricing. Join our community of festival enthusiasts!
          </p>

          {/* Features */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center text-gray-300">
              <Sparkles className="h-5 w-5 text-orange-400 mr-2" />
              <span>Exclusive festival alerts</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Sparkles className="h-5 w-5 text-orange-400 mr-2" />
              <span>Early bird discounts</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Sparkles className="h-5 w-5 text-orange-400 mr-2" />
              <span>Curated camping tips</span>
            </div>
          </div>

          {/* Newsletter form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubscribed ? 'Subscribed! 🎉' : 'Get Updates'}
              </button>
            </div>
          </form>

          {/* Privacy note */}
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time. No spam, just pure festival magic.
          </p>

          {/* Success message */}
          {isSubscribed && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
              <p className="text-green-300 font-medium">
                🎉 Welcome to the IndieCampers family! Check your inbox for exclusive content.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};