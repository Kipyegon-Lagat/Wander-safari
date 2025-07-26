import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, Camera, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import heroImage from '@/assets/hero-safari.jpg';
import lionsImage from '@/assets/safari-lions.jpg';
import elephantsImage from '@/assets/safari-elephants.jpg';
import giraffesImage from '@/assets/safari-giraffes.jpg';

const Index = () => {
  const [animatedElements, setAnimatedElements] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const destinations = [
    {
      name: "Maasai Mara",
      image: lionsImage,
      description: "Witness the Great Migration and big cats in their natural habitat",
      price: "From $350/day",
      duration: "3-5 days"
    },
    {
      name: "Amboseli",
      image: elephantsImage,
      description: "Spectacular views of Mount Kilimanjaro with large elephant herds",
      price: "From $280/day",
      duration: "2-4 days"
    },
    {
      name: "Samburu",
      image: giraffesImage,
      description: "Unique wildlife species and authentic cultural experiences",
      price: "From $320/day",
      duration: "3-4 days"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      text: "Absolutely magical experience! WanderSoul made our Kenya safari unforgettable. The wildlife viewing was spectacular!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      location: "Sydney, Australia", 
      rating: 5,
      text: "Professional guides, comfortable accommodations, and incredible wildlife encounters. Highly recommend!",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "The trip of a lifetime! Every detail was perfectly planned. The sunsets over the savanna were breathtaking.",
      avatar: "ER"
    }
  ];

  const stats = [
    { icon: Users, number: "5000+", label: "Happy Travelers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Camera, number: "50+", label: "Destinations" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block bg-gradient-to-r from-safari-gold to-safari-orange bg-clip-text text-transparent">
              Soul of Africa
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Embark on extraordinary safari adventures through Kenya's breathtaking wilderness. 
            Where every moment becomes a treasured memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-sunset text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105 px-8"
            >
              <Link to="/booking">
                Start Your Adventure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`text-center fade-in-up ${animatedElements.includes(`stat-${index}`) ? 'animate' : ''}`}
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            id="destinations-header"
            data-animate
            className={`text-center mb-16 fade-in-up ${animatedElements.includes('destinations-header') ? 'animate' : ''}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Safari Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore Kenya's most spectacular wildlife reserves and national parks, 
              each offering unique experiences and unforgettable encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card 
                key={index}
                id={`destination-${index}`}
                data-animate
                className={`group overflow-hidden border-0 shadow-card-safari safari-card-hover fade-in-up ${animatedElements.includes(`destination-${index}`) ? 'animate' : ''}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-display text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.duration}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary text-lg">{destination.price}</span>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link to="/destinations">Explore</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-savanna">
        <div className="container mx-auto px-4">
          <div 
            id="testimonials-header"
            data-animate
            className={`text-center mb-16 fade-in-up ${animatedElements.includes('testimonials-header') ? 'animate' : ''}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the thousands of adventurers 
              who have experienced the magic of Kenya with WanderSoul Travels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`p-6 border-0 shadow-card-safari safari-card-hover fade-in-up ${animatedElements.includes(`testimonial-${index}`) ? 'animate' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-safari-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-sunset rounded-full translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-safari-gold rounded-full -translate-x-32 translate-y-32" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Safari Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert team craft the perfect Kenya safari experience tailored to your dreams. 
            Your African adventure awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-8"
            >
              <Link to="/booking">Plan My Safari</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
