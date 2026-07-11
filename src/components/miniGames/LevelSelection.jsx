import { motion } from 'framer-motion';
import { ArrowLeft, Castle, Compass, Crown, Image as ImageIcon, Leaf, Music, Shirt, Users,Utensils } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';

import { levelData } from '../../data/levelData';

const LevelIconMap = {
  Leaf: <Leaf size={40} className="text-[#2a7a3b] mb-2" />,
  Compass: <Compass size={40} className="text-[#221b04] mb-2" />,
  Crown: <Crown size={40} className="text-[#e89b25] mb-2" />
};

const CategoryIconMap = {
  Image: <ImageIcon size={24} className="text-[#2a7a3b]" />,
  Utensils: <Utensils size={24} className="text-[#e89b25]" />,
  Shirt: <Shirt size={24} className="text-[#8d0015]" />,
  Music: <Music size={24} className="text-[#5a403f]" />,
  Castle: <Castle size={24} className="text-[#221b04]" />,
  Users: <Users size={24} className="text-[#2a7a3b]" />
};

const LevelSelection = ({ title, baseRoute = "/games/quiz" }) => {
  const navigate = useNavigate();

  const handlePlayClick = (e, categoryId, categoryName) => {
    e.preventDefault();
    if (baseRoute) {
      navigate(`${baseRoute}/${categoryId}`);
    } else {
      alert(`Memulai permainan: ${title} - ${categoryName}`);
    }
  };

  return (
    <section className="w-full px-6 lg:px-16 py-12 flex flex-col items-center">
      <div className="w-full max-w-[1000px]">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 mb-12"
        >
          <Link 
            to="/games" 
            className="w-[56px] h-[56px] rounded-full border-[3px] border-[#5a403f] bg-white flex items-center justify-center hover:bg-[#fdecc7] transition-colors"
          >
            <ArrowLeft size={32} className="text-[#5a403f]" />
          </Link>
          <h1 className="font-bricolage font-extrabold text-[#5a403f] text-[32px] md:text-[40px] uppercase tracking-wider">
            {title}
          </h1>
        </motion.div>

        
        <div className="flex flex-col gap-6 w-full">
          {levelData.map((level, index) => (
            <motion.div 
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-full bg-[#eecd8c] rounded-[40px] border-[3px] border-[#5a403f] overflow-hidden flex flex-col md:flex-row shadow-[0_8px_0_#5a403f]"
            >
              
              
              <div className="w-full md:w-[25%] p-6 md:p-8 flex flex-col items-center justify-center text-center">
                {LevelIconMap[level.icon]}
                <h2 className="font-cheese-milky text-[#221b04] text-[24px] uppercase mb-1 leading-none">{level.name}</h2>
                <p className="font-jakarta text-[#5a403f] text-[13px] leading-tight px-2">{level.description}</p>
              </div>

              
              <div className="hidden md:block w-[2px] bg-[#8d0015]"></div>
              <div className="md:hidden w-full h-[2px] bg-[#8d0015]"></div>

              
              <div className="flex-1 flex flex-col">
                {level.categories.map((cat, catIndex) => (
                  <div 
                    key={cat.id} 
                    className={`flex items-center justify-between p-6 ${catIndex !== level.categories.length - 1 ? 'border-b-[2px] border-[#8d0015]' : ''} hover:bg-[#fdecc7] transition-colors group`}
                  >
                    <div className="flex items-center gap-4">
                      
                      
                      <div className="w-[48px] h-[48px] bg-white rounded-lg border-2 border-[#5a403f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {CategoryIconMap[cat.imgPlaceholder]}
                      </div>
                      <span className="font-cheese-milky text-[#5a403f] text-[20px] md:text-[24px] uppercase tracking-wide">
                        {cat.name}
                      </span>
                    </div>

                    <button 
                      onClick={(e) => handlePlayClick(e, cat.id, cat.name)}
                      className="bg-white border-2 border-[#5a403f] text-[#221b04] font-jakarta font-bold text-[16px] px-8 py-2 rounded-xl shadow-[0_4px_0_#5a403f] active:shadow-none active:translate-y-1 hover:bg-[#fdfaf1] transition-all"
                    >
                      Main
                    </button>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LevelSelection;
