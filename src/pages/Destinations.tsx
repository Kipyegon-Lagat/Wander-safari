import { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import lionsImage from '@/assets/safari-lions.jpg';
import elephantsImage from '@/assets/safari-elephants.jpg';
import giraffesImage from '@/assets/safari-giraffes.jpg';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const destinations = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      location: "Narok County",
      image: lionsImage,
      description: "Famous for the annual Great Migration and exceptional big cat sightings. Experience the raw beauty of the African savanna.",
      price: "From $350/day",
      duration: "3-7 days",
      category: "wildlife",
      rating: 4.9,
      reviews: 324,
      highlights: ["Great Migration", "Big Five", "Cultural Experiences"],
      bestTime: "July - October"
    },
    {
      id: 2,
      name: "Amboseli National Park",
      location: "Kajiado County",
      image: elephantsImage,
      description: "Stunning views of Mount Kilimanjaro backdrop with large elephant herds. Perfect for photography enthusiasts.",
      price: "From $280/day",
      duration: "2-5 days",
      category: "photography",
      rating: 4.8,
      reviews: 256,
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Photography"],
      bestTime: "June - October"
    },
    {
      id: 3,
      name: "Samburu National Reserve",
      location: "Samburu County",
      image: giraffesImage,
      description: "Home to unique species like Grevy's zebra, reticulated giraffe, and Somali ostrich. Authentic cultural encounters.",
      price: "From $320/day",
      duration: "3-6 days",
      category: "cultural",
      rating: 4.7,
      reviews: 189,
      highlights: ["Unique Wildlife", "Cultural Visits", "Ewaso Nyiro River"],
      bestTime: "Year Round"
    },
    {
      id: 4,
      name: "Tsavo National Parks",
      location: "Coast Province",
      image: lionsImage,
      description: "Kenya's largest wildlife sanctuary, famous for red elephants and diverse landscapes from semi-arid to lush vegetation.",
      price: "From $250/day",
      duration: "3-5 days",
      category: "adventure",
      rating: 4.6,
      reviews: 203,
      highlights: ["Red Elephants", "Diverse Landscapes", "Large Park"],
      bestTime: "June - September"
    },
    {
      id: 5,
      name: "Lake Nakuru National Park",
      location: "Nakuru County",
      image: elephantsImage,
      description: "Famous for flamingo spectacle and rhino sanctuary. Birdwatcher's paradise with over 400 bird species.",
      price: "From $220/day",
      duration: "1-3 days",
      category: "birdwatching",
      rating: 4.5,
      reviews: 167,
      highlights: ["Flamingos", "Rhino Sanctuary", "Bird Watching"],
      bestTime: "December - March"
    },
    {
      id: 6,
      name: "Hell's Gate National Park",
      location: "Nakuru County",
      image: giraffesImage,
      description: "Unique park where you can walk and cycle among wildlife. Dramatic landscapes with geothermal activity.",
      price: "From $180/day",
      duration: "1-2 days",
      category: "adventure",
      rating: 4.4,
      reviews: 142,
      highlights: ["Walking Safari", "Cycling", "Geothermal Features"],
      bestTime: "Year Round"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'wildlife', name: 'Wildlife Safari' },
    { id: 'photography', name: 'Photography' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'birdwatching', name: 'Bird Watching' }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Explore Kenya's Wild Beauty
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover extraordinary destinations across Kenya, each offering unique wildlife encounters, 
            breathtaking landscapes, and unforgettable adventures that will stay with you forever.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-primary" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden border-0 shadow-card-safari safari-card-hover">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {destination.bestTime}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.location}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-safari-gold fill-current" />
                      <span className="font-semibold">{destination.rating}</span>
                      <span className="text-muted-foreground text-sm">({destination.reviews})</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {destination.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary text-lg">
                      {destination.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-gradient-sunset text-primary-foreground hover:shadow-safari"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                No destinations found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-sky">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert safari consultants will help you choose the perfect destinations 
            based on your interests, budget, and travel dates.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-sunset text-primary-foreground hover:shadow-safari px-8"
          >
            Get Personalized Recommendations
          </Button>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Destinations;