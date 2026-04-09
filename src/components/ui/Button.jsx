const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-full transition-all transform inline-flex items-center justify-center uppercase tracking-wider active:scale-95';
  
  const variants = {
    primary: 'bg-brand-accent text-white hover:bg-[#E6881A] hover:scale-105 shadow-md',
    dark: 'bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-xl',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    white: 'bg-white text-brand-primary hover:bg-brand-accent hover:text-white shadow-lg'
  };


  const sizes = {
    sm: 'px-4 py-2 text-xs font-black',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
