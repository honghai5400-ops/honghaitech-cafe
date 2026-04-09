import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../../data/aboutData';

const HomeAbout = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm">Điểm hẹn 24/7 của bạn</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-secondary mt-2 mb-8 uppercase tracking-tighter italic">
              CÀ PHÊ 24H CÙNG <span className="text-brand-accent">HongHaiTech COFFEE</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                {aboutContent.story.content}
              </p>
              <p className="font-bold text-brand-secondary italic border-l-4 border-brand-accent pl-4">
                "HongHaiTech không chỉ bán cà phê, chúng tôi trao đi sự thoải mái và đồng hành cùng bạn trong mọi khoảnh khắc."
              </p>
            </div>
            <div className="pt-8">
              <a href="/about" className="inline-block border-2 border-brand-secondary text-brand-secondary px-10 py-3 font-bold uppercase tracking-widest hover:bg-brand-secondary hover:text-white transition-all duration-300">
                Tìm hiểu thêm
              </a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Main Image */}
            <img 
              src={aboutContent.story.image} 
              alt="HongHaiTech Coffee Interior" 
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover" 
            />
            
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-brand-accent text-white p-8 rounded-2xl shadow-xl hidden md:block animate-float">
              <p className="text-4xl font-black">100%</p>
              <p className="text-sm font-bold uppercase tracking-widest">Năng lượng</p>
            </div>
          </motion.div>
          
          {/* Background circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-bg rounded-full -z-10 opacity-30 group-hover:scale-110 transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
