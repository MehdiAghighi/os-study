import React, { useState } from 'react';
import {
  Home, BookOpen, Brain, Layers, GraduationCap, ChevronDown, ChevronLeft,
  CheckCircle, Circle, Menu, X, Clock, HardDrive, Zap, Timer, GitBranch,
  Lock, Cpu, Gauge, MessageSquare, AlertTriangle, Play
} from 'lucide-react';

const iconMap = {
  BookOpen, HardDrive, Zap, Layers, Clock, Timer, GitBranch, Lock, Cpu, Gauge, MessageSquare, AlertTriangle
};

function Sidebar({ currentView, setCurrentView, lessons, progress, onSelectLesson }) {
  const [lessonsExpanded, setLessonsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'داشبورد', icon: Home },
    { id: 'lessons', label: 'درس‌ها', icon: BookOpen, expandable: true },
    { id: 'algorithms', label: 'شبیه‌سازی الگوریتم', icon: Play },
    { id: 'quiz', label: 'آزمون تمرینی', icon: Brain },
    { id: 'flashcards', label: 'فلش‌کارت', icon: Layers },
    { id: 'exam', label: 'شبیه‌ساز امتحان', icon: GraduationCap },
  ];

  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-blue-600 p-2 rounded-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-l border-gray-800
        transform transition-transform duration-300 z-40
        ${isMobileOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="text-blue-500" />
            سیستم عامل
          </h1>
          <p className="text-gray-400 text-sm mt-1">آموزش جامع</p>
        </div>

        {/* Progress */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">پیشرفت کلی</span>
            <span className="text-blue-400">{progressPercent}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full progress-animate"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {completedCount} از {totalLessons} درس تکمیل شده
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
          {navItems.map((item) => {
            if (item.expandable) {
              return (
                <div key={item.id}>
                  <button
                    onClick={() => setLessonsExpanded(!lessonsExpanded)}
                    className={`
                      w-full flex items-center justify-between p-3 rounded-lg transition-colors
                      ${currentView === 'lesson' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:bg-gray-800'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>
                    {lessonsExpanded ? <ChevronDown size={16} /> : <ChevronLeft size={16} />}
                  </button>

                  {lessonsExpanded && (
                    <div className="mt-1 mr-4 space-y-1">
                      {lessons.map((lesson) => {
                        const isCompleted = progress.completedLessons.includes(lesson.id);
                        const IconComponent = iconMap[lesson.icon] || BookOpen;
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              onSelectLesson(lesson);
                              setIsMobileOpen(false);
                            }}
                            className={`
                              w-full flex items-center gap-2 p-2 pr-3 rounded-lg text-sm transition-colors
                              ${isCompleted ? 'text-emerald-400' : 'text-gray-400'}
                              hover:bg-gray-800
                            `}
                          >
                            {isCompleted ? (
                              <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                            ) : (
                              <Circle size={16} className="text-gray-600 flex-shrink-0" />
                            )}
                            <span className="truncate text-right">{lesson.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsMobileOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                  ${currentView === item.id ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:bg-gray-800'}
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-900/95">
          <div className="text-center text-xs text-gray-500">
            <p>امتحان: ۶ روز دیگر</p>
            <p className="mt-1">موفق باشید! 💪</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
