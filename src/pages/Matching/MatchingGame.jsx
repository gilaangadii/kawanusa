import { AnimatePresence,motion } from 'framer-motion';
import { useEffect, useMemo,useRef, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

import mascotImg from '../../assets/images/Landing Page/01. Logo bulat.png';
import GameHeader from '../../components/game/GameHeader';
import GameOverModal from '../../components/game/GameOverModal';
import WinModal from '../../components/game/WinModal';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { matchingData } from '../../data/matching';
import { useGameEngine } from '../../hooks/useGameEngine';
import { shuffleArray } from '../../utils/shuffleArray';

export default function MatchingGame() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  
  const allPairs = matchingData[categoryId] || [];
  
  const groupedRounds = useMemo(() => {
    const shuffled = shuffleArray([...allPairs]);
    const rounds = [];
    for (let i = 0; i < shuffled.length; i += 4) {
      if (i + 4 <= shuffled.length) {
        
        const pairs = shuffled.slice(i, i + 4);
        rounds.push({
          id: `round-${i}`,
          pairs: pairs,
          
          leftItems: shuffleArray([...pairs]),
          rightItems: shuffleArray([...pairs])
        });
      }
    }
    return rounds.slice(0, 5); 
  }, [allPairs]);

  const {
    currentQuestion: currentRound,
    currentIndex,
    totalQuestions,
    score,
    hearts,
    status,
    correctCount,
    wrongCount,
    addScore,
    loseHeart,
    nextQuestion,
    resetGame,
    setStatus
  } = useGameEngine({
    allQuestions: groupedRounds,
    totalQuestions: Math.min(5, groupedRounds.length),
    scorePerCorrect: 10
  });

  
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [wrongPair, setWrongPair] = useState(null); 

  
  const containerRef = useRef(null);
  const [dotPositions, setDotPositions] = useState({ left: {}, right: {} });

  const onRestart = () => {
    setSelectedLeft(null);
    setMatchedPairs([]);
    setWrongPair(null);
    resetGame();
  };

  
  useEffect(() => {
    setSelectedLeft(null);
    setMatchedPairs([]);
    setWrongPair(null);
  }, [currentIndex]);

  
  useEffect(() => {
    if (currentRound && matchedPairs.length > 0 && matchedPairs.length === currentRound.pairs.length) {
      const timer = setTimeout(() => {
        setMatchedPairs([]); 
        nextQuestion();
      }, 1000);
      return () => clearTimeout(timer); 
    }
  }, [matchedPairs, currentRound, nextQuestion]);

  const handleLeftClick = (item) => {
    if (status !== 'playing' || matchedPairs.includes(item.id)) return;
    setSelectedLeft(item);
  };

  const handleRightClick = (rightItem) => {
    if (status !== 'playing' || !selectedLeft || matchedPairs.includes(rightItem.id)) return;

    if (selectedLeft.id === rightItem.id) {
      
      setMatchedPairs(prev => [...prev, selectedLeft.id]);
      addScore();
      setSelectedLeft(null);
    } else {
      
      setWrongPair({ left: selectedLeft.id, right: rightItem.id });
      loseHeart();
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 1000);
    }
  };

  if (!currentRound) {
    return <div className="min-h-screen bg-[#fdfaf1] flex items-center justify-center font-cheese-milky text-2xl">Loading...</div>;
  }

  const categoryTitle = categoryId ? `MENCOCOKKAN ${categoryId.split('-').join(' ').toUpperCase()}` : 'MENCOCOKKAN';

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full max-w-[1280px] mx-auto px-4 lg:px-16 pt-8 pb-16 relative">
        <GameHeader 
          hearts={hearts} 
          currentIndex={currentIndex} 
          totalQuestions={totalQuestions} 
          backPath="/games/mencocokkan"
        />

        <div className="w-full flex justify-center mb-8 mt-4">
          <div className="bg-[#c55428] text-white font-cheese-milky text-2xl md:text-3xl px-12 py-3 rounded-full border-4 border-[#8b181a] shadow-[0_4px_0_#8b181a] uppercase tracking-wider">
            {categoryTitle}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-full max-w-4xl mx-auto relative"
            ref={containerRef}
          >
            <div className="w-full flex justify-between gap-8 md:gap-24">
              
              
              <div className="flex-1 flex flex-col gap-6">
                {currentRound.leftItems.map((item) => {
                  const isMatched = matchedPairs.includes(item.id);
                  const isSelected = selectedLeft?.id === item.id;
                  const isWrong = wrongPair?.left === item.id;
                  
                  let bgClass = 'bg-[#f7d054]';
                  let borderClass = 'border-[#5a403f]';
                  let dotClass = 'bg-[#e53935]';

                  if (isMatched) {
                    bgClass = 'bg-[#43a047] text-white';
                    dotClass = 'bg-[#43a047]';
                  } else if (isSelected) {
                    borderClass = 'border-[#e89b25] border-4';
                    dotClass = 'bg-[#e89b25]';
                  } else if (isWrong) {
                    bgClass = 'bg-[#e53935] text-white';
                    borderClass = 'border-[#c62828]';
                  }

                  return (
                    <motion.div 
                      key={`left-${item.id}`}
                      whileHover={!isMatched ? { scale: 1.02 } : {}}
                      whileTap={!isMatched ? { scale: 0.98 } : {}}
                      onClick={() => handleLeftClick(item)}
                      className={`relative flex items-center p-4 rounded-xl border-[3px] shadow-[0_4px_0_#5a403f] cursor-pointer transition-colors ${bgClass} ${borderClass} ${isMatched ? 'opacity-60 cursor-not-allowed shadow-none translate-y-1' : ''}`}
                    >
                      <span className="font-bricolage font-bold text-lg">{item.left}</span>
                      
                      <div className={`absolute -right-3 w-6 h-6 rounded-full border-[3px] border-white shadow-md z-10 ${dotClass}`}></div>
                    </motion.div>
                  );
                })}
              </div>

              
              <div className="flex-1 flex flex-col gap-6">
                {currentRound.rightItems.map((item) => {
                  const isMatched = matchedPairs.includes(item.id);
                  const isWrong = wrongPair?.right === item.id;
                  
                  let bgClass = 'bg-[#f7d054]';
                  let borderClass = 'border-[#5a403f]';
                  let dotClass = 'bg-[#e53935]';

                  if (isMatched) {
                    bgClass = 'bg-[#43a047] text-white';
                    dotClass = 'bg-[#43a047]';
                  } else if (isWrong) {
                    bgClass = 'bg-[#e53935] text-white';
                    borderClass = 'border-[#c62828]';
                  }

                  return (
                    <motion.div 
                      key={`right-${item.id}`}
                      whileHover={!isMatched && selectedLeft ? { scale: 1.02 } : {}}
                      whileTap={!isMatched && selectedLeft ? { scale: 0.98 } : {}}
                      onClick={() => handleRightClick(item)}
                      className={`relative flex items-center justify-end p-4 rounded-xl border-[3px] shadow-[0_4px_0_#5a403f] cursor-pointer transition-colors ${bgClass} ${borderClass} ${isMatched ? 'opacity-60 cursor-not-allowed shadow-none translate-y-1' : ''}`}
                    >
                      
                      <div className={`absolute -left-3 w-6 h-6 rounded-full border-[3px] border-white shadow-md z-10 ${dotClass}`}></div>
                      <span className="font-bricolage font-bold text-lg text-right">{item.right}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex justify-between items-end px-4 w-full max-w-4xl mx-auto">
          <div className="relative">
            <img src={mascotImg} alt="Mascot" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg" />
            <div className="absolute -top-12 left-16 bg-white border-2 border-[#5a403f] rounded-2xl p-2 px-4 shadow-sm">
              <p className="font-cheese-milky text-sm text-[#5a403f]">Pilih kotak<br/>kiri lalu<br/>kotak kanan!</p>
              <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-[#5a403f] transform rotate-45"></div>
            </div>
          </div>
        </div>

      </main>

      <Footer />

      <GameOverModal 
        isOpen={status === 'gameover'} 
        onRestart={onRestart}
        backPath="/games/mencocokkan"
      />
      
      <WinModal 
        isOpen={status === 'win'}
        score={score}
        correctCount={correctCount}
        wrongCount={wrongCount}
        onRestart={onRestart}
        backPath="/games/mencocokkan"
      />
    </div>
  );
}
