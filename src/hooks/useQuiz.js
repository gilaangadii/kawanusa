import { useCallback, useEffect,useState } from 'react';

import { selectRandomQuestions, shuffleArray } from '../utils/gameUtils';
import { useGameEngine } from './useGameEngine';

export const useQuiz = (allQuestions, maxQuestions = 10) => {
  const engine = useGameEngine(3); 
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionStatus, setQuestionStatus] = useState('unanswered'); 
  const [shuffledChoices, setShuffledChoices] = useState([]);

  
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  
  const { resetGame } = engine;
  const initGame = useCallback(() => {
    const selected = selectRandomQuestions(allQuestions, maxQuestions);
    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setQuestionStatus('unanswered');
    setCorrectCount(0);
    setWrongCount(0);
    resetGame();
  }, [allQuestions, maxQuestions, resetGame]);

  
  useEffect(() => {
    if (allQuestions && allQuestions.length > 0) {
      initGame();
    }
  }, [allQuestions, initGame]);

  const currentQuestion = questions[currentIndex];

  
  useEffect(() => {
    if (currentQuestion) {
      setShuffledChoices(shuffleArray(currentQuestion.choices));
      setSelectedAnswer(null);
      setQuestionStatus('unanswered');
    }
  }, [currentQuestion]);

  const handleSelectAnswer = (choice) => {
    if (questionStatus !== 'unanswered') return; 

    setSelectedAnswer(choice);
    
    if (choice === currentQuestion.correctAnswer) {
      setQuestionStatus('correct');
      setCorrectCount(prev => prev + 1);
      engine.handleCorrect(10);
    } else {
      setQuestionStatus('wrong');
      setWrongCount(prev => prev + 1);
      engine.handleWrong();
    }
  };

  const nextQuestion = () => {
    if (engine.status === 'lost') return; 

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      engine.handleWin();
    }
  };

  const progressPercentage = questions.length > 0 ? ((currentIndex) / questions.length) * 100 : 0;

  return {
    ...engine,
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    selectedAnswer,
    questionStatus,
    shuffledChoices,
    correctCount,
    wrongCount,
    progressPercentage,
    handleSelectAnswer,
    nextQuestion,
    initGame
  };
};
