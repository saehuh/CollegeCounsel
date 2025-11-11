import React from 'react';

interface CollegeApplication {
  id: number;
  name: string;
  progress: number;
  deadline: string;
}

const ProgressTracker = () => {
  const applications: CollegeApplication[] = [
    { id: 1, name: 'Stanford University', progress: 65, deadline: 'Nov 1, 2024' },
    { id: 2, name: 'MIT', progress: 80, deadline: 'Nov 1, 2024' },
    { id: 3, name: 'Harvard University', progress: 40, deadline: 'Jan 1, 2025' },
    { id: 4, name: 'Princeton University', progress: 55, deadline: 'Jan 1, 2025' },
    { id: 5, name: 'UC Berkeley', progress: 25, deadline: 'Nov 30, 2024' },
  ];

  const getColorClass = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <div key={app.id} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-900">{app.name}</span>
            <span className="text-gray-500">{app.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getColorClass(app.progress)} transition-all duration-500 ease-out`}
              style={{ width: `${app.progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            Deadline: {app.deadline}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;