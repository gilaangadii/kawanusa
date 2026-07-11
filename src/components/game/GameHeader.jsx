import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GameHeader({ hearts, currentIndex, totalQuestions, backPath = "/games" }) {
  const navigate = useNavigate();
  
  
  const progressPercent = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  return (
    <div className="w-full flex items-center justify-between px-6 md:px-12 py-6">
      
      
      <button 
        onClick={() => navigate(backPath)}
        className="w-12 h-12 rounded-full border-[3px] border-[#8b181a] flex items-center justify-center bg-[#fdfaf1] hover:bg-[#fdecc7] transition-colors shadow-sm shrink-0"
      >
        <ArrowLeft className="w-6 h-6 text-[#8b181a]" />
      </button>

      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mx-4">
        
        
        <div className="flex gap-1">
          {[1, 2, 3].map((heartIndex) => (
            <motion.div
              key={heartIndex}
              initial={false}
              animate={{ scale: heartIndex <= hearts ? 1 : 0.8, opacity: heartIndex <= hearts ? 1 : 0.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Heart 
                className="w-6 h-6 md:w-8 md:h-8" 
                fill={heartIndex <= hearts ? "#d9382e" : "transparent"} 
                color={heartIndex <= hearts ? "#d9382e" : "#5a403f"} 
                strokeWidth={heartIndex <= hearts ? 0 : 2}
              />
            </motion.div>
          ))}
        </div>

        
        <div className="w-full max-w-[300px] h-4 bg-[#fdecc7] rounded-full overflow-hidden border-2 border-[#fdecc7]">
          <motion.div 
            className="h-full bg-[#4a7c59] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      
      <div className="font-cheese-milky text-[#8b181a] text-lg md:text-xl shrink-0 tracking-wide">
        soal {currentIndex + 1}/{totalQuestions}
      </div>

    </div>
  );
}
