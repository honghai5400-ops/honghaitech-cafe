import defaultBanner from '../../assets/page_banner_generic.jpg';

const PageBanner = ({ title, subtitle, bgImage = defaultBanner, height = 'h-64' }) => {
  return (
    <section className={`relative ${height} bg-brand-secondary flex items-center justify-center overflow-hidden`}>
      {bgImage && (
        <img 
          src={bgImage} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
      )}
      <div className="relative z-10 text-center space-y-4 px-4">
        {subtitle && (
          <h4 className="text-brand-accent font-bold uppercase tracking-widest animate-fade-in">
            {subtitle}
          </h4>
        )}
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
