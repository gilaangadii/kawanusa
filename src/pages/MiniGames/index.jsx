import { motion } from 'framer-motion';
import { useEffect } from 'react';

import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import GameCard from '../../components/miniGames/GameCard';
import GameHero from '../../components/miniGames/GameHero';
import TipsCard from '../../components/miniGames/TipsCard';
import { gameMenu } from '../../data/gameMenu';

export default function MiniGames() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col w-full">
        
        <GameHero />

        
        <section className="w-full px-6 lg:px-16 py-12 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cheese-milky font-extrabold text-[#5a403f] text-[36px] md:text-[48px] uppercase text-center mb-12 tracking-wide"
          >
            Pilih Jenis Permainan
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full max-w-[1200px]">
            {gameMenu.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </section>

        
        <TipsCard />

      </main>

      <Footer />
    </div>
  );
}
