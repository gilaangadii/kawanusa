import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import heroBg from '../../../public/assets/images/2611dfe0fb2331333e152fc368388f3145e9d240.png';
import gatotImg from '../../assets/images/Landing Page/Gatot.png';
import kemasImg from '../../assets/images/Landing Page/Kemas.png';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[850px] overflow-hidden bg-[#f9f0dc] pt-[80px]">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <img 
          src={heroBg} 
          alt="Desain Background" 
          className="w-full h-full object-cover opacity-90 scale-105"
        />
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col pt-12 pb-16 h-full">
        
        <div className="w-full lg:w-[45%] flex flex-col gap-6 pt-12 relative z-20">
          <h1 
            className="font-singsong text-white text-5xl lg:text-[76px] leading-[1.1] uppercase tracking-normal"
            style={{ 
              WebkitTextStroke: '4px #860404', 
              textShadow: '4px 4px 0px #860404, 6px 6px 15px rgba(0,0,0,0.5), 0px 0px 25px rgba(255,255,255,0.6)'
            }}
          >
            BELAJAR<br />BUDAYA<br />JADI LEBIH<br />SERU
          </h1>
          
          <h2 
            className="font-kids-word text-[#4a2222] text-xl lg:text-[28px] leading-relaxed max-w-sm mt-2 font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          >
            Mari kita belajar bersama mengenal berbagai budaya di Indonesia !
          </h2>

          <div className="pt-4">
            <Link to="/jelajah-budaya" className="inline-flex items-center justify-center bg-white border-[3px] border-[#492222] rounded-[30px] px-6 py-2 group hover:bg-[#f9f0dc] transition-colors shadow-[3px_3px_0px_#492222] w-fit">
              <span className="font-kids-word text-[#492222] text-[18px] uppercase tracking-wider">
                MULAI JELAJAH
              </span>
              <span className="ml-2 text-[#492222] font-bold text-lg group-hover:translate-x-1 transition-transform">
                ➔
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-10 w-full max-w-[1280px] mx-auto hidden md:block">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 60 }}
            className="absolute top-[28%] right-[40%] lg:right-[49%] flex flex-col items-center"
          >
            <div className="bg-white border-2 border-gray-100 rounded-[20px] rounded-br-none px-4 py-2 lg:px-5 lg:py-2 shadow-lg mb-2 relative z-20">
              <p className="font-cheese-milky text-[#4a2222] text-sm lg:text-base whitespace-nowrap">Hi, aku si Gatot !</p>
            </div>
            <img src={gatotImg} alt="Gatot" className="w-[120px] lg:w-[150px] object-contain drop-shadow-lg" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 60 }}
            className="absolute top-[38%] right-[5%] lg:right-[8%] flex flex-col items-center"
          >
            <div className="bg-white border-2 border-gray-100 rounded-[20px] rounded-bl-none px-4 py-2 lg:px-5 lg:py-2 shadow-lg mb-2 relative z-20">
              <p className="font-cheese-milky text-[#4a2222] text-sm lg:text-base whitespace-nowrap">Hi, aku si Kemas !</p>
            </div>
            <img src={kemasImg} alt="Kemas" className="w-[140px] lg:w-[180px] object-contain drop-shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
