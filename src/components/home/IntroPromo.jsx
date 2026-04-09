import React from 'react';
import { motion } from 'framer-motion';

const IntroPromo = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bg rounded-full -mr-32 -mt-32 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-bg rounded-full -ml-48 -mb-48 opacity-50" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm">Ăn khuya - Trò chuyện - Ngủ nghỉ</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-secondary uppercase leading-tight">
            QUÁN CÀ PHÊ MỞ CỬA 24H
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-8" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            HongHaiTech Coffee tự hào là chuỗi cửa hàng cà phê đầu tiên tại Việt Nam tạo ra không gian kết hợp giữa cà phê, 
            ẩm thực và khu vực nghỉ ngơi phục vụ xuyên suốt 24/7. Chúng tôi mang đến cho bạn một "ngôi nhà thứ hai" 
            với sự tiện nghi, ấm cúng và chất lượng dịch vụ hàng đầu.
          </p>
          
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Cửa hàng', value: '25+', unit: 'Hệ thống' },
              { label: 'Phục vụ', value: '24/7', unit: 'Mỗi ngày' },
              { label: 'Thực đơn', value: '100+', unit: 'Món đa dạng' },
              { label: 'Khách hàng', value: '1M+', unit: 'Yêu thích' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-brand-primary">{stat.value}</span>
                <span className="text-xs uppercase font-bold text-gray-400 mt-1 tracking-widest">{stat.label}</span>
                <span className="text-[10px] text-gray-500">{stat.unit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroPromo;
