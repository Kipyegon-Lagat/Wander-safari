import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "WanderSoul Travels",
        "Karen Road, Nairobi",
        "Kenya, East Africa"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+254 700 123 456",
        "+254 20 123 4567",
        "WhatsApp: +254 700 123 456"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@wandersoul.co.ke",
        "bookings@wandersoul.co.ke",
        "support@wandersoul.co.ke"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Emergency only"
      ]
    }
  ];

  const inquiryTypes = [
    "General Information",
    "Safari Booking",
    "Custom Safari Package",
    "Group Booking",
    "Travel Consultation",
    "Partnership Inquiry",
    "Media & Press",
    "Other"
  ];

  const faqs = [
    {
      question: "What's the best time to visit Kenya for a safari?",
      answer: "The best time depends on what you want to see. For the Great Migration, visit July-October. For fewer crowds and lush landscapes, consider March-May."
    },
    {
      question: "What's included in your safari packages?",
      answer: "Our packages typically include accommodation, meals, game drives, park fees, and professional guides. Specific inclusions vary by package."
    },
    {
      question: "Do I need any vaccinations to visit Kenya?",
      answer: "Yellow fever vaccination is required if coming from certain countries. We recommend consulting your doctor about other recommended vaccinations."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We cater to various dietary needs including vegetarian, vegan, gluten-free, and religious dietary requirements."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Cancellation terms vary by package and timing. Generally, we offer full refunds for cancellations made 60+ days before departure."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to start your Kenya safari adventure? Our expert team is here to help you 
            plan the perfect trip. Reach out to us and let's make your African dreams come true.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 shadow-card-safari">
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent inquiries, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiry">Inquiry Type *</Label>
                    <Select value={formData.inquiry} onValueChange={(value) => updateFormData('inquiry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => updateFormData('subject', e.target.value)}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    placeholder="Tell us about your safari preferences, travel dates, group size, or any specific questions you have..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-sunset text-primary-foreground hover:shadow-safari"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information & FAQs */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-0 shadow-card-safari">
                  <div className="flex items-start space-x-4">
                    <info.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Connect */}
            <Card className="p-6 bg-gradient-sky border-0">
              <h3 className="font-display text-xl font-bold mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Our safari experts are available for live chat or phone consultations.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 border-0 shadow-card-safari bg-destructive/5">
              <h3 className="font-semibold text-destructive mb-2">
                Emergency Contact
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                24/7 emergency support for travelers currently on safari
              </p>
              <p className="font-mono text-sm font-semibold">
                +254 700 911 911
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about Kenya safaris and our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-card-safari">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="overflow-hidden border-0 shadow-card-safari">
            <div className="bg-gradient-sunset text-primary-foreground p-6">
              <h3 className="font-display text-2xl font-bold mb-2">
                Visit Our Nairobi Office
              </h3>
              <p className="opacity-90">
                Located in the heart of Nairobi, our office is easily accessible and we'd love to meet you in person.
              </p>
            </div>
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Interactive Map Coming Soon</p>
                <p className="text-sm">Karen Road, Nairobi, Kenya</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Contact;