import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Great Migration: Best Times and Places to Witness Nature's Greatest Spectacle",
      excerpt: "Discover the optimal timing and locations for experiencing the incredible wildebeest migration across the Maasai Mara ecosystem.",
      image: lionsImage,
      author: "Sarah Kenya",
      date: "2024-01-15",
      category: "Wildlife",
      readTime: "8 min read",
      tags: ["Migration", "Maasai Mara", "Wildlife Photography"]
    },
    {
      id: 2,
      title: "Photography Tips for Your First African Safari",
      excerpt: "Essential camera settings, composition techniques, and equipment recommendations for capturing stunning wildlife photographs on safari.",
      image: elephantsImage,
      author: "Michael Thompson",
      date: "2024-01-12",
      category: "Photography",
      readTime: "12 min read",
      tags: ["Photography", "Tips", "Equipment"]
    },
    {
      id: 3,
      title: "Cultural Encounters: Meeting the Maasai People",
      excerpt: "Learn about the rich traditions and modern life of Kenya's Maasai community, and how tourism supports local communities.",
      image: giraffesImage,
      author: "Grace Mwangi",
      date: "2024-01-10",
      category: "Culture",
      readTime: "6 min read",
      tags: ["Maasai", "Culture", "Community Tourism"]
    },
    {
      id: 4,
      title: "Budget Safari Planning: How to Experience Kenya Without Breaking the Bank",
      excerpt: "Practical tips for planning an affordable Kenya safari while still enjoying incredible wildlife experiences and comfortable accommodations.",
      image: lionsImage,
      author: "James Wilson",
      date: "2024-01-08",
      category: "Budget Travel",
      readTime: "10 min read",
      tags: ["Budget", "Planning", "Tips"]
    },
    {
      id: 5,
      title: "Hidden Gems: Lesser-Known Safari Destinations in Kenya",
      excerpt: "Explore off-the-beaten-path reserves and conservancies that offer intimate wildlife experiences away from the crowds.",
      image: elephantsImage,
      author: "Emma Rodriguez",
      date: "2024-01-05",
      category: "Hidden Gems",
      readTime: "9 min read",
      tags: ["Hidden Gems", "Conservancies", "Off the Beaten Path"]
    },
    {
      id: 6,
      title: "Safari Packing Essentials: What to Bring and What to Leave Behind",
      excerpt: "Complete packing checklist for your Kenya safari, including clothing, gear, and must-have items for different seasons.",
      image: giraffesImage,
      author: "David Park",
      date: "2024-01-03",
      category: "Travel Tips",
      readTime: "7 min read",
      tags: ["Packing", "Travel Tips", "Safari Gear"]
    }
  ];

  const categories = [
    'all',
    'Wildlife',
    'Photography',
    'Culture',
    'Budget Travel',
    'Hidden Gems',
    'Travel Tips'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Safari Stories & Travel Tips
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover insider knowledge, wildlife photography tips, cultural insights, and practical advice 
            from our safari experts and seasoned travelers.
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {selectedCategory === 'all' && !searchTerm && (
              <Card className="mb-12 overflow-hidden border-0 shadow-card-safari">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <Badge className="mb-3 bg-primary text-primary-foreground">
                      Featured Article
                    </Badge>
                    <h2 className="font-display text-3xl font-bold mb-3 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/90 mb-4 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {otherPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-0 shadow-card-safari group hover:shadow-safari transition-shadow duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="secondary">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="p-6 bg-gradient-sky border-0">
              <h3 className="font-display text-xl font-bold mb-3">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get the latest safari tips, wildlife updates, and travel stories delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input placeholder="Your email address" />
                <Button className="w-full bg-gradient-sunset text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </Card>

            {/* Popular Tags */}
            <Card className="p-6 border-0 shadow-card-safari">
              <h3 className="font-display text-xl font-bold mb-4">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Wildlife Photography', 'Maasai Mara', 'Budget Safari', 'Migration', 'Big Five', 'Cultural Tours', 'Packing Tips', 'Best Time to Visit'].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8"
                    onClick={() => setSearchTerm(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6 border-0 shadow-card-safari">
              <h3 className="font-display text-xl font-bold mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-left">
                  Safari Planning Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-left">
                  Photography Equipment List
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-left">
                  Kenya Weather & Seasons
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-left">
                  Wildlife Identification Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-left">
                  Cultural Etiquette Tips
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Blog;