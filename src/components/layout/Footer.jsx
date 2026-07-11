import { Globe, PlayCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import LogoNavbar from '../../assets/images/Landing Page/02. Logo Navbar.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#860404] pt-12 pb-6">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          
          <div className="flex flex-col gap-4 max-w-sm">
            <img src={LogoNavbar} alt="Kawanusa" className="h-[40px] md:h-[45px] object-contain self-start" />
            <p className="font-inter text-white/90 text-sm leading-relaxed mt-2">
              Platform edukasi budaya Indonesia terbaik untuk anak-anak. Belajar dengan cara yang paling menyenangkan, interaktif, dan penuh makna.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Globe size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <PlayCircle size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Share2 size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          
          <div className="flex flex-row gap-16 md:gap-32 lg:gap-40 pt-2">
            <div className="flex flex-col gap-4">
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Tentang Kami</Link>
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Program Sekolah</Link>
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Pusat Bantuan</Link>
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Blog Berita</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Kebijakan Privasi</Link>
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Syarat & Ketentuan</Link>
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Hubungi Kami</Link>
              <Link to="#" className="font-inter text-white/80 text-[15px] hover:text-white transition-colors">Kerjasama</Link>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-start pt-6">
          <p className="font-inter text-xs text-white/60">
            © 2026 Kawanusa - Petualangan Budaya Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
