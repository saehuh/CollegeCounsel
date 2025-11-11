import React from 'react';
import { Calendar, ArrowRight, Clock, BookOpen, Bookmark } from 'lucide-react';
import DashboardCard from '../components/dashboard/DashboardCard';
import TaskList from '../components/dashboard/TaskList';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import CollegeCards from '../components/dashboard/CollegeCards';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="fade-in">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Emma!</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your college applications.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 slide-up">
        <DashboardCard 
          title="Upcoming Tasks" 
          value="4" 
          description="Due this week" 
          icon={<Calendar className="text-blue-500" />}
          color="blue"
          link="/applications"
        />
        <DashboardCard 
          title="Applications" 
          value="7" 
          description="In progress" 
          icon={<FileIcon className="text-purple-500" />}
          color="purple"
          link="/applications"
        />
        <DashboardCard 
          title="Deadlines" 
          value="Nov 1" 
          description="Next deadline" 
          icon={<Clock className="text-yellow-500" />}
          color="yellow"
          link="/calendar"
        />
        <DashboardCard 
          title="Resources" 
          value="12" 
          description="New articles" 
          icon={<BookOpen className="text-green-500" />}
          color="green"
          link="/resources"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Tasks</h2>
              <Link to="/applications" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <TaskList />
          </div>
          
          <div className="card p-6 fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your College List</h2>
              <Link to="/college-search" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                Explore more <ArrowRight size={16} />
              </Link>
            </div>
            <CollegeCards />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Application Progress</h2>
            <ProgressTracker />
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Saved Resources</h2>
              <Link to="/resources" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              <ResourceCard 
                title="How to Write a Compelling Essay"
                category="Essay Tips"
                time="5 min read"
              />
              <ResourceCard 
                title="Financial Aid 101: Everything You Need to Know"
                category="Financial Aid"
                time="10 min read"
              />
              <ResourceCard 
                title="Virtual Campus Tour Guide"
                category="College Visits"
                time="Interactive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FileIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const ResourceCard = ({ title, category, time }: { title: string; category: string; time: string }) => (
  <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
    <Bookmark className="text-gray-400 mt-0.5" size={18} />
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="tag tag-blue">{category}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  </div>
);

const Link = ({to, children, className}: {to: string; children: React.ReactNode; className?: string}) => (
  <a href={to} className={className}>
    {children}
  </a>
)

export default Dashboard;