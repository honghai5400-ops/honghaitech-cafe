import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent, coreValues } from '../data/aboutData';
import pageBanner from '../assets/page_banner_generic.jpg';

const About = () => {
  return (
    <div className="pt-20 md:pt-24 pb-20 bg-[#F9F6F0]">
      {/* Header Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src={pageBanner} 
          alt="About HongHaiTech" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Về chúng tôi
          </motion.h1>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-4" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-secondary uppercase">{aboutContent.story.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutContent.story.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-accent uppercase">{aboutContent.vision.title}</h3>
                <p className="text-gray-600 italic">
                  {aboutContent.vision.content}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-accent uppercase">{aboutContent.mission.title}</h3>
                <p className="text-gray-600 italic">
                  {aboutContent.mission.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <img 
                  src={aboutContent.story.image} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-secondary text-white">
        <div className="container-custom">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-16 uppercase">GIÁ TRỊ CỐT LÕI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {coreValues.map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="w-20 h-20 bg-brand-accent rounded-full mx-auto flex items-center justify-center text-3xl font-black">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold uppercase">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
