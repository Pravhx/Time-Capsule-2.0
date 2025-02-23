import React, { useState } from 'react';
import { Calendar, Clock, Send } from 'lucide-react';

export default function CreatePage() {
  const [message, setMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create a Time Capsule</h1>
        
        <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Your Message</label>
            <textarea
              className="w-full h-48 bg-white bg-opacity-20 rounded-lg p-4 text-white placeholder-purple-200"
              placeholder="Write your message to your future self..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Delivery Date</label>
            <div className="flex items-center space-x-4">
              <Calendar className="w-6 h-6" />
              <input
                type="date"
                className="bg-white bg-opacity-20 rounded-lg p-3 text-white"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition-all flex items-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Schedule Delivery</span>
            </button>
            <div className="flex items-center text-purple-200">
              <Clock className="w-5 h-5 mr-2" />
              <span>Delivery countdown will appear here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}