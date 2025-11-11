import React, { useState } from 'react';
import { Search, Filter, ChevronDown, SlidersHorizontal, GraduationCap } from 'lucide-react';
import { College } from '../types/college';
import { colleges } from '../data/colleges';
import CollegeCard from '../components/college/CollegeCard';

interface Filters {
  type: string;
  location: string;
  program: string;
  acceptance: string;
  ranking: string;
  tuition: string;
  satRange: string;
}

const CollegeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    type: '',
    location: '',
    program: '',
    acceptance: '',
    ranking: '',
    tuition: '',
    satRange: ''
  });

  const locations = ['Northeast', 'Midwest', 'South', 'West', 'International'];
  const programs = Array.from(new Set(colleges.flatMap(college => college.programs))).sort();
  
  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredColleges = colleges.filter(college => {
    if (searchQuery && !college.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    if (filters.ranking) {
      const rank = college.details?.ranking?.national;
      switch (filters.ranking) {
        case 'top-10':
          if (!rank || rank > 10) return false;
          break;
        case 'top-25':
          if (!rank || rank > 25) return false;
          break;
        case 'top-50':
          if (!rank || rank > 50) return false;
          break;
      }
    }

    if (filters.acceptance) {
      const rate = parseInt(college.acceptance);
      switch (filters.acceptance) {
        case 'very-selective':
          if (rate >= 10) return false;
          break;
        case 'selective':
          if (rate < 10 || rate > 25) return false;
          break;
        case 'moderate':
          if (rate < 25 || rate > 50) return false;
          break;
      }
    }

    if (filters.program && !college.programs.includes(filters.program)) {
      return false;
    }

    return true;
  });

  const handleToggleFavorite = (id: number) => {
    // Implement favorite toggle logic
  };

  const handleViewDetails = (id: number) => {
    // Implement view details logic
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center fade-in">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">College Search</h1>
          <p className="text-gray-600 mt-1">Find your perfect college match based on your preferences</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search colleges..."
              className="bg-white w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Filter size={18} />
            <span>Filters</span>
            <ChevronDown size={16} className={`transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      {showFilters && (
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 slide-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-gray-500" />
              <h2 className="font-bold text-gray-900">Advanced Filters</h2>
            </div>
            <button 
              onClick={() => setFilters({ type: '', location: '', program: '', acceptance: '', ranking: '', tuition: '', satRange: '' })}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ranking</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.ranking}
                onChange={(e) => handleFilterChange('ranking', e.target.value)}
              >
                <option value="">Any Ranking</option>
                <option value="top-10">Top 10 Schools</option>
                <option value="top-25">Top 25 Schools</option>
                <option value="top-50">Top 50 Schools</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Program/Major</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.program}
                onChange={(e) => handleFilterChange('program', e.target.value)}
              >
                <option value="">Any Program</option>
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Acceptance Rate</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.acceptance}
                onChange={(e) => handleFilterChange('acceptance', e.target.value)}
              >
                <option value="">Any Acceptance Rate</option>
                <option value="very-selective">Very Selective (&lt;10%)</option>
                <option value="selective">Selective (10-25%)</option>
                <option value="moderate">Moderate (25-50%)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">Any Location</option>
                {locations.map(location => (
                  <option key={location} value={location.toLowerCase()}>{location}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SAT Range</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.satRange}
                onChange={(e) => handleFilterChange('satRange', e.target.value)}
              >
                <option value="">Any SAT Range</option>
                <option value="1500-1600">1500-1600</option>
                <option value="1400-1500">1400-1500</option>
                <option value="1300-1400">1300-1400</option>
                <option value="1200-1300">1200-1300</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual Tuition</label>
              <select
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.tuition}
                onChange={(e) => handleFilterChange('tuition', e.target.value)}
              >
                <option value="">Any Tuition Range</option>
                <option value="under-30k">Under $30,000</option>
                <option value="30k-45k">$30,000 - $45,000</option>
                <option value="45k-60k">$45,000 - $60,000</option>
                <option value="over-60k">Over $60,000</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
            onToggleFavorite={handleToggleFavorite}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No colleges found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;