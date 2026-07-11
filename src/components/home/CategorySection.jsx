import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Rumah Adat', image: '/assets/images/8a650491307dc556ba7424ccd352366aefbfd994.png', link: '/jelajah-budaya?filter=rumah-adat' },
  { name: 'Tarian Adat', image: '/assets/images/ad211fa78ddc1f416fff5acb62e94edaa56ad1dd.png', link: '/jelajah-budaya?filter=tarian-adat' },
  { name: 'Alat Musik Daerah', image: '/assets/images/ecf218bd317259d59a16135f12a1554ec8a88d42.png', link: '/jelajah-budaya?filter=alat-musik' },
  { name: 'Pakaian Adat', image: '/assets/images/131e54e1f3ca2f3b3ea4c55ea97ccdba9d207989.png', link: '/jelajah-budaya?filter=pakaian-adat' },
  { name: 'Permainan Daerah', image: '/assets/images/9fef3461abe24249441142a05513055df1229ae2.png', link: '/jelajah-budaya?filter=permainan-daerah' },
];

const CategorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-16 pb-8 z-10 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-kids-word text-[#5c513b] text-3xl md:text-[40px] tracking-[4px] mb-16 uppercase"
      >
        Yuk, kenali budaya nusantara !
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-8 md:gap-12"
      >
        {categories.map((category, index) => (
          <motion.div key={category.name} variants={itemVariants} className="flex flex-col items-center gap-4 group">
            <Link to={category.link} className="flex flex-col items-center relative">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                className="w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-[20px] border-[3px] border-[#e6cf4d] bg-white flex items-center justify-center p-4 shadow-sm relative overflow-hidden transition-all"
              >
                 <motion.img 
                   animate={{ y: [0, -8, 0] }}
                   transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
                   src={category.image} 
                   alt={category.name} 
                   className="w-full h-full object-contain drop-shadow-md" 
                 />
              </motion.div>
              <span className="font-kids-word text-[#492222] text-lg md:text-[20px] text-center max-w-[160px] mt-6 leading-tight uppercase">
                {category.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategorySection;
