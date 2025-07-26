import { useState } from 'react';
import { Calendar, Users, MapPin, Clock, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: '2',
    children: '0',
    accommodation: '',
    activities: [] as string[],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    specialRequests: ''
  });

  const steps = [
    { number: 1, title: 'Trip Details', description: 'Choose your safari preferences' },
    { number: 2, title: 'Travelers', description: 'Tell us about your group' },
    { number: 3, title: 'Personal Info', description: 'Your contact information' },
    { number: 4, title: 'Review', description: 'Confirm your booking' }
  ];

  const destinations = [
    { value: 'maasai-mara', label: 'Maasai Mara National Reserve', price: 350 },
    { value: 'amboseli', label: 'Amboseli National Park', price: 280 },
    { value: 'samburu', label: 'Samburu National Reserve', price: 320 },
    { value: 'tsavo', label: 'Tsavo National Parks', price: 250 },
    { value: 'nakuru', label: 'Lake Nakuru National Park', price: 220 },
    { value: 'combo', label: 'Multi-Park Safari Package', price: 450 }
  ];

  const accommodations = [
    { value: 'budget', label: 'Budget Safari Camp', extra: 0 },
    { value: 'mid-range', label: 'Mid-Range Safari Lodge', extra: 150 },
    { value: 'luxury', label: 'Luxury Safari Resort', extra: 400 },
    { value: 'ultra-luxury', label: 'Ultra-Luxury Tented Camp', extra: 800 }
  ];

  const activities = [
    { id: 'game-drives', label: 'Game Drives', included: true },
    { id: 'walking-safari', label: 'Walking Safari', price: 80 },
    { id: 'night-safari', label: 'Night Safari', price: 120 },
    { id: 'balloon-safari', label: 'Hot Air Balloon Safari', price: 450 },
    { id: 'cultural-visit', label: 'Cultural Village Visit', price: 60 },
    { id: 'photography-tour', label: 'Photography Workshop', price: 150 }
  ];

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleActivityChange = (activityId: string, checked: boolean) => {
    if (checked) {
      updateFormData('activities', [...formData.activities, activityId]);
    } else {
      updateFormData('activities', formData.activities.filter(id => id !== activityId));
    }
  };

  const calculateTotal = () => {
    const destination = destinations.find(d => d.value === formData.destination);
    const accommodation = accommodations.find(a => a.value === formData.accommodation);
    const days = formData.startDate && formData.endDate ? 
      Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 0;
    
    const basePrice = (destination?.price || 0) * days * parseInt(formData.adults);
    const accommodationExtra = (accommodation?.extra || 0) * days * parseInt(formData.adults);
    const activitiesExtra = formData.activities.reduce((total, activityId) => {
      const activity = activities.find(a => a.id === activityId && !a.included);
      return total + (activity?.price || 0) * parseInt(formData.adults);
    }, 0);
    
    return basePrice + accommodationExtra + activitiesExtra;
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="destination">Choose Your Destination</Label>
              <Select value={formData.destination} onValueChange={(value) => updateFormData('destination', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a safari destination" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest.value} value={dest.value}>
                      {dest.label} - From ${dest.price}/day
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input 
                  type="date" 
                  id="startDate"
                  value={formData.startDate}
                  onChange={(e) => updateFormData('startDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input 
                  type="date" 
                  id="endDate"
                  value={formData.endDate}
                  onChange={(e) => updateFormData('endDate', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="accommodation">Accommodation Type</Label>
              <Select value={formData.accommodation} onValueChange={(value) => updateFormData('accommodation', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation level" />
                </SelectTrigger>
                <SelectContent>
                  {accommodations.map((acc) => (
                    <SelectItem key={acc.value} value={acc.value}>
                      {acc.label} {acc.extra > 0 && `(+$${acc.extra}/day)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Safari Activities</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={activity.id}
                      checked={activity.included || formData.activities.includes(activity.id)}
                      disabled={activity.included}
                      onCheckedChange={(checked) => handleActivityChange(activity.id, checked as boolean)}
                    />
                    <Label htmlFor={activity.id} className="text-sm">
                      {activity.label}
                      {activity.included ? (
                        <span className="text-green-600 ml-2">(Included)</span>
                      ) : (
                        <span className="text-muted-foreground ml-2">(+${activity.price})</span>
                      )}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="adults">Number of Adults</Label>
                <Select value={formData.adults} onValueChange={(value) => updateFormData('adults', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num} Adult{num > 1 ? 's' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="children">Number of Children</Label>
                <Select value={formData.children} onValueChange={(value) => updateFormData('children', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0,1,2,3,4,5,6].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num} Child{num !== 1 ? 'ren' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="specialRequests">Special Requests or Dietary Requirements</Label>
              <Textarea 
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => updateFormData('specialRequests', e.target.value)}
                placeholder="Any special dietary requirements, accessibility needs, or other requests..."
                rows={4}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="your.email@example.com"
              />
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
                <Label htmlFor="nationality">Nationality</Label>
                <Input 
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => updateFormData('nationality', e.target.value)}
                  placeholder="Your nationality"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        const total = calculateTotal();
        const destination = destinations.find(d => d.value === formData.destination);
        const accommodation = accommodations.find(a => a.value === formData.accommodation);
        const days = formData.startDate && formData.endDate ? 
          Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 0;

        return (
          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Destination:</span>
                  <span className="font-medium">{destination?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{days} days ({formData.startDate} to {formData.endDate})</span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers:</span>
                  <span className="font-medium">{formData.adults} Adults, {formData.children} Children</span>
                </div>
                <div className="flex justify-between">
                  <span>Accommodation:</span>
                  <span className="font-medium">{accommodation?.label}</span>
                </div>
                {formData.activities.length > 0 && (
                  <div className="flex justify-between">
                    <span>Activities:</span>
                    <span className="font-medium">{formData.activities.length} selected</span>
                  </div>
                )}
              </div>

              <div className="border-t border-border mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Cost:</span>
                  <span className="text-primary">${total.toLocaleString()}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  *Final price may vary based on availability and seasonal rates
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Name:</strong> {formData.firstName} {formData.lastName}
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
                <div>
                  <strong>Phone:</strong> {formData.phone}
                </div>
                <div>
                  <strong>Nationality:</strong> {formData.nationality}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Book Your Safari Adventure
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Plan your perfect Kenya safari experience with our easy step-by-step booking process
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.number 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`font-medium ${currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {step.description}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="h-5 w-5 text-muted-foreground mx-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <Card className="p-8 shadow-card-safari">
            <h2 className="font-display text-2xl font-bold mb-6">
              {steps[currentStep - 1].title}
            </h2>
            
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button 
                  onClick={nextStep}
                  className="bg-gradient-sunset text-primary-foreground hover:shadow-safari"
                >
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  className="bg-gradient-sunset text-primary-foreground hover:shadow-safari"
                >
                  Submit Booking Request
                </Button>
              )}
            </div>
          </Card>

          {/* Price Display */}
          {formData.destination && formData.startDate && formData.endDate && (
            <Card className="mt-6 p-6 bg-gradient-sky">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Estimated Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on your current selections
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    ${calculateTotal().toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For {formData.adults} adult{formData.adults !== '1' ? 's' : ''}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Booking;