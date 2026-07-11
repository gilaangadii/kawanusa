import { motion } from 'framer-motion';

import heroImg from '../../assets/images/Cerita Rakyat/Hero Cerita Rakyat.png';

const StoryHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#fdecc7]">
      <img 
        src={heroImg} 
        alt="Hero Cerita Nusantara" 
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0" 
      />

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-20 top-[-20%] md:top-[-30%]"
      >
        <h1 
          className="font-singsong text-white text-[40px] md:text-6xl lg:text-8xl tracking-widest text-center"
          style={{ 
            WebkitTextStroke: '2px #8D0015',
            textShadow: '0 4px 0 #8D0015, 0 8px 16px rgba(0,0,0,0.3)'
          }}
        >
          CERITA NUSANTARA
        </h1>
      </motion.div>
    </section>
  );
};

export default StoryHero;
