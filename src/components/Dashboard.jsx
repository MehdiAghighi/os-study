import React from 'react';
import {
  BookOpen, Brain, Layers, GraduationCap, Clock, Trophy,
  TrendingUp, CheckCircle, Play, Zap, Target, Calendar, Cpu
} from 'lucide-react';

function Dashboard({ progress, lessons, onStartLesson, onStartQuiz, onStartFlashcards, onStartExam, onStartAlgorithms }) {
  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // Find next lesson to study
  const nextLesson = lessons.find(lesson => !progress.completedLessons.includes(lesson.id));

  // Calculate average quiz score
  const quizScores = Object.values(progress.quizScores);
  const avgScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((acc, q) => acc + (q.score / q.total) * 100, 0) / quizScores.length)
    : 0;

  const stats = [
    {
      label: 'درس‌های تکمیل شده',
      value: `${completedCount}/${totalLessons}`,
      icon: CheckCircle,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    {
      label: 'میانگین نمره آزمون',
      value: `${avgScore}%`,
      icon: Trophy,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10'
    },
    {
      label: 'فلش‌کارت مرور شده',
      value: progress.flashcardsReviewed,
      icon: Layers,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      label: 'روز تا امتحان',
      value: '۶',
      icon: Calendar,
      color: 'text-red-400',
      bg: 'bg-red-500/10'
    }
  ];

  const quickActions = [
    {
      title: 'شبیه‌سازی الگوریتم',
      description: 'مشاهده تعاملی الگوریتم‌های زمان‌بندی و همگام‌سازی',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      action: onStartAlgorithms
    },
    {
      title: 'آزمون تمرینی',
      description: 'تست دانش خود با سوالات چند گزینه‌ای',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      action: onStartQuiz
    },
    {
      title: 'فلش‌کارت',
      description: 'مرور سریع مفاهیم کلیدی',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      action: onStartFlashcards
    },
    {
      title: 'شبیه‌ساز امتحان',
      description: 'آزمون با زمان محدود مانند امتحان واقعی',
      icon: GraduationCap,
      color: 'from-amber-500 to-orange-500',
      action: onStartExam
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">داشبورد مطالعه</h1>
        <p className="text-gray-400">سیستم عامل - آمادگی برای امتحان</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-l from-blue-600/20 to-emerald-600/20 rounded-2xl p-6 mb-8 border border-blue-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">پیشرفت کلی</h2>
            <p className="text-gray-400 text-sm">
              {completedCount === totalLessons
                ? 'تبریک! همه درس‌ها را تکمیل کردید!'
                : `${totalLessons - completedCount} درس باقی مانده`}
            </p>
          </div>
          <div className="text-4xl font-bold text-blue-400">{progressPercent}%</div>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-blue-500 to-emerald-500 rounded-full progress-animate"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} rounded-xl p-4 border border-gray-800`}
          >
            <stat.icon className={`${stat.color} mb-2`} size={24} />
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Next Lesson Card */}
      {nextLesson && (
        <div className="bg-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-800 card-hover">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Zap size={20} />
            <span className="text-sm font-medium">درس بعدی پیشنهادی</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{nextLesson.title}</h3>
          <p className="text-gray-400 mb-4">{nextLesson.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock size={16} />
              <span>{nextLesson.duration}</span>
            </div>
            <button
              onClick={() => onStartLesson(nextLesson)}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Play size={18} />
              شروع مطالعه
            </button>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <h2 className="text-xl font-bold text-white mb-4">دسترسی سریع</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="bg-gray-900/50 rounded-xl p-5 border border-gray-800 card-hover text-right group"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <action.icon size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{action.title}</h3>
            <p className="text-gray-400 text-sm">{action.description}</p>
          </button>
        ))}
      </div>

      {/* All Lessons */}
      <h2 className="text-xl font-bold text-white mb-4">همه درس‌ها</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          return (
            <button
              key={lesson.id}
              onClick={() => onStartLesson(lesson)}
              className={`
                bg-gray-900/50 rounded-xl p-4 border text-right card-hover
                ${isCompleted ? 'border-emerald-500/30' : 'border-gray-800'}
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center
                  ${isCompleted ? 'bg-emerald-500/20' : 'bg-blue-500/20'}
                `}>
                  <BookOpen size={20} className={isCompleted ? 'text-emerald-400' : 'text-blue-400'} />
                </div>
                {isCompleted && (
                  <CheckCircle className="text-emerald-500" size={20} />
                )}
              </div>
              <h3 className={`font-bold mb-1 ${isCompleted ? 'text-emerald-400' : 'text-white'}`}>
                {lesson.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">{lesson.description}</p>
              <div className="flex items-center gap-2 text-gray-500 text-xs mt-3">
                <Clock size={14} />
                <span>{lesson.duration}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
