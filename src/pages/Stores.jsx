import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from '../components/common/Icons';
import { regions, storesData } from '../data/storesDataContent';

const Stores = () => {
  const [activeRegion, setActiveRegion] = useState('TPHCM');

  const filteredStores = storesData ? storesData.filter(s => s.region === activeRegion) : [];

  return (
    <div className="pt-20 md:pt-24 pb-20 bg-[#F9F6F0]">
      {/* Header section */}
      <section className="bg-white py-16 shadow-sm mb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-black text-brand-secondary uppercase tracking-tighter italic">
            HỆ THỐNG <span className="text-brand-accent">CỬA HÀNG</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-4">Tìm ngay không gian HongHaiTech gần bạn nhất</p>
        </div>
      </section>

      <div className="container-custom">
        {/* Region Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-2 rounded-full shadow-lg overflow-x-auto max-w-full">
            {regions && regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`whitespace-nowrap px-8 py-3 rounded-full font-bold text-sm tracking-wider transition-all ${
                  activeRegion === region.id 
                    ? 'bg-brand-secondary text-white shadow-md' 
                    : 'text-gray-400 hover:text-brand-secondary'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <motion.div
                  key={store.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group"
                >
                  {/* Store Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={store.image} 
                      alt={store.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Mở cửa 24/7
                    </div>
                  </div>

                  {/* Store Info */}
                  <div className="p-8 space-y-6">
                    <h3 className="text-xl font-black text-brand-secondary uppercase leading-tight group-hover:text-brand-accent transition-colors">
                      {store.name}
                    </h3>
                    
                    <div className="space-y-4 text-sm text-gray-500 font-medium">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{store.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-brand-accent shrink-0" />
                        <span>{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={18} className="text-brand-accent shrink-0" />
                        <span>Phục vụ 24/24 - Ăn khuya & Nghỉ ngơi</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a 
                        href={store.mapUrl} 
                        className="flex items-center justify-center gap-2 w-full py-3 bg-brand-bg text-brand-secondary rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-brand-secondary hover:text-white transition-all"
                      >
                        Dẫn đường <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
                Chưa có cửa hàng tại khu vực này
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Stores;
