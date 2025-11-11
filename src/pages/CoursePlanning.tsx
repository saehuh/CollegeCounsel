import React, { useState } from 'react';
import { BookOpen, Plus, AlertCircle, Award, Trash2, Save, Info } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  type: 'AP' | 'Honors' | 'Regular';
  subject: string;
  grade: 9 | 10 | 11 | 12;
  semester: 1 | 2;
  prerequisites?: string[];
  recommended?: boolean;
}

interface Goal {
  type: 'AP' | 'Honors' | 'Regular';
  target: number;
  achieved: number;
}

const CoursePlanning = () => {
  const [selectedGrade, setSelectedGrade] = useState<number>(8);
  const [showRecommendations, setShowRecommendations] = useState(true);

  const goals: Goal[] = [
    { type: 'AP', target: 8, achieved: 3 },
    { type: 'Honors', target: 12, achieved: 6 },
    { type: 'Regular', target: 8, achieved: 4 }
  ];

  const recommendedCourses: Course[] = [
    {
      id: 'ap-calc-ab',
      name: 'AP Calculus AB',
      type: 'AP',
      subject: 'Mathematics',
      grade: 11,
      semester: 1,
      prerequisites: ['Honors Pre-Calculus'],
      recommended: true
    },
    {
      id: 'ap-bio',
      name: 'AP Biology',
      type: 'AP',
      subject: 'Science',
      grade: 10,
      semester: 1,
      prerequisites: ['Honors Biology'],
      recommended: true
    },
    {
      id: 'ap-lang',
      name: 'AP English Language',
      type: 'AP',
      subject: 'English',
      grade: 11,
      semester: 1,
      recommended: true
    }
  ];

  const plannedCourses: Course[] = [
    {
      id: 'honors-geo',
      name: 'Honors Geometry',
      type: 'Honors',
      subject: 'Mathematics',
      grade: 9,
      semester: 1
    },
    {
      id: 'honors-bio',
      name: 'Honors Biology',
      type: 'Honors',
      subject: 'Science',
      grade: 9,
      semester: 1
    }
  ];

  const getGoalProgress = (type: Goal['type']) => {
    const goal = goals.find(g => g.type === type);
    if (!goal) return 0;
    return (goal.achieved / goal.target) * 100;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="fade-in">
        <h1 className="text-3xl font-bold text-gray-900">Course Planning</h1>
        <p className="text-gray-600 mt-1">Plan your academic journey from 8th grade through high school</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.type} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className={`
                  ${goal.type === 'AP' ? 'text-red-500' : ''}
                  ${goal.type === 'Honors' ? 'text-purple-500' : ''}
                  ${goal.type === 'Regular' ? 'text-blue-500' : ''}
                `} />
                <h3 className="font-bold text-gray-900">{goal.type} Courses</h3>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Info size={16} />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{goal.achieved} of {goal.target}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getProgressColor(getGoalProgress(goal.type))} transition-all duration-500`}
                  style={{ width: `${getGoalProgress(goal.type)}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Course Timeline</h2>
          <div className="flex gap-2">
            <button className="btn-outline text-sm py-1.5">Import Courses</button>
            <button className="btn-primary text-sm py-1.5 flex items-center gap-1">
              <Plus size={16} />
              Add Course
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {[8, 9, 10, 11, 12].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                ${selectedGrade === grade 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {grade === 8 ? '8th Grade' : `Grade ${grade}`}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {plannedCourses
            .filter(course => course.grade === selectedGrade)
            .map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg
                      ${course.type === 'AP' ? 'bg-red-100 text-red-700' : ''}
                      ${course.type === 'Honors' ? 'bg-purple-100 text-purple-700' : ''}
                      ${course.type === 'Regular' ? 'bg-blue-100 text-blue-700' : ''}
                    `}>
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{course.name}</h3>
                      <p className="text-sm text-gray-500">{course.subject} • Semester {course.semester}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Save size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {showRecommendations && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Recommended Courses</h3>
              <button 
                onClick={() => setShowRecommendations(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Hide
              </button>
            </div>
            <div className="space-y-3">
              {recommendedCourses
                .filter(course => course.recommended)
                .map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                          <AlertCircle size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{course.name}</h3>
                          <p className="text-sm text-gray-500">
                            Recommended for Grade {course.grade} • {course.subject}
                          </p>
                          {course.prerequisites && (
                            <p className="text-xs text-gray-500 mt-1">
                              Prerequisites: {course.prerequisites.join(', ')}
                            </p>
                          )}
                        </div>
                      </div>
                      <button className="btn-primary text-sm py-1.5">Add Course</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlanning;