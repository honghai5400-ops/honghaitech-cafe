import React from 'react';
import { Facebook, Instagram, TikTok, MapPin, Coffee, ShoppingBag, Info, Phone } from '../components/common/Icons';

const SuperCode = () => {
  const links = [
    { name: 'Khám phá Menu HongHaiTech', icon: <Coffee size={24} />, path: '/thuc-don', color: 'bg-brand-primary' },
    { name: 'Đặt hàng qua ShopeeFood', icon: <ShoppingBag size={24} />, path: 'https://shopeefood.vn', external: true, color: 'bg-orange-500' },
    { name: 'Hệ thống Cửa hàng', icon: <MapPin size={24} />, path: '/cua-hang', color: 'bg-brand-secondary' },
    { name: 'Theo dõi Fanpage Facebook', icon: <Facebook size={24} />, path: 'https://facebook.com/HongHaiTechcoffee', external: true, color: 'bg-blue-600' },
    { name: 'Instagram chính thức', icon: <Instagram size={24} />, path: 'https://instagram.com/HongHaiTechcoffee', external: true, color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' },
    { name: 'HongHaiTech on TikTok', icon: <TikTok size={24} />, path: 'https://tiktok.com/@HongHaiTechcoffee', external: true, color: 'bg-black' },
    { name: 'Tuyển dụng đồng hành', icon: <Info size={24} />, path: '/career', color: 'bg-teal-600' },
    { name: 'Hotline: 0707 014 095', icon: <Phone size={24} />, path: 'tel:0707014095', color: 'bg-brand-accent' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-20 px-4">
      <div className="max-w-md mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl mx-auto overflow-hidden">
             <img src="https://HongHaiTechcoffee.com/wp-content/uploads/2023/12/logo-HongHaiTech.png" alt="HongHaiTech" className="w-full h-full object-contain p-4 bg-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-brand-secondary tracking-tighter">HongHaiTech COFFEE & TEA</h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Mở cửa 24/7 - Study & Chill</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className={`${link.color} w-full flex items-center gap-4 p-5 rounded-2xl text-white font-bold shadow-lg hover:scale-105 transition-all text-sm md:text-base border-2 border-white/10`}
            >
              <div className="bg-white/20 p-2 rounded-xl">
                {link.icon}
              </div>
              <span className="flex-grow">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-center space-y-4 pt-8">
           <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-loose">
             © 2026 HongHaiTech COFFEE & TEA <br/>
             Powered by Antigravity Agents
           </p>
        </div>
      </div>
    </div>
  );
};

export default SuperCode;
