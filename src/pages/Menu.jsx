import React, { useState } from 'react';
import {  AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingBag } from '../components/common/Icons';
import { menuCategories, menuProducts } from '../data/menuDataContent';
import { motion } from 'framer-motion';
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = menuProducts.filter(p => {
    const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 md:pt-24 pb-20 bg-[#F9F6F0]">
      {/* Search & Filter Header */}
      <section className="bg-white py-12 shadow-sm mb-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-black text-brand-secondary uppercase tracking-tighter italic">
                THỰC ĐƠN <span className="text-brand-accent">HongHaiTech</span>
              </h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">Hương vị tuyệt hảo phục vụ 24/7</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Tìm sản phẩm..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-brand-bg border-none focus:ring-2 focus:ring-brand-accent outline-none text-brand-secondary font-bold"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent" size={20} />
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom flex flex-col lg:flex-row gap-12">
        {/* Categories Sidebar */}
        <aside className="lg:w-1/4 space-y-8">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl sticky top-32">
            <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
              <Filter size={20} className="text-brand-accent" />
              <h2 className="text-lg font-black text-brand-secondary uppercase tracking-wider">Danh mục</h2>
            </div>
            <div className="flex flex-col gap-2">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-brand-secondary text-white shadow-lg translate-x-2' 
                      : 'text-gray-400 hover:text-brand-secondary hover:bg-gray-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Promo card in sidebar */}
            <div className="mt-12 bg-brand-accent rounded-2xl p-6 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Member Only</p>
                <h3 className="text-xl font-black leading-tight mb-4">GIẢM 20% CHO HÓA ĐƠN TRÊN 200K</h3>
                <button className="bg-white text-brand-accent px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-brand-secondary hover:text-white transition-colors">
                  Dùng ngay
                </button>
              </div>
              <ShoppingBag className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="lg:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl p-6 flex flex-col shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="aspect-square bg-brand-bg rounded-2xl mb-6 overflow-hidden p-4 group-hover:p-2 transition-all duration-500">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-500" 
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-lg font-black text-brand-secondary uppercase line-clamp-1 group-hover:text-brand-accent transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 h-8">{p.desc}</p>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-xl font-black text-brand-secondary">{p.price}</span>
                      <button className="bg-brand-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-all shadow-lg">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                  
                  {/* "Hot" badge placeholder if needed */}
                  {p.id === 1 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      Best Seller
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl shadow-inner mt-8">
              <Search className="mx-auto text-gray-200 mb-4" size={64} />
              <p className="text-gray-400 font-bold uppercase tracking-widest">Không tìm thấy sản phẩm phù hợp</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Menu;
