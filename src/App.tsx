import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroOverviewSlice } from './components/IntroOverviewSlice';
import { GridSlice } from './components/GridSlice';
import { TextImageBlock, TwoColumnListBlock, FAQBlock, LocationMapBlock, VideoEmbedBlock } from './components/ContentBlocks';
import { FleetSlice } from './components/FleetSlice';
import { PromoSlice } from './components/PromoSlice';
import { SocialProof } from './components/SocialProof';
import { Newsletter } from './components/Newsletter';
import { SEOFooter } from './components/SEOFooter';
import { Footer } from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sample data that would come from Prismic CMS
  const featuredFestivals = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Coachella Valley Music Festival",
      teaser: "Experience the ultimate desert festival with world-class artists and iconic art installations in the California desert.",
      link: "/festivals/coachella-2025",
      location: "Indio, California",
      date: "April 11-13 & 18-20, 2025"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Electric Forest",
      teaser: "Dance among the trees in this magical electronic music wonderland featuring immersive art and forest camping.",
      link: "/festivals/electric-forest-2025",
      location: "Rothbury, Michigan",
      date: "June 26-29, 2025"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Burning Man",
      teaser: "Join the ultimate self-expression gathering in the Nevada desert with art, music, and radical community.",
      link: "/festivals/burning-man-2025",
      location: "Black Rock Desert, Nevada",
      date: "August 25 - September 2, 2025"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Bonnaroo Music Festival",
      teaser: "Four days of music, arts, and positive vibes on a 700-acre farm in Tennessee's countryside.",
      link: "/festivals/bonnaroo-2025",
      location: "Manchester, Tennessee",
      date: "June 12-15, 2025"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Outside Lands",
      teaser: "San Francisco's premier music festival combining world-class artists with the city's incredible food and wine scene.",
      link: "/festivals/outside-lands-2025",
      location: "San Francisco, California",
      date: "August 8-10, 2025"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Lollapalooza Chicago",
      teaser: "Chicago's iconic music festival featuring diverse genres against the stunning backdrop of the city skyline.",
      link: "/festivals/lollapalooza-chicago-2025",
      location: "Chicago, Illinois",
      date: "July 31 - August 3, 2025"
    }
  ];

  const campervanModels = [
    {
      id: 1,
      name: "Festival Cruiser",
      image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      capacity: "2-4 people",
      features: ["Solar panels", "Outdoor shower", "Festival gear storage", "Sound system"],
      priceFrom: "$89/day",
      availability: "available" as const,
      ctaText: "Book Now",
      ctaLink: "/vehicles/festival-cruiser"
    },
    {
      id: 2,
      name: "Desert Explorer",
      image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      capacity: "4-6 people",
      features: ["AC/Heating", "Large water tank", "Dust protection", "Extra storage"],
      priceFrom: "$129/day",
      availability: "limited" as const,
      ctaText: "Check Availability",
      ctaLink: "/vehicles/desert-explorer"
    },
    {
      id: 3,
      name: "Group Adventure",
      image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      capacity: "6-8 people",
      features: ["Multiple beds", "Large kitchen", "Entertainment system", "Group seating"],
      priceFrom: "$179/day",
      availability: "available" as const,
      ctaText: "View Details",
      ctaLink: "/vehicles/group-adventure"
    },
    {
      id: 4,
      name: "Luxury Liner",
      image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      capacity: "4-6 people",
      features: ["Premium interior", "Full bathroom", "High-end appliances", "Luxury bedding"],
      priceFrom: "$249/day",
      availability: "available" as const,
      ctaText: "Book Premium",
      ctaLink: "/vehicles/luxury-liner"
    }
  ];

  const sampleFAQs = [
    {
      question: "Can I camp at music festivals with a campervan?",
      answer: "Yes! Most major festivals offer RV/campervan camping areas. Our team can help you secure the right camping passes and provide guidance on festival-specific requirements."
    },
    {
      question: "What are the best road trip routes for festival season?",
      answer: "Popular routes include the West Coast circuit (Coachella → Outside Lands), the Midwest loop (Electric Forest → Lollapalooza), and the cross-country adventure (Bonnaroo → Burning Man). We offer one-way rentals to make these epic journeys possible."
    },
    {
      question: "Do I need special permits for festival camping?",
      answer: "Each festival has different requirements. We provide detailed guides for each event and can help you understand camping regulations, size restrictions, and booking procedures."
    },
    {
      question: "What's included in a festival campervan rental?",
      answer: "All our campervans come fully equipped with beds, kitchen facilities, bathroom, climate control, unlimited mileage, 24/7 support, and comprehensive insurance. Perfect for comfortable festival experiences."
    }
  ];

  const sampleLocations = [
    {
      name: "Coachella Valley",
      address: "Indio, California",
      description: "Desert festival paradise with world-class music and art installations"
    },
    {
      name: "Electric Forest",
      address: "Rothbury, Michigan",
      description: "Magical woodland setting with electronic music and immersive experiences"
    },
    {
      name: "Black Rock Desert",
      address: "Nevada",
      description: "Home to Burning Man, the ultimate self-expression gathering"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuToggle={handleMenuToggle} />
      
      {/* Hero Section - Mandatory */}
      <Hero />
      
      {/* Intro/Overview Slice - Optional */}
      <IntroOverviewSlice
        title="America's Premier Festival Experience Awaits"
        content="Summer 2025 is shaping up to be the most incredible festival season yet. From the sun-soaked deserts of California to the lush forests of Michigan, America's music festival circuit offers unparalleled experiences for every type of music lover. Whether you're seeking the electronic beats of EDM festivals, the raw energy of rock concerts, or the intimate vibes of indie gatherings, your perfect festival adventure is waiting."
        internalLinks={[
          { text: "Browse All Festivals", url: "/festivals" },
          { text: "Plan Your Road Trip", url: "/road-trips" },
          { text: "Festival Camping Guide", url: "/guides/festival-camping" }
        ]}
      />
      
      {/* Grid Slice - Featured Festivals */}
      <GridSlice
        title="Featured Summer Festivals 2025"
        subtitle="Discover the most iconic music festivals across America and start planning your campervan adventure"
        cards={featuredFestivals}
        columns={3}
      />
      
      {/* Content Slices - Flexible, Reorderable */}
      <TextImageBlock
        title="Why Festival Road Trips Are the Ultimate Adventure"
        content="There's something magical about hitting the open road with your festival crew, your home on wheels, and a summer full of incredible music ahead of you. Festival road trips combine the freedom of travel with the excitement of live music, creating memories that last a lifetime. With a campervan as your basecamp, you're not just attending festivals – you're embarking on an epic journey of discovery, meeting fellow music lovers, and experiencing the diverse landscapes and cultures that make America's festival scene so special."
        image="https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        imagePosition="right"
        internalLinks={[
          { text: "Festival Road Trip Routes", url: "/road-trips" },
          { text: "Packing Guide", url: "/guides/packing" }
        ]}
      />
      
      <TwoColumnListBlock
        title="Why Choose a Campervan for Festivals?"
        subtitle="Experience the ultimate in festival comfort and convenience with our premium campervans"
        leftColumn={{
          title: "Comfort & Convenience",
          items: [
            "Private bathroom and shower facilities",
            "Comfortable beds for quality sleep",
            "Full kitchen for healthy meals",
            "Climate control for any weather",
            "Secure storage for your belongings",
            "No crowded campground facilities"
          ]
        }}
        rightColumn={{
          title: "Freedom & Flexibility",
          items: [
            "Arrive and leave on your schedule",
            "Explore multiple festivals in one trip",
            "Discover hidden gems along the way",
            "Create your own festival experience",
            "One-way rentals available",
            "Unlimited mileage included"
          ]
        }}
      />
      
      {/* Video Embed Block */}
      <VideoEmbedBlock
        title="See the Festival Experience"
        subtitle="Watch how our customers create unforgettable festival memories with Indie Campers"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnail="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
        description="Join thousands of festival-goers who've discovered the perfect way to experience America's music scene. From sunrise yoga sessions outside your van to late-night conversations under the stars, every moment becomes part of your festival story."
      />
      
      {/* Location Map Block */}
      <LocationMapBlock
        title="Festival Destinations Across America"
        subtitle="Discover the most iconic festival locations and plan your perfect route"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048156.5761871!2d-119.8489!3d36.7783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sCoachella%20Valley!5e0!3m2!1sen!2sus!4v1234567890"
        locations={sampleLocations}
      />
      
      {/* FAQ Block */}
      <FAQBlock
        title="Festival Camping FAQs"
        subtitle="Everything you need to know about campervan festival experiences"
        faqs={sampleFAQs}
      />
      
      {/* Fleet Slice - Campervan Section */}
      <FleetSlice
        title="The Best Way to Experience Festivals"
        subtitle="Skip the crowded campgrounds and uncomfortable tents. Our premium campervans offer the perfect base camp for your festival adventures, combining comfort, convenience, and style."
        campervans={campervanModels}
        isDynamic={true}
      />
      
      {/* Promo Slice - TBD */}
      <PromoSlice
        title="Festival Season Special"
        subtitle="Limited time offer for summer festival bookings"
        promoCode="FESTIVAL25"
        discount="25% OFF"
        validUntil="June 30, 2025"
        description="Book your festival campervan now and save big on your summer adventure. This exclusive discount applies to all bookings for festival season 2025."
        ctaText="Book with Discount"
        ctaLink="/search?promo=FESTIVAL25"
        backgroundColor="orange"
      />
      
      {/* Trust & Social Proof */}
      <SocialProof />
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* SEO Footer - Mandatory */}
      <SEOFooter />
      
      {/* Standard Footer - Mandatory */}
      <Footer />
    </div>
  );
}

export default App;