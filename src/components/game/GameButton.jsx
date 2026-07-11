import { motion } from 'framer-motion';

export default function GameButton({ 
  letter, 
  text, 
  onClick, 
  status = 'default', 
  alignCircle = 'left', 
  disabled = false
}) {

  
  let bgClass = 'bg-white';
  let borderClass = 'border-[#4a7c59]';
  let textClass = 'text-[#5a403f]';
  let circleBgClass = 'bg-[#f7d054]';
  let circleTextClass = 'text-[#5a403f]';

  if (status === 'selected') {
    bgClass = 'bg-[#4a7c59]'; 
    textClass = 'text-white';
    circleBgClass = 'bg-[#e89b25]';
    circleTextClass = 'text-white';
  } else if (status === 'correct') {
    bgClass = 'bg-[#43a047]'; 
    borderClass = 'border-[#2e7d32]';
    textClass = 'text-white';
    circleBgClass = 'bg-white';
    circleTextClass = 'text-[#43a047]';
  } else if (status === 'wrong') {
    bgClass = 'bg-[#e53935]'; 
    borderClass = 'border-[#c62828]';
    textClass = 'text-white';
    circleBgClass = 'bg-white';
    circleTextClass = 'text-[#e53935]';
  }

  const Circle = () => (
    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-cheese-milky text-lg md:text-xl shrink-0 transition-colors border-2 ${status === 'default' ? 'border-[#4a7c59]' : 'border-transparent'} ${circleBgClass} ${circleTextClass}`}>
      {letter}
    </div>
  );

  return (
    <motion.button
      whileHover={!disabled && status === 'default' ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center justify-between px-4 py-3 md:py-4 rounded-xl border-4 transition-all duration-300 shadow-[0_4px_0_rgba(74,124,89,0.3)] ${bgClass} ${borderClass} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {alignCircle === 'left' && <Circle />}
      
      <span className={`font-bricolage font-bold text-base md:text-lg w-full px-4 ${alignCircle === 'left' ? 'text-left' : 'text-right'} ${textClass}`}>
        {text}
      </span>

      {alignCircle === 'right' && <Circle />}
    </motion.button>
  );
}
