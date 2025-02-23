import React from 'react';
import { Book, Image, MessageCircle, Music, Video } from 'lucide-react';

export default function MemoriesPage() {
  const memories = [
    {
      id: 1,
      type: 'photo',
      title: 'Summer Vacation 2024',
      preview: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      date: '2024-06-15'
    },
    {
      id: 2,
      type: 'journal',
      title: 'Dear Future Me',
      preview: 'A letter about my hopes and dreams...',
      date: '2024-07-01'
    },
    {
      id: 3,
      type: 'audio',
      title: 'Voice Message',
      preview: 'Voice recording for my 30th birthday',
      date: '2024-08-20'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'photo':
        return <Image className="w-6 h-6" />;
      case 'journal':
        return <Book className="w-6 h-6" />;
      case 'audio':
        return <Music className="w-6 h-6" />;