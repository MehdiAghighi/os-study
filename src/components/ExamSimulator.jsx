import React, { useState, useEffect, useCallback } from 'react';
import {
  GraduationCap, Clock, AlertTriangle, CheckCircle, XCircle,
  Home, Play, Trophy, RotateCcw, PauseCircle, ChevronLeft, ChevronRight
} from 'lucide-react';

function ExamSimulator({ questions, onBack }) {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [examConfig, setExamConfig] = useState({
    questionCount: 20,
    timePerQuestion: 90 // seconds
  });

  // Timer
  useEffect(() => {
    if (!examStarted || examFinished || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setExamFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examFinished, timeLeft]);

  const startExam = () => {
    // Randomly select questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(examConfig.questionCount, questions.length));
    setSelectedQuestions(selected);
    setTimeLeft(selected.length * examConfig.timePerQuestion);
    setAnswers({});
    setCurrentIndex(0);
    setExamStarted(true);
    setExamFinished(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleFinishExam = () => {
    setExamFinished(true);
  };

  const calculateResults = () => {
    let correct = 0;
    selectedQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return {
      correct,
      total: selectedQuestions.length,
      percentage: Math.round((correct / selectedQuestions.length) * 100),
      unanswered: selectedQuestions.length - Object.keys(answers).length
    };
  };

  // Pre-exam configuration screen
  if (!examStarted) {
    return (
      <div className="animate-fade-in max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Home size={20} />
            <span>بازگشت</span>
          </button>
        </div>

        <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-2xl p-8 border border-amber-500/20 text-center">
          <GraduationCap className="mx-auto text-amber-400 mb-4" size={64} />
          <h1 className="text-2xl font-bold text-white mb-2">شبیه‌ساز امتحان</h1>
          <p className="text-gray-400 mb-8">خود را برای امتحان واقعی آماده کنید</p>

          <div className="bg-gray-900/50 rounded-xl p-6 mb-6 text-right">
            <h3 className="text-lg font-semibold text-white mb-4">تنظیمات امتحان</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">تعداد سوالات</label>
                <select
                  value={examConfig.questionCount}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, questionCount: parseInt(e.target.value) }))}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-amber-500 outline-none"
                >
                  <option value={10}>۱۰ سوال</option>
                  <option value={15}>۱۵ سوال</option>
                  <option value={20}>۲۰ سوال</option>
                  <option value={30}>۳۰ سوال</option>
                  <option value={questions.length}>همه ({questions.length} سوال)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">زمان هر سوال</label>
                <select
                  value={examConfig.timePerQuestion}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, timePerQuestion: parseInt(e.target.value) }))}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-amber-500 outline-none"
                >
                  <option value={60}>۱ دقیقه</option>
                  <option value={90}>۱.۵ دقیقه</option>
                  <option value={120}>۲ دقیقه</option>
                  <option value={180}>۳ دقیقه</option>
                </select>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Clock size={18} />
                <span className="font-medium">زمان کل امتحان:</span>
              </div>
              <p className="text-white text-lg">
                {Math.floor((Math.min(examConfig.questionCount, questions.length) * examConfig.timePerQuestion) / 60)} دقیقه
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-4 mb-6 text-right">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
              <div className="text-gray-400 text-sm">
                <p className="mb-2">• سوالات به صورت تصادفی انتخاب می‌شوند</p>
                <p className="mb-2">• پس از اتمام زمان، امتحان به پایان می‌رسد</p>
                <p>• می‌توانید بین سوالات جابجا شوید</p>
              </div>
            </div>
          </div>

          <button
            onClick={startExam}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl transition-colors font-medium text-lg mx-auto"
          >
            <Play size={24} />
            شروع امتحان
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (examFinished) {
    const results = calculateResults();

    return (
      <div className="animate-fade-in max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20 text-center mb-8">
          <Trophy className="mx-auto text-amber-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-white mb-2">امتحان به پایان رسید!</h2>
          <p className="text-gray-400 mb-6">نتیجه شما:</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-900/50 rounded-xl p-4">
              <div className={`text-4xl font-bold mb-1 ${
                results.percentage >= 80 ? 'text-emerald-400' :
                results.percentage >= 60 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {results.percentage}%
              </div>
              <div className="text-gray-500 text-sm">نمره نهایی</div>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-4">
              <div className="text-4xl font-bold text-emerald-400 mb-1">{results.correct}</div>
              <div className="text-gray-500 text-sm">پاسخ صحیح</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-4">
              <div className="text-4xl font-bold text-red-400 mb-1">{results.total - results.correct}</div>
              <div className="text-gray-500 text-sm">پاسخ غلط</div>
            </div>
          </div>

          {results.unanswered > 0 && (
            <div className="bg-amber-500/10 rounded-lg p-3 mb-6 text-amber-400 text-sm">
              {results.unanswered} سوال بدون پاسخ ماند
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={startExam}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <RotateCcw size={20} />
              امتحان جدید
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

        {/* Review answers */}
        <h3 className="text-xl font-bold text-white mb-4">بررسی پاسخ‌ها</h3>
        <div className="space-y-4">
          {selectedQuestions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`bg-gray-900/50 rounded-xl p-4 border ${
                  userAnswer === undefined ? 'border-gray-700' :
                  isCorrect ? 'border-emerald-500/30' : 'border-red-500/30'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-gray-500 font-medium">{index + 1}.</span>
                  <p className="text-white flex-1">{q.question}</p>
                  {userAnswer !== undefined && (
                    isCorrect ? (
                      <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                    ) : (
                      <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    )
                  )}
                </div>
                <div className="mr-6 space-y-2">
                  {q.options.map((opt, i) => (
                    <div
                      key={i}
                      className={`text-sm p-2 rounded ${
                        i === q.correctAnswer ? 'bg-emerald-500/20 text-emerald-400' :
                        i === userAnswer && i !== q.correctAnswer ? 'bg-red-500/20 text-red-400' :
                        'text-gray-500'
                      }`}
                    >
                      {['الف', 'ب', 'ج', 'د'][i]}) {opt}
                    </div>
                  ))}
                </div>
                {q.explanation && (
                  <div className="mt-3 mr-6 p-3 bg-blue-500/10 rounded-lg text-sm">
                    <span className="text-blue-400 font-medium">توضیح: </span>
                    <span className="text-gray-300">{q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active exam
  const currentQuestion = selectedQuestions[currentIndex];
  const timeWarning = timeLeft < 60;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      {/* Timer bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${timeWarning ? 'bg-red-900/95' : 'bg-gray-900/95'} backdrop-blur-sm border-b border-gray-800 p-4 mr-64`}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${timeWarning ? 'text-red-400' : 'text-blue-400'}`}>
              <Clock size={20} className={timeWarning ? 'animate-pulse' : ''} />
              <span className="text-xl font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-gray-400 text-sm">
              {answeredCount}/{selectedQuestions.length} پاسخ داده شده
            </div>
          </div>
          <button
            onClick={handleFinishExam}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <PauseCircle size={18} />
            پایان امتحان
          </button>
        </div>
      </div>

      {/* Question navigation */}
      <div className="mt-20 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {selectedQuestions.map((q, index) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = index === currentIndex;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-10 h-10 rounded-lg font-medium text-sm transition-all
                  ${isCurrent ? 'bg-blue-500 text-white scale-110' :
                    isAnswered ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    'bg-gray-800 text-gray-400 hover:bg-gray-700'}
                `}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question */}
      <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-6">
        <div className="text-blue-400 text-sm mb-3">سوال {currentIndex + 1} از {selectedQuestions.length}</div>
        <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestion.id] === index;

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(currentQuestion.id, index)}
                className={`
                  w-full text-right p-4 rounded-xl border-2 transition-all
                  ${isSelected
                    ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isSelected ? 'bg-blue-500 text-white' : 'bg-gray-700'
                  }`}>
                    {['الف', 'ب', 'ج', 'د'][index]}
                  </span>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${currentIndex === 0 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 text-white'}
          `}
        >
          <ChevronRight size={18} />
          قبلی
        </button>
        <button
          onClick={() => setCurrentIndex(prev => Math.min(selectedQuestions.length - 1, prev + 1))}
          disabled={currentIndex === selectedQuestions.length - 1}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${currentIndex === selectedQuestions.length - 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 text-white'}
          `}
        >
          بعدی
          <ChevronLeft size={18} />
        </button>
      </div>
    </div>
  );
}

export default ExamSimulator;
