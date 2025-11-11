import React, { useState } from 'react';
import { User, Edit, X, Check, Calendar, BookOpen, Mail, Phone, MapPin, School, Award, Star, Activity } from 'lucide-react';

interface Student {
  name: string;
  email: string;
  phone: string;
  location: string;
  graduation: string;
  school: string;
  gpa: string;
  sat: string;
  act: string;
  ap: string[];
  honors: string[];
  activities: Activity[];
  counselor: string;
}

interface Activity {
  name: string;
  role: string;
  years: string;
  description: string;
  category: 'leadership' | 'community' | 'academic' | 'work' | 'arts' | 'sports';
}

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const student: Student = {
    name: 'Emma Watson',
    email: 'emma.watson@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    graduation: '2025',
    school: 'Central High School',
    gpa: '4.2',
    sat: '1520',
    act: '34',
    ap: ['Calculus BC', 'Physics C', 'English Literature', 'Computer Science A', 'US History'],
    honors: ['National Honor Society', 'Science Olympiad State Finalist', 'Presidential Service Award'],
    activities: [
      {
        name: 'Student Government',
        role: 'Vice President',
        years: '2022 - Present',
        description: 'Organized school events, managed budget of $10,000, led student initiatives.',
        category: 'leadership'
      },
      {
        name: 'Robotics Team',
        role: 'Team Captain',
        years: '2021 - Present',
        description: 'Led team to regional championship, mentored new members, designed robot components.',
        category: 'academic'
      },
      {
        name: 'Community Food Bank',
        role: 'Volunteer',
        years: '2020 - Present',
        description: 'Organized food drives, packed and distributed meals, 200+ hours of service.',
        category: 'community'
      },
      {
        name: 'School Newspaper',
        role: 'Editor',
        years: '2021 - Present',
        description: 'Edited articles, managed team of writers, published monthly editions.',
        category: 'academic'
      },
    ],
    counselor: 'Mrs. Jennifer Roberts'
  };

  const getActivityIcon = (category: Activity['category']) => {
    switch (category) {
      case 'leadership':
        return <Star size={16} className="text-purple-500" />;
      case 'community':
        return <Users size={16} className="text-green-500" />;
      case 'academic':
        return <BookOpen size={16} className="text-blue-500" />;
      case 'work':
        return <Briefcase size={16} className="text-yellow-500" />;
      case 'arts':
        return <Music size={16} className="text-pink-500" />;
      case 'sports':
        return <Activity size={16} className="text-red-500" />;
      default:
        return <Activity size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center fade-in">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
          <p className="text-gray-600 mt-1">Your personal and academic information</p>
        </div>
        <div>
          {editing ? (
            <div className="flex gap-2">
              <button 
                onClick={() => setEditing(false)} 
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
              <button 
                onClick={() => setEditing(false)} 
                className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
              >
                <Check size={16} />
                <span>Save</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setEditing(true)} 
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            >
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-32"></div>
            <div className="px-6 pb-6 -mt-16">
              <div className="flex justify-center">
                <div className="h-32 w-32 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center text-white text-4xl font-bold">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="text-center mt-3">
                <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                <p className="text-gray-600 mt-1">Class of {student.graduation}</p>
              </div>
              
              <div className="mt-6 space-y-4">
                <ProfileInfoItem icon={<Mail size={16} />} label="Email" value={student.email} />
                <ProfileInfoItem icon={<Phone size={16} />} label="Phone" value={student.phone} />
                <ProfileInfoItem icon={<MapPin size={16} />} label="Location" value={student.location} />
                <ProfileInfoItem icon={<Calendar size={16} />} label="Graduation" value={`May ${student.graduation}`} />
                <ProfileInfoItem icon={<School size={16} />} label="School" value={student.school} />
                <ProfileInfoItem icon={<User size={16} />} label="Counselor" value={student.counselor} />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Academic Summary</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">GPA</p>
                <p className="text-xl font-bold text-blue-600">{student.gpa}</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">SAT</p>
                <p className="text-xl font-bold text-blue-600">{student.sat}</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">ACT</p>
                <p className="text-xl font-bold text-blue-600">{student.act}</p>
              </div>
            </div>
            
            <h3 className="font-medium text-gray-900 mb-2">AP Courses</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {student.ap.map((course, index) => (
                <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                  {course}
                </span>
              ))}
            </div>
            
            <h3 className="font-medium text-gray-900 mb-2">Honors & Awards</h3>
            <ul className="space-y-1">
              {student.honors.map((honor, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Award size={14} className="text-yellow-500 flex-shrink-0" />
                  <span>{honor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
            <div className="space-y-4">
              {student.activities.map((activity, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getActivityIcon(activity.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900">{activity.name}</h3>
                        <span className="text-sm text-gray-500">{activity.years}</span>
                      </div>
                      <p className="text-sm text-blue-600 mb-2">{activity.role}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-2">
                <button className="text-blue-500 text-sm font-medium flex items-center gap-1">
                  <Plus size={14} />
                  Add Activity
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">College Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Preferred Majors</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Computer Science
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Engineering
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Business
                  </span>
                  <button className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                    <Plus size={12} className="mr-1" />
                    Add Major
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Preferred Locations</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    West Coast
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    East Coast
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    Urban
                  </span>
                  <button className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                    <Plus size={12} className="mr-1" />
                    Add Location
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Campus Size</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800">
                    Medium (5,000-15,000)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800">
                    Large (15,000+)
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Other Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                    Strong Research
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                    Study Abroad
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                    Internship Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Application Status</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-2xl font-bold text-blue-600">5</p>
                  <p className="text-xs text-gray-500">In Progress</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="text-2xl font-bold text-green-600">2</p>
                  <p className="text-xs text-gray-500">Applications</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Essays</p>
                  <p className="text-2xl font-bold text-purple-600">8</p>
                  <p className="text-xs text-gray-500">In Progress</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-gray-900 mb-3">Next Steps</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 p-2 bg-red-50 text-sm rounded-md text-red-800">
                    <AlertCircle size={16} className="text-red-500" />
                    <span>Stanford Application due in 15 days</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-yellow-50 text-sm rounded-md text-yellow-800">
                    <Clock size={16} className="text-yellow-500" />
                    <span>Request teacher recommendation by Oct 15</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-blue-50 text-sm rounded-md text-blue-800">
                    <Calendar size={16} className="text-blue-500" />
                    <span>Counselor meeting scheduled for Oct 12</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileInfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-gray-500">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

const Plus = ({ size, className }: { size: number; className?: string }) => (
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
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Users = ({ size, className }: { size: number; className?: string }) => (
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
    className={className}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const AlertCircle = ({ size, className }: { size: number; className?: string }) => (
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
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const Briefcase = ({ size, className }: { size: number; className?: string }) => (
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
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const Music = ({ size, className }: { size: number; className?: string }) => (
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
    className={className}
  >
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

export default Profile;