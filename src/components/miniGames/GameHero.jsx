import { motion } from 'framer-motion';

import heroImg from '../../assets/images/Games/Hero Games.png';

const GameHero = () => {
  return (
    <section className="w-full pt-12 pb-8 px-6 lg:px-16 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1200px] relative rounded-[40px] border-[6px] border-[#8d0015] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#bce3fc]"
      >
        <img 
          src={heroImg} 
          alt="Mari Uji Pengetahuanmu Tentang Budaya Di Indonesia" 
          className="w-full h-auto object-cover relative z-0"
        />
        
        
        <div className="absolute top-[8%] z-30 w-full px-4 text-center">
          <h1 
            className="font-singsong font-extrabold text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] leading-[1.1] uppercase mx-auto max-w-[900px] text-white"
            style={{ 
              WebkitTextStroke: '2px #8D0015', 
              textShadow: '0 4px 0 #1E3A8A, 0 8px 16px rgba(0,0,0,0.3)' 
            }}
          >
            MARI UJI PENGETAHUANMU <br/> TENTANG BUDAYA DI INDONESIA
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default GameHero;
