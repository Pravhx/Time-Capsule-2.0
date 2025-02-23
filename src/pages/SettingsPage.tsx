import React from 'react';
import { Bell, Lock, Mail, User, Globe, Palette } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-500 p-3 rounded-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Profile Settings</h2>
                <p className="text-purple-200">Manage your personal information</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Display Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white bg-opacity-20 rounded-lg p-3 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white bg-opacity-20 rounded-lg p-3 text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-500 p-3 rounded-lg">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Notification Preferences</h2>
                <p className="text-purple-200">Control how you receive notifications</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-purple-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery Reminders</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-purple-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-500 p-3 rounded-lg">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Privacy & Security</h2>
                <p className="text-purple-200">Manage your security preferences</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-purple-500 text-white p-3 rounded-lg font-medium hover:bg-purple-600 transition-all">
                Change Password
              </button>
              <button className="w-full bg-purple-500 bg-opacity-50 text-white p-3 rounded-lg font-medium hover:bg-opacity-60 transition-all">
                Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}