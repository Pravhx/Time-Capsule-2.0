import React from 'react';
import { Gift, Heart, Star, Cake, GraduationCap, Award } from 'lucide-react';

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      title: 'Birthday Letter',
      description: 'Write a heartfelt message to your future self on your birthday.',
      icon: <Cake className="w-6 h-6" />,
      category: 'Celebration'
    },
    {
      id: 2,
      title: 'Graduation Goals',
      description: 'Set academic and career goals for your graduation day.',
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Achievement'
    },
    {
      id: 3,
      title: 'Love Letter',
      description: 'Express your feelings to someone special in the future.',
      icon: <Heart className="w-6 h-6" />,
      category: 'Personal'
    },
    {
      id: 4,
      title: 'Future Dreams',
      description: 'Document your aspirations and dreams for the years ahead.',
      icon: <Star className="w-6 h-6" />,
      category: 'Inspiration'
    },
    {
      id: 5,
      title: 'Achievement Reminder',
      description: 'Celebrate future accomplishments with a message from the past.',
      icon: <Award className="w-6 h-6" />,
      category: 'Achievement'
    },
    {
      id: 6,
      title: 'Surprise Message',
      description: 'Create a mystery message to surprise your future self.',
      icon: <Gift className="w-6 h-6" />,
      category: 'Fun'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Message Templates</h1>
        <p className="text-purple-200 mb-8">Choose from our curated collection of templates to create your perfect time capsule message.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div 
              key={template.id}
              className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all cursor-pointer"
            >
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {template.icon}
              </div>
              <span className="text-purple-300 text-sm mb-2 inline-block">{template.category}</span>
              <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
              <p className="text-purple-200 mb-4">{template.description}</p>
              <button className="text-purple-300 hover:text-white font-medium">
                Use Template →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}