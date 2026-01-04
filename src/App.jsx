import React, { useState, useEffect } from 'react';
import { lessons, quizQuestions, flashcards } from './data/lessons';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView';
import Dashboard from './components/Dashboard';
import ExamSimulator from './components/ExamSimulator';
import AlgorithmsView from './components/AlgorithmsView';
import { BookOpen, Brain, Layers, GraduationCap, Home } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('os-study-progress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      quizScores: {},
      flashcardsReviewed: 0,
      totalStudyTime: 0,
      lastStudyDate: null
    };
  });

  useEffect(() => {
    localStorage.setItem('os-study-progress', JSON.stringify(progress));
  }, [progress]);

  const markLessonComplete = (lessonId) => {
    if (!progress.completedLessons.includes(lessonId)) {
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        lastStudyDate: new Date().toISOString()
      }));
    }
  };

  const saveQuizScore = (lessonId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [lessonId]: { score, total, date: new Date().toISOString() }
      }
    }));
  };

  const incrementFlashcards = () => {
    setProgress(prev => ({
      ...prev,
      flashcardsReviewed: prev.flashcardsReviewed + 1
    }));
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard
            progress={progress}
            lessons={lessons}
            onStartLesson={(lesson) => {
              setSelectedLesson(lesson);
              setCurrentView('lesson');
            }}
            onStartQuiz={() => setCurrentView('quiz')}
            onStartFlashcards={() => setCurrentView('flashcards')}
            onStartExam={() => setCurrentView('exam')}
            onStartAlgorithms={() => setCurrentView('algorithms')}
          />
        );
      case 'lesson':
        return (
          <LessonView
            lesson={selectedLesson}
            onComplete={() => markLessonComplete(selectedLesson.id)}
            onBack={() => setCurrentView('dashboard')}
            onNext={() => {
              const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
              if (currentIndex < lessons.length - 1) {
                setSelectedLesson(lessons[currentIndex + 1]);
              }
            }}
            onPrev={() => {
              const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
              if (currentIndex > 0) {
                setSelectedLesson(lessons[currentIndex - 1]);
              }
            }}
            isCompleted={progress.completedLessons.includes(selectedLesson?.id)}
            hasNext={lessons.findIndex(l => l.id === selectedLesson?.id) < lessons.length - 1}
            hasPrev={lessons.findIndex(l => l.id === selectedLesson?.id) > 0}
          />
        );
      case 'quiz':
        return (
          <QuizView
            questions={quizQuestions}
            lessons={lessons}
            onSaveScore={saveQuizScore}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'flashcards':
        return (
          <FlashcardView
            flashcards={flashcards}
            onReview={incrementFlashcards}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'exam':
        return (
          <ExamSimulator
            questions={quizQuestions}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'algorithms':
        return (
          <AlgorithmsView
            onBack={() => setCurrentView('dashboard')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        lessons={lessons}
        progress={progress}
        onSelectLesson={(lesson) => {
          setSelectedLesson(lesson);
          setCurrentView('lesson');
        }}
      />
      <main className="flex-1 lg:mr-64 p-6 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
