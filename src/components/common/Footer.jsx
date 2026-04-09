import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <img 
              src="/src/assets/favicon.svg" 
              alt="HongHaiTech Cafe" 
              className="w-48 h-12 object-contain brightness-" 
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              HongHaiTech Cafe - Trải nghiệm cà phê 24/7. Không gian lý tưởng để học tập, làm việc và thư giãn bất kể thời gian nào trong ngày.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider relative before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-10 before:h-1 before:bg-brand-accent">
              Về HongHaiTech
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="/ve-chung-toi" className="hover:text-brand-accent transition-colors">Câu chuyện thương hiệu</a></li>
              <li><a href="/tuyen-dung" className="hover:text-brand-accent transition-colors">Tuyển dụng</a></li>
              <li><a href="/cua-hang" className="hover:text-brand-accent transition-colors">Hệ thống cửa hàng</a></li>
              <li><a href="/hoat-dong" className="hover:text-brand-accent transition-colors">Hoạt động cộng đồng</a></li>
              <li><a href="/contact" className="hover:text-brand-accent transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider relative before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-10 before:h-1 before:bg-brand-accent">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Quy định sử dụng</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Góp ý & Khiếu nại</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">HongHaiTech Membership</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-8 uppercase tracking-wider relative before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-10 before:h-1 before:bg-brand-accent">
              Đăng ký nhận tin
            </h3>
            <p className="text-sm text-gray-300 mb-6">Nhận thông báo về sản phẩm mới và các chương trình ưu đãi sớm nhất.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-white/10 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-brand-accent outline-none text-sm"
              />
              <button className="bg-brand-accent px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-all">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} HONGHAITECH CAFE. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} className="text-brand-accent" />
              <span>0707 074 095</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="text-brand-accent" />
              <span>honghaitechcafe@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
