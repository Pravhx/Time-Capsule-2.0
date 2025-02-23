import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import MemoriesPage from './pages/MemoriesPage';
import TemplatesPage from './pages/TemplatesPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-16 text-center text-purple-300">
          <p>© 2025 Time Capsule. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;