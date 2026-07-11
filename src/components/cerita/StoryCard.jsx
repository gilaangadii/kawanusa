import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StoryCard = ({ story, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-[#fdfaf1] rounded-[20px] border-[4px] border-[#5a403f] p-4 flex flex-col items-center shadow-[4px_4px_0px_#5a403f] transition-all hover:shadow-[6px_6px_0px_#5a403f]"
    >
      <div className="w-full aspect-[3/4] mb-4 border-[3px] border-[#5a403f] rounded-lg overflow-hidden bg-gray-200">
        {story.poster ? (
          <img 
            src={story.poster} 
            alt={story.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
             <span>No Image</span>
          </div>
        )}
      </div>

      <h3 className="font-cheese-milky text-[#c55428] text-2xl text-center leading-none mb-1">
        {story.title}
      </h3>
      
      <p className="font-bricolage text-[#5a403f] font-extrabold text-sm tracking-wider uppercase mb-3 text-center">
        {story.province}
      </p>

      <p className="font-jakarta text-[#5a403f] text-sm text-center mb-6 line-clamp-3 leading-relaxed min-h-[60px]">
        {story.description}
      </p>

      <Link 
        to={story.route}
        className="mt-auto bg-[#c55428] text-white font-cheese-milky text-xl tracking-wider py-2 px-8 rounded-full border-2 border-[#5a403f] shadow-[2px_2px_0px_#5a403f] hover:bg-[#a03c15] hover:shadow-[1px_1px_0px_#5a403f] hover:translate-y-[1px] transition-all"
      >
        BACA CERITA
      </Link>
    </motion.div>
  );
};

export default StoryCard;
