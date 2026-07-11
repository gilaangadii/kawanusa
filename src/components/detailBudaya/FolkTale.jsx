import { motion } from 'framer-motion';

import { getProvinceAssets } from '../../utils/assetLoader';

const FolkTale = ({ data }) => {
  if (!data || !data.ceritaRakyat) return null;
  const assets = getProvinceAssets(data.slug);

  return (
    <section className="w-full bg-[#8d0015] py-20 px-6 lg:px-16">
      <div className="w-full max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center shadow-2xl relative overflow-hidden"
        >
          
          <div className="absolute top-8 right-12 opacity-5 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#221b04" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </div>

          <div className="w-full lg:w-1/2 shrink-0">
            <div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden border-4 border-[#e2bebb] p-2 bg-[#fdfaf1] shadow-lg relative">
              
              
              <img 
                src={assets.ceritaRakyat || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`} 
                alt={data.ceritaRakyat.judul} 
                className="w-full h-full object-cover rounded-[16px] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start relative z-10">
            <div className="bg-[#fdecc7] border border-[#eecd8c] text-[#8d0015] px-4 py-1.5 rounded-full mb-6">
              <span className="font-jakarta font-bold text-[12px] uppercase tracking-widest">
                Cerita Rakyat Populer
              </span>
            </div>
            
            <h2 className="font-bricolage font-extrabold text-[#221b04] text-[40px] md:text-[56px] leading-[1.1] mb-6 uppercase">
              {data.ceritaRakyat.judul}
            </h2>
            
            <p className="font-cheese-milky text-[#5a403f] text-[20px] md:text-[24px] leading-relaxed mb-10">
              {data.ceritaRakyat.deskripsi}
            </p>
            
            
            <button className="bg-[#8d0015] text-white hover:bg-[#5a403f] transition-colors duration-300 font-jakarta font-bold text-[14px] uppercase tracking-wider px-8 py-4 rounded-full shadow-lg active:scale-95">
              Baca Cerita
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FolkTale;
