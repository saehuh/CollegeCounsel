import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  FileText, 
  FolderOpen, 
  Calendar, 
  BookOpen, 
  User,
  Settings,
  HelpCircle,
  GraduationCap,
  BookMarked
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
  const location = useLocation();
  const { sidebarOpen } = useAppContext();
  
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'College Search', icon: <Search size={20} />, path: '/college-search' },
    { name: 'Applications', icon: <FileText size={20} />, path: '/applications' },
    { name: 'Course Planning', icon: <BookMarked size={20} />, path: '/course-planning' },
    { name: 'Documents', icon: <FolderOpen size={20} />, path: '/documents' },
    { name: 'Calendar', icon: <Calendar size={20} />, path: '/calendar' },
    { name: 'Resources', icon: <BookOpen size={20} />, path: '/resources' },
    { name: 'Profile', icon: <User size={20} />, path: '/profile' },
  ];

  const sidebarClass = sidebarOpen 
    ? "w-64 transition-all duration-300 ease-in-out" 
    : "w-0 md:w-20 transition-all duration-300 ease-in-out overflow-hidden";

  return (
    <aside className={`bg-white border-r border-gray-200 h-full flex flex-col ${sidebarClass}`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 text-white p-2 rounded-lg">
            <GraduationCap size={24} />
          </div>
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gradient">CollegeCompass</h1>
          )}
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <span className="text-current">{item.icon}</span>
                  {sidebarOpen && <span className="font-medium">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 mt-auto">
        <ul className="space-y-1">
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <Settings size={20} />
              {sidebarOpen && <span className="font-medium">Settings</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <HelpCircle size={20} />
              {sidebarOpen && <span className="font-medium">Help Center</span>}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;