import { AnimatePresence,motion } from 'framer-motion';
import { CheckCircle, LayoutGrid, RefreshCcw, Star,Trophy, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WinModal({ 
  isOpen, 
  score, 
  correctCount, 
  wrongCount, 
  onRestart, 
  backPath = "/games" 
}) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#fdfaf1] w-full max-w-md rounded-[32px] border-[6px] border-[#4a7c59] shadow-2xl p-8 flex flex-col items-center text-center overflow-hidden"
          >
            
            <div className="absolute top-0 left-0 w-full h-32 bg-[#4a7c59] -z-10 rounded-t-[24px]"></div>
            
            <div className="w-24 h-24 bg-white rounded-full border-4 border-[#4a7c59] flex items-center justify-center mb-6 mt-4 shadow-lg relative">
              <Trophy className="w-12 h-12 text-[#f7d054]" />
              
              <Star className="absolute -top-2 -right-4 w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
              <Star className="absolute top-4 -left-6 w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse delay-75" />
            </div>

            <h2 className="font-cheese-milky text-4xl text-[#4a7c59] mb-2 drop-shadow-sm">
              SELAMAT!
            </h2>
            <p className="font-bricolage text-[#5a403f] font-medium text-lg mb-6">
              Kamu berhasil menyelesaikan tantangan ini dengan hebat!
            </p>

            
            <div className="w-full bg-white rounded-2xl border-2 border-[#e8dcc4] p-4 mb-8 flex gap-4">
              <div className="flex-1 flex flex-col items-center border-r-2 border-[#e8dcc4]">
                <span className="font-bricolage text-sm text-[#5a403f] mb-1">Skor</span>
                <span className="font-cheese-milky text-3xl text-[#e89b25]">{score}</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-[#43a047]" />
                  <span className="font-bricolage font-bold text-[#43a047]">{correctCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-[#e53935]" />
                  <span className="font-bricolage font-bold text-[#e53935]">{wrongCount}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-4">
              <button 
                onClick={onRestart}
                className="w-full py-4 rounded-xl font-cheese-milky text-xl tracking-wide bg-[#f7d054] text-[#8b181a] border-4 border-[#8b181a] shadow-[0_4px_0_#8b181a] hover:translate-y-1 hover:shadow-[0_2px_0_#8b181a] transition-all flex items-center justify-center gap-2"
              >
                <RefreshCcw className="w-6 h-6" /> Main Lagi
              </button>
              
              <button 
                onClick={() => navigate(backPath)}
                className="w-full py-4 rounded-xl font-cheese-milky text-xl tracking-wide bg-white text-[#5a403f] border-4 border-[#5a403f] shadow-[0_4px_0_#5a403f] hover:translate-y-1 hover:shadow-[0_2px_0_#5a403f] transition-all flex items-center justify-center gap-2"
              >
                <LayoutGrid className="w-6 h-6" /> Kembali ke Menu
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
