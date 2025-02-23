import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Time Capsule</h1>
        
        <div className="prose prose-invert mx-auto">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-purple-200 mb-6">
              Time Capsule was born from a simple idea: what if we could send messages to our future selves? 
              We believe in the power of self-reflection and the magic of receiving thoughts and memories 
              from your past self at just the right moment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                <h3 className="font-semibold mb-2">Made with Love</h3>
                <p className="text-sm text-purple-200">Crafted with care for meaningful connections</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                <h3 className="font-semibold mb-2">Secure & Private</h3>
                <p className="text-sm text-purple-200">Your messages are encrypted and protected</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                <h3 className="font-semibold mb-2">Perfect Timing</h3>
                <p className="text-sm text-purple-200">Delivered exactly when you want</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ol className="space-y-4 text-purple-200">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                Write your message and add any attachments you'd like to include.
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                Choose your delivery date - it can be any date in the future.
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                We'll safely store your message and deliver it at the exact date and time you specified.
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                Receive your past message and relive those memories!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}