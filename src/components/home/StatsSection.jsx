import { motion, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const CountUp = ({ to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        setCount(Math.floor((progress / (duration * 1000)) * to));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count.toLocaleString('id-ID')}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-8 pb-12 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#860404] rounded-[30px] p-8 md:p-12 relative shadow-lg flex flex-col"
      >
        <h2 className="font-kids-word text-white text-3xl md:text-[40px] tracking-[4px] mb-8 text-center uppercase">
          Indonesia itu kaya budaya
        </h2>

        <div className="relative w-full">
          
          <div className="bg-white rounded-[20px] shadow-inner py-8 px-4 md:px-12 relative z-10 ml-8 mr-8 md:ml-12 md:mr-12">
            <div className="flex flex-row justify-between items-center divide-x divide-gray-300 text-center w-full overflow-x-auto hide-scrollbar">
              <div className="flex-1 flex flex-col gap-1 md:gap-2 items-center justify-center px-2">
                <span className="font-kids-word text-[#492222] text-2xl sm:text-3xl lg:text-[40px] xl:text-[50px] leading-none whitespace-nowrap">
                  <CountUp to={38} />
                </span>
                <span className="font-inter font-bold text-gray-700 text-[10px] sm:text-[12px] lg:text-[14px] tracking-[1px] uppercase whitespace-nowrap">Provinsi</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 md:gap-2 items-center justify-center px-2">
                <span className="font-kids-word text-[#492222] text-2xl sm:text-3xl lg:text-[40px] xl:text-[50px] leading-none whitespace-nowrap">
                  <CountUp to={1300} suffix=" ++" />
                </span>
                <span className="font-inter font-bold text-gray-700 text-[10px] sm:text-[12px] lg:text-[14px] tracking-[1px] uppercase whitespace-nowrap">Suku Bangsa</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 md:gap-2 items-center justify-center px-2">
                <span className="font-kids-word text-[#492222] text-2xl sm:text-3xl lg:text-[40px] xl:text-[50px] leading-none whitespace-nowrap">
                  <CountUp to={7000} suffix=" ++" />
                </span>
                <span className="font-inter font-bold text-gray-700 text-[10px] sm:text-[12px] lg:text-[14px] tracking-[1px] uppercase whitespace-nowrap">Pulau</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 md:gap-2 items-center justify-center px-2">
                <span className="font-kids-word text-[#492222] text-2xl sm:text-3xl lg:text-[40px] xl:text-[50px] leading-none whitespace-nowrap">
                  <CountUp to={1100} suffix=" ++" />
                </span>
                <span className="font-inter font-bold text-gray-700 text-[10px] sm:text-[12px] lg:text-[14px] tracking-[1px] uppercase whitespace-nowrap">Bahasa Daerah</span>
              </div>
            </div>
          </div>

          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-24 bg-[#e6cf4d] rounded-r-full z-20 shadow-sm"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-24 bg-[#e6cf4d] rounded-l-full z-20 shadow-sm"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
