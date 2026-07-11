import { motion } from 'framer-motion';
import { Globe, Image as ImageIcon, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';

const IconMap = {
  Globe: <Globe size={48} className="text-[#8d0015]" />,
  ImageSearch: <ImageIcon size={48} className="text-[#e89b25]" />,
  Puzzle: <Puzzle size={48} className="text-[#2a7a3b]" />
};

const GameCard = ({ game, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="w-full max-w-[280px] aspect-square rounded-[32px] bg-[#5a403f] p-3 shadow-[0_12px_24px_rgba(90,64,63,0.4)] hover:-translate-y-2 hover:shadow-[0_20px_30px_rgba(90,64,63,0.6)] transition-all duration-300 group"
    >
      <div className="w-full h-full rounded-[24px] border-[3px] border-[#e89b25] flex flex-col items-center justify-between p-6 text-center">
        
        
        <div className="w-[80px] h-[80px] bg-[#fdfaf1] rounded-[16px] shadow-inner flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {IconMap[game.icon] || <Globe size={48} className="text-[#8d0015]" />}
        </div>

        
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="font-cheese-milky text-[#fdfaf1] text-[24px] uppercase mb-2 tracking-wide leading-none">
            {game.title}
          </h3>
          <p className="font-jakarta text-[#eecd8c] text-[12px] leading-snug px-2">
            {game.description}
          </p>
        </div>

        
        <Link 
          to={game.route}
          className="mt-4 bg-[#eecd8c] text-[#5a403f] font-bricolage font-extrabold text-[14px] uppercase tracking-wider px-8 py-2 rounded-full shadow-lg hover:bg-white hover:text-[#8d0015] active:scale-95 transition-all duration-300"
        >
          Pilih
        </Link>

      </div>
    </motion.div>
  );
};

export default GameCard;
