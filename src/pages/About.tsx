import { Users, Heart, Award, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import heroImage from '@/assets/hero-safari.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Wildlife",
      description: "Our deep love for Kenya's incredible wildlife drives everything we do. We're committed to providing authentic experiences while supporting conservation efforts."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We partner with local communities, ensuring that tourism benefits the people who call Kenya home and preserves their rich cultural heritage."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "With over 15 years of experience, we deliver exceptional safari experiences that exceed expectations and create lifelong memories."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We practice responsible tourism that protects Kenya's ecosystems and contributes to the conservation of endangered species."
    }
  ];

  const team = [
    {
      name: "Sarah Mwangi",
      position: "Founder & CEO",
      bio: "Born and raised in Nairobi, Sarah has been organizing safaris for over 15 years. Her passion for wildlife conservation and community development led her to create WanderSoul Travels.",
      avatar: "SM"
    },
    {
      name: "James Kiptoo",
      position: "Head Safari Guide",
      bio: "A certified wildlife specialist with 20 years of experience in Kenya's national parks. James knows every corner of the Maasai Mara and has an encyclopedic knowledge of wildlife behavior.",
      avatar: "JK"
    },
    {
      name: "Grace Njeri",
      position: "Cultural Experience Coordinator",
      bio: "Grace bridges the gap between visitors and local communities, ensuring authentic cultural exchanges that benefit everyone involved.",
      avatar: "GN"
    },
    {
      name: "Michael Thompson",
      position: "Photography Guide",
      bio: "An award-winning wildlife photographer who helps guests capture the perfect shot while respecting wildlife and their natural habitats.",
      avatar: "MT"
    }
  ];

  const milestones = [
    { year: "2009", event: "WanderSoul Travels founded with a mission to showcase Kenya's natural beauty" },
    { year: "2012", event: "Established partnerships with local Maasai communities" },
    { year: "2015", event: "Launched our conservation fund, supporting wildlife protection initiatives" },
    { year: "2018", event: "Received Kenya Tourism Board's Excellence Award" },
    { year: "2020", event: "Pioneered eco-friendly safari practices and carbon-neutral tours" },
    { year: "2023", event: "Celebrated serving over 5,000 happy travelers from around the world" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Connecting hearts to Kenya's wild soul through unforgettable safari experiences 
            that make a difference.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              At WanderSoul Travels, we believe that travel should transform both the traveler and the destination. 
              We're dedicated to creating authentic safari experiences that showcase Kenya's incredible wildlife 
              while supporting local communities and conservation efforts. Every journey with us contributes to 
              preserving Africa's natural heritage for future generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center border-0 shadow-card-safari safari-card-hover">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              How It All Began
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-8">
                In 2009, Sarah Mwangi had a vision: to share the breathtaking beauty of her homeland, Kenya, 
                with the world while ensuring that tourism would benefit the very communities and wildlife 
                that make it so special. Growing up in the shadow of the Ngong Hills, Sarah spent her childhood 
                listening to her grandfather's stories about the great herds that once roamed freely across the plains.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                After years of working with international tour operators, Sarah noticed that many visitors 
                left Kenya having seen its beauty but without truly understanding its soul. She wanted to 
                change that. WanderSoul Travels was born from the desire to create deeper connections—between 
                travelers and wildlife, between visitors and local communities, and between the tourism industry 
                and conservation efforts.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we're proud to be one of Kenya's leading sustainable safari operators, having welcomed 
                thousands of travelers from around the globe while maintaining our commitment to responsible 
                tourism. Every safari we organize contributes to wildlife conservation, community development, 
                and the preservation of Kenya's cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of safari experts, guides, and conservationists brings decades of combined 
              experience and an unwavering commitment to creating extraordinary experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-card-safari safari-card-hover">
                <div className="w-20 h-20 bg-gradient-sunset rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-savanna">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Kenya's premier sustainable safari operator
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-lg shadow-card-safari">
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-sunset rounded-full translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-safari-gold rounded-full -translate-x-32 translate-y-32" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Together with our travelers, we're making a real difference in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="opacity-90">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$500K+</div>
              <div className="opacity-90">Community Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Conservation Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default About;