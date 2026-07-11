export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const calculateScore = (correctAnswers, pointsPerQuestion = 10) => {
  return correctAnswers * pointsPerQuestion;
};

export const selectRandomQuestions = (questions, count = 10) => {
  if (!questions || questions.length === 0) return [];
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, questions.length));
};
