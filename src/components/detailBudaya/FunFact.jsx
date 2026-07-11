import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const FunFact = ({ data }) => {
  if (!data || !data.funFact) return null;

  return (
    <section className="w-full bg-[#fdfaf1] py-12 px-6 lg:px-16">
      <div className="w-full max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#5a403f] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden"
        >
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
          
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#8d0015] border-4 border-[#eecd8c] flex items-center justify-center shrink-0 shadow-lg text-[#fdecc7]">
            <Lightbulb size={40} />
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <h3 className="font-bricolage font-extrabold text-[#fdecc7] text-[28px] md:text-[32px] uppercase mb-3">TAHUKAH KAMU?</h3>
            <p className="font-cheese-milky text-[#fdfaf1] text-[18px] md:text-[22px] leading-relaxed">
              {data.funFact}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunFact;
