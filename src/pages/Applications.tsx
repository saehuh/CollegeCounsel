import React, { useState } from 'react';
import { Plus, Calendar, Clock, CheckCircle, AlertCircle, Info, ExternalLink, Filter, ChevronDown } from 'lucide-react';

interface Application {
  id: number;
  college: string;
  logo: string;
  deadline: string;
  status: 'not_started' | 'in_progress' | 'submitted' | 'complete';
  progress: number;
  tasks: {
    total: number;
    completed: number;
  };
  requirements: string[];
  category: 'reach' | 'target' | 'safety';
}

const Applications = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  const applications: Application[] = [
    {
      id: 1,
      college: 'Stanford University',
      logo: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      deadline: 'Nov 1, 2024',
      status: 'in_progress',
      progress: 65,
      tasks: {
        total: 7,
        completed: 4
      },
      requirements: ['Common App', 'Coalition App', 'Stanford Supplement', 'Transcripts', 'Teacher Recs (2)', 'SAT/ACT'],
      category: 'reach'
    },
    {
      id: 2,
      college: 'MIT',
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      deadline: 'Nov 1, 2024',
      status: 'in_progress',
      progress: 80,
      tasks: {
        total: 8,
        completed: 6
      },
      requirements: ['MIT Application', 'Essays (5)', 'Activities', 'Transcripts', 'Teacher Recs (2)', 'SAT/ACT'],
      category: 'reach'
    },
    {
      id: 3,
      college: 'University of Michigan',
      logo: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      deadline: 'Nov 15, 2024',
      status: 'not_started',
      progress: 0,
      tasks: {
        total: 6,
        completed: 0
      },
      requirements: ['Common App', 'Michigan Supplement', 'Transcripts', 'Teacher Rec (1)', 'SAT/ACT'],
      category: 'target'
    },
    {
      id: 4,
      college: 'Princeton University',
      logo: 'https://images.pexels.com/photos/1237120/pexels-photo-1237120.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      deadline: 'Jan 1, 2025',
      status: 'in_progress',
      progress: 55,
      tasks: {
        total: 7,
        completed: 4
      },
      requirements: ['Common App', 'Princeton Supplement', 'Graded Paper', 'Transcripts', 'Teacher Recs (2)', 'SAT/ACT'],
      category: 'reach'
    },
    {
      id: 5,
      college: 'University of Texas at Austin',
      logo: 'https://images.pexels.com/photos/2662180/pexels-photo-2662180.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      deadline: 'Dec 1, 2024',
      status: 'not_started',
      progress: 0,
      tasks: {
        total: 5,
        completed: 0
      },
      requirements: ['ApplyTexas', 'Essays (3)', 'Transcripts', 'SAT/ACT'],
      category: 'safety'
    },
  ];

  const getStatusBadge = (status: Application['status']) => {
    const statusInfo = {
      not_started: { color: 'bg-gray-100 text-gray-800', icon: <Clock size={14} className="mr-1" />, text: 'Not Started' },
      in_progress: { color: 'bg-blue-100 text-blue-800', icon: <Info size={14} className="mr-1" />, text: 'In Progress' },
      submitted: { color: 'bg-yellow-100 text-yellow-800', icon: <AlertCircle size={14} className="mr-1" />, text: 'Submitted' },
      complete: { color: 'bg-green-100 text-green-800', icon: <CheckCircle size={14} className="mr-1" />, text: 'Complete' }
    };

    const { color, icon, text } = statusInfo[status];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
        {icon}
        {text}
      </span>
    );
  };

  const getCategoryTag = (category: Application['category']) => {
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

  const getProgressColorClass = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center fade-in">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
          <p className="text-gray-600 mt-1">Track and manage your college applications</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={16} />
          <span>Add College</span>
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm slide-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4 flex items-center">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Deadline</p>
              <p className="text-xl font-bold text-gray-900">Nov 1, 2024</p>
              <p className="text-xs text-gray-500">Stanford, MIT</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 flex items-center">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Tasks Completed</p>
              <p className="text-xl font-bold text-gray-900">14 of 33</p>
              <p className="text-xs text-gray-500">42% complete</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 flex items-center">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <FileIcon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Applications</p>
              <p className="text-xl font-bold text-gray-900">5 Colleges</p>
              <p className="text-xs text-gray-500">2 Reach, 2 Target, 1 Safety</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Your Applications</h2>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Filter size={16} />
          <span className="text-sm">Filters</span>
          <ChevronDown size={14} className={`transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg border border-gray-200 slide-up">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
              <option value="">All Statuses</option>
              <option value="not_started">Not Started</option>
              <option value="in_progress">In Progress</option>
              <option value="submitted">Submitted</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
              <option value="">All Categories</option>
              <option value="reach">Reach</option>
              <option value="target">Target</option>
              <option value="safety">Safety</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
            <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
              <option value="">All Deadlines</option>
              <option value="upcoming">Upcoming (30 days)</option>
              <option value="thisYear">This Year</option>
              <option value="nextYear">Next Year</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Progress</label>
            <select className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
              <option value="">Any Progress</option>
              <option value="complete">Complete (100%)</option>
              <option value="almostComplete">Almost Complete (&gt;75%)</option>
              <option value="halfway">Halfway (&gt;50%)</option>
              <option value="justStarted">Just Started (&lt;25%)</option>
              <option value="notStarted">Not Started (0%)</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="space-y-4 fade-in">
        {applications.map((app) => (
          <div 
            key={app.id} 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-lg overflow-hidden">
                    <img 
                      src={app.logo} 
                      alt={app.college} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{app.college}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {getStatusBadge(app.status)}
                        {getCategoryTag(app.category)}
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          Due: {app.deadline}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 md:mt-0 flex gap-2">
                      <button className="btn-outline text-sm py-1.5">View Details</button>
                      <button className="btn-primary text-sm py-1.5">Continue</button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Progress</span>
                      <span className="text-gray-500">{app.progress}% • {app.tasks.completed}/{app.tasks.total} tasks complete</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getProgressColorClass(app.progress)} transition-all duration-500 ease-out`}
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-2">Requirements:</div>
                    <div className="flex flex-wrap gap-2">
                      {app.requirements.map((req, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FileIcon = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export default Applications;