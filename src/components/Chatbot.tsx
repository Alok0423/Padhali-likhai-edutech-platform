'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const commonQuestions = [
  'How do I enroll in a course?',
  'What is the refund policy?',
  'Do you offer certificates?',
  'How long do I have access to courses?',
  'Can I download course materials?',
];

const botResponses: Record<string, string> = {
  enroll: 'To enroll in a course: 1) Browse our courses, 2) Click "Enroll Now", 3) Complete the purchase, 4) Start learning immediately!',
  refund: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, request a refund within 30 days of purchase.',
  certificate: 'Yes! Upon completing a course, you\'ll receive a verified certificate of completion that you can add to your LinkedIn profile.',
  access: 'You have lifetime access to all course materials. Watch lectures anytime, anywhere at your own pace.',
  download: 'Yes, you can download all course resources including video lectures, PDFs, and code files for offline learning.',
  pricing: 'Our courses range from $79 to $149. We frequently offer discounts and promotions. Check our courses page for current pricing.',
  payment: 'We accept all major credit cards and PayPal. Payments are secure and processed through Stripe.',
  technical: 'For technical issues, please contact our support team at support@padhalilikhai.com or submit a ticket.',
  default: 'Thank you for your question! Our support team will get back to you shortly. Is there anything else I can help you with?',
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hello! 👋 Welcome to Padhai Likhai. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('enroll') ||
      lowerMessage.includes('sign up') ||
      lowerMessage.includes('register')
    ) {
      return botResponses.enroll;
    }
    if (lowerMessage.includes('refund') || lowerMessage.includes('money back')) {
      return botResponses.refund;
    }
    if (lowerMessage.includes('certificate')) {
      return botResponses.certificate;
    }
    if (lowerMessage.includes('access') || lowerMessage.includes('how long')) {
      return botResponses.access;
    }
    if (lowerMessage.includes('download')) {
      return botResponses.download;
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return botResponses.pricing;
    }
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
      return botResponses.payment;
    }
    if (
      lowerMessage.includes('issue') ||
      lowerMessage.includes('problem') ||
      lowerMessage.includes('error')
    ) {
      return botResponses.technical;
    }

    return botResponses.default;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(question),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 bg-white rounded-lg shadow-2xl flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="font-bold text-lg">Chat Support</h3>
              <p className="text-sm text-blue-100">Usually responds in minutes</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="space-y-2">
                  {commonQuestions.slice(0, 3).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(q)}
                      className="w-full text-left text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
