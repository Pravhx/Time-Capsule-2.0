import React from 'react';
import { Package, Clock, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  const capsules = [
    {
      id: 1,
      title: "Birthday Reflections",
      date: "2025-03-15",
      status: "pending"
    },
    {
      id: 2,
      title: "Future Goals",
      date: "2024-12-31",
      status: "pending"
    },
    {
      id: 3,
      title: "Past Memories",
      date: "2024-08-20",
      status: "delivered"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Time Capsules</h1>
        
        <div className="grid gap-6">
          {capsules.map((capsule) => (
            <div 
              key={capsule.id}
              className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Package className="w-8 h-8 text-purple-300" />
                <div>
                  <h3 className="text-xl font-semibold">{capsule.title}</h3>
                  <div className="flex items-center text-purple-200 mt-1">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Delivery: {capsule.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {capsule.status === 'delivered' ? (
                  <span className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    Delivered
                  </span>
                ) : (
                  <button className="text-purple-300 hover:text-white transition-colors">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}