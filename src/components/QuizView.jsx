import React, { useState, useMemo } from 'react';
import {
  Brain, ChevronLeft, ChevronRight, CheckCircle, XCircle,
  RotateCcw, Home, Filter, Trophy, Target
} from 'lucide-react';

function QuizView({ questions, lessons, onSaveScore, onBack }) {
  const [selectedLesson, setSelectedLesson] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  // Filter questions by lesson
  const filteredQuestions = useMemo(() => {
    if (selectedLesson === 'all') return questions;
    return questions.filter(q => q.lessonId === parseInt(selectedLesson));
  }, [questions, selectedLesson]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleSelectAnswer = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer
    }));
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz complete
      const correctCount = Object.entries(answers).filter(([qId, ans]) => {
        const q = questions.find(q => q.id === parseInt(qId));
        return q && q.correctAnswer === ans;
      }).length;

      // Include current answer
      const finalCorrect = currentQuestion.correctAnswer === selectedAnswer
        ? correctCount + 1
        : correctCount;

      if (selectedLesson !== 'all') {
        onSaveScore(selectedLesson, finalCorrect, filteredQuestions.length);
      }
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers({});
    setQuizComplete(false);
  };

  const handleLessonChange = (value) => {
    setSelectedLesson(value);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers({});
    setQuizComplete(false);
  };

  // Calculate final score
  const calculateScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([qId, ans]) => {
      const q = filteredQuestions.find(q => q.id === parseInt(qId));
      if (q && q.correctAnswer === ans) correct++;
    });
    // Add current question if answered correctly
    if (showResult && currentQuestion.correctAnswer === selectedAnswer) {
      correct++;
    }
    return correct;
  };

  if (quizComplete) {
    const score = calculateScore();
    const percentage = Math.round((score / filteredQuestions.length) * 100);

    return (
      <div className="animate-fade-in max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20 text-center">
          <Trophy className="mx-auto text-amber-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-white mb-2">آزمون تمام شد!</h2>
          <p className="text-gray-400 mb-6">نتیجه شما:</p>

          <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
            <div className={`text-5xl font-bold mb-2 ${
              percentage >= 80 ? 'text-emerald-400' :
              percentage >= 60 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {percentage}%
            </div>
            <p className="text-gray-400">
              {score} پاسخ صحیح از {filteredQuestions.length} سوال
            </p>
          </div>

          <div className="text-right mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">تحلیل نتیجه:</h3>
            <p className="text-gray-400">
              {percentage >= 80 ? 'عالی! شما مفاهیم را به خوبی یاد گرفته‌اید. به همین روند ادامه دهید.' :
               percentage >= 60 ? 'خوب است! اما هنوز جای پیشرفت دارید. درس‌ها را دوباره مرور کنید.' :
               'نیاز به مطالعه بیشتر دارید. پیشنهاد می‌کنیم درس‌ها را با دقت بیشتری بخوانید.'}
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <RotateCcw size={20} />
              تلاش مجدد
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Home size={20} />
              بازگشت
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="animate-fade-in max-w-2xl mx-auto text-center">
        <Brain className="mx-auto text-gray-600 mb-4" size={48} />
        <p className="text-gray-400">سوالی برای این درس موجود نیست</p>
        <button
          onClick={onBack}
          className="mt-4 text-blue-400 hover:text-blue-300"
        >
          بازگشت به داشبورد
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Home size={20} />
          <span>بازگشت</span>
        </button>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={selectedLesson}
            onChange={(e) => handleLessonChange(e.target.value)}
            className="bg-gray-800 text-white rounded-lg px-3 py-2 text-sm border border-gray-700 focus:border-blue-500 outline-none"
          >
            <option value="all">همه درس‌ها</option>
            {lessons.map(lesson => (
              <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-800">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-400">پیشرفت آزمون</span>
          <span className="text-blue-400">{currentIndex + 1} از {filteredQuestions.length}</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-purple-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-6">
        <div className="flex items-center gap-2 text-purple-400 text-sm mb-4">
          <Target size={16} />
          <span>سوال {currentIndex + 1}</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500';

            if (showResult) {
              if (index === currentQuestion.correctAnswer) {
                optionClass = 'quiz-correct border-emerald-500';
              } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                optionClass = 'quiz-incorrect border-red-500';
              }
            } else if (selectedAnswer === index) {
              optionClass = 'bg-purple-500/20 border-purple-500 text-purple-300';
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showResult}
                className={`
                  w-full text-right p-4 rounded-xl border-2 transition-all quiz-option
                  ${optionClass}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">
                    {['الف', 'ب', 'ج', 'د'][index]}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="text-emerald-500" size={20} />
                  )}
                  {showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                    <XCircle className="text-red-500" size={20} />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && currentQuestion.explanation && (
          <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <h4 className="text-blue-400 font-semibold mb-2">توضیح:</h4>
            <p className="text-gray-300 leading-relaxed">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="text-gray-500 text-sm">
          {Object.keys(answers).length + (showResult ? 1 : 0)} سوال پاسخ داده شده
        </div>
        <div className="flex gap-3">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium
                ${selectedAnswer === null
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'}
              `}
            >
              تایید پاسخ
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              {currentIndex < filteredQuestions.length - 1 ? (
                <>
                  <span>سوال بعدی</span>
                  <ChevronLeft size={18} />
                </>
              ) : (
                <>
                  <span>مشاهده نتیجه</span>
                  <Trophy size={18} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizView;
