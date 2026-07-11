import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { useEffect,useState } from 'react';

import mascotImg from '../../assets/images/Landing Page/Kemas.png';
import { getRandomTip } from '../../data/tipsData';

const TipsCard = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    setTip(getRandomTip());
  }, []);

  return (
    <section className="w-full px-6 lg:px-16 py-12 flex justify-center overflow-visible">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[900px] bg-[#d5b169] rounded-[24px] p-6 md:p-8 flex items-center justify-between shadow-xl relative"
      >
        
        <div className="flex items-start md:items-center gap-6 z-10 w-[70%]">
          <div className="hidden sm:block">
            <Lightbulb size={56} className="text-[#fdecc7] drop-shadow-md animate-pulse" />
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-bricolage font-extrabold text-[#221b04] text-[20px] md:text-[24px] mb-1">
              Tips Hari Ini
            </h3>
            <p className="font-jakarta font-bold text-[#221b04] text-[14px] md:text-[16px] leading-relaxed">
              {tip}
            </p>
          </div>
        </div>

        
        <div className="absolute right-0 bottom-0 z-20 w-[160px] md:w-[200px] transform translate-y-2 -translate-x-2">
          <img 
            src={mascotImg} 
            alt="Maskot Kemas" 
            className="w-full h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] animate-pulse"
            style={{animationDuration: '3s'}}
          />
        </div>

      </motion.div>
    </section>
  );
};

export default TipsCard;
