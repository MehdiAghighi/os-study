import React, { useState, useMemo } from 'react';
import {
  Layers, RotateCcw, ChevronLeft, ChevronRight, Home,
  Shuffle, CheckCircle, XCircle, Eye, EyeOff
} from 'lucide-react';

function FlashcardView({ flashcards, onReview, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState(new Set());
  const [unknownCards, setUnknownCards] = useState(new Set());
  const [shuffledCards, setShuffledCards] = useState([...flashcards]);
  const [showOnlyUnknown, setShowOnlyUnknown] = useState(false);

  const displayCards = useMemo(() => {
    if (showOnlyUnknown) {
      return shuffledCards.filter(card => unknownCards.has(card.id));
    }
    return shuffledCards;
  }, [shuffledCards, showOnlyUnknown, unknownCards]);

  const currentCard = displayCards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      onReview();
    }
  };

  const handleNext = () => {
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleMarkKnown = () => {
    if (currentCard) {
      setKnownCards(prev => new Set([...prev, currentCard.id]));
      setUnknownCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
      handleNext();
    }
  };

  const handleMarkUnknown = () => {
    if (currentCard) {
      setUnknownCards(prev => new Set([...prev, currentCard.id]));
      setKnownCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
      handleNext();
    }
  };

  const handleShuffle = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleReset = () => {
    setShuffledCards([...flashcards]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
    setShowOnlyUnknown(false);
  };

  if (displayCards.length === 0) {
    return (
      <div className="animate-fade-in max-w-2xl mx-auto text-center">
        <div className="bg-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30">
          <CheckCircle className="mx-auto text-emerald-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-white mb-2">آفرین!</h2>
          <p className="text-gray-400 mb-6">
            {showOnlyUnknown
              ? 'همه کارت‌های نامشخص را مرور کردید!'
              : 'فلش‌کارتی موجود نیست'}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <RotateCcw size={20} />
              شروع مجدد
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

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
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
          <button
            onClick={() => setShowOnlyUnknown(!showOnlyUnknown)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
              showOnlyUnknown ? 'bg-amber-500/20 text-amber-400' : 'bg-gray-800 text-gray-400'
            }`}
          >
            {showOnlyUnknown ? <Eye size={16} /> : <EyeOff size={16} />}
            <span>نامشخص‌ها</span>
          </button>
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <Shuffle size={16} />
            <span>بر زدن</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-900/50 rounded-xl p-3 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-blue-400">{displayCards.length}</div>
          <div className="text-gray-500 text-xs">کل کارت‌ها</div>
        </div>
        <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30 text-center">
          <div className="text-2xl font-bold text-emerald-400">{knownCards.size}</div>
          <div className="text-gray-500 text-xs">یاد گرفته</div>
        </div>
        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/30 text-center">
          <div className="text-2xl font-bold text-amber-400">{unknownCards.size}</div>
          <div className="text-gray-500 text-xs">نیاز به مرور</div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-800">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-400">پیشرفت</span>
          <span className="text-blue-400">{currentIndex + 1} از {displayCards.length}</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / displayCards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div
        onClick={handleFlip}
        className="relative h-80 cursor-pointer perspective-1000 mb-6"
      >
        <div
          className={`
            absolute inset-0 transition-transform duration-500 transform-style-3d
            ${isFlipped ? 'rotate-y-180' : ''}
          `}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Layers className="text-blue-400 mb-4" size={32} />
            <p className="text-xl text-center text-white font-medium leading-relaxed">
              {currentCard?.front}
            </p>
            <p className="text-gray-500 text-sm mt-6">برای دیدن پاسخ کلیک کنید</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl p-8 border border-emerald-500/30 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <CheckCircle className="text-emerald-400 mb-4" size={32} />
            <p className="text-xl text-center text-white font-medium leading-relaxed">
              {currentCard?.back}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${currentIndex === 0 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 text-white'}
          `}
        >
          <ChevronRight size={18} />
          قبلی
        </button>
        <div className="flex gap-2">
          {displayCards.slice(
            Math.max(0, currentIndex - 2),
            Math.min(displayCards.length, currentIndex + 3)
          ).map((_, i) => {
            const actualIndex = Math.max(0, currentIndex - 2) + i;
            return (
              <button
                key={actualIndex}
                onClick={() => {
                  setCurrentIndex(actualIndex);
                  setIsFlipped(false);
                }}
                className={`
                  w-3 h-3 rounded-full transition-colors
                  ${actualIndex === currentIndex ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}
                `}
              />
            );
          })}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex === displayCards.length - 1}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${currentIndex === displayCards.length - 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 text-white'}
          `}
        >
          بعدی
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Mark buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleMarkUnknown}
          className="flex-1 flex items-center justify-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 px-4 py-3 rounded-xl transition-colors"
        >
          <XCircle size={20} />
          نیاز به مرور دارم
        </button>
        <button
          onClick={handleMarkKnown}
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-4 py-3 rounded-xl transition-colors"
        >
          <CheckCircle size={20} />
          یاد گرفتم
        </button>
      </div>
    </div>
  );
}

export default FlashcardView;
