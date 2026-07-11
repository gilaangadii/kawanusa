import { motion } from 'framer-motion';

import CategorySection from '../../components/home/CategorySection';
import CTASection from '../../components/home/CTASection';
import HeroSection from '../../components/home/HeroSection';
import NavigationCards from '../../components/home/NavigationCards';
import SDGSSection from '../../components/home/SDGSSection';
import SDGSSupportSection from '../../components/home/SDGSSupportSection';
import StatsSection from '../../components/home/StatsSection';
import StorySection from '../../components/home/StorySection';
import TriviaSection from '../../components/home/TriviaSection';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f0dc] flex flex-col font-inter overflow-x-hidden">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full relative"
      >
        
        <div className="absolute top-[864px] left-[-34px] right-[-30px] h-[3847px] rounded-[214px] shadow-[0px_15px_50px_0px_#5c513b] bg-gradient-to-b from-[#f4e3bd] to-[rgba(255,255,255,0.5)] z-0 hidden lg:block pointer-events-none"></div>

        <div className="relative z-10 space-y-8 lg:space-y-16 pb-20">
          <HeroSection />
          <SDGSSection />
          <NavigationCards />
          <TriviaSection />
          <CategorySection />
          <StatsSection />
          <SDGSSupportSection />
          <StorySection />
          <CTASection />
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
