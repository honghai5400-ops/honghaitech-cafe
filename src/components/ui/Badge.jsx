const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const variants = {
    primary: 'bg-brand-accent text-white',
    dark: 'bg-brand-secondary text-white',
    light: 'bg-brand-bg text-brand-secondary',
    outline: 'border-2 border-brand-accent text-brand-accent'
  };

  return (
    <span className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
