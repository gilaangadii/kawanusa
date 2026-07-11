import { motion } from 'framer-motion';
import { Home, Music,Utensils } from 'lucide-react';

import { getProvinceAssets } from '../../utils/assetLoader';

const CulturalFootprint = ({ data }) => {
  if (!data) return null;
  const assets = getProvinceAssets(data.slug);

  return (
    <section className="w-full bg-[#fdfaf1] py-16 px-6 lg:px-16 relative overflow-hidden">
      <div className="w-full max-w-[1000px] mx-auto relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bricolage font-extrabold text-[#5a403f] text-[32px] md:text-[40px] uppercase text-center mb-16 tracking-wide"
        >
          JEJAK BUDAYA {data.name}
        </motion.h2>

        <div className="relative">
          
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#e2bebb] transform -translate-x-1/2 hidden md:block"></div>

          
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] text-center md:text-right mb-6 md:mb-0 order-2 md:order-1"
            >
              <h3 className="font-bricolage font-extrabold text-[#8d0015] text-[24px] uppercase mb-2">RUMAH ADAT: {data.rumahAdat}</h3>
              <p className="font-cheese-milky text-[#5a403f] text-[18px]">
                Arsitektur tradisional kebanggaan masyarakat {data.name} yang memiliki nilai filosofis tinggi.
              </p>
            </motion.div>
            
            <div className="hidden md:flex w-[48px] h-[48px] bg-[#fdfaf1] border-2 border-[#8d0015] rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10 text-[#8d0015]">
              <Home size={24} />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] order-1 md:order-2 mb-6 md:mb-0"
            >
              <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden border-4 border-[#e2bebb] p-2 bg-white shadow-lg">
                
                
                <img src={assets.rumahAdat || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`} alt={data.rumahAdat} className="w-full h-full object-cover rounded-[10px]" />
              </div>
            </motion.div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] mb-6 md:mb-0 order-1 md:order-1"
            >
              <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden border-4 border-[#e2bebb] p-2 bg-white shadow-lg">
                
                
                <img src={assets.makanan || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`} alt={data.makananKhas} className="w-full h-full object-cover rounded-[10px]" />
              </div>
            </motion.div>
            
            <div className="hidden md:flex w-[48px] h-[48px] bg-[#fdfaf1] border-2 border-[#8d0015] rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10 text-[#8d0015]">
              <Utensils size={24} />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] text-center md:text-left order-2 md:order-2"
            >
              <h3 className="font-bricolage font-extrabold text-[#8d0015] text-[24px] uppercase mb-2">MAKANAN KHAS: {data.makananKhas}</h3>
              <p className="font-cheese-milky text-[#5a403f] text-[18px]">
                Kelezatan kuliner ikonik dari {data.name} dengan rempah pilihan yang menggugah selera.
              </p>
            </motion.div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center justify-between relative w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] text-center md:text-right mb-6 md:mb-0 order-2 md:order-1"
            >
              <h3 className="font-bricolage font-extrabold text-[#8d0015] text-[24px] uppercase mb-2">TARIAN: {data.tarian}</h3>
              <p className="font-cheese-milky text-[#5a403f] text-[18px]">
                Seni tari peninggalan leluhur yang mengekspresikan nilai kehidupan dan estetika tinggi.
              </p>
            </motion.div>
            
            <div className="hidden md:flex w-[48px] h-[48px] bg-[#fdfaf1] border-2 border-[#8d0015] rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10 text-[#8d0015]">
              <Music size={24} />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[45%] order-1 md:order-2 mb-6 md:mb-0"
            >
              <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden border-4 border-[#e2bebb] p-2 bg-white shadow-lg">
                
                
                <img src={assets.tarian || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`} alt={data.tarian} className="w-full h-full object-cover rounded-[10px]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CulturalFootprint;
