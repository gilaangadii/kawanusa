import { shuffleArray } from './shuffleArray';

export function selectRandomQuestions(allQuestions, count = 10) {
  if (!allQuestions || allQuestions.length === 0) return [];
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, count);
}
