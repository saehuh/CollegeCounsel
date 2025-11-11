import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'deadline' | 'meeting' | 'tour' | 'interview' | 'test';
  location?: string;
  description?: string;
  participants?: string[];
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const events: Event[] = [
    {
      id: 1,
      title: 'Stanford Application Deadline',
      date: '2024-11-01',
      time: '11:59 PM',
      type: 'deadline',
      description: 'Restrictive Early Action deadline'
    },
    {
      id: 2,
      title: 'Meeting with Counselor',
      date: '2024-10-15',
      time: '3:30 PM',
      type: 'meeting',
      location: 'High School Guidance Office',
      description: 'Review college list and application status',
      participants: ['Ms. Johnson', 'You']
    },
    {
      id: 3,
      title: 'UC Berkeley Virtual Tour',
      date: '2024-10-18',
      time: '4:00 PM',
      type: 'tour',
      description: 'Virtual campus tour with live Q&A',
      location: 'Zoom'
    },
    {
      id: 4,
      title: 'Princeton Alumni Interview',
      date: '2024-11-10',
      time: '5:00 PM',
      type: 'interview',
      location: 'Local Coffee Shop',
      participants: ['Sarah Williams (Alum)', 'You']
    },
    {
      id: 5,
      title: 'SAT Test Date',
      date: '2024-10-21',
      time: '8:00 AM',
      type: 'test',
      location: 'Central High School',
      description: 'Last SAT before early applications'
    },
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getTypeColor = (type: Event['type']) => {
    const types = {
      deadline: 'bg-red-100 text-red-800 border-red-200',
      meeting: 'bg-blue-100 text-blue-800 border-blue-200',
      tour: 'bg-purple-100 text-purple-800 border-purple-200',
      interview: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      test: 'bg-green-100 text-green-800 border-green-200',
    };
    return types[type];
  };

  const getTypeIcon = (type: Event['type']) => {
    switch (type) {
      case 'deadline':
        return <Clock size={16} />;
      case 'meeting':
        return <Users size={16} />;
      case 'tour':
        return <MapPin size={16} />;
      case 'interview':
        return <Users size={16} />;
      case 'test':
        return <CalendarIcon size={16} />;
      default:
        return <CalendarIcon size={16} />;
    }
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getEventsForDate = (date: Date) => {
    const dateString = formatDate(date);
    return events.filter(event => event.date === dateString);
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  const hasEvents = (day: number) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = formatDate(date);
    return events.some(event => event.date === dateString);
  };

  const onSelectDay = (day: number | null) => {
    if (day) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(date);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center fade-in">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600 mt-1">Track important dates, deadlines, and meetings</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={16} />
          <span>Add Event</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Next month"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays().map((day, index) => {
                const isToday = day && 
                  new Date().getDate() === day && 
                  new Date().getMonth() === currentMonth.getMonth() && 
                  new Date().getFullYear() === currentMonth.getFullYear();
                
                const isSelected = day && 
                  selectedDate.getDate() === day && 
                  selectedDate.getMonth() === currentMonth.getMonth() && 
                  selectedDate.getFullYear() === currentMonth.getFullYear();
                
                const hasEventsDot = day && hasEvents(day);
                
                return (
                  <div key={index} className="aspect-square">
                    {day ? (
                      <button
                        onClick={() => onSelectDay(day)}
                        className={`w-full h-full flex flex-col items-center justify-center relative rounded-md transition-all duration-200
                          ${isToday ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-50'}
                          ${isSelected ? 'ring-2 ring-blue-500' : ''}
                        `}
                      >
                        <span className={`text-sm ${isToday ? 'font-bold' : ''}`}>{day}</span>
                        {hasEventsDot && (
                          <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        )}
                      </button>
                    ) : (
                      <div className="w-full h-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </h2>
              <p className="text-sm text-gray-500">
                {selectedDateEvents.length === 0 
                  ? 'No events scheduled for today' 
                  : `${selectedDateEvents.length} event${selectedDateEvents.length === 1 ? '' : 's'}`
                }
              </p>
            </div>
            
            <div className="space-y-3">
              {selectedDateEvents.length === 0 ? (
                <div className="text-center py-10">
                  <CalendarIcon size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">No events for this date</p>
                  <button className="mt-3 text-blue-500 text-sm font-medium">+ Add event</button>
                </div>
              ) : (
                selectedDateEvents.map(event => (
                  <div 
                    key={event.id} 
                    className={`p-4 rounded-lg border ${getTypeColor(event.type)}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center gap-1 mt-2 text-sm">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                        
                        {event.location && (
                          <div className="flex items-center gap-1 mt-1 text-sm">
                            <MapPin size={14} />
                            <span>{event.location}</span>
                          </div>
                        )}
                        
                        {event.description && (
                          <p className="mt-2 text-sm">{event.description}</p>
                        )}
                        
                        {event.participants && event.participants.length > 0 && (
                          <div className="mt-2 flex items-center gap-1 text-sm">
                            <Users size={14} />
                            <span>{event.participants.join(', ')}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-2 rounded-full bg-white">
                        {getTypeIcon(event.type)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-5 mt-5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Deadlines</h2>
            <div className="space-y-3">
              {events
                .filter(event => event.type === 'deadline')
                .slice(0, 3)
                .map(event => (
                  <div key={event.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="p-2 rounded-full bg-red-100 text-red-600">
                      <Clock size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {event.time}
                      </p>
                      {event.description && (
                        <p className="text-xs text-gray-500 mt-1">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;