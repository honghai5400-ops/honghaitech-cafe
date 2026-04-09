import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import IntroPromo from '../components/home/IntroPromo';
import FeaturedMenu from '../components/home/FeaturedMenu';
import HomeAbout from '../components/home/HomeAbout';
import { activityList } from '../data/activitiesData';

// Quick sub-component for the Blog/Activities section
const ActivitiesPreview = () => (
  <section className="py-20 bg-white">
    <div className="container-custom">
      <h2 className="text-center text-3xl md:text-4xl font-black text-brand-secondary mb-12 uppercase tracking-tight">
        HongHaiTech Coffee - Cà phê 24h tại TP. HCM
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {activityList.map((article, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-3xl mb-6 overflow-hidden relative shadow-lg">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold uppercase tracking-widest text-lg">Khám phá hoạt động</span>
              </div>
              <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full absolute top-6 right-6 flex items-center justify-center text-brand-accent shadow-xl group-hover:bg-brand-accent group-hover:text-white transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </div>
            </div>
            <p className="text-sm text-brand-accent font-bold mb-3 uppercase tracking-widest">{article.date}</p>
            <h3 className="text-2xl font-black text-brand-secondary group-hover:text-brand-accent transition-colors uppercase leading-tight">
              {article.title}
            </h3>
            <p className="text-gray-500 mt-2 line-clamp-2">{article.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Quick sub-component for the Recruitment section
const RecruitmentBanner = () => (
  <section className="py-24 bg-brand-bg">
    <div className="container-custom">
      <div className="bg-brand-secondary rounded-[60px] px-12 py-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/20 rounded-full -mr-40 -mt-40 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/20 rounded-full -ml-40 -mb-40 blur-3xl animate-pulse" />
        
        <div className="relative z-10">
          <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-sm mb-6 block">Be part of our family</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">TUYỂN DỤNG <br/>HongHaiTech COFFEE</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Gia nhập đại gia đình HongHaiTech để cùng chúng tôi kiến tạo những trải nghiệm tuyệt vời nhất cho khách hàng tại không gian 24/7.
          </p>
          <a 
            href="/tuyen-dung"
            className="inline-block bg-brand-accent text-white px-16 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(23,191,156,0.3)] active:scale-95"
          >
            Ứng tuyển ngay
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <HeroSlider />
      <IntroPromo />
      <FeaturedMenu />
      <ActivitiesPreview />
      <RecruitmentBanner />
      <HomeAbout />
    </div>
  );
};

export default Home;
