import { useEffect } from 'react';

import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import LevelSelection from '../../components/miniGames/LevelSelection';

export default function Matching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col w-full py-8">
        <LevelSelection title="MENCOCOKKAN" baseRoute="/games/mencocokkan" />
      </main>
      <Footer />
    </div>
  );
}
