import { Route,Routes } from 'react-router-dom';

import Cerita from '../pages/Cerita';
import DetailBudaya from '../pages/DetailBudaya';
import Home from '../pages/Home';
import JelajahBudaya from '../pages/JelajahBudaya';
import Matching from '../pages/Matching';
import MatchingGame from '../pages/Matching/MatchingGame';
import MiniGames from '../pages/MiniGames';
import Quiz from '../pages/Quiz';
import QuizLevel from '../pages/QuizLevel';
import StoryDetail from '../pages/Stories/StoryDetail';
import TebakGambar from '../pages/TebakGambar';
import TebakGambarGame from '../pages/TebakGambar/TebakGambarGame';
import TentangKami from '../pages/TentangKami';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jelajah-budaya" element={<JelajahBudaya />} />
      <Route path="/budaya/:slug" element={<DetailBudaya />} />
      <Route path="/cerita" element={<Cerita />} />
      <Route path="/cerita/:slug" element={<StoryDetail />} />
      <Route path="/games" element={<MiniGames />} />
      <Route path="/games/quiz" element={<QuizLevel />} />
      <Route path="/games/quiz/:categoryId" element={<Quiz />} />
      <Route path="/games/tebak-gambar" element={<TebakGambar />} />
      <Route path="/games/tebak-gambar/:categoryId" element={<TebakGambarGame />} />
      <Route path="/games/mencocokkan" element={<Matching />} />
      <Route path="/games/mencocokkan/:categoryId" element={<MatchingGame />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
    </Routes>
  );
}
