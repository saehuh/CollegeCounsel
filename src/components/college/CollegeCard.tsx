import React from 'react';
import { Star, MapPin, GraduationCap, Users, Trophy, Building2 } from 'lucide-react';
import { College } from '../../types/college';

interface CollegeCardProps {
  college: College;
  onToggleFavorite: (id: number) => void;
  onViewDetails: (id: number) => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, onToggleFavorite, onViewDetails }) => {
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
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-48 relative">
        <img 
          src={college.image} 
          alt={college.name} 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={() => onToggleFavorite(college.id)}
          className={`absolute top-3 right-3 p-1.5 rounded-full 
            ${college.isFavorite ? 'bg-white/80 text-yellow-500' : 'bg-white/60 text-gray-400'}`}
          aria-label={college.isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star size={18} fill={college.isFavorite ? 'currentColor' : 'none'} />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-2">
          {getCategoryTag(college.category)}
          {college.rank && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Trophy size={12} />
              Rank #{college.rank}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900">{college.name}</h3>
        
        <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
          <MapPin size={14} />
          <span>{college.location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-1">
              <GraduationCap size={14} />
              <span>Acceptance</span>
            </div>
            <p className="font-semibold text-gray-900">{college.acceptance}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-1">
              <Users size={14} />
              <span>Students</span>
            </div>
            <p className="font-semibold text-gray-900">{college.enrollment}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-1">
              <Building2 size={14} />
              <span>Tuition</span>
            </div>
            <p className="font-semibold text-gray-900">{college.tuition}</p>
          </div>
        </div>
        
        <div className="mt-4">
          {college.details && (
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
              {college.details.satRange && (
                <div>SAT: {college.details.satRange}</div>
              )}
              {college.details.actRange && (
                <div>ACT: {college.details.actRange}</div>
              )}
              {college.details.graduationRate && (
                <div>Graduation: {college.details.graduationRate}</div>
              )}
              {college.details.retentionRate && (
                <div>Retention: {college.details.retentionRate}</div>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-1">
            {college.programs.map((program, idx) => (
              <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                {program}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <button 
            onClick={() => onViewDetails(college.id)}
            className="btn-outline text-sm"
          >
            Quick View
          </button>
          <button className="btn-primary text-sm">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;