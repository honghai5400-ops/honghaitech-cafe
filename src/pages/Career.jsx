import React from 'react';
import { motion } from 'framer-motion';
import { careerData } from '../data/careerData';
import pageBanner from '../assets/page_banner_generic.jpg';

const Career = () => {
  return (
    <div className="pt-20 md:pt-24 pb-20 bg-[#F9F6F0]">
      {/* Header Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src={pageBanner} 
          alt="Career at HongHaiTech" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Tuyển dụng
          </motion.h1>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-4" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-secondary uppercase mb-8">Gia nhập đội ngũ HongHaiTech</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn chào đón những tâm hồn nhiệt huyết, yêu thích không gian 24/7 và mong muốn mang lại niềm vui cho khách hàng. 
            Tại HongHaiTech, bạn không chỉ làm việc, bạn đang cùng chúng tôi xây dựng một cộng đồng.
          </p>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerData.jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-brand-accent group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">{job.location}</span>
                    <h3 className="text-2xl font-black text-brand-secondary mt-1 uppercase group-hover:text-brand-accent transition-colors">{job.title}</h3>
                  </div>
                  <span className="bg-brand-bg text-brand-secondary px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-500 mb-8 line-clamp-3">{job.desc}</p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <span className="text-brand-secondary font-black">{job.salary}</span>
                  <button className="bg-brand-secondary text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-accent transition-all">
                    Ứng tuyển
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
