import { AnimatePresence,motion } from 'framer-motion';
import React, {useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

import mascotImg from '../../assets/images/Landing Page/01. Logo bulat.png';
import GameButton from '../../components/game/GameButton';
import GameHeader from '../../components/game/GameHeader';
import GameOverModal from '../../components/game/GameOverModal';
import WinModal from '../../components/game/WinModal';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { guessImageData } from '../../data/guessImage';
import { useGameEngine } from '../../hooks/useGameEngine';


const localImages = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,svg}', { eager: true });

export default function TebakGambarGame() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const allQuestions = guessImageData[categoryId] || [];

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    hearts,
    status,
    correctCount,
    wrongCount,
    handleAnswer,
    nextQuestion,
    resetGame,
    setStatus
  } = useGameEngine({
    allQuestions,
    totalQuestions: 10,
    scorePerCorrect: 10
  });

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const onRestart = () => {
    setSelectedAnswer(null);
    setIsChecking(false);
    resetGame();
  };

  const onAnswerClick = (choice) => {
    if (isChecking || status !== 'playing') return;
    
    setSelectedAnswer(choice);
    
    setTimeout(() => {
      setIsChecking(true);
      const isCorrect = choice === currentQuestion?.correctAnswer;
      
      setTimeout(() => {
        handleAnswer(isCorrect);
        setSelectedAnswer(null);
        setIsChecking(false);
      }, 1500);
    }, 500);
  };

  const getButtonStatus = (choice) => {
    if (!isChecking) {
      return selectedAnswer === choice ? 'selected' : 'default';
    }
    
    if (choice === currentQuestion?.correctAnswer) {
      return 'correct';
    }
    if (selectedAnswer === choice && choice !== currentQuestion?.correctAnswer) {
      return 'wrong';
    }
    return 'default';
  };

  const getLetter = (index) => {
    return String.fromCharCode(65 + index); 
  };

  const shuffledChoices = React.useMemo(() => {
    if (!currentQuestion) return [];
    const arr = [...currentQuestion.choices];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentQuestion]);

  const resolvedImage = React.useMemo(() => {
    if (!currentQuestion) return null;
    
    const answerName = currentQuestion.correctAnswer.toLowerCase();
    const matchKey = Object.keys(localImages).find(key => 
      key.toLowerCase().includes(answerName) || 
      key.toLowerCase().replace(/[-_]/g, ' ').includes(answerName)
    );
    
    if (matchKey && localImages[matchKey]) {
      return localImages[matchKey].default;
    }
    
    return currentQuestion.image;
  }, [currentQuestion]);

  const categoryTitle = categoryId ? `TEBAK ${categoryId.split('-').join(' ').toUpperCase()}` : 'TEBAK GAMBAR';

  if (allQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdfaf1] flex flex-col items-center justify-center font-jakarta">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center">
          <img src={mascotImg} alt="Mascot" className="w-48 h-48 mb-6" />
          <h2 className="font-cheese-milky text-4xl text-[#4a2222] mb-4">Segera Hadir!</h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">Tebak Gambar untuk kategori ini sedang dalam tahap pengembangan.</p>
          <button 
            onClick={() => navigate('/games/tebak-gambar')}
            className="bg-[#c55428] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#a64520] transition-colors"
          >
            Kembali
          </button>
        </main>
      </div>
    );
  }

  if (!currentQuestion && status === 'loading') {
    return <div className="min-h-screen bg-[#fdfaf1] flex items-center justify-center font-cheese-milky text-2xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full max-w-[1280px] mx-auto px-4 lg:px-16 pt-8 pb-16 relative">
        <GameHeader 
          hearts={hearts} 
          currentIndex={currentIndex} 
          totalQuestions={totalQuestions} 
          backPath="/games/tebak-gambar"
        />

        
        <div className="w-full flex justify-center mb-8 mt-4">
          <div className="bg-[#c55428] text-white font-cheese-milky text-2xl md:text-3xl px-12 py-3 rounded-full border-4 border-[#8b181a] shadow-[0_4px_0_#8b181a] uppercase tracking-wider">
            {categoryTitle}
          </div>
        </div>

        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-full max-w-4xl mx-auto"
          >
            
            <div className="w-full max-w-2xl bg-white border-[6px] border-[#8b181a] rounded-[32px] overflow-hidden shadow-2xl mb-8 flex items-center justify-center relative aspect-video bg-gray-100">
              <img 
                src={resolvedImage} 
                alt="Tebak Gambar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/8b181a/FFF?text=Gambar+Tidak+Ditemukan`;
                }}
              />
            </div>

            <h3 className="font-cheese-milky text-[#5a403f] text-2xl md:text-3xl mb-8 text-center drop-shadow-sm">
              {currentQuestion.question}
            </h3>

            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
              {shuffledChoices.map((choice, idx) => (
                <GameButton 
                  key={idx}
                  letter={getLetter(idx)}
                  text={choice}
                  alignCircle={idx % 2 === 0 ? 'left' : 'right'}
                  status={getButtonStatus(choice)}
                  onClick={() => onAnswerClick(choice)}
                  disabled={isChecking || selectedAnswer !== null}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        
        <div className="mt-8 flex justify-between items-end px-4 w-full max-w-4xl mx-auto">
          <div className="relative">
            <img src={mascotImg} alt="Mascot" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg" />
            <div className="absolute -top-12 left-16 bg-white border-2 border-[#5a403f] rounded-2xl p-2 px-4 shadow-sm">
              <p className="font-cheese-milky text-sm text-[#5a403f]">Yuk<br/>semangat<br/>belajar!</p>
              <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-[#5a403f] transform rotate-45"></div>
            </div>
          </div>
        </div>

      </main>

      <Footer />

      <GameOverModal 
        isOpen={status === 'gameover'} 
        onRestart={onRestart}
        backPath="/games/tebak-gambar"
      />
      
      <WinModal 
        isOpen={status === 'win'}
        score={score}
        correctCount={correctCount}
        wrongCount={wrongCount}
        onRestart={onRestart}
        backPath="/games/tebak-gambar"
      />
    </div>
  );
}
