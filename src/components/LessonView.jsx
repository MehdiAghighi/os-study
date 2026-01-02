import React, { useEffect } from 'react';
import {
  ArrowRight, ArrowLeft, CheckCircle, BookOpen, Clock,
  ChevronRight, ChevronLeft, Home
} from 'lucide-react';

function LessonView({
  lesson,
  onComplete,
  onBack,
  onNext,
  onPrev,
  isCompleted,
  hasNext,
  hasPrev
}) {
  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lesson?.id]);

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <BookOpen className="mx-auto text-gray-600 mb-4" size={48} />
          <p className="text-gray-400">لطفاً یک درس را انتخاب کنید</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Home size={20} />
          <span>بازگشت به داشبورد</span>
        </button>
        <div className="flex items-center gap-2">
          {hasPrev && (
            <button
              onClick={onPrev}
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-gray-800"
            >
              <ChevronRight size={18} />
              <span>قبلی</span>
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-gray-800"
            >
              <span>بعدی</span>
              <ChevronLeft size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Lesson Header */}
      <div className="bg-gradient-to-l from-blue-600/20 to-purple-600/20 rounded-2xl p-6 mb-8 border border-blue-500/20">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
              <BookOpen size={16} />
              <span>درس</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {lesson.title}
            </h1>
            <p className="text-gray-400">{lesson.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock size={16} />
                <span>{lesson.duration}</span>
              </div>
              {isCompleted && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  <span>تکمیل شده</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800 mb-8">
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between bg-gray-900/50 rounded-xl p-4 border border-gray-800">
        <div className="flex items-center gap-3">
          {!isCompleted ? (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <CheckCircle size={20} />
              علامت‌گذاری به عنوان تکمیل شده
            </button>
          ) : (
            <div className="flex items-center gap-2 text-emerald-400 px-4 py-3">
              <CheckCircle size={20} />
              <span>این درس را مطالعه کردید</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasPrev && (
            <button
              onClick={onPrev}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors"
            >
              <ChevronRight size={18} />
              <span className="hidden md:inline">درس قبلی</span>
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors"
            >
              <span className="hidden md:inline">درس بعدی</span>
              <ChevronLeft size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonView;
