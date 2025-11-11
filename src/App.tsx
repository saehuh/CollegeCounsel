import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import CollegeSearch from './pages/CollegeSearch';
import Applications from './pages/Applications';
import Documents from './pages/Documents';
import Calendar from './pages/Calendar';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import CoursePlanning from './pages/CoursePlanning';
import { AppProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen overflow-hidden bg-gray-50">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/college-search" element={<CollegeSearch />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/course-planning" element={<CoursePlanning />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;