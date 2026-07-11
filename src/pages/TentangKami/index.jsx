import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import sdg4 from '../../assets/images/Landing Page/sdgs4.png';
import sdg11 from '../../assets/images/Landing Page/sdgs11.png';
import alasanKamiImg from '../../assets/images/Tentang Kami/Alasan Kami.png';

import heroImg from '../../assets/images/Tentang Kami/Hero.png';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

export default function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf1] font-jakarta overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full">
        
        <section className="relative w-full h-[500px] md:h-[700px] lg:h-[900px] flex flex-col items-center justify-start pt-20 md:pt-32">
          
          <div className="absolute inset-0 w-full h-full">
            <img src={heroImg} alt="Kawanusa Hero" className="w-full h-full object-cover object-top" />
          </div>
          
          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center mt-8 md:mt-12">
            <h1 
              className="font-singsong text-white text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-wider"
              style={{ WebkitTextStroke: '5px #8D0015' }}
            >
              TENTANG KAMI
            </h1>
            <p 
              className="font-cheese-milky text-[#5a403f] text-xl md:text-3xl lg:text-5xl leading-relaxed mt-2"
              style={{ textShadow: '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,1), 0 0 36px rgba(255,255,255,0.8)' }}
            >
              Kawanusa hadir untuk mengajak anak-anak Indonesia mengenal, mencintai, dan melestarikan budaya Nusantara
            </p>
          </div>
        </section>

        
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 py-16 flex flex-col gap-12 relative z-20 mt-4 md:mt-8">
          
          
          <section className="bg-[#fdfaf1] rounded-[40px] border-4 border-[#8b181a] shadow-xl flex flex-col md:flex-row relative overflow-hidden">
            
            <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-[400px] flex items-center justify-center p-0">
              <img src={alasanKamiImg} alt="Alasan Kami" className="w-full h-full object-cover md:object-contain scale-[1.15] md:scale-[1.2] origin-center z-10" />
            </div>
            
            <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-transparent">
              <h2 className="font-cheese-milky text-[#f7a072] text-4xl md:text-5xl lg:text-6xl mb-6 text-center md:text-left drop-shadow-sm" style={{ WebkitTextStroke: '2px #8b181a' }}>
                ALASAN KAMI
              </h2>
              <p className="font-bricolage text-[#5a403f] font-medium text-lg leading-relaxed text-center md:text-left">
                Di balik setiap rumah adat, tarian, lagu daerah, dan cerita rakyat, tersimpan identitas bangsa Indonesia. Kawanusa hadir karena kami percaya bahwa budaya akan terus hidup jika dikenalkan sejak dini. Melalui pengalaman belajar yang interaktif dan menyenangkan, kami ingin mengajak setiap anak menjelajahi Nusantara, memahami keberagaman, serta menumbuhkan rasa bangga untuk menjaga warisan budaya Indonesia bagi generasi masa depan.
              </p>
            </div>
          </section>

          
          <section className="bg-gradient-to-r from-[#d46d54] to-[#c55428] rounded-[40px] border-4 border-[#8b181a] shadow-lg p-8 md:p-12 flex flex-col items-center">
            <h2 className="font-cheese-milky text-white text-3xl md:text-4xl lg:text-5xl mb-10 text-center tracking-widest drop-shadow-md">
              KAWANUSA MENDUKUNG TUJUAN SDGS
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
              <p className="font-bricolage text-white text-lg text-center md:text-right font-medium flex-1">
                Meningkatkan kualitas pendidikan dan pembelajaran generasi muda melalui pembelajaran budaya sejak dini dikemas secara menyenangkan dan interaktif!
              </p>
              
              <div className="flex items-center gap-4 flex-shrink-0 bg-white/10 p-4 rounded-2xl">
                <img src={sdg4} alt="SDG 4" className="w-24 md:w-32 h-auto rounded shadow-md border-2 border-white/20" />
                <img src={sdg11} alt="SDG 11" className="w-24 md:w-32 h-auto rounded shadow-md border-2 border-white/20" />
              </div>

              <p className="font-bricolage text-white text-lg text-center md:text-left font-medium flex-1">
                Melestarikan warisan budaya dan membangun komunitas inklusif usia belia untuk mengenali budaya yang inklusif dan berkelanjutan
              </p>
            </div>
          </section>

          
          <section className="flex flex-col md:flex-row gap-8">
            
            <div className="flex-1 bg-white rounded-[40px] border-4 border-[#8b181a] shadow-lg p-8 md:p-10 flex flex-col">
              <h3 className="font-cheese-milky text-[#8b181a] text-3xl md:text-4xl mb-8 text-center drop-shadow-sm">
                TUJUAN KAMI
              </h3>
              <ul className="flex flex-col gap-6 font-cheese-milky text-[#5a403f] text-xl md:text-2xl px-2">
                <li className="mb-4">
                  1. 📚 Mengenalkan Budaya Indonesia
                </li>
                <li className="mb-4">
                  2. 🎮 Belajar Sambil Bermain
                </li>
                <li className="mb-4">
                  3. ❤️ Menumbuhkan Rasa Cinta Tanah Air
                </li>
                <li className="mb-4">
                  4. 🌍 Melestarikan Warisan Budaya
                </li>
                <li className="mb-4">
                  5. 💡 Mendorong Kreativitas & Rasa Ingin Tahu
                </li>
              </ul>
            </div>

            
            <div className="flex-1 bg-white rounded-[40px] border-4 border-[#8b181a] shadow-lg p-8 md:p-10 flex flex-col">
              <h3 className="font-cheese-milky text-[#8b181a] text-3xl md:text-4xl mb-8 text-center drop-shadow-sm">
                MANFAAT UNTUK PENGGUNA
              </h3>
              <ul className="flex flex-col font-cheese-milky text-[#5a403f] text-xl md:text-2xl px-2">
                <li className="mb-4">
                  1. 📖 Mendapatkan Materi Budaya yang Mudah Dipahami
                </li>
                <li className="mb-4">
                  2. 🎮 Pengalaman Belajar yang Interaktif dan Menyenangkan
                </li>
                <li className="mb-4">
                  3. 🌍 Menjelajahi Budaya dari Berbagai Daerah di Indonesia
                </li>
                <li className="mb-4">
                  4. 🥇 Meningkatkan Semangat Belajar melalui Reward dan Tantangan
                </li>
                <li className="mb-4">
                  5. 📱 Belajar Budaya Kapan Saja dan Di Mana Saja
                </li>
              </ul>
            </div>
          </section>

          
          <section className="bg-gradient-to-b from-[#9d2426] to-[#6a1214] rounded-[40px] border-4 border-[#fdecc7] shadow-xl p-12 text-center flex flex-col items-center my-8 overflow-hidden relative">
            
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 mix-blend-overlay"></div>
            
            <h2 className="relative z-10 font-cheese-milky text-white text-4xl md:text-5xl lg:text-6xl mb-6 drop-shadow-md">
              SIAP MENJADI KAWANUSA ?
            </h2>
            <p className="relative z-10 font-bricolage font-medium text-[#fdfaf1] text-lg md:text-xl mb-10">
              Yuk belajar dan bertumbuh bersama Kawanusa bersama generasi emas bangsa Indonesia
            </p>
            <Link 
              to="/jelajah-budaya" 
              className="relative z-10 bg-[#fdfaf1] text-[#8b181a] font-bricolage font-extrabold text-xl px-10 py-4 rounded-full border-4 border-[#5a403f] shadow-[4px_4px_0px_#5a403f] hover:translate-y-1 hover:shadow-[2px_2px_0px_#5a403f] transition-all flex items-center gap-2"
            >
              MULAI JELAJAH &rarr;
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
