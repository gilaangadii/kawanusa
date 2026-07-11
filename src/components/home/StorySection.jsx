import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stories = [
  {
    title: 'Timun Mas',
    region: 'Jawa Tengah',
    desc: 'Timun Mas adalah cerita rakyat Jawa tentang seorang gadis pemberani bernama Timun Mas yang lahir dari buah mentimun emas. Ia berjuang meloloskan diri dari kejaran raksasa jahat (Buto Ijo)...',
    img: 'src/assets/images/Cerita Rakyat/timun-mas.jpg',
    link: '/cerita/timun-mas',
  },
  {
    title: 'Malin Kundang',
    region: 'Sumatera Barat',
    desc: 'Malin Kundang adalah cerita rakyat Minangkabau tentang seorang pemuda yang merantau, menjadi kaya raya, lalu menolak mengakui ibu kandungnya yang miskin karena malu...',
    img: 'src/assets/images/Cerita Rakyat/Malin Kundang.jpg',
    link: '/cerita/malin-kundang',
  },
  {
    title: 'Ande-Ande Lumut',
    region: 'Jawa Timur',
    desc: 'Ande-Ande Lumut adalah cerita rakyat Jawa tentang pangeran yang menyamar sebagai pemuda desa bernama Ande-Ande Lumut untuk mencari pasangan hidup. Ia akhirnya memilih Klenting Kuning...',
    img: 'src/assets/images/Cerita Rakyat/ande-ande-lumut.png',
    link: '/cerita/ande-ande-lumut',
  },
  {
    title: 'Roro Jonggrang',
    region: 'DIY',
    desc: 'Roro Jonggrang adalah cerita rakyat Yogyakarta tentang putri cantik yang meminta syarat mustahil kepada Bandung Bondowoso untuk membangun 1.000 candi dalam satu malam...',
    img: 'src/assets/images/Cerita Rakyat/roro-jonggrang.png',
    link: '/cerita/roro-jonggrang',
  },
  {
    title: 'Bawang Merah Bawang Putih',
    region: 'Jawa Tengah',
    desc: 'Kisah dua saudara tiri dengan sifat yang bertolak belakang. Bawang Putih yang baik hati akhirnya mendapatkan kebahagiaan, sedangkan Bawang Merah yang jahat mendapat ganjaran dari keserakahannya...',
    img: 'src/assets/images/Cerita Rakyat/Bawang Merah Bawang Putih.jpg',
    link: '/cerita/bawang-merah-bawang-putih',
  },
  {
    title: 'Sangkuriang',
    region: 'Jawa Barat',
    desc: 'Legenda asal usul Gunung Tangkuban Perahu di Jawa Barat. Mengisahkan Sangkuriang yang jatuh cinta pada ibu kandungnya sendiri, Dayang Sumbi, dan gagal memenuhi syarat untuk menikahinya...',
    img: 'src/assets/images/Cerita Rakyat/Sangkuriang.jpg',
    link: '/cerita/sangkuriang',
  },
  {
    title: 'Keong Mas',
    region: 'Jawa Timur',
    desc: 'Kisah Putri Candra Kirana yang diubah menjadi keong emas oleh penyihir jahat. Ia dirawat oleh seorang nenek pancing hingga akhirnya kutukannya patah oleh pangeran sejati...',
    img: 'src/assets/images/Cerita Rakyat/Keong Mas.jpg',
    link: '/cerita/keong-mas',
  },
  {
    title: 'Lutung Kasarung',
    region: 'Jawa Barat',
    desc: 'Menceritakan perjalanan Putri Purbasari yang dibuang ke hutan. Ia bertemu dengan seekor lutung ajaib yang sebenarnya adalah Pangeran Guruminda dari kahyangan...',
    img: 'src/assets/images/Cerita Rakyat/Lutung Kasarung.jpg',
    link: '/cerita/lutung-kasarung',
  },
  {
    title: 'Jaka Tarub',
    region: 'Jawa Tengah',
    desc: 'Kisah pemuda desa bernama Jaka Tarub yang mencuri selendang seorang bidadari bernama Nawang Wulan yang sedang mandi. Mereka akhirnya menikah, namun rahasia Jaka Tarub terbongkar...',
    img: 'src/assets/images/Cerita Rakyat/jaka tarub.jpg',
    link: '/cerita/jaka-tarub',
  },
];

const StorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-12 pb-32 z-10 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-kids-word text-black text-3xl md:text-[40px] tracking-[4px] mb-12 uppercase"
      >
        Cerita Rakyat Populer
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex overflow-x-auto gap-6 md:gap-8 text-left pb-10 pt-4 px-4 -mx-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {stories.map((story, index) => {
          const btnColor = index % 2 === 0 ? 'bg-[#5c513b] hover:bg-[#492222]' : 'bg-[#c55428] hover:bg-[#a0421e]';
          
          return (
          <motion.div 
            variants={itemVariants} 
            key={story.title} 
            className="bg-white rounded-[20px] border-[3px] border-[#e6cf4d] flex flex-col overflow-hidden shadow-md group hover:shadow-xl transition-all h-auto min-w-[280px] lg:min-w-[320px] max-w-[320px] shrink-0 snap-center"
          >
            
            <div className="p-4 bg-gray-50 flex items-center justify-center h-[200px] lg:h-[242px] border-b border-gray-100 relative overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={story.img} 
                alt={story.title} 
                className="w-full h-full object-contain rounded-[20px]" 
              />
            </div>
            
            <div className="p-5 md:p-6 flex flex-col flex-1 gap-4 text-center">
              <div className="font-kids-word text-[#492222]">
                 <h3 className="text-[20px] md:text-[22px] tracking-[2.2px] uppercase">{story.title}</h3>
                 <p className="text-[12px] md:text-[13px] tracking-[1.3px] uppercase mt-1">{story.region}</p>
              </div>
              
              <p className="font-cheese-milky text-[#492222] text-[13px] md:text-[14px] leading-relaxed flex-1">
                {story.desc}
              </p>

              <div className="mt-4 flex justify-center">
                <Link 
                  to={story.link}
                  className={`inline-flex items-center justify-center gap-2 ${btnColor} text-white px-6 py-[8px] rounded-[20px] font-kids-word tracking-[2.8px] text-[13px] md:text-[14px] transition-transform hover:scale-105 shadow-sm hover:shadow-md uppercase`}
                >
                  Baca Cerita
                </Link>
              </div>
            </div>
          </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default StorySection;
