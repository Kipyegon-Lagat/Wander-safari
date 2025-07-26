import { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Safari, your virtual travel assistant. How can I help you plan your perfect Kenyan safari adventure?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickResponses = [
    "Popular safari destinations",
    "Best time to visit",
    "Safari package prices",
    "What to pack",
  ];

  const botResponses: Record<string, string> = {
    "popular safari destinations": "Kenya's top safari destinations include:\n\n🦁 Maasai Mara - Famous for the Great Wildbeast Migration\n🐘 Amboseli - Best views of Mount Kilimanjaro\n🦒 Samburu - Unique wildlife species\n🌸 Lake Nakuru - Flamingo paradise\n\nWould you like detailed information about any of these?",
    "best time to visit": "The best time for a Kenya safari:\n\n🌞 Dry Season (June-October): Best game viewing\n🌧️ Long Rains (March-May): Fewer crowds, lush landscapes\n🦓 Great Migration: July-October in Maasai Mara\n\nWhen are you planning to visit?",
    "safari package prices": "Our safari packages start from:\n\n💰 Budget Safari: $150/day\n⭐ Mid-range Safari: $300/day\n🏆 Luxury Safari: $600/day\n\nPrices include accommodation, meals, and game drives. Would you like a custom quote?",
    "what to pack": "Essential safari packing list:\n\n👕 Neutral colored clothing\n🧴 Sunscreen & insect repellent\n📸 Camera with extra batteries\n👟 Comfortable walking shoes\n🧢 Hat and sunglasses\n💊 Personal medications\n\nNeed a complete packing checklist?",
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse = "That's a great question! I'd recommend speaking with our experts for detailed information. You can contact us through our booking form or call +254 700 123 456.";

      // Check for keyword matches
      Object.keys(botResponses).forEach(key => {
        if (lowerInput.includes(key)) {
          botResponse = botResponses[key];
        }
      });

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleQuickResponse = (response: string) => {
    setInputValue(response);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-sunset text-primary-foreground shadow-safari hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card border border-border rounded-lg shadow-safari z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-sunset text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold">Safari Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <Bot className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                    )}
                    <div className="whitespace-pre-line">{message.text}</div>
                    {!message.isBot && (
                      <User className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="grid grid-cols-2 gap-2">
                {quickResponses.map((response) => (
                  <button
                    key={response}
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs p-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about safaris..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
