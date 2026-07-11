import { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';

import CTASection from '../../components/detailBudaya/CTASection';
import CulturalFootprint from '../../components/detailBudaya/CulturalFootprint';
import FolkTale from '../../components/detailBudaya/FolkTale';
import FunFact from '../../components/detailBudaya/FunFact';
import IconicPlaces from '../../components/detailBudaya/IconicPlaces';
import ProvinceHero from '../../components/detailBudaya/ProvinceHero';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import { provinceDetailsData } from '../../data/provinceDetailsData';

export default function DetailBudaya() {
  const { slug } = useParams();
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  
  const provinceData = provinceDetailsData.find(prov => prov.slug === slug);

  if (!provinceData) {
    return (
      <div className="min-h-screen flex flex-col bg-[#fdfaf1]">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <h1 className="font-bricolage font-extrabold text-[#8d0015] text-[64px] mb-4">404</h1>
          <p className="font-cheese-milky text-[#5a403f] text-[24px] mb-8">Wah, data provinsi tidak ditemukan.</p>
          <Link to="/jelajah-budaya" className="bg-[#8d0015] text-white px-8 py-3 rounded-full font-jakarta font-bold uppercase tracking-wider hover:bg-[#5a403f] transition-colors">
            Kembali ke Jelajah Budaya
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1]">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full overflow-hidden">
        <ProvinceHero data={provinceData} />
        <CulturalFootprint data={provinceData} />
        <FolkTale data={provinceData} />
        <IconicPlaces data={provinceData} />
        <FunFact data={provinceData} />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
