import Button from '../ui/Button';

const VisionMission = () => {
  return (
    <div className="bg-brand-secondary rounded-3xl p-12 md:p-20 text-white flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-black uppercase italic tracking-tight underline decoration-brand-accent underline-offset-8">TẦM NHÌN & SỨ MỆNH</h2>
        <p className="text-brand-accent font-black text-xl italic">"Trở thành chuỗi cửa hàng cà phê 24/7 hàng đầu Việt Nam"</p>
        <p className="text-gray-300 leading-relaxed font-medium">
          HongHaiTech nỗ lực không ngừng để mở rộng hệ thống, mang không gian "Study & Chill" đến mọi ngóc ngách của thành phố. Chúng tôi cam kết tạo ra giá trị bền vững cho cộng đồng và khách hàng thông qua những sản phẩm và dịch vụ tốt nhất.
        </p>
        <div className="pt-6">
          <Button variant="white" size="lg">
            Liên hệ nhượng quyền
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute -inset-4 bg-white/5 rounded-full blur-3xl"></div>
        <img 
          src="https://placehold.co/800x800?text=Vision" 
          alt="Vision" 
          className="rounded-full shadow-2xl w-full max-w-md mx-auto relative z-10 animate-float" 
        />
      </div>
    </div>
  );
};

export default VisionMission;
