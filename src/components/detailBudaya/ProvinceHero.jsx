import { motion } from 'framer-motion';
import { ChevronRight,Home, Map, MapPin, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { getProvinceAssets } from '../../utils/assetLoader';

const ProvinceHero = ({ data }) => {
  if (!data) return null;
  const assets = getProvinceAssets(data.slug);

  return (
    <section className="w-full bg-[#fdfaf1] pt-32 pb-16 px-6 lg:px-16 overflow-hidden relative">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8d0015 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        
        <div className="flex items-center gap-2 mb-8 text-[#5a403f] font-jakarta font-bold text-[14px]">
          <Link to="/" className="flex items-center gap-1 hover:text-[#8d0015] transition-colors">
            <Home size={16} />
            <span>Kawanusa</span>
          </Link>
          <ChevronRight size={16} className="text-[#8d0015]" />
          <Link to="/jelajah-budaya" className="hover:text-[#8d0015] transition-colors">
            Jelajah Budaya
          </Link>
          <ChevronRight size={16} className="text-[#8d0015]" />
          <span className="text-[#8d0015] uppercase tracking-wider">{data.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <h1 className="font-bricolage font-extrabold text-[#5a403f] text-[48px] md:text-[64px] leading-[1.1] uppercase mb-6 tracking-tight">
              {data.name}: <br />
              <span className="text-[#221b04]">
                MENJELAJAH PESONA <br className="hidden lg:block" /> {data.wilayah}
              </span>
            </h1>
            <p className="font-cheese-milky text-[#5a403f] text-[20px] md:text-[24px] leading-relaxed max-w-[600px]">
              {data.description}
            </p>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[500px] xl:w-[600px] shrink-0"
          >
            <div className="relative w-full aspect-video rounded-[24px] border-4 border-[#e2bebb] p-2 bg-white shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[16px] overflow-hidden bg-[#eecd8c]">
                
                
                <img 
                  src={assets.hero || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`} 
                  alt={`Pesona Budaya ${data.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-[#8d0015] rounded-[24px] p-2 md:p-4 shadow-2xl relative overflow-hidden"
        >
          
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)' }}></div>
          
          <div className="bg-[#fdecc7] rounded-[16px] p-6 md:p-8 flex flex-wrap justify-between items-center gap-6 relative z-10 border border-[#eecd8c]">
            
            <div className="flex flex-col items-center justify-center flex-1 min-w-[120px]">
              <div className="w-[64px] h-[64px] bg-[#221b04] rounded-full flex items-center justify-center mb-4 text-[#fdecc7] shadow-lg">
                <MapPin size={32} />
              </div>
              <h4 className="font-bricolage font-extrabold text-[#221b04] text-[20px] uppercase tracking-wider mb-1">IBU KOTA</h4>
              <p className="font-cheese-milky text-[#8d0015] text-[18px] text-center">{data.ibuKota}</p>
            </div>

            <div className="hidden md:block w-[2px] h-[80px] bg-[#eecd8c]"></div>

            <div className="flex flex-col items-center justify-center flex-1 min-w-[120px]">
              <div className="w-[64px] h-[64px] bg-[#221b04] rounded-full flex items-center justify-center mb-4 text-[#fdecc7] shadow-lg">
                <Users size={32} />
              </div>
              <h4 className="font-bricolage font-extrabold text-[#221b04] text-[20px] uppercase tracking-wider mb-1">SUKU</h4>
              <p className="font-cheese-milky text-[#8d0015] text-[18px] text-center">{data.suku}</p>
            </div>

            <div className="hidden md:block w-[2px] h-[80px] bg-[#eecd8c]"></div>

            <div className="flex flex-col items-center justify-center flex-1 min-w-[120px]">
              <div className="w-[64px] h-[64px] bg-[#221b04] rounded-full flex items-center justify-center mb-4 text-[#fdecc7] shadow-lg">
                <MessageCircle size={32} />
              </div>
              <h4 className="font-bricolage font-extrabold text-[#221b04] text-[20px] uppercase tracking-wider mb-1">BAHASA</h4>
              <p className="font-cheese-milky text-[#8d0015] text-[18px] text-center">{data.bahasa}</p>
            </div>

            <div className="hidden md:block w-[2px] h-[80px] bg-[#eecd8c]"></div>

            <div className="flex flex-col items-center justify-center flex-1 min-w-[120px]">
              <div className="w-[64px] h-[64px] bg-[#221b04] rounded-full flex items-center justify-center mb-4 text-[#fdecc7] shadow-lg">
                <Map size={32} />
              </div>
              <h4 className="font-bricolage font-extrabold text-[#221b04] text-[20px] uppercase tracking-wider mb-1">WILAYAH</h4>
              <p className="font-cheese-milky text-[#8d0015] text-[18px] text-center">{data.wilayah}</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProvinceHero;
