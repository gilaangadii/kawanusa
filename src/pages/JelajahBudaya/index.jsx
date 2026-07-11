import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import imgPeta from '../../assets/images/Jelajah Budaya/peta.png';
import ProvinceGrid from '../../components/jelajah/ProvinceGrid';
import RegionFilter from '../../components/jelajah/RegionFilter';
import SearchBar from '../../components/jelajah/SearchBar';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { provincesData } from '../../data/provinces';

const JelajahBudaya = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('Semua');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProvinces = provincesData.filter((prov) => {
    const matchesRegion = activeRegion === 'Semua' || prov.region === activeRegion;
    const matchesSearch = prov.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1]">
      <Navbar />
      
      <main className="flex-grow flex flex-col relative w-full overflow-hidden">
        
        <section className="w-full bg-[#eecd8c] rounded-t-[40px] md:rounded-t-[60px] pt-12 pb-16 px-6 lg:px-16 mt-[-20px] relative z-10 shadow-[0px_-10px_30px_rgba(0,0,0,0.05)]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1280px] mx-auto flex flex-col items-center"
          >
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <RegionFilter activeRegion={activeRegion} onRegionChange={setActiveRegion} />
            <ProvinceGrid provinces={filteredProvinces} />
          </motion.div>
        </section>

        
        <section className="w-full relative bg-[#7acced] min-h-[400px] md:min-h-[600px] flex items-center justify-center -mt-10 pt-10">
          <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#eecd8c] to-transparent z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-[1280px] mx-auto relative z-0"
          >
            <img 
              src={imgPeta} 
              alt="Peta Budaya Indonesia" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JelajahBudaya;
