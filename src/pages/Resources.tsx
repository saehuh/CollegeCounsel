import React, { useState } from 'react';
import { Search, Bookmark, BookOpen, FileText, PlayCircle, Users, Filter, BookMarked, Tag, ArrowRight } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  image?: string;
  type: 'article' | 'guide' | 'video' | 'webinar' | 'checklist';
  category: 'essay' | 'financial' | 'college-life' | 'application' | 'interviews' | 'testing';
  readTime: string;
  date: string;
  saved: boolean;
  featured?: boolean;
}

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Resources', icon: <BookOpen size={16} /> },
    { id: 'essay', name: 'Essay Writing', icon: <FileText size={16} /> },
    { id: 'financial', name: 'Financial Aid', icon: <BookMarked size={16} /> },
    { id: 'college-life', name: 'College Life', icon: <Users size={16} /> },
    { id: 'application', name: 'Applications', icon: <FileText size={16} /> },
    { id: 'interviews', name: 'Interviews', icon: <Users size={16} /> },
    { id: 'testing', name: 'Testing', icon: <BookOpen size={16} /> },
  ];
  
  const resources: Resource[] = [
    {
      id: 1,
      title: 'How to Write a Compelling College Essay',
      description: 'Learn the strategies that admissions officers look for in personal statements and supplemental essays.',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      type: 'guide',
      category: 'essay',
      readTime: '10 min read',
      date: 'Oct 2, 2024',
      saved: true,
      featured: true
    },
    {
      id: 2,
      title: 'Financial Aid 101: Navigating FAFSA and CSS Profile',
      description: 'A comprehensive guide to understanding and maximizing your financial aid options.',
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      type: 'article',
      category: 'financial',
      readTime: '15 min read',
      date: 'Oct 5, 2024',
      saved: false
    },
    {
      id: 3,
      title: 'College Visit Checklist: What to Look For',
      description: 'Make the most of your campus visits with this comprehensive checklist of things to observe and questions to ask.',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      type: 'checklist',
      category: 'college-life',
      readTime: '5 min read',
      date: 'Oct 7, 2024',
      saved: true
    },
    {
      id: 4,
      title: 'How to Prepare for College Interviews',
      description: 'Expert tips for acing your college interviews, including common questions and strategies for making a great impression.',
      image: 'https://images.pexels.com/photos/7642004/pexels-photo-7642004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      type: 'video',
      category: 'interviews',
      readTime: '12 min video',
      date: 'Oct 10, 2024',
      saved: false
    },
    {
      id: 5,
      title: 'The Ultimate SAT/ACT Study Timeline',
      description: 'A month-by-month plan to prepare for standardized tests and maximize your score potential.',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      type: 'guide',
      category: 'testing',
      readTime: '8 min read',
      date: 'Oct 12, 2024',
      saved: true
    },
    {
      id: 6,
      title: 'Common App vs. Coalition App: Which to Choose?',
      description: 'A comparison of the two main college application platforms to help you decide which is best for your needs.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      type: 'article',
      category: 'application',
      readTime: '7 min read',
      date: 'Oct 15, 2024',
      saved: false
    },
  ];

  const getTypeTag = (type: Resource['type']) => {
    const types = {
      article: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Article' },
      guide: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Guide' },
      video: { bg: 'bg-red-100', text: 'text-red-800', label: 'Video' },
      webinar: { bg: 'bg-green-100', text: 'text-green-800', label: 'Webinar' },
      checklist: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Checklist' },
    };

    const { bg, text, label } = types[type];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} ${text}`}>
        {label}
      </span>
    );
  };

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'article':
        return <FileText size={40} className="text-blue-500" />;
      case 'guide':
        return <BookOpen size={40} className="text-purple-500" />;
      case 'video':
        return <PlayCircle size={40} className="text-red-500" />;
      case 'webinar':
        return <Users size={40} className="text-green-500" />;
      case 'checklist':
        return <FileText size={40} className="text-yellow-500" />;
      default:
        return <BookOpen size={40} className="text-gray-500" />;
    }
  };

  const filteredResources = resources.filter(resource => 
    (activeCategory === 'all' || resource.category === activeCategory) &&
    (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredResource = resources.find(r => r.featured);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center fade-in">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
          <p className="text-gray-600 mt-1">Helpful guides and articles for your college journey</p>
        </div>
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search resources..."
            className="bg-white w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {featuredResource && (
        <div className="relative rounded-xl overflow-hidden shadow-md h-64 slide-up">
          <img 
            src={featuredResource.image} 
            alt={featuredResource.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="flex gap-2 mb-2">
              {getTypeTag(featuredResource.type)}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                Featured
              </span>
            </div>
            <h2 className="text-2xl font-bold">{featuredResource.title}</h2>
            <p className="text-sm text-white/80 mt-1 line-clamp-2">{featuredResource.description}</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-3">
                <span className="text-xs">{featuredResource.readTime}</span>
                <span className="text-xs">{featuredResource.date}</span>
              </div>
              <button className="px-4 py-1.5 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors duration-200">
                Read Now
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-5 space-y-5">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button 
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200
                        ${activeCategory === category.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
                    >
                      <span className={`${activeCategory === category.id ? 'text-blue-500' : 'text-gray-500'}`}>
                        {category.icon}
                      </span>
                      <span className="text-sm">{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <ResourceTag text="Essays" />
                <ResourceTag text="Financial Aid" />
                <ResourceTag text="SAT/ACT" />
                <ResourceTag text="Interviews" />
                <ResourceTag text="Scholarships" />
                <ResourceTag text="Applications" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Saved Resources</h3>
              <button className="text-blue-500 text-sm font-medium flex items-center gap-1">
                View All Saved <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {activeCategory === 'all' ? 'All Resources' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <button className="flex items-center gap-2 text-sm text-gray-600">
                <Filter size={14} />
                <span>Filter</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredResources.map(resource => (
                <div 
                  key={resource.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {resource.image ? (
                    <div className="h-40 relative">
                      <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        className={`absolute top-2 right-2 p-1.5 rounded-full bg-white/80 
                          ${resource.saved ? 'text-yellow-500' : 'text-gray-400'}`}
                        aria-label={resource.saved ? "Remove from saved" : "Save resource"}
                      >
                        <Bookmark size={16} fill={resource.saved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  ) : (
                    <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                      {getTypeIcon(resource.type)}
                      <button 
                        className={`absolute top-2 right-2 p-1.5 rounded-full bg-white 
                          ${resource.saved ? 'text-yellow-500' : 'text-gray-400'}`}
                        aria-label={resource.saved ? "Remove from saved" : "Save resource"}
                      >
                        <Bookmark size={16} fill={resource.saved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex gap-2 mb-2">
                      {getTypeTag(resource.type)}
                      <span className="text-xs text-gray-500">{resource.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{resource.readTime}</span>
                      <button className="text-blue-500 text-sm font-medium">Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="text-blue-500">
                <BookOpen size={48} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900">Need personalized guidance?</h3>
                <p className="text-sm text-gray-600 mt-1">Schedule a one-on-one session with our expert college counselors.</p>
              </div>
              <button className="btn-primary px-5">Book Session</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceTag = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
    {text}
  </span>
);

export default Resources;