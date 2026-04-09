const Section = ({ 
  children, 
  className = '', 
  containerClassName = '',
  bg = 'transparent',
  id 
}) => {
  const bgStyles = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    light: 'bg-brand-bg',
    dark: 'bg-brand-secondary',
    coffee: 'bg-brand-primary'
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${bgStyles[bg]} ${className}`}
    >
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
