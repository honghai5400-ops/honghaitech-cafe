const Heading = ({ 
  children, 
  level = 2, 
  align = 'left', 
  underline = false,
  subtitle = '',
  className = '',
  light = false
}) => {
  const Tag = `h${level}`;
  
  const baseStyles = 'font-black uppercase tracking-tight leading-tight';
  
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right'
  };

  const colors = light ? 'text-white' : 'text-brand-secondary';
  
  const sizes = {
    1: 'text-4xl md:text-7xl',
    2: 'text-3xl md:text-5xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl'
  };

  return (
    <div className={`space-y-4 ${alignment[align]} ${className}`}>
      {subtitle && (
        <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm">
          {subtitle}
        </h4>
      )}
      <Tag className={`${baseStyles} ${sizes[level]} ${colors}`}>
        {children}
      </Tag>
      {underline && (
        <div className={`h-1.5 bg-brand-accent rounded-full ${align === 'center' ? 'w-24 mx-auto' : 'w-20'}`}></div>
      )}
    </div>
  );
};

export default Heading;
