import { motion } from 'framer-motion';

const SDGSSupportSection = () => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-8 pb-12 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#C55428] to-[#F5F5F5] rounded-[30px] p-8 md:p-12 shadow-lg"
      >
        <h2 className="font-kids-word text-white text-3xl md:text-[40px] tracking-[4px] mb-10 text-center uppercase">
          Kawanusa Mendukung Tujuan SDGS
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          <div className="flex-1 text-center lg:text-right">
            <p className="font-cheese-milky font-medium text-[#860404] text-[20px] leading-relaxed drop-shadow-sm">
              Meningkatkan kualitas pendidikan dan pemahaman generasi muda melalui pembelajaran budaya sejak dini dikemas secara menyenangkan dan interaktif
            </p>
          </div>

          
          <div className="flex items-center gap-6 justify-center shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-[177px] h-[175px] md:w-[130px] md:h-[130px] shadow-lg rounded-sm overflow-hidden"
            >
              <img src="src/assets/images/Landing Page/sdgs4.png" alt="SDG 4" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-[177px] h-[175px] md:w-[130px] md:h-[130px] shadow-lg rounded-sm overflow-hidden"
            >
              <img src="src/assets/images/Landing Page/sdgs11.png" alt="SDG 11" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          
          <div className="flex-1 text-center lg:text-left">
            <p className="font-cheese-milky font-medium text-[#860404] text-[20px] leading-relaxed drop-shadow-sm">
              Melestarikan warisan budaya dan membangun komunitas sedari usia belia untuk mengenal budaya yang inklusif dan berkelanjutan
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SDGSSupportSection;
