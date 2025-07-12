import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mic, MicOff, Send, User, Bot, ArrowLeft } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const VoiceAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Agent Lexi, your Nigerian AI Assistant. I can help with business questions, onboarding, and voice AI solutions. How far? Wetin you wan know today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    addMessage(userMessage, true);
    setIsProcessing(true);

    // Simulate AI response - in production this would call the webhook
    setTimeout(() => {
      const responses = [
        "I understand you're interested in ODIA's voice AI solutions. We help Nigerian businesses automate customer support, onboarding, and more. Would you like to know about our pricing?",
        "That's a great question! ODIA AI provides end-to-end voice automation for businesses across Nigeria. We support English, Pidgin, and other Nigerian languages. What specific use case you get in mind?",
        "Absolutely! Our AI agents can handle customer support, lead generation, appointment booking, and payment processing. We've deployed systems for government agencies and universities. Want to hear about our free trial?",
        "ODIA's technology is voice-first and culturally aware. We understand Nigerian context and business needs. Our agents work 24/7 and can scale with your business. How big is your team?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, false);
      setIsProcessing(false);
    }, 1500);
  };

  const handleVoiceRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      // In production, start recording here
      setTimeout(() => {
        setIsRecording(false);
        addMessage("I heard you ask about our pricing. Let me tell you about our packages!", true);
        handleSendMessage();
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const quickActions = [
    { label: "About ODIA", message: "Tell me about ODIA AI and what you do" },
    { label: "Business Help", message: "How can ODIA help my business with automation?" },
    { label: "Pricing", message: "What are your pricing plans in Naira?" },
    { label: "Free Trial", message: "How can I start a free trial?" }
  ];

  const handleQuickAction = (message: string) => {
    setInputMessage(message);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="container-max flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-[4px] text-foreground">ODIA</h1>
              <p className="text-sm text-secondary">Agent Lexi Ready</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-secondary">Online</span>
          </div>
        </div>
      </header>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="container-max max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isUser 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  
                  <div className={`rounded-lg p-4 ${
                    message.isUser 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card border border-border'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 opacity-70 ${
                      message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isProcessing && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-border bg-card/50">
          <div className="container-max max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction(action.message)}
                  className="text-xs"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-card">
          <div className="container-max max-w-4xl mx-auto">
            <div className="flex items-center space-x-4">
              <div className="flex-1 flex items-center space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message or use voice..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isProcessing}
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <Button
                onClick={handleVoiceRecord}
                variant={isRecording ? "destructive" : "secondary"}
                size="sm"
                className={`w-12 h-12 rounded-full ${isRecording ? 'pulse-gold' : ''}`}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {isRecording 
                ? "Recording... Speak now or click to stop"
                : "Click the mic to speak or type your message. Agent Lexi understands English and Pidgin!"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;