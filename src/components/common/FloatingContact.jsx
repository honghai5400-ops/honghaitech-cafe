import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from './Icons';

const FloatingContact = () => {
  return (
    <div className="fixed right-6 bottom-10 z-[100] flex flex-col items-center gap-4">
      {/* 24/7 Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="bg-brand-secondary text-white p-3 rounded-2xl shadow-2xl border-2 border-brand-accent flex flex-col items-center justify-center -mb-2 z-10"
      >
        <span className="text-[10px] font-black uppercase tracking-tighter leading-none">Phục vụ</span>
        <span className="text-xl font-black italic text-brand-accent">24/7</span>
      </motion.div>

      {/* Zalo Button */}
      <motion.a
        href="https://zalo.me/0707074095"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#0068ff] rounded-full flex items-center justify-center shadow-2xl cursor-pointer border-2 border-white group"
        title="Chat Zalo"
      >
        <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:0707074095"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative border-2 border-white group overflow-hidden"
        title="Gọi điện ngay"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-white rounded-full z-0"
        />
        <Phone size={24} className="text-white relative z-10 group-hover:scale-110 transition-transform" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;
