import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProvinceCard = ({ 
  title, 
  description, 
  imageSrc, 
  slug,
  isPopular = false, 
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -10 }}
      className="bg-white border border-[#e2bebb] rounded-[24px] p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-gray-100">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        {isPopular && (
          <div className="absolute top-4 right-4 bg-[#8d0015] px-3 py-1 rounded-full shadow-md">
            <span className="font-jakarta font-bold text-[12px] text-white tracking-widest uppercase">
              POPULER
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="font-bricolage font-extrabold text-[#221b04] text-[32px] mt-2 mb-2 leading-tight">
          {title}
        </h3>
        <p className="font-cheese-milky text-[#5a403f] text-[20px] leading-snug flex-grow mb-6">
          {description}
        </p>
      </div>

      <Link 
        to={`/budaya/${slug || title?.toLowerCase().replace(/ /g, '-')}`} 
        className="w-full h-[56px] bg-[#fdecc7] rounded-[12px] flex items-center justify-center gap-2 group hover:bg-[#fbde99] transition-all active:scale-95"
      >
        <span className="font-cheese-milky text-[#8d0015] text-[20px]">
          Jelajahi Sekarang
        </span>
        <ChevronRight className="text-[#8d0015] transition-transform group-hover:translate-x-1" size={20} strokeWidth={2.5} />
      </Link>
    </motion.div>
  );
};

export default ProvinceCard;
