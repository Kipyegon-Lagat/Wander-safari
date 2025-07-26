import { Link } from 'react-router-dom';
import { Compass, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-sunset rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-savanna rounded-full translate-x-48 translate-y-48" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-safari-gold" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl">WanderSoul</span>
                <span className="font-sans text-xs opacity-80">TRAVELS</span>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Discover the magic of Kenya with expertly crafted safari adventures. 
              Creating unforgettable memories in Africa's most spectacular wilderness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-safari-gold hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-safari-gold hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-safari-gold hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Destinations', 'Book Safari', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Book Safari' ? '/booking' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-safari-gold transition-all duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Packages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Safari Packages</h3>
            <ul className="space-y-2">
              {['Maasai Mara', 'Amboseli', 'Tsavo', 'Samburu', 'Lake Nakuru'].map((destination) => (
                <li key={destination}>
                  <Link 
                    to="/destinations"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-safari-gold transition-all duration-200"
                  >
                    {destination} Safari
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-safari-gold flex-shrink-0" />
                <span className="text-sm opacity-90">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-safari-gold flex-shrink-0" />
                <span className="text-sm opacity-90">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-safari-gold flex-shrink-0" />
                <span className="text-sm opacity-90">info@wandersoul.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 WanderSoul Travels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;