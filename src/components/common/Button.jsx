
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-kids-word tracking-wider rounded-[20px] transition-transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-bg-light border-6 border-primary text-primary-dark text-xl px-8 py-3',
    secondary: 'bg-white/60 border-3 border-accent-orange text-primary-dark text-base px-6 py-2',
    accent: 'bg-accent-orange text-white text-sm tracking-[2.8px] px-8 py-2 border-2 border-transparent hover:bg-white hover:text-accent-orange hover:border-accent-orange',
    outline: 'bg-transparent border-3 border-accent-yellow text-primary-dark text-base px-6 py-2 hover:bg-accent-yellow/20',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
