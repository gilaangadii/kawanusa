import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="w-full bg-[#fdfaf1] pt-12 pb-24 px-6 lg:px-16 text-center">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bricolage font-extrabold text-[#221b04] text-[36px] md:text-[48px] uppercase mb-8 leading-tight"
        >
          MASIH INGIN MENJELAJAH BUDAYA INDONESIA?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link 
            to="/jelajah-budaya" 
            className="inline-flex bg-[#8d0015] text-white hover:bg-[#5a403f] transition-all duration-300 font-jakarta font-bold text-[14px] uppercase tracking-wider px-10 py-5 rounded-full shadow-[0_8px_20px_rgba(141,0,21,0.3)] hover:shadow-[0_12px_25px_rgba(90,64,63,0.4)] active:scale-95"
          >
            KEMBALI KE JELAJAH BUDAYA
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
