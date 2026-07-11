import { motion } from 'framer-motion';
import { BookOpen, Gamepad2, Home, Info,Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import LogoNavbar from '../../assets/images/Landing Page/02. Logo Navbar.png';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'BERANDA', path: '/', icon: <Home size={18} /> },
    { name: 'JELAJAH BUDAYA', path: '/jelajah-budaya', icon: <Search size={18} /> },
    { name: 'MINI GAMES', path: '/games', icon: <Gamepad2 size={18} /> },
    { name: 'CERITA NUSANTARA', path: '/cerita', icon: <BookOpen size={18} /> },
    { name: 'TENTANG KAMI', path: '/tentang-kami', icon: <Info size={18} /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
      className="w-full bg-[#fdfaf1] border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoNavbar} alt="Kawanusa Logo" className="h-[45px] object-contain" />
        </Link>

        
        <div className="hidden lg:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-kids-word text-[15px] lg:text-[16px] flex items-center gap-2 pb-1 border-b-2 transition-colors ${
                  isActive ? 'text-[#608981] border-[#608981]' : 'text-[#492222] border-transparent hover:text-[#608981] hover:border-[#608981]'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
