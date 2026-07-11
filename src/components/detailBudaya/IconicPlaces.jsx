import { motion } from 'framer-motion';

import { getProvinceAssets } from '../../utils/assetLoader';

const IconicPlaces = ({ data }) => {
  if (!data || !data.tempatIkonik || data.tempatIkonik.length === 0) return null;
  const assets = getProvinceAssets(data.slug);

  return (
    <section className="w-full bg-[#fdfaf1] py-20 px-6 lg:px-16">
      <div className="w-full max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-bricolage font-extrabold text-[#221b04] text-[40px] uppercase mb-4">TEMPAT IKONIK</h2>
          <p className="font-cheese-milky text-[#5a403f] text-[20px] max-w-[800px]">
            Situs bersejarah dan keindahan alam yang merepresentasikan pesona {data.name}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.tempatIkonik.map((place, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              
              
              <img 
                src={index === 0 ? (assets.tempatIkonik1 || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`) : (assets.tempatIkonik2 || `https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800&h=600`)} 
                alt={place.nama} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#221b04]/90 via-[#221b04]/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-bricolage font-extrabold text-white text-[28px] mb-2">{place.nama}</h3>
                <p className="font-cheese-milky text-[#fdfaf1] text-[18px] line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {place.deskripsi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconicPlaces;
