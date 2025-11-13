'use client';

import { useState } from 'react';
import { useSupportStore } from '@/store/supportStore';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    category: 'general' as const,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createTicket } = useSupportStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      createTicket({
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        category: formData.category as any,
      });

      toast.success('Your support ticket has been created! Ticket ID: ' + Date.now());
      setFormData({
        email: '',
        subject: '',
        message: '',
        category: 'general',
      });
    } catch (error) {
      toast.error('Failed to create ticket');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions? Our support team is here to help you. Reach out to us through any of these channels.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">support@padhalilikhai.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">123 Education Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing Issue</option>
              <option value="course">Course Question</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more..."
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2"
          >
            <Send size={18} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
