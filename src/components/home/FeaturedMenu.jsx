import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from '../common/Icons';
import { categories, featuredProducts } from '../../data/homeData';

const FeaturedMenu = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-[#F9F6F0]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm">Chăm chút từng vị riêng</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-secondary mt-2 mb-8 uppercase tracking-tighter">
            MENU HongHaiTech COFFEE
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-brand-accent text-white shadow-lg' 
                    : 'bg-white text-gray-400 hover:text-brand-secondary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[#FBF7EF] rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-accent transition-all p-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-bold text-brand-secondary uppercase">{product.name}</h3>
                    <span className="text-sm font-bold text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">{product.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2">{product.desc}</p>
                  <button className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase pt-2 group-hover:gap-4 transition-all">
                    Xem chi tiết <ArrowRight size={14} />
                  </button>
                </div>

                {/* Decorative background circle */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-brand-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <a 
            href="/menu" 
            className="inline-block bg-brand-secondary text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-accent transition-all duration-300 shadow-xl"
          >
            Khám phá thực đơn
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
