import React from 'react';
import { Star, Instagram, Heart } from 'lucide-react';

const customerReview = {
  text: "Best Burning Man trip ever with Indie Campers! The van was perfect for the desert conditions and made our experience so much more comfortable. Can't wait to book again next year!",
  author: "Sarah M.",
  location: "San Francisco, CA",
  festival: "Burning Man 2024",
  rating: 5,
  avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
};

const instagramPosts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    likes: 1247,
    caption: "Festival vibes with our @indiecampers van! #IndieCampersAtFestivals"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    likes: 892,
    caption: "Coachella sunset from our mobile basecamp 🌅 #IndieCampersAtFestivals"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    likes: 1456,
    caption: "Electric Forest magic ✨ #IndieCampersAtFestivals"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    likes: 2103,
    caption: "Desert dreams at Burning Man 🔥 #IndieCampersAtFestivals"
  }
];

export const TrustSocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Review Spotlight */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(customerReview.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-8 w-8 text-yellow-400 fill-current mx-1"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{customerReview.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center">
                <img
                  src={customerReview.avatar}
                  alt={customerReview.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {customerReview.author}
                  </div>
                  <div className="text-gray-600">
                    {customerReview.location}
                  </div>
                  <div className="text-orange-600 font-medium">
                    {customerReview.festival}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Feed */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-4">
              <Instagram className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-800 font-medium text-sm">#IndieCampersAtFestivals</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See What Our Community is Sharing
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of festival-goers sharing their incredible experiences with Indie Campers
            </p>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Post Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt="Festival experience shared by customer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Instagram Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Post Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-pink-600">
                      <Heart className="h-4 w-4 mr-1 fill-current" />
                      <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Follow CTA */}
          <div className="text-center mt-12">
            <a
              href="https://instagram.com/indiecampers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow @indiecampers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};