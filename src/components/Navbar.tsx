import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Timer, Settings } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Timer className="w-8 h-8" />
          <span className="text-2xl font-bold">Time Capsule</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/create" 
            className={`font-medium ${isActive('/create') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Create Capsule
          </Link>
          <Link 
            to="/dashboard" 
            className={`font-medium ${isActive('/dashboard') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/memories" 
            className={`font-medium ${isActive('/memories') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Memories
          </Link>
          <Link 
            to="/templates" 
            className={`font-medium ${isActive('/templates') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Timer, Settings } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Timer className="w-8 h-8" />
          <span className="text-2xl font-bold">Time Capsule</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/create" 
            className={`font-medium ${isActive('/create') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Create Capsule
          </Link>
          <Link 
            to="/dashboard" 
            className={`font-medium ${isActive('/dashboard') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/memories" 
            className={`font-medium ${isActive('/memories') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Memories
          </Link>
          <Link 
            to="/templates" 
            className={`font-medium ${isActive('/templates') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Templates
          </Link>
          <Link 
            to="/settings" 
            className={`font-medium ${isActive('/settings') ? 'text-purple-300' : 'text-white hover:text-purple-300'}`}
          >
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}
