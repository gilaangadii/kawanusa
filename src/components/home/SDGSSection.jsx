import { motion } from 'framer-motion';

const SDGSSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-20 pb-12">
      
      <motion.img 
        initial={{ opacity: 0, x: -50, rotate: 0 }}
        whileInView={{ opacity: 1, x: 0, rotate: 24.25 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="/assets/images/ffc5ced3c1d3c7097a830e2ddd5b6c59b0e511d9.png" 
        alt="Wayang Left" 
        className="absolute left-[-2%] top-[10%] w-[180px] lg:w-[220px] object-contain pointer-events-none z-0 hidden md:block"
      />
      <motion.img 
        initial={{ opacity: 0, x: 50, rotate: 180 }}
        whileInView={{ opacity: 1, x: 0, rotate: 164.26 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="/assets/images/ffc5ced3c1d3c7097a830e2ddd5b6c59b0e511d9.png" 
        alt="Wayang Right" 
        className="absolute right-[-2%] top-[10%] w-[180px] lg:w-[220px] object-contain pointer-events-none z-0 hidden md:block -scale-y-100"
      />

      <div className="relative z-10 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-kids-word text-[#5c513b] text-3xl md:text-[40px] tracking-[4px] mb-12 uppercase"
        >
          Kenapa Budaya itu penting ?
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center"
        >
          
          <motion.div variants={itemVariants} className="bg-white rounded-[20px] border-2 border-[#e6cf4d] w-full max-w-[210px] h-auto aspect-square p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform shadow-sm">
             <div className="w-[120px] h-[120px] lg:w-[155px] lg:h-[155px] rounded-full shadow-[10px_0px_7px_0px_rgba(0,0,0,0.3)] bg-white overflow-hidden flex items-center justify-center">
               <img src="src/assets/images/Landing Page/04. Harta karun bangsa.png" alt="Harta Karun Bangsa" className="w-[85%] h-[85%] object-contain" />
             </div>
             <p className="font-kids-word text-[#492222] text-[18px] lg:text-[20px] text-center leading-[1.2]">Harta Karun<br/>Bangsa</p>
          </motion.div>

          
          <motion.div variants={itemVariants} className="bg-white rounded-[20px] border-2 border-[#e6cf4d] w-full max-w-[210px] h-auto aspect-square p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform shadow-sm">
             <div className="w-[120px] h-[120px] lg:w-[155px] lg:h-[155px] rounded-full shadow-[10px_0px_7px_0px_rgba(0,0,0,0.3)] bg-white overflow-hidden flex items-center justify-center">
               <img src="src/assets/images/Landing Page/05. Belajar menghargai keberagaman_.png" alt="Menghargai keberagaman" className="w-[85%] h-[85%] object-contain" />
             </div>
             <p className="font-kids-word text-[#492222] text-[18px] lg:text-[20px] text-center leading-[1.2]">Menghargai<br/>keberagaman</p>
          </motion.div>

          
          <motion.div variants={itemVariants} className="bg-white rounded-[20px] border-2 border-[#e6cf4d] w-full max-w-[210px] h-auto aspect-square p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform shadow-sm">
             <div className="w-[120px] h-[120px] lg:w-[155px] lg:h-[155px] rounded-full shadow-[10px_0px_7px_0px_rgba(0,0,0,0.3)] bg-white overflow-hidden flex items-center justify-center">
               <img src="src/assets/images/Landing Page/06. Menumbuhkan rasa cinta tanah air.png" alt="Mencintai tanah air" className="w-[85%] h-[85%] object-contain" />
             </div>
             <p className="font-kids-word text-[#492222] text-[16px] lg:text-[18px] text-center leading-[1.2]">Mencintai tanah air<br/>Indonesia</p>
          </motion.div>

          
          <motion.div variants={itemVariants} className="bg-white rounded-[20px] border-2 border-[#e6cf4d] w-full max-w-[210px] h-auto aspect-square p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform shadow-sm">
             <div className="w-[120px] h-[120px] lg:w-[155px] lg:h-[155px] rounded-full shadow-[10px_0px_7px_0px_rgba(0,0,0,0.3)] bg-white overflow-hidden flex items-center justify-center">
               <img src="src/assets/images/Landing Page/07. Menjaga warisan leluhur_.png" alt="Menjaga warisan leluhur" className="w-[85%] h-[85%] object-contain" />
             </div>
             <p className="font-kids-word text-[#492222] text-[16px] lg:text-[18px] text-center leading-[1.2]">Menjaga warisan<br/>leluhur</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SDGSSection;
