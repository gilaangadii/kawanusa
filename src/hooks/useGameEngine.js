import { useCallback,useEffect, useState } from 'react';

import { selectRandomQuestions } from '../utils/selectRandomQuestions';

export function useGameEngine({ 
  allQuestions, 
  totalQuestions = 10,
  scorePerCorrect = 10 
}) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [status, setStatus] = useState('loading'); 
  
  
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const initGame = useCallback(() => {
    const selected = selectRandomQuestions(allQuestions, totalQuestions);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setHearts(3);
    setCorrectCount(0);
    setWrongCount(0);
    setStatus('playing');
  }, [allQuestions, totalQuestions]);

  useEffect(() => {
    if (allQuestions && allQuestions.length > 0) {
      initGame();
    }
  }, [allQuestions, initGame]);

  const handleAnswer = (isCorrect) => {
    if (status !== 'playing') return;

    if (isCorrect) {
      setScore(prev => prev + scorePerCorrect);
      setCorrectCount(prev => prev + 1);
    } else {
      setHearts(prev => prev - 1);
      setWrongCount(prev => prev + 1);
    }

    
    
    const nextHearts = isCorrect ? hearts : hearts - 1;
    
    if (nextHearts <= 0) {
      setStatus('gameover');
      return;
    }

    if (currentIndex + 1 >= questions.length) {
      setStatus('win');
      return;
    }

    
    setCurrentIndex(prev => prev + 1);
  };

  const nextQuestion = () => {
    
    if (currentIndex + 1 >= questions.length) {
      setStatus('win');
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const loseHeart = () => {
    setHearts(prev => prev - 1);
    setWrongCount(prev => prev + 1);
    if (hearts - 1 <= 0) {
      setStatus('gameover');
    }
  };
  
  const addScore = () => {
    setScore(prev => prev + scorePerCorrect);
    setCorrectCount(prev => prev + 1);
  };

  return {
    questions,
    currentQuestion: questions[currentIndex],
    currentIndex,
    totalQuestions: questions.length,
    score,
    hearts,
    status,
    correctCount,
    wrongCount,
    handleAnswer,
    nextQuestion,
    loseHeart,
    addScore,
    resetGame: initGame,
    setStatus
  };
}
