import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavigationCards = () => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-12 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border-[3px] border-[#e6cf4d] rounded-[20px] h-auto md:h-[200px] p-6 md:p-8 flex flex-col md:flex-row items-center overflow-visible group hover:shadow-lg transition-shadow"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(243,231,206,1) 0%, rgba(255,255,255,1) 100%)"
          }}
        >
          
          <div className="md:absolute md:left-[-10px] md:top-[-25px] w-[280px] md:w-[337px] h-auto flex-shrink-0 z-10 transition-transform group-hover:scale-105">
            <img src="/assets/images/40c844a6d8c0175e2efc8e51862525a0f6d3b738.png" alt="Map of Indonesia" className="w-full h-full object-contain" />
          </div>

          <div className="flex-1 flex flex-col md:items-end text-center md:text-right mt-6 md:mt-0 relative z-20">
            <h3 className="font-kids-word text-[#4a2222] text-2xl tracking-[2.4px] mb-2 uppercase">
              Jelajah Budaya
            </h3>
            <p className="font-cheese-milky text-[#4a2222] text-sm md:text-base leading-snug max-w-[260px] mb-4 text-shadow-sm">
              Temukan berbagai budaya menarik dari 38 provinsi di Indonesia !
            </p>
            <Link to="/jelajah-budaya" className="bg-white/60 border-[3px] border-[#c55428] rounded-[20px] px-6 py-1 inline-flex items-center justify-center hover:bg-[#c55428] group/btn transition-colors">
              <span className="font-kids-word text-[#492222] group-hover/btn:text-white text-[15px]">Jelajahi Sekarang</span>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border-[3px] border-[#e6cf4d] rounded-[20px] h-auto md:h-[200px] p-6 md:p-8 flex flex-col-reverse md:flex-row items-center overflow-visible group hover:shadow-lg transition-shadow"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(244,227,189,1) 100%)"
          }}
        >
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 relative z-20">
            <h3 className="font-kids-word text-[#4a2222] text-2xl tracking-[2.4px] mb-2 uppercase">
              Mini Games
            </h3>
            <p className="font-cheese-milky text-[#4a2222] text-sm md:text-base leading-snug max-w-[260px] mb-4 text-shadow-sm">
              Mainkan games seru dan uji pengetahuanmu tentang budaya !
            </p>
            <Link to="/games" className="bg-white/60 border-[3px] border-[#c55428] rounded-[20px] px-6 py-1 inline-flex items-center justify-center hover:bg-[#c55428] group/btn transition-colors">
              <span className="font-kids-word text-[#492222] group-hover/btn:text-white text-[15px]">Main Sekarang</span>
            </Link>
          </div>

          <div className="relative w-[200px] md:w-[240px] h-[180px] md:absolute md:right-[10px] md:top-[10px] z-10 transition-transform group-hover:scale-105">
            <img src="/assets/images/9d3de6e170511eb787a2293538a7cbbe522a9a47.png" alt="Gamepad" className="w-[141px] h-[141px] object-contain absolute right-4 md:right-8 top-4 md:top-2 shadow-sm rounded-lg" />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              src="/assets/images/ae69e4c1a95304346f40dfab04b13955e449874e.png" 
              className="absolute left-0 top-0 w-[60px] object-contain" 
            />
            <motion.img 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              src="/assets/images/ef5653963edde4219363c59a1bcefcf4d5ea4c55.png" 
              className="absolute left-8 bottom-4 w-[40px] object-contain" 
            />
            <motion.img 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              src="/assets/images/8c335b42af4f8ea1054507184808e84a73cc45f5.png" 
              className="absolute right-0 bottom-0 w-[50px] object-contain" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NavigationCards;
