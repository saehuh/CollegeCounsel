import React from 'react';
import { Star, MapPin, BookOpen } from 'lucide-react';

interface College {
  id: number;
  name: string;
  location: string;
  image: string;
  acceptance: string;
  programs: string[];
  isFavorite: boolean;
  category: 'reach' | 'target' | 'safety';
}

const CollegeCards = () => {
  const colleges: College[] = [
    {
      id: 1,
      name: 'Stanford University',
      location: 'Stanford, CA',
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      acceptance: '4%',
      programs: ['Computer Science', 'Engineering'],
      isFavorite: true,
      category: 'reach'
    },
    {
      id: 2,
      name: 'University of Michigan',
      location: 'Ann Arbor, MI',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      acceptance: '23%',
      programs: ['Business', 'Psychology'],
      isFavorite: true,
      category: 'target'
    },
    {
      id: 3,
      name: 'UC Berkeley',
      location: 'Berkeley, CA',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      acceptance: '16%',
      programs: ['Engineering', 'Economics'],
      isFavorite: false,
      category: 'target'
    },
  ];

  const getCategoryTag = (category: College['category']) => {
    const categories = {
      reach: { bg: 'bg-red-100', text: 'text-red-800', label: 'Reach' },
      target: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Target' },
      safety: { bg: 'bg-green-100', text: 'text-green-800', label: 'Safety' },
    };

    const { bg, text, label } = categories[category];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} ${text}`}>
        {label}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {colleges.map((college) => (
        <div key={college.id} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="h-28 relative">
            <img 
              src={college.image} 
              alt={college.name} 
              className="w-full h-full object-cover"
            />
            <button 
              className={`absolute top-2 right-2 p-1 rounded-full 
                ${college.isFavorite ? 'bg-white/80 text-yellow-500' : 'bg-white/60 text-gray-400'}`}
            >
              <Star size={16} fill={college.isFavorite ? 'currentColor' : 'none'} />
            </button>
            <div className="absolute bottom-2 left-2">
              {getCategoryTag(college.category)}
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-gray-900">{college.name}</h3>
            
            <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs">
              <MapPin size={12} />
              <span>{college.location}</span>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1">
                <BookOpen size={14} className="text-blue-500" />
                <span className="text-xs text-gray-600">{college.programs.join(', ')}</span>
              </div>
              <span className="text-xs font-medium">
                {college.acceptance} acceptance
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeCards;