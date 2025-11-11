import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  college: string;
  type: 'essay' | 'recommendation' | 'application' | 'interview' | 'documentation';
  status: 'completed' | 'pending' | 'overdue';
}

const TaskList = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Common App Essay',
      dueDate: 'Oct 15, 2024',
      college: 'Common Application',
      type: 'essay',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Request Teacher Recommendation',
      dueDate: 'Oct 20, 2024',
      college: 'All Applications',
      type: 'recommendation',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Submit Stanford Application',
      dueDate: 'Nov 1, 2024',
      college: 'Stanford University',
      type: 'application',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Prepare for Alumni Interview',
      dueDate: 'Nov 10, 2024',
      college: 'Princeton University',
      type: 'interview',
      status: 'pending'
    },
  ];

  const getTypeTag = (type: Task['type']) => {
    const types = {
      essay: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Essay' },
      recommendation: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Recommendation' },
      application: { bg: 'bg-green-100', text: 'text-green-800', label: 'Application' },
      interview: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Interview' },
      documentation: { bg: 'bg-red-100', text: 'text-red-800', label: 'Documentation' },
    };

    const { bg, text, label } = types[type];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} ${text}`}>
        {label}
      </span>
    );
  };

  const TaskCheckbox = ({ status }: { status: Task['status'] }) => {
    if (status === 'completed') {
      return (
        <CheckCircle size={20} className="text-green-500" />
      );
    }
    
    return (
      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
    );
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
          <TaskCheckbox status={task.status} />
          
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{task.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {getTypeTag(task.type)}
              <span className="text-xs text-gray-500">{task.college}</span>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={14} className="mr-1" />
            {task.dueDate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;