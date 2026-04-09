import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { heroSlides } from '../../data/homeData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  return (
    <section className="relative h-[600px] md:h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className={`relative z-10 h-full container-custom flex items-center ${index % 2 === 1 ? 'justify-center text-center' : 'justify-start'}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-2xl uppercase">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-8 drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button className="bg-transparent border-2 border-white text-white px-10 py-3 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-brand-secondary transition-all duration-300">
                    Xem thêm
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for Swiper pagination and nav */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
