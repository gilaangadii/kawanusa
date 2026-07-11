import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-12 pb-20 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#860404] to-[#F9F0DC] rounded-[25px] p-10 md:p-16 text-center shadow-lg border-[2px] border-[#E6CF4D]"
      >
        <h2 className="font-kids-word text-white text-3xl md:text-[45px] tracking-[4px] mb-4 uppercase">
          Siap Menjadi Kawanusa ?
        </h2>
        
        <p className="font-cheese-milky font-medium text-white text-[15px] md:text-[25px] leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm">
          Yuk belajar dan bertumbuh bersama Kawanusa bersama generasi emas bangsa Indonesia
        </p>
        
        <Link 
          to="/jelajah-budaya"
          className="inline-flex items-center gap-2 bg-[#F9F0DC] text-[#492222] px-8 py-4 rounded-full font-kids-word tracking-[2.8px] text-[15px] md:text-[18px] transition-transform hover:scale-105 shadow-md hover:shadow-lg uppercase"
        >
          Mulai Jelajah
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
