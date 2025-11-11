import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'green' | 'yellow' | 'red';
  link: string;
}

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  color, 
  link 
}: DashboardCardProps) => {
  
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-100',
    purple: 'bg-purple-50 border-purple-100',
    green: 'bg-green-50 border-green-100',
    yellow: 'bg-yellow-50 border-yellow-100',
    red: 'bg-red-50 border-red-100',
  };
  
  const valueColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
  };
  
  return (
    <div className={`rounded-xl p-6 border ${colorClasses[color]} hover:shadow-md transition-all duration-300`}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold mt-2 ${valueColorClasses[color]}`}>{value}</p>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      
      <a 
        href={link} 
        className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors duration-200"
      >
        View details <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default DashboardCard;